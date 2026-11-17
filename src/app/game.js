// game.js — auto-split from assets/index-B84SUXf5.js; see docs/MECHANICS.md
import {
  $d,
  $u,
  AStarPlanner,
  CarMesh,
  Crowd,
  Ed,
  GuideHud,
  HIDING_SPOT,
  Qd,
  Td,
  Vd,
  Xd,
  Yd,
  Zd,
  _f,
  af,
  astarSearch,
  bf,
  captureFrame,
  cf,
  disposeTree,
  drawWorldLabels,
  ef,
  ff,
  gf,
  lf,
  nf,
  obbCorners,
  obbOverlap,
  of,
  pathLength,
  patrolTruck,
  polylineSamples,
  randRange,
  rank,
  rf,
  sf,
  tf,
  vf,
  xf,
  yf,
} from "./engine.js";
import {
  AREA,
  CAR_COLORS,
  DRIVERS,
  Driver,
  NPC_DRIVE,
  PRICES,
  STREET,
  TUNING,
  STRINGS,
  VEHICLES,
  byLang,
  formatMoney,
  pickLang,
  trApp,
} from "./content.js";

var Game = class {
  constructor(e, t, n, r) {
    ((this.world = e),
      (this.hud = t),
      (this.sfx = n),
      (this.street = r),
      (this.state = `ready`),
      (this.timeLeft = TUNING.roundSeconds),
      (this.money = 0),
      (this.car = null),
      (this.driver = null),
      (this.target = null),
      (this.incoming = null),
      (this.leaver = null),
      (this.departing = []),
      (this.bikes = []),
      (this.outcomes = []),
      (this.exits = ``),
      (this.paidCars = 0),
      (this.paidBikes = 0),
      (this.unpaid = 0),
      (this.scratches = 0),
      (this.props = 0),
      (this.carIndex = 0),
      (this.carScratches = 0),
      (this.carTime = 0),
      (this.hitCooldown = 0),
      (this.settle = 0),
      (this.admitIn = 0),
      (this.cmdGear = -1),
      (this.held = {
        terus: !1,
        kiri: !1,
        kanan: !1,
      }),
      (this.dirs = []),
      (this.stopPose = 0),
      (this.overFor = 0),
      (this.elapsed = 0),
      (this.holdLeft = 0),
      (this.holdPhase = `off`),
      (this.holdT = 0),
      (this.bikeOutIn = 6),
      (this.bikeInIn = 10),
      (this.chatIn = 5),
      (this.vendorIn = 4),
      (this.ownerQuiet = 0),
      (this.timers = []),
      (this.tukang = new Yd()),
      (this.sinceExit = 1 / 0),
      (this.guide = new GuideHud()),
      (this.label = null),
      (this.onDriver = () => {}),
      (this.patrol = null),
      (this.selfPark = null),
      (this.patrolIn = TUNING.patrolFirstIn[0] + 5),
      (this.hiding = !1),
      (this.busted = !1),
      (this.bustT = 0),
      (this.bustJoke = ``),
      (this.shown = !1),
      (this.shot = null),
      (this.passIn = 3),
      (this.soundIds = new WeakMap()),
      (this.soundN = 0),
      e.scene.add(this.tukang.group, this.guide.group),
      (this.crowd = new Crowd(e.scene)),
      (e.onKnock = (e) => this.fine(e)),
      (t.onAgain = () => this.reset()),
      (r.onHonk = (e, t) => {
        (n.honk(0.35),
          this.holdActive &&
            this.state === `playing` &&
            Math.random() < 0.7 &&
            this.hud.pop(
              pickLang(byLang(STRINGS.heckle)),
              () => this.world.project(e, 2.4, t),
              1.6,
              `warga`,
            ));
      }),
      this.reset());
  }
  reset() {
    for (let e of this.bikes) (e.m.obj.removeFromParent(), disposeTree(e.m.obj));
    (this.crowd.clear(),
      this.world.reset(),
      this.hud.clearPops(),
      (this.state = `ready`),
      (this.timeLeft = TUNING.roundSeconds),
      (this.elapsed = 0),
      (this.money = 0),
      (this.outcomes = []),
      (this.exits = ``),
      (this.paidCars = this.paidBikes = this.unpaid = 0),
      (this.scratches = 0),
      (this.props = 0),
      (this.carIndex = 0),
      (this.car = null),
      (this.driver = null),
      (this.incoming = null),
      (this.leaver = null),
      (this.departing = []),
      (this.bikes = []),
      (this.timers = []),
      (this.admitIn = 0),
      (this.holdLeft = 0),
      (this.holdPhase = `off`),
      (this.bikeOutIn = 6),
      (this.bikeInIn = 10),
      this.clearPatrol(),
      (this.selfPark = null),
      (this.patrolIn = randRange(TUNING.patrolFirstIn[0], TUNING.patrolFirstIn[1])),
      (this.hiding = !1),
      (this.hud.hush = null),
      (this.busted = !1),
      (this.bustT = 0),
      (this.shown = !1),
      (this.shot = null),
      (this.tukang.crouched = !1),
      (this.tukang.group.visible = !0),
      this.hud.setHiding(!1),
      this.hud.setAlert(null),
      this.hud.hideResult(),
      this.hud.showHint(!0),
      this.hud.setTime(this.timeLeft),
      this.hud.setMoney(0),
      this.hud.setCars(0),
      this.hud.setHold(0));
    let e = this.world.pickBay(),
      t = e.x < -0.1 ? 1 : e.x > 0.1 ? -1 : Math.random() < 0.5 ? 1 : -1,
      [n, r] = this.cast(),
      i = new CarMesh(n, pickLang(CAR_COLORS));
    (i.setPose(e.x + t * 6.5, Qd, (t * Math.PI) / 2),
      this.world.dynamic.add(i.group),
      this.world.popIn(i.group),
      this.handOver(i, n, r, e, -1),
      this.tukang.place(i),
      this.queueNext());
  }
  relabel() {
    (this.hud.setCars(this.outcomes.filter((e) => e !== `angry`).length),
      this.hud.setDriver(this.label ? this.label() : ``));
  }
  tryRestart() {
    this.state === `over` && this.overFor > 0.8 && this.reset();
  }
  later(e, t) {
    this.timers.push({
      t: e,
      fn: t,
    });
  }
  carSays(e, t, n = 2) {
    this.hud.pop(
      pickLang(byLang(t)),
      () => {
        let [t, n] = e.bodyCenter();
        return this.world.project(t, 2.5, n);
      },
      n,
    );
  }
  onSignal(e, t) {
    if (this.state !== `over`) {
      if (
        (this.state === `ready` && t && ((this.state = `playing`), this.hud.showHint(!1)),
        e === `sembunyi`)
      )
        t && this.setHiding(!this.hiding);
      else if (!this.hiding) {
        if (e === `jalan`) {
          if (!t) return;
          ((this.holdLeft = 6),
            this.holdPhase === `off`
              ? (this.holdPhase = `run`)
              : this.holdPhase === `back` && (this.holdPhase = `road`),
            this.sfx.whistle(2, !0),
            this.hud.say(`tukang`, pickLang(byLang(STRINGS.holdShout)), 1.6));
        } else if (
          (t &&
            this.car &&
            (this.holdPhase === `run` || this.holdPhase === `kerb` || this.holdPhase === `road`) &&
            (this.holdPhase = this.holdPhase === `run` ? `off` : `back`),
          e === `maju` || e === `mundur`)
        ) {
          let n = e === `maju` ? 1 : -1;
          ((this.dirs = this.dirs.filter((e) => e !== n)), t && this.dirs.push(n));
          let r = this.dirs[this.dirs.length - 1];
          if (r === void 0) {
            this.held.terus && ((this.held.terus = !1), this.driver?.signal(`terus`, !1));
            return;
          }
          this.go(r);
        } else if (e !== `gear`) {
          if (e === `stop`) {
            if (!t) return;
            ((this.stopPose = 0.7), this.sfx.whistle(1, !0));
          } else ((this.held[e] = t), t && this.sfx.whistle(e === `terus` ? 2 : 1));
          (t && this.hud.say(`tukang`, Zd[e]), this.driver?.signal(e, t));
        }
      }
    }
  }
  go(e) {
    let t = e !== this.cmdGear;
    (t && ((this.cmdGear = e), this.hud.setGear(e), this.driver?.signal(`gear`, !0, e)),
      (t || !this.held.terus) &&
        (this.hud.say(`tukang`, trApp(e > 0 ? `shout.maju` : `shout.mundur`)), this.sfx.whistle(2)),
      this.held.terus || ((this.held.terus = !0), this.driver?.signal(`terus`, !0)));
  }
  cast() {
    let e = this.carIndex++;
    return [
      e === 0
        ? VEHICLES.city
        : e === 1
          ? pickLang([VEHICLES.city, VEHICLES.mpv])
          : e === 2
            ? VEHICLES.mpv
            : pickLang(Object.values(VEHICLES)),
      e === 0
        ? DRIVERS.pemula
        : e === 1
          ? DRIVERS.buru
          : e === 2
            ? DRIVERS.ngeyel
            : pickLang(Object.values(DRIVERS)),
    ];
  }
  queueNext() {
    let [e, t] = this.cast(),
      n = this.world.bays.filter((e) => e !== this.target && this.world.bayFree(e)),
      r = new CarMesh(e, pickLang(CAR_COLORS));
    ((r.group.visible = !1),
      this.world.dynamic.add(r.group),
      (this.incoming = {
        car: r,
        vehicle: e,
        who: t,
        bay: n.length ? pickLang(n) : null,
        stage: `queue`,
        path: [],
        i: 0,
        waitAt: 0,
        admitted: !1,
        obstacles: [],
        honked: 0,
      }),
      this.plan(this.incoming));
  }
  plan(e) {
    let t = e.vehicle,
      n = Math.min(8.1, 9 - t.rearOverhang - (t.cargo?.overhang ?? 0)),
      r = [
        [-36, STREET.nearLane],
        [ef, STREET.nearLane],
        [ef, n],
      ];
    if (((e.waitAt = polylineSamples(r, 4.2).length / 2 - 1), e.admitted && e.bay)) {
      let t = e.bay.x > 0.1 ? -1 : 1,
        i = polylineSamples([r[0], r[1], [ef, Qd]], 4.2),
        a = polylineSamples(
          [
            [ef, n],
            [ef, Qd],
            [e.bay.x + t * 6.5, Qd],
          ],
          4.5,
        );
      e.path = [...i.slice(0, (e.waitAt + 1) * 2), ...a];
    } else e.path = polylineSamples(r, 4.2);
  }
  follow(e, t, n, r, i) {
    let { car: a, path: o } = e,
      s = Math.min(r, o.length / 2 - 1),
      c = e.i,
      l = 1 / 0;
    for (let t = e.i; t <= Math.min(s, e.i + 14); t++) {
      let e = (o[t * 2] - a.x) ** 2 + (o[t * 2 + 1] - a.z) ** 2;
      e < l && ((l = e), (c = t));
    }
    e.i = c;
    let u = Math.round(2.2 / $d),
      d = o.length / 2 - 1,
      f,
      p;
    if (c + u <= d) ((f = o[(c + u) * 2]), (p = o[(c + u) * 2 + 1]));
    else {
      let e = o[d * 2],
        t = o[d * 2 + 1],
        n = o[(d - 1) * 2],
        r = o[(d - 1) * 2 + 1],
        i = (c + u - d) * $d;
      ((f = e + ((e - n) / $d) * i), (p = t + ((t - r) / $d) * i));
    }
    let m = f - a.x,
      h = p - a.z,
      g = Math.cos(a.heading),
      _ = Math.sin(a.heading),
      v = m * g - h * _,
      y = Math.max(-0.62, Math.min(0.62, Math.atan2(2 * a.def.wheelbase * v, m * m + h * h))),
      b = (s - c) * $d,
      x = n * (1 - (0.55 * Math.abs(y)) / 0.62);
    return (
      i && (x = Math.min(x, Math.sqrt(8 * Math.max(0, b - 0.1)))),
      a.step(t, x, y, 3.5, 2.8, 7),
      a.sync(),
      a.animate(t),
      a.setLights(x < Math.abs(a.v) - 0.05, !1),
      b
    );
  }
  updateIncoming(e) {
    let t = this.incoming;
    if (!t) return;
    let { car: n } = t;
    if (t.stage === `queue`) {
      if (!this.street.entryClear(-36, n.def.length)) return;
      (n.setPose(-36, STREET.nearLane, Math.PI / 2),
        (n.v = 6),
        (n.group.visible = !0),
        (t.stage = `street`));
    }
    if (t.stage === `street`) {
      let r = 8;
      if (n.z > STREET.nearLane - 1) {
        let [e] = n.bodyCenter(),
          t = this.street.gapAhead(e, n.def.length / 2);
        r = Math.max(0, Math.min(r, (t - 1 - n.v * 0.35) * 1.4));
      } else r = 4.5;
      let i = this.follow(t, e, r, t.waitAt, !t.admitted);
      i < 0.6 && t.admitted
        ? (t.stage = `entering`)
        : i < 0.35 &&
          Math.abs(n.v) < 0.15 &&
          ((n.v = 0),
          (t.stage = `waiting`),
          (t.obstacles = n.obbs().map((e) => ({
            obb: e,
            kind: `car`,
            cost: 0,
            knocked: !1,
            car: n,
          }))),
          this.world.obstacles.push(...t.obstacles));
    } else if (t.stage === `waiting`)
      (n.animate(e),
        n.setLights(!0, !1),
        (t.honked += e),
        t.honked > 9 &&
          this.state === `playing` &&
          ((t.honked = 0), this.sfx.honk(0.6), this.carSays(n, STRINGS.queue, 1.4)),
        t.admitted &&
          ((this.world.obstacles = this.world.obstacles.filter((e) => !t.obstacles.includes(e))),
          (t.obstacles = []),
          (t.stage = `entering`)));
    else if (t.stage === `entering`) {
      let r = this.follow(t, e, 5, 1 / 0, !0);
      if (
        (t.i === t.lastI ? (t.idle = (t.idle ?? 0) + e) : ((t.lastI = t.i), (t.idle = 0)),
        (r < 0.3 && Math.abs(n.v) < 0.15) || (t.idle ?? 0) > 5)
      ) {
        n.v = 0;
        let e = t.bay,
          r = (e.x - n.x) * Math.sin(n.heading) > 0;
        ((this.incoming = null),
          this.handOver(n, t.vehicle, t.who, e, r ? 1 : -1),
          this.queueNext());
      }
    }
  }
  nextInLane() {
    if (!(
      this.car ||
      this.selfPark ||
      this.incoming?.stage === `entering` ||
      (this.leaver && !this.leaver.freed)
    )) {
      if (!this.leaver) {
        let e = this.world.parked.filter((e) => e.ready).sort((e, t) => e.leaveAt - t.leaveAt)[0];
        if (e) {
          this.startExit(e);
          return;
        }
      }
      this.admit();
    }
  }
  admit() {
    let e = this.incoming;
    if (!e || e.admitted) return;
    let t = this.world;
    if (((e.bay && t.bayFree(e.bay)) || (e.bay = t.pickBay()), !e.bay)) {
      let e = t.parked.find((e) => e.ready);
      if (e && !this.leaver) this.startExit(e);
      else {
        let e = [...t.parked].sort((e, t) => e.leaveAt - t.leaveAt)[0];
        (e && !e.coming && (e.leaveAt = Math.min(e.leaveAt, this.elapsed)), (this.admitIn = 1));
      }
    } else ((e.admitted = !0), this.plan(e), (this.target = e.bay), t.setTarget(e.bay));
  }
  handOver(e, t, n, r, i) {
    let a = new Driver(n);
    ((a.gear = i),
      (a.onIgnore = () => this.hud.say(`driver`, pickLang(byLang(STRINGS.ignore)), 1.2)),
      (a.onImpatient = () => this.hud.say(`driver`, pickLang(byLang(STRINGS.impatient)), 1.2)),
      (this.car = e),
      (this.driver = a),
      (this.target = r),
      this.world.setTarget(r),
      (this.carScratches = 0),
      (this.carTime = 0),
      (this.settle = 0),
      (this.hitCooldown = 0),
      (this.chatIn = randRange(4, 6)),
      (this.cmdGear = i),
      this.hud.setGear(i),
      (this.held = {
        terus: !1,
        kiri: !1,
        kanan: !1,
      }),
      (this.dirs = []),
      (this.label = () =>
        trApp(`driver`, {
          who: byLang(n.name),
          car: byLang(t.name),
        })),
      this.hud.setDriver(this.label()),
      this.onDriver(n.id),
      this.hud.say(`driver`, pickLang(byLang(n.intro)), 2),
      this.hiding && (a.wait(!0), this.startSelfPark()));
  }
  startExit(e) {
    let t = e.car;
    (this.world.unpark(e), (t.v = 0));
    let n = Math.cos(t.heading) > 0;
    ((this.leaver = {
      car: t,
      path: [],
      i: 0,
      rec: e,
      stage: n ? `out` : `back`,
      waited: 0,
      helped: !1,
      nagAt: 5,
      freed: !1,
      wps: [],
      rev: !1,
      revT: 0,
      stuck: 0,
      best: 1 / 0,
      steps: [],
      segs: [],
      seg: 0,
      s: 0,
      v: 0,
      pause: 0.4,
      search: null,
      kerbZ: 0,
    }),
      this.planExit(this.leaver),
      e.asked || this.carSays(t, STRINGS.wantOut),
      this.later(0.8, () => this.hud.say(`tukang`, pickLang(byLang(STRINGS.onIt)), 1.5)));
  }
  takeRoute(e, t) {
    e.search = null;
    let n = e.car;
    if (t) {
      let n = t[t.length - 1];
      (Td(t, (e.kerbZ - n.z) / Math.max(0.5, Math.cos(n.h))),
        (e.steps = t),
        (e.stage = `out`),
        (e.segs = []));
      for (let n = 1; n < t.length; n++) {
        let r = e.segs[e.segs.length - 1];
        r && r.dir === t[n].dir
          ? (r.b = n)
          : e.segs.push({
              a: n - 1,
              b: n,
              dir: t[n].dir,
            });
      }
    } else
      ((e.stage = Math.cos(n.heading) > 0 ? `out` : `back`),
        e.stage === `out` && (e.wps = this.exitPoints(n)));
  }
  planExit(e) {
    let t = e.car,
      n = t.def,
      r = STREET.roadZ0 - 0.3 - (n.length - n.rearOverhang);
    e.kerbZ = r;
    let i = new AStarPlanner(
      this.world.obstacles
        .filter(
          (e) =>
            !e.knocked &&
            (e.kind === `car` ||
              e.kind === `motor` ||
              e.kind === `gerobak` ||
              (e.kind === `wall` && e.obb.z <= AREA.maxZ + 0.5)),
        )
        .map((e) => e.obb),
      0.25,
      (e, t) =>
        t > STREET.roadZ0 - 0.1 || (t > AREA.maxZ + 0.3 && Math.abs(e - tf) > AREA.openHalf - 0.2),
    );
    ((e.search = astarSearch(
      {
        x: t.x,
        z: t.z,
        h: t.heading,
      },
      {
        x: tf,
        z: r - 1.6,
        h: 0,
      },
      t.footprint(),
      i,
    )),
      this.searchSlice(e, 6));
  }
  searchSlice(e, t) {
    if (!e.search) return;
    let n = performance.now();
    for (; performance.now() - n < t;) {
      let t = e.search.next();
      if (t.done) {
        this.takeRoute(e, t.value);
        return;
      }
    }
  }
  drivePlan(e, t) {
    let n = e.car;
    if (e.pause > 0)
      return ((e.pause -= t), (n.v = 0), n.animate(t), n.setLights(!0, e.segs[e.seg]?.dir < 0), !1);
    let r = e.segs[e.seg],
      i = (r.b - r.a) * Ed,
      a = r.dir > 0 ? 3.6 : 1.6,
      o = 2.2,
      s = e.v;
    ((e.v = Math.min(a, e.v + o * t, Math.sqrt(2 * o * Math.max(0, i - e.s)) + 0.08)),
      (e.s = Math.min(i, e.s + e.v * t)));
    let c = r.a + e.s / Ed,
      l = Math.min(r.b - 1, Math.floor(c)),
      u = Math.min(1, c - l),
      d = e.steps[l],
      f = e.steps[l + 1];
    return (
      n.setPose(d.x + (f.x - d.x) * u, d.z + (f.z - d.z) * u, d.h + ff(f.h - d.h) * u),
      (n.v = r.dir * e.v),
      (n.steer += (f.steer - n.steer) * Math.min(1, t * 8)),
      n.sync(),
      n.animate(t),
      n.setLights(e.v < s - 0.01, r.dir < 0),
      e.s >= i - 1e-6 &&
        (e.seg++, (e.s = 0), (e.v = 0), (e.pause = e.seg < e.segs.length ? 0.45 : 0)),
      e.seg >= e.segs.length
    );
  }
  exitPoints(e) {
    let t = e.def,
      n = STREET.roadZ0 - 0.3 - (t.length - t.rearOverhang),
      r = [];
    e.z < -2.6 && r.push([e.x, -0.6]);
    let i = tf - 3.4;
    return (i > e.x + 2 && r.push([i, 1.2]), r.push([tf, Math.min(4.4, n - 2.2)], [tf, n]), r);
  }
  seek(e, t) {
    let n = e.car,
      r = e.wps.length === 1,
      [i, a] = e.wps[0],
      o = i - n.x,
      s = a - n.z,
      c = Math.hypot(o, s);
    if (!r && c < 1.1) return (e.wps.shift(), this.seek(e, 0));
    if (r && c < 0.35 && Math.abs(n.v) < 0.15) return -1;
    let l = ff(Math.atan2(o, s) - n.heading),
      u = n.def.wheelbase / Math.tan(0.6),
      d = (e) => Math.abs(l) < (e > 1 ? 1.25 : 1.45) && c > 2 * u * Math.abs(Math.sin(l)) * e;
    if (
      ((e.revT -= t),
      e.rev && e.revT <= 0 && d(1.15)
        ? (e.rev = !1)
        : !e.rev && !d(1) && ((e.rev = !0), (e.revT = 0.7)),
      e.rev)
    ) {
      let t = n.def.rearOverhang + 0.6,
        r = n.x - Math.sin(n.heading) * t,
        i = n.z - Math.cos(n.heading) * t;
      (i < -3.6 || i > 4.3 || r < AREA.minX + 0.6 || r > AREA.maxX - 0.6) &&
        ((e.rev = !1), (e.revT = 0));
    }
    let f, p;
    return (
      e.rev
        ? ((f = -1.8), (p = -Math.sign(l) * 0.6))
        : ((p = Math.max(
            -0.6,
            Math.min(0.6, Math.atan2(2 * n.def.wheelbase * Math.sin(l), Math.max(c, 0.5))),
          )),
          (f = 4.2 * (1 - (0.5 * Math.abs(p)) / 0.6)),
          r && (f = Math.min(f, Math.sqrt(6 * Math.max(0, c - 0.25)))),
          d(1) || (f = Math.min(f, 1.2))),
      n.step(t, f, p, 3, 2.5, 6),
      n.sync(),
      n.animate(t),
      n.setLights(Math.abs(f) < Math.abs(n.v) - 0.05, e.rev),
      c < e.best - 0.4 ? ((e.best = c), (e.stuck = 0)) : (e.stuck += t),
      c
    );
  }
  updateLeaver(e) {
    let t = this.leaver;
    if (!t) return;
    let n = t.car;
    if ((this.holdActive && t.stage === `kerb` && (t.helped = !0), t.search))
      (this.searchSlice(t, 6), n.animate(e), n.setLights(!0, !1));
    else if (t.stage === `back`) {
      let r = ff(n.heading - Math.PI / 2),
        i = Math.abs(r) < 0.25 || n.z > 2.6 || n.x < AREA.minX + 2.8,
        a = n.z > -1.4 ? 0.6 : Math.max(-0.2, Math.min(0.2, ff(n.heading - Math.PI) * 1.5));
      (n.step(e, i ? 0 : -2.2, a, 2.5, 2, 6),
        n.sync(),
        n.animate(e),
        n.setLights(i, !i),
        i &&
          Math.abs(n.v) < 0.1 &&
          ((n.v = 0), (t.wps = this.exitPoints(n)), (t.best = 1 / 0), (t.stage = `out`)));
    } else if (t.stage === `out` && t.segs.length)
      (!t.freed && n.z > 5.2 && ((t.freed = !0), (this.admitIn = 0.1)),
        this.drivePlan(t, e) && ((n.v = 0), (t.stage = `kerb`)));
    else if (t.stage === `out`) {
      let r = this.seek(t, e);
      (!t.freed && n.z > 5.2 && ((t.freed = !0), (this.admitIn = 0.1)),
        r < 0
          ? ((n.v = 0), (t.stage = `kerb`))
          : t.stuck > 9 &&
            (this.world.vanish(n.group), (this.leaver = null), (this.admitIn = 0.3)));
    } else {
      (n.animate(e), n.setLights(!0, !1), (t.waited += e));
      let r = this.departing[this.departing.length - 1],
        i = !r || r.car.x > tf + 7;
      t.waited > 0.8 && i && this.street.nearClear(tf, !1)
        ? (this.payCar(t),
          this.holdActive && (this.sinceExit = 0),
          this.departing.push({
            car: n,
            path: polylineSamples(
              [
                [tf, n.z],
                [tf, STREET.nearLane],
                [70, STREET.nearLane],
              ],
              4.2,
            ),
            i: 0,
          }),
          (this.leaver = null))
        : t.waited > t.nagAt &&
          this.state === `playing` &&
          ((t.nagAt += 7), this.sfx.honk(0.6), this.carSays(n, STRINGS.kerbNag));
    }
  }
  updateDeparting(e) {
    for (let t of this.departing) {
      let n = 8;
      if (t.car.z > STREET.nearLane - 1) {
        let e = this.street.gapAhead(t.car.bodyCenter()[0], t.car.def.length / 2);
        n = Math.max(0, Math.min(n, (e - 1 - t.car.v * 0.35) * 1.4));
      } else n = 4;
      (this.follow(t, e, n, 1 / 0, !1),
        t.i === t.lastI
          ? n > 0.5 && ((t.idle = (t.idle ?? 0) + e), t.idle > 8 && (t.car.x = STREET.span + 1))
          : ((t.lastI = t.i), (t.idle = 0)));
    }
    let t = this.departing.filter((e) => e.car.x > STREET.span);
    for (let e of t) (this.world.dynamic.remove(e.car.group), disposeTree(e.car.group));
    this.departing = this.departing.filter((e) => e.car.x <= STREET.span);
  }
  collect(e, t, n) {
    n
      ? (this.unpaid++, (this.exits += `🏃`), this.hud.float(trApp(`fx.unpaid`), t[0], t[1], `bad`))
      : ((this.money += e),
        this.hud.setMoney(this.money),
        this.hud.float(`+${formatMoney(e)}`, t[0], t[1], `good`),
        this.sfx.coin());
  }
  payCar(e) {
    if (this.state !== `playing`) return;
    let { car: t, rec: n } = e,
      [r, i] = t.bodyCenter(),
      a = this.world.project(r, 2, i),
      o = () =>
        this.later(0.9, () => this.hud.say(`tukang`, pickLang(byLang(STRINGS.tGrumble)), 1.6)),
      s = () =>
        this.later(0.9, () => this.hud.say(`tukang`, pickLang(byLang(STRINGS.tThanks)), 1.6));
    if (this.hiding) {
      (this.carSays(t, STRINGS.leaveAlone, 2.2), this.collect(0, a, !0));
      return;
    }
    if (!e.helped) {
      (this.carSays(t, STRINGS.noHelp, 2.2), this.collect(0, a, !0), o());
      return;
    }
    let c = n.fee,
      l = Math.random();
    if (n.selfParked)
      (this.carSays(t, STRINGS.paySelf, 2.4),
        this.later(1.1, () => this.hud.say(`tukang`, pickLang(byLang(STRINGS.tJagain)), 1.8)),
        this.paidCars++,
        (this.exits += `💵`),
        this.collect(c, a, !1));
    else if (c <= 0) (this.carSays(t, STRINGS.payScratched, 2.2), this.collect(0, a, !0), o());
    else {
      if (n.fee < PRICES.mobil && l < 0.6) (this.carSays(t, STRINGS.payScratched, 2.2), o());
      else if (n.tip || l < 0.12) ((c += PRICES.tip), this.carSays(t, STRINGS.payTip, 2.2), s());
      else if (l < 0.22) ((c = 1e3), this.carSays(t, STRINGS.payShort, 2.2), o());
      else if (l < 0.3)
        (this.carSays(t, STRINGS.payQris, 2.2),
          this.later(0.9, () => this.hud.say(`tukang`, pickLang(byLang(STRINGS.tCash)), 1.6)));
      else if (l < 0.36) {
        (this.carSays(t, STRINGS.payLater, 2.2), this.collect(0, a, !0), o());
        return;
      } else (this.carSays(t, STRINGS.payExact, 2), s());
      (this.paidCars++, (this.exits += `💵`), this.collect(c, a, !1));
    }
  }
  spawnBikeOut() {
    let e = this.world.claimMotor();
    if (!e) return;
    let t = pickLang(lf),
      n = pathLength([e.x + 0.55, e.z - 1.1], !1, [...t].reverse()).reverse();
    this.crowd.spawn(n, {
      speed: 1.9,
      onArrive: () => {
        this.state === `over` ? (e.reserved = !1) : this.rideOut(e);
      },
    });
  }
  rideOut(e) {
    if (!this.world.takeMotor(e)) {
      e.reserved = !1;
      return;
    }
    let t = $u();
    ((t.obj.rotation.order = `YXZ`), this.world.dynamic.add(t.obj));
    let n = {
      m: t,
      slot: e,
      x: e.x,
      z: e.z,
      h: 0,
      v: 0,
      path: [
        [e.x + 0.9, 3.2],
        [8.2, 3.2],
        [tf + 1, 5.6],
        [tf + 1, STREET.roadZ0 - 0.75],
      ],
      seg: 0,
      stage: `back`,
      waited: 0,
      helped: !1,
      selfParked: e.selfParked,
    };
    ((e.selfParked = !1),
      this.bikes.push(n),
      this.hud.pop(
        pickLang(byLang(STRINGS.bikeOut)),
        () => this.world.project(n.x, 2.2, n.z),
        1.8,
      ));
  }
  spawnBikeIn() {
    let e = this.world.freeMotorSlot();
    if (!e) return;
    let t = this.street.poach(-34, -18);
    if (!t) return;
    e.reserved = !0;
    let n = this.street.bikeLaneZ;
    this.bikes.push({
      m: t,
      slot: e,
      x: t.x,
      z: n,
      h: Math.PI / 2,
      v: t.v,
      path: [
        [ef - 2.8, n],
        [ef - 1.1, 9],
        [ef - 1.1, 5.2],
        [-8.4, 3.3],
        [e.x, 3.3],
        [e.x, e.z],
      ],
      seg: 0,
      stage: `in`,
      waited: 0,
      helped: !1,
    });
  }
  updateBikes(e) {
    for (let t of this.bikes) {
      this.holdActive && t.stage === `kerb` && (t.helped = !0);
      let n = 0;
      if (t.stage === `back`)
        ((t.v = -1.2),
          (t.z -= 1.2 * e),
          t.z <= t.slot.z - 1.7 && ((t.stage = `out`), (t.slot.reserved = !1)));
      else if (t.stage === `kerb`)
        ((t.v = 0),
          (t.waited += e),
          t.waited > 1 &&
            this.street.nearClear(tf + 1, !0) &&
            (this.payBike(t),
            this.holdActive && (this.sinceExit = 0),
            (t.path = [[tf + 2.8, this.street.bikeLaneZ]]),
            (t.seg = 0),
            (t.stage = `merge`)));
      else {
        let [r, i] = t.path[t.seg],
          a = r - t.x,
          o = i - t.z,
          s = Math.hypot(a, o),
          c = ff(Math.atan2(a, o) - t.h),
          l = t.seg === t.path.length - 1,
          u = t.z > STREET.roadZ0 - 0.4 ? 6 : 3.8;
        if (
          (Math.abs(c) > 0.5 && (u = 1.6),
          l && t.stage !== `merge` && (u = Math.min(u, 0.6 + s * 1.6)),
          (t.v += Math.max(-9 * e, Math.min(4 * e, u - t.v))),
          (n = Math.max(-3.4, Math.min(3.4, c * 4)) * Math.min(1, 0.35 + Math.abs(t.v) / 2)),
          (t.h += n * e),
          (t.x += Math.sin(t.h) * t.v * e),
          (t.z += Math.cos(t.h) * t.v * e),
          s < (l ? 0.25 : 0.7))
        ) {
          if (!l) t.seg++;
          else if (t.stage === `in`) {
            (t.m.obj.removeFromParent(),
              disposeTree(t.m.obj),
              this.world.parkMotor(t.slot),
              (t.slot.selfParked = this.hiding));
            let e = this.crowd.spawn(
              pathLength([t.slot.x + 0.55, t.slot.z - 1.1], !1, pickLang(cf)),
            );
            (this.state === `playing` && this.hiding
              ? this.hud.pop(
                  pickLang(byLang(STRINGS.bikeInAlone)),
                  () => this.world.project(e.x, 2.2, e.z),
                  2,
                )
              : this.state === `playing` &&
                Math.random() < 0.6 &&
                this.hud.pop(
                  pickLang(byLang(STRINGS.bikeIn)),
                  () => this.world.project(e.x, 2.2, e.z),
                  1.6,
                ),
              (t.stage = `kerb`),
              (t.waited = -1e9),
              (t.seg = -1));
          } else
            t.stage === `out`
              ? (t.stage = `kerb`)
              : (this.world.dynamic.remove(t.m.obj),
                this.world.scene.add(t.m.obj),
                this.street.adopt(t.m, t.x, Math.max(2, t.v)),
                (t.seg = -1));
        }
      }
      t.seg >= 0 &&
        (t.m.obj.position.set(t.x, 0, t.z),
        t.m.obj.rotation.set(0, t.h, -n * 0.12 * Math.min(1, Math.abs(t.v) / 3)));
    }
    this.bikes = this.bikes.filter((e) => e.seg >= 0);
  }
  payBike(e) {
    if (this.state !== `playing`) return;
    let t = this.world.project(e.x, 1.8, e.z),
      n = (t) => this.hud.pop(pickLang(byLang(t)), () => this.world.project(e.x, 2.2, e.z), 1.8),
      r = (e) => this.later(0.8, () => this.hud.say(`tukang`, pickLang(byLang(e)), 1.5)),
      i = Math.random();
    if (this.hiding) {
      (n(STRINGS.bikeLeaveAlone), this.collect(0, t, !0));
      return;
    }
    if (!e.helped || i < 0.06) {
      (n(STRINGS.bikeRun), this.collect(0, t, !0), r(STRINGS.tWoy));
      return;
    }
    let a = PRICES.motor;
    (e.selfParked
      ? (n(STRINGS.bikePaySelf),
        this.later(1.1, () => this.hud.say(`tukang`, pickLang(byLang(STRINGS.tJagainHelm)), 1.8)))
      : i < 0.2
        ? ((a = 1e3), n(STRINGS.bikeHaggle), r(STRINGS.tGrumble))
        : i < 0.3
          ? ((a += PRICES.tip), n(STRINGS.payTip), r(STRINGS.tThanks))
          : n(STRINGS.payExact),
      this.paidBikes++,
      (this.exits += `🏍️`),
      this.collect(a, t, !1));
  }
  fine(e) {
    ((this.money -= e.cost),
      this.props++,
      this.hud.setMoney(this.money),
      this.hud.float(
        `${trApp(`prop.` + e.kind)} -${formatMoney(e.cost)}`,
        ...this.world.project(e.obb.x, 1.2, e.obb.z),
        `bad`,
      ),
      this.sfx.clack(),
      (this.world.shake = Math.max(this.world.shake, 0.25)),
      e.kind === `gerobak`
        ? this.hud.pop(
            pickLang(byLang(STRINGS.bakso)),
            () => this.world.project(e.obb.x, 2.4, e.obb.z),
            2.4,
            `warga`,
          )
        : e.kind === `motor` &&
          this.ownerQuiet <= 0 &&
          ((this.ownerQuiet = 2.5),
          this.hud.pop(
            pickLang(byLang(STRINGS.bikeOwner)),
            () => this.world.project(5.7, 2.8, 8.3),
            2.4,
            `warga`,
          )));
  }
  moveCar(e) {
    let t = this.car,
      n = this.driver,
      r = n.def,
      i = n.update(e),
      a = t.x,
      o = t.z,
      s = t.heading;
    t.step(e, i.speed, i.steer, r.steerRate, NPC_DRIVE.accel * r.speedMul, NPC_DRIVE.brake);
    let c = Math.abs(t.v),
      l = Math.sign(t.v) || 1,
      u = null;
    for (let e of t.obbs())
      for (let n of this.world.obstacles)
        !n.knocked &&
          obbOverlap(e, n.obb) &&
          (n.kind === `cone` || n.kind === `motor` || n.kind === `gerobak`
            ? (this.world.knock(n, Math.sin(t.heading) * l, Math.cos(t.heading) * l, c),
              (t.v *= n.kind === `cone` ? 0.92 : n.kind === `motor` ? 0.7 : 0.45),
              t.jolt(-l * c * 0.25))
            : (u = n));
    if (u) {
      ((t.x = a),
        (t.z = o),
        (t.heading = s),
        (t.v = -l * Math.min(0.5, c * 0.25)),
        t.jolt(-l * (0.5 + c * 0.5)));
      let e = c > 0.25 && this.hitCooldown <= 0,
        r = u.car;
      if (
        r &&
        (r.jolt((Math.random() - 0.5) * c, (0.5 + c * 0.5) * (Math.random() < 0.5 ? -1 : 1)), e)
      ) {
        let e = this.world.parked.find((e) => e.car === r);
        (e && (e.fee = Math.max(0, e.fee - PRICES.scratch)), this.carSays(r, STRINGS.victim, 1.8));
      }
      if ((n.shock(), c >= 2)) {
        this.rage();
        return;
      }
      e && this.scratch();
    }
    (t.sync(), t.setLights(Math.abs(i.speed) < Math.abs(t.v) + 0.01, n.gear < 0));
  }
  scratch() {
    let e = this.car;
    ((this.hitCooldown = 0.8), this.carScratches++, this.scratches++);
    let [t, n] = e.bodyCenter();
    (this.hud.float(
      `${trApp(`fx.scratch`)} ${trApp(`fx.docked`)}`,
      ...this.world.project(t, 1.6, n),
      `bad`,
    ),
      this.hud.say(`driver`, pickLang(byLang(STRINGS.ouch)), 1.5),
      this.hud.flash(),
      this.sfx.crunch(),
      (this.world.shake = 0.35),
      navigator.vibrate?.(60));
  }
  rage() {
    let e = this.car,
      [t, n] = e.bodyCenter();
    (this.outcomes.push(`angry`),
      this.scratches++,
      this.hud.float(trApp(`fx.nopay`), ...this.world.project(t, 1.6, n), `bad`),
      this.hud.say(`driver`, pickLang(byLang(STRINGS.angry)), 1.8),
      this.hud.flash(),
      this.sfx.crunch(!0),
      this.sfx.honk(),
      (this.world.shake = 0.8),
      navigator.vibrate?.([80, 40, 120]),
      e.sync(),
      this.world.vanish(e.group),
      this.leave(1.2));
  }
  ownerOut(e) {
    let t = e.car;
    ((e.went = pickLang(lf)),
      this.later(0.5, () => (t.doorTo = 1)),
      this.later(0.8, () => {
        let n = this.crowd.spawn(pathLength(t.doorPoint(), !0, e.went));
        Math.random() < 0.7 &&
          this.hud.pop(
            pickLang(byLang(STRINGS.ownerOff)),
            () => this.world.project(n.x, 2.2, n.z),
            1.8,
          );
      }),
      this.later(1.5, () => (t.doorTo = 0)));
  }
  ownerBack(e) {
    e.coming = !0;
    let t = e.car,
      n = e.went ?? pickLang(lf),
      r = pathLength(t.doorPoint(), !0, [...n].reverse()).reverse(),
      i = this.crowd.spawn(r, {
        speed: 2,
        vanishAtEnd: !1,
        onArrive: (n) => {
          ((t.doorTo = 1),
            this.later(0.35, () => this.crowd.vanish(n)),
            this.later(0.9, () => {
              ((t.doorTo = 0),
                (e.ready = !0),
                e.asked || ((e.asked = !0), this.carSays(t, STRINGS.wantOut, 2.2)),
                this.admitIn <= 0 && !this.car && (this.admitIn = 0.3));
            }));
        },
      });
    this.state === `playing` &&
      Math.random() < 0.4 &&
      this.hud.pop(
        pickLang(byLang(STRINGS.ownerBack)),
        () => this.world.project(i.x, 2.2, i.z),
        1.8,
      );
  }
  leave(e) {
    ((this.car = null),
      (this.driver = null),
      (this.target = null),
      this.world.setTarget(null),
      (this.admitIn = e),
      (this.label = () => trApp(`waiting`)),
      this.hud.setDriver(this.label()));
  }
  checkParked(e) {
    let t = this.car,
      n = this.target,
      [r, i] = t.bodyCenter(),
      a = AREA.bayW / 2,
      o = AREA.bayD / 2,
      s = Math.abs(r - n.x) < a && Math.abs(i - n.z) < o,
      c = Math.abs(Math.sin(t.heading)) < 0.42,
      l = !this.driver.going && Math.abs(t.v) < 0.05;
    if (!(s && c && l)) {
      this.settle = 0;
      return;
    }
    if (((this.settle += e), this.settle < 0.45)) return;
    let u = obbCorners(t.bodyObb()).every(
        ([e, t]) => Math.abs(e - n.x) <= a + 0.05 && Math.abs(t - n.z) <= o + 0.05,
      ),
      d = u && this.carScratches === 0,
      f = Math.max(0, PRICES.mobil - this.carScratches * PRICES.scratch - (u ? 0 : PRICES.crooked));
    (this.outcomes.push(d ? `clean` : `lecet`),
      this.hud.setCars(this.outcomes.filter((e) => e !== `angry`).length),
      this.hud.float(
        `${trApp(u ? `fx.rapi` : `fx.miring`)} ${trApp(`fx.later`)}`,
        ...this.world.project(r, 1.8, i),
        u ? `good` : `bad`,
      ),
      this.hud.say(
        `driver`,
        pickLang(byLang(d ? STRINGS.thanks : u ? STRINGS.ouch : STRINGS.crooked)),
        1.4,
      ),
      this.later(0.9, () => this.hud.say(`tukang`, pickLang(byLang(STRINGS.parked)), 1.5)),
      t.setLights(!1, !1));
    let p = this.world.addParked(
      t,
      f,
      d && this.carTime < PRICES.fastSec,
      this.elapsed + randRange(12, 24),
    );
    (this.leave(0.6), this.ownerOut(p));
  }
  end() {
    if (
      ((this.state = `over`),
      (this.overFor = 0),
      this.busted || (this.timeLeft = 0),
      (this.holdLeft = 0),
      (this.holdPhase = `back`),
      this.hud.setTime(this.timeLeft),
      this.hud.setHold(0),
      this.hud.setAlert(null),
      this.hud.setHiding(!1),
      (this.hud.hush = null),
      this.busted)
    ) {
      ((this.holdPhase = `off`), (this.hiding = !1), (this.tukang.crouched = !1));
      for (let e of [`terus`, `kiri`, `kanan`])
        (this.held[e] && this.driver?.signal(e, !1), (this.held[e] = !1));
      this.dirs = [];
    } else {
      this.sfx.whistle(3);
      let e = Math.max(this.money, Number(localStorage.getItem(`tp-best`) ?? -1 / 0));
      (localStorage.setItem(`tp-best`, String(e)), this.showResult());
    }
  }
  showResult() {
    if (this.state !== `over`) return;
    this.shot ||= (this.world.render(), captureFrame(this.world.renderer.domElement));
    let e = this.outcomes.filter((e) => e !== `angry`).length,
      t = this.outcomes.map((e) => Xd[e]).join(``) + (this.exits ? ` ` + this.exits : ``),
      n = trApp(rank(this.money)),
      r = this.busted ? trApp(this.bustJoke) : void 0,
      i = /^(localhost|127\.|192\.168\.|10\.)/.test(location.hostname)
        ? `tukang-parkir.akalstack.com`
        : location.host,
      a = [
        trApp(`share.title`),
        trApp(`share.line`, {
          cars: e,
          paid: this.paidCars + this.paidBikes,
          unpaid: this.unpaid,
          scratch: this.scratches,
          money: formatMoney(this.money),
        }),
        t,
        r
          ? `${trApp(`share.busted`)} ${r}`
          : trApp(`share.rank`, {
              rank: n,
            }),
        i,
      ].filter(Boolean).join(`
`);
    this.hud.showResult({
      money: this.money,
      best: Number(localStorage.getItem(`tp-best`) ?? (this.busted ? 0 : this.money)),
      rank: n,
      emoji: t,
      cars: e,
      paidCars: this.paidCars,
      paidBikes: this.paidBikes,
      unpaid: this.unpaid,
      scratches: this.scratches,
      props: this.props,
      shareText: a,
      busted: r,
      shot: this.shot,
      url: i,
    });
  }
  setHiding(e) {
    e !== this.hiding &&
      this.state !== `over` &&
      ((this.hiding = e),
      (this.tukang.crouched = e),
      this.hud.setHiding(e),
      e || this.driver?.wait(!1),
      (this.hud.hush = e ? (e, t) => t === `tukang` : null),
      e &&
        (this.state === `ready` && ((this.state = `playing`), this.hud.showHint(!1)),
        (this.held = {
          terus: !1,
          kiri: !1,
          kanan: !1,
        }),
        (this.dirs = []),
        this.driver?.wait(!0),
        this.startSelfPark(),
        this.holdPhase !== `off` &&
          ((this.holdPhase = `off`), (this.holdLeft = 0), (this.sinceExit = 1 / 0))));
  }
  startSelfPark() {
    let e = this.car,
      t = this.target;
    if (!e || !t || this.selfPark) return;
    let n = new AStarPlanner(
        this.world.obstacles
          .filter(
            (e) =>
              !e.knocked &&
              (e.kind === `car` || e.kind === `motor` || e.kind === `gerobak` || e.kind === `wall`),
          )
          .map((e) => e.obb),
        0.2,
        (e, t) => t > AREA.maxZ - 0.3,
      ),
      r = [
        {
          x: t.x,
          z: t.z - e.bodyCz,
          h: 0,
        },
        {
          x: t.x,
          z: t.z + e.bodyCz,
          h: Math.PI,
        },
      ],
      i = {
        car: e,
        bay: t,
        rec: null,
        stage: `out`,
        waited: 0,
        helped: !1,
        nagAt: 0,
        freed: !1,
        wps: [],
        rev: !1,
        revT: 0,
        stuck: 0,
        best: 0,
        steps: [],
        segs: [],
        seg: 0,
        s: 0,
        v: 0,
        pause: 0.6,
        search: astarSearch(
          {
            x: e.x,
            z: e.z,
            h: e.heading,
          },
          r.shift(),
          e.footprint(),
          n,
        ),
        kerbZ: 0,
        path: [],
        i: 0,
        goals: r,
        occ: n,
      };
    ((this.selfPark = i),
      (this.car = null),
      (this.driver = null),
      (this.label = () => trApp(`waiting`)),
      this.hud.setDriver(this.label()));
  }
  updateSelfPark(e) {
    let t = this.selfPark;
    if (t) {
      if (t.search) {
        let n = performance.now();
        for (; t.search && performance.now() - n < 4;) {
          let e = t.search.next();
          if (!e.done) continue;
          t.search = null;
          let n = e.value;
          if (!n || n.length < 2) {
            let e = t.goals.shift();
            if (e) {
              t.search = astarSearch(
                {
                  x: t.car.x,
                  z: t.car.z,
                  h: t.car.heading,
                },
                e,
                t.car.footprint(),
                t.occ,
              );
              continue;
            }
            n = this.creepInto(t.car, t.bay);
          }
          t.steps = n;
          for (let e = 1; e < n.length; e++) {
            let r = t.segs[t.segs.length - 1];
            r && r.dir === n[e].dir
              ? (r.b = e)
              : t.segs.push({
                  a: e - 1,
                  b: e,
                  dir: n[e].dir,
                });
          }
        }
        t.car.animate(e);
      } else this.drivePlan(t, e) && this.parkedBySelf(t);
    }
  }
  parkedBySelf(e) {
    this.selfPark = null;
    let t = e.car;
    ((t.v = 0), t.setLights(!1, !1));
    let [n, r] = t.bodyCenter();
    (this.outcomes.push(`clean`),
      this.hud.setCars(this.outcomes.filter((e) => e !== `angry`).length),
      this.hud.float(trApp(`fx.self`), ...this.world.project(n, 1.8, r), `good`),
      this.carSays(t, STRINGS.selfPark, 2.2));
    let i = this.world.addParked(t, PRICES.mobil, !1, this.elapsed + randRange(12, 24));
    ((i.selfParked = !0), this.leave(0.6), this.ownerOut(i));
  }
  creepInto(e, t) {
    let n = {
        x: t.x,
        z: t.z - e.bodyCz,
        h: 0,
      },
      r = Math.max(2, Math.ceil(Math.hypot(n.x - e.x, n.z - e.z) / Ed)),
      i = ff(n.h - e.heading),
      a = [];
    for (let t = 0; t <= r; t++) {
      let o = t / r;
      a.push({
        x: e.x + (n.x - e.x) * o,
        z: e.z + (n.z - e.z) * o,
        h: e.heading + i * o,
        dir: -1,
        steer: 0,
      });
    }
    return a;
  }
  get hidden() {
    let e = this.tukang.group.position;
    return this.hiding && Math.hypot(e.x - HIDING_SPOT[0], e.z - HIDING_SPOT[1]) < 1.6;
  }
  clearPatrol() {
    (this.patrol && (this.patrol.m.obj.removeFromParent(), disposeTree(this.patrol.m.obj)),
      (this.patrol = null),
      this.sfx.sirenOff());
  }
  spawnPatrol() {
    let e = patrolTruck();
    ((e.obj.rotation.y = Math.PI / 2),
      e.obj.position.set(yf, 0, STREET.nearLane),
      (e.obj.visible = !1),
      this.world.scene.add(e.obj),
      (this.patrol = {
        m: e,
        x: yf,
        v: 0,
        stage: `warn`,
        t: 0,
      }));
    let [t, n, r] = sf[3];
    this.hud.pop(
      pickLang(byLang(STRINGS.warnSatpol)),
      () => this.world.project(t, n, r),
      2.2,
      `warga`,
    );
  }
  patrolEta(e) {
    let t = Math.max(0, -10 - e.x) / bf;
    return e.stage === `warn` ? vf - e.t + t : e.stage === `come` ? t : 0;
  }
  updatePatrol(e) {
    if (!this.patrol) {
      if (this.state !== `playing`) return;
      ((this.patrolIn -= e), this.patrolIn <= 0 && this.timeLeft > 12 && this.spawnPatrol());
      return;
    }
    let t = this.patrol;
    if (((t.t += e), t.stage === `warn`))
      t.t >= vf && ((t.stage = `come`), (t.t = 0), (t.v = bf), (t.m.obj.visible = !0));
    else if (t.stage === `come`) {
      let e = gf - t.x;
      ((t.v = Math.min(bf, Math.sqrt(4.4 * Math.max(0, e)) + 0.3)),
        e < 0.05 &&
          ((t.v = 0),
          (t.stage = `look`),
          (t.t = 0),
          this.busted ||
            this.hud.pop(
              pickLang(byLang(STRINGS.satpolCome)),
              () => this.world.project(t.x, 2.9, STREET.nearLane),
              2.4,
              `warga`,
            )));
    } else
      t.stage === `look`
        ? ((t.v = 0),
          (this.busted ? !this.tukang.group.visible && t.t > 1 : t.t > _f) &&
            ((t.stage = `go`),
            this.busted ||
              this.hud.pop(
                pickLang(byLang(STRINGS.satpolGone)),
                () => this.world.project(t.x, 2.9, STREET.nearLane),
                1.8,
                `warga`,
              )))
        : ((t.v = Math.min(10, t.v + 4.5 * e)),
          t.x > 12 &&
            this.state === `playing` &&
            this.hiding &&
            !this.busted &&
            (this.setHiding(!1),
            this.hud.setAlert(null),
            this.hud.say(`tukang`, pickLang(byLang(STRINGS.onIt)), 1.4)));
    ((t.x += t.v * e), (t.m.obj.position.x = t.x), t.m.tick?.(t.v, e));
    let n = 1 - Math.min(1, Math.abs(t.x) / STREET.span);
    if (
      (t.stage === `warn`
        ? this.sfx.siren(0.1 + 0.3 * Math.min(1, t.t / vf))
        : t.stage !== `go` || t.x < 25
          ? this.sfx.siren(0.4 + n * 0.6)
          : this.sfx.sirenOff(),
      this.state === `playing`)
    ) {
      let e = Math.abs(t.x) < xf && t.stage !== `go`;
      if (t.stage !== `go` || t.x < 12) {
        let e = Math.ceil(this.patrolEta(t));
        this.hud.setAlert(
          this.hiding
            ? trApp(`alert.hiding`)
            : e > 0
              ? trApp(`alert.satpolIn`, {
                  n: e,
                })
              : trApp(`alert.satpol`),
          this.hiding,
        );
      }
      e && !this.hidden && this.bust();
    }
    t.x > STREET.span + 4 &&
      (this.clearPatrol(),
      (this.patrolIn = randRange(TUNING.patrolNextIn[0], TUNING.patrolNextIn[1])),
      this.state === `playing` && this.hud.setAlert(null));
  }
  bust() {
    if (
      ((this.busted = !0),
      (this.bustT = 0),
      (this.bustJoke = `bust.${Math.floor(Math.random() * 4)}`),
      this.hud.setAlert(null),
      this.patrol)
    ) {
      let e = this.patrol;
      ((e.stage = `look`),
        (e.t = 0),
        this.hud.pop(
          pickLang(byLang(STRINGS.satpolBust)),
          () => this.world.project(e.x, 2.9, STREET.nearLane),
          2.4,
          `warga`,
        ));
    }
    (this.hud.say(`tukang`, pickLang(byLang(STRINGS.tBusted)), 2.2),
      this.sfx.whistle(1, !0),
      this.end());
  }
  soundId(e) {
    let t = this.soundIds.get(e);
    return (t || this.soundIds.set(e, (t = `e` + this.soundN++)), t);
  }
  sounds(e) {
    let t = (e, t) => 1 - Math.min(1, Math.hypot(e, t - 4) / 34),
      n = (e) =>
        this.sfx.engine(this.soundId(e), e.def.id === `pickup` ? `truck` : `car`, e.v, t(e.x, e.z));
    (this.car && n(this.car),
      this.selfPark && n(this.selfPark.car),
      this.incoming &&
        this.incoming.stage !== `queue` &&
        this.incoming.car.group.visible &&
        n(this.incoming.car),
      this.leaver && n(this.leaver.car));
    for (let e of this.departing) n(e.car);
    for (let e of this.bikes) this.sfx.engine(this.soundId(e), `motor`, e.v, t(e.x, e.z) * 0.8);
    (this.patrol &&
      this.patrol.stage !== `warn` &&
      this.sfx.engine(`satpol`, `truck`, this.patrol.v, t(this.patrol.x, STREET.nearLane)),
      this.sfx.enginesDone(),
      (this.passIn -= e),
      this.passIn <= 0 && ((this.passIn = randRange(TUNING.passByIn[0], TUNING.passByIn[1])), this.sfx.passBy()));
  }
  get holdActive() {
    return this.holdPhase === `kerb` || this.holdPhase === `road` || this.holdPhase === `back`;
  }
  updateHold(e) {
    let t = this.tukang.group.position;
    (this.holdPhase === `run`
      ? ((e, n) => Math.hypot(t.x - e[0], t.z - e[1]) < n)(af, 0.6) &&
        ((this.holdPhase = `kerb`), (this.holdT = 0))
      : this.holdPhase === `kerb`
        ? ((this.holdT += e),
          this.holdT > 0.6 && !this.street.passing(rf) && (this.holdPhase = `road`))
        : this.holdPhase === `road`
          ? ((this.sinceExit += e),
            !(
              this.leaver?.stage === `kerb` ||
              this.bikes.some((e) => e.stage === `kerb` || e.stage === `out`)
            ) &&
              this.sinceExit > 1.2 &&
              this.sinceExit < 1 / 0 &&
              (this.holdPhase = `back`))
          : this.holdPhase === `back` &&
            t.z < STREET.roadZ0 - 0.1 &&
            ((this.holdPhase = `off`), (this.sinceExit = 1 / 0)),
      this.holdActive &&
        this.holdPhase !== `back` &&
        ((this.holdLeft = Math.max(0, this.holdLeft - e)),
        this.holdLeft <= 0 && (this.holdPhase = `back`)),
      this.hud.setHold(
        this.holdPhase === `off` || this.holdPhase === `back` ? 0 : this.holdLeft / 6,
      ));
  }
  solids() {
    let e = [];
    for (let t of this.world.obstacles)
      !t.knocked && t.kind !== `cone` && t.obb.z < AREA.maxZ - 0.1 && e.push(t.obb);
    return (
      this.car && e.push(...this.car.obbs()),
      this.selfPark && e.push(...this.selfPark.car.obbs()),
      this.incoming?.stage === `entering` && e.push(...this.incoming.car.obbs()),
      this.leaver && e.push(...this.leaver.car.obbs()),
      e
    );
  }
  blocker(e) {
    let [t, n] = e.bodyCenter(),
      r = Math.abs(Math.sin(e.heading)),
      i = Math.abs(Math.cos(e.heading)),
      a = e.def.length / 2 + (e.def.cargo?.overhang ?? 0),
      o = e.def.width / 2;
    return {
      x: t,
      z: n,
      hx: r * a + i * o,
      hz: i * a + r * o,
      moving: Math.abs(e.v) > 0.3,
    };
  }
  chatter(e) {
    if (!this.hiding)
      for (let e of this.world.parked) !e.coming && e.leaveAt <= this.elapsed && this.ownerBack(e);
    if (
      (this.car &&
        this.driver &&
        ((this.chatIn -= e),
        this.chatIn <= 0 &&
          ((this.chatIn = randRange(7, 11)),
          this.hud.say(`driver`, pickLang(byLang(this.driver.def.chatter)), 1.8))),
      (this.vendorIn -= e),
      this.vendorIn <= 0)
    ) {
      this.vendorIn = randRange(9, 15);
      let e = Math.floor(Math.random() * sf.length),
        [t, n, r] = sf[e];
      this.hud.pop(byLang(STRINGS.vendor)[e], () => this.world.project(t, n, r), 1.8, `warga`);
    }
  }
  update(e) {
    let t = this.world,
      n = this.incoming;
    ((this.street.blockers = this.departing.map((e) => this.blocker(e.car))),
      this.patrol &&
        this.patrol.stage !== `warn` &&
        this.street.blockers.push({
          x: this.patrol.x,
          z: STREET.nearLane,
          hx: 2.7,
          hz: 1,
          moving: this.patrol.v > 0.3,
        }),
      n && n.stage !== `queue` && n.car.z > 5 && this.street.blockers.push(this.blocker(n.car)),
      (this.street.hold = this.holdActive ? nf : null),
      this.street.update(e),
      t.update(e),
      this.hud.update(e));
    for (let t of this.timers) t.t -= e;
    let r = this.timers.filter((e) => e.t <= 0);
    if (((this.timers = this.timers.filter((e) => e.t > 0)), this.state !== `over`))
      for (let e of r) e.fn();
    if (this.state === `over`) {
      ((this.overFor += e),
        this.incoming?.stage !== `entering` && this.updateIncoming(e),
        this.updateDeparting(e),
        this.updateBikes(e),
        this.crowd.update(e),
        this.holdPhase !== `off` && this.updateHold(e),
        (this.street.hold = this.holdActive ? nf : null));
      let t = this.holdPhase === `off` ? null : af;
      if (this.busted) {
        this.bustT += e;
        let n = this.patrol;
        if (n && this.tukang.group.visible) {
          t = [n.x - 3, STREET.nearLane - 1.2];
          let e = this.tukang.group.position;
          (this.bustT > 5 || (this.bustT > 1.2 && Math.hypot(e.x - t[0], e.z - t[1]) < 0.8)) &&
            (this.tukang.group.visible = !1);
        }
        this.bustT > 2.2 && !this.shown && ((this.shown = !0), this.showResult());
      }
      (this.updatePatrol(e),
        this.hud.nudge(`hold`, !1),
        this.hud.nudge(`hide`, !1),
        this.tukang.update(
          e,
          null,
          1,
          t && !this.busted ? `stop` : `idle`,
          this.busted ? [] : this.solids(),
          t,
        ),
        this.guide.update(e, null, 1, this.held),
        this.sounds(e));
      return;
    }
    if (this.state === `playing`) {
      if (
        ((this.elapsed += e),
        (this.timeLeft -= e),
        this.hud.setTime(this.timeLeft),
        this.timeLeft <= 0)
      ) {
        this.end();
        return;
      }
      if (
        (this.updateHold(e), (this.ownerQuiet -= e), this.updatePatrol(e), this.state !== `playing`)
      )
        return;
      (this.hiding || (this.bikeOutIn -= e),
        this.bikeOutIn <= 0 &&
          ((this.bikeOutIn = randRange(9, 15)),
          this.bikes.filter((e) => e.stage !== `in`).length < 2 && this.spawnBikeOut()),
        (this.bikeInIn -= e),
        this.bikeInIn <= 0 &&
          ((this.bikeInIn = randRange(8, 14)),
          this.bikes.some((e) => e.stage === `in`) || this.spawnBikeIn()),
        this.chatter(e));
    }
    if (((this.hitCooldown -= e), (this.stopPose -= e), this.car && this.driver)) {
      this.carTime += e;
      let t = Math.max(1, Math.ceil(e / (1 / 90)));
      for (let n = 0; n < t && this.car; n++) this.moveCar(e / t);
      (this.car?.animate(e), this.car && this.checkParked(e));
    } else
      this.admitIn > 0 &&
        !this.hiding &&
        ((this.admitIn -= e), this.admitIn <= 0 && this.nextInLane());
    (this.updateSelfPark(e),
      this.updateIncoming(e),
      this.updateLeaver(e),
      this.updateDeparting(e),
      this.updateBikes(e),
      this.crowd.update(e));
    let i = this.holdPhase !== `off`,
      a = this.incoming?.stage === `entering` ? this.incoming.car : null,
      o = this.car ?? a ?? (this.leaver && this.leaver.stage !== `kerb` ? this.leaver.car : null),
      s =
        i || this.stopPose > 0
          ? `stop`
          : this.held.kiri
            ? `kiri`
            : this.held.kanan
              ? `kanan`
              : this.held.terus || (!this.car && o)
                ? `terus`
                : `idle`,
      c = this.car ? (this.driver?.gear ?? 1) : this.leaver?.stage === `back` ? -1 : 1,
      l = this.hiding ? HIDING_SPOT : this.holdPhase === `road` ? of : i ? af : null,
      u = this.car ? this.target : a ? this.incoming.bay : null,
      d = this.leaver?.stage === `kerb` || this.bikes.some((e) => e.stage === `kerb`);
    this.hud.nudge(
      `hold`,
      this.state === `playing` && !this.hiding && d && this.holdPhase === `off`,
    );
    let f = !!this.patrol && this.patrol.stage !== `go`;
    if (
      (this.hud.nudge(`hide`, this.state === `playing` && !this.hiding && f),
      this.tukang.update(
        e,
        this.hiding ? null : o,
        c,
        this.hiding ? `idle` : s,
        this.hiding ? [] : this.solids(),
        l,
        u,
      ),
      this.sounds(e),
      this.guide.update(e, this.car, this.cmdGear, this.held),
      this.hud.place(`tukang`, ...t.project(...this.tukang.head())),
      this.car)
    ) {
      let [e, n] = this.car.bodyCenter();
      this.hud.place(`driver`, ...t.project(e, 2.4, n));
    }
  }
};
var $ = (e) => document.getElementById(e);
var HUD = class {
  constructor() {
    ((this.onAgain = () => {}),
      (this.onSpeak = () => {}),
      (this.hush = null),
      (this.bubbles = {
        tukang: {
          el: $(`b-tukang`),
          ttl: 0,
        },
        driver: {
          el: $(`b-driver`),
          ttl: 0,
        },
      }),
      (this.pops = []),
      (this.shareText = ``),
      (this.card = null),
      (this.cardN = 0),
      (this.wanted = new Map()),
      (this.lastTime = -1),
      $(`r-again`).addEventListener(`click`, () => this.onAgain()),
      $(`r-copy`).addEventListener(`click`, () => void this.copy()),
      $(`r-share`).addEventListener(`click`, () => void this.share()));
  }
  insets() {
    let e = window.innerWidth / window.innerHeight < 0.9;
    return {
      top: $(`driver`).getBoundingClientRect().bottom + 4,
      bottom: e ? $(`controls`).offsetHeight : 8,
    };
  }
  setTime(e) {
    let t = Math.max(0, Math.ceil(e));
    if (t === this.lastTime) return;
    this.lastTime = t;
    let n = $(`time`);
    ((n.textContent = String(t)), n.classList.toggle(`low`, t <= 10));
  }
  setMoney(e) {
    let t = $(`money`);
    ((t.textContent = formatMoney(e)),
      t.classList.toggle(`neg`, e < 0),
      t.classList.remove(`bump`),
      t.offsetWidth,
      t.classList.add(`bump`));
  }
  setCars(e) {
    (($(`cars-n`).textContent = String(e)),
      $(`cars`).setAttribute(
        `aria-label`,
        trApp(`cars`, {
          n: e,
        }),
      ),
      ($(`cars`).title = trApp(`cars`, {
        n: e,
      })));
  }
  setDriver(e) {
    $(`driver`).textContent = e;
  }
  setPaused(e) {
    $(`time`).classList.toggle(`paused`, e);
  }
  setGear(e) {
    (document.querySelector(`[data-sig=maju]`).classList.toggle(`engaged`, e > 0),
      document.querySelector(`[data-sig=mundur]`).classList.toggle(`engaged`, e < 0));
  }
  setMuted(e) {
    $(`set-sound`).setAttribute(`aria-checked`, String(!e));
  }
  setMusic(e) {
    $(`set-music`).setAttribute(`aria-checked`, String(e));
  }
  setHaptics(e) {
    $(`set-haptics`).setAttribute(`aria-checked`, String(e));
  }
  setLangChoice(e) {
    document.querySelectorAll(`#set-lang [data-lang]`).forEach((t) => {
      t.classList.toggle(`on`, t.dataset.lang === e);
    });
  }
  get settingsOpen() {
    return !$(`settings`).hidden;
  }
  showSettings(e) {
    $(`settings`).hidden = !e;
  }
  nudge(e, t) {
    $(e).classList.toggle(`nudge`, t);
  }
  setAlert(e, t = !1) {
    let n = $(`alert`);
    ((n.hidden = !e),
      e && n.textContent !== e && (n.textContent = e),
      n.classList.toggle(`calm`, t));
  }
  setHiding(e) {
    $(`hide`).classList.toggle(`on`, e);
  }
  showHint(e) {
    $(`hint`).classList.toggle(`gone`, !e);
  }
  say(e, t, n = 1.4) {
    if (this.hush?.(t, e)) return;
    let r = this.bubbles[e];
    (this.onSpeak(t, e), (r.el.textContent = t), r.el.classList.add(`show`), (r.ttl = n));
  }
  place(e, t, n) {
    this.position(this.bubbles[e].el, t, n);
  }
  position(e, t, n) {
    this.wanted.set(e, [t, n]);
  }
  layout() {
    let e = $(`driver`).getBoundingClientRect().bottom + 6,
      t = window.innerWidth,
      n = [];
    for (let [r, [i, a]] of this.wanted) {
      if (!r.isConnected) {
        this.wanted.delete(r);
        continue;
      }
      let o = r.offsetWidth,
        s = r.offsetHeight,
        c = Math.max(o / 2 + 8, Math.min(t - o / 2 - 8, i));
      n.push({
        el: r,
        x: i,
        w: o,
        h: s,
        cx: c,
        bottom: Math.max(e + s, a - 8),
      });
    }
    n.sort((e, t) => t.bottom - e.bottom);
    let r = [];
    for (let e of n) {
      if (e.el.classList.contains(`show`)) {
        for (let t = 0; t < 8; t++) {
          let t = r.find(
            (t) =>
              Math.abs(t.cx - e.cx) < (t.w + e.w) / 2 + 4 &&
              e.bottom > t.bottom - t.h - 4 &&
              e.bottom - e.h < t.bottom + 4,
          );
          if (!t) break;
          e.bottom = t.bottom - t.h - 6;
        }
        r.push(e);
      }
      let t = Math.max(-e.w / 2 + 14, Math.min(e.w / 2 - 14, e.x - e.cx));
      (e.el.style.setProperty(`--tail`, `${t}px`),
        (e.el.style.transform = `translate(${e.cx}px, ${e.bottom}px) translate(-50%, -100%)`));
    }
  }
  pop(e, t, n = 2, r = `sopir`) {
    if (this.hush?.(e, r === `tukang` ? `tukang` : `pop`)) return;
    (this.pops.length >= 6 && this.pops.shift().el.remove(),
      this.onSpeak(e, r === `tukang` ? `tukang` : `pop`));
    let i = document.createElement(`div`);
    ((i.className = `bubble ${r} show`),
      (i.textContent = e),
      $(`bubbles`).appendChild(i),
      this.pops.push({
        el: i,
        ttl: n,
        at: t,
      }));
  }
  clearPops() {
    for (let e of this.pops) e.el.remove();
    this.pops = [];
  }
  setHold(e) {
    let t = $(`hold`);
    (t.classList.toggle(`on`, e > 0),
      t.style.setProperty(`--p`, String(Math.max(0, Math.min(1, e)))));
  }
  update(e) {
    for (let t of Object.values(this.bubbles))
      t.ttl <= 0 || ((t.ttl -= e), t.ttl <= 0 && t.el.classList.remove(`show`));
    for (let t of this.pops) {
      t.ttl -= e;
      let [n, r] = t.at();
      (this.position(t.el, n, r), t.ttl <= 0 && t.el.remove());
    }
    this.pops = this.pops.filter((e) => e.ttl > 0);
  }
  float(e, t, n, r) {
    let i = document.createElement(`div`);
    ((i.className = `float ${r}`),
      (i.textContent = e),
      (i.style.top = `${Math.max(90, n)}px`),
      $(`bubbles`).appendChild(i));
    let a = i.offsetWidth / 2 + 8;
    ((i.style.left = `${Math.max(a, Math.min(window.innerWidth - a, t))}px`),
      i.addEventListener(`animationend`, () => i.remove()));
  }
  flash() {
    let e = $(`vignette`);
    (e.classList.remove(`hit`), e.offsetWidth, e.classList.add(`hit`));
  }
  showResult(e) {
    ((this.shareText = e.shareText),
      this.makeCard(e),
      ($(`r-money`).textContent = formatMoney(e.money)),
      $(`r-money`).classList.toggle(`neg`, e.money < 0));
    let t = !!e.busted;
    ($(`result`).querySelector(`.ticket`).classList.toggle(`busted`, t),
      ($(`r-title`).textContent = trApp(t ? `r.busted` : `r.title`)),
      ($(`r-stamp`).hidden = !t),
      ($(`r-stamp`).textContent = trApp(`r.busted`)),
      $(`r-money`).classList.toggle(`seized`, t && e.money > 0),
      ($(`r-seized`).hidden = !(t && e.money > 0)),
      ($(`r-seized`).textContent = trApp(`r.seized`, {
        money: formatMoney(e.money),
      })),
      ($(`r-rank`).textContent = e.busted ?? e.rank),
      ($(`r-emoji`).textContent = e.emoji || `—`),
      ($(`r-cars`).textContent = String(e.cars)),
      ($(`r-paid-cars`).textContent = String(e.paidCars)),
      ($(`r-paid-bikes`).textContent = String(e.paidBikes)),
      ($(`r-unpaid`).textContent = String(e.unpaid)),
      ($(`r-scratch`).textContent = String(e.scratches)),
      ($(`r-props`).textContent = String(e.props)),
      ($(`r-best`).textContent = formatMoney(e.best)),
      ($(`r-copy`).textContent = trApp(`r.copy`)),
      ($(`r-share`).textContent = trApp(`r.share`)),
      ($(`result`).hidden = !1));
    for (let e of Object.values(this.bubbles)) e.el.classList.remove(`show`);
  }
  hideResult() {
    $(`result`).hidden = !0;
  }
  makeCard(e) {
    let t = ++this.cardN;
    ((this.card = null),
      Vd(drawWorldLabels(e, e.shot, e.url)).then((e) => {
        t === this.cardN &&
          e &&
          (this.card = new File([e], `tukang-parkir.png`, {
            type: `image/png`,
          }));
      }));
  }
  async share() {
    let e = this.card,
      t = e ? [e] : [];
    if (
      e &&
      navigator.canShare?.({
        files: t,
        text: this.shareText,
      })
    )
      try {
        await navigator.share({
          files: t,
          text: this.shareText,
        });
      } catch {}
    else if (e) {
      let t = document.createElement(`a`);
      ((t.href = URL.createObjectURL(e)),
        (t.download = e.name),
        document.body.appendChild(t),
        t.click(),
        t.remove(),
        setTimeout(() => URL.revokeObjectURL(t.href), 4e3),
        await this.copy(),
        ($(`r-share`).textContent = trApp(`r.saved`)));
    } else
      navigator.share
        ? navigator
            .share({
              text: this.shareText,
            })
            .catch(() => {})
        : await this.copy();
  }
  async copy() {
    let e = !1;
    try {
      (await navigator.clipboard.writeText(this.shareText), (e = !0));
    } catch {
      let t = document.createElement(`textarea`);
      ((t.value = this.shareText),
        (t.style.position = `fixed`),
        (t.style.opacity = `0`),
        document.body.appendChild(t),
        t.select(),
        (e = document.execCommand(`copy`)),
        t.remove());
    }
    $(`r-copy`).textContent = trApp(e ? `r.copied` : `r.copyfail`);
  }
};
var Tf = (e, t) => {
  try {
    let n = localStorage.getItem(e);
    return n === null ? t : n === `1`;
  } catch {
    return t;
  }
};
var Ef = (e, t) => {
  try {
    localStorage.setItem(e, t ? `1` : `0`);
  } catch {}
};
var Df = {
  haptics: Tf(`tp-haptics`, !0),
  setHaptics(e) {
    ((this.haptics = e), Ef(`tp-haptics`, e));
  },
};
var Of = (e = 8) => {
  Df.haptics && navigator.vibrate?.(e);
};
var kf = {
  KeyW: `maju`,
  ArrowUp: `maju`,
  KeyA: `kiri`,
  ArrowLeft: `kiri`,
  KeyD: `kanan`,
  ArrowRight: `kanan`,
  KeyS: `mundur`,
  ArrowDown: `mundur`,
  Space: `stop`,
  KeyE: `jalan`,
  KeyH: `sembunyi`,
};
function bindInput(e, t) {
  let n = new Map(),
    r = new Map(),
    i = (t, i, a) => {
      let o = r.get(t) ?? new Set();
      r.set(t, o);
      let s = o.size > 0;
      a ? o.add(i) : o.delete(i);
      let c = o.size > 0;
      s !== c && (n.get(t)?.classList.toggle(`active`, c), e(t, c));
    };
  (document.querySelectorAll(`[data-sig]`).forEach((e) => {
    let r = e.dataset.sig;
    (n.set(r, e),
      e.addEventListener(`pointerdown`, (n) => {
        (n.preventDefault(), t());
        try {
          e.setPointerCapture(n.pointerId);
        } catch {}
        (n.pointerType !== `mouse` && Of(), i(r, `p` + n.pointerId, !0));
      }));
    let a = (e) => i(r, `p` + e.pointerId, !1);
    (e.addEventListener(`pointerup`, a),
      e.addEventListener(`pointercancel`, a),
      e.addEventListener(`lostpointercapture`, a),
      e.addEventListener(`contextmenu`, (e) => e.preventDefault()));
  }),
    window.addEventListener(`keydown`, (e) => {
      let n = kf[e.code];
      !n ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        (e.preventDefault(), e.repeat || (t(), i(n, `key` + e.code, !0)));
    }),
    window.addEventListener(`keyup`, (e) => {
      let t = kf[e.code];
      t && i(t, `key` + e.code, !1);
    }));
  let a = () => {
    for (let [t, i] of r) i.size && (i.clear(), n.get(t)?.classList.remove(`active`), e(t, !1));
  };
  (window.addEventListener(`blur`, a),
    document.addEventListener(`visibilitychange`, () => document.hidden && a()),
    document.addEventListener(`touchmove`, (e) => e.preventDefault(), {
      passive: !1,
    }),
    document.addEventListener(`gesturestart`, (e) => e.preventDefault()),
    document.addEventListener(`dblclick`, (e) => e.preventDefault()));
}

export { $, Df, Ef, Game, HUD, Of, Tf, bindInput, kf };
