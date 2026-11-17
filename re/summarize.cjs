// Summarize top-level declarations in the app region: size, member props, strings.
const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

const src = fs.readFileSync('app.pretty.js', 'utf8');
const ast = parser.parse(src, { sourceType: 'module', errorRecovery: true });
const APP_START = 23987;

const decls = [];
for (const node of ast.program.body) {
  const line = node.loc.start.line;
  if (line < APP_START) continue;
  let names = [];
  if (node.type === 'VariableDeclaration') names = node.declarations.map(d => d.id.name).filter(Boolean);
  else if (node.type === 'FunctionDeclaration' || node.type === 'ClassDeclaration') names = [node.id.name];
  if (!names.length) continue;
  decls.push({ names, line, end: node.loc.end.line, props: new Map(), strs: new Map() });
}
const findDecl = l => { for (let i = decls.length - 1; i >= 0; i--) if (l >= decls[i].line && l <= decls[i].end) return decls[i]; return null; };

traverse(ast, {
  MemberExpression(p) {
    const n = p.node;
    if (n.computed || n.property.type !== 'Identifier') return;
    const d = findDecl(n.loc.start.line); if (!d) return;
    const k = n.property.name; d.props.set(k, (d.props.get(k) || 0) + 1);
  },
  StringLiteral(p) {
    const v = p.node.value;
    if (v.length <= 2 || v.length >= 40 || !/[a-zA-Z]/.test(v)) return;
    const d = findDecl(p.node.loc.start.line); if (!d) return;
    d.strs.set(v, (d.strs.get(v) || 0) + 1);
  },
});

const out = decls.map(d => {
  const topProps = [...d.props].sort((a, b) => b[1] - a[1]).slice(0, 12).map(([k, v]) => k + ':' + v).join(' ');
  const topStrs = [...d.strs].sort((a, b) => b[1] - a[1]).slice(0, 7).map(([k]) => JSON.stringify(k)).join(' ');
  return `${d.line}-${d.end} ${d.names.join(',')} (${d.end - d.line + 1}L)\n  p: ${topProps}\n  s: ${topStrs}`;
});
fs.writeFileSync('decls.txt', out.join('\n'));
console.log('decls:', decls.length, 'app lines:', decls.reduce((a, d) => a + d.end - d.line + 1, 0));
