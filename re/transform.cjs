// Split the minified Vite bundle into: vendored three.js + renamed app modules.
const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

const SRC = 'app.pretty.js';
const OUT = path.resolve(__dirname, '../src/app');
const APP_START = 23988;

const RENAME = {
  lu: 'addBoxMesh', fu: 'CarMesh', pu: 'obbCorners', mu: 'obbOverlap',
  Y: 'AREA', hu: 'STREET', gu: 'NPC_DRIVE', _u: 'STEER_RATE',
  vu: 'PRICES', yu: 'VEHICLES', bu: 'CAR_COLORS', xu: 'DRIVERS',
  X: 'STRINGS', Z: 'pickLang', Q: 'tr', Su: 'formatMoney',
  wu: 'COLOR_ASPHALT', Tu: 'COLOR_ASPHALT_LIGHT',
  Eu: 'arcGeometry', Du: 'signTexture', Ou: 'GuideHud',
  ju: 'detectLang', Mu: 'LANG', Nu: 'langListeners', Pu: 'getLang',
  Fu: 'byLang', Iu: 'applyI18n', Lu: 'setLang', Ru: 'onLangChange',
  zu: 'mergeGeometries', Bu: 'mergeAttributes', Vu: 'vertexColorMaterial',
  Wu: 'drawCanvasSign', Gu: 'disposeTree', sd: 'crowdFigure', cd: 'swayProp',
  dd: 'patrolTruck', pd: 'Crowd', hd: 'AStarPlanner', gd: 'obstacleRects',
  _d: 'isBlocked', Cd: 'astarSearch', Id: 'captureFrame', Bd: 'drawWorldLabels',
  Rf: 'AudioEngine', Jf: 'Speech', Bf: 'World', wf: 'HUD', Cf: 'Game',
  Af: 'bindInput', If: 'buildWorldMeshes', Qf: 'View', Sf: 'polylineSamples',
  df: 'pathLength', mf: 'rank', pf: 'randRange', hf: 'HIDING_SPOT',
  ku: 'I18N_TABLE', Au: 'TZ_INDONESIA', Cu: 'Driver',
};

const MODULES = {
  content: ['Y', 'hu', 'gu', '_u', 'vu', 'yu', 'bu', 'xu', 'X', 'Z', 'Q', 'Su',
    'wu', 'Tu', 'ju', 'Mu', 'Nu', 'Pu', 'Fu', 'Iu', 'Lu', 'Ru', 'ku', 'Au', 'Cu'],
  engine: ['lu', 'uu', 'du', 'fu', 'pu', 'mu', 'Eu', 'Du', 'Ou', 'zu', 'Bu', 'Vu',
    'Hu', 'Uu', 'Wu', 'Gu', 'Ku', 'qu', 'Ju', 'Yu', 'Xu', 'Zu', 'Qu',
    '$u', 'ed', 'td', 'nd', 'rd', 'id', 'ad', 'od', 'sd', 'cd', 'ld', 'ud',
    'fd', 'pd', 'md', 'hd', 'gd', '_d', 'vd', 'yd', 'bd', 'xd', 'Sd', 'Cd',
    'wd', 'Td', 'Ed', 'Dd', 'Od', 'kd', 'Ad', 'jd', 'Md', 'Nd', 'Pd', 'Fd',
    'Id', 'Ld', 'Rd', 'zd', 'Bd', 'Vd',
    'Hd', 'Ud', 'Wd', 'Gd', 'Kd', 'qd', 'Jd', 'Yd', 'Xd', 'Zd', 'Qd', '$d',
    'ef', 'tf', 'nf', 'rf', 'af', 'of', 'sf', 'cf', 'lf', 'uf',
    'df', 'ff', 'pf', 'mf', 'hf', 'gf', '_f', 'vf', 'yf', 'bf', 'xf', 'Sf',
    'Ff', 'If', 'Qf', 'Bf', 'dd', 'jf', 'Mf', 'Nf', 'Pf'],
  game: ['Cf', 'wf', 'Af', 'Df', 'Of', '$', 'Tf', 'Ef', 'kf'],
  audio: ['Lf', 'Rf', 'Jf', 'Vf', 'Hf', 'Uf', 'Wf', 'Gf', 'Kf', 'qf', 'Xf', 'Zf', 'zf', 'Yf'],
};

