// engine.js — auto-split from assets/index-B84SUXf5.js; see docs/MECHANICS.md
import {
  AREA,
  CAR_COLORS,
  COLOR_ASPHALT,
  COLOR_ASPHALT_LIGHT,
  PRICES,
  STEER_RATE,
  STREET,
  VEHICLES,
  formatMoney,
  pickLang,
  trApp,
} from "./content.js";
import { Xf, Yf, Zf, zf } from "./audio.js";
import {
  Fa,
  Fr,
  H,
  Hr,
  K,
  Na,
  No,
  Nt,
  Pa,
  U,
  Ut,
  Yi,
  Yn,
  _i,
  cn,
  cu,
  di,
  dt,
  ei,
  gi,
  gn,
  hi,
  jo,
  qa,
  su,
  ur,
  vo,
  xr,
  ze,
} from "../vendor/three.js";

function addBoxMesh(e, t, n, r, i, a, o, s = !0) {
  let c = new ei(new hi(e, t, n), r);
  return (c.position.set(i, a, o), (c.castShadow = s), c);
}
var uu = 0.28;
var du = 0.32;
var CarMesh = class {
  constructor(e, t) {
    ((this.def = e),
      (this.color = t),
      (this.group = new cn()),
      (this.x = 0),
      (this.z = 0),
      (this.heading = 0),
      (this.v = 0),
      (this.steer = 0),
      (this.rects = []),
      (this.pivots = []),
      (this.wheels = []),
      (this.body = new cn()),
      (this.doorPivot = new cn()),
      (this.door = 0),
      (this.doorTo = 0),
      (this.pitch = 0),
      (this.pitchV = 0),
      (this.roll = 0),
      (this.rollV = 0),
      (this.lastV = 0));
    let n = e,
      r = this.body;
    (this.group.add(r), (this.bodyCz = -n.rearOverhang + n.length / 2));
    let i = -n.rearOverhang,
      a = i + n.length,
      o = cu(t),
      s = cu(2043194),
      c = uu + n.bodyH;
    (r.add(addBoxMesh(n.width, n.bodyH, n.length, o, 0, uu + n.bodyH / 2, this.bodyCz)),
      r.add(
        addBoxMesh(
          n.width + 0.06,
          0.16,
          n.length + 0.08,
          cu(2829099),
          0,
          0.36000000000000004,
          this.bodyCz,
          !1,
        ),
      ));
    let l = this.bodyCz + n.cabin.off;
    r.add(addBoxMesh(n.width - 0.18, n.cabin.h, n.cabin.len, s, 0, c + n.cabin.h / 2, l));
    let u = Math.min(1, n.wheelbase * 0.42);
    if (
      (this.doorPivot.position.set(-n.width / 2 - 0.03, uu + n.bodyH * 0.52, n.wheelbase * 0.8),
      this.doorPivot.add(addBoxMesh(0.05, n.bodyH * 0.86, u, o, 0, 0, -u / 2, !1)),
      this.doorPivot.add(
        addBoxMesh(0.05, 0.05, 0.16, cu(2236962), -0.04, n.bodyH * 0.2, -u + 0.18, !1),
      ),
      r.add(this.doorPivot),
      r.add(addBoxMesh(n.width - 0.1, 0.08, n.cabin.len - 0.25, o, 0, c + n.cabin.h + 0.04, l, !1)),
      this.rects.push({
        cz: this.bodyCz,
        hx: n.width / 2,
        hz: n.length / 2,
      }),
      n.cargo)
    ) {
      let e = l - n.cabin.len / 2,
        t = e - i;
      r.add(addBoxMesh(n.width - 0.24, 0.04, t - 0.12, cu(3815994), 0, c + 0.02, i + t / 2, !1));
      let a = t + n.cargo.overhang,
        o = cu(13938762);
      for (let t of [-0.15, 0, 0.15]) {
        let n = new ei(new gi(0.06, 0.06, a, 6), o);
        ((n.rotation.x = Math.PI / 2),
          n.position.set(t, c + 0.12 + (t === 0 ? 0.1 : 0), e - a / 2),
          (n.castShadow = !0),
          r.add(n));
      }
      (r.add(
        addBoxMesh(0.3, 0.3, 0.04, cu(15087942), 0, c + 0.08, i - n.cargo.overhang - 0.03, !1),
      ),
        this.rects.push({
          cz: i - n.cargo.overhang / 2,
          hx: n.cargo.width / 2,
          hz: n.cargo.overhang / 2,
        }));
    }
    let d = uu + n.bodyH * 0.62,
      f = n.width / 2 - 0.3,
      p = cu(16774856, {
        emissive: 16773808,
        emissiveIntensity: 0.9,
      });
    ((this.tail = cu(11538464, {
      emissive: 3342336,
    })),
      (this.rev = cu(14540253, {
        emissive: 1118481,
      })));
    for (let e of [-1, 1])
      (r.add(addBoxMesh(0.34, 0.16, 0.06, p, e * f, d, a + 0.01, !1)),
        r.add(addBoxMesh(0.34, 0.16, 0.06, this.tail, e * f, d, i - 0.01, !1)));
    r.add(addBoxMesh(0.3, 0.1, 0.06, this.rev, 0, d, i - 0.01, !1));
    let m = cu(1447446),
      h = cu(12172998),
      g = new gi(du, du, 0.24, 12);
    g.rotateZ(Math.PI / 2);
    let _ = new hi(0.26, 0.09, du * 1.5),
      v = () => {
        let e = new ei(g, m);
        return (e.add(new ei(_, h)), this.wheels.push(e), e);
      };
    for (let e of [-1, 1]) {
      let t = e * (n.width / 2 - 0.1),
        r = v();
      (r.position.set(t, du, 0), this.group.add(r));
      let i = new cn();
      (i.position.set(t, du, n.wheelbase), i.add(v()), this.group.add(i), this.pivots.push(i));
    }
  }
  animate(e) {
    if (e <= 0) return;
    ((this.door += Math.max(-e * 4, Math.min(e * 4, this.doorTo - this.door))),
      (this.doorPivot.rotation.y = this.door * 1.15));
    let t = Math.max(-12, Math.min(12, (this.v - this.lastV) / e));
    this.lastV = this.v;
    let n = (this.v * this.v * Math.tan(this.steer)) / this.def.wheelbase,
      r = Math.max(-0.06, Math.min(0.06, -t * 0.011)),
      i = Math.max(-0.07, Math.min(0.07, n * 0.03));
    ((this.pitchV += (-90 * (this.pitch - r) - 9 * this.pitchV) * e),
      (this.pitch += this.pitchV * e),
      (this.rollV += (-90 * (this.roll - i) - 9 * this.rollV) * e),
      (this.roll += this.rollV * e),
      this.body.rotation.set(this.pitch, 0, this.roll));
    let a = (this.v / du) * e;
    for (let e of this.wheels) e.rotation.x += a;
  }
  jolt(e, t = 0) {
    ((this.pitchV += e), (this.rollV += t));
  }
  setPose(e, t, n) {
    ((this.x = e), (this.z = t), (this.heading = n), this.sync());
  }
  setBodyCenter(e, t, n) {
    this.setPose(e - Math.sin(n) * this.bodyCz, t - Math.cos(n) * this.bodyCz, n);
  }
  step(e, t, n, r, i, a) {
    let o = (Math.abs(t) < Math.abs(this.v) || t * this.v < 0 ? a : i) * e;
    this.v += Math.max(-o, Math.min(o, t - this.v));
    let s = r * e;
    ((this.steer += Math.max(-s, Math.min(s, n - this.steer))),
      (this.heading += (this.v / this.def.wheelbase) * Math.tan(this.steer) * e),
      (this.x += this.v * Math.sin(this.heading) * e),
      (this.z += this.v * Math.cos(this.heading) * e));
  }
  sync() {
    (this.group.position.set(this.x, 0, this.z), (this.group.rotation.y = this.heading));
    for (let e of this.pivots) e.rotation.y = this.steer;
  }
  setLights(e, t) {
    (this.tail.emissive.setHex(e ? 16718362 : 3342336),
      this.rev.emissive.setHex(t ? 16777215 : 1118481));
  }
  footprint() {
    return {
      rects: this.rects.map((e) => ({
        ...e,
      })),
      wheelbase: this.def.wheelbase,
    };
  }
  doorPoint() {
    let e = -(this.def.width / 2 + 0.55),
      t = this.def.wheelbase * 0.5,
      n = Math.sin(this.heading),
      r = Math.cos(this.heading);
    return [this.x + n * t + r * e, this.z + r * t - n * e];
  }
  bodyCenter() {
    return [
      this.x + Math.sin(this.heading) * this.bodyCz,
      this.z + Math.cos(this.heading) * this.bodyCz,
    ];
  }
  bodyObb() {
    return this.obbs()[0];
  }
  obbs() {
    return this.obbsAt(this.x, this.z, this.heading);
  }
  obbsAt(e, t, n, r = 0) {
    let i = Math.sin(n),
      a = Math.cos(n);
    return this.rects.map((o) => ({
      x: e + i * o.cz,
      z: t + a * o.cz,
      hx: o.hx + r,
      hz: o.hz + r,
      rot: n,
    }));
  }
};
function obbCorners(e) {
  let t = Math.cos(e.rot),
    n = Math.sin(e.rot),
    r = [];
  for (let [i, a] of [
    [1, 1],
    [1, -1],
    [-1, -1],
    [-1, 1],
  ]) {
    let o = i * e.hx,
      s = a * e.hz;
    r.push([e.x + t * o + n * s, e.z - n * o + t * s]);
  }
  return r;
}
function obbOverlap(e, t) {
  let n = Math.cos(e.rot),
    r = Math.sin(e.rot),
    i = Math.cos(t.rot),
    a = Math.sin(t.rot),
    o = [
      [n, -r],
      [r, n],
      [i, -a],
      [a, i],
    ],
    s = t.x - e.x,
    c = t.z - e.z;
  for (let [l, u] of o) {
    let o = e.hx * Math.abs(n * l - r * u) + e.hz * Math.abs(r * l + n * u),
      d = t.hx * Math.abs(i * l - a * u) + t.hz * Math.abs(a * l + i * u);
    if (Math.abs(s * l + c * u) > o + d) return !1;
  }
  return !0;
}
function arcGeometry(e) {
  let t = 1.7,
    n = [],
    r = [],
    i = new H(),
    a = new H();
  for (let o = 0; o <= 10; o++) {
    let s = (o / 10) * 0.95,
      c = new H(e * (1.92 - t * Math.cos(s)), t * Math.sin(s)),
      l = new H(e * Math.sin(s), Math.cos(s)),
      u = new H(l.y, -l.x);
    (n.push(c.clone().addScaledVector(u, -0.13)),
      r.push(c.clone().addScaledVector(u, 0.13)),
      (i = c),
      (a = l));
  }
  let o = new H(a.y, -a.x),
    s = new Yi();
  s.moveTo(n[0].x, n[0].y);
  for (let e of n) s.lineTo(e.x, e.y);
  (s.lineTo(i.x - o.x * 0.36, i.y - o.y * 0.36),
    s.lineTo(i.x + a.x * 0.5, i.y + a.y * 0.5),
    s.lineTo(i.x + o.x * 0.36, i.y + o.y * 0.36));
  for (let e = r.length - 1; e >= 0; e--) s.lineTo(r[e].x, r[e].y);
  let c = new Fa(s);
  return (c.rotateX(Math.PI / 2), c);
}
function signTexture(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = 256), (n.height = 96));
  let r = n.getContext(`2d`);
  ((r.fillStyle = `#` + t.toString(16).padStart(6, `0`)),
    r.beginPath(),
    r.roundRect(6, 6, 244, 84, 40),
    r.fill(),
    (r.strokeStyle = `#ffffff`),
    (r.lineWidth = 8),
    r.stroke(),
    (r.fillStyle = `#ffffff`),
    (r.font = `900 54px "Arial Black", "Helvetica Neue", Arial, sans-serif`),
    (r.textAlign = `center`),
    (r.textBaseline = `middle`),
    r.fillText(e, 128, 52));
  let i = new di(n);
  i.colorSpace = ze;
  let a = new Fr(
    new xr({
      map: i,
      depthTest: !1,
      transparent: !0,
    }),
  );
  return (a.scale.set(1.25, 0.47, 1), (a.renderOrder = 10), a);
}
var GuideHud = class {
  constructor() {
    ((this.group = new cn()), (this.fade = 0), (this.t = 0));
    let e = (e, t, n) => {
      let r = new Hr({
          color: t,
          transparent: !0,
          opacity: 0.6,
          depthWrite: !1,
          side: 2,
        }),
        i = new ei(arcGeometry(e), r);
      ((i.position.y = 0.03), (i.renderOrder = 2));
      let a = signTexture(n, t);
      return (
        this.group.add(i, a),
        {
          bend: e,
          arrow: i,
          mat: r,
          tag: a,
          glow: 0,
        }
      );
    };
    ((this.sides = {
      kiri: e(1, COLOR_ASPHALT, `KIRI`),
      kanan: e(-1, COLOR_ASPHALT_LIGHT, `KANAN`),
    }),
      (this.group.visible = !1));
  }
  update(e, t, n, r) {
    if (
      ((this.t += e),
      (this.fade = Math.max(0, Math.min(1, this.fade + (t ? 4 : -4) * e))),
      (this.group.visible = this.fade > 0),
      !t)
    )
      return;
    let [i, a] = t.bodyCenter(),
      o = Math.sin(t.heading) * n,
      s = Math.cos(t.heading) * n,
      c = t.def.length / 2 + 0.45 + (n < 0 ? (t.def.cargo?.overhang ?? 0) : 0),
      l = new U(i + o * c, 0, a + s * c),
      u = Math.atan2(o, s),
      d = Math.min(1, e * 12);
    this.group.position.lerp(l, d);
    let f = u - this.group.rotation.y;
    ((f = Math.atan2(Math.sin(f), Math.cos(f))), (this.group.rotation.y += f * d));
    for (let t of [`kiri`, `kanan`]) {
      let i = this.sides[t];
      i.glow += (+!!r[t] - i.glow) * Math.min(1, e * 14);
      let a = r[t] ? 0.06 * Math.sin(this.t * 14) : 0;
      i.mat.opacity = (0.45 + 0.5 * i.glow) * this.fade;
      let o = 1 + 0.12 * i.glow + a;
      (i.arrow.scale.set(o * n, o, o),
        i.tag.position.set(i.bend * n * 1.3, 0.6, 1.9),
        (i.tag.material.opacity = (0.75 + 0.25 * i.glow) * this.fade),
        i.tag.scale.set(1.25 * (1 + 0.15 * i.glow), 0.47 * (1 + 0.15 * i.glow), 1));
    }
  }
};
function mergeGeometries(e, t = !1) {
  let n = e[0].index !== null,
    r = new Set(Object.keys(e[0].attributes)),
    i = new Set(Object.keys(e[0].morphAttributes)),
    a = {},
    o = {},
    s = e[0].morphTargetsRelative,
    c = new ur();
  c.morphTargetsRelative = s;
  let l = 0;
  for (let u = 0; u < e.length; ++u) {
    let d = e[u],
      f = 0,
      p = 0;
    if (n !== (d.index !== null))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            u +
            `. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`,
        ),
        null
      );
    for (let e in d.attributes) {
      if (!r.has(e))
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              u +
              `. All geometries must have compatible attributes; make sure "` +
              e +
              `" attribute exists among all geometries, or in none of them.`,
          ),
          null
        );
      (a[e] === void 0 && (a[e] = []), a[e].push(d.attributes[e]), f++);
    }
    if (f !== r.size)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            u +
            `. Make sure all geometries have the same number of attributes.`,
        ),
        null
      );
    if (s !== d.morphTargetsRelative)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            u +
            `. .morphTargetsRelative must be consistent throughout all geometries.`,
        ),
        null
      );
    for (let t in d.morphAttributes) {
      if (!i.has(t))
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              u +
              `.  .morphAttributes must be consistent throughout all geometries.`,
          ),
          null
        );
      if (d.morphAttributes[t].length !== e[0].morphAttributes[t].length)
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              u +
              `. All geometries must have the same number of morph targets for the "` +
              t +
              `" morph attribute.`,
          ),
          null
        );
      (o[t] === void 0 && (o[t] = []), o[t].push(d.morphAttributes[t]), p++);
    }
    if (p !== i.size)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            u +
            `. Make sure all geometries have the same number of morph attributes.`,
        ),
        null
      );
    if (t) {
      let e;
      if (n) e = d.index.count;
      else if (d.attributes.position !== void 0) e = d.attributes.position.count;
      else
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              u +
              `. The geometry must have either an index or a position attribute`,
          ),
          null
        );
      (c.addGroup(l, e, u), (l += e));
    }
  }
  if (n) {
    let t = 0,
      n = [];
    for (let r = 0; r < e.length; ++r) {
      let i = e[r].index;
      for (let e = 0; e < i.count; ++e) n.push(i.getX(e) + t);
      t += e[r].attributes.position.count;
    }
    c.setIndex(n);
  }
  for (let e in a) {
    let t = mergeAttributes(a[e]);
    if (!t)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` +
            e +
            ` attribute.`,
        ),
        null
      );
    c.setAttribute(e, t);
  }
  for (let e in o) {
    let t = o[e][0].length;
    if (t !== 0) {
      ((c.morphAttributes = c.morphAttributes || {}), (c.morphAttributes[e] = []));
      for (let n = 0; n < t; ++n) {
        let t = [];
        for (let r = 0; r < o[e].length; ++r) t.push(o[e][r][n]);
        let r = mergeAttributes(t);
        if (!r)
          return (
            console.error(
              `THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` +
                e +
                ` morphAttribute.`,
            ),
            null
          );
        c.morphAttributes[e].push(r);
      }
    }
  }
  return c;
}
function mergeAttributes(e) {
  let t,
    n,
    r,
    i = -1,
    a = 0;
  for (let o = 0; o < e.length; ++o) {
    let s = e[o];
    if ((t === void 0 && (t = s.array.constructor), t !== s.array.constructor))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`,
        ),
        null
      );
    if ((n === void 0 && (n = s.itemSize), n !== s.itemSize))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`,
        ),
        null
      );
    if ((r === void 0 && (r = s.normalized), r !== s.normalized))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`,
        ),
        null
      );
    if ((i === -1 && (i = s.gpuType), i !== s.gpuType))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`,
        ),
        null
      );
    a += s.count * n;
  }
  let o = new t(a),
    s = new Yn(o, n, r),
    c = 0;
  for (let t = 0; t < e.length; ++t) {
    let r = e[t];
    if (r.isInterleavedBufferAttribute) {
      let e = c / n;
      for (let t = 0, i = r.count; t < i; t++)
        for (let i = 0; i < n; i++) {
          let n = r.getComponent(t, i);
          s.setComponent(t + e, i, n);
        }
    } else o.set(r.array, c);
    c += r.count * n;
  }
  return (i !== void 0 && (s.gpuType = i), s);
}
var vertexColorMaterial = new qa({
  vertexColors: !0,
});
var Hu = 1513239;
var Uu = class {
  constructor() {
    ((this.parts = []),
      (this.base = new Nt()),
      (this.m = new Nt()),
      (this.p = new U()),
      (this.q = new dt()),
      (this.e = new Ut()),
      (this.s = new U(1, 1, 1)),
      (this.c = new K()));
  }
  at(e = 0, t = 0, n = 0, r = 0, i = 1) {
    return (
      this.base.compose(new U(e, t, n), new dt().setFromEuler(new Ut(0, r, 0)), new U(i, i, i)),
      this
    );
  }
  add(e, t, n, r, i, a = 0, o = 0, s = 0) {
    let c = e.index ? e.toNonIndexed() : e;
    (this.m
      .compose(this.p.set(n, r, i), this.q.setFromEuler(this.e.set(a, o, s, `YXZ`)), this.s)
      .premultiply(this.base),
      c.applyMatrix4(this.m),
      c.deleteAttribute(`uv`));
    let l = c.attributes.position.count,
      u = new Float32Array(l * 3);
    this.c.set(t);
    for (let e = 0; e < l; e++) u.set([this.c.r, this.c.g, this.c.b], e * 3);
    return (c.setAttribute(`color`, new Yn(u, 3)), this.parts.push(c), this);
  }
  box(e, t, n, r, i, a, o, s = 0, c = 0, l = 0) {
    return this.add(new hi(e, t, n), r, i, a, o, s, c, l);
  }
  cyl(e, t, n, r, i, a, o, s = 8, c = 0, l = 0) {
    return this.add(new gi(e, t, n, s), r, i, a, o, c, 0, l);
  }
  wheel(e, t, n, r) {
    return this.cyl(e, e, t, Hu, n, e, r, 10, 0, Math.PI / 2);
  }
  cone(e, t, n, r, i, a, o = 8, s = 0, c = 0) {
    return this.add(new _i(e, t, o), n, r, i, a, s, 0, c);
  }
  ball(e, t, n, r, i, a = 1) {
    return this.add(new Na(e, a), t, n, r, i);
  }
  roof(e, t, n, r, i, a, o) {
    let s = new _i(Math.SQRT1_2, n, 4);
    return (s.rotateY(Math.PI / 4), s.scale(e, 1, t), this.add(s, r, i, a + n / 2, o));
  }
  build(e = !0) {
    let t = new ei(mergeGeometries(this.parts, !1), vertexColorMaterial);
    return ((t.castShadow = e), (this.parts = []), t);
  }
};
function drawCanvasSign(e, t, n, r, i, a = {}) {
  let o = Math.min(96, 512 / t),
    s = document.createElement(`canvas`);
  ((s.width = Math.round(t * o)), (s.height = Math.round(n * o)));
  let c = s.getContext(`2d`);
  ((c.fillStyle = r), c.fillRect(0, 0, s.width, s.height));
  let l = 0;
  if (a.stripes) {
    let e = s.height * 0.14;
    (a.stripes.forEach((t, n) => {
      ((c.fillStyle = t), c.fillRect(0, s.height - e * (a.stripes.length - n), s.width, e));
    }),
      (l = -e * a.stripes.length));
  }
  a.border &&
    ((c.strokeStyle = a.border),
    (c.lineWidth = Math.max(3, s.height * 0.06)),
    c.strokeRect(c.lineWidth / 2, c.lineWidth / 2, s.width - c.lineWidth, s.height - c.lineWidth));
  let u = (s.height + l) / e.length;
  ((c.textAlign = `center`),
    (c.textBaseline = `middle`),
    e.forEach((e, t) => {
      let n = u * (t === 0 ? 0.74 : 0.6),
        r = a.font ?? `900 {s}px "Arial Black", "Helvetica Neue", Arial, sans-serif`;
      c.font = r.replace(`{s}`, String(n));
      let o = (s.width * 0.9) / c.measureText(e).width;
      (o < 1 && ((n *= o), (c.font = r.replace(`{s}`, String(n)))),
        (c.fillStyle = Array.isArray(i) ? i[t % i.length] : i),
        c.fillText(e, s.width / 2, u * (t + 0.5)));
    }));
  let d = new di(s);
  return (
    (d.colorSpace = ze),
    (d.anisotropy = 4),
    new ei(
      new Pa(t, n),
      new Hr({
        map: d,
      }),
    )
  );
}
function disposeTree(e) {
  e.traverse((e) => {
    let t = e;
    t.isMesh && (t.geometry.dispose(), t.material !== vertexColorMaterial && t.material.dispose());
  });
}
var Ku = [13010498, 11104570, 14262374, 9262372];
var qu = [
  15087942, 4553629, 16032353, 2792847, 16777215, 16765286, 8599788, 3835647, 7107965, 16743074,
];
var Ju = [3095378, 3815994, 6048314, 1914199];
var Yu = 1615178;
var Xu = 2043194;
var Zu = 10474495;
var Qu = (e, t) => e + Math.random() * (t - e);
function $u() {
  let e = new Uu(),
    t = pickLang([14034984, 1914199, 1118481, 16219904, 16777215, 2855752]),
    n = Math.random() < 0.4,
    r = n ? Yu : pickLang(qu),
    i = n ? Yu : pickLang([1118481, 16777215, 14034984, 1914199, 16743074]);
  (e.wheel(0.3, 0.12, 0, 0.62).wheel(0.3, 0.12, 0, -0.62),
    e.box(0.3, 0.38, 1.15, t, 0, 0.58, 0),
    e.box(0.28, 0.1, 0.7, 1710618, 0, 0.82, -0.25),
    e.box(0.6, 0.05, 0.06, 4473924, 0, 1.02, 0.45),
    e.box(0.22, 0.32, 0.1, t, 0, 0.86, 0.52),
    e.box(0.3, 0.22, 0.5, pickLang(Ju), 0, 0.92, 0.05),
    e.box(0.4, 0.52, 0.28, r, 0, 1.2, -0.08),
    e.ball(0.19, i, 0, 1.6, -0.05, 0));
  let a = Math.random();
  return (
    a < 0.3
      ? (e.box(0.38, 0.5, 0.26, pickLang(qu), 0, 1.2, -0.42),
        e.ball(0.18, pickLang([1118481, 16777215, Yu]), 0, 1.58, -0.4, 0))
      : n && a < 0.65 && e.box(0.42, 0.42, 0.4, Yu, 0, 1.05, -0.5),
    {
      obj: e.build(),
      len: 2,
      speed: Qu(8, 11),
      kind: `motor`,
    }
  );
}
function ed() {
  let e = new Uu(),
    t = Math.random() < 0.8,
    n = t ? 1863120 : 15888413;
  return (
    e.wheel(0.26, 0.14, 0, 1.05).wheel(0.26, 0.14, -0.6, -0.75).wheel(0.26, 0.14, 0.6, -0.75),
    e.box(1.3, 0.75, 1.9, n, 0, 0.7, -0.2),
    e.box(0.95, 0.65, 0.7, n, 0, 0.65, 0.95),
    e.box(1.2, 0.5, 1.6, Xu, 0, 1.3, -0.25),
    e.box(0.9, 0.45, 0.08, Zu, 0, 1.25, 0.6),
    e.box(1.34, 0.1, 2, t ? 1195898 : 1447446, 0, 1.6, -0.2),
    e.box(0.2, 0.12, 0.06, 16773808, 0, 0.82, 1.31),
    {
      obj: e.build(),
      len: 2.7,
      speed: Qu(4.5, 5.5),
      kind: `bajaj`,
    }
  );
}
function td() {
  let e = new Uu(),
    t = pickLang([6931442, 6931442, 14236218, 3120731]);
  for (let t of [-0.78, 0.78]) e.wheel(0.3, 0.2, t, 1.25).wheel(0.3, 0.2, t, -1.25);
  return (
    e.box(1.7, 1.25, 4, t, 0, 0.95, 0),
    e.box(1.74, 0.12, 4.02, 16777215, 0, 0.72, 0),
    e.box(1.72, 0.42, 2.6, Xu, 0, 1.28, -0.5),
    e.box(1.5, 0.5, 0.08, Zu, 0, 1.22, 2),
    e.box(0.08, 0.95, 0.95, 1053978, 0.84, 0.95, 0.6),
    e.box(0.5, 0.16, 0.3, 16765503, 0, 1.66, 1.4),
    {
      obj: e.build(),
      len: 4.2,
      speed: Qu(5, 6),
      kind: `angkot`,
    }
  );
}
function nd() {
  let e = new Uu(),
    [t, n] = pickLang([
      [16777215, 2060241],
      [15888413, 1914199],
      [15330543, 14034984],
    ]);
  for (let t of [-1.05, 1.05]) e.wheel(0.45, 0.3, t, 3.4).wheel(0.45, 0.3, t, -3.2);
  return (
    e.box(2.4, 2.5, 10, t, 0, 1.75, 0),
    e.box(2.42, 0.5, 10.02, n, 0, 0.9, 0),
    e.box(2.42, 0.8, 8.6, Xu, 0, 2.2, -0.3),
    e.box(2.1, 1, 0.08, Zu, 0, 2, 5),
    e.box(1.6, 0.25, 0.08, 16765503, 0, 2.75, 5),
    {
      obj: e.build(),
      len: 10.6,
      speed: Qu(5.5, 6.5),
      kind: `bus`,
    }
  );
}
function rd() {
  let e = new Uu(),
    t = pickLang([15909424, 14034984, 2855752]);
  for (let t of [-0.9, 0.9])
    e.wheel(0.42, 0.28, t, 2).wheel(0.42, 0.28, t, -1.2).wheel(0.42, 0.28, t, -2.1);
  return (
    e.box(2.1, 0.25, 6.2, 3355443, 0, 0.72, 0),
    e.box(2, 1.5, 1.6, t, 0, 1.55, 2.2),
    e.box(1.8, 0.6, 0.08, Zu, 0, 1.85, 3),
    e.box(2.1, 1.4, 4.2, pickLang([3112271, 9263659, 4157352]), 0, 1.55, -0.95),
    {
      obj: e.build(),
      len: 6.4,
      speed: Qu(5, 6.5),
      kind: `truk`,
    }
  );
}
function id() {
  let e = Math.random() < 0.25,
    t = e ? VEHICLES.mpv : pickLang([VEHICLES.mpv, VEHICLES.mpv, VEHICLES.city]),
    n = new CarMesh(
      t,
      e ? 5223400 : pickLang([14277081, 16777215, 2236962, 9080728, 8068638, 14277081]),
    );
  n.group.position.z = -n.bodyCz;
  let r = new cn();
  if ((r.add(n.group), e)) {
    let e = new Uu().box(0.5, 0.16, 0.22, 16765503, 0, 1.75, -0.2).build(!1);
    r.add(e);
  }
  return {
    obj: r,
    len: t.length,
    speed: Qu(6.5, 8.5),
    kind: `mobil`,
    tick: (e, t) => {
      ((n.v = e), n.animate(t));
    },
  };
}
function ad() {
  let e = Math.random();
  return e < 0.4 ? id() : e < 0.64 ? ed() : e < 0.83 ? td() : e < 0.95 ? rd() : nd();
}
function od(e, t, n, r, i, a, o) {
  let s = new Uu().box(e, t, n, r, 0, -t / 2, 0);
  i !== null && s.box(e * 0.95, 0.12, n * 1.05, i, 0, -t - 0.04, 0.02);
  let c = s.build();
  return (c.position.set(a, o, 0), c);
}
function crowdFigure(e = pickLang([`pria`, `pria`, `wanita`, `hijab`, `hijab`, `sd`, `peci`])) {
  let t = new Uu(),
    n = pickLang(Ku),
    r = pickLang(qu),
    i = pickLang(Ju);
  if (
    (e === `sd`
      ? ((r = 16777215), (i = 12653087))
      : e === `hijab`
        ? (i = r)
        : e === `peci` &&
          ((r = pickLang([16777215, 15327944, 10146224])),
          (i = pickLang([3824192, 6048314, 3095378]))),
    t.box(0.42, 0.6, 0.26, r, 0, 1, 0),
    t.box(0.27, 0.27, 0.25, n, 0, 1.45, 0),
    e === `hijab`)
  ) {
    let e = pickLang([15910622, 10146224, 16777215, 4553629, 15320170, 7107965]);
    (t.box(0.36, 0.46, 0.34, e, 0, 1.41, -0.03), t.box(0.2, 0.2, 0.04, n, 0, 1.46, 0.15));
  } else
    e === `peci`
      ? t.box(0.29, 0.14, 0.27, 1118481, 0, 1.64, 0)
      : (t.box(0.29, 0.1, 0.27, 1710618, 0, 1.62, 0),
        e === `wanita` && t.box(0.29, 0.34, 0.08, 1710618, 0, 1.45, -0.15));
  if (e === `pikulan`) {
    t.box(0.05, 0.05, 2, 9263659, 0.2, 1.33, 0);
    for (let e of [-0.9, 0.9])
      (t.box(0.02, 0.7, 0.02, 9263659, 0.2, 0.98, e),
        t.box(0.42, 0.3, 0.42, 13214247, 0.2, 0.53, e));
    t.cone(0.3, 0.16, 14271098, 0, 1.75, 0, 8);
  }
  let a = new cn();
  a.add(t.build());
  let o = pickLang([1710618, 3811866, 15921906]),
    s = [-1, 1].map((e) => od(0.17, 0.62, 0.2, i, o, e * 0.11, 0.72)),
    c = [-1, 1].map((e) => od(0.12, 0.5, 0.14, r, n, e * 0.28, 1.27));
  return (
    a.add(...s, ...c),
    (a.userData = {
      legs: s,
      arms: c,
    }),
    a.scale.setScalar(e === `sd` ? 0.85 : 1.15),
    a
  );
}
function swayProp(e, t, n = 1) {
  let { legs: r, arms: i } = e.userData;
  if (!r || !i) return;
  let a = Math.sin(t) * n;
  ((r[0].rotation.x = a * 0.6),
    (r[1].rotation.x = -a * 0.6),
    (i[0].rotation.x = -a * 0.45),
    (i[1].rotation.x = a * 0.45));
}
var ld = 1.45;
function ud(e) {
  let t = new Uu(),
    n = e ? 2067020 : 12653087;
  (t.cyl(0.42, 0.66, 2, n, 0, 1, 0, 8),
    t.box(0.72, 0.5, 0.7, e ? 16765503 : 1914199, 0, 1.55, 0),
    t.box(1.7, 0.16, 0.2, n, 0, 1.85, 0),
    t.box(0.56, 0.6, 0.5, e ? 16119285 : 14034984, 0, 2.4, 0));
  for (let e of [-0.13, 0.13]) t.box(0.1, 0.08, 0.03, 1118481, e, 2.48, 0.26);
  return (
    t.box(0.2, 0.05, 0.03, e ? 14034984 : 1118481, 0, 2.25, 0.26),
    t.box(0.64, 0.16, 0.58, 16765503, 0, 2.78, 0),
    [14034984, 16765503, 2855752, 16777215, 16743074, 16765503, 14034984].forEach((e, n) => {
      let r = n - 3;
      t.box(0.05, 1, 0.05, e, r * 0.13, 3.3, 0, 0, 0, -r * 0.2);
    }),
    t.build()
  );
}
function patrolTruck() {
  let e = new Uu(),
    t = 3029802;
  for (let t of [-0.85, 0.85]) e.wheel(0.38, 0.26, t, 1.45).wheel(0.38, 0.26, t, -1.35);
  (e.box(1.9, 0.5, 5, t, 0, 0.75, 0),
    e.box(1.86, 0.85, 1.9, t, 0, 1.4, 1.2),
    e.box(1.7, 0.5, 0.06, Zu, 0, 1.55, 2.16),
    e.box(1.88, 0.06, 0.06, 15921906, 0, 0.98, 0),
    e
      .box(1.9, 0.4, 0.08, t, 0, 1.2, -2.46)
      .box(0.08, 0.4, 2.9, t, -0.91, 1.2, -1)
      .box(0.08, 0.4, 2.9, t, 0.91, 1.2, -1),
    e.box(0.5, 0.35, 2.4, 3815994, 0, 1.17, -1.1));
  for (let [t, n] of [
    [-0.45, -0.4],
    [0.45, -1.1],
    [-0.45, -1.8],
  ])
    e.box(0.42, 0.6, 0.3, 10521173, t, 1.62, n)
      .box(0.3, 0.3, 0.28, 13010498, t, 2.07, n)
      .box(0.36, 0.1, 0.34, 2503455, t, 2.26, n);
  let n = new cn();
  n.add(e.build());
  for (let e of [-1, 1]) {
    let t = drawCanvasSign([`SATPOL PP`], 1.6, 0.36, `#2e3b2a`, `#ffd23f`);
    (t.position.set(e * 0.955, 0.78, 0), (t.rotation.y = (e * Math.PI) / 2), n.add(t));
  }
  let r = [15087942, 1863120].map((e, t) => {
      let r = new ei(
        new hi(0.62, 0.16, 0.3),
        new Hr({
          color: e,
        }),
      );
      return (r.position.set(t ? 0.34 : -0.34, 1.92, 1.1), n.add(r), r);
    }),
    i = 0;
  return {
    obj: n,
    len: 5.2,
    speed: 6,
    kind: `truk`,
    tick: (e, t) => {
      i += t;
      let n = Math.floor(i * 6) % 2;
      ((r[0].visible = n === 0), (r[1].visible = n === 1));
    },
    lights: r,
  };
}
var fd = (e, t, n) => Math.max(t, Math.min(n, e));
var Crowd = class {
  constructor(e) {
    ((this.parent = e), (this.list = []));
  }
  spawn(e, t = {}) {
    let n = crowdFigure(t.kind);
    n.rotation.order = `YXZ`;
    let [r, i] = e[0],
      a = {
        obj: n,
        path: e,
        i: 1,
        x: r,
        z: i,
        h: 0,
        v: 0,
        speed: t.speed ?? 1.45 + Math.random() * 0.35,
        phase: Math.random() * 6,
        base: n.scale.x,
        size: +(t.appear === !1),
        state: t.appear === !1 ? `walk` : `appear`,
        vanishAtEnd: t.vanishAtEnd ?? !0,
        onArrive: t.onArrive,
      };
    return (
      e[1] && (a.h = Math.atan2(e[1][0] - r, e[1][1] - i)),
      this.parent.add(n),
      this.place(a),
      this.list.push(a),
      a
    );
  }
  vanish(e) {
    e.state = `vanish`;
  }
  clear() {
    for (let e of this.list) this.remove(e);
    this.list = [];
  }
  remove(e) {
    (e.obj.removeFromParent(), disposeTree(e.obj));
  }
  place(e) {
    (e.obj.position.set(e.x, e.obj.position.y, e.z),
      (e.obj.rotation.y = e.h),
      e.obj.scale.setScalar(Math.max(0.001, e.base * e.size)));
  }
  update(e) {
    for (let t of this.list) {
      t.state === `appear`
        ? ((t.size = Math.min(1, t.size + e / 0.3)), t.size >= 1 && (t.state = `walk`))
        : t.state === `vanish` &&
          ((t.size = Math.max(0, t.size - e / 0.3)), (t.v = 0), t.size <= 0 && (t.state = `done`));
      let n = 0;
      if (t.state === `walk` || t.state === `appear`) {
        let r = t.path[t.i];
        if (!r) t.v = 0;
        else {
          let i = r[0] - t.x,
            a = r[1] - t.z,
            o = Math.hypot(i, a),
            s = t.i === t.path.length - 1,
            c = t.state === `appear` ? 0 : t.speed;
          if (
            (s && (c = Math.min(c, 0.4 + o * 2)), (t.v += fd(c - t.v, -6 * e, 3 * e)), o > 0.05)
          ) {
            let n = Math.atan2(Math.sin(Math.atan2(i, a) - t.h), Math.cos(Math.atan2(i, a) - t.h));
            t.h += fd(n, -8 * e, 8 * e);
          }
          ((n = Math.min(o, t.v * e)),
            o > 0.001 && ((t.x += (i / o) * n), (t.z += (a / o) * n)),
            o < 0.12 &&
              (s
                ? (t.i++,
                  t.onArrive?.(t),
                  t.vanishAtEnd && t.state === `walk` && (t.state = `vanish`))
                : t.i++));
        }
      }
      t.phase += (n / ld) * Math.PI * 2;
      let r = fd(t.v / 0.8, 0, 1);
      (swayProp(t.obj, t.phase, r),
        (t.obj.position.y = Math.abs(Math.sin(t.phase)) * 0.035 * r),
        this.place(t));
    }
    for (let e of this.list) e.state === `done` && this.remove(e);
    this.list = this.list.filter((e) => e.state !== `done`);
  }
};
var md = (e) => Math.atan2(Math.sin(e), Math.cos(e));
var AStarPlanner = class e {
  static {
    this.X0 = -13;
  }
  static {
    this.Z0 = -11;
  }
  static {
    this.CELL = 0.2;
  }
  static {
    this.W = 130;
  }
  static {
    this.H = 115;
  }
  constructor(t, n, r) {
    this.grid = new Uint8Array(e.W * e.H);
    let { X0: i, Z0: a, CELL: o, W: s, H: c } = e;
    for (let e = 0; e < c; e++)
      for (let t = 0; t < s; t++)
        r(i + (t + 0.5) * o, a + (e + 0.5) * o) && (this.grid[e * s + t] = 1);
    for (let e of t) {
      let t = Math.cos(e.rot),
        r = Math.sin(e.rot),
        l = e.hx + n,
        u = e.hz + n,
        d = Math.abs(t) * l + Math.abs(r) * u,
        f = Math.abs(r) * l + Math.abs(t) * u,
        p = Math.max(0, Math.floor((e.x - d - i) / o)),
        m = Math.min(s - 1, Math.floor((e.x + d - i) / o)),
        h = Math.max(0, Math.floor((e.z - f - a) / o)),
        g = Math.min(c - 1, Math.floor((e.z + f - a) / o));
      for (let n = h; n <= g; n++) {
        let c = a + (n + 0.5) * o - e.z;
        for (let a = p; a <= m; a++) {
          let d = i + (a + 0.5) * o - e.x;
          Math.abs(d * t - c * r) <= l &&
            Math.abs(d * r + c * t) <= u &&
            (this.grid[n * s + a] = 1);
        }
      }
    }
  }
  blocked(t, n) {
    let r = Math.floor((t - e.X0) / e.CELL),
      i = Math.floor((n - e.Z0) / e.CELL);
    return r < 0 || i < 0 || r >= e.W || i >= e.H || this.grid[i * e.W + r] === 1;
  }
};
function obstacleRects(e) {
  let t = [];
  for (let n of e.rects) {
    let e = Math.max(2, Math.ceil((n.hz * 2) / 0.3)),
      r = Math.max(2, Math.ceil((n.hx * 2) / 0.3));
    for (let r = 0; r <= e; r++) {
      let i = n.cz - n.hz + (2 * n.hz * r) / e;
      t.push([-n.hx, i], [n.hx, i]);
    }
    for (let e = 1; e < r; e++) {
      let i = -n.hx + (2 * n.hx * e) / r;
      t.push([i, n.cz - n.hz], [i, n.cz + n.hz]);
    }
  }
  return t;
}
function isBlocked(e, t, n, r, i) {
  let a = Math.sin(i),
    o = Math.cos(i);
  for (let [i, s] of t) if (e.blocked(n + a * s + o * i, r + o * s - a * i)) return !1;
  return !0;
}
var vd = class {
  constructor() {
    this.a = [];
  }
  get size() {
    return this.a.length;
  }
  push(e) {
    let t = this.a;
    t.push(e);
    let n = t.length - 1;
    for (; n > 0;) {
      let e = (n - 1) >> 1;
      if (t[e].f <= t[n].f) break;
      (([t[e], t[n]] = [t[n], t[e]]), (n = e));
    }
  }
  pop() {
    let e = this.a,
      t = e[0],
      n = e.pop();
    if (e.length) {
      e[0] = n;
      let t = 0;
      for (;;) {
        let n = t * 2 + 1,
          r = n + 1,
          i = t;
        if (
          (n < e.length && e[n].f < e[i].f && (i = n),
          r < e.length && e[r].f < e[i].f && (i = r),
          i === t)
        )
          break;
        (([e[i], e[t]] = [e[t], e[i]]), (t = i));
      }
    }
    return t;
  }
};
var yd = 0.2;
var bd = 3;
var xd = [-0.58, -0.29, 0, 0.29, 0.58];
var Sd = 36;
function* astarSearch(e, t, n, r, i = 4e4) {
  let a = obstacleRects(n),
    o = n.wheelbase,
    s = new Map(),
    c = (e, t, n) => {
      let r = Math.round((e - AStarPlanner.X0) / 0.3),
        i = Math.round((t - AStarPlanner.Z0) / 0.3),
        a = ((Math.round(n / ((2 * Math.PI) / Sd)) % Sd) + Sd) % Sd;
      return (r * 200 + i) * Sd + a;
    },
    l = (e, n, r) => 1.4 * (Math.hypot(t.x - e, t.z - n) + 1.2 * Math.abs(md(t.h - r))),
    u = (e) =>
      Math.abs(e.x - t.x) < 0.45 && Math.abs(e.z - t.z) < 0.7 && Math.abs(md(e.h - t.h)) < 0.18,
    d = !isBlocked(r, a, e.x, e.z, e.h),
    f = (t, n) => d && Math.hypot(t - e.x, n - e.z) < 1.1,
    p = new vd();
  p.push({
    ...e,
    g: 0,
    f: l(e.x, e.z, e.h),
    dir: 1,
    steer: 0,
    parent: null,
  });
  let m = 0;
  for (; p.size && m < i;) {
    let e = p.pop(),
      t = c(e.x, e.z, e.h),
      n = s.get(t);
    if (!(n !== void 0 && n <= e.g)) {
      if ((s.set(t, e.g), m++, u(e))) return wd(e, o);
      m % 400 == 0 && (yield);
      for (let t of [1, -1])
        for (let n of xd) {
          let { x: i, z: u, h: d } = e,
            m = !0,
            h = Math.tan(n) / o;
          for (let e = 0; e < bd; e++)
            if (
              ((d += t * yd * h),
              (i += t * yd * Math.sin(d)),
              (u += t * yd * Math.cos(d)),
              !f(i, u) && !isBlocked(r, a, i, u, d))
            ) {
              m = !1;
              break;
            }
          if (!m) continue;
          let g = yd * bd,
            _ = e.g + g * (t < 0 ? 1.8 : 1) + Math.abs(n - e.steer) * 0.4 + Math.abs(n) * 0.05;
          e.parent && t !== e.dir && (_ += 4);
          let v = c(i, u, d),
            y = s.get(v);
          (y !== void 0 && y <= _) ||
            p.push({
              x: i,
              z: u,
              h: d,
              g: _,
              f: _ + l(i, u, d),
              dir: t,
              steer: n,
              parent: e,
            });
        }
    }
  }
  return null;
}
function wd(e, t) {
  let n = [];
  for (let t = e; t; t = t.parent) n.push(t);
  n.reverse();
  let r = [
    {
      x: n[0].x,
      z: n[0].z,
      h: n[0].h,
      dir: n[1]?.dir ?? 1,
      steer: 0,
    },
  ];
  for (let e = 1; e < n.length; e++) {
    let i = n[e - 1],
      a = n[e],
      { x: o, z: s, h: c } = i,
      l = Math.tan(a.steer) / t;
    for (let e = 0; e < bd; e++)
      ((c += a.dir * yd * l),
        (o += a.dir * yd * Math.sin(c)),
        (s += a.dir * yd * Math.cos(c)),
        r.push({
          x: o,
          z: s,
          h: c,
          dir: a.dir,
          steer: a.steer,
        }));
  }
  return r;
}
function Td(e, t) {
  let n = e[e.length - 1],
    r = Math.max(0, Math.round(t / yd));
  for (let t = 1; t <= r; t++)
    e.push({
      x: n.x + Math.sin(n.h) * yd * t,
      z: n.z + Math.cos(n.h) * yd * t,
      h: n.h,
      dir: 1,
      steer: 0,
    });
}
var Ed = yd;
var Dd = 1080;
var Od = 1350;
var kd = 610;
var Ad = `#1c1e22`;
var jd = `#fdf6e3`;
var Md = `#ffd23f`;
var Nd = `#e63946`;
var Pd = `ui-monospace, 'SF Mono', Menlo, Consolas, monospace`;
var Fd = `ui-rounded, 'SF Pro Rounded', 'Nunito', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`;
function captureFrame(e) {
  let t = Math.min(1, (Dd * 1.4) / e.width),
    n = document.createElement(`canvas`);
  return (
    (n.width = Math.max(1, Math.round(e.width * t))),
    (n.height = Math.max(1, Math.round(e.height * t))),
    n.getContext(`2d`).drawImage(e, 0, 0, n.width, n.height),
    n
  );
}
function Ld(e, t, n, r, i, a) {
  let o = r;
  do ((e.font = `${n} ${o}px ${i}`), (o -= 2));
  while (o > 12 && e.measureText(t).width > a);
}
function Rd(e, t, n, r) {
  let i = [],
    a = ``;
  for (let r of t.split(` `)) {
    let t = a ? `${a} ${r}` : r;
    e.measureText(t).width <= n || !a ? (a = t) : (i.push(a), (a = r));
  }
  return (a && i.push(a), i.length > r && ((i.length = r), (i[r - 1] += `…`)), i);
}
function zd(e, t, n, r, i) {
  (e.save(),
    (e.strokeStyle = i),
    (e.lineWidth = 4),
    e.setLineDash([16, 12]),
    e.beginPath(),
    e.moveTo(t, r),
    e.lineTo(n, r),
    e.stroke(),
    e.restore());
}
function drawWorldLabels(e, t, n) {
  let r = document.createElement(`canvas`);
  ((r.width = Dd), (r.height = Od));
  let i = r.getContext(`2d`),
    a = !!e.busted;
  if (((i.fillStyle = Ad), i.fillRect(0, 0, Dd, Od), t)) {
    let e = Math.max(Dd / t.width, kd / t.height),
      n = Dd / e,
      r = kd / e;
    i.drawImage(t, (t.width - n) / 2, (t.height - r) / 2, n, r, 0, 0, Dd, kd);
  } else ((i.fillStyle = `#bfb59e`), i.fillRect(0, 0, Dd, kd));
  let o = i.createLinearGradient(0, 450, 0, kd);
  (o.addColorStop(0, `rgba(28,30,34,0)`),
    o.addColorStop(1, `rgba(28,30,34,0.85)`),
    (i.fillStyle = o),
    i.fillRect(0, 450, Dd, 160),
    (i.font = `900 46px ${Fd}`));
  let s = `TUKANG PARKIR`,
    c = i.measureText(s).width;
  ((i.fillStyle = Ad),
    i.beginPath(),
    i.roundRect(48, 44, 92 + c + 36, 84, 20),
    i.fill(),
    (i.fillStyle = `#1c5fd0`),
    i.beginPath(),
    i.roundRect(62, 58, 56, 56, 12),
    i.fill(),
    (i.fillStyle = `#fff`),
    (i.textAlign = `center`),
    (i.textBaseline = `middle`),
    (i.font = `900 40px ${Fd}`),
    i.fillText(`P`, 90, 88),
    (i.fillStyle = Md),
    (i.textAlign = `left`),
    (i.font = `900 46px ${Fd}`),
    i.fillText(s, 140, 88),
    i.save(),
    (i.shadowColor = `rgba(0,0,0,0.45)`),
    (i.shadowBlur = 40),
    (i.shadowOffsetY = 14),
    (i.fillStyle = jd),
    i.beginPath(),
    i.roundRect(70, 540, 940, 720, 14),
    i.fill(),
    i.restore(),
    i.save(),
    i.beginPath(),
    i.roundRect(70, 540, 940, 720, 14),
    i.clip(),
    (i.fillStyle = a ? `#3b4a33` : Md),
    i.fillRect(70, 540, 940, 118),
    i.restore(),
    zd(i, 70, 1010, 658, Ad));
  let l = Dd / 2;
  ((i.textAlign = `center`),
    (i.textBaseline = `alphabetic`),
    (i.fillStyle = a ? `#fff` : Ad),
    (i.font = `800 42px ${Pd}`),
    (i.letterSpacing = `8px`),
    i.fillText(trApp(`r.head`), 544, 600),
    (i.letterSpacing = `0px`),
    (i.font = `600 26px ${Pd}`),
    i.fillText(trApp(a ? `r.busted` : `r.title`), l, 638));
  let u = 766;
  if (
    ((i.fillStyle = e.money < 0 ? Nd : Ad),
    Ld(i, formatMoney(e.money), 900, 92, Pd, 860),
    i.fillText(formatMoney(e.money), l, u),
    a && e.money > 0)
  ) {
    let t = i.measureText(formatMoney(e.money)).width;
    ((i.strokeStyle = Nd),
      (i.lineWidth = 8),
      i.beginPath(),
      i.moveTo(l - t / 2 - 10, u - 30),
      i.lineTo(l + t / 2 + 10, u - 30),
      i.stroke());
  }
  if (a) {
    (i.save(), (i.font = `900 34px ${Pd}`));
    let e = trApp(`r.busted`).toUpperCase(),
      t = i.measureText(e).width + 40;
    (i.translate(1010 - t / 2 + 20, 534),
      i.rotate(-0.1),
      (i.fillStyle = jd),
      i.fillRect(-t / 2, -36, t, 60),
      (i.strokeStyle = Nd),
      (i.lineWidth = 7),
      i.strokeRect(-t / 2, -36, t, 60),
      (i.fillStyle = Nd),
      i.fillText(e, 0, 7),
      i.restore());
  }
  ((u += 58), (i.fillStyle = Ad), (i.font = `700 30px ${Pd}`));
  for (let t of Rd(i, e.busted ?? e.rank, 850, 2)) (i.fillText(t, l, u), (u += 40));
  (e.emoji && ((u += 14), Ld(i, e.emoji, 400, 46, Fd, 860), i.fillText(e.emoji, l, u), (u += 20)),
    (u += 24),
    zd(i, 110, 970, u, `rgba(0,0,0,0.3)`));
  let d = [
      [trApp(`r.cars`), String(e.cars)],
      [trApp(`r.paidCars`), String(e.paidCars)],
      [trApp(`r.paidBikes`), String(e.paidBikes)],
      [trApp(`r.unpaid`), String(e.unpaid)],
      [trApp(`r.scratch`), String(e.scratches)],
    ],
    f = 1220 - (u + 20),
    p = Math.min(50, f / d.length);
  u += 20 + p * 0.72;
  for (let [e, t] of d)
    ((i.textAlign = `left`),
      (i.font = `500 ${Math.round(p * 0.56)}px ${Pd}`),
      i.fillText(e, 126, u),
      (i.textAlign = `right`),
      (i.font = `800 ${Math.round(p * 0.56)}px ${Pd}`),
      i.fillText(t, 954, u),
      (u += p));
  return (
    (i.textAlign = `center`),
    (i.fillStyle = Md),
    (i.font = `800 34px ${Fd}`),
    i.fillText(n, l, 1314),
    r
  );
}
function Vd(e) {
  return new Promise((t) => e.toBlob(t, `image/png`));
}
var Hd = (e, t, n, r, i, a, o) => {
  let s = new ei(
    new hi(e, t, n),
    new qa({
      color: r,
    }),
  );
  return (s.position.set(i, a, o), (s.castShadow = !0), s);
};
var Ud = 0.42;
var Wd = 3.2;
var Gd = (e, t, n, r = 0) => {
  let i = Math.cos(e.rot),
    a = Math.sin(e.rot),
    o = t - e.x,
    s = n - e.z;
  return Math.abs(o * i - s * a) < e.hx + r && Math.abs(o * a + s * i) < e.hz + r;
};
var Kd = 3.4;
var qd = 1.9;
var Jd = 3.8;
var Yd = class {
  constructor() {
    ((this.group = new cn()),
      (this.arms = []),
      (this.legs = []),
      (this.t = 0),
      (this.vx = 0),
      (this.vz = 0),
      (this.stride = 0),
      (this.facing = 0),
      (this.pick = ``),
      (this.crouched = !1));
    let e = this.group;
    (e.add(Hd(0.56, 0.7, 0.32, 16742912, 0, 1.1, 0)),
      e.add(Hd(0.58, 0.1, 0.34, 16248914, 0, 1.05, 0)),
      e.add(Hd(0.34, 0.34, 0.32, 13010498, 0, 1.64, 0)),
      e.add(Hd(0.38, 0.12, 0.36, 1920649, 0, 1.86, 0), Hd(0.3, 0.05, 0.2, 1920649, 0, 1.82, 0.25)));
    for (let t of [-1, 1]) {
      let n = new cn();
      (n.position.set(t * 0.14, 0.76, 0),
        n.add(
          Hd(0.2, 0.68, 0.24, 3095378, 0, -0.34, 0),
          Hd(0.21, 0.1, 0.32, 1710618, 0, -0.71, 0.04),
        ),
        e.add(n),
        this.legs.push(n));
      let r = new cn();
      (r.position.set(t * 0.37, 1.4, 0),
        r.add(Hd(0.16, 0.62, 0.16, 16742912, 0, -0.28, 0)),
        r.add(Hd(0.15, 0.14, 0.15, 13010498, 0, -0.64, 0)),
        e.add(r),
        this.arms.push(r));
    }
    (e.scale.setScalar(1.3), (e.rotation.order = `YXZ`));
  }
  place(e) {
    this.pick = ``;
    let [t, n] = this.spot(e, -1);
    (this.group.position.set(t, 0, n), (this.vx = this.vz = 0));
  }
  spot(e, t, n = `idle`, r = [], i = null) {
    let a = t < 0 ? -1 : 1,
      o = this.sweep(e, a, e.steer),
      s = n === `kiri` ? STEER_RATE : n === `kanan` ? -STEER_RATE : null;
    s !== null && Math.abs(s - e.steer) > 0.1 && o.push(...this.sweep(e, a, s));
    let c = e.obbs(),
      l = r.filter((e) => !c.some((t) => t.x === e.x && t.z === e.z && t.rot === e.rot)),
      u = Math.sin(e.heading),
      d = Math.cos(e.heading),
      [f, p] = e.bodyCenter(),
      m = e.def.length / 2 + (a < 0 ? (e.def.cargo?.overhang ?? 0) : 0),
      h = e.def.length / 2 + (a > 0 ? (e.def.cargo?.overhang ?? 0) : 0),
      g = e.def.width / 2,
      _ = this.group.position,
      v = Math.sign((_.x - f) * d - (_.z - p) * u) || 1,
      y = Math.abs((_.x - f) * u + (_.z - p) * d) > e.def.length / 2 + 0.4 ? 0.3 : 1,
      b = i && {
        x0: i.x - AREA.bayW / 2 - 0.4,
        x1: i.x + AREA.bayW / 2 + 0.4,
        z0: i.z - AREA.bayD / 2 - 0.4,
        z1: -AREA.laneHalf + Kd,
      },
      x = [f, p],
      S = 1 / 0,
      C = ``,
      w = (t, n, r, i) => {
        let s = f + u * n * a + d * r,
          c = p + d * n * a - u * r,
          m = Math.max(AREA.minX + 0.6, Math.min(AREA.maxX - 0.6, s)),
          h = Math.max(AREA.minZ + 0.6, Math.min(AREA.maxZ + 1.6, c)),
          g = i,
          v = 0;
        for (let e of o) Gd(e, m, h) && v++;
        v && (g += 12 + v * 3);
        for (let e of l) Gd(e, m, h, Ud) && (g += 8);
        (b &&
          m > b.x0 &&
          m < b.x1 &&
          h > b.z0 &&
          h < b.z1 &&
          (m - f) * u * a + (h - p) * d * a > -e.def.length / 2 &&
          (g += 10),
          (g += Math.hypot(m - s, h - c) * 2),
          (g += Math.abs(h) * 0.35),
          (g += Math.hypot(m - _.x, h - _.z) * 0.12),
          this.pick &&
            t !== this.pick &&
            (g += this.pick.split(`:`)[0] === t.split(`:`)[0] ? 0.5 : 1.5),
          g < S && ((S = g), (x = [m, h]), (C = t)));
      };
    for (let e of [1, -1])
      for (let [t, n] of [m + 0.5, m - 0.6, m + 1.4, 0].entries())
        for (let [r, i] of [1.2, 2, 2.9].entries())
          w(`${e}:${t}:${r}`, n, e * (g + i), t * 0.6 + r * 0.8 + (e === v ? 0 : y));
    for (let [e, t] of [0, 1, -1].entries()) w(`0:${e}`, -(h + 1.3), t, 4 + e * 0.3);
    return ((this.pick = C), x);
  }
  sweep(e, t, n) {
    let r = e.obbsAt(e.x, e.z, e.heading, 0.62),
      i = e.x,
      a = e.z,
      o = e.heading,
      s = 0.35 * t;
    for (let t = 0; t < Wd; t += 0.35)
      ((o += (s / e.def.wheelbase) * Math.tan(n)),
        (i += s * Math.sin(o)),
        (a += s * Math.cos(o)),
        r.push(...e.obbsAt(i, a, o, 0.62)));
    return r;
  }
  waypoint(e, t) {
    let n = this.group.position,
      r = (e) => e < 5.6;
    if (r(n.z) === r(t)) return [e, t];
    let i = [-7.35, 2, 7.6],
      a = (t) => Math.abs(n.x - t) + Math.abs(t - e),
      o = i.reduce((e, t) => (a(t) < a(e) ? t : e)),
      s = r(n.z) ? 3.9 : 7.3,
      c = r(n.z) ? 7.3 : 3.9;
    return Math.abs(n.x - o) > 0.35 ? [o, n.z > 4.2 && n.z < 7 ? n.z : s] : [o, c];
  }
  update(e, t, n, r, i = [], a = null, o = null) {
    this.t += e;
    let s = this.group,
      c = s.position,
      l = 0,
      u = 0;
    if (t || a) {
      let [e, s] = this.waypoint(...(a ?? this.spot(t, n, r, i, o))),
        d = e - c.x,
        f = s - c.z,
        p = Math.hypot(d, f);
      if (p > 0.12) {
        let e = Math.min(a ? Jd * 1.5 : p > 3.5 ? Jd : qd, p * 2.5);
        ((l = (d / p) * e), (u = (f / p) * e));
      }
    }
    let d = l - this.vx,
      f = u - this.vz,
      p = Math.hypot(d, f),
      m = 9 * e,
      h = p > m ? m / p : 1;
    ((this.vx += d * h), (this.vz += f * h));
    let g = c.x,
      _ = c.z;
    ((c.x += this.vx * e), (c.z += this.vz * e));
    let v = Math.hypot(c.x - g, c.z - _),
      y = v / Math.max(e, 0.001),
      b = this.facing;
    if (y > 0.6) b = Math.atan2(c.x - g, c.z - _);
    else if (a) b = -Math.PI / 2;
    else if (t) {
      let [e, n] = t.bodyCenter();
      b = Math.atan2(e - c.x, n - c.z);
    }
    let x = b - this.facing;
    ((x = Math.atan2(Math.sin(x), Math.cos(x))),
      (this.facing += Math.max(-9 * e, Math.min(9 * e, x))),
      (s.rotation.y = this.facing));
    let S = 1.3 * (this.crouched && y < 1 ? 0.62 : 1);
    ((s.scale.y += (S - s.scale.y) * Math.min(1, e * 10)),
      (this.stride += (v / (ld * 1.15)) * Math.PI * 2));
    let C = Math.min(1, y / 1.2),
      w = Math.sin(this.stride) * C,
      T = y > 2.6 ? 0.85 : 0.6;
    ((this.legs[0].rotation.x = w * T),
      (this.legs[1].rotation.x = -w * T),
      (c.y = Math.abs(Math.sin(this.stride)) * (y > 2.6 ? 0.09 : 0.04) * C),
      (s.rotation.x = y > 2.6 ? 0.12 : 0));
    let [E, D] = this.arms,
      O = Math.sin(this.t * 12),
      k = -w * 0.5,
      A = 0,
      ee = w * 0.5,
      j = 0;
    r === `terus`
      ? (k = ee = -1.9 + O * 0.5)
      : r === `stop`
        ? ((k = ee = 0), (A = -2.9), (j = 2.9))
        : r === `kiri`
          ? (j = 1.6 + O * 0.35)
          : r === `kanan` && (A = -1.6 - O * 0.35);
    let te = Math.min(1, e * 18);
    ((E.rotation.x += (k - E.rotation.x) * te),
      (E.rotation.z += (A - E.rotation.z) * te),
      (D.rotation.x += (ee - D.rotation.x) * te),
      (D.rotation.z += (j - D.rotation.z) * te));
  }
  head() {
    return [this.group.position.x, 2.9, this.group.position.z];
  }
};
var Xd = {
  clean: `✅`,
  lecet: `🟨`,
  angry: `💥`,
};
var Zd = {
  terus: `Terus, terus!`,
  kiri: `Kiri, kiri!`,
  kanan: `Kanan, kanan!`,
  stop: `STOP! STOP!`,
};
var Qd = 0.4;
var $d = 0.25;
var ef = -AREA.openX;
var tf = AREA.openX;
var nf = tf - 3.6;
var rf = nf + 1.3;
var af = [rf, STREET.roadZ0 - 0.25];
var of = [rf, STREET.nearLane - 0.55];
var sf = [
  [-3.4, 2.4, 8],
  [-0.9, 2.4, 7.8],
  [2.6, 2.4, 7.9],
  [5.7, 2.6, 8.3],
  [-12.2, 2.3, 8.1],
  [6.5, 2.3, 19],
  [3.1, 1, 7.1],
];
var cf = [
  [[-3.6, 7.75]],
  [[0, 7.7]],
  [[2.3, 7.75]],
  [[4.6, 7.7]],
  [[-12.4, 7.9]],
  [
    [-1, 9.6],
    [-26, 9.6],
  ],
  [
    [3, 9.6],
    [26, 9.6],
  ],
];
var lf = cf.slice(0, 5);
var uf = [-7.35, 2, 7.6];
function pathLength(e, t, n) {
  let r = n[0],
    i = (t) => Math.abs(e[0] - t) + Math.abs(t - r[0]),
    a = uf.reduce((e, t) => (i(t) < i(e) ? t : e)),
    o = [e];
  return (t && o.push([e[0], -3.3]), o.push([a, 3.9], [a, 7.3], ...n), o);
}
var ff = (e) => Math.atan2(Math.sin(e), Math.cos(e));
var randRange = (e, t) => e + Math.random() * (t - e);
function rank(e) {
  return e < 0
    ? `rank.0`
    : e < 8e3
      ? `rank.1`
      : e < 16e3
        ? `rank.2`
        : e < 24e3
          ? `rank.3`
          : e < 32e3
            ? `rank.4`
            : `rank.5`;
}
var HIDING_SPOT = [5.7, 7.35];
var gf = 1.5;
var _f = 3;
var vf = 7;
var yf = -34;
var bf = 5;
var xf = 10;
function polylineSamples(e, t) {
  let n = [],
    r = (e, t, r, i) => {
      let a = Math.max(1, Math.round(Math.hypot(r - e, i - t) / $d));
      for (let o = 0; o < a; o++) n.push(e + ((r - e) * o) / a, t + ((i - t) * o) / a);
    },
    [i, a] = e[0];
  for (let o = 1; o < e.length; o++) {
    let [s, c] = e[o],
      l = e[o + 1],
      u = Math.hypot(s - i, c - a),
      d = (s - i) / u,
      f = (c - a) / u;
    if (!l) {
      (r(i, a, s, c), n.push(s, c));
      break;
    }
    let p = Math.hypot(l[0] - s, l[1] - c),
      m = (l[0] - s) / p,
      h = (l[1] - c) / p;
    if (Math.abs(d * m + f * h) > 0.25) {
      (r(i, a, s, c), (i = s), (a = c));
      continue;
    }
    let g = Math.min(t, u, p),
      _ = s - d * g,
      v = c - f * g;
    r(i, a, _, v);
    let y = _ + m * g,
      b = v + h * g,
      x = Math.max(2, Math.round((g * Math.PI) / 2 / $d));
    for (let e = 0; e < x; e++) {
      let t = ((Math.PI / 2) * e) / x;
      n.push(
        y + g * (-m * Math.cos(t) + d * Math.sin(t)),
        b + g * (-h * Math.cos(t) + f * Math.sin(t)),
      );
    }
    ((i = s + m * g), (a = c + h * g));
  }
  return n;
}
var jf = 11817770;
var Mf = 10251071;
var Nf = 3882308;
var Pf = 11183772;
function Ff(e, t, n, r, i, a, o) {
  let s = new ei(
    new Pa(t, n),
    new qa({
      color: r,
    }),
  );
  ((s.rotation.x = -Math.PI / 2), s.position.set(i, o, a), (s.receiveShadow = !0), e.add(s));
}
function buildWorldMeshes(e) {
  let { minX: t, maxX: n, minZ: r, maxZ: i, openX: a, openHalf: o } = AREA,
    s = STREET,
    c = new Uu(),
    l = (t, n, r, i, a = 0) => {
      (t.position.set(n, r, i), (t.rotation.y = a), e.add(t));
    };
  (Ff(e, 160, 110, 12563870, 0, 5, -0.03),
    Ff(e, 160, s.roadZ1 - s.roadZ0, Nf, 0, (s.roadZ0 + s.roadZ1) / 2, 0),
    Ff(e, 160, s.roadZ0 - s.walkZ0, Pf, 0, (s.roadZ0 + s.walkZ0) / 2, -0.005),
    Ff(e, 160, s.farWalkZ1 - s.roadZ1, Pf, 0, (s.farWalkZ1 + s.roadZ1) / 2, -0.005));
  for (let t of [-1, 1]) Ff(e, o * 2, s.roadZ0 - i, 4869719, t * a, (s.roadZ0 + i) / 2, 0.004);
  c.at();
  let u = (s.roadZ0 + s.roadZ1) / 2;
  for (let e = -70; e <= 70; e += 5) c.box(2.4, 0.02, 0.14, 15921906, e, 0.01, u);
  for (let e = -70; e < 70; e++) {
    let t = e % 2 == 0 ? 2236962 : 15921906;
    (c.box(1, 0.16, 0.3, t, e + 0.5, 0.08, s.roadZ1 + 0.15),
      Math.abs(Math.abs(e + 0.5) - a) > o + 0.3 &&
        c.box(1, 0.16, 0.3, t, e + 0.5, 0.08, s.roadZ0 - 0.15));
  }
  for (let e of [-1, 1]) {
    let t = e < 0 ? -1 : 1,
      n = e * a;
    (c.box(0.28, 0.02, 1.3, 15921906, n, 0.012, 9 - t * 0.25),
      c.box(0.95, 0.02, 0.28, 15921906, n - 0.3, 0.012, 9 + t * 0.25, 0, (t * -Math.PI) / 4),
      c.box(0.95, 0.02, 0.28, 15921906, n + 0.3, 0.012, 9 + t * 0.25, 0, (t * Math.PI) / 4));
    let r = drawCanvasSign([e < 0 ? `MASUK` : `KELUAR`], 2.4, 0.6, `#4a4e57`, `#f2f2f2`);
    ((r.rotation.x = -Math.PI / 2), l(r, n, 0.013, 7.65));
  }
  for (let e = -70; e < 70; e += 4)
    c.box(3.9, 0.8, 0.25, e % 8 == 0 ? 15326403 : 14272936, e + 2, 0.4, s.farWalkZ1 + 0.3);
  let d = r - 1.1,
    f = (e, t, n, r, i) => {
      if ((c.at(e, 0, d), c.box(t - 0.15, n, 6, r, 0, n / 2, -3), i === `genteng`))
        c.roof(t + 0.4, 6.8, 1.5, jf, 0, n, -3);
      else if (i === `flat`)
        (c.box(t, 0.25, 6.2, 14209732, 0, n + 0.12, -3),
          c.box(1.2, 0.7, 1.2, 9080728, t / 4, n + 0.6, -3.6),
          c.cyl(0.55, 0.55, 1, 15888413, t / 4, n + 1.45, -3.6, 10),
          c.cyl(0.2, 0.5, 0.2, 15888413, t / 4, n + 2.05, -3.6, 10));
      else {
        c.roof(t + 0.4, 6.6, 1.4, 3877408, 0, n, -3);
        for (let e of [-1, 1])
          (c.cone(0.5, 3, 3877408, e * (t / 2 - 0.5), n + 1.5, -1.2, 6, 0, -e * 0.5),
            c.cone(0.4, 2.2, 3877408, e * (t / 2 - 1.6), n + 1.6, -1.2, 6, 0, -e * 0.35));
      }
    },
    p = (e, t, n, r, i, a, o, s = {}) => l(drawCanvasSign(e, r, i, a, o, s), t, n, d + 0.08),
    m = (e, t) => c.box(e, 0.08, 1.2, t, 0, 2.38, 0.55, 0.16);
  (f(-9.6, 4.8, 3.3, 15986918, `genteng`),
    c
      .box(4.6, 1.1, 0.1, 2785236, 0, 0.55, 0.05)
      .box(2.2, 1, 0.5, 12575733, -0.7, 1.6, 0.3)
      .box(1, 2.1, 0.1, 3811866, 1.5, 1.05, 0.07),
    m(4.2, 2785236),
    p([`WARTEG BU SITI`], -9.6, 2.85, 4.2, 0.7, `#1f6fd1`, `#ffffff`),
    f(-4.8, 4.8, 3.7, 16777215, `flat`),
    c.box(4.1, 2.3, 0.1, 10474495, 0, 1.2, 0.06).box(0.08, 2.3, 0.12, 15921906, 0, 1.2, 0.08));
  for (let e = 0; e < 4; e++)
    c.cyl(0.18, 0.18, 0.36, 8046915, 1.4 + (e % 2) * 0.4, 0.18 + Math.floor(e / 2) * 0.36, 0.5, 8);
  (p([`AKALMART`], -4.8, 3.05, 4.5, 0.95, `#d62828`, `#ffffff`, {
    stripes: [`#ffd23f`, `#1f6fd1`],
  }),
    f(0, 4.8, 5.6, 16181185, `gonjong`),
    c.box(3.2, 1.2, 0.1, 12575733, 0, 1.75, 0.06));
  for (let e = 0; e < 3; e++)
    for (let t = -3 + e; t <= 3 - e; t++)
      c.box(0.34, 0.08, 0.2, 16777215, t * 0.4, 1.3 + e * 0.28, 0.2);
  for (let e of [-1, 1]) c.box(1.1, 1, 0.08, 5996454, e * 1.2, 4.6, 0.05);
  (m(4.2, 11730971),
    p([`RM PADANG`, `MINANG JAYA`], 0, 3.35, 4.2, 1.2, `#f2c230`, [`#b3001b`, `#111111`]),
    f(4.8, 4.8, 3.3, 14275783, `flat`),
    c.box(3.6, 2.3, 0.1, 2369067, -0.2, 1.15, 0.06));
  for (let e = 0; e < 4; e++) c.cyl(0.33, 0.33, 0.2, 1513239, 2, 0.1 + e * 0.2, 0.5, 10);
  (p([`BENGKEL MOTOR`, `TAMBAL BAN · GANTI OLI`], 4.8, 2.8, 4.3, 0.9, `#111111`, [
    `#ffd23f`,
    `#ffffff`,
  ]),
    f(9.6, 4.8, 6, 15250592, `flat`),
    c.box(3.8, 2.4, 0.1, 10133670, 0, 1.2, 0.06));
  for (let e = 1; e < 6; e++) c.box(3.8, 0.04, 0.12, 8093830, 0, e * 0.4, 0.07);
  for (let e of [-1, 1]) c.box(1.1, 1, 0.08, 5996454, e * 1.2, 4, 0.05);
  (c.box(0.8, 0.5, 0.4, 15921906, 1.9, 5.2, 0.25),
    p([`FOTOKOPI · ATK · PULSA`], 9.6, 2.95, 4.3, 0.7, `#ffffff`, `#d62828`, {
      border: `#d62828`,
    }),
    p([`LAUNDRY KILOAN`], 9.6, 5.1, 3, 0.55, `#18a54a`, `#ffffff`));
  let h = [15914934, 13624276, 15253953, 14081260, 15985077, 14272936];
  ([-14.8, -20, -25.2, -30.4, -35.6, 14.8, 20, 25.2, 30.4, 35.6].forEach((e, t) => {
    (f(e, 5, 3 + (t % 3) * 1.1, h[t % h.length], t % 4 == 1 ? `flat` : `genteng`),
      c.box(1, 2, 0.1, 6048314, -1, 1, 0.06).box(1.2, 1, 0.08, 5996454, 1, 1.7, 0.05));
  }),
    c.at(t - 1.3, 0, r + 0.8),
    c.cyl(0.06, 0.06, 6.4, 14540253, 0, 3.2, 0, 6).ball(0.12, 16765503, 0, 6.45, 0, 0),
    c.box(1.5, 0.48, 0.04, 14687012, 0.8, 6, 0).box(1.5, 0.48, 0.04, 16777215, 0.8, 5.52, 0),
    c.at(-18, 0, -3.5),
    c.box(6, 3.4, 6, 16053486, 0, 1.7, 0).box(6.2, 0.4, 6.2, 2067020, 0, 3.4, 0),
    c
      .ball(1.8, 2067020, 0, 3.7, 0, 2)
      .cyl(0.04, 0.04, 1, 16765503, 0, 5.9, 0, 6)
      .ball(0.16, 16765503, 0, 6.45, 0, 0));
  for (let e of [-1.6, 0, 1.6]) c.box(0.08, 1.7, 0.9, 2059077, 3.02, 1.5, e);
  for (let e of [-1.6, 1.6]) c.box(0.9, 1.7, 0.08, 2059077, e, 1.5, 3.02);
  (c
    .cyl(0.5, 0.62, 7.4, 16053486, 3.9, 3.7, 3.9, 8)
    .cyl(0.85, 0.85, 0.2, 2067020, 3.9, 6.3, 3.9, 8),
    c.ball(0.62, 2067020, 3.9, 7.5, 3.9, 1),
    c
      .cone(0.26, 0.5, 10133670, 4.7, 6.75, 3.9, 8, 0, Math.PI / 2)
      .cone(0.26, 0.5, 10133670, 3.9, 6.75, 4.7, 8, -Math.PI / 2),
    l(drawCanvasSign([`MUSHOLA AL-IKHLAS`], 3.4, 0.55, `#1f8a4c`, `#ffffff`), -18, 2.75, -0.45));
  let g = (e, t, n = 5) => {
      (c.at(e, 0, t), c.cyl(0.15, 0.22, n, 9071173, 0, n / 2, 0, 6));
      for (let e = 0; e < 7; e++) {
        let t = (e / 7) * Math.PI * 2;
        c.box(0.34, 0.06, 2.5, 3116870, Math.sin(t) * 1.1, n - 0.15, Math.cos(t) * 1.1, 0.4, t);
      }
      c.ball(0.16, 5917226, 0.15, n - 0.25, 0.1, 0).ball(0.16, 5917226, -0.12, n - 0.3, -0.1, 0);
    },
    _ = (e, t) => {
      (c.at(e, 0, t), c.cyl(0.12, 0.17, 1.7, 8827727, 0, 0.85, 0, 6));
      for (let e = 0; e < 5; e++) {
        let t = (e / 5) * Math.PI * 2 + 0.4;
        c.box(0.6, 0.05, 1.7, 5025616, Math.sin(t) * 0.75, 1.9, Math.cos(t) * 0.75, 0.3, t);
      }
    };
  (g(-13.4, -7.5, 5.5),
    g(-14.2, 4.6),
    g(-22.5, 1.5, 6),
    _(-13.6, 0.8),
    _(-21.5, -8),
    c.at(19, 0, -4.5),
    c.box(5, 2.8, 5, 13624276, 0, 1.4, 0).roof(5.6, 5.6, 1.3, jf, 0, 2.8, 0),
    c.box(1, 1.9, 0.08, 6048314, -1, 0.95, 2.52).box(1.2, 0.9, 0.08, 5996454, 1, 1.6, 2.52),
    c.at(15.2, 0, 0.6));
  for (let e of [-1.6, 1.6]) c.cyl(0.05, 0.05, 1.95, Mf, e, 0.97, 0, 6);
  (c.box(3.2, 0.02, 0.02, 3355443, 0, 1.9, 0),
    [15087942, 16777215, 4553629, 16765286, 16743074].forEach((e, t) =>
      c.box(0.5, 0.6, 0.04, e, -1.2 + t * 0.6, 1.58, 0),
    ),
    c.at(16.5, 0, 4.6));
  for (let [e, t] of [
    [-1, -0.8],
    [1, -0.8],
    [-1, 0.8],
    [1, 0.8],
  ])
    c.cyl(0.07, 0.07, 2.2, Mf, e, 1.1, t, 6);
  (c.box(2.3, 0.12, 1.9, Mf, 0, 0.7, 0).roof(3, 2.6, 0.8, jf, 0, 2.2, 0),
    _(14, -3.5),
    _(21, 2.5),
    g(23, -1, 5));
  for (let [e, t, n] of [
    [14.4, 2.6, 9263659],
    [15.1, 3.1, 15921906],
    [18.6, 1.2, 3811866],
  ])
    (c.at(e, 0, t, e),
      c
        .box(0.2, 0.2, 0.32, n, 0, 0.26, 0)
        .box(0.1, 0.16, 0.1, n, 0, 0.42, 0.16)
        .box(0.05, 0.06, 0.05, 14034984, 0, 0.52, 0.17));
  c.at(-4.6, 0, 8.3);
  for (let [e, t] of [
    [-1.65, -0.75],
    [1.65, -0.75],
    [-1.65, 0.75],
    [1.65, 0.75],
  ])
    c.cyl(0.04, 0.04, 2.25, 9080728, e, 1.12, t, 6);
  (c.box(3.6, 0.06, 1.9, 1863120, 0, 2.28, 0, 0.07),
    c.box(2.4, 0.08, 0.6, Mf, -0.3, 0.8, 0.1).box(2.4, 0.06, 0.3, Mf, -0.3, 0.48, -0.45),
    c.box(0.7, 0.8, 0.5, 7039851, 1.2, 0.4, 0.2).cyl(0.28, 0.2, 0.14, 2829099, 1.2, 0.87, 0.2, 8),
    l(
      drawCanvasSign([`PECEL LELE`, `AYAM GORENG · LAMONGAN`], 3.3, 1.05, `#fffdf2`, [
        `#d62828`,
        `#1f8a4c`,
      ]),
      -4.6,
      1.2,
      9.08,
    ),
    l(crowdFigure(`peci`), -3.4, 0, 7.95, Math.PI),
    c.at(-0.9, 0, 8.4),
    c
      .box(1.6, 0.8, 0.8, 2781115, 0, 0.75, 0)
      .box(1.5, 0.6, 0.7, 12575733, 0, 1.45, 0)
      .box(1.8, 0.07, 1, 15921906, 0, 1.98, 0));
  for (let e of [-0.7, 0.7]) c.box(0.05, 0.5, 0.05, Mf, e, 1.72, 0.3);
  (c.cyl(0.22, 0.22, 0.3, 11579568, 0.45, 1.3, 0, 8),
    c
      .cyl(0.3, 0.3, 0.08, 3355443, -0.5, 0.3, 0.44, 10, Math.PI / 2)
      .cyl(0.3, 0.3, 0.08, 3355443, 0.5, 0.3, 0.44, 10, Math.PI / 2));
  for (let [e, t] of [
    [1.4, 0.3],
    [1.9, -0.1],
    [1.5, -0.5],
  ])
    c.cyl(0.14, 0.19, 0.42, 14034984, e, 0.21, t, 6);
  (l(drawCanvasSign([`MIE AYAM · BAKSO`], 1.7, 0.34, `#ffd23f`, `#b3001b`), -0.9, 2.2, 8.92),
    l(crowdFigure(`pria`), -0.9, 0, 7.8, 0),
    l(crowdFigure(`hijab`), 0.9, 0, 8.9, -1.2),
    c.at(2.9, 0, 8.5),
    c
      .box(1.1, 0.7, 0.7, 3120731, 0, 0.7, 0)
      .cyl(0.16, 0.16, 0.34, 12575733, -0.25, 1.22, 0, 8)
      .cyl(0.16, 0.16, 0.34, 10215562, 0.25, 1.22, 0, 8),
    c
      .cyl(0.28, 0.28, 0.07, 3355443, 0, 0.28, 0.4, 10, Math.PI / 2)
      .cyl(0.03, 0.03, 2.4, 14540253, 0.6, 1.2, -0.2, 6),
    [15087942, 16765503, 2855752, 1863120, 16749132, 16777215, 8599788, 1615178].forEach((e, t) => {
      c.add(new _i(1.15, 0.45, 1, 1, !0, (t * Math.PI) / 4, Math.PI / 4), e, 0.6, 2.45, -0.2);
    }),
    l(drawCanvasSign([`ES CENDOL`], 1, 0.3, `#ffffff`, `#1f8a4c`), 2.9, 0.75, 8.87),
    l(crowdFigure(`wanita`), 2.6, 0, 7.9, 0),
    c.at(5.7, 0, 8.3),
    c
      .box(1.9, 0.9, 1.3, 14034984, 0, 0.45, 0)
      .box(1.9, 1.2, 1.3, 16052710, 0, 1.5, 0)
      .box(1.5, 0.8, 0.05, 2829099, 0, 1.4, 0.66),
    c.box(2.1, 0.06, 0.9, 15921906, 0, 2.05, 0.95, 0.2),
    [15087942, 16765503, 2855752, 1863120, 16749132, 8599788].forEach((e, t) =>
      c.box(0.12, 0.5, 0.03, e, -0.6 + t * 0.24, 1.52, 0.7),
    ),
    l(drawCanvasSign([`KOPI · ROKOK · PULSA`], 1.9, 0.34, `#ffffff`, `#d62828`), 5.7, 2.32, 8.97),
    c.at(-13, 0, 8.5));
  for (let e = 0; e < 4; e++) c.cyl(0.36, 0.36, 0.22, 1513239, 0, 0.11 + e * 0.22, 0, 10);
  (c
    .cyl(0.25, 0.25, 0.8, 15888413, 1.1, 0.4, 0, 8, 0, Math.PI / 2)
    .box(0.8, 0.5, 0.5, 7039851, 1.1, 0.25, 0.6),
    l(drawCanvasSign([`TAMBAL BAN`], 1.3, 0.4, `#111111`, `#ffffff`), -13, 1.15, 8.72),
    l(crowdFigure(`pria`), -12.2, 0, 8.1, 0.6));
  for (let e of [-1, 1]) {
    let t = e * (a - o - 0.35);
    (c.at(t, 0, 7.75).cyl(0.05, 0.05, 3, 14540253, 0, 1.5, 0, 6),
      l(
        drawCanvasSign([`P`], 0.75, 0.75, `#1c5fd0`, `#ffffff`, {
          border: `#ffffff`,
        }),
        t,
        2.65,
        7.8,
      ),
      l(drawCanvasSign([`PARKIR`], 0.95, 0.3, `#ffffff`, `#1c5fd0`), t, 2.1, 7.8));
  }
  (c.at(12.6, 0, 9.9).cyl(0.05, 0.05, 2.9, 14540253, 0, 1.45, 0, 6),
    l(
      drawCanvasSign([`JL. AKAL SEHAT`], 1.8, 0.4, `#1f8a4c`, `#ffffff`, {
        border: `#ffffff`,
      }),
      12.6,
      2.75,
      9.95,
    ),
    c.at());
  for (let e of [-16, -7.3, 7.3, 15.5, 22, -24])
    c.cyl(0.26, 0.2, 0.4, jf, e, 0.2, 7.75, 8).ball(0.42, 4165450, e, 0.7, 7.75, 0);
  for (let e of [-20, -9, 4, 13, 27, -31])
    c.cyl(0.26, 0.2, 0.4, jf, e, 0.2, 20.4, 8).ball(0.42, 4165450, e, 0.7, 20.4, 0);
  (c.cyl(0.24, 0.2, 0.7, 2855752, 7, 0.35, 9.2, 8).cyl(0.24, 0.2, 0.7, 15888413, 6.5, 0.35, 9.2, 8),
    c.at(6.5, 0, 19.7),
    c
      .box(1.3, 0.75, 0.8, 16052710, 0, 0.75, 0)
      .box(1.2, 0.5, 0.7, 12575733, 0, 1.38, 0)
      .box(1.5, 0.06, 1, 14034984, 0, 1.9, 0),
    c.cyl(0.28, 0.28, 0.07, 3355443, 0, 0.28, -0.44, 10, Math.PI / 2),
    l(drawCanvasSign([`SIOMAY`], 1, 0.3, `#ffffff`, `#d62828`), 6.5, 0.8, 20.12),
    l(crowdFigure(`pria`), 6.5, 0, 19, Math.PI),
    c.at(3.1, 0.35, i + 0.2, 0.2),
    c
      .box(0.5, 0.2, 0.22, 15239467, 0, 0.1, 0)
      .box(0.2, 0.2, 0.2, 15239467, 0.3, 0.2, 0)
      .box(0.3, 0.06, 0.06, 15239467, -0.35, 0.16, 0.08),
    c
      .box(0.05, 0.08, 0.05, 15239467, 0.34, 0.34, -0.06)
      .box(0.05, 0.08, 0.05, 15239467, 0.34, 0.34, 0.06),
    c.at());
  let v = [-41, -13.9, 13.9, 41],
    y = 9.95;
  for (let e of v)
    (c.cyl(0.1, 0.14, 7.2, 7039851, e, 3.6, y, 6).box(0.1, 0.1, 1.7, 7039851, e, 6.7, y),
      c.box(0.5, 0.7, 0.45, 9080728, e, 5.6, 10.25));
  for (let e = 0; e < v.length - 1; e++) {
    let t = v[e],
      n = v[e + 1];
    for (let [e, r] of [
      [-0.7, 0.9],
      [0, 1.2],
      [0.7, 0.8],
    ])
      for (let i = 0; i < 8; i++) {
        let a = i / 8,
          o = (i + 1) / 8,
          s = 6.75 - r * 4 * a * (1 - a),
          l = 6.75 - r * 4 * o * (1 - o),
          u = t + (n - t) * a,
          d = t + (n - t) * o,
          f = Math.hypot(d - u, l - s);
        c.box(
          f,
          0.04,
          0.04,
          1710618,
          (u + d) / 2,
          (s + l) / 2,
          y + e,
          0,
          0,
          Math.atan2(l - s, d - u),
        );
      }
  }
  let b = c.build();
  ((b.receiveShadow = !0), e.add(b));
}
var World = class {
  constructor(e) {
    ((this.scene = e),
      (this.blockers = []),
      (this.onHonk = () => {}),
      (this.hold = null),
      (this.lanes = []),
      (this.walkers = []),
      (this.t = 0),
      (this.honkIn = 3));
    let t = STREET,
      n = (e, n, r, i) => {
        let a = {
          z: e,
          dir: n,
          moto: r,
          list: [],
        };
        for (let e = 0; e < i; e++) {
          let n = this.make(a);
          ((n.x = -t.span + ((e + 0.2 + Math.random() * 0.5) * 2 * t.span) / i), a.list.push(n));
        }
        this.lanes.push(a);
      };
    (n(t.nearLane, 1, !1, 4),
      n(t.farLane, -1, !1, 4),
      n(t.nearLane - 1.35, 1, !0, 3),
      n(t.nearLane + 1.45, 1, !0, 3),
      n(t.farLane - 1.45, -1, !0, 3),
      n(t.farLane + 1.35, -1, !0, 3));
    let r = (t, n, r, i, a, o = 0.05) => {
        ((t.rotation.order = `YXZ`),
          (t.rotation.y = (r * Math.PI) / 2),
          e.add(t),
          this.walkers.push({
            obj: t,
            x: a,
            z: n,
            dir: r,
            speed: i,
            v: i,
            phase: Math.random() * 6,
            sway: o,
          }));
      },
      i = () => (Math.random() * 2 - 1) * t.span;
    for (let e = 0; e < 6; e++)
      r(crowdFigure(), e % 2 ? 9.95 : 9.5, e % 2 ? -1 : 1, 1.1 + Math.random() * 0.6, i());
    for (let e = 0; e < 5; e++)
      r(crowdFigure(), e % 2 ? 19.3 : 18.9, e % 2 ? 1 : -1, 1.1 + Math.random() * 0.6, i());
    (r(crowdFigure(`pikulan`), 9.5, 1, 0.95, -20),
      r(ud(!1), 20.2, 1, 0.8, -16, 0.12),
      r(ud(!0), 20.2, 1, 0.8, -14.2, 0.12));
  }
  make(e) {
    let t = e.moto ? $u() : ad();
    ((t.obj.rotation.order = `YXZ`),
      (t.obj.rotation.y = (e.dir * Math.PI) / 2),
      this.scene.add(t.obj));
    let n = t.kind === `angkot` && Math.random() < 0.6;
    return {
      ...t,
      x: 0,
      v: t.speed,
      parked: !1,
      stopX: n ? (Math.random() * 2 - 1) * 20 : null,
      hold: 0,
      stuck: 0,
      phase: Math.random() * 6,
    };
  }
  clear(e, t, n, r) {
    return e.list.every((e) => e === r || e.parked || Math.abs(e.x - t) > (e.len + n) / 2 + 4);
  }
  gapAhead(e, t) {
    let n = 1 / 0;
    for (let r of this.lanes[0].list)
      r.parked || r.x <= e || (n = Math.min(n, r.x - e - r.len / 2 - t));
    return n;
  }
  entryClear(e, t) {
    return this.clear(this.lanes[0], e, t) && this.clear(this.lanes[2], e, t);
  }
  nearClear(e, t) {
    let n = t ? 2.2 : 3.6;
    for (let r of t ? [2] : [0, 2])
      for (let t of this.lanes[r].list) {
        if (t.parked) continue;
        let r = t.x - t.len / 2,
          i = t.x + t.len / 2;
        if (r > e + 2.5) {
          if (r < e + 4 && t.v < 1.5) return !1;
          continue;
        }
        let a = e - 2.5 - i;
        if (a < 0 || (!(this.hold !== null && i <= this.hold + 0.8) && a / Math.max(t.v, 1) < n))
          return !1;
      }
    return !0;
  }
  passing(e) {
    for (let t of [0, 2])
      for (let n of this.lanes[t].list) {
        if (n.parked) continue;
        let t = n.x - n.len / 2,
          r = n.x + n.len / 2;
        if (
          !(t > e + 1) &&
          !(
            r < e - 1.6 &&
            this.hold !== null &&
            r <= this.hold + 0.8 &&
            (n.v < 0.5 || (n.v * n.v) / 12 < this.hold - r + 0.3)
          ) &&
          !(r < e - 30)
        )
          return !0;
      }
    return !1;
  }
  poach(e, t) {
    let n = this.lanes[2],
      r = n.list.find((n) => !n.parked && !n.once && n.x > e && n.x < t);
    if (!r) return null;
    let i = this.make(n);
    return (
      (i.x = -STREET.span),
      (i.parked = !0),
      (i.obj.visible = !1),
      (n.list[n.list.indexOf(r)] = i),
      r
    );
  }
  adopt(e, t, n) {
    let r = this.lanes[2];
    ((e.obj.rotation.order = `YXZ`),
      e.obj.rotation.set(0, Math.PI / 2, 0),
      r.list.push({
        ...e,
        x: t,
        v: n,
        parked: !1,
        once: !0,
        stopX: null,
        hold: 0,
        stuck: 0,
        phase: 0,
      }));
  }
  get bikeLaneZ() {
    return this.lanes[2].z;
  }
  update(e) {
    let t = STREET;
    ((this.t += e), (this.honkIn -= e));
    for (let n of this.lanes) {
      let r = n.moto ? 0.5 : 1;
      for (let i of [...n.list]) {
        if (i.parked) {
          if (!this.clear(n, i.x, i.len, i)) continue;
          ((i.parked = !1), (i.obj.visible = !0));
        }
        let a = 1 / 0;
        for (let e of n.list) {
          if (e === i || e.parked) continue;
          let t = n.dir * (e.x - i.x);
          t > 0 && (a = Math.min(a, t - (e.len + i.len) / 2));
        }
        for (let e of this.blockers) {
          if (Math.abs(e.z - n.z) > e.hz + r) continue;
          let t = n.dir * (e.x - i.x);
          t > 0 && (a = Math.min(a, t - e.hx - i.len / 2));
        }
        if (this.hold !== null && n.dir === 1) {
          let e = i.x + i.len / 2;
          e <= this.hold + 0.8 && (a = Math.min(a, this.hold - e + 1));
        }
        let o = zf((a - 1 - i.v * 0.35) * 1.4, 0, i.speed);
        i.hold > 0
          ? ((i.hold -= e), (o = 0))
          : i.stopX !== null &&
            n.dir * (i.x - i.stopX) > 0 &&
            ((i.hold = 2.5 + Math.random() * 2), (i.stopX = null));
        let s = i.v;
        if (
          ((i.v += zf(o - i.v, -7 * e, (n.moto ? 3.2 : 2.2) * e)),
          (i.x += n.dir * i.v * e),
          i.tick?.(i.v, e),
          n.moto)
        ) {
          let t = (i.v - s) / Math.max(e, 0.001);
          ((i.obj.rotation.x +=
            (zf(-t * 0.012, -0.08, 0.08) - i.obj.rotation.x) * Math.min(1, e * 8)),
            (i.obj.rotation.z = -Math.cos(this.t * 0.8 + i.phase) * 0.1 * Math.min(1, i.v / 6)));
        }
        if (
          (i.v < 0.3 && a < 3 && Math.abs(i.x) < 24
            ? ((i.stuck += e),
              i.stuck > 1.2 &&
                this.honkIn <= 0 &&
                ((this.honkIn = 4 + Math.random() * 5), this.onHonk(i.x, n.z, i.kind)))
            : (i.stuck = 0),
          n.dir * i.x > t.span)
        ) {
          if ((this.scene.remove(i.obj), disposeTree(i.obj), i.once)) {
            n.list = n.list.filter((e) => e !== i);
            continue;
          }
          (Object.assign(i, this.make(n), {
            x: -n.dir * t.span,
            parked: !0,
          }),
            (i.obj.visible = !1));
        }
        let c = n.moto ? Math.sin(this.t * 0.8 + i.phase) * 0.14 : 0;
        i.obj.position.set(i.x, 0, n.z + c);
      }
    }
    for (let n of this.walkers) {
      let r = !0;
      for (let e of this.blockers) {
        if (!e.moving || Math.abs(e.z - n.z) > e.hz + 0.6) continue;
        let t = n.dir * (e.x - n.x) - e.hx;
        t > -0.5 && t < 1.6 && (r = !1);
      }
      n.v += zf((r ? n.speed : 0) - n.v, -4 * e, 2.5 * e);
      let i = n.v * e;
      ((n.x += n.dir * i),
        n.dir * n.x > t.span && (n.x = -n.dir * t.span),
        (n.phase += (i / ld) * Math.PI * 2));
      let a = Math.min(1, n.v / 0.8);
      (swayProp(n.obj, n.phase, a),
        n.obj.position.set(n.x, Math.abs(Math.sin(n.phase)) * 0.035 * a, n.z),
        n.obj.userData.legs || (n.obj.rotation.z = Math.sin(n.phase * 0.5) * n.sway));
    }
  }
};
var View = class e {
  static {
    this.MOTOR_ROWS = [
      [-6.5, 6],
      [3.3, 4],
    ];
  }
  static {
    this.MOTOR_Z = AREA.laneHalf + 1.8;
  }
  constructor(e) {
    ((this.scene = new gn()),
      (this.camera = new jo(-10, 10, 10, -10, 1, 200)),
      (this.bays = []),
      (this.obstacles = []),
      (this.onKnock = () => {}),
      (this.shake = 0),
      (this.dynamic = new cn()),
      (this.walls = []),
      (this.parked = []),
      (this.motorSlots = []),
      (this.tweens = []),
      (this.dominos = []),
      (this.marker = new cn()),
      (this.clock = 0),
      (this.camBase = new U()),
      (this.tmp = new U()),
      (this.insets = {
        top: 0,
        bottom: 0,
      }),
      (this.renderer = new su({
        canvas: e,
        antialias: !0,
      })),
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
      (this.renderer.shadowMap.enabled = !0),
      (this.renderer.shadowMap.type = 1),
      (this.scene.background = new K(12563870)),
      this.scene.add(new vo(16777215, 10129274, 1.5)));
    let t = new No(16773590, 2.2);
    (t.position.set(-9, 22, 14),
      t.target.position.set(0, 0, 5),
      (t.castShadow = !0),
      t.shadow.mapSize.set(2048, 2048));
    let n = t.shadow.camera;
    ((n.left = -34),
      (n.right = 34),
      (n.top = 26),
      (n.bottom = -26),
      (n.far = 80),
      (t.shadow.bias = -8e-4),
      this.scene.add(t, t.target));
    for (let e = 0; e < AREA.bays; e++)
      this.bays.push({
        i: e,
        x: (e - (AREA.bays - 1) / 2) * AREA.bayW,
        z: -AREA.laneHalf - AREA.bayD / 2,
      });
    (this.buildStatic(),
      (this.markerFill = new Hr({
        color: 16765503,
        transparent: !0,
        opacity: 0.5,
      })));
    let r = new ei(new Pa(AREA.bayW - 0.2, AREA.bayD - 0.2), this.markerFill);
    ((r.rotation.x = -Math.PI / 2),
      (r.position.y = 0.02),
      this.marker.add(r),
      (this.arrow = new ei(
        new _i(0.45, 0.9, 4),
        new Hr({
          color: 16765503,
        }),
      )),
      (this.arrow.rotation.x = Math.PI),
      this.marker.add(this.arrow),
      (this.marker.visible = !1),
      this.scene.add(this.marker),
      this.scene.add(this.dynamic));
  }
  wall(e, t, n, r, i, a) {
    let o = t - e,
      s = r - n;
    (i > 0 && this.scene.add(Xf(o, i, s, a, (e + t) / 2, i / 2, (n + r) / 2)),
      this.walls.push({
        obb: {
          x: (e + t) / 2,
          z: (n + r) / 2,
          hx: o / 2,
          hz: s / 2,
          rot: 0,
        },
        kind: `wall`,
        cost: 0,
        knocked: !1,
      }));
  }
  buildStatic() {
    let t = this.scene,
      {
        minX: n,
        maxX: r,
        minZ: i,
        maxZ: a,
        laneHalf: o,
        bayW: s,
        bayD: c,
        openX: l,
        openHalf: u,
      } = AREA,
      d = new ei(new Pa(r - n, a - i), Yf(4869719));
    ((d.rotation.x = -Math.PI / 2),
      d.position.set((n + r) / 2, 0, (i + a) / 2),
      (d.receiveShadow = !0),
      t.add(d));
    let f = -o - c / 2;
    for (let e = 0; e <= AREA.bays; e++) t.add(Zf(0.12, c, 15921906, (e - AREA.bays / 2) * s, f));
    let p = l - u;
    t.add(Zf(p * 2 - 0.6, 0.1, 15254855, 0, o + 0.3));
    let m = drawCanvasSign([`PARKIR MOBIL`], 3.6, 0.5, `#1c5fd0`, `#ffffff`, {
      border: `#ffffff`,
    });
    (m.position.set(0, 1.42, i + 0.03), t.add(m));
    for (let [n, r] of e.MOTOR_ROWS) {
      let i = n + ((r - 1) * 0.95) / 2,
        a = new ei(new Pa(r * 0.95 + 0.3, 2.2), Yf(5988720));
      ((a.rotation.x = -Math.PI / 2),
        a.position.set(i, 0.004, e.MOTOR_Z + 0.05),
        (a.receiveShadow = !0),
        t.add(a));
      for (let i = 0; i <= r; i++)
        t.add(Zf(0.06, 2.1, 15921906, n + (i - 0.5) * 0.95, e.MOTOR_Z + 0.05));
      let o = drawCanvasSign([`PARKIR MOTOR`], 2.3, 0.4, `#1c5fd0`, `#ffffff`);
      ((o.rotation.x = -Math.PI / 2), o.position.set(i, 0.015, e.MOTOR_Z - 1.3), t.add(o));
    }
    let h = 0.5;
    (this.wall(n - h, r + h, i - h, i, 1.1, 15326403),
      this.wall(n - h, n, i, a, 1.1, 15326403),
      this.wall(r, r + h, i, a, 0.35, 13224393),
      this.wall(-p, p, a, a + 0.4, 0.35, 13224393));
    for (let e of [-1, 1])
      this.wall(e * l - u, e * l + u, STREET.walkZ0 + 1.2, STREET.walkZ0 + 1.6, 0, 0);
  }
  reset() {
    (this.dynamic.clear(),
      (this.tweens = []),
      (this.dominos = []),
      (this.parked = []),
      (this.motorSlots = []),
      (this.obstacles = [...this.walls]),
      this.setTarget(null));
    let t = new Set();
    for (; t.size < 2;) t.add(Math.floor(Math.random() * AREA.bays));
    for (let e of t) {
      let t = this.bays[e],
        n = new CarMesh(pickLang([VEHICLES.city, VEHICLES.mpv]), pickLang(CAR_COLORS)),
        r = (Math.random() < 0.5 ? Math.PI : 0) + (Math.random() - 0.5) * 0.08;
      (n.setBodyCenter(t.x + (Math.random() - 0.5) * 0.3, t.z + (Math.random() - 0.5) * 0.4, r),
        this.dynamic.add(n.group),
        this.addParked(n, PRICES.mobil, !1, 7 + this.parked.length * 26));
    }
    let n = e.MOTOR_Z;
    for (let [t, r] of e.MOTOR_ROWS) this.motorRow(t, r, n);
    this.gerobak(0.3, n - 0.1);
    let r = new Set();
    for (; r.size < 2;) r.add(1 + Math.floor(Math.random() * (AREA.bays - 1)));
    for (let e of r) this.cone((e - AREA.bays / 2) * AREA.bayW, -AREA.laneHalf + 0.3);
    this.cone(1.7 + Math.random() * 0.7, AREA.laneHalf - 0.2);
  }
  prop(e, t, n, r, i, a, o) {
    (e.position.set(r, 0, i), this.dynamic.add(e));
    let s = {
      obb: {
        x: r,
        z: i,
        hx: a,
        hz: o,
        rot: 0,
      },
      kind: t,
      cost: n,
      knocked: !1,
      mesh: e,
    };
    return (this.obstacles.push(s), s);
  }
  cone(e, t) {
    let n = new cn(),
      r = new ei(new _i(0.2, 0.6, 8), Yf(16739098));
    ((r.position.y = 0.34),
      (r.castShadow = !0),
      n.add(r, Xf(0.46, 0.05, 0.46, 16739098, 0, 0.025, 0)));
    let i = new ei(new gi(0.105, 0.135, 0.12, 8), Yf(16777215));
    ((i.position.y = 0.36), n.add(i), this.prop(n, `cone`, 500, e, t, 0.22, 0.22));
  }
  motorRow(e, t, n) {
    let r = this.motorSlots.length ? this.motorSlots[this.motorSlots.length - 1].row + 1 : 0,
      i = Math.floor(Math.random() * t);
    for (let a = 0; a < t; a++) {
      let t = {
        x: e + a * 0.95,
        z: n,
        row: r,
        ob: null,
        reserved: !1,
      };
      (this.motorSlots.push(t), a !== i && this.parkMotor(t));
    }
  }
  parkMotor(e) {
    let t = new cn();
    (t.add(
      Xf(0.34, 0.45, 1.2, pickLang([14034984, 1914199, 2855752, 2236962, 16219904]), 0, 0.62, 0),
    ),
      t.add(Xf(0.3, 0.12, 0.7, 1710618, 0, 0.9, -0.2)),
      t.add(Xf(0.62, 0.06, 0.06, 5592405, 0, 1.08, 0.5)));
    for (let e of [-0.65, 0.65]) {
      let n = new ei(new gi(0.3, 0.3, 0.12, 10), Yf(1447446));
      ((n.rotation.z = Math.PI / 2), n.position.set(0, 0.3, e), (n.castShadow = !0), t.add(n));
    }
    let n = this.prop(t, `motor`, 1e3, e.x, e.z, 0.3, 0.95);
    ((n.slot = this.motorSlots.indexOf(e)), (e.ob = n), (e.reserved = !1));
  }
  claimMotor() {
    let e = this.motorSlots.filter((e) => e.ob && !e.ob.knocked && !e.reserved);
    if (e.length < 3) return null;
    let t = pickLang(e);
    return ((t.reserved = !0), t);
  }
  takeMotor(e) {
    return e.ob
      ? ((this.obstacles = this.obstacles.filter((t) => t !== e.ob)),
        e.ob.mesh && this.dynamic.remove(e.ob.mesh),
        (e.ob = null),
        (e.reserved = !0),
        e)
      : null;
  }
  freeMotorSlot() {
    let e = this.motorSlots.filter((e) => !e.ob && !e.reserved);
    return e.length ? pickLang(e) : null;
  }
  gerobak(e, t) {
    let n = new cn();
    (n.add(Xf(1.2, 0.8, 1.9, 2781115, 0, 0.75, 0)),
      n.add(Xf(1.1, 0.5, 0.9, 12575733, 0, 1.4, 0.4)),
      n.add(Xf(1.4, 0.08, 2.1, 16044894, 0, 2.05, 0)));
    for (let [e, t] of [
      [-0.55, -0.9],
      [0.55, -0.9],
      [-0.55, 0.9],
      [0.55, 0.9],
    ])
      n.add(Xf(0.07, 0.9, 0.07, 9263659, e, 1.6, t));
    for (let e of [-0.66, 0.66]) {
      let t = new ei(new gi(0.36, 0.36, 0.08, 12), Yf(3355443));
      ((t.rotation.z = Math.PI / 2), t.position.set(e, 0.36, 0), n.add(t));
    }
    this.prop(n, `gerobak`, 2e3, e, t, 0.65, 1);
  }
  knock(e, t, n, r = 1) {
    if (e.knocked || !e.mesh) return;
    e.knocked = !0;
    let i = e.mesh,
      a = t >= 0 ? 1 : -1;
    if (e.kind === `cone`) {
      let e = i.position.x,
        a = i.position.z,
        o = 0.5 + r * 0.9,
        s = (Math.random() - 0.5) * 8,
        c = (Math.random() - 0.5) * 0.6;
      this.tween(0.35 + o * 0.18, (r) => {
        let l = 1 - (1 - r) * (1 - r);
        (i.position.set(
          e + (t - n * c) * o * l,
          0.12 + 0.3 * o * Math.sin(Math.min(1, r * 1.6) * Math.PI) * (r < 0.625),
          a + (n + t * c) * o * l,
        ),
          i.rotation.set((Math.PI / 2) * Math.min(1, r * 2), s * l, 0));
      });
    } else {
      let t = e.kind === `motor` ? 1.35 : 1.5;
      if (
        (this.tween(0.5, (e) => {
          let n = e < 0.75 ? (e / 0.75) ** 2 : 1 - 0.06 * Math.sin(((e - 0.75) / 0.25) * Math.PI);
          i.rotation.z = -a * t * n;
        }),
        e.slot !== void 0)
      ) {
        let t = this.motorSlots[e.slot],
          n = this.motorSlots[e.slot + a];
        n &&
          n.row === t.row &&
          n.ob &&
          !n.ob.knocked &&
          this.dominos.push({
            t: 0.14,
            ob: n.ob,
            dir: a,
          });
      }
    }
    this.onKnock(e);
  }
  addParked(e, t, n, r) {
    let i = e.obbs().map((t) => ({
      obb: t,
      kind: `car`,
      cost: 0,
      knocked: !1,
      car: e,
    }));
    this.obstacles.push(...i);
    let a = {
      car: e,
      obstacles: i,
      fee: t,
      tip: n,
      leaveAt: r,
      asked: !1,
    };
    return (this.parked.push(a), a);
  }
  unpark(e) {
    ((this.parked = this.parked.filter((t) => t !== e)),
      (this.obstacles = this.obstacles.filter((t) => !e.obstacles.includes(t))));
  }
  releaseOldest() {
    let e = this.parked.shift();
    if (!e) return null;
    this.obstacles = this.obstacles.filter((t) => !e.obstacles.includes(t));
    let t = e.car.bodyCenter();
    return (this.vanish(e.car.group), t);
  }
  vanish(e) {
    this.tween(
      0.35,
      (t) => e.scale.setScalar(Math.max(0.001, 1 - t)),
      () => this.dynamic.remove(e),
    );
  }
  popIn(e) {
    (e.scale.setScalar(0.001), this.tween(0.25, (t) => e.scale.setScalar(Math.max(0.001, t))));
  }
  bayFree(e) {
    let t = {
      x: e.x,
      z: e.z,
      hx: AREA.bayW / 2 - 0.45,
      hz: AREA.bayD / 2 - 0.45,
      rot: 0,
    };
    return !this.obstacles.some((e) => e.kind === `car` && obbOverlap(e.obb, t));
  }
  pickBay() {
    let e = this.bays.filter((e) => this.bayFree(e));
    if (!e.length) return null;
    let t = (e) =>
        [e.i - 1, e.i + 1].filter(
          (e) => e >= 0 && e < this.bays.length && !this.bayFree(this.bays[e]),
        ).length,
      n = Math.min(...e.map(t));
    return pickLang(e.filter((e) => t(e) === n));
  }
  setTarget(e) {
    ((this.marker.visible = !!e), e && this.marker.position.set(e.x, 0, e.z));
  }
  tween(e, t, n) {
    this.tweens.push({
      t: 0,
      dur: e,
      fn: t,
      done: n,
    });
  }
  update(e) {
    ((this.clock += e),
      (this.markerFill.opacity = 0.35 + 0.2 * Math.sin(this.clock * 5)),
      (this.arrow.position.y = 2.6 + 0.25 * Math.sin(this.clock * 4)),
      (this.arrow.rotation.y = this.clock * 2));
    for (let t of this.dominos) t.t -= e;
    let t = this.dominos.filter((e) => e.t <= 0);
    this.dominos = this.dominos.filter((e) => e.t > 0);
    for (let e of t) this.knock(e.ob, e.dir, 0);
    for (let t of this.tweens) ((t.t += e), t.fn(Math.min(1, t.t / t.dur)));
    let n = this.tweens.filter((e) => e.t >= e.dur);
    this.tweens = this.tweens.filter((e) => e.t < e.dur);
    for (let e of n) e.done?.();
    for (let t of this.parked) t.car.animate(e);
    this.shake = Math.max(0, this.shake - e * 2.5);
  }
  resize(e = this.insets.top, t = this.insets.bottom) {
    this.insets = {
      top: e,
      bottom: t,
    };
    let n = window.innerWidth,
      r = window.innerHeight;
    this.renderer.setSize(n, r, !1);
    let i = n / r < 0.9,
      a = i ? 0 : 0.3,
      o = i ? 1 : 0.92,
      s = i ? AREA.minZ - 4.5 : AREA.minZ - 0.7,
      c = i || r >= 560 ? STREET.roadZ1 + 0.3 : STREET.nearLane + 2,
      l = (AREA.minX + AREA.maxX) / 2,
      u = (s + c) / 2,
      d = this.camera;
    (d.position.set(
      l + Math.sin(a) * Math.cos(o) * 70,
      Math.sin(o) * 70,
      u + Math.cos(a) * Math.cos(o) * 70,
    ),
      d.lookAt(l, 0, u),
      d.updateMatrixWorld(!0));
    let f = 1 / 0,
      p = -1 / 0,
      m = 1 / 0,
      h = -1 / 0,
      g = 0.7;
    for (let e of [AREA.minX - g, AREA.maxX + g])
      for (let t of [s, c])
        for (let n of [0, 1.8]) {
          let r = this.tmp.set(e, n, t).applyMatrix4(d.matrixWorldInverse);
          ((f = Math.min(f, r.x)),
            (p = Math.max(p, r.x)),
            (m = Math.min(m, r.y)),
            (h = Math.max(h, r.y)));
        }
    let _ = Math.max(120, r - e - t),
      v = Math.max((p - f) / n, (h - m) / _),
      y = (f + p) / 2,
      b = (m + h) / 2 + ((e - t) / 2) * v;
    ((d.left = y - (n * v) / 2),
      (d.right = y + (n * v) / 2),
      (d.top = b + (r * v) / 2),
      (d.bottom = b - (r * v) / 2),
      d.updateProjectionMatrix(),
      this.camBase.copy(d.position));
  }
  project(e, t, n) {
    let r = this.tmp.set(e, t, n).project(this.camera);
    return [(r.x * 0.5 + 0.5) * window.innerWidth, (-r.y * 0.5 + 0.5) * window.innerHeight];
  }
  render() {
    let e = this.camera;
    (e.position.copy(this.camBase),
      this.shake > 0 &&
        ((e.position.x += (Math.random() - 0.5) * this.shake),
        (e.position.z += (Math.random() - 0.5) * this.shake)),
      this.renderer.render(this.scene, e));
  }
};

