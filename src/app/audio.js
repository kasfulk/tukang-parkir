// audio.js — auto-split from assets/index-B84SUXf5.js; see docs/MECHANICS.md

import { Hr, Pa, ei, hi, qa } from "../vendor/three.js";

var Lf = 0.2;
var AudioEngine = class {
  constructor() {
    ((this.muted = localStorage.getItem(`tp-mute`) === `1`),
      (this.musicOn = localStorage.getItem(`tp-music`) !== `0`),
      (this.musicLoading = !1),
      (this.engines = new Map()),
      (this.sirenNodes = []),
      (this.talking = 0));
  }
  unlock() {
    if (!this.ctx) {
      let e = window.AudioContext ?? window.webkitAudioContext;
      if (!e) return;
      let t = (this.ctx = new e());
      ((this.master = t.createGain()),
        (this.master.gain.value = +!this.muted),
        this.master.connect(t.destination),
        (this.fx = t.createGain()),
        (this.voice = t.createGain()),
        (this.voice.gain.value = 1.1),
        (this.music = t.createGain()),
        (this.music.gain.value = this.musicOn ? Lf : 0));
      for (let e of [this.fx, this.voice, this.music]) e.connect(this.master);
      let n = Math.floor(t.sampleRate * 2);
      this.noise = t.createBuffer(1, n, t.sampleRate);
      let r = this.noise.getChannelData(0);
      for (let e = 0; e < n; e++) r[e] = Math.random() * 2 - 1;
      (this.startBed(), this.musicOn && this.loadMusic());
    }
    this.ctx.state === `suspended` && this.ctx.resume();
  }
  toggleMute() {
    return (
      (this.muted = !this.muted),
      localStorage.setItem(`tp-mute`, this.muted ? `1` : `0`),
      this.master && (this.master.gain.value = +!this.muted),
      this.muted
    );
  }
  toggleMusic() {
    return (
      (this.musicOn = !this.musicOn),
      localStorage.setItem(`tp-music`, this.musicOn ? `1` : `0`),
      this.music &&
        this.ctx &&
        (this.music.gain.setTargetAtTime(
          this.musicOn ? this.duckLevel() : 0,
          this.ctx.currentTime,
          0.15,
        ),
        this.musicOn && this.loadMusic()),
      this.musicOn
    );
  }
  async loadMusic() {
    if (!(this.musicSrc || this.musicLoading || !this.ctx)) {
      this.musicLoading = !0;
      try {
        let e = await fetch(`/music/bgm.m4a`),
          t = await this.ctx.decodeAudioData(await e.arrayBuffer()),
          n = this.ctx.createBufferSource();
        ((n.buffer = t), (n.loop = !0), n.connect(this.music), n.start(), (this.musicSrc = n));
      } catch {}
      this.musicLoading = !1;
    }
  }
  duckLevel() {
    return this.talking > 0 ? Lf * 0.5 : Lf;
  }
  duck(e) {
    ((this.talking = Math.max(0, this.talking + e)),
      this.music &&
        this.ctx &&
        this.musicOn &&
        this.music.gain.setTargetAtTime(this.duckLevel(), this.ctx.currentTime, 0.12));
  }
  tone(e, t, n, r, i, a = t) {
    let o = this.ctx,
      s = o.createOscillator(),
      c = o.createGain();
    return (
      (s.type = e),
      s.frequency.setValueAtTime(t, n),
      a !== t && s.frequency.linearRampToValueAtTime(a, n + r),
      c.gain.setValueAtTime(0, n),
      c.gain.linearRampToValueAtTime(i, n + 0.012),
      c.gain.setValueAtTime(i, n + Math.max(0.012, r - 0.04)),
      c.gain.linearRampToValueAtTime(0, n + r),
      s.connect(c).connect(this.fx),
      s.start(n),
      s.stop(n + r + 0.02),
      s
    );
  }
  whistle(e = 1, t = !1) {
    if (!this.ctx) return;
    let n = this.ctx;
    for (let r = 0; r < e; r++) {
      let e = n.currentTime + r * 0.17,
        i = t ? 0.6 : 0.11,
        a = this.tone(`sine`, 2750, e, i, 0.16, 2900),
        o = n.createOscillator(),
        s = n.createGain();
      ((o.frequency.value = 42),
        (s.gain.value = 190),
        o.connect(s).connect(a.frequency),
        o.start(e),
        o.stop(e + i + 0.02));
    }
  }
  burst(e, t, n) {
    let r = this.ctx,
      i = r.createBufferSource();
    i.buffer = this.noise;
    let a = r.createBiquadFilter();
    ((a.type = `lowpass`), (a.frequency.value = n));
    let o = r.createGain(),
      s = r.currentTime;
    (o.gain.setValueAtTime(t, s),
      o.gain.exponentialRampToValueAtTime(0.001, s + e),
      i.connect(a).connect(o).connect(this.fx),
      i.start(s),
      i.stop(s + e));
  }
  crunch(e = !1) {
    this.ctx &&
      (this.burst(e ? 0.38 : 0.22, e ? 0.7 : 0.4, e ? 1400 : 900),
      this.tone(`sine`, e ? 90 : 120, this.ctx.currentTime, 0.18, 0.4, 50));
  }
  clack() {
    this.ctx &&
      (this.burst(0.12, 0.35, 2600),
      this.tone(`triangle`, 320, this.ctx.currentTime, 0.08, 0.15, 180));
  }
  coin() {
    if (!this.ctx) return;
    let e = this.ctx.currentTime;
    (this.tone(`square`, 988, e, 0.08, 0.07), this.tone(`square`, 1319, e + 0.08, 0.26, 0.07));
  }
  honk(e = 1) {
    if (!this.ctx) return;
    let t = this.ctx.currentTime,
      n = e < 1 ? 0.85 + Math.random() * 0.5 : 1;
    for (let r of [0, 0.3])
      (this.tone(`sawtooth`, 410 * n, t + r, 0.24, 0.07 * e),
        this.tone(`sawtooth`, 515 * n, t + r, 0.24, 0.07 * e));
  }
  startBed() {
    let e = this.ctx,
      t = e.createBufferSource();
    ((t.buffer = this.noise), (t.loop = !0));
    let n = e.createBiquadFilter();
    ((n.type = `lowpass`), (n.frequency.value = 380));
    let r = (this.bed = e.createGain());
    ((r.gain.value = 0.05), t.connect(n).connect(r).connect(this.fx), t.start());
  }
  passBy() {
    if (!this.ctx) return;
    let e = this.ctx,
      t = e.currentTime,
      n = 1.6 + Math.random() * 0.8,
      r = Math.random() < 0.5 ? -1 : 1,
      i = 120 + Math.random() * 60,
      a = e.createOscillator();
    ((a.type = `sawtooth`),
      a.frequency.setValueAtTime(i * 1.12, t),
      a.frequency.linearRampToValueAtTime(i * 0.9, t + n));
    let o = e.createBiquadFilter();
    ((o.type = `bandpass`), (o.frequency.value = 900), (o.Q.value = 0.8));
    let s = e.createGain(),
      c = 0.025 + Math.random() * 0.02;
    (s.gain.setValueAtTime(1e-4, t),
      s.gain.exponentialRampToValueAtTime(c, t + n * 0.5),
      s.gain.exponentialRampToValueAtTime(1e-4, t + n));
    let l = e.createStereoPanner();
    (l.pan.setValueAtTime(-0.8 * r, t),
      l.pan.linearRampToValueAtTime(0.8 * r, t + n),
      a.connect(o).connect(s).connect(l).connect(this.fx),
      a.start(t),
      a.stop(t + n + 0.05));
  }
  engine(e, t, n, r) {
    if (!this.ctx) return;
    let i = this.ctx,
      a = this.engines.get(e);
    if (!a) {
      let n = i.createOscillator(),
        r = i.createOscillator();
      ((n.type = `sawtooth`), (r.type = t === `motor` ? `square` : `triangle`));
      let o = i.createBiquadFilter();
      ((o.type = t === `motor` ? `bandpass` : `lowpass`), (o.Q.value = t === `motor` ? 1.2 : 0.7));
      let s = i.createGain();
      ((s.gain.value = 0), n.connect(o), r.connect(o), o.connect(s));
      let c;
      if (t === `motor`) {
        let e = i.createGain();
        ((e.gain.value = 0.65), (c = i.createOscillator()), (c.frequency.value = 22));
        let t = i.createGain();
        ((t.gain.value = 0.35),
          c.connect(t).connect(e.gain),
          c.start(),
          s.connect(e).connect(this.fx));
      } else s.connect(this.fx);
      (n.start(),
        r.start(),
        (a = {
          osc: n,
          sub: r,
          filter: o,
          gain: s,
          trem: c,
          kind: t,
          seen: !0,
        }),
        this.engines.set(e, a));
    }
    a.seen = !0;
    let o = Math.min(Math.abs(n), 9),
      s = i.currentTime,
      c,
      l,
      u;
    (t === `motor`
      ? ((c = 95 + o * 22), (l = 700 + o * 160), (u = 0.03 + o * 0.008))
      : t === `truck`
        ? ((c = 38 + o * 6), (l = 260 + o * 40), (u = 0.09 + o * 0.01))
        : ((c = 48 + o * 13), (l = 320 + o * 120), (u = 0.05 + o * 0.02)),
      a.osc.frequency.setTargetAtTime(c, s, 0.12),
      a.sub.frequency.setTargetAtTime(c / 2, s, 0.12),
      a.filter.frequency.setTargetAtTime(l, s, 0.12),
      a.gain.gain.setTargetAtTime(u * Math.max(0, Math.min(1, r)), s, 0.1),
      a.trem && a.trem.frequency.setTargetAtTime(18 + o * 4, s, 0.1));
  }
  enginesDone() {
    if (!this.ctx) return;
    let e = this.ctx.currentTime;
    for (let [t, n] of this.engines)
      if (n.seen) n.seen = !1;
      else {
        n.gain.gain.setTargetAtTime(0, e, 0.08);
        for (let t of [n.osc, n.sub, n.trem]) t?.stop(e + 0.5);
        this.engines.delete(t);
      }
  }
  siren(e) {
    if (!this.ctx) return;
    let t = this.ctx;
    if (!this.sirenNodes.length) {
      let e = t.createOscillator();
      ((e.type = `square`), (e.frequency.value = 760));
      let n = t.createOscillator();
      ((n.type = `square`), (n.frequency.value = 1.6));
      let r = t.createGain();
      ((r.gain.value = 140), n.connect(r).connect(e.frequency));
      let i = t.createBiquadFilter();
      ((i.type = `lowpass`), (i.frequency.value = 2200));
      let a = t.createGain();
      ((a.gain.value = 0),
        e.connect(i).connect(a).connect(this.fx),
        e.start(),
        n.start(),
        (this.sirenNodes = [e, n, a]));
    }
    this.sirenNodes[2].gain.setTargetAtTime(0.06 * Math.max(0, Math.min(1, e)), t.currentTime, 0.2);
  }
  sirenOff() {
    if (!this.ctx || !this.sirenNodes.length) return;
    let [e, t, n] = this.sirenNodes,
      r = this.ctx.currentTime;
    (n.gain.setTargetAtTime(0, r, 0.15), e.stop(r + 1), t.stop(r + 1), (this.sirenNodes = []));
  }
};
var zf = (e, t, n) => Math.max(t, Math.min(n, e));
var Vf = {
  tukang: `Puck`,
  driver: {
    pemula: `Leda`,
    buru: `Sadachbia`,
    ngeyel: `Orus`,
  },
  owners: [`Achird`, `Sulafat`],
  biker: `Zubenelgenubi`,
  heckle: [`Algenib`, `Alnilam`],
  bikeOwner: `Alnilam`,
  bakso: `Rasalgethi`,
  satpol: `Charon`,
  vendors: [`Gacrux`, `Alnilam`, `Sulafat`, `Algenib`, `Rasalgethi`, `Gacrux`, `Leda`],
};
var Hf = [
  `Terus, terus!`,
  `Kiri, kiri!`,
  `Kanan, kanan!`,
  `STOP! STOP!`,
  `Maju, maju!`,
  `Mundur, mundur!`,
];
var Uf = {
  "Adanya segini, Pak.": [
    {
      v: `Achird`,
      f: `adanya-segini-pak.achird.m4a`,
    },
  ],
  "Aduh! Mobil saya!": [
    {
      v: `Leda`,
      f: `aduh-mobil-saya.leda.m4a`,
    },
    {
      v: `Sadachbia`,
      f: `aduh-mobil-saya.sadachbia.m4a`,
    },
  ],
  "Agak miring nih, Pak.": [
    {
      v: `Leda`,
      f: `agak-miring-nih-pak.leda.m4a`,
    },
    {
      v: `Sadachbia`,
      f: `agak-miring-nih-pak.sadachbia.m4a`,
    },
    {
      v: `Orus`,
      f: `agak-miring-nih-pak.orus.m4a`,
    },
  ],
  "Aman. Lanjut patroli.": [
    {
      v: `Charon`,
      f: `aman-lanjut-patroli.charon.m4a`,
    },
  ],
  "Ampun, Pak! Saya cuma bantu-bantu!": [
    {
      v: `Puck`,
      f: `ampun-pak-saya-cuma-bantu-bantu.puck.m4a`,
    },
  ],
  "Ayo dong, Pak!": [
    {
      v: `Leda`,
      f: `ayo-dong-pak.leda.m4a`,
    },
    {
      v: `Sadachbia`,
      f: `ayo-dong-pak.sadachbia.m4a`,
    },
    {
      v: `Orus`,
      f: `ayo-dong-pak.orus.m4a`,
    },
  ],
  "BAKSO GUE!! Kuahnya tumpah semua!": [
    {
      v: `Rasalgethi`,
      f: `bakso-gue-kuahnya-tumpah-semua.rasalgethi.m4a`,
    },
  ],
  "Bentar doang, Pak!": [
    {
      v: `Achird`,
      f: `bentar-doang-pak.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `bentar-doang-pak.sulafat.m4a`,
    },
  ],
  "Bentar, bentar.": [
    {
      v: `Leda`,
      f: `bentar-bentar.leda.m4a`,
    },
    {
      v: `Sadachbia`,
      f: `bentar-bentar.sadachbia.m4a`,
    },
    {
      v: `Orus`,
      f: `bentar-bentar.orus.m4a`,
    },
  ],
  "Besok mulu!": [
    {
      v: `Puck`,
      f: `besok-mulu.puck.m4a`,
    },
  ],
  "Besok ya, Pak! Langganan kok!": [
    {
      v: `Achird`,
      f: `besok-ya-pak-langganan-kok.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `besok-ya-pak-langganan-kok.sulafat.m4a`,
    },
  ],
  "Bisa QRIS, Pak?": [
    {
      v: `Achird`,
      f: `bisa-qris-pak.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `bisa-qris-pak.sulafat.m4a`,
    },
  ],
  "Bos saya udah nelpon nih!": [
    {
      v: `Sadachbia`,
      f: `bos-saya-udah-nelpon-nih.sadachbia.m4a`,
    },
  ],
  "Buat beli kopi, Pak!": [
    {
      v: `Achird`,
      f: `buat-beli-kopi-pak.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `buat-beli-kopi-pak.sulafat.m4a`,
    },
  ],
  "Bubar, bubar! Ini parkir liar!": [
    {
      v: `Charon`,
      f: `bubar-bubar-ini-parkir-liar.charon.m4a`,
    },
  ],
  "Capek-capek niup peluit…": [
    {
      v: `Puck`,
      f: `capek-capek-niup-peluit.puck.m4a`,
    },
  ],
  "Cash aja, Bos!": [
    {
      v: `Puck`,
      f: `cash-aja-bos.puck.m4a`,
    },
  ],
  "Cepet dong, Pak!": [
    {
      v: `Sadachbia`,
      f: `cepet-dong-pak.sadachbia.m4a`,
    },
  ],
  "Cepetan, Pak! Saya telat!": [
    {
      v: `Sadachbia`,
      f: `cepetan-pak-saya-telat.sadachbia.m4a`,
    },
  ],
  "Dompet ketinggalan, Pak. Besok!": [
    {
      v: `Achird`,
      f: `dompet-ketinggalan-pak-besok.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `dompet-ketinggalan-pak-besok.sulafat.m4a`,
    },
  ],
  "Dua ribu? Biasanya seribu!": [
    {
      v: `Zubenelgenubi`,
      f: `dua-ribu-biasanya-seribu.zubenelgenubi.m4a`,
    },
  ],
  "Emang jalan nenek lu?!": [
    {
      v: `Alnilam`,
      f: `emang-jalan-nenek-lu.alnilam.m4a`,
    },
  ],
  "Es cendol, seger!": [
    {
      v: `Sulafat`,
      f: `es-cendol-seger.sulafat.m4a`,
    },
  ],
  "Hah? Apa?": [
    {
      v: `Sadachbia`,
      f: `hah-apa.sadachbia.m4a`,
    },
    {
      v: `Orus`,
      f: `hah-apa.orus.m4a`,
    },
  ],
  "Ikut kami ke kantor!": [
    {
      v: `Charon`,
      f: `ikut-kami-ke-kantor.charon.m4a`,
    },
  ],
  "Ini mobil mertua, Pak.": [
    {
      v: `Leda`,
      f: `ini-mobil-mertua-pak.leda.m4a`,
    },
  ],
  "Ini udah bener, Pak?": [
    {
      v: `Leda`,
      f: `ini-udah-bener-pak.leda.m4a`,
    },
  ],
  "Ini, Pak. Uang pas ya.": [
    {
      v: `Achird`,
      f: `ini-pak-uang-pas-ya.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `ini-pak-uang-pas-ya.sulafat.m4a`,
    },
  ],
  "Itu mobil orang, Pak!": [
    {
      v: `Achird`,
      f: `itu-mobil-orang-pak.achird.m4a`,
    },
  ],
  "Iya, iya, tahu.": [
    {
      v: `Leda`,
      f: `iya-iya-tahu.leda.m4a`,
    },
    {
      v: `Sadachbia`,
      f: `iya-iya-tahu.sadachbia.m4a`,
    },
    {
      v: `Orus`,
      f: `iya-iya-tahu.orus.m4a`,
    },
  ],
  "Jagain helm saya ya, Pak.": [
    {
      v: `Zubenelgenubi`,
      f: `jagain-helm-saya-ya-pak.zubenelgenubi.m4a`,
    },
  ],
  "Jagain ya, Pak!": [
    {
      v: `Achird`,
      f: `jagain-ya-pak.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `jagain-ya-pak.sulafat.m4a`,
    },
  ],
  "Jalan dong!": [
    {
      v: `Alnilam`,
      f: `jalan-dong.alnilam.m4a`,
    },
  ],
  "Jangan teriak-teriak, Pak, saya grogi.": [
    {
      v: `Leda`,
      f: `jangan-teriak-teriak-pak-saya-grogi.leda.m4a`,
    },
  ],
  "Kabur, kabur!": [
    {
      v: `Puck`,
      f: `kabur-kabur.puck.m4a`,
    },
  ],
  "Kanan, kanan!": [
    {
      v: `Puck`,
      f: `kanan-kanan.puck.m4a`,
    },
    {
      v: `Puck`,
      f: `kanan-kanan.puck.1.m4a`,
    },
  ],
  "Kembaliannya ambil aja, Pak!": [
    {
      v: `Achird`,
      f: `kembaliannya-ambil-aja-pak.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `kembaliannya-ambil-aja-pak.sulafat.m4a`,
    },
  ],
  "Kenyang! Yuk pulang.": [
    {
      v: `Achird`,
      f: `kenyang-yuk-pulang.achird.m4a`,
    },
  ],
  "Kiri, kiri!": [
    {
      v: `Puck`,
      f: `kiri-kiri.puck.m4a`,
    },
    {
      v: `Puck`,
      f: `kiri-kiri.puck.1.m4a`,
    },
  ],
  "Lah… kabur!": [
    {
      v: `Puck`,
      f: `lah-kabur.puck.m4a`,
    },
  ],
  "Lama amat!": [
    {
      v: `Leda`,
      f: `lama-amat.leda.m4a`,
    },
    {
      v: `Sadachbia`,
      f: `lama-amat.sadachbia.m4a`,
    },
    {
      v: `Orus`,
      f: `lama-amat.orus.m4a`,
    },
  ],
  "Lecet gini masih minta bayar?": [
    {
      v: `Achird`,
      f: `lecet-gini-masih-minta-bayar.achird.m4a`,
    },
  ],
  "Lele, lele! Masih anget!": [
    {
      v: `Gacrux`,
      f: `lele-lele-masih-anget.gacrux.m4a`,
    },
  ],
  "Maju, maju!": [
    {
      v: `Puck`,
      f: `maju-maju.puck.m4a`,
    },
    {
      v: `Puck`,
      f: `maju-maju.puck.1.m4a`,
    },
  ],
  "Makasih, Bos! Hati-hati!": [
    {
      v: `Puck`,
      f: `makasih-bos-hati-hati.puck.m4a`,
    },
  ],
  "Makasih, Pak!": [
    {
      v: `Leda`,
      f: `makasih-pak.leda.m4a`,
    },
    {
      v: `Sadachbia`,
      f: `makasih-pak.sadachbia.m4a`,
    },
    {
      v: `Orus`,
      f: `makasih-pak.orus.m4a`,
    },
  ],
  "Makasih, Pak. Hati-hati!": [
    {
      v: `Achird`,
      f: `makasih-pak-hati-hati.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `makasih-pak-hati-hati.sulafat.m4a`,
    },
  ],
  "Mana nih jukir liarnya?!": [
    {
      v: `Charon`,
      f: `mana-nih-jukir-liarnya.charon.m4a`,
    },
  ],
  "Mana ya mobil saya… oh itu.": [
    {
      v: `Achird`,
      f: `mana-ya-mobil-saya-oh-itu.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `mana-ya-mobil-saya-oh-itu.sulafat.m4a`,
    },
  ],
  "Mantap, Pak!": [
    {
      v: `Leda`,
      f: `mantap-pak.leda.m4a`,
    },
    {
      v: `Sadachbia`,
      f: `mantap-pak.sadachbia.m4a`,
    },
    {
      v: `Orus`,
      f: `mantap-pak.orus.m4a`,
    },
  ],
  "Mantap. Aman sama saya!": [
    {
      v: `Puck`,
      f: `mantap-aman-sama-saya.puck.m4a`,
    },
  ],
  "Meeting saya lima menit lagi!": [
    {
      v: `Sadachbia`,
      f: `meeting-saya-lima-menit-lagi.sadachbia.m4a`,
    },
  ],
  "Meong.": [
    {
      v: `Leda`,
      f: `meong.leda.m4a`,
    },
  ],
  "Miring dikit, ya sudahlah.": [
    {
      v: `Leda`,
      f: `miring-dikit-ya-sudahlah.leda.m4a`,
    },
    {
      v: `Sadachbia`,
      f: `miring-dikit-ya-sudahlah.sadachbia.m4a`,
    },
    {
      v: `Orus`,
      f: `miring-dikit-ya-sudahlah.orus.m4a`,
    },
  ],
  "Motor doang, seribu aja ya.": [
    {
      v: `Zubenelgenubi`,
      f: `motor-doang-seribu-aja-ya.zubenelgenubi.m4a`,
    },
  ],
  "Motor siapa tuh yang jatuh? …Motor gue!": [
    {
      v: `Alnilam`,
      f: `motor-siapa-tuh-yang-jatuh-motor-gue.alnilam.m4a`,
    },
  ],
  "Mundur, mundur!": [
    {
      v: `Puck`,
      f: `mundur-mundur.puck.m4a`,
    },
    {
      v: `Puck`,
      f: `mundur-mundur.puck.1.m4a`,
    },
  ],
  "Nah! Ketangkep kamu!": [
    {
      v: `Charon`,
      f: `nah-ketangkep-kamu.charon.m4a`,
    },
  ],
  "Nah, gitu dong!": [
    {
      v: `Puck`,
      f: `nah-gitu-dong.puck.m4a`,
    },
  ],
  "Nah, gitu dong.": [
    {
      v: `Leda`,
      f: `nah-gitu-dong.leda.m4a`,
    },
    {
      v: `Sadachbia`,
      f: `nah-gitu-dong.sadachbia.m4a`,
    },
    {
      v: `Orus`,
      f: `nah-gitu-dong.orus.m4a`,
    },
  ],
  "Nggak ada siapa-siapa. Jalan!": [
    {
      v: `Charon`,
      f: `nggak-ada-siapa-siapa-jalan.charon.m4a`,
    },
  ],
  "Nggak usah diatur-atur.": [
    {
      v: `Orus`,
      f: `nggak-usah-diatur-atur.orus.m4a`,
    },
  ],
  "Nih, Pak. Makasih ya!": [
    {
      v: `Sulafat`,
      f: `nih-pak-makasih-ya.sulafat.m4a`,
    },
  ],
  "Oke, oke, saya atur!": [
    {
      v: `Puck`,
      f: `oke-oke-saya-atur.puck.m4a`,
    },
  ],
  "Oke, titip sama saya!": [
    {
      v: `Puck`,
      f: `oke-titip-sama-saya.puck.m4a`,
    },
  ],
  "Orderan saya keburu dingin!": [
    {
      v: `Alnilam`,
      f: `orderan-saya-keburu-dingin.alnilam.m4a`,
    },
  ],
  "Pak! Gimana sih?!": [
    {
      v: `Leda`,
      f: `pak-gimana-sih.leda.m4a`,
    },
    {
      v: `Sadachbia`,
      f: `pak-gimana-sih.sadachbia.m4a`,
    },
    {
      v: `Orus`,
      f: `pak-gimana-sih.orus.m4a`,
    },
  ],
  "Pak! Keluarin mobil saya dong!": [
    {
      v: `Achird`,
      f: `pak-keluarin-mobil-saya-dong.achird.m4a`,
    },
  ],
  "Pak! Tolong tahan jalannya dong!": [
    {
      v: `Achird`,
      f: `pak-tolong-tahan-jalannya-dong.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `pak-tolong-tahan-jalannya-dong.sulafat.m4a`,
    },
  ],
  "Pak, motor saya yang mana ya?": [
    {
      v: `Zubenelgenubi`,
      f: `pak-motor-saya-yang-mana-ya.zubenelgenubi.m4a`,
    },
  ],
  "Pak, nggak bisa keluar nih!": [
    {
      v: `Achird`,
      f: `pak-nggak-bisa-keluar-nih.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `pak-nggak-bisa-keluar-nih.sulafat.m4a`,
    },
  ],
  "Pak, saya ada anak istri, Pak!": [
    {
      v: `Puck`,
      f: `pak-saya-ada-anak-istri-pak.puck.m4a`,
    },
  ],
  "Pak, saya balik!": [
    {
      v: `Achird`,
      f: `pak-saya-balik.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `pak-saya-balik.sulafat.m4a`,
    },
  ],
  "Pak, saya duluan dong!": [
    {
      v: `Achird`,
      f: `pak-saya-duluan-dong.achird.m4a`,
    },
  ],
  "Pak, saya mau keluar!": [
    {
      v: `Achird`,
      f: `pak-saya-mau-keluar.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `pak-saya-mau-keluar.sulafat.m4a`,
    },
  ],
  "Pelan-pelan ya, Pak…": [
    {
      v: `Leda`,
      f: `pelan-pelan-ya-pak.leda.m4a`,
    },
  ],
  "Permisi, Pak, mau keluar!": [
    {
      v: `Zubenelgenubi`,
      f: `permisi-pak-mau-keluar.zubenelgenubi.m4a`,
    },
  ],
  "Permisi, Pak, mau pulang.": [
    {
      v: `Achird`,
      f: `permisi-pak-mau-pulang.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `permisi-pak-mau-pulang.sulafat.m4a`,
    },
  ],
  "Potong ya, Pak. Buat ketok magic.": [
    {
      v: `Achird`,
      f: `potong-ya-pak-buat-ketok-magic.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `potong-ya-pak-buat-ketok-magic.sulafat.m4a`,
    },
  ],
  "QRIS-nya lagi rusak, Bos. Cash!": [
    {
      v: `Puck`,
      f: `qris-nya-lagi-rusak-bos-cash.puck.m4a`,
    },
  ],
  "STOP! STOP!": [
    {
      v: `Puck`,
      f: `stop-stop.puck.m4a`,
    },
    {
      v: `Puck`,
      f: `stop-stop.puck.1.m4a`,
    },
  ],
  "Sabar, Bos, sabar!": [
    {
      v: `Puck`,
      f: `sabar-bos-sabar.puck.m4a`,
    },
  ],
  "Saya baru bisa nyetir, Pak.": [
    {
      v: `Leda`,
      f: `saya-baru-bisa-nyetir-pak.leda.m4a`,
    },
  ],
  "Saya cuma beli kopi, Pak…": [
    {
      v: `Puck`,
      f: `saya-cuma-beli-kopi-pak.puck.m4a`,
    },
  ],
  "Saya keluar sendiri aja. Nggak usah bayar ya!": [
    {
      v: `Achird`,
      f: `saya-keluar-sendiri-aja-nggak-usah-bayar.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `saya-keluar-sendiri-aja-nggak-usah-bayar.sulafat.m4a`,
    },
  ],
  "Saya parkir sendiri aja!": [
    {
      v: `Leda`,
      f: `saya-parkir-sendiri-aja.leda.m4a`,
    },
    {
      v: `Sadachbia`,
      f: `saya-parkir-sendiri-aja.sadachbia.m4a`,
    },
    {
      v: `Orus`,
      f: `saya-parkir-sendiri-aja.orus.m4a`,
    },
  ],
  "Saya udah 20 tahun nyetir, Pak.": [
    {
      v: `Orus`,
      f: `saya-udah-20-tahun-nyetir-pak.orus.m4a`,
    },
  ],
  "Saya udah jago, Pak.": [
    {
      v: `Orus`,
      f: `saya-udah-jago-pak.orus.m4a`,
    },
  ],
  "Sebentar doang, Pak!": [
    {
      v: `Zubenelgenubi`,
      f: `sebentar-doang-pak.zubenelgenubi.m4a`,
    },
  ],
  "Sebentar ya, Pak, ke ATM.": [
    {
      v: `Achird`,
      f: `sebentar-ya-pak-ke-atm.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `sebentar-ya-pak-ke-atm.sulafat.m4a`,
    },
  ],
  "Segini doang?!": [
    {
      v: `Puck`,
      f: `segini-doang.puck.m4a`,
    },
  ],
  "Siap, Bos! Terus, terus…": [
    {
      v: `Puck`,
      f: `siap-bos-terus-terus.puck.m4a`,
    },
  ],
  "Sip! Jangan lupa kunci ya, Bos!": [
    {
      v: `Puck`,
      f: `sip-jangan-lupa-kunci-ya-bos.puck.m4a`,
    },
  ],
  "Sip, Bos! Sering-sering ya!": [
    {
      v: `Puck`,
      f: `sip-bos-sering-sering-ya.puck.m4a`,
    },
  ],
  "Spionnya juga keliatan kok.": [
    {
      v: `Orus`,
      f: `spionnya-juga-keliatan-kok.orus.m4a`,
    },
  ],
  "Stop, stop! Ada yang keluar!": [
    {
      v: `Puck`,
      f: `stop-stop-ada-yang-keluar.puck.m4a`,
    },
  ],
  "Tenang, saya ahlinya.": [
    {
      v: `Orus`,
      f: `tenang-saya-ahlinya.orus.m4a`,
    },
  ],
  "Tertib, Pak, tertib!": [
    {
      v: `Charon`,
      f: `tertib-pak-tertib.charon.m4a`,
    },
  ],
  "Terus, terus!": [
    {
      v: `Puck`,
      f: `terus-terus.puck.m4a`,
    },
    {
      v: `Puck`,
      f: `terus-terus.puck.1.m4a`,
    },
  ],
  "Tin tiiin!": [
    {
      v: `Achird`,
      f: `tin-tiiin.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `tin-tiiin.sulafat.m4a`,
    },
    {
      v: `Algenib`,
      f: `tin-tiiin.algenib.m4a`,
    },
  ],
  "Titip ya, Pak!": [
    {
      v: `Zubenelgenubi`,
      f: `titip-ya-pak.zubenelgenubi.m4a`,
    },
  ],
  "Titip ya, Pak! Mau makan dulu.": [
    {
      v: `Achird`,
      f: `titip-ya-pak-mau-makan-dulu.achird.m4a`,
    },
  ],
  "Transfer aja boleh, Pak?": [
    {
      v: `Achird`,
      f: `transfer-aja-boleh-pak.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `transfer-aja-boleh-pak.sulafat.m4a`,
    },
  ],
  "Tukang parkirnya mana sih?!": [
    {
      v: `Achird`,
      f: `tukang-parkirnya-mana-sih.achird.m4a`,
    },
    {
      v: `Sulafat`,
      f: `tukang-parkirnya-mana-sih.sulafat.m4a`,
    },
  ],
  "Udah, udah, cukup!": [
    {
      v: `Sadachbia`,
      f: `udah-udah-cukup.sadachbia.m4a`,
    },
  ],
  "Untung sepi. Gratis dong!": [
    {
      v: `Achird`,
      f: `untung-sepi-gratis-dong.achird.m4a`,
    },
  ],
  "WOY! Bayar dulu!": [
    {
      v: `Puck`,
      f: `woy-bayar-dulu.puck.m4a`,
    },
  ],
  "WOY! Mobil gue!": [
    {
      v: `Sulafat`,
      f: `woy-mobil-gue.sulafat.m4a`,
    },
  ],
  "WOY! Motor gue kok rebahan?!": [
    {
      v: `Alnilam`,
      f: `woy-motor-gue-kok-rebahan.alnilam.m4a`,
    },
  ],
  "Waduh, Satpol PP! Ngumpet dulu!": [
    {
      v: `Puck`,
      f: `waduh-satpol-pp-ngumpet-dulu.puck.m4a`,
    },
  ],
  "Waduh, lecet!": [
    {
      v: `Leda`,
      f: `waduh-lecet.leda.m4a`,
    },
    {
      v: `Orus`,
      f: `waduh-lecet.orus.m4a`,
    },
  ],
  "Woy woy, tahan dulu!": [
    {
      v: `Puck`,
      f: `woy-woy-tahan-dulu.puck.m4a`,
    },
  ],
  "Woy, lama!": [
    {
      v: `Algenib`,
      f: `woy-lama.algenib.m4a`,
    },
  ],
  "Yaelah, Bos… pelit amat.": [
    {
      v: `Puck`,
      f: `yaelah-bos-pelit-amat.puck.m4a`,
    },
  ],
};
var Wf = {
  satpolCome: 2,
  satpolBust: 2,
  satpolGone: 1,
  warnSatpol: 2,
  victim: 2,
  bikeOwner: 2,
  bakso: 2,
  heckle: 0,
  vendor: 0,
  queue: 0,
};
var Gf = new Map();
var Kf = new Map();
var qf = (e, t) =>
  e.id.forEach((n, r) => {
    (Gf.set(n, n), e.en[r] && Gf.set(e.en[r], n), Kf.set(n, t));
  });