const src = fs.readFileSync(SRC, 'utf8');
const ast = parser.parse(src, { sourceType: 'module' });

const preVendorNames = new Set();
for (const n of ast.program.body) {
  if (n.loc.start.line >= APP_START) continue;
  if (n.type === 'VariableDeclaration') n.declarations.forEach(d => d.id && d.id.type === 'Identifier' && preVendorNames.add(d.id.name));
  if ((n.type === 'FunctionDeclaration' || n.type === 'ClassDeclaration') && n.id) preVendorNames.add(n.id.name);
}
const SAFE_RENAME = {};
for (const [o, n] of Object.entries(RENAME)) SAFE_RENAME[o] = preVendorNames.has(n) ? n + 'App' : n;
if (SAFE_RENAME.tr) SAFE_RENAME.Q = 'translate';
for (const [o, n] of Object.entries(RENAME)) if (RENAME[o] !== SAFE_RENAME[o]) console.log('rename collision:', o, n, '->', SAFE_RENAME[o]);
Object.assign(RENAME, SAFE_RENAME);

traverse(ast, {
  Program: {
    exit(p) {
      for (const [oldName, newName] of Object.entries(SAFE_RENAME)) {
        if (p.scope.hasOwnBinding(oldName)) p.scope.rename(oldName, newName);
      }
    },
  },
});

const body = ast.program.body;
const splitIdx = body.findIndex(n => n.loc.start.line >= APP_START);
const vendorNodes = body.slice(0, splitIdx);
const appNodes = body.slice(splitIdx);

const collectNames = nodes => {
  const s = new Set();
  for (const n of nodes) {
    if (n.type === 'VariableDeclaration') n.declarations.forEach(d => d.id && d.id.type === 'Identifier' && s.add(d.id.name));
    if ((n.type === 'FunctionDeclaration' || n.type === 'ClassDeclaration' || n.type === 'FunctionExpression') && n.id) s.add(n.id.name);
  }
  return s;
};
const vendorNames = collectNames(vendorNodes);

// flatten multi-declarator statements
const flat = [];
for (const n of appNodes) {
  if (n.type === 'VariableDeclaration' && n.declarations.length > 1) n.declarations.forEach(d => flat.push(t.variableDeclaration(n.kind, [d])));
  else flat.push(n);
}

const nameToModule = new Map();
for (const [mod, names] of Object.entries(MODULES)) for (const nm of names) nameToModule.set(RENAME[nm] || nm, mod);
const assigned = { content: [], engine: [], game: [], audio: [], boot: [] };
const unknown = [];
for (const n of flat) {
  let nm = null;
  if (n.type === 'VariableDeclaration') nm = n.declarations[0].id.name;
  else if (n.type === 'FunctionDeclaration' || n.type === 'ClassDeclaration') nm = n.id && n.id.name;
  const mod = nm ? nameToModule.get(nm) : null;
  if (mod) assigned[mod].push(n);
  else if (n.type !== 'ExpressionStatement' && nm) { unknown.push(nm); assigned.boot.push(n); }
  else assigned.boot.push(n);
}
if (unknown.length) console.log('unmapped -> boot:', unknown.join(', '));

const moduleBindings = {};
for (const mod of Object.keys(assigned)) moduleBindings[mod] = collectNames(assigned[mod]);

const code = nodes => generate({ type: 'Program', body: nodes, sourceType: 'module' }, { comments: false }).code;

