// content.js — auto-split from assets/index-B84SUXf5.js; see docs/MECHANICS.md

var AREA = {
  minX: -11.4,
  maxX: 11.4,
  minZ: -9.5,
  maxZ: 6.9,
  laneHalf: 3.9,
  bayW: 2.8,
  bayD: 5.6,
  bays: 7,
  openX: 9.6,
  openHalf: 1.8,
};
var STREET = {
  walkZ0: 7.3,
  roadZ0: 10.3,
  roadZ1: 18.3,
  nearLane: 12.3,
  farLane: 16.3,
  farWalkZ1: 21,
  span: 46,
};
var NPC_DRIVE = {
  cruise: 2.6,
  turn: 1.7,
  creep: 0.75,
  accel: 2.5,
  brake: 7,
};
var STEER_RATE = 0.61;
var PRICES = {
  mobil: 5e3,
  motor: 2e3,
  scratch: 1e3,
  crooked: 1e3,
  tip: 1e3,
  fastSec: 14,
};
// Round-level knobs. Everything here is read at reset time, so it can be
// overridden live from the console: __tp.TUNING.roundSeconds = 60; __game.reset()
var TUNING = {
  roundSeconds: 120,
  patrolFirstIn: [35, 50],
  patrolNextIn: [28, 42],
  passByIn: [3, 7],
};
var VEHICLES = {
  city: {
    id: `city`,
    name: {
      id: `City car`,
      en: `City car`,
    },
    length: 3.6,
    width: 1.65,
    wheelbase: 2.3,
    rearOverhang: 0.6,
    bodyH: 0.6,
    cabin: {
      len: 2.1,
      off: -0.15,
      h: 0.55,
    },
  },
  mpv: {
    id: `mpv`,
    name: {
      id: `MPV`,
      en: `MPV`,
    },
    length: 4.5,
    width: 1.8,
    wheelbase: 2.75,
    rearOverhang: 0.85,
    bodyH: 0.7,
    cabin: {
      len: 3.1,
      off: -0.35,
      h: 0.65,
    },
  },
  pickup: {
    id: `pickup`,
    name: {
      id: `Pikap muat bambu`,
      en: `Pickup with bamboo`,
    },
    length: 4.7,
    width: 1.75,
    wheelbase: 2.9,
    rearOverhang: 1.05,
    bodyH: 0.6,
    cabin: {
      len: 1.5,
      off: 0.45,
      h: 0.6,
    },
    cargo: {
      overhang: 1,
      width: 0.5,
    },
  },
};
var CAR_COLORS = [16734558, 16763450, 9095462, 1671876, 10182117, 16052702, 16749132, 3065014];
var DRIVERS = {
  pemula: {
    id: `pemula`,
    name: {
      id: `Pemula`,
      en: `Newbie`,
    },
    delay: 0.55,
    releaseLag: 0,
    speedMul: 0.8,
    steerGain: 0.85,
    steerRate: 1.2,
    ignoreChance: 0,
    impatient: !1,
    intro: {
      id: [`Pelan-pelan ya, Pak…`, `Saya baru bisa nyetir, Pak.`],
      en: [`Go easy on me, Pak…`, `I only just learned to drive.`],
    },
    chatter: {
      id: [
        `Ini udah bener, Pak?`,
        `Jangan teriak-teriak, Pak, saya grogi.`,
        `Belakang masih aman, Pak?`,
        `Ini mobil mertua, Pak.`,
      ],
      en: [
        `Am I doing it right, Pak?`,
        `Don't shout, Pak, I get nervous.`,
        `Is it still clear behind me, Pak?`,
        `It's my mother-in-law's car, Pak.`,
      ],
    },
  },
  buru: {
    id: `buru`,
    name: {
      id: `Buru-buru`,
      en: `In a hurry`,
    },
    delay: 0.18,
    releaseLag: 0.3,
    speedMul: 1.35,
    steerGain: 1.15,
    steerRate: 3,
    ignoreChance: 0,
    impatient: !0,
    intro: {
      id: [`Cepetan, Pak! Saya telat!`, `Buruan, Pak, buruan!`],
      en: [`Quick, Pak! I'm late!`, `Hurry up, hurry up!`],
    },
    chatter: {
      id: [
        `Cepet dong, Pak!`,
        `Meeting saya lima menit lagi!`,
        `Udah, udah, cukup!`,
        `Bos saya udah nelpon nih!`,
      ],
      en: [
        `Faster, Pak!`,
        `My meeting is in five minutes!`,
        `That's enough, that's enough!`,
        `My boss is already calling!`,
      ],
    },
  },
  ngeyel: {
    id: `ngeyel`,
    name: {
      id: `Ngeyel`,
      en: `Stubborn`,
    },
    delay: 0.35,
    releaseLag: 0,
    speedMul: 1,
    steerGain: 1,
    steerRate: 1.8,
    ignoreChance: 0.2,
    impatient: !1,
    intro: {
      id: [`Saya udah jago, Pak.`, `Nggak usah diatur-atur.`],
      en: [`I know what I am doing, Pak.`, `Don't boss me around.`],
    },
    chatter: {
      id: [
        `Saya udah 20 tahun nyetir, Pak.`,
        `Spionnya juga keliatan kok.`,
        `Segini mah muat, Pak.`,
        `Tenang, saya ahlinya.`,
      ],
      en: [
        `I have been driving for 20 years, Pak.`,
        `I can see it in the mirror, you know.`,
        `This much space is plenty, Pak.`,
        `Relax, I'm the expert.`,
      ],
    },
  },
};
var STRINGS = {
  thanks: {
    id: [`Makasih, Pak!`, `Mantap, Pak!`, `Nah, gitu dong.`],
    en: [`Thanks, Pak!`, `Nice one, Pak!`, `Now that's parking.`],
  },
  crooked: {
    id: [`Miring dikit, ya sudahlah.`, `Agak miring nih, Pak.`],
    en: [`A bit crooked. Oh well.`, `That's not straight, Pak.`],
  },
  ouch: {
    id: [`Aduh! Mobil saya!`, `Waduh, lecet!`, `Pak! Gimana sih?!`],
    en: [`Ouch! My car!`, `Great, a scratch!`, `Pak! What was that?!`],
  },
  angry: {
    id: [`Saya nggak mau bayar!`, `Saya parkir sendiri aja!`],
    en: [`I'm not paying!`, `I'll park it myself!`],
  },
  ignore: {
    id: [`Hah? Apa?`, `Bentar, bentar.`, `Iya, iya, tahu.`],
    en: [`Huh? What?`, `Hang on, hang on.`, `Yeah, yeah, I know.`],
  },
  impatient: {
    id: [`Ayo dong, Pak!`, `Lama amat!`],
    en: [`Come on, Pak!`, `What's taking so long!`],
  },
  queue: {
    id: [`Tin tiiin!`, `Pak, saya duluan dong!`],
    en: [`Beep beeep!`, `Pak, me next!`],
  },
  parked: {
    id: [`Sip! Jangan lupa kunci ya, Bos!`, `Mantap. Aman sama saya!`, `Oke, titip sama saya!`],
    en: [`Done! Lock it up, Boss!`, `Lovely. Safe with me!`, `Okay, I will watch it!`],
  },
  ownerOff: {
    id: [
      `Titip ya, Pak! Mau makan dulu.`,
      `Sebentar ya, Pak, ke ATM.`,
      `Jagain ya, Pak!`,
      `Bentar doang, Pak!`,
    ],
    en: [
      `Watch it for me, Pak! Off to eat.`,
      `Back soon, Pak, just the ATM.`,
      `Keep an eye on it, Pak!`,
      `Only a minute, Pak!`,
    ],
  },
  ownerBack: {
    id: [`Kenyang! Yuk pulang.`, `Mana ya mobil saya… oh itu.`, `Pak, saya balik!`],
    en: [`Full! Time to go.`, `Where is my car… oh, there.`, `Pak, I am back!`],
  },
  wantOut: {
    id: [`Pak, saya mau keluar!`, `Pak! Keluarin mobil saya dong!`, `Permisi, Pak, mau pulang.`],
    en: [
      `Pak, I want to get out!`,
      `Pak! Help me get my car out!`,
      `Excuse me, Pak, heading home.`,
    ],
  },
  onIt: {
    id: [`Siap, Bos! Terus, terus…`, `Oke, oke, saya atur!`, `Sebentar, Bos!`],
    en: [`On it, Boss! Terus, terus…`, `Okay, okay, I got you!`, `One second, Boss!`],
  },
  kerbNag: {
    id: [
      `Pak! Tolong tahan jalannya dong!`,
      `Pak, nggak bisa keluar nih!`,
      `Tukang parkirnya mana sih?!`,
    ],
    en: [`Pak! Hold the traffic for me!`, `Pak, I can't get out!`, `Where is the parking guy?!`],
  },
  holdShout: {
    id: [`Woy woy, tahan dulu!`, `Stop, stop! Ada yang keluar!`, `Sabar, Bos, sabar!`],
    en: [`Oi oi, hold up!`, `Stop, stop! Car coming out!`, `Patience, Boss, patience!`],
  },
  heckle: {
    id: [
      `Woy, lama!`,
      `Jalan dong!`,
      `Kejar setoran, woy!`,
      `Orderan saya keburu dingin!`,
      `Tin tiiin!`,
      `Emang jalan nenek lu?!`,
    ],
    en: [
      `Oi, hurry up!`,
      `Move it!`,
      `I have a quota to make, oi!`,
      `My delivery is going cold!`,
      `Beep beeep!`,
      `Does your grandma own this road?!`,
    ],
  },
  payExact: {
    id: [`Ini, Pak. Uang pas ya.`, `Nih, Pak. Makasih ya!`, `Makasih, Pak. Hati-hati!`],
    en: [`Here, Pak. Exact change.`, `There you go, Pak. Thanks!`, `Thanks, Pak. Take care!`],
  },
  payTip: {
    id: [`Kembaliannya ambil aja, Pak!`, `Buat beli kopi, Pak!`],
    en: [`Keep the change, Pak!`, `Get yourself a coffee, Pak!`],
  },
  payShort: {
    id: [`Adanya seribu, Pak. Sisanya besok ya!`, `Adanya segini, Pak.`],
    en: [`I only have a thousand, Pak. The rest tomorrow!`, `This is all I have, Pak.`],
  },
  payQris: {
    id: [`Bisa QRIS, Pak?`, `Transfer aja boleh, Pak?`],
    en: [`Do you take QRIS, Pak?`, `Can I just transfer it, Pak?`],
  },
  payLater: {
    id: [`Besok ya, Pak! Langganan kok!`, `Dompet ketinggalan, Pak. Besok!`],
    en: [`Tomorrow, Pak! I am a regular!`, `Left my wallet at home, Pak. Tomorrow!`],
  },
  payScratched: {
    id: [`Lecet gini masih minta bayar?`, `Potong ya, Pak. Buat ketok magic.`],
    en: [
      `Scratched like this and you still want paying?`,
      `I am docking that, Pak. For the body shop.`,
    ],
  },
  noHelp: {
    id: [`Saya keluar sendiri aja. Nggak usah bayar ya!`, `Untung sepi. Gratis dong!`],
    en: [`I will get out myself. No need to pay then!`, `Lucky it was quiet. Free parking!`],
  },
  bikeHaggle: {
    id: [`Dua ribu? Biasanya seribu!`, `Motor doang, seribu aja ya.`],
    en: [`Two thousand? It is usually one!`, `It is only a bike, a thousand will do.`],
  },
  bikeRun: {
    id: [`Makasih ya, Pak! Dadaaah!`, `Besok, Pak! Buru-buru!`],
    en: [`Thanks, Pak! Byeee!`, `Tomorrow, Pak! In a rush!`],
  },
  bikeIn: {
    id: [`Titip ya, Pak!`, `Sebentar doang, Pak!`, `Jagain helm saya ya, Pak.`],
    en: [`Watch it for me, Pak!`, `Only for a minute, Pak!`, `Keep an eye on my helmet, Pak.`],
  },
  bikeOut: {
    id: [`Permisi, Pak, mau keluar!`, `Pak, motor saya yang mana ya?`, `Misi, Pak!`],
    en: [`Excuse me, Pak, coming out!`, `Pak, which one is my bike again?`, `Coming through, Pak!`],
  },
  tThanks: {
    id: [`Makasih, Bos! Hati-hati!`, `Sip, Bos! Sering-sering ya!`, `Nah, gitu dong!`],
    en: [`Thanks, Boss! Drive safe!`, `Nice, Boss! Come again!`, `Now we are talking!`],
  },
  tGrumble: {
    id: [`Yaelah, Bos… pelit amat.`, `Besok mulu!`, `Segini doang?!`, `Capek-capek niup peluit…`],
    en: [
      `Come on, Boss… so stingy.`,
      `It is always tomorrow!`,
      `That is it?!`,
      `All that whistling for nothing…`,
    ],
  },
  tCash: {
    id: [`Cash aja, Bos!`, `QRIS-nya lagi rusak, Bos. Cash!`],
    en: [`Cash only, Boss!`, `The QRIS is broken, Boss. Cash!`],
  },
  tWoy: {
    id: [`WOY! Bayar dulu!`, `Lah… kabur!`],
    en: [`OI! Pay first!`, `Hey… they bolted!`],
  },
  victim: {
    id: [`Itu mobil orang, Pak!`, `WOY! Mobil gue!`],
    en: [`That is someone's car, Pak!`, `OI! My car!`],
  },
  bikeOwner: {
    id: [`WOY! Motor gue kok rebahan?!`, `Motor siapa tuh yang jatuh? …Motor gue!`],
    en: [`OI! Why is my bike lying down?!`, `Whose bike fell over? …Mine!`],
  },
  bakso: {
    id: [`BAKSO GUE!! Kuahnya tumpah semua!`, `Astagfirullah, gerobak saya!`],
    en: [`MY BAKSO!! The soup is everywhere!`, `Oh no, my cart!`],
  },
  selfPark: {
    id: [`Lho, jukirnya kabur? Ya udah, parkir sendiri.`, `Ditinggal… parkir sendiri deh.`],
    en: [
      `The attendant ran off? Fine, I will park it myself.`,
      `Abandoned… parking it myself then.`,
    ],
  },
  bikeInAlone: {
    id: [
      `Wah, jukirnya nggak ada. Gratis nih!`,
      `Sepi… aman, nggak usah bayar.`,
      `Nggak ada yang jagain? Lumayan!`,
    ],
    en: [
      `No attendant around. Free parking!`,
      `Nobody here… no need to pay.`,
      `Nobody watching it? Nice!`,
    ],
  },
  leaveAlone: {
    id: [
      `Jukirnya ke mana? Ya udah, gratis!`,
      `Nggak ada jukir, nggak ada bayar!`,
      `Lho, sepi. Rezeki nomplok!`,
    ],
    en: [
      `Where did the attendant go? Free then!`,
      `No attendant, no payment!`,
      `Nobody here. Lucky me!`,
    ],
  },
  bikeLeaveAlone: {
    id: [
      `Jukirnya ngumpet, gratis dong!`,
      `Dadah, Pak Jukir… eh, nggak ada orangnya.`,
      `Kabur dulu sebelum jukirnya nongol!`,
    ],
    en: [
      `The attendant is hiding, free ride!`,
      `Bye, Pak Jukir… oh, nobody here.`,
      `Gone before the attendant shows up!`,
    ],
  },
  paySelf: {
    id: [
      `Tadi parkir sendiri, sekarang muncul minta duit?`,
      `Pas parkir ngilang, pas bayar nongol!`,
      `Bapak tadi ke mana? Kok sekarang ada?`,
    ],
    en: [
      `I parked it myself and now you show up for the money?`,
      `Gone when I parked, here when I pay!`,
      `Where were you earlier? Now you are here?`,
    ],
  },
  bikePaySelf: {
    id: [
      `Tadi nggak ada orang, sekarang minta dua ribu?`,
      `Lho, tadi ke mana, Pak? Kok pas keluar ada?`,
      `Pas dateng sepi, pas pulang ditagih!`,
    ],
    en: [
      `Nobody here earlier, and now you want two thousand?`,
      `Where were you, Pak? Now you are here?`,
      `Empty when I came, charged when I leave!`,
    ],
  },
  tJagainHelm: {
    id: [
      `Helmnya saya jagain, Bos!`,
      `Saya liatin dari warung, Bos!`,
      `Saya mah selalu ada, Bos. Cuma nggak keliatan.`,
    ],
    en: [
      `I was watching your helmet, Boss!`,
      `I was keeping an eye from the warung, Boss!`,
      `I am always here, Boss. Just invisible.`,
    ],
  },
  tJagain: {
    id: [`Kan saya jagain, Bos!`, `Yang penting aman, Bos!`, `Saya ngawasin dari jauh, Bos.`],
    en: [
      `I was watching it, Boss!`,
      `What matters is it is safe, Boss!`,
      `I was keeping an eye on it from afar, Boss.`,
    ],
  },
  satpolCome: {
    id: [`Mana nih jukir liarnya?!`, `Bubar, bubar! Ini parkir liar!`, `Tertib, Pak, tertib!`],
    en: [
      `Where is that illegal attendant?!`,
      `Break it up! This is illegal parking!`,
      `Order, Pak, order!`,
    ],
  },
  satpolGone: {
    id: [`Aman. Lanjut patroli.`, `Nggak ada siapa-siapa. Jalan!`],
    en: [`All clear. Moving on.`, `Nobody here. Drive on!`],
  },
  satpolBust: {
    id: [`Nah! Ketangkep kamu!`, `Ikut kami ke kantor!`, `Mana izinnya? Nggak ada? Angkut!`],
    en: [`Gotcha!`, `You are coming with us!`, `Permit? No permit? Take him!`],
  },
  tHide: {
    id: [`Waduh, Satpol PP! Ngumpet dulu!`, `Kabur, kabur!`, `Saya cuma beli kopi, Pak…`],
    en: [`Uh oh, Satpol PP! Hide!`, `Run, run!`, `I am just buying coffee, Pak…`],
  },
  tBusted: {
    id: [`Ampun, Pak! Saya cuma bantu-bantu!`, `Pak, saya ada anak istri, Pak!`],
    en: [`Mercy, Pak! I was only helping!`, `Pak, I have a wife and kids, Pak!`],
  },
  warnSatpol: {
    id: [`Satpol PP! Satpol PP!`, `Awas, ada Satpol PP!`],
    en: [`Satpol PP! Satpol PP!`, `Watch out, Satpol PP!`],
  },
  vendor: {
    id: [
      `Lele, lele! Masih anget!`,
      `Mie ayam, Mas?`,
      `Es cendol, seger!`,
      `Kopi, Bos?`,
      `Tambal ban, Mas?`,
      `Siomay, siomay!`,
      `Meong.`,
    ],
    en: [
      `Catfish, fresh and hot!`,
      `Chicken noodles, Mas?`,
      `Iced cendol, nice and cold!`,
      `Coffee, Boss?`,
      `Fix your tyre, Mas?`,
      `Siomay, siomay!`,
      `Meow.`,
    ],
  },
};
var pickLang = (e) => e[Math.floor(Math.random() * e.length)];
var formatMoney = (e) => (e < 0 ? `-` : ``) + `Rp` + Math.abs(e).toLocaleString(`id-ID`);
var Driver = class {
  constructor(e) {
    ((this.def = e),
      (this.going = !0),
      (this.gear = -1),
      (this.onIgnore = () => {}),
      (this.onImpatient = () => {}),
      (this.seen = {
        terus: !1,
        kiri: !1,
        kanan: !1,
      }),
      (this.queue = []),
      (this.time = 0),
      (this.lastT = 0),
      (this.idle = 0),
      (this.patience = 2),
      (this.waiting = !1));
  }
  signal(e, t, n = 0) {
    if (e === `jalan` || e === `sembunyi` || e === `maju` || e === `mundur` || (e === `stop` && !t))
      return;
    if (t && e !== `gear` && Math.random() < this.def.ignoreChance) {
      this.onIgnore();
      return;
    }
    let r = this.def.delay * (0.8 + 0.4 * Math.random());
    (t || (r += this.def.releaseLag),
      (this.lastT = Math.max(this.lastT, this.time + r)),
      this.queue.push({
        t: this.lastT,
        type: e,
        down: t,
        gear: n,
      }));
  }
  wait(e) {
    ((this.waiting = e),
      (this.going = !1),
      (this.idle = 0),
      (this.queue = []),
      (this.seen = {
        terus: !1,
        kiri: !1,
        kanan: !1,
      }));
  }
  shock() {
    ((this.going = !1), (this.idle = 0));
  }
  update(e) {
    if (((this.time += e), this.waiting))
      return {
        speed: 0,
        steer: 0,
      };
    let t = this.seen;
    for (; this.queue.length && this.queue[0].t <= this.time;) {
      let e = this.queue.shift();
      e.type === `stop`
        ? (this.going = !1)
        : e.type === `gear`
          ? ((this.gear = e.gear), (this.going = t.terus || t.kiri || t.kanan))
          : (e.type === `terus` || e.type === `kiri` || e.type === `kanan`) &&
            ((t[e.type] = e.down), e.down && (this.going = !0));
    }
    this.going
      ? (this.idle = 0)
      : this.def.impatient &&
        ((this.idle += e),
        this.idle > this.patience &&
          ((this.going = !0), (this.patience = 1.6 + Math.random() * 1.2), this.onImpatient()));
    let n = t.terus ? NPC_DRIVE.cruise : t.kiri || t.kanan ? NPC_DRIVE.turn : NPC_DRIVE.creep;
    return {
      speed: this.going ? n * this.def.speedMul * this.gear : 0,
      steer: (+!!t.kiri - !!t.kanan) * STEER_RATE * this.def.steerGain,
    };
  }
};
var COLOR_ASPHALT = 1863120;
var COLOR_ASPHALT_LIGHT = 15227148;
var I18N_TABLE = {
  "hint.title": [`Kamu tukang parkirnya.`, `You are the parking attendant.`],
  "hint.goal": [
    `Arahkan mobil ke kotak kuning, lalu STOP.`,
    `Guide the car into the yellow bay, then STOP.`,
  ],
  "hint.warn": [`Lepas tombol bukan berarti berhenti!`, `Letting go does not stop the car!`],
  "hint.pay": [
    `Dibayarnya pas mereka keluar: TAHAN JALAN dulu!`,
    `You get paid when they leave: hold the traffic (TAHAN JALAN)!`,
  ],
  "hint.keys": [
    `W/↑ maju · S/↓ mundur · A/← kiri · D/→ kanan · Spasi STOP · E tahan jalan · H sembunyi`,
    `W/↑ forward · S/↓ reverse · A/← left · D/→ right · Space STOP · E hold traffic · H hide`,
  ],
  "g.terus": [``, `keep going`],
  "g.kiri": [``, `left`],
  "g.kanan": [``, `right`],
  "g.stop": [``, ``],
  "g.jalan": [``, `hold traffic`],
  "g.maju": [``, `forward`],
  "g.sembunyi": [``, `hide`],
  "hint.satpol": [
    `Ada Satpol PP? SEMBUNYI, atau diciduk!`,
    `Satpol PP coming? HIDE, or get busted!`,
  ],
  "alert.satpol": [`🚨 SATPOL PP! SEMBUNYI!`, `🚨 SATPOL PP! HIDE!`],
  "alert.satpolIn": [
    `🚨 Satpol PP datang {n} detik lagi! SEMBUNYI (H)`,
    `🚨 Satpol PP in {n}s! HIDE (H)`,
  ],
  "alert.hiding": [`🙈 Ngumpet… tekan lagi buat keluar`, `🙈 Hiding… press again to come out`],
  "g.mundur": [``, `reverse`],
  "key.space": [`Spasi`, `Space`],
  cars: [`{n} mobil`, `{n} cars`],
  driver: [`Sopir {who} · {car}`, `{who} driver · {car}`],
  waiting: [`Mobil berikutnya datang…`, `Next car is on its way…`],
  "shout.maju": [`Maju, maju!`, `Maju, maju!`],
  "shout.mundur": [`Mundur, mundur!`, `Mundur, mundur!`],
  "fx.scratch": [`Lecet!`, `Scratch!`],
  "fx.nopay": [`Nggak dibayar!`, `No pay!`],
  "fx.home": [`Pulang dulu 👋`, `Heading home 👋`],
  "fx.tip": [`tip`, `tip`],
  "fx.rapi": [`Rapi!`, `Tidy!`],
  "fx.miring": [`Miring!`, `Crooked!`],
  "fx.unpaid": [`Nggak bayar!`, `Left without paying!`],
  "fx.docked": [`Ongkos dipotong`, `Fee docked`],
  "fx.later": [`Bayarnya pas keluar`, `Pays on the way out`],
  "fx.self": [`Parkir sendiri… bayarnya tetap!`, `Parked themselves… still pays!`],
  "r.paidCars": [`Mobil bayar`, `Cars that paid`],
  "r.paidBikes": [`Motor bayar`, `Bikes that paid`],
  "r.unpaid": [`Kabur nggak bayar`, `Left without paying`],
  "prop.cone": [`Kerucut`, `Cone`],
  "prop.motor": [`Motor`, `Motorbike`],
  "prop.gerobak": [`Gerobak bakso`, `Bakso cart`],
  "r.head": [`KARCIS PARKIR`, `PARKING TICKET`],
  "r.title": [`Shift selesai`, `Shift over`],
  "r.cars": [`Mobil diparkir`, `Cars parked`],
  "r.scratch": [`Lecet`, `Scratches`],
  "r.props": [`Barang ditabrak`, `Things knocked over`],
  "r.angry": [`Sopir ngambek`, `Drivers who stormed off`],
  "r.best": [`Rekor`, `Best`],
  "r.again": [`Main lagi`, `Play again`],
  "r.copy": [`Salin hasil`, `Copy result`],
  "r.copied": [`Tersalin ✓`, `Copied ✓`],
  "r.copyfail": [`Gagal menyalin`, `Could not copy`],
  "r.share": [`Bagikan`, `Share`],
  "r.saved": [`Gambar tersimpan ✓`, `Image saved ✓`],
  "rank.0": [`Nombok. Mending jualan cilok.`, `In debt. Go sell cilok instead.`],
  "rank.1": [
    `Jukir Magang. Peluitnya masih minjem.`,
    `Trainee jukir. Still borrowing the whistle.`,
  ],
  "rank.2": [
    `Jukir Musiman. Nongolnya pas Lebaran doang.`,
    `Seasonal jukir. Only turns up at Lebaran.`,
  ],
  "rank.3": [
    `Jukir Minimarket. Datang pas mau keluar doang.`,
    `Minimarket jukir. Appears only when you leave.`,
  ],
  "rank.4": [
    `Legenda Parkiran. Bajaj pun muat di gang.`,
    `Parking legend. Fits a bajaj down an alley.`,
  ],
  "rank.5": [
    `Sultan Parkiran. Udah bisa nyicil Fortuner.`,
    `Parking sultan. Already paying off a Fortuner.`,
  ],
  "r.busted": [`Diciduk Satpol PP`, `Busted by Satpol PP`],
  "r.seized": [`Setoran {money} disita`, `{money} confiscated`],
  "bust.0": [
    `Diangkut ke truk. Rompi oranye disita, harga diri juga.`,
    `Hauled into the truck. Orange vest confiscated, dignity too.`,
  ],
  "bust.1": [
    `Ketahuan markir liar. Besok ngumpetnya yang pinter dikit.`,
    `Caught parking illegally. Hide smarter tomorrow.`,
  ],
  "bust.2": [
    `Kena razia. Peluit disita, mending jualan cilok.`,
    `Raided. Whistle confiscated. Go sell cilok.`,
  ],
  "bust.3": [
    `Pulang naik truk Satpol PP. Gratis, tapi nggak enak.`,
    `Free ride home in the Satpol PP truck. Not a fun one.`,
  ],
  "share.busted": [`🚓 Diciduk Satpol PP!`, `🚓 Busted by Satpol PP!`],
  "share.title": [`🅿️ TUKANG PARKIR`, `🅿️ TUKANG PARKIR`],
  "share.line": [
    `Parkir {cars} mobil, {paid} bayar, {unpaid} kabur, lecet {scratch}. Dapat {money}`,
    `Parked {cars} cars, {paid} paid, {unpaid} got away, {scratch} scratches. Earned {money}`,
  ],
  "share.rank": [`Pangkat: {rank}`, `Rank: {rank}`],
  "lang.label": [`Bahasa`, `Language`],
  "mute.label": [`Suara`, `Sound`],
  "music.label": [`Musik`, `Music`],
  "set.title": [`Pengaturan`, `Settings`],
  "set.close": [`Tutup`, `Close`],
  "set.paused": [`Dijeda`, `Paused`],
  "set.resume": [`Lanjut main`, `Resume`],
  "set.haptics": [`Getar`, `Vibration`],
  "set.howto": [`Cara main`, `How to play`],
  "set.howSteer": [
    `KIRI/KANAN selalu dari sisi mobil: ujung yang bergerak belok ke kiri/kanan mobil, maju atau mundur.`,
    `KIRI/KANAN are from the car’s side: the moving end swings to the car’s left/right, forward or reverse.`,
  ],
};
var TZ_INDONESIA = [`Asia/Jakarta`, `Asia/Pontianak`, `Asia/Makassar`, `Asia/Jayapura`];
function detectLang() {
  let e = localStorage.getItem(`tp-lang`);
  if (e === `id` || e === `en`) return e;
  if (
    (navigator.languages?.length ? navigator.languages : [navigator.language ?? ``]).some((e) =>
      /^(id|in|jv|su)\b/i.test(e),
    )
  )
    return `id`;
  try {
    if (TZ_INDONESIA.includes(Intl.DateTimeFormat().resolvedOptions().timeZone)) return `id`;
  } catch {}
  return `en`;
}
var LANG = detectLang();
var langListeners = [];
var getLang = () => LANG;
function trApp(e, t = {}) {
  let n = I18N_TABLE[e];
  return n ? n[LANG === `id` ? 0 : 1].replace(/\{(\w+)\}/g, (e, n) => String(t[n] ?? ``)) : e;
}
function byLang(e) {
  return e[LANG];
}
function applyI18n() {
  ((document.documentElement.lang = LANG),
    document.querySelectorAll(`[data-i18n]`).forEach((e) => {
      e.textContent = trApp(e.dataset.i18n);
    }),
    document.querySelectorAll(`[data-i18n-label]`).forEach((e) => {
      e.setAttribute(`aria-label`, trApp(e.dataset.i18nLabel));
    }));
}
function setLang(e) {
  ((LANG = e), localStorage.setItem(`tp-lang`, e), applyI18n());
  for (let e of langListeners) e();
}
function onLangChange(e) {
  langListeners.push(e);
}

export {
  AREA,
  TUNING,
  CAR_COLORS,
  COLOR_ASPHALT,
  COLOR_ASPHALT_LIGHT,
  DRIVERS,
  Driver,
  I18N_TABLE,
  LANG,
  NPC_DRIVE,
  PRICES,
  STEER_RATE,
  STREET,
  STRINGS,
  TZ_INDONESIA,
  VEHICLES,
  applyI18n,
  byLang,
  detectLang,
  formatMoney,
  getLang,
  langListeners,
  onLangChange,
  pickLang,
  setLang,
  trApp,
};