export {
  $d,
  $u,
  AStarPlanner,
  Ad,
  CarMesh,
  Crowd,
  Dd,
  Ed,
  Fd,
  Ff,
  Gd,
  GuideHud,
  HIDING_SPOT,
  Hd,
  Hu,
  Jd,
  Ju,
  Kd,
  Ku,
  Ld,
  Md,
  Mf,
  Nd,
  Nf,
  Od,
  Pd,
  Pf,
  Qd,
  Qu,
  Rd,
  Sd,
  Td,
  Ud,
  Uu,
  Vd,
  View,
  Wd,
  World,
  Xd,
  Xu,
  Yd,
  Yu,
  Zd,
  Zu,
  _f,
  ad,
  addBoxMesh,
  af,
  arcGeometry,
  astarSearch,
  bd,
  bf,
  buildWorldMeshes,
  captureFrame,
  cf,
  crowdFigure,
  disposeTree,
  drawCanvasSign,
  drawWorldLabels,
  du,
  ed,
  ef,
  fd,
  ff,
  gf,
  id,
  isBlocked,
  jd,
  jf,
  kd,
  ld,
  lf,
  md,
  mergeAttributes,
  mergeGeometries,
  nd,
  nf,
  obbCorners,
  obbOverlap,
  obstacleRects,
  od,
  of,
  pathLength,
  patrolTruck,
  polylineSamples,
  qd,
  qu,
  randRange,
  rank,
  rd,
  rf,
  sf,
  signTexture,
  swayProp,
  td,
  tf,
  ud,
  uf,
  uu,
  vd,
  vertexColorMaterial,
  vf,
  wd,
  xd,
  xf,
  yd,
  yf,
  zd,
};