// what does a chunk reference from outside itself?
const externalRefs = (nodes, localNames) => {
  const out = new Set();
  const chunkAst = parser.parse(code(nodes), { sourceType: 'module' });
  traverse(chunkAst, {
    ReferencedIdentifier(p) {
      const nm = p.node.name;
      if (localNames.has(nm)) return;
      if (p.scope.hasBinding(nm)) return;
      out.add(nm);
    },
  });
  return out;
};

const INTERNAL = ['content', 'engine', 'game', 'audio'];
const files = {};
const vendorUsedBy = new Map(); // module -> Set

for (const mod of INTERNAL) {
  const nodes = assigned[mod];
  const refs = externalRefs(nodes, moduleBindings[mod]);
  const importsByMod = {};
  const vendorNeeded = [];
  for (const nm of refs) {
    const owner = INTERNAL.find(m => m !== mod && moduleBindings[m].has(nm));
    if (owner) (importsByMod[owner] ||= []).push(nm);
    else if (vendorNames.has(nm)) vendorNeeded.push(nm);
  }
  vendorUsedBy.set(mod, new Set(vendorNeeded));
  const imports = Object.entries(importsByMod).map(([o, ns]) => `import { ${ns.sort().join(', ')} } from './${o}.js';`).join('\n');
  const vendorImport = vendorNeeded.length ? `import { ${vendorNeeded.sort().join(', ')} } from '../vendor/three.js';` : '';
  const exports = [...moduleBindings[mod]].sort();
  files[mod] = `// ${mod}.js — auto-split from assets/index-B84SUXf5.js; see docs/MECHANICS.md\n${imports}\n${vendorImport}\n\n${code(nodes)}\n\nexport { ${exports.join(', ')} };\n`;
}

// boot
{
  const nodes = assigned.boot;
  const refs = externalRefs(nodes, new Set());
  const importsByMod = {};
  const vendorNeeded = [];
  for (const nm of refs) {
    const owner = INTERNAL.find(m => moduleBindings[m].has(nm));
    if (owner) (importsByMod[owner] ||= []).push(nm);
    else if (vendorNames.has(nm)) vendorNeeded.push(nm);
  }
  const imports = Object.entries(importsByMod).map(([o, ns]) => `import { ${ns.sort().join(', ')} } from './${o}.js';`).join('\n');
  files.boot = `// boot.js — entry point: wires view, world, HUD, audio, game, input.\n${imports}\n` +
    (vendorNeeded.length ? `import { ${vendorNeeded.sort().join(', ')} } from '../vendor/three.js';\n` : '') +
    `\n${code(nodes)}\n`;
}

// vendor
const allVendorUsed = new Set();
const allAppText = Object.values(files).map(c => c.split('\n').filter(l => !l.startsWith('import')).join('\n')).join('\n');
for (const n of vendorNames) {
  const esc = n.replace(/\$/g, '\\$');
  if (new RegExp(`(^|[^\\w$.])${esc}([^\\w$]|$)`, 'm').test(allAppText)) allVendorUsed.add(n);
}
// names referenced from the vendor side that were imported must also be exported; imports are explicit already
for (const s of vendorUsedBy.values()) for (const n of s) allVendorUsed.add(n);

fs.mkdirSync(path.join(__dirname, '../src/vendor'), { recursive: true });
fs.writeFileSync(path.join(__dirname, '../src/vendor/three.js'),
  `// Vendored Three.js chunk lifted verbatim from the production bundle (minified internal names).\n// Do not edit; app code imports from here.\n${code(vendorNodes)}\n\nexport { ${[...allVendorUsed].sort().join(', ')} };\n`);

fs.mkdirSync(OUT, { recursive: true });
for (const [mod, c] of Object.entries(files)) fs.writeFileSync(path.join(OUT, mod + '.js'), c);
console.log('vector exports:', allVendorUsed.size);
for (const m of Object.keys(files)) console.log(m, (files[m].match(/\n/g) || []).length, 'lines');