var Speech = class {
  constructor(e) {
    ((this.sfx = e),
      (this.driver = Vf.driver.pemula),
      (this.buffers = new Map()),
      (this.playing = []),
      (this.lastAmbient = -1 / 0),
      (this.preloaded = !1));
  }
  preload() {
    if (this.preloaded || !this.sfx.ctx) return;
    this.preloaded = !0;
    let e = Object.values(Uf).flatMap((e) => e.map((e) => e.f)),
      t = 0,
      n = async () => {
        let r = e[t++];
        if (r) return (await this.load(r), n());
      };
    for (let e = 0; e < 4; e++) n();
  }
  load(e) {
    let t = this.buffers.get(e);
    if (!t) {
      let n = this.sfx.ctx;
      ((t = fetch(`/voice/${e}`)
        .then((e) => (e.ok ? e.arrayBuffer() : Promise.reject()))
        .then((e) => n.decodeAudioData(e))
        .catch(() => null)),
        this.buffers.set(e, t));
    }
    return t;
  }
  choose(e, t) {
    let n = Uf[e];
    if (!n?.length) return null;
    let r = t === `tukang` ? Vf.tukang : t === `driver` ? this.driver : null,
      i = r ? n.filter((e) => e.v === r) : n.filter((e) => e.v !== Vf.tukang);
    return i.length ? i[Math.floor(Math.random() * i.length)] : null;
  }
  rank(e, t) {
    return t === `tukang` ? 3 : t === `driver` ? 2 : (Wf[Kf.get(e) ?? ``] ?? 1);
  }
  fadeOut(e) {
    let t = this.sfx.ctx.currentTime;
    (e.gain.gain.cancelScheduledValues(t),
      e.gain.gain.setValueAtTime(e.gain.gain.value, t),
      e.gain.gain.linearRampToValueAtTime(0, t + 0.08),
      e.src.stop(t + 0.1),
      (e.ends = t));
  }
  say(e, t) {
    let n = this.sfx.ctx;
    if (!n) return;
    let r = Gf.get(e),
      i = r && this.choose(r, t);
    if (!r || !i) return;
    let a = this.rank(r, t),
      o = n.currentTime;
    this.load(i.f).then((e) => {
      if (!e) return;
      let i = () => {
        let s = n.currentTime;
        if (s - o > (a >= 2 ? 1.2 : 0.8)) return;
        let c = this.playing.filter((e) => e.ends > s + 0.05);
        if (t === `tukang`) {
          if (c.some((e) => e.who === `tukang` && e.line === r && e.ends - s > 0.3)) return;
          for (let e of c) e.who === `tukang` && this.fadeOut(e);
        } else if (a === 0) {
          if (c.length || s - this.lastAmbient < 5) return;
          this.lastAmbient = s;
        } else {
          let e = c.filter((e) => e.rank >= a && e.who !== `tukang`);
          if (e.length) {
            let t = Math.max(...e.map((e) => e.ends)) - s;
            t < 0.9 && setTimeout(i, t * 1e3 + 60);
            return;
          }
          for (let e of c) e.rank < a && e.who !== `tukang` && this.fadeOut(e);
        }
        this.start(e, a, t, r);
      };
      i();
    });
  }
  start(e, t, n, r) {
    let i = this.sfx.ctx,
      a = i.createBufferSource();
    a.buffer = e;
    let o = i.createGain();
    ((o.gain.value = t === 3 ? 1 : t === 2 ? 0.9 : t === 1 ? 0.75 : 0.5),
      a.connect(o).connect(this.sfx.voice));
    let s = {
      src: a,
      gain: o,
      rank: t,
      who: n,
      line: r,
      ends: i.currentTime + e.duration,
    };
    if (n === `tukang`)
      for (let e of this.playing)
        e.who !== `tukang` &&
          e.ends > i.currentTime &&
          e.gain.gain.setTargetAtTime(0.35, i.currentTime, 0.05);
    (this.playing.push(s),
      this.sfx.duck(1),
      (a.onended = () => {
        (this.sfx.duck(-1), (this.playing = this.playing.filter((e) => e !== s)));
      }),
      a.start());
  }
};
var Yf = (e, t = {}) =>
  new qa({
    color: e,
    ...t,
  });
function Xf(e, t, n, r, i, a, o) {
  let s = new ei(new hi(e, t, n), Yf(r));
  return (s.position.set(i, a, o), (s.castShadow = !0), (s.receiveShadow = !0), s);
}
function Zf(e, t, n, r, i, a = 0.012, o = 1) {
  let s = new ei(
    new Pa(e, t),
    new Hr({
      color: n,
      transparent: o < 1,
      opacity: o,
    }),
  );
  return ((s.rotation.x = -Math.PI / 2), s.position.set(r, a, i), s);
}

export { AudioEngine, Gf, Hf, Kf, Lf, Speech, Uf, Vf, Wf, Xf, Yf, Zf, qf, zf };
