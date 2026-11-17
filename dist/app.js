// src/app/content.js
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
  openHalf: 1.8
};
var STREET = {
  walkZ0: 7.3,
  roadZ0: 10.3,
  roadZ1: 18.3,
  nearLane: 12.3,
  farLane: 16.3,
  farWalkZ1: 21,
  span: 46
};
var NPC_DRIVE = {
  cruise: 2.6,
  turn: 1.7,
  creep: 0.75,
  accel: 2.5,
  brake: 7
};
var STEER_RATE = 0.61;
var PRICES = {
  mobil: 5e3,
  motor: 2e3,
  scratch: 1e3,
  crooked: 1e3,
  tip: 1e3,
  fastSec: 14
};
var TUNING = {
  roundSeconds: 120,
  patrolFirstIn: [35, 50],
  patrolNextIn: [28, 42],
  passByIn: [3, 7]
};
var VEHICLES = {
  city: {
    id: `city`,
    name: {
      id: `City car`,
      en: `City car`
    },
    length: 3.6,
    width: 1.65,
    wheelbase: 2.3,
    rearOverhang: 0.6,
    bodyH: 0.6,
    cabin: {
      len: 2.1,
      off: -0.15,
      h: 0.55
    }
  },
  mpv: {
    id: `mpv`,
    name: {
      id: `MPV`,
      en: `MPV`
    },
    length: 4.5,
    width: 1.8,
    wheelbase: 2.75,
    rearOverhang: 0.85,
    bodyH: 0.7,
    cabin: {
      len: 3.1,
      off: -0.35,
      h: 0.65
    }
  },
  pickup: {
    id: `pickup`,
    name: {
      id: `Pikap muat bambu`,
      en: `Pickup with bamboo`
    },
    length: 4.7,
    width: 1.75,
    wheelbase: 2.9,
    rearOverhang: 1.05,
    bodyH: 0.6,
    cabin: {
      len: 1.5,
      off: 0.45,
      h: 0.6
    },
    cargo: {
      overhang: 1,
      width: 0.5
    }
  }
};
var CAR_COLORS = [16734558, 16763450, 9095462, 1671876, 10182117, 16052702, 16749132, 3065014];
var DRIVERS = {
  pemula: {
    id: `pemula`,
    name: {
      id: `Pemula`,
      en: `Newbie`
    },
    delay: 0.55,
    releaseLag: 0,
    speedMul: 0.8,
    steerGain: 0.85,
    steerRate: 1.2,
    ignoreChance: 0,
    impatient: false,
    intro: {
      id: [`Pelan-pelan ya, Pak\u2026`, `Saya baru bisa nyetir, Pak.`],
      en: [`Go easy on me, Pak\u2026`, `I only just learned to drive.`]
    },
    chatter: {
      id: [
        `Ini udah bener, Pak?`,
        `Jangan teriak-teriak, Pak, saya grogi.`,
        `Belakang masih aman, Pak?`,
        `Ini mobil mertua, Pak.`
      ],
      en: [
        `Am I doing it right, Pak?`,
        `Don't shout, Pak, I get nervous.`,
        `Is it still clear behind me, Pak?`,
        `It's my mother-in-law's car, Pak.`
      ]
    }
  },
  buru: {
    id: `buru`,
    name: {
      id: `Buru-buru`,
      en: `In a hurry`
    },
    delay: 0.18,
    releaseLag: 0.3,
    speedMul: 1.35,
    steerGain: 1.15,
    steerRate: 3,
    ignoreChance: 0,
    impatient: true,
    intro: {
      id: [`Cepetan, Pak! Saya telat!`, `Buruan, Pak, buruan!`],
      en: [`Quick, Pak! I'm late!`, `Hurry up, hurry up!`]
    },
    chatter: {
      id: [
        `Cepet dong, Pak!`,
        `Meeting saya lima menit lagi!`,
        `Udah, udah, cukup!`,
        `Bos saya udah nelpon nih!`
      ],
      en: [
        `Faster, Pak!`,
        `My meeting is in five minutes!`,
        `That's enough, that's enough!`,
        `My boss is already calling!`
      ]
    }
  },
  ngeyel: {
    id: `ngeyel`,
    name: {
      id: `Ngeyel`,
      en: `Stubborn`
    },
    delay: 0.35,
    releaseLag: 0,
    speedMul: 1,
    steerGain: 1,
    steerRate: 1.8,
    ignoreChance: 0.2,
    impatient: false,
    intro: {
      id: [`Saya udah jago, Pak.`, `Nggak usah diatur-atur.`],
      en: [`I know what I am doing, Pak.`, `Don't boss me around.`]
    },
    chatter: {
      id: [
        `Saya udah 20 tahun nyetir, Pak.`,
        `Spionnya juga keliatan kok.`,
        `Segini mah muat, Pak.`,
        `Tenang, saya ahlinya.`
      ],
      en: [
        `I have been driving for 20 years, Pak.`,
        `I can see it in the mirror, you know.`,
        `This much space is plenty, Pak.`,
        `Relax, I'm the expert.`
      ]
    }
  }
};
var STRINGS = {
  thanks: {
    id: [`Makasih, Pak!`, `Mantap, Pak!`, `Nah, gitu dong.`],
    en: [`Thanks, Pak!`, `Nice one, Pak!`, `Now that's parking.`]
  },
  crooked: {
    id: [`Miring dikit, ya sudahlah.`, `Agak miring nih, Pak.`],
    en: [`A bit crooked. Oh well.`, `That's not straight, Pak.`]
  },
  ouch: {
    id: [`Aduh! Mobil saya!`, `Waduh, lecet!`, `Pak! Gimana sih?!`],
    en: [`Ouch! My car!`, `Great, a scratch!`, `Pak! What was that?!`]
  },
  angry: {
    id: [`Saya nggak mau bayar!`, `Saya parkir sendiri aja!`],
    en: [`I'm not paying!`, `I'll park it myself!`]
  },
  ignore: {
    id: [`Hah? Apa?`, `Bentar, bentar.`, `Iya, iya, tahu.`],
    en: [`Huh? What?`, `Hang on, hang on.`, `Yeah, yeah, I know.`]
  },
  impatient: {
    id: [`Ayo dong, Pak!`, `Lama amat!`],
    en: [`Come on, Pak!`, `What's taking so long!`]
  },
  queue: {
    id: [`Tin tiiin!`, `Pak, saya duluan dong!`],
    en: [`Beep beeep!`, `Pak, me next!`]
  },
  parked: {
    id: [`Sip! Jangan lupa kunci ya, Bos!`, `Mantap. Aman sama saya!`, `Oke, titip sama saya!`],
    en: [`Done! Lock it up, Boss!`, `Lovely. Safe with me!`, `Okay, I will watch it!`]
  },
  ownerOff: {
    id: [
      `Titip ya, Pak! Mau makan dulu.`,
      `Sebentar ya, Pak, ke ATM.`,
      `Jagain ya, Pak!`,
      `Bentar doang, Pak!`
    ],
    en: [
      `Watch it for me, Pak! Off to eat.`,
      `Back soon, Pak, just the ATM.`,
      `Keep an eye on it, Pak!`,
      `Only a minute, Pak!`
    ]
  },
  ownerBack: {
    id: [`Kenyang! Yuk pulang.`, `Mana ya mobil saya\u2026 oh itu.`, `Pak, saya balik!`],
    en: [`Full! Time to go.`, `Where is my car\u2026 oh, there.`, `Pak, I am back!`]
  },
  wantOut: {
    id: [`Pak, saya mau keluar!`, `Pak! Keluarin mobil saya dong!`, `Permisi, Pak, mau pulang.`],
    en: [
      `Pak, I want to get out!`,
      `Pak! Help me get my car out!`,
      `Excuse me, Pak, heading home.`
    ]
  },
  onIt: {
    id: [`Siap, Bos! Terus, terus\u2026`, `Oke, oke, saya atur!`, `Sebentar, Bos!`],
    en: [`On it, Boss! Terus, terus\u2026`, `Okay, okay, I got you!`, `One second, Boss!`]
  },
  kerbNag: {
    id: [
      `Pak! Tolong tahan jalannya dong!`,
      `Pak, nggak bisa keluar nih!`,
      `Tukang parkirnya mana sih?!`
    ],
    en: [`Pak! Hold the traffic for me!`, `Pak, I can't get out!`, `Where is the parking guy?!`]
  },
  holdShout: {
    id: [`Woy woy, tahan dulu!`, `Stop, stop! Ada yang keluar!`, `Sabar, Bos, sabar!`],
    en: [`Oi oi, hold up!`, `Stop, stop! Car coming out!`, `Patience, Boss, patience!`]
  },
  heckle: {
    id: [
      `Woy, lama!`,
      `Jalan dong!`,
      `Kejar setoran, woy!`,
      `Orderan saya keburu dingin!`,
      `Tin tiiin!`,
      `Emang jalan nenek lu?!`
    ],
    en: [
      `Oi, hurry up!`,
      `Move it!`,
      `I have a quota to make, oi!`,
      `My delivery is going cold!`,
      `Beep beeep!`,
      `Does your grandma own this road?!`
    ]
  },
  payExact: {
    id: [`Ini, Pak. Uang pas ya.`, `Nih, Pak. Makasih ya!`, `Makasih, Pak. Hati-hati!`],
    en: [`Here, Pak. Exact change.`, `There you go, Pak. Thanks!`, `Thanks, Pak. Take care!`]
  },
  payTip: {
    id: [`Kembaliannya ambil aja, Pak!`, `Buat beli kopi, Pak!`],
    en: [`Keep the change, Pak!`, `Get yourself a coffee, Pak!`]
  },
  payShort: {
    id: [`Adanya seribu, Pak. Sisanya besok ya!`, `Adanya segini, Pak.`],
    en: [`I only have a thousand, Pak. The rest tomorrow!`, `This is all I have, Pak.`]
  },
  payQris: {
    id: [`Bisa QRIS, Pak?`, `Transfer aja boleh, Pak?`],
    en: [`Do you take QRIS, Pak?`, `Can I just transfer it, Pak?`]
  },
  payLater: {
    id: [`Besok ya, Pak! Langganan kok!`, `Dompet ketinggalan, Pak. Besok!`],
    en: [`Tomorrow, Pak! I am a regular!`, `Left my wallet at home, Pak. Tomorrow!`]
  },
  payScratched: {
    id: [`Lecet gini masih minta bayar?`, `Potong ya, Pak. Buat ketok magic.`],
    en: [
      `Scratched like this and you still want paying?`,
      `I am docking that, Pak. For the body shop.`
    ]
  },
  noHelp: {
    id: [`Saya keluar sendiri aja. Nggak usah bayar ya!`, `Untung sepi. Gratis dong!`],
    en: [`I will get out myself. No need to pay then!`, `Lucky it was quiet. Free parking!`]
  },
  bikeHaggle: {
    id: [`Dua ribu? Biasanya seribu!`, `Motor doang, seribu aja ya.`],
    en: [`Two thousand? It is usually one!`, `It is only a bike, a thousand will do.`]
  },
  bikeRun: {
    id: [`Makasih ya, Pak! Dadaaah!`, `Besok, Pak! Buru-buru!`],
    en: [`Thanks, Pak! Byeee!`, `Tomorrow, Pak! In a rush!`]
  },
  bikeIn: {
    id: [`Titip ya, Pak!`, `Sebentar doang, Pak!`, `Jagain helm saya ya, Pak.`],
    en: [`Watch it for me, Pak!`, `Only for a minute, Pak!`, `Keep an eye on my helmet, Pak.`]
  },
  bikeOut: {
    id: [`Permisi, Pak, mau keluar!`, `Pak, motor saya yang mana ya?`, `Misi, Pak!`],
    en: [`Excuse me, Pak, coming out!`, `Pak, which one is my bike again?`, `Coming through, Pak!`]
  },
  tThanks: {
    id: [`Makasih, Bos! Hati-hati!`, `Sip, Bos! Sering-sering ya!`, `Nah, gitu dong!`],
    en: [`Thanks, Boss! Drive safe!`, `Nice, Boss! Come again!`, `Now we are talking!`]
  },
  tGrumble: {
    id: [`Yaelah, Bos\u2026 pelit amat.`, `Besok mulu!`, `Segini doang?!`, `Capek-capek niup peluit\u2026`],
    en: [
      `Come on, Boss\u2026 so stingy.`,
      `It is always tomorrow!`,
      `That is it?!`,
      `All that whistling for nothing\u2026`
    ]
  },
  tCash: {
    id: [`Cash aja, Bos!`, `QRIS-nya lagi rusak, Bos. Cash!`],
    en: [`Cash only, Boss!`, `The QRIS is broken, Boss. Cash!`]
  },
  tWoy: {
    id: [`WOY! Bayar dulu!`, `Lah\u2026 kabur!`],
    en: [`OI! Pay first!`, `Hey\u2026 they bolted!`]
  },
  victim: {
    id: [`Itu mobil orang, Pak!`, `WOY! Mobil gue!`],
    en: [`That is someone's car, Pak!`, `OI! My car!`]
  },
  bikeOwner: {
    id: [`WOY! Motor gue kok rebahan?!`, `Motor siapa tuh yang jatuh? \u2026Motor gue!`],
    en: [`OI! Why is my bike lying down?!`, `Whose bike fell over? \u2026Mine!`]
  },
  bakso: {
    id: [`BAKSO GUE!! Kuahnya tumpah semua!`, `Astagfirullah, gerobak saya!`],
    en: [`MY BAKSO!! The soup is everywhere!`, `Oh no, my cart!`]
  },
  selfPark: {
    id: [`Lho, jukirnya kabur? Ya udah, parkir sendiri.`, `Ditinggal\u2026 parkir sendiri deh.`],
    en: [
      `The attendant ran off? Fine, I will park it myself.`,
      `Abandoned\u2026 parking it myself then.`
    ]
  },
  bikeInAlone: {
    id: [
      `Wah, jukirnya nggak ada. Gratis nih!`,
      `Sepi\u2026 aman, nggak usah bayar.`,
      `Nggak ada yang jagain? Lumayan!`
    ],
    en: [
      `No attendant around. Free parking!`,
      `Nobody here\u2026 no need to pay.`,
      `Nobody watching it? Nice!`
    ]
  },
  leaveAlone: {
    id: [
      `Jukirnya ke mana? Ya udah, gratis!`,
      `Nggak ada jukir, nggak ada bayar!`,
      `Lho, sepi. Rezeki nomplok!`
    ],
    en: [
      `Where did the attendant go? Free then!`,
      `No attendant, no payment!`,
      `Nobody here. Lucky me!`
    ]
  },
  bikeLeaveAlone: {
    id: [
      `Jukirnya ngumpet, gratis dong!`,
      `Dadah, Pak Jukir\u2026 eh, nggak ada orangnya.`,
      `Kabur dulu sebelum jukirnya nongol!`
    ],
    en: [
      `The attendant is hiding, free ride!`,
      `Bye, Pak Jukir\u2026 oh, nobody here.`,
      `Gone before the attendant shows up!`
    ]
  },
  paySelf: {
    id: [
      `Tadi parkir sendiri, sekarang muncul minta duit?`,
      `Pas parkir ngilang, pas bayar nongol!`,
      `Bapak tadi ke mana? Kok sekarang ada?`
    ],
    en: [
      `I parked it myself and now you show up for the money?`,
      `Gone when I parked, here when I pay!`,
      `Where were you earlier? Now you are here?`
    ]
  },
  bikePaySelf: {
    id: [
      `Tadi nggak ada orang, sekarang minta dua ribu?`,
      `Lho, tadi ke mana, Pak? Kok pas keluar ada?`,
      `Pas dateng sepi, pas pulang ditagih!`
    ],
    en: [
      `Nobody here earlier, and now you want two thousand?`,
      `Where were you, Pak? Now you are here?`,
      `Empty when I came, charged when I leave!`
    ]
  },
  tJagainHelm: {
    id: [
      `Helmnya saya jagain, Bos!`,
      `Saya liatin dari warung, Bos!`,
      `Saya mah selalu ada, Bos. Cuma nggak keliatan.`
    ],
    en: [
      `I was watching your helmet, Boss!`,
      `I was keeping an eye from the warung, Boss!`,
      `I am always here, Boss. Just invisible.`
    ]
  },
  tJagain: {
    id: [`Kan saya jagain, Bos!`, `Yang penting aman, Bos!`, `Saya ngawasin dari jauh, Bos.`],
    en: [
      `I was watching it, Boss!`,
      `What matters is it is safe, Boss!`,
      `I was keeping an eye on it from afar, Boss.`
    ]
  },
  satpolCome: {
    id: [`Mana nih jukir liarnya?!`, `Bubar, bubar! Ini parkir liar!`, `Tertib, Pak, tertib!`],
    en: [
      `Where is that illegal attendant?!`,
      `Break it up! This is illegal parking!`,
      `Order, Pak, order!`
    ]
  },
  satpolGone: {
    id: [`Aman. Lanjut patroli.`, `Nggak ada siapa-siapa. Jalan!`],
    en: [`All clear. Moving on.`, `Nobody here. Drive on!`]
  },
  satpolBust: {
    id: [`Nah! Ketangkep kamu!`, `Ikut kami ke kantor!`, `Mana izinnya? Nggak ada? Angkut!`],
    en: [`Gotcha!`, `You are coming with us!`, `Permit? No permit? Take him!`]
  },
  tHide: {
    id: [`Waduh, Satpol PP! Ngumpet dulu!`, `Kabur, kabur!`, `Saya cuma beli kopi, Pak\u2026`],
    en: [`Uh oh, Satpol PP! Hide!`, `Run, run!`, `I am just buying coffee, Pak\u2026`]
  },
  tBusted: {
    id: [`Ampun, Pak! Saya cuma bantu-bantu!`, `Pak, saya ada anak istri, Pak!`],
    en: [`Mercy, Pak! I was only helping!`, `Pak, I have a wife and kids, Pak!`]
  },
  warnSatpol: {
    id: [`Satpol PP! Satpol PP!`, `Awas, ada Satpol PP!`],
    en: [`Satpol PP! Satpol PP!`, `Watch out, Satpol PP!`]
  },
  vendor: {
    id: [
      `Lele, lele! Masih anget!`,
      `Mie ayam, Mas?`,
      `Es cendol, seger!`,
      `Kopi, Bos?`,
      `Tambal ban, Mas?`,
      `Siomay, siomay!`,
      `Meong.`
    ],
    en: [
      `Catfish, fresh and hot!`,
      `Chicken noodles, Mas?`,
      `Iced cendol, nice and cold!`,
      `Coffee, Boss?`,
      `Fix your tyre, Mas?`,
      `Siomay, siomay!`,
      `Meow.`
    ]
  }
};
var pickLang = (e21) => e21[Math.floor(Math.random() * e21.length)];
var formatMoney = (e21) => (e21 < 0 ? `-` : ``) + `Rp` + Math.abs(e21).toLocaleString(`id-ID`);
var Driver = class {
  constructor(e21) {
    this.def = e21, this.going = true, this.gear = -1, this.onIgnore = () => {
    }, this.onImpatient = () => {
    }, this.seen = {
      terus: false,
      kiri: false,
      kanan: false
    }, this.queue = [], this.time = 0, this.lastT = 0, this.idle = 0, this.patience = 2, this.waiting = false;
  }
  signal(e21, t2, n2 = 0) {
    if (e21 === `jalan` || e21 === `sembunyi` || e21 === `maju` || e21 === `mundur` || e21 === `stop` && !t2)
      return;
    if (t2 && e21 !== `gear` && Math.random() < this.def.ignoreChance) {
      this.onIgnore();
      return;
    }
    let r3 = this.def.delay * (0.8 + 0.4 * Math.random());
    t2 || (r3 += this.def.releaseLag), this.lastT = Math.max(this.lastT, this.time + r3), this.queue.push({
      t: this.lastT,
      type: e21,
      down: t2,
      gear: n2
    });
  }
  wait(e21) {
    this.waiting = e21, this.going = false, this.idle = 0, this.queue = [], this.seen = {
      terus: false,
      kiri: false,
      kanan: false
    };
  }
  shock() {
    this.going = false, this.idle = 0;
  }
  update(e21) {
    if (this.time += e21, this.waiting)
      return {
        speed: 0,
        steer: 0
      };
    let t2 = this.seen;
    for (; this.queue.length && this.queue[0].t <= this.time; ) {
      let e22 = this.queue.shift();
      e22.type === `stop` ? this.going = false : e22.type === `gear` ? (this.gear = e22.gear, this.going = t2.terus || t2.kiri || t2.kanan) : (e22.type === `terus` || e22.type === `kiri` || e22.type === `kanan`) && (t2[e22.type] = e22.down, e22.down && (this.going = true));
    }
    this.going ? this.idle = 0 : this.def.impatient && (this.idle += e21, this.idle > this.patience && (this.going = true, this.patience = 1.6 + Math.random() * 1.2, this.onImpatient()));
    let n2 = t2.terus ? NPC_DRIVE.cruise : t2.kiri || t2.kanan ? NPC_DRIVE.turn : NPC_DRIVE.creep;
    return {
      speed: this.going ? n2 * this.def.speedMul * this.gear : 0,
      steer: (+!!t2.kiri - !!t2.kanan) * STEER_RATE * this.def.steerGain
    };
  }
};
var COLOR_ASPHALT = 1863120;
var COLOR_ASPHALT_LIGHT = 15227148;
var I18N_TABLE = {
  "hint.title": [`Kamu tukang parkirnya.`, `You are the parking attendant.`],
  "hint.goal": [
    `Arahkan mobil ke kotak kuning, lalu STOP.`,
    `Guide the car into the yellow bay, then STOP.`
  ],
  "hint.warn": [`Lepas tombol bukan berarti berhenti!`, `Letting go does not stop the car!`],
  "hint.pay": [
    `Dibayarnya pas mereka keluar: TAHAN JALAN dulu!`,
    `You get paid when they leave: hold the traffic (TAHAN JALAN)!`
  ],
  "hint.keys": [
    `W/\u2191 maju \xB7 S/\u2193 mundur \xB7 A/\u2190 kiri \xB7 D/\u2192 kanan \xB7 Spasi STOP \xB7 E tahan jalan \xB7 H sembunyi`,
    `W/\u2191 forward \xB7 S/\u2193 reverse \xB7 A/\u2190 left \xB7 D/\u2192 right \xB7 Space STOP \xB7 E hold traffic \xB7 H hide`
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
    `Satpol PP coming? HIDE, or get busted!`
  ],
  "alert.satpol": [`\u{1F6A8} SATPOL PP! SEMBUNYI!`, `\u{1F6A8} SATPOL PP! HIDE!`],
  "alert.satpolIn": [
    `\u{1F6A8} Satpol PP datang {n} detik lagi! SEMBUNYI (H)`,
    `\u{1F6A8} Satpol PP in {n}s! HIDE (H)`
  ],
  "alert.hiding": [`\u{1F648} Ngumpet\u2026 tekan lagi buat keluar`, `\u{1F648} Hiding\u2026 press again to come out`],
  "g.mundur": [``, `reverse`],
  "key.space": [`Spasi`, `Space`],
  cars: [`{n} mobil`, `{n} cars`],
  driver: [`Sopir {who} \xB7 {car}`, `{who} driver \xB7 {car}`],
  waiting: [`Mobil berikutnya datang\u2026`, `Next car is on its way\u2026`],
  "shout.maju": [`Maju, maju!`, `Maju, maju!`],
  "shout.mundur": [`Mundur, mundur!`, `Mundur, mundur!`],
  "fx.scratch": [`Lecet!`, `Scratch!`],
  "fx.nopay": [`Nggak dibayar!`, `No pay!`],
  "fx.home": [`Pulang dulu \u{1F44B}`, `Heading home \u{1F44B}`],
  "fx.tip": [`tip`, `tip`],
  "fx.rapi": [`Rapi!`, `Tidy!`],
  "fx.miring": [`Miring!`, `Crooked!`],
  "fx.unpaid": [`Nggak bayar!`, `Left without paying!`],
  "fx.docked": [`Ongkos dipotong`, `Fee docked`],
  "fx.later": [`Bayarnya pas keluar`, `Pays on the way out`],
  "fx.self": [`Parkir sendiri\u2026 bayarnya tetap!`, `Parked themselves\u2026 still pays!`],
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
  "r.copied": [`Tersalin \u2713`, `Copied \u2713`],
  "r.copyfail": [`Gagal menyalin`, `Could not copy`],
  "r.share": [`Bagikan`, `Share`],
  "r.saved": [`Gambar tersimpan \u2713`, `Image saved \u2713`],
  "rank.0": [`Nombok. Mending jualan cilok.`, `In debt. Go sell cilok instead.`],
  "rank.1": [
    `Jukir Magang. Peluitnya masih minjem.`,
    `Trainee jukir. Still borrowing the whistle.`
  ],
  "rank.2": [
    `Jukir Musiman. Nongolnya pas Lebaran doang.`,
    `Seasonal jukir. Only turns up at Lebaran.`
  ],
  "rank.3": [
    `Jukir Minimarket. Datang pas mau keluar doang.`,
    `Minimarket jukir. Appears only when you leave.`
  ],
  "rank.4": [
    `Legenda Parkiran. Bajaj pun muat di gang.`,
    `Parking legend. Fits a bajaj down an alley.`
  ],
  "rank.5": [
    `Sultan Parkiran. Udah bisa nyicil Fortuner.`,
    `Parking sultan. Already paying off a Fortuner.`
  ],
  "r.busted": [`Diciduk Satpol PP`, `Busted by Satpol PP`],
  "r.seized": [`Setoran {money} disita`, `{money} confiscated`],
  "bust.0": [
    `Diangkut ke truk. Rompi oranye disita, harga diri juga.`,
    `Hauled into the truck. Orange vest confiscated, dignity too.`
  ],
  "bust.1": [
    `Ketahuan markir liar. Besok ngumpetnya yang pinter dikit.`,
    `Caught parking illegally. Hide smarter tomorrow.`
  ],
  "bust.2": [
    `Kena razia. Peluit disita, mending jualan cilok.`,
    `Raided. Whistle confiscated. Go sell cilok.`
  ],
  "bust.3": [
    `Pulang naik truk Satpol PP. Gratis, tapi nggak enak.`,
    `Free ride home in the Satpol PP truck. Not a fun one.`
  ],
  "share.busted": [`\u{1F693} Diciduk Satpol PP!`, `\u{1F693} Busted by Satpol PP!`],
  "share.title": [`\u{1F17F}\uFE0F TUKANG PARKIR`, `\u{1F17F}\uFE0F TUKANG PARKIR`],
  "share.line": [
    `Parkir {cars} mobil, {paid} bayar, {unpaid} kabur, lecet {scratch}. Dapat {money}`,
    `Parked {cars} cars, {paid} paid, {unpaid} got away, {scratch} scratches. Earned {money}`
  ],
  "share.rank": [`Pangkat: {rank}`, `Rank: {rank}`],
  "lang.label": [`Bahasa`, `Language`],
  "level.label": [`Level`, `Level`],
  "level.pasar": [`Pasar Pagi`, `Morning Market`],
  "level.sempit": [`Lahan Sempit`, `Tight Lot`],
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
    `KIRI/KANAN are from the car\u2019s side: the moving end swings to the car\u2019s left/right, forward or reverse.`
  ]
};
var TZ_INDONESIA = [`Asia/Jakarta`, `Asia/Pontianak`, `Asia/Makassar`, `Asia/Jayapura`];
function detectLang() {
  let e21 = localStorage.getItem(`tp-lang`);
  if (e21 === `id` || e21 === `en`) return e21;
  if ((navigator.languages?.length ? navigator.languages : [navigator.language ?? ``]).some(
    (e22) => /^(id|in|jv|su)\b/i.test(e22)
  ))
    return `id`;
  try {
    if (TZ_INDONESIA.includes(Intl.DateTimeFormat().resolvedOptions().timeZone)) return `id`;
  } catch {
  }
  return `en`;
}
var LANG = detectLang();
var langListeners = [];
var getLang = () => LANG;
function trApp(e21, t2 = {}) {
  let n2 = I18N_TABLE[e21];
  return n2 ? n2[LANG === `id` ? 0 : 1].replace(/\{(\w+)\}/g, (e22, n3) => String(t2[n3] ?? ``)) : e21;
}
function byLang(e21) {
  return e21[LANG];
}
function applyI18n() {
  document.documentElement.lang = LANG, document.querySelectorAll(`[data-i18n]`).forEach((e21) => {
    e21.textContent = trApp(e21.dataset.i18n);
  }), document.querySelectorAll(`[data-i18n-label]`).forEach((e21) => {
    e21.setAttribute(`aria-label`, trApp(e21.dataset.i18nLabel));
  });
}
function setLang(e21) {
  LANG = e21, localStorage.setItem(`tp-lang`, e21), applyI18n();
  for (let e22 of langListeners) e22();
}
function onLangChange(e21) {
  langListeners.push(e21);
}

// src/vendor/three.js
(function() {
  let e21 = document.createElement(`link`).relList;
  if (e21 && e21.supports && e21.supports(`modulepreload`)) return;
  for (let e22 of document.querySelectorAll(`link[rel="modulepreload"]`)) n2(e22);
  new MutationObserver((e22) => {
    for (let t3 of e22) if (t3.type === `childList`) for (let e23 of t3.addedNodes) e23.tagName === `LINK` && e23.rel === `modulepreload` && n2(e23);
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function t2(e22) {
    let t3 = {};
    return e22.integrity && (t3.integrity = e22.integrity), e22.referrerPolicy && (t3.referrerPolicy = e22.referrerPolicy), t3.credentials = e22.crossOrigin === `use-credentials` ? `include` : e22.crossOrigin === `anonymous` ? `omit` : `same-origin`, t3;
  }
  function n2(e22) {
    if (e22.ep) return;
    e22.ep = true;
    let n3 = t2(e22);
    fetch(e22.href, n3);
  }
})();
var e = 1e3;
var t = 1001;
var n = 1002;
var r = 1003;
var i = 1004;
var a = 1005;
var o = 1006;
var s = 1007;
var c = 1008;
var l = 1009;
var u = 1010;
var d = 1011;
var f = 1012;
var p = 1013;
var m = 1014;
var h = 1015;
var g = 1016;
var _ = 1017;
var v = 1018;
var y = 1020;
var b = 35902;
var x = 35899;
var S = 1021;
var C = 1022;
var w = 1023;
var T = 1026;
var E = 1027;
var D = 1028;
var O = 1029;
var k = 1030;
var A = 1031;
var ee = 1033;
var j = 33776;
var te = 33777;
var M = 33778;
var ne = 33779;
var N = 35840;
var re = 35841;
var ie = 35842;
var ae = 35843;
var oe = 36196;
var se = 37492;
var ce = 37496;
var le = 37488;
var P = 37489;
var ue = 37490;
var de = 37491;
var fe = 37808;
var pe = 37809;
var me = 37810;
var he = 37811;
var ge = 37812;
var _e = 37813;
var ve = 37814;
var ye = 37815;
var be = 37816;
var xe = 37817;
var Se = 37818;
var Ce = 37819;
var we = 37820;
var Te = 37821;
var Ee = 36492;
var De = 36494;
var Oe = 36495;
var ke = 36283;
var Ae = 36284;
var je = 36285;
var Me = 36286;
var Ne = 2300;
var Pe = 2301;
var F = 2302;
var Fe = 2303;
var Ie = 2400;
var Le = 2401;
var I = 2402;
var Re = 3200;
var ze = `srgb`;
var L = `srgb-linear`;
var R = `linear`;
var Be = `srgb`;
var Ve = 7680;
var He = 35044;
var Ue = 2e3;
function We(e21) {
  for (let t2 = e21.length - 1; t2 >= 0; --t2) if (e21[t2] >= 65535) return true;
  return false;
}
function Ge(e21) {
  return ArrayBuffer.isView(e21) && !(e21 instanceof DataView);
}
function Ke(e21) {
  return document.createElementNS(`http://www.w3.org/1999/xhtml`, e21);
}
function qe() {
  let e21 = Ke(`canvas`);
  return e21.style.display = `block`, e21;
}
var Je = {};
function Ye(...e21) {
  let t2 = `THREE.` + e21.shift();
  console.log(t2, ...e21);
}
function Xe(e21) {
  let t2 = e21[0];
  if (typeof t2 == `string` && t2.startsWith(`TSL:`)) {
    let t3 = e21[1];
    t3 && t3.isStackTrace ? e21[0] += ` ` + t3.getLocation() : e21[1] = `Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`;
  }
  return e21;
}
function z(...e21) {
  e21 = Xe(e21);
  let t2 = `THREE.` + e21.shift();
  {
    let n2 = e21[0];
    n2 && n2.isStackTrace ? console.warn(n2.getError(t2)) : console.warn(t2, ...e21);
  }
}
function B(...e21) {
  e21 = Xe(e21);
  let t2 = `THREE.` + e21.shift();
  {
    let n2 = e21[0];
    n2 && n2.isStackTrace ? console.error(n2.getError(t2)) : console.error(t2, ...e21);
  }
}
function Ze(...e21) {
  let t2 = e21.join(` `);
  t2 in Je || (Je[t2] = true, z(...e21));
}
function Qe(e21, t2, n2) {
  return new Promise(function(r3, i2) {
    function a2() {
      switch (e21.clientWaitSync(t2, e21.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case e21.WAIT_FAILED:
          i2();
          break;
        case e21.TIMEOUT_EXPIRED:
          setTimeout(a2, n2);
          break;
        default:
          r3();
      }
    }
    setTimeout(a2, n2);
  });
}
var $e = {
  0: 0,
  2: 6,
  4: 4,
  3: 5,
  1: 1,
  6: 2,
  7: 7,
  5: 3
};
var et = class {
  addEventListener(e21, t2) {
    this._listeners === void 0 && (this._listeners = {});
    let n2 = this._listeners;
    n2[e21] === void 0 && (n2[e21] = []), n2[e21].indexOf(t2) === -1 && n2[e21].push(t2);
  }
  hasEventListener(e21, t2) {
    let n2 = this._listeners;
    return n2 !== void 0 && n2[e21] !== void 0 && n2[e21].indexOf(t2) !== -1;
  }
  removeEventListener(e21, t2) {
    let n2 = this._listeners;
    if (n2 === void 0) return;
    let r3 = n2[e21];
    if (r3 !== void 0) {
      let e22 = r3.indexOf(t2);
      e22 !== -1 && r3.splice(e22, 1);
    }
  }
  dispatchEvent(e21) {
    let t2 = this._listeners;
    if (t2 === void 0) return;
    let n2 = t2[e21.type];
    if (n2 !== void 0) {
      e21.target = this;
      let t3 = n2.slice(0);
      for (let n3 = 0, r3 = t3.length; n3 < r3; n3++) t3[n3].call(this, e21);
      e21.target = null;
    }
  }
};
var tt = `00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`);
var nt = Math.PI / 180;
var rt = 180 / Math.PI;
function it() {
  let e21 = Math.random() * 4294967295 | 0, t2 = Math.random() * 4294967295 | 0, n2 = Math.random() * 4294967295 | 0, r3 = Math.random() * 4294967295 | 0;
  return (tt[e21 & 255] + tt[e21 >> 8 & 255] + tt[e21 >> 16 & 255] + tt[e21 >> 24 & 255] + `-` + tt[t2 & 255] + tt[t2 >> 8 & 255] + `-` + tt[t2 >> 16 & 15 | 64] + tt[t2 >> 24 & 255] + `-` + tt[n2 & 63 | 128] + tt[n2 >> 8 & 255] + `-` + tt[n2 >> 16 & 255] + tt[n2 >> 24 & 255] + tt[r3 & 255] + tt[r3 >> 8 & 255] + tt[r3 >> 16 & 255] + tt[r3 >> 24 & 255]).toLowerCase();
}
function V(e21, t2, n2) {
  return Math.max(t2, Math.min(n2, e21));
}
function at(e21, t2) {
  return (e21 % t2 + t2) % t2;
}
function ot(e21, t2, n2) {
  return (1 - n2) * e21 + n2 * t2;
}
function st(e21) {
  return 2 ** Math.floor(Math.log(e21) / Math.LN2);
}
function ct(e21) {
  switch (e21.constructor) {
    case Uint32Array:
      return 4294967295;
    case Uint16Array:
      return 65535;
    case Uint8Array:
    case Uint8ClampedArray:
      return 255;
    case Int32Array:
      return 2147483647;
    case Int16Array:
      return 32767;
    case Int8Array:
      return 127;
    default:
      return;
  }
}
function lt(e21, t2) {
  if (t2.constructor === Float32Array) return e21;
  let n2 = ct(t2);
  if (n2 === void 0) throw Error(`THREE.MathUtils: Invalid component type.`);
  return Math.max(e21 / n2, -1);
}
function ut(e21, t2) {
  if (t2.constructor === Float32Array) return e21;
  let n2 = ct(t2);
  if (n2 === void 0) throw Error(`THREE.MathUtils: Invalid component type.`);
  return Math.round(e21 * n2);
}
var H = class {
  static {
    this.prototype.isVector2 = true;
  }
  constructor(e21 = 0, t2 = 0) {
    this.x = e21, this.y = t2;
  }
  get width() {
    return this.x;
  }
  set width(e21) {
    this.x = e21;
  }
  get height() {
    return this.y;
  }
  set height(e21) {
    this.y = e21;
  }
  set(e21, t2) {
    return this.x = e21, this.y = t2, this;
  }
  setScalar(e21) {
    return this.x = e21, this.y = e21, this;
  }
  setX(e21) {
    return this.x = e21, this;
  }
  setY(e21) {
    return this.y = e21, this;
  }
  setComponent(e21, t2) {
    switch (e21) {
      case 0:
        this.x = t2;
        break;
      case 1:
        this.y = t2;
        break;
      default:
        throw Error(`THREE.Vector2: index is out of range: ` + e21);
    }
    return this;
  }
  getComponent(e21) {
    switch (e21) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw Error(`THREE.Vector2: index is out of range: ` + e21);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e21) {
    return this.x = e21.x, this.y = e21.y, this;
  }
  add(e21) {
    return this.x += e21.x, this.y += e21.y, this;
  }
  addScalar(e21) {
    return this.x += e21, this.y += e21, this;
  }
  addVectors(e21, t2) {
    return this.x = e21.x + t2.x, this.y = e21.y + t2.y, this;
  }
  addScaledVector(e21, t2) {
    return this.x += e21.x * t2, this.y += e21.y * t2, this;
  }
  sub(e21) {
    return this.x -= e21.x, this.y -= e21.y, this;
  }
  subScalar(e21) {
    return this.x -= e21, this.y -= e21, this;
  }
  subVectors(e21, t2) {
    return this.x = e21.x - t2.x, this.y = e21.y - t2.y, this;
  }
  multiply(e21) {
    return this.x *= e21.x, this.y *= e21.y, this;
  }
  multiplyScalar(e21) {
    return this.x *= e21, this.y *= e21, this;
  }
  divide(e21) {
    return this.x /= e21.x, this.y /= e21.y, this;
  }
  divideScalar(e21) {
    return this.multiplyScalar(1 / e21);
  }
  applyMatrix3(e21) {
    let t2 = this.x, n2 = this.y, r3 = e21.elements;
    return this.x = r3[0] * t2 + r3[3] * n2 + r3[6], this.y = r3[1] * t2 + r3[4] * n2 + r3[7], this;
  }
  min(e21) {
    return this.x = Math.min(this.x, e21.x), this.y = Math.min(this.y, e21.y), this;
  }
  max(e21) {
    return this.x = Math.max(this.x, e21.x), this.y = Math.max(this.y, e21.y), this;
  }
  clamp(e21, t2) {
    return this.x = V(this.x, e21.x, t2.x), this.y = V(this.y, e21.y, t2.y), this;
  }
  clampScalar(e21, t2) {
    return this.x = V(this.x, e21, t2), this.y = V(this.y, e21, t2), this;
  }
  clampLength(e21, t2) {
    let n2 = this.length();
    return this.divideScalar(n2 || 1).multiplyScalar(V(n2, e21, t2));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e21) {
    return this.x * e21.x + this.y * e21.y;
  }
  cross(e21) {
    return this.x * e21.y - this.y * e21.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e21) {
    let t2 = Math.sqrt(this.lengthSq() * e21.lengthSq());
    if (t2 === 0) return Math.PI / 2;
    let n2 = this.dot(e21) / t2;
    return Math.acos(V(n2, -1, 1));
  }
  distanceTo(e21) {
    return Math.sqrt(this.distanceToSquared(e21));
  }
  distanceToSquared(e21) {
    let t2 = this.x - e21.x, n2 = this.y - e21.y;
    return t2 * t2 + n2 * n2;
  }
  manhattanDistanceTo(e21) {
    return Math.abs(this.x - e21.x) + Math.abs(this.y - e21.y);
  }
  setLength(e21) {
    return this.normalize().multiplyScalar(e21);
  }
  lerp(e21, t2) {
    return this.x += (e21.x - this.x) * t2, this.y += (e21.y - this.y) * t2, this;
  }
  lerpVectors(e21, t2, n2) {
    return this.x = e21.x + (t2.x - e21.x) * n2, this.y = e21.y + (t2.y - e21.y) * n2, this;
  }
  equals(e21) {
    return e21.x === this.x && e21.y === this.y;
  }
  fromArray(e21, t2 = 0) {
    return this.x = e21[t2], this.y = e21[t2 + 1], this;
  }
  toArray(e21 = [], t2 = 0) {
    return e21[t2] = this.x, e21[t2 + 1] = this.y, e21;
  }
  fromBufferAttribute(e21, t2) {
    return this.x = e21.getX(t2), this.y = e21.getY(t2), this;
  }
  rotateAround(e21, t2) {
    let n2 = Math.cos(t2), r3 = Math.sin(t2), i2 = this.x - e21.x, a2 = this.y - e21.y;
    return this.x = i2 * n2 - a2 * r3 + e21.x, this.y = i2 * r3 + a2 * n2 + e21.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
};
var dt = class {
  constructor(e21 = 0, t2 = 0, n2 = 0, r3 = 1) {
    this.isQuaternion = true, this._x = e21, this._y = t2, this._z = n2, this._w = r3;
  }
  static slerpFlat(e21, t2, n2, r3, i2, a2, o2) {
    let s2 = n2[r3 + 0], c2 = n2[r3 + 1], l2 = n2[r3 + 2], u2 = n2[r3 + 3], d2 = i2[a2 + 0], f2 = i2[a2 + 1], p2 = i2[a2 + 2], m2 = i2[a2 + 3];
    if (u2 !== m2 || s2 !== d2 || c2 !== f2 || l2 !== p2) {
      let e22 = s2 * d2 + c2 * f2 + l2 * p2 + u2 * m2;
      e22 < 0 && (d2 = -d2, f2 = -f2, p2 = -p2, m2 = -m2, e22 = -e22);
      let t3 = 1 - o2;
      if (e22 < 0.9995) {
        let n3 = Math.acos(e22), r4 = Math.sin(n3);
        t3 = Math.sin(t3 * n3) / r4, o2 = Math.sin(o2 * n3) / r4, s2 = s2 * t3 + d2 * o2, c2 = c2 * t3 + f2 * o2, l2 = l2 * t3 + p2 * o2, u2 = u2 * t3 + m2 * o2;
      } else {
        s2 = s2 * t3 + d2 * o2, c2 = c2 * t3 + f2 * o2, l2 = l2 * t3 + p2 * o2, u2 = u2 * t3 + m2 * o2;
        let e23 = 1 / Math.sqrt(s2 * s2 + c2 * c2 + l2 * l2 + u2 * u2);
        s2 *= e23, c2 *= e23, l2 *= e23, u2 *= e23;
      }
    }
    e21[t2] = s2, e21[t2 + 1] = c2, e21[t2 + 2] = l2, e21[t2 + 3] = u2;
  }
  static multiplyQuaternionsFlat(e21, t2, n2, r3, i2, a2) {
    let o2 = n2[r3], s2 = n2[r3 + 1], c2 = n2[r3 + 2], l2 = n2[r3 + 3], u2 = i2[a2], d2 = i2[a2 + 1], f2 = i2[a2 + 2], p2 = i2[a2 + 3];
    return e21[t2] = o2 * p2 + l2 * u2 + s2 * f2 - c2 * d2, e21[t2 + 1] = s2 * p2 + l2 * d2 + c2 * u2 - o2 * f2, e21[t2 + 2] = c2 * p2 + l2 * f2 + o2 * d2 - s2 * u2, e21[t2 + 3] = l2 * p2 - o2 * u2 - s2 * d2 - c2 * f2, e21;
  }
  get x() {
    return this._x;
  }
  set x(e21) {
    this._x = e21, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e21) {
    this._y = e21, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e21) {
    this._z = e21, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e21) {
    this._w = e21, this._onChangeCallback();
  }
  set(e21, t2, n2, r3) {
    return this._x = e21, this._y = t2, this._z = n2, this._w = r3, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e21) {
    return this._x = e21.x, this._y = e21.y, this._z = e21.z, this._w = e21.w, this._onChangeCallback(), this;
  }
  setFromEuler(e21, t2 = true) {
    let n2 = e21._x, r3 = e21._y, i2 = e21._z, a2 = e21._order, o2 = Math.cos, s2 = Math.sin, c2 = o2(n2 / 2), l2 = o2(r3 / 2), u2 = o2(i2 / 2), d2 = s2(n2 / 2), f2 = s2(r3 / 2), p2 = s2(i2 / 2);
    switch (a2) {
      case `XYZ`:
        this._x = d2 * l2 * u2 + c2 * f2 * p2, this._y = c2 * f2 * u2 - d2 * l2 * p2, this._z = c2 * l2 * p2 + d2 * f2 * u2, this._w = c2 * l2 * u2 - d2 * f2 * p2;
        break;
      case `YXZ`:
        this._x = d2 * l2 * u2 + c2 * f2 * p2, this._y = c2 * f2 * u2 - d2 * l2 * p2, this._z = c2 * l2 * p2 - d2 * f2 * u2, this._w = c2 * l2 * u2 + d2 * f2 * p2;
        break;
      case `ZXY`:
        this._x = d2 * l2 * u2 - c2 * f2 * p2, this._y = c2 * f2 * u2 + d2 * l2 * p2, this._z = c2 * l2 * p2 + d2 * f2 * u2, this._w = c2 * l2 * u2 - d2 * f2 * p2;
        break;
      case `ZYX`:
        this._x = d2 * l2 * u2 - c2 * f2 * p2, this._y = c2 * f2 * u2 + d2 * l2 * p2, this._z = c2 * l2 * p2 - d2 * f2 * u2, this._w = c2 * l2 * u2 + d2 * f2 * p2;
        break;
      case `YZX`:
        this._x = d2 * l2 * u2 + c2 * f2 * p2, this._y = c2 * f2 * u2 + d2 * l2 * p2, this._z = c2 * l2 * p2 - d2 * f2 * u2, this._w = c2 * l2 * u2 - d2 * f2 * p2;
        break;
      case `XZY`:
        this._x = d2 * l2 * u2 - c2 * f2 * p2, this._y = c2 * f2 * u2 - d2 * l2 * p2, this._z = c2 * l2 * p2 + d2 * f2 * u2, this._w = c2 * l2 * u2 + d2 * f2 * p2;
        break;
      default:
        z(`Quaternion: .setFromEuler() encountered an unknown order: ` + a2);
    }
    return t2 === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e21, t2) {
    let n2 = t2 / 2, r3 = Math.sin(n2);
    return this._x = e21.x * r3, this._y = e21.y * r3, this._z = e21.z * r3, this._w = Math.cos(n2), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e21) {
    let t2 = e21.elements, n2 = t2[0], r3 = t2[4], i2 = t2[8], a2 = t2[1], o2 = t2[5], s2 = t2[9], c2 = t2[2], l2 = t2[6], u2 = t2[10], d2 = n2 + o2 + u2;
    if (d2 > 0) {
      let e22 = 0.5 / Math.sqrt(d2 + 1);
      this._w = 0.25 / e22, this._x = (l2 - s2) * e22, this._y = (i2 - c2) * e22, this._z = (a2 - r3) * e22;
    } else if (n2 > o2 && n2 > u2) {
      let e22 = 2 * Math.sqrt(1 + n2 - o2 - u2);
      this._w = (l2 - s2) / e22, this._x = 0.25 * e22, this._y = (r3 + a2) / e22, this._z = (i2 + c2) / e22;
    } else if (o2 > u2) {
      let e22 = 2 * Math.sqrt(1 + o2 - n2 - u2);
      this._w = (i2 - c2) / e22, this._x = (r3 + a2) / e22, this._y = 0.25 * e22, this._z = (s2 + l2) / e22;
    } else {
      let e22 = 2 * Math.sqrt(1 + u2 - n2 - o2);
      this._w = (a2 - r3) / e22, this._x = (i2 + c2) / e22, this._y = (s2 + l2) / e22, this._z = 0.25 * e22;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e21, t2) {
    let n2 = e21.dot(t2) + 1;
    return n2 < 1e-8 ? (n2 = 0, Math.abs(e21.x) > Math.abs(e21.z) ? (this._x = -e21.y, this._y = e21.x, this._z = 0, this._w = n2) : (this._x = 0, this._y = -e21.z, this._z = e21.y, this._w = n2)) : (this._x = e21.y * t2.z - e21.z * t2.y, this._y = e21.z * t2.x - e21.x * t2.z, this._z = e21.x * t2.y - e21.y * t2.x, this._w = n2), this.normalize();
  }
  angleTo(e21) {
    return 2 * Math.acos(Math.abs(V(this.dot(e21), -1, 1)));
  }
  rotateTowards(e21, t2) {
    let n2 = this.angleTo(e21);
    if (n2 === 0) return this;
    let r3 = Math.min(1, t2 / n2);
    return this.slerp(e21, r3), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e21) {
    return this._x * e21._x + this._y * e21._y + this._z * e21._z + this._w * e21._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e21 = this.length();
    return e21 === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e21 = 1 / e21, this._x *= e21, this._y *= e21, this._z *= e21, this._w *= e21), this._onChangeCallback(), this;
  }
  multiply(e21) {
    return this.multiplyQuaternions(this, e21);
  }
  premultiply(e21) {
    return this.multiplyQuaternions(e21, this);
  }
  multiplyQuaternions(e21, t2) {
    let n2 = e21._x, r3 = e21._y, i2 = e21._z, a2 = e21._w, o2 = t2._x, s2 = t2._y, c2 = t2._z, l2 = t2._w;
    return this._x = n2 * l2 + a2 * o2 + r3 * c2 - i2 * s2, this._y = r3 * l2 + a2 * s2 + i2 * o2 - n2 * c2, this._z = i2 * l2 + a2 * c2 + n2 * s2 - r3 * o2, this._w = a2 * l2 - n2 * o2 - r3 * s2 - i2 * c2, this._onChangeCallback(), this;
  }
  slerp(e21, t2) {
    let n2 = e21._x, r3 = e21._y, i2 = e21._z, a2 = e21._w, o2 = this.dot(e21);
    o2 < 0 && (n2 = -n2, r3 = -r3, i2 = -i2, a2 = -a2, o2 = -o2);
    let s2 = 1 - t2;
    if (o2 < 0.9995) {
      let e22 = Math.acos(o2), c2 = Math.sin(e22);
      s2 = Math.sin(s2 * e22) / c2, t2 = Math.sin(t2 * e22) / c2, this._x = this._x * s2 + n2 * t2, this._y = this._y * s2 + r3 * t2, this._z = this._z * s2 + i2 * t2, this._w = this._w * s2 + a2 * t2, this._onChangeCallback();
    } else this._x = this._x * s2 + n2 * t2, this._y = this._y * s2 + r3 * t2, this._z = this._z * s2 + i2 * t2, this._w = this._w * s2 + a2 * t2, this.normalize();
    return this;
  }
  slerpQuaternions(e21, t2, n2) {
    return this.copy(e21).slerp(t2, n2);
  }
  random() {
    let e21 = 2 * Math.PI * Math.random(), t2 = 2 * Math.PI * Math.random(), n2 = Math.random(), r3 = Math.sqrt(1 - n2), i2 = Math.sqrt(n2);
    return this.set(r3 * Math.sin(e21), r3 * Math.cos(e21), i2 * Math.sin(t2), i2 * Math.cos(t2));
  }
  equals(e21) {
    return e21._x === this._x && e21._y === this._y && e21._z === this._z && e21._w === this._w;
  }
  fromArray(e21, t2 = 0) {
    return this._x = e21[t2], this._y = e21[t2 + 1], this._z = e21[t2 + 2], this._w = e21[t2 + 3], this._onChangeCallback(), this;
  }
  toArray(e21 = [], t2 = 0) {
    return e21[t2] = this._x, e21[t2 + 1] = this._y, e21[t2 + 2] = this._z, e21[t2 + 3] = this._w, e21;
  }
  fromBufferAttribute(e21, t2) {
    return this._x = e21.getX(t2), this._y = e21.getY(t2), this._z = e21.getZ(t2), this._w = e21.getW(t2), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e21) {
    return this._onChangeCallback = e21, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
};
var U = class {
  static {
    this.prototype.isVector3 = true;
  }
  constructor(e21 = 0, t2 = 0, n2 = 0) {
    this.x = e21, this.y = t2, this.z = n2;
  }
  set(e21, t2, n2) {
    return n2 === void 0 && (n2 = this.z), this.x = e21, this.y = t2, this.z = n2, this;
  }
  setScalar(e21) {
    return this.x = e21, this.y = e21, this.z = e21, this;
  }
  setX(e21) {
    return this.x = e21, this;
  }
  setY(e21) {
    return this.y = e21, this;
  }
  setZ(e21) {
    return this.z = e21, this;
  }
  setComponent(e21, t2) {
    switch (e21) {
      case 0:
        this.x = t2;
        break;
      case 1:
        this.y = t2;
        break;
      case 2:
        this.z = t2;
        break;
      default:
        throw Error(`THREE.Vector3: index is out of range: ` + e21);
    }
    return this;
  }
  getComponent(e21) {
    switch (e21) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw Error(`THREE.Vector3: index is out of range: ` + e21);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e21) {
    return this.x = e21.x, this.y = e21.y, this.z = e21.z, this;
  }
  add(e21) {
    return this.x += e21.x, this.y += e21.y, this.z += e21.z, this;
  }
  addScalar(e21) {
    return this.x += e21, this.y += e21, this.z += e21, this;
  }
  addVectors(e21, t2) {
    return this.x = e21.x + t2.x, this.y = e21.y + t2.y, this.z = e21.z + t2.z, this;
  }
  addScaledVector(e21, t2) {
    return this.x += e21.x * t2, this.y += e21.y * t2, this.z += e21.z * t2, this;
  }
  sub(e21) {
    return this.x -= e21.x, this.y -= e21.y, this.z -= e21.z, this;
  }
  subScalar(e21) {
    return this.x -= e21, this.y -= e21, this.z -= e21, this;
  }
  subVectors(e21, t2) {
    return this.x = e21.x - t2.x, this.y = e21.y - t2.y, this.z = e21.z - t2.z, this;
  }
  multiply(e21) {
    return this.x *= e21.x, this.y *= e21.y, this.z *= e21.z, this;
  }
  multiplyScalar(e21) {
    return this.x *= e21, this.y *= e21, this.z *= e21, this;
  }
  multiplyVectors(e21, t2) {
    return this.x = e21.x * t2.x, this.y = e21.y * t2.y, this.z = e21.z * t2.z, this;
  }
  applyEuler(e21) {
    return this.applyQuaternion(pt.setFromEuler(e21));
  }
  applyAxisAngle(e21, t2) {
    return this.applyQuaternion(pt.setFromAxisAngle(e21, t2));
  }
  applyMatrix3(e21) {
    let t2 = this.x, n2 = this.y, r3 = this.z, i2 = e21.elements;
    return this.x = i2[0] * t2 + i2[3] * n2 + i2[6] * r3, this.y = i2[1] * t2 + i2[4] * n2 + i2[7] * r3, this.z = i2[2] * t2 + i2[5] * n2 + i2[8] * r3, this;
  }
  applyNormalMatrix(e21) {
    return this.applyMatrix3(e21).normalize();
  }
  applyMatrix4(e21) {
    let t2 = this.x, n2 = this.y, r3 = this.z, i2 = e21.elements, a2 = 1 / (i2[3] * t2 + i2[7] * n2 + i2[11] * r3 + i2[15]);
    return this.x = (i2[0] * t2 + i2[4] * n2 + i2[8] * r3 + i2[12]) * a2, this.y = (i2[1] * t2 + i2[5] * n2 + i2[9] * r3 + i2[13]) * a2, this.z = (i2[2] * t2 + i2[6] * n2 + i2[10] * r3 + i2[14]) * a2, this;
  }
  applyQuaternion(e21) {
    let t2 = this.x, n2 = this.y, r3 = this.z, i2 = e21.x, a2 = e21.y, o2 = e21.z, s2 = e21.w, c2 = 2 * (a2 * r3 - o2 * n2), l2 = 2 * (o2 * t2 - i2 * r3), u2 = 2 * (i2 * n2 - a2 * t2);
    return this.x = t2 + s2 * c2 + a2 * u2 - o2 * l2, this.y = n2 + s2 * l2 + o2 * c2 - i2 * u2, this.z = r3 + s2 * u2 + i2 * l2 - a2 * c2, this;
  }
  project(e21) {
    return this.applyMatrix4(e21.matrixWorldInverse).applyMatrix4(e21.projectionMatrix);
  }
  unproject(e21) {
    return this.applyMatrix4(e21.projectionMatrixInverse).applyMatrix4(e21.matrixWorld);
  }
  transformDirection(e21) {
    let t2 = this.x, n2 = this.y, r3 = this.z, i2 = e21.elements;
    return this.x = i2[0] * t2 + i2[4] * n2 + i2[8] * r3, this.y = i2[1] * t2 + i2[5] * n2 + i2[9] * r3, this.z = i2[2] * t2 + i2[6] * n2 + i2[10] * r3, this.normalize();
  }
  divide(e21) {
    return this.x /= e21.x, this.y /= e21.y, this.z /= e21.z, this;
  }
  divideScalar(e21) {
    return this.multiplyScalar(1 / e21);
  }
  min(e21) {
    return this.x = Math.min(this.x, e21.x), this.y = Math.min(this.y, e21.y), this.z = Math.min(this.z, e21.z), this;
  }
  max(e21) {
    return this.x = Math.max(this.x, e21.x), this.y = Math.max(this.y, e21.y), this.z = Math.max(this.z, e21.z), this;
  }
  clamp(e21, t2) {
    return this.x = V(this.x, e21.x, t2.x), this.y = V(this.y, e21.y, t2.y), this.z = V(this.z, e21.z, t2.z), this;
  }
  clampScalar(e21, t2) {
    return this.x = V(this.x, e21, t2), this.y = V(this.y, e21, t2), this.z = V(this.z, e21, t2), this;
  }
  clampLength(e21, t2) {
    let n2 = this.length();
    return this.divideScalar(n2 || 1).multiplyScalar(V(n2, e21, t2));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e21) {
    return this.x * e21.x + this.y * e21.y + this.z * e21.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e21) {
    return this.normalize().multiplyScalar(e21);
  }
  lerp(e21, t2) {
    return this.x += (e21.x - this.x) * t2, this.y += (e21.y - this.y) * t2, this.z += (e21.z - this.z) * t2, this;
  }
  lerpVectors(e21, t2, n2) {
    return this.x = e21.x + (t2.x - e21.x) * n2, this.y = e21.y + (t2.y - e21.y) * n2, this.z = e21.z + (t2.z - e21.z) * n2, this;
  }
  cross(e21) {
    return this.crossVectors(this, e21);
  }
  crossVectors(e21, t2) {
    let n2 = e21.x, r3 = e21.y, i2 = e21.z, a2 = t2.x, o2 = t2.y, s2 = t2.z;
    return this.x = r3 * s2 - i2 * o2, this.y = i2 * a2 - n2 * s2, this.z = n2 * o2 - r3 * a2, this;
  }
  projectOnVector(e21) {
    let t2 = e21.lengthSq();
    if (t2 === 0) return this.set(0, 0, 0);
    let n2 = e21.dot(this) / t2;
    return this.copy(e21).multiplyScalar(n2);
  }
  projectOnPlane(e21) {
    return ft.copy(this).projectOnVector(e21), this.sub(ft);
  }
  reflect(e21) {
    return this.sub(ft.copy(e21).multiplyScalar(2 * this.dot(e21)));
  }
  angleTo(e21) {
    let t2 = Math.sqrt(this.lengthSq() * e21.lengthSq());
    if (t2 === 0) return Math.PI / 2;
    let n2 = this.dot(e21) / t2;
    return Math.acos(V(n2, -1, 1));
  }
  distanceTo(e21) {
    return Math.sqrt(this.distanceToSquared(e21));
  }
  distanceToSquared(e21) {
    let t2 = this.x - e21.x, n2 = this.y - e21.y, r3 = this.z - e21.z;
    return t2 * t2 + n2 * n2 + r3 * r3;
  }
  manhattanDistanceTo(e21) {
    return Math.abs(this.x - e21.x) + Math.abs(this.y - e21.y) + Math.abs(this.z - e21.z);
  }
  setFromSpherical(e21) {
    return this.setFromSphericalCoords(e21.radius, e21.phi, e21.theta);
  }
  setFromSphericalCoords(e21, t2, n2) {
    let r3 = Math.sin(t2) * e21;
    return this.x = r3 * Math.sin(n2), this.y = Math.cos(t2) * e21, this.z = r3 * Math.cos(n2), this;
  }
  setFromCylindrical(e21) {
    return this.setFromCylindricalCoords(e21.radius, e21.theta, e21.y);
  }
  setFromCylindricalCoords(e21, t2, n2) {
    return this.x = e21 * Math.sin(t2), this.y = n2, this.z = e21 * Math.cos(t2), this;
  }
  setFromMatrixPosition(e21) {
    let t2 = e21.elements;
    return this.x = t2[12], this.y = t2[13], this.z = t2[14], this;
  }
  setFromMatrixScale(e21) {
    let t2 = this.setFromMatrixColumn(e21, 0).length(), n2 = this.setFromMatrixColumn(e21, 1).length(), r3 = this.setFromMatrixColumn(e21, 2).length();
    return this.x = t2, this.y = n2, this.z = r3, this;
  }
  setFromMatrixColumn(e21, t2) {
    return this.fromArray(e21.elements, t2 * 4);
  }
  setFromMatrix3Column(e21, t2) {
    return this.fromArray(e21.elements, t2 * 3);
  }
  setFromEuler(e21) {
    return this.x = e21._x, this.y = e21._y, this.z = e21._z, this;
  }
  setFromColor(e21) {
    return this.x = e21.r, this.y = e21.g, this.z = e21.b, this;
  }
  equals(e21) {
    return e21.x === this.x && e21.y === this.y && e21.z === this.z;
  }
  fromArray(e21, t2 = 0) {
    return this.x = e21[t2], this.y = e21[t2 + 1], this.z = e21[t2 + 2], this;
  }
  toArray(e21 = [], t2 = 0) {
    return e21[t2] = this.x, e21[t2 + 1] = this.y, e21[t2 + 2] = this.z, e21;
  }
  fromBufferAttribute(e21, t2) {
    return this.x = e21.getX(t2), this.y = e21.getY(t2), this.z = e21.getZ(t2), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    let e21 = Math.random() * Math.PI * 2, t2 = Math.random() * 2 - 1, n2 = Math.sqrt(1 - t2 * t2);
    return this.x = n2 * Math.cos(e21), this.y = t2, this.z = n2 * Math.sin(e21), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
};
var ft = new U();
var pt = new dt();
var W = class {
  static {
    this.prototype.isMatrix3 = true;
  }
  constructor(e21, t2, n2, r3, i2, a2, o2, s2, c2) {
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e21 !== void 0 && this.set(e21, t2, n2, r3, i2, a2, o2, s2, c2);
  }
  set(e21, t2, n2, r3, i2, a2, o2, s2, c2) {
    let l2 = this.elements;
    return l2[0] = e21, l2[1] = r3, l2[2] = o2, l2[3] = t2, l2[4] = i2, l2[5] = s2, l2[6] = n2, l2[7] = a2, l2[8] = c2, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e21) {
    let t2 = this.elements, n2 = e21.elements;
    return t2[0] = n2[0], t2[1] = n2[1], t2[2] = n2[2], t2[3] = n2[3], t2[4] = n2[4], t2[5] = n2[5], t2[6] = n2[6], t2[7] = n2[7], t2[8] = n2[8], this;
  }
  extractBasis(e21, t2, n2) {
    return e21.setFromMatrix3Column(this, 0), t2.setFromMatrix3Column(this, 1), n2.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e21) {
    let t2 = e21.elements;
    return this.set(t2[0], t2[4], t2[8], t2[1], t2[5], t2[9], t2[2], t2[6], t2[10]), this;
  }
  multiply(e21) {
    return this.multiplyMatrices(this, e21);
  }
  premultiply(e21) {
    return this.multiplyMatrices(e21, this);
  }
  multiplyMatrices(e21, t2) {
    let n2 = e21.elements, r3 = t2.elements, i2 = this.elements, a2 = n2[0], o2 = n2[3], s2 = n2[6], c2 = n2[1], l2 = n2[4], u2 = n2[7], d2 = n2[2], f2 = n2[5], p2 = n2[8], m2 = r3[0], h2 = r3[3], g2 = r3[6], _2 = r3[1], v2 = r3[4], y2 = r3[7], b2 = r3[2], x2 = r3[5], S2 = r3[8];
    return i2[0] = a2 * m2 + o2 * _2 + s2 * b2, i2[3] = a2 * h2 + o2 * v2 + s2 * x2, i2[6] = a2 * g2 + o2 * y2 + s2 * S2, i2[1] = c2 * m2 + l2 * _2 + u2 * b2, i2[4] = c2 * h2 + l2 * v2 + u2 * x2, i2[7] = c2 * g2 + l2 * y2 + u2 * S2, i2[2] = d2 * m2 + f2 * _2 + p2 * b2, i2[5] = d2 * h2 + f2 * v2 + p2 * x2, i2[8] = d2 * g2 + f2 * y2 + p2 * S2, this;
  }
  multiplyScalar(e21) {
    let t2 = this.elements;
    return t2[0] *= e21, t2[3] *= e21, t2[6] *= e21, t2[1] *= e21, t2[4] *= e21, t2[7] *= e21, t2[2] *= e21, t2[5] *= e21, t2[8] *= e21, this;
  }
  determinant() {
    let e21 = this.elements, t2 = e21[0], n2 = e21[1], r3 = e21[2], i2 = e21[3], a2 = e21[4], o2 = e21[5], s2 = e21[6], c2 = e21[7], l2 = e21[8];
    return t2 * a2 * l2 - t2 * o2 * c2 - n2 * i2 * l2 + n2 * o2 * s2 + r3 * i2 * c2 - r3 * a2 * s2;
  }
  invert() {
    let e21 = this.elements, t2 = e21[0], n2 = e21[1], r3 = e21[2], i2 = e21[3], a2 = e21[4], o2 = e21[5], s2 = e21[6], c2 = e21[7], l2 = e21[8], u2 = l2 * a2 - o2 * c2, d2 = o2 * s2 - l2 * i2, f2 = c2 * i2 - a2 * s2, p2 = t2 * u2 + n2 * d2 + r3 * f2;
    if (p2 === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    let m2 = 1 / p2;
    return e21[0] = u2 * m2, e21[1] = (r3 * c2 - l2 * n2) * m2, e21[2] = (o2 * n2 - r3 * a2) * m2, e21[3] = d2 * m2, e21[4] = (l2 * t2 - r3 * s2) * m2, e21[5] = (r3 * i2 - o2 * t2) * m2, e21[6] = f2 * m2, e21[7] = (n2 * s2 - c2 * t2) * m2, e21[8] = (a2 * t2 - n2 * i2) * m2, this;
  }
  transpose() {
    let e21, t2 = this.elements;
    return e21 = t2[1], t2[1] = t2[3], t2[3] = e21, e21 = t2[2], t2[2] = t2[6], t2[6] = e21, e21 = t2[5], t2[5] = t2[7], t2[7] = e21, this;
  }
  getNormalMatrix(e21) {
    return this.setFromMatrix4(e21).invert().transpose();
  }
  transposeIntoArray(e21) {
    let t2 = this.elements;
    return e21[0] = t2[0], e21[1] = t2[3], e21[2] = t2[6], e21[3] = t2[1], e21[4] = t2[4], e21[5] = t2[7], e21[6] = t2[2], e21[7] = t2[5], e21[8] = t2[8], this;
  }
  setUvTransform(e21, t2, n2, r3, i2, a2, o2) {
    let s2 = Math.cos(i2), c2 = Math.sin(i2);
    return this.set(n2 * s2, n2 * c2, -n2 * (s2 * a2 + c2 * o2) + a2 + e21, -r3 * c2, r3 * s2, -r3 * (-c2 * a2 + s2 * o2) + o2 + t2, 0, 0, 1), this;
  }
  scale(e21, t2) {
    return Ze(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`), this.premultiply(mt.makeScale(e21, t2)), this;
  }
  rotate(e21) {
    return Ze(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`), this.premultiply(mt.makeRotation(-e21)), this;
  }
  translate(e21, t2) {
    return Ze(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`), this.premultiply(mt.makeTranslation(e21, t2)), this;
  }
  makeTranslation(e21, t2) {
    return e21.isVector2 ? this.set(1, 0, e21.x, 0, 1, e21.y, 0, 0, 1) : this.set(1, 0, e21, 0, 1, t2, 0, 0, 1), this;
  }
  makeRotation(e21) {
    let t2 = Math.cos(e21), n2 = Math.sin(e21);
    return this.set(t2, -n2, 0, n2, t2, 0, 0, 0, 1), this;
  }
  makeScale(e21, t2) {
    return this.set(e21, 0, 0, 0, t2, 0, 0, 0, 1), this;
  }
  equals(e21) {
    let t2 = this.elements, n2 = e21.elements;
    for (let e22 = 0; e22 < 9; e22++) if (t2[e22] !== n2[e22]) return false;
    return true;
  }
  fromArray(e21, t2 = 0) {
    for (let n2 = 0; n2 < 9; n2++) this.elements[n2] = e21[n2 + t2];
    return this;
  }
  toArray(e21 = [], t2 = 0) {
    let n2 = this.elements;
    return e21[t2] = n2[0], e21[t2 + 1] = n2[1], e21[t2 + 2] = n2[2], e21[t2 + 3] = n2[3], e21[t2 + 4] = n2[4], e21[t2 + 5] = n2[5], e21[t2 + 6] = n2[6], e21[t2 + 7] = n2[7], e21[t2 + 8] = n2[8], e21;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
var mt = new W();
var ht = new W().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322);
var gt = new W().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function _t() {
  let e21 = {
    enabled: true,
    workingColorSpace: L,
    spaces: {},
    convert: function(e22, t3, n3) {
      return this.enabled === false || t3 === n3 || !t3 || !n3 || (this.spaces[t3].transfer === `srgb` && (e22.r = vt(e22.r), e22.g = vt(e22.g), e22.b = vt(e22.b)), this.spaces[t3].primaries !== this.spaces[n3].primaries && (e22.applyMatrix3(this.spaces[t3].toXYZ), e22.applyMatrix3(this.spaces[n3].fromXYZ)), this.spaces[n3].transfer === `srgb` && (e22.r = yt(e22.r), e22.g = yt(e22.g), e22.b = yt(e22.b))), e22;
    },
    workingToColorSpace: function(e22, t3) {
      return this.convert(e22, this.workingColorSpace, t3);
    },
    colorSpaceToWorking: function(e22, t3) {
      return this.convert(e22, t3, this.workingColorSpace);
    },
    getPrimaries: function(e22) {
      return this.spaces[e22].primaries;
    },
    getTransfer: function(e22) {
      return e22 === `` ? R : this.spaces[e22].transfer;
    },
    getToneMappingMode: function(e22) {
      return this.spaces[e22].outputColorSpaceConfig.toneMappingMode || `standard`;
    },
    getLuminanceCoefficients: function(e22, t3 = this.workingColorSpace) {
      return e22.fromArray(this.spaces[t3].luminanceCoefficients);
    },
    define: function(e22) {
      Object.assign(this.spaces, e22);
    },
    _getMatrix: function(e22, t3, n3) {
      return e22.copy(this.spaces[n3].fromXYZ).multiply(this.spaces[t3].toXYZ);
    },
    _getDrawingBufferColorSpace: function(e22) {
      return this.spaces[e22].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(e22 = this.workingColorSpace) {
      return this.spaces[e22].workingColorSpaceConfig.unpackColorSpace;
    }
  }, t2 = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], n2 = [0.2126, 0.7152, 0.0722], r3 = [0.3127, 0.329];
  return e21.define({
    [L]: {
      primaries: t2,
      whitePoint: r3,
      transfer: R,
      toXYZ: ht,
      fromXYZ: gt,
      luminanceCoefficients: n2,
      workingColorSpaceConfig: {
        unpackColorSpace: ze
      },
      outputColorSpaceConfig: {
        drawingBufferColorSpace: ze
      }
    },
    [ze]: {
      primaries: t2,
      whitePoint: r3,
      transfer: Be,
      toXYZ: ht,
      fromXYZ: gt,
      luminanceCoefficients: n2,
      outputColorSpaceConfig: {
        drawingBufferColorSpace: ze
      }
    }
  }), e21;
}
var G = _t();
function vt(e21) {
  return e21 < 0.04045 ? e21 * 0.0773993808 : (e21 * 0.9478672986 + 0.0521327014) ** 2.4;
}
function yt(e21) {
  return e21 < 31308e-7 ? e21 * 12.92 : 1.055 * e21 ** 0.41666 - 0.055;
}
var bt;
var xt = class {
  static getDataURL(e21, t2 = `image/png`) {
    if (/^data:/i.test(e21.src) || typeof HTMLCanvasElement > `u`) return e21.src;
    let n2;
    if (e21 instanceof HTMLCanvasElement) n2 = e21;
    else {
      bt === void 0 && (bt = Ke(`canvas`)), bt.width = e21.width, bt.height = e21.height;
      let t3 = bt.getContext(`2d`);
      e21 instanceof ImageData ? t3.putImageData(e21, 0, 0) : t3.drawImage(e21, 0, 0, e21.width, e21.height), n2 = bt;
    }
    return n2.toDataURL(t2);
  }
  static sRGBToLinear(e21) {
    if (typeof HTMLImageElement < `u` && e21 instanceof HTMLImageElement || typeof HTMLCanvasElement < `u` && e21 instanceof HTMLCanvasElement || typeof ImageBitmap < `u` && e21 instanceof ImageBitmap) {
      let t2 = Ke(`canvas`);
      t2.width = e21.width, t2.height = e21.height;
      let n2 = t2.getContext(`2d`);
      n2.drawImage(e21, 0, 0, e21.width, e21.height);
      let r3 = n2.getImageData(0, 0, e21.width, e21.height), i2 = r3.data;
      for (let e22 = 0; e22 < i2.length; e22++) i2[e22] = vt(i2[e22] / 255) * 255;
      return n2.putImageData(r3, 0, 0), t2;
    }
    if (e21.data) {
      let t2 = e21.data.slice(0);
      for (let e22 = 0; e22 < t2.length; e22++) t2 instanceof Uint8Array || t2 instanceof Uint8ClampedArray ? t2[e22] = Math.floor(vt(t2[e22] / 255) * 255) : t2[e22] = vt(t2[e22]);
      return {
        data: t2,
        width: e21.width,
        height: e21.height
      };
    }
    return z(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`), e21;
  }
};
var St = 0;
var Ct = class {
  constructor(e21 = null) {
    this.isTextureSource = true, Object.defineProperty(this, "id", {
      value: St++
    }), this.uuid = it(), this.data = e21, this.dataReady = true, this.version = 0;
  }
  getSize(e21) {
    let t2 = this.data;
    return typeof HTMLVideoElement < `u` && t2 instanceof HTMLVideoElement ? e21.set(t2.videoWidth, t2.videoHeight, 0) : typeof VideoFrame < `u` && t2 instanceof VideoFrame ? e21.set(t2.displayWidth, t2.displayHeight, 0) : t2 === null ? e21.set(0, 0, 0) : e21.set(t2.width || 0, t2.height || 0, t2.depth || 0), e21;
  }
  set needsUpdate(e21) {
    e21 === true && this.version++;
  }
  toJSON(e21) {
    let t2 = e21 === void 0 || typeof e21 == `string`;
    if (!t2 && e21.images[this.uuid] !== void 0) return e21.images[this.uuid];
    let n2 = {
      uuid: this.uuid,
      url: ``
    }, r3 = this.data;
    if (r3 !== null) {
      let e22;
      if (Array.isArray(r3)) {
        e22 = [];
        for (let t3 = 0, n3 = r3.length; t3 < n3; t3++) r3[t3].isDataTexture ? e22.push(wt(r3[t3].image)) : e22.push(wt(r3[t3]));
      } else e22 = wt(r3);
      n2.url = e22;
    }
    return t2 || (e21.images[this.uuid] = n2), n2;
  }
};
function wt(e21) {
  return typeof HTMLImageElement < `u` && e21 instanceof HTMLImageElement || typeof HTMLCanvasElement < `u` && e21 instanceof HTMLCanvasElement || typeof ImageBitmap < `u` && e21 instanceof ImageBitmap ? xt.getDataURL(e21) : e21.data ? {
    data: Array.from(e21.data),
    width: e21.width,
    height: e21.height,
    type: e21.data.constructor.name
  } : (z(`Texture: Unable to serialize Texture.`), {});
}
var Tt = 0;
var Et = new U();
var Dt = class r2 extends et {
  constructor(e21 = r2.DEFAULT_IMAGE, n2 = r2.DEFAULT_MAPPING, i2 = t, a2 = t, s2 = o, u2 = c, d2 = w, f2 = l, p2 = r2.DEFAULT_ANISOTROPY, m2 = ``) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", {
      value: Tt++
    }), this.uuid = it(), this.name = ``, this.source = new Ct(e21), this.mipmaps = [], this.mapping = n2, this.channel = 0, this.wrapS = i2, this.wrapT = a2, this.magFilter = s2, this.minFilter = u2, this.anisotropy = p2, this.format = d2, this.internalFormat = null, this.type = f2, this.offset = new H(0, 0), this.repeat = new H(1, 1), this.center = new H(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new W(), this.generateMipmaps = true, this.mipmapsAutoUpdate = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = m2, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(e21 && e21.depth && e21.depth > 1), this.pmremVersion = 0, this.isPMREMTexture = false, this.normalized = false;
  }
  get width() {
    return this.source.getSize(Et).x;
  }
  get height() {
    return this.source.getSize(Et).y;
  }
  get depth() {
    return this.source.getSize(Et).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e21) {
    this.source.data = e21;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(e21, t2) {
    this.updateRanges.push({
      start: e21,
      count: t2
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e21) {
    return this.name = e21.name, this.source = e21.source, this.mipmaps = e21.mipmaps.slice(0), this.mapping = e21.mapping, this.channel = e21.channel, this.wrapS = e21.wrapS, this.wrapT = e21.wrapT, this.magFilter = e21.magFilter, this.minFilter = e21.minFilter, this.anisotropy = e21.anisotropy, this.format = e21.format, this.internalFormat = e21.internalFormat, this.type = e21.type, this.normalized = e21.normalized, this.offset.copy(e21.offset), this.repeat.copy(e21.repeat), this.center.copy(e21.center), this.rotation = e21.rotation, this.matrixAutoUpdate = e21.matrixAutoUpdate, this.matrix.copy(e21.matrix), this.generateMipmaps = e21.generateMipmaps, this.mipmapsAutoUpdate = e21.mipmapsAutoUpdate, this.premultiplyAlpha = e21.premultiplyAlpha, this.flipY = e21.flipY, this.unpackAlignment = e21.unpackAlignment, this.colorSpace = e21.colorSpace, this.renderTarget = e21.renderTarget, this.isRenderTargetTexture = e21.isRenderTargetTexture, this.isPMREMTexture = e21.isPMREMTexture, this.isArrayTexture = e21.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e21.userData)), this.needsUpdate = true, this;
  }
  setValues(e21) {
    for (let t2 in e21) {
      let n2 = e21[t2];
      if (n2 === void 0) {
        z(`Texture.setValues(): parameter '${t2}' has value of undefined.`);
        continue;
      }
      let r3 = this[t2];
      r3 === void 0 ? z(`Texture.setValues(): property '${t2}' does not exist.`) : r3 && n2 && r3.isVector2 && n2.isVector2 || r3 && n2 && r3.isVector3 && n2.isVector3 || r3 && n2 && r3.isMatrix3 && n2.isMatrix3 ? r3.copy(n2) : this[t2] = n2;
    }
  }
  toJSON(e21) {
    let t2 = e21 === void 0 || typeof e21 == `string`;
    if (!t2 && e21.textures[this.uuid] !== void 0) return e21.textures[this.uuid];
    let n2 = {
      metadata: {
        version: 4.7,
        type: `Texture`,
        generator: `Texture.toJSON`
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e21).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      normalized: this.normalized,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      mipmapsAutoUpdate: this.mipmapsAutoUpdate,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n2.userData = this.userData), t2 || (e21.textures[this.uuid] = n2), n2;
  }
  dispose() {
    this.dispatchEvent({
      type: `dispose`
    });
  }
  transformUv(r3) {
    if (this.mapping !== 300) return r3;
    if (r3.applyMatrix3(this.matrix), r3.x < 0 || r3.x > 1) switch (this.wrapS) {
      case e:
        r3.x -= Math.floor(r3.x);
        break;
      case t:
        r3.x = r3.x < 0 ? 0 : 1;
        break;
      case n:
        Math.abs(Math.floor(r3.x) % 2) === 1 ? r3.x = Math.ceil(r3.x) - r3.x : r3.x -= Math.floor(r3.x);
    }
    if (r3.y < 0 || r3.y > 1) switch (this.wrapT) {
      case e:
        r3.y -= Math.floor(r3.y);
        break;
      case t:
        r3.y = r3.y < 0 ? 0 : 1;
        break;
      case n:
        Math.abs(Math.floor(r3.y) % 2) === 1 ? r3.y = Math.ceil(r3.y) - r3.y : r3.y -= Math.floor(r3.y);
    }
    return this.flipY && (r3.y = 1 - r3.y), r3;
  }
  set needsUpdate(e21) {
    e21 === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(e21) {
    e21 === true && this.pmremVersion++;
  }
};
Dt.DEFAULT_IMAGE = null, Dt.DEFAULT_MAPPING = 300, Dt.DEFAULT_ANISOTROPY = 1;
var Ot = class {
  static {
    this.prototype.isVector4 = true;
  }
  constructor(e21 = 0, t2 = 0, n2 = 0, r3 = 1) {
    this.x = e21, this.y = t2, this.z = n2, this.w = r3;
  }
  get width() {
    return this.z;
  }
  set width(e21) {
    this.z = e21;
  }
  get height() {
    return this.w;
  }
  set height(e21) {
    this.w = e21;
  }
  set(e21, t2, n2, r3) {
    return this.x = e21, this.y = t2, this.z = n2, this.w = r3, this;
  }
  setScalar(e21) {
    return this.x = e21, this.y = e21, this.z = e21, this.w = e21, this;
  }
  setX(e21) {
    return this.x = e21, this;
  }
  setY(e21) {
    return this.y = e21, this;
  }
  setZ(e21) {
    return this.z = e21, this;
  }
  setW(e21) {
    return this.w = e21, this;
  }
  setComponent(e21, t2) {
    switch (e21) {
      case 0:
        this.x = t2;
        break;
      case 1:
        this.y = t2;
        break;
      case 2:
        this.z = t2;
        break;
      case 3:
        this.w = t2;
        break;
      default:
        throw Error(`THREE.Vector4: index is out of range: ` + e21);
    }
    return this;
  }
  getComponent(e21) {
    switch (e21) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw Error(`THREE.Vector4: index is out of range: ` + e21);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e21) {
    return this.x = e21.x, this.y = e21.y, this.z = e21.z, this.w = e21.w === void 0 ? 1 : e21.w, this;
  }
  add(e21) {
    return this.x += e21.x, this.y += e21.y, this.z += e21.z, this.w += e21.w, this;
  }
  addScalar(e21) {
    return this.x += e21, this.y += e21, this.z += e21, this.w += e21, this;
  }
  addVectors(e21, t2) {
    return this.x = e21.x + t2.x, this.y = e21.y + t2.y, this.z = e21.z + t2.z, this.w = e21.w + t2.w, this;
  }
  addScaledVector(e21, t2) {
    return this.x += e21.x * t2, this.y += e21.y * t2, this.z += e21.z * t2, this.w += e21.w * t2, this;
  }
  sub(e21) {
    return this.x -= e21.x, this.y -= e21.y, this.z -= e21.z, this.w -= e21.w, this;
  }
  subScalar(e21) {
    return this.x -= e21, this.y -= e21, this.z -= e21, this.w -= e21, this;
  }
  subVectors(e21, t2) {
    return this.x = e21.x - t2.x, this.y = e21.y - t2.y, this.z = e21.z - t2.z, this.w = e21.w - t2.w, this;
  }
  multiply(e21) {
    return this.x *= e21.x, this.y *= e21.y, this.z *= e21.z, this.w *= e21.w, this;
  }
  multiplyScalar(e21) {
    return this.x *= e21, this.y *= e21, this.z *= e21, this.w *= e21, this;
  }
  applyMatrix4(e21) {
    let t2 = this.x, n2 = this.y, r3 = this.z, i2 = this.w, a2 = e21.elements;
    return this.x = a2[0] * t2 + a2[4] * n2 + a2[8] * r3 + a2[12] * i2, this.y = a2[1] * t2 + a2[5] * n2 + a2[9] * r3 + a2[13] * i2, this.z = a2[2] * t2 + a2[6] * n2 + a2[10] * r3 + a2[14] * i2, this.w = a2[3] * t2 + a2[7] * n2 + a2[11] * r3 + a2[15] * i2, this;
  }
  divide(e21) {
    return this.x /= e21.x, this.y /= e21.y, this.z /= e21.z, this.w /= e21.w, this;
  }
  divideScalar(e21) {
    return this.multiplyScalar(1 / e21);
  }
  setAxisAngleFromQuaternion(e21) {
    this.w = 2 * Math.acos(e21.w);
    let t2 = Math.sqrt(1 - e21.w * e21.w);
    return t2 < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e21.x / t2, this.y = e21.y / t2, this.z = e21.z / t2), this;
  }
  setAxisAngleFromRotationMatrix(e21) {
    let t2, n2, r3, i2, a2 = 0.01, o2 = 0.1, s2 = e21.elements, c2 = s2[0], l2 = s2[4], u2 = s2[8], d2 = s2[1], f2 = s2[5], p2 = s2[9], m2 = s2[2], h2 = s2[6], g2 = s2[10];
    if (Math.abs(l2 - d2) < a2 && Math.abs(u2 - m2) < a2 && Math.abs(p2 - h2) < a2) {
      if (Math.abs(l2 + d2) < o2 && Math.abs(u2 + m2) < o2 && Math.abs(p2 + h2) < o2 && Math.abs(c2 + f2 + g2 - 3) < o2) return this.set(1, 0, 0, 0), this;
      t2 = Math.PI;
      let e22 = (c2 + 1) / 2, s3 = (f2 + 1) / 2, _3 = (g2 + 1) / 2, v2 = (l2 + d2) / 4, y2 = (u2 + m2) / 4, b2 = (p2 + h2) / 4;
      return e22 > s3 && e22 > _3 ? e22 < a2 ? (n2 = 0, r3 = 0.707106781, i2 = 0.707106781) : (n2 = Math.sqrt(e22), r3 = v2 / n2, i2 = y2 / n2) : s3 > _3 ? s3 < a2 ? (n2 = 0.707106781, r3 = 0, i2 = 0.707106781) : (r3 = Math.sqrt(s3), n2 = v2 / r3, i2 = b2 / r3) : _3 < a2 ? (n2 = 0.707106781, r3 = 0.707106781, i2 = 0) : (i2 = Math.sqrt(_3), n2 = y2 / i2, r3 = b2 / i2), this.set(n2, r3, i2, t2), this;
    }
    let _2 = Math.sqrt((h2 - p2) * (h2 - p2) + (u2 - m2) * (u2 - m2) + (d2 - l2) * (d2 - l2));
    return Math.abs(_2) < 1e-3 && (_2 = 1), this.x = (h2 - p2) / _2, this.y = (u2 - m2) / _2, this.z = (d2 - l2) / _2, this.w = Math.acos((c2 + f2 + g2 - 1) / 2), this;
  }
  setFromMatrixPosition(e21) {
    let t2 = e21.elements;
    return this.x = t2[12], this.y = t2[13], this.z = t2[14], this.w = t2[15], this;
  }
  min(e21) {
    return this.x = Math.min(this.x, e21.x), this.y = Math.min(this.y, e21.y), this.z = Math.min(this.z, e21.z), this.w = Math.min(this.w, e21.w), this;
  }
  max(e21) {
    return this.x = Math.max(this.x, e21.x), this.y = Math.max(this.y, e21.y), this.z = Math.max(this.z, e21.z), this.w = Math.max(this.w, e21.w), this;
  }
  clamp(e21, t2) {
    return this.x = V(this.x, e21.x, t2.x), this.y = V(this.y, e21.y, t2.y), this.z = V(this.z, e21.z, t2.z), this.w = V(this.w, e21.w, t2.w), this;
  }
  clampScalar(e21, t2) {
    return this.x = V(this.x, e21, t2), this.y = V(this.y, e21, t2), this.z = V(this.z, e21, t2), this.w = V(this.w, e21, t2), this;
  }
  clampLength(e21, t2) {
    let n2 = this.length();
    return this.divideScalar(n2 || 1).multiplyScalar(V(n2, e21, t2));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e21) {
    return this.x * e21.x + this.y * e21.y + this.z * e21.z + this.w * e21.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e21) {
    return this.normalize().multiplyScalar(e21);
  }
  lerp(e21, t2) {
    return this.x += (e21.x - this.x) * t2, this.y += (e21.y - this.y) * t2, this.z += (e21.z - this.z) * t2, this.w += (e21.w - this.w) * t2, this;
  }
  lerpVectors(e21, t2, n2) {
    return this.x = e21.x + (t2.x - e21.x) * n2, this.y = e21.y + (t2.y - e21.y) * n2, this.z = e21.z + (t2.z - e21.z) * n2, this.w = e21.w + (t2.w - e21.w) * n2, this;
  }
  equals(e21) {
    return e21.x === this.x && e21.y === this.y && e21.z === this.z && e21.w === this.w;
  }
  fromArray(e21, t2 = 0) {
    return this.x = e21[t2], this.y = e21[t2 + 1], this.z = e21[t2 + 2], this.w = e21[t2 + 3], this;
  }
  toArray(e21 = [], t2 = 0) {
    return e21[t2] = this.x, e21[t2 + 1] = this.y, e21[t2 + 2] = this.z, e21[t2 + 3] = this.w, e21;
  }
  fromBufferAttribute(e21, t2) {
    return this.x = e21.getX(t2), this.y = e21.getY(t2), this.z = e21.getZ(t2), this.w = e21.getW(t2), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
};
var kt = class extends et {
  constructor(e21 = 1, t2 = 1, n2 = {}) {
    super(), n2 = Object.assign({
      generateMipmaps: false,
      internalFormat: null,
      minFilter: o,
      depthBuffer: true,
      stencilBuffer: false,
      resolveColorBuffer: true,
      resolveDepthBuffer: true,
      resolveStencilBuffer: true,
      storeMultisampledColorBuffer: true,
      storeMultisampledDepthBuffer: true,
      storeMultisampledStencilBuffer: true,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: false,
      useArrayDepthTexture: false
    }, n2), this.isRenderTarget = true, this.width = e21, this.height = t2, this.depth = n2.depth, this.scissor = new Ot(0, 0, e21, t2), this.scissorTest = false, this.viewport = new Ot(0, 0, e21, t2), this.textures = [];
    let r3 = n2.count;
    for (let i2 = 0; i2 < r3; i2++) this.textures[i2] = new Dt({
      width: e21,
      height: t2,
      depth: n2.depth
    }), this.textures[i2].isRenderTargetTexture = true, this.textures[i2].renderTarget = this;
    this._setTextureOptions(n2), this.depthBuffer = n2.depthBuffer, this.stencilBuffer = n2.stencilBuffer, this.resolveColorBuffer = n2.resolveColorBuffer, this.resolveDepthBuffer = n2.resolveDepthBuffer, this.resolveStencilBuffer = n2.resolveStencilBuffer, this.storeMultisampledColorBuffer = n2.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = n2.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = n2.storeMultisampledStencilBuffer, this._depthTexture = null, this.depthTexture = n2.depthTexture, this.samples = n2.samples, this.multiview = n2.multiview, this.useArrayDepthTexture = n2.useArrayDepthTexture;
  }
  _setTextureOptions(e21 = {}) {
    let t2 = {
      minFilter: o,
      generateMipmaps: false,
      flipY: false,
      internalFormat: null
    };
    e21.mapping !== void 0 && (t2.mapping = e21.mapping), e21.wrapS !== void 0 && (t2.wrapS = e21.wrapS), e21.wrapT !== void 0 && (t2.wrapT = e21.wrapT), e21.wrapR !== void 0 && (t2.wrapR = e21.wrapR), e21.magFilter !== void 0 && (t2.magFilter = e21.magFilter), e21.minFilter !== void 0 && (t2.minFilter = e21.minFilter), e21.format !== void 0 && (t2.format = e21.format), e21.type !== void 0 && (t2.type = e21.type), e21.anisotropy !== void 0 && (t2.anisotropy = e21.anisotropy), e21.colorSpace !== void 0 && (t2.colorSpace = e21.colorSpace), e21.flipY !== void 0 && (t2.flipY = e21.flipY), e21.generateMipmaps !== void 0 && (t2.generateMipmaps = e21.generateMipmaps), e21.mipmapsAutoUpdate !== void 0 && (t2.mipmapsAutoUpdate = e21.mipmapsAutoUpdate), e21.internalFormat !== void 0 && (t2.internalFormat = e21.internalFormat);
    for (let e22 = 0; e22 < this.textures.length; e22++) this.textures[e22].setValues(t2);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e21) {
    this.textures[0] = e21;
  }
  set depthTexture(e21) {
    this._depthTexture !== null && this._depthTexture.renderTarget === this && (this._depthTexture.renderTarget = null), e21 !== null && e21.renderTarget === null && (e21.renderTarget = this), this._depthTexture = e21;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e21, t2, n2 = 1) {
    if (this.width !== e21 || this.height !== t2 || this.depth !== n2) {
      this.width = e21, this.height = t2, this.depth = n2;
      for (let r3 = 0, i2 = this.textures.length; r3 < i2; r3++) this.textures[r3].image.width = e21, this.textures[r3].image.height = t2, this.textures[r3].image.depth = n2, this.textures[r3].isData3DTexture !== true && (this.textures[r3].isArrayTexture = this.textures[r3].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, e21, t2), this.scissor.set(0, 0, e21, t2);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e21) {
    this.width = e21.width, this.height = e21.height, this.depth = e21.depth, this.scissor.copy(e21.scissor), this.scissorTest = e21.scissorTest, this.viewport.copy(e21.viewport), this.textures.length = 0;
    for (let t2 = 0, n2 = e21.textures.length; t2 < n2; t2++) {
      this.textures[t2] = e21.textures[t2].clone(), this.textures[t2].isRenderTargetTexture = true, this.textures[t2].renderTarget = this;
      let n3 = Object.assign({}, e21.textures[t2].image);
      this.textures[t2].source = new Ct(n3);
    }
    if (this.depthBuffer = e21.depthBuffer, this.stencilBuffer = e21.stencilBuffer, this.resolveColorBuffer = e21.resolveColorBuffer, this.resolveDepthBuffer = e21.resolveDepthBuffer, this.resolveStencilBuffer = e21.resolveStencilBuffer, this.storeMultisampledColorBuffer = e21.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = e21.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = e21.storeMultisampledStencilBuffer, e21.depthTexture !== null) {
      if (e21.depthTexture.renderTarget === e21) {
        let t2 = e21.depthTexture.clone();
        t2.renderTarget = null, this.depthTexture = t2;
      } else this.depthTexture = e21.depthTexture;
    } else this.depthTexture = null;
    return this.samples = e21.samples, this.multiview = e21.multiview, this.useArrayDepthTexture = e21.useArrayDepthTexture, this;
  }
  dispose() {
    this.dispatchEvent({
      type: `dispose`
    });
  }
};
var At = class extends kt {
  constructor(e21 = 1, t2 = 1, n2 = {}) {
    super(e21, t2, n2), this.isWebGLRenderTarget = true;
  }
};
var jt = class extends Dt {
  constructor(e21 = null, n2 = 1, i2 = 1, a2 = 1) {
    super(null), this.isDataArrayTexture = true, this.image = {
      data: e21,
      width: n2,
      height: i2,
      depth: a2
    }, this.magFilter = r, this.minFilter = r, this.wrapR = t, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  copy(e21) {
    return super.copy(e21), this.wrapR = e21.wrapR, this;
  }
  addLayerUpdate(e21) {
    this.layerUpdates.add(e21);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
};
var Mt = class extends Dt {
  constructor(e21 = null, n2 = 1, i2 = 1, a2 = 1) {
    super(null), this.isData3DTexture = true, this.image = {
      data: e21,
      width: n2,
      height: i2,
      depth: a2
    }, this.magFilter = r, this.minFilter = r, this.wrapR = t, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
  copy(e21) {
    return super.copy(e21), this.wrapR = e21.wrapR, this;
  }
};
var Nt = class e2 {
  static {
    this.prototype.isMatrix4 = true;
  }
  constructor(e21, t2, n2, r3, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2) {
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e21 !== void 0 && this.set(e21, t2, n2, r3, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2);
  }
  set(e21, t2, n2, r3, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2) {
    let g2 = this.elements;
    return g2[0] = e21, g2[4] = t2, g2[8] = n2, g2[12] = r3, g2[1] = i2, g2[5] = a2, g2[9] = o2, g2[13] = s2, g2[2] = c2, g2[6] = l2, g2[10] = u2, g2[14] = d2, g2[3] = f2, g2[7] = p2, g2[11] = m2, g2[15] = h2, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new e2().fromArray(this.elements);
  }
  copy(e21) {
    let t2 = this.elements, n2 = e21.elements;
    return t2[0] = n2[0], t2[1] = n2[1], t2[2] = n2[2], t2[3] = n2[3], t2[4] = n2[4], t2[5] = n2[5], t2[6] = n2[6], t2[7] = n2[7], t2[8] = n2[8], t2[9] = n2[9], t2[10] = n2[10], t2[11] = n2[11], t2[12] = n2[12], t2[13] = n2[13], t2[14] = n2[14], t2[15] = n2[15], this;
  }
  copyPosition(e21) {
    let t2 = this.elements, n2 = e21.elements;
    return t2[12] = n2[12], t2[13] = n2[13], t2[14] = n2[14], this;
  }
  setFromMatrix3(e21) {
    let t2 = e21.elements;
    return this.set(t2[0], t2[3], t2[6], 0, t2[1], t2[4], t2[7], 0, t2[2], t2[5], t2[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e21, t2, n2) {
    return this.determinantAffine() === 0 ? (e21.set(1, 0, 0), t2.set(0, 1, 0), n2.set(0, 0, 1), this) : (e21.setFromMatrixColumn(this, 0), t2.setFromMatrixColumn(this, 1), n2.setFromMatrixColumn(this, 2), this);
  }
  makeBasis(e21, t2, n2) {
    return this.set(e21.x, t2.x, n2.x, 0, e21.y, t2.y, n2.y, 0, e21.z, t2.z, n2.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e21) {
    if (e21.determinantAffine() === 0) return this.identity();
    let t2 = this.elements, n2 = e21.elements, r3 = 1 / Pt.setFromMatrixColumn(e21, 0).length(), i2 = 1 / Pt.setFromMatrixColumn(e21, 1).length(), a2 = 1 / Pt.setFromMatrixColumn(e21, 2).length();
    return t2[0] = n2[0] * r3, t2[1] = n2[1] * r3, t2[2] = n2[2] * r3, t2[3] = 0, t2[4] = n2[4] * i2, t2[5] = n2[5] * i2, t2[6] = n2[6] * i2, t2[7] = 0, t2[8] = n2[8] * a2, t2[9] = n2[9] * a2, t2[10] = n2[10] * a2, t2[11] = 0, t2[12] = 0, t2[13] = 0, t2[14] = 0, t2[15] = 1, this;
  }
  makeRotationFromEuler(e21) {
    let t2 = this.elements, n2 = e21.x, r3 = e21.y, i2 = e21.z, a2 = Math.cos(n2), o2 = Math.sin(n2), s2 = Math.cos(r3), c2 = Math.sin(r3), l2 = Math.cos(i2), u2 = Math.sin(i2);
    if (e21.order === `XYZ`) {
      let e22 = a2 * l2, n3 = a2 * u2, r4 = o2 * l2, i3 = o2 * u2;
      t2[0] = s2 * l2, t2[4] = -s2 * u2, t2[8] = c2, t2[1] = n3 + r4 * c2, t2[5] = e22 - i3 * c2, t2[9] = -o2 * s2, t2[2] = i3 - e22 * c2, t2[6] = r4 + n3 * c2, t2[10] = a2 * s2;
    } else if (e21.order === `YXZ`) {
      let e22 = s2 * l2, n3 = s2 * u2, r4 = c2 * l2, i3 = c2 * u2;
      t2[0] = e22 + i3 * o2, t2[4] = r4 * o2 - n3, t2[8] = a2 * c2, t2[1] = a2 * u2, t2[5] = a2 * l2, t2[9] = -o2, t2[2] = n3 * o2 - r4, t2[6] = i3 + e22 * o2, t2[10] = a2 * s2;
    } else if (e21.order === `ZXY`) {
      let e22 = s2 * l2, n3 = s2 * u2, r4 = c2 * l2, i3 = c2 * u2;
      t2[0] = e22 - i3 * o2, t2[4] = -a2 * u2, t2[8] = r4 + n3 * o2, t2[1] = n3 + r4 * o2, t2[5] = a2 * l2, t2[9] = i3 - e22 * o2, t2[2] = -a2 * c2, t2[6] = o2, t2[10] = a2 * s2;
    } else if (e21.order === `ZYX`) {
      let e22 = a2 * l2, n3 = a2 * u2, r4 = o2 * l2, i3 = o2 * u2;
      t2[0] = s2 * l2, t2[4] = r4 * c2 - n3, t2[8] = e22 * c2 + i3, t2[1] = s2 * u2, t2[5] = i3 * c2 + e22, t2[9] = n3 * c2 - r4, t2[2] = -c2, t2[6] = o2 * s2, t2[10] = a2 * s2;
    } else if (e21.order === `YZX`) {
      let e22 = a2 * s2, n3 = a2 * c2, r4 = o2 * s2, i3 = o2 * c2;
      t2[0] = s2 * l2, t2[4] = i3 - e22 * u2, t2[8] = r4 * u2 + n3, t2[1] = u2, t2[5] = a2 * l2, t2[9] = -o2 * l2, t2[2] = -c2 * l2, t2[6] = n3 * u2 + r4, t2[10] = e22 - i3 * u2;
    } else if (e21.order === `XZY`) {
      let e22 = a2 * s2, n3 = a2 * c2, r4 = o2 * s2, i3 = o2 * c2;
      t2[0] = s2 * l2, t2[4] = -u2, t2[8] = c2 * l2, t2[1] = e22 * u2 + i3, t2[5] = a2 * l2, t2[9] = n3 * u2 - r4, t2[2] = r4 * u2 - n3, t2[6] = o2 * l2, t2[10] = i3 * u2 + e22;
    }
    return t2[3] = 0, t2[7] = 0, t2[11] = 0, t2[12] = 0, t2[13] = 0, t2[14] = 0, t2[15] = 1, this;
  }
  makeRotationFromQuaternion(e21) {
    return this.compose(It, e21, Lt);
  }
  lookAt(e21, t2, n2) {
    let r3 = this.elements;
    return Bt.subVectors(e21, t2), Bt.lengthSq() === 0 && (Bt.z = 1), Bt.normalize(), Rt.crossVectors(n2, Bt), Rt.lengthSq() === 0 && (Math.abs(n2.z) === 1 ? Bt.x += 1e-4 : Bt.z += 1e-4, Bt.normalize(), Rt.crossVectors(n2, Bt)), Rt.normalize(), zt.crossVectors(Bt, Rt), r3[0] = Rt.x, r3[4] = zt.x, r3[8] = Bt.x, r3[1] = Rt.y, r3[5] = zt.y, r3[9] = Bt.y, r3[2] = Rt.z, r3[6] = zt.z, r3[10] = Bt.z, this;
  }
  multiply(e21) {
    return this.multiplyMatrices(this, e21);
  }
  premultiply(e21) {
    return this.multiplyMatrices(e21, this);
  }
  multiplyMatrices(e21, t2) {
    let n2 = e21.elements, r3 = t2.elements, i2 = this.elements, a2 = n2[0], o2 = n2[4], s2 = n2[8], c2 = n2[12], l2 = n2[1], u2 = n2[5], d2 = n2[9], f2 = n2[13], p2 = n2[2], m2 = n2[6], h2 = n2[10], g2 = n2[14], _2 = n2[3], v2 = n2[7], y2 = n2[11], b2 = n2[15], x2 = r3[0], S2 = r3[4], C2 = r3[8], w2 = r3[12], T2 = r3[1], E2 = r3[5], D2 = r3[9], O2 = r3[13], k2 = r3[2], A2 = r3[6], ee2 = r3[10], j2 = r3[14], te2 = r3[3], M2 = r3[7], ne2 = r3[11], N2 = r3[15];
    return i2[0] = a2 * x2 + o2 * T2 + s2 * k2 + c2 * te2, i2[4] = a2 * S2 + o2 * E2 + s2 * A2 + c2 * M2, i2[8] = a2 * C2 + o2 * D2 + s2 * ee2 + c2 * ne2, i2[12] = a2 * w2 + o2 * O2 + s2 * j2 + c2 * N2, i2[1] = l2 * x2 + u2 * T2 + d2 * k2 + f2 * te2, i2[5] = l2 * S2 + u2 * E2 + d2 * A2 + f2 * M2, i2[9] = l2 * C2 + u2 * D2 + d2 * ee2 + f2 * ne2, i2[13] = l2 * w2 + u2 * O2 + d2 * j2 + f2 * N2, i2[2] = p2 * x2 + m2 * T2 + h2 * k2 + g2 * te2, i2[6] = p2 * S2 + m2 * E2 + h2 * A2 + g2 * M2, i2[10] = p2 * C2 + m2 * D2 + h2 * ee2 + g2 * ne2, i2[14] = p2 * w2 + m2 * O2 + h2 * j2 + g2 * N2, i2[3] = _2 * x2 + v2 * T2 + y2 * k2 + b2 * te2, i2[7] = _2 * S2 + v2 * E2 + y2 * A2 + b2 * M2, i2[11] = _2 * C2 + v2 * D2 + y2 * ee2 + b2 * ne2, i2[15] = _2 * w2 + v2 * O2 + y2 * j2 + b2 * N2, this;
  }
  multiplyScalar(e21) {
    let t2 = this.elements;
    return t2[0] *= e21, t2[4] *= e21, t2[8] *= e21, t2[12] *= e21, t2[1] *= e21, t2[5] *= e21, t2[9] *= e21, t2[13] *= e21, t2[2] *= e21, t2[6] *= e21, t2[10] *= e21, t2[14] *= e21, t2[3] *= e21, t2[7] *= e21, t2[11] *= e21, t2[15] *= e21, this;
  }
  determinant() {
    let e21 = this.elements, t2 = e21[0], n2 = e21[4], r3 = e21[8], i2 = e21[12], a2 = e21[1], o2 = e21[5], s2 = e21[9], c2 = e21[13], l2 = e21[2], u2 = e21[6], d2 = e21[10], f2 = e21[14], p2 = e21[3], m2 = e21[7], h2 = e21[11], g2 = e21[15], _2 = s2 * f2 - c2 * d2, v2 = o2 * f2 - c2 * u2, y2 = o2 * d2 - s2 * u2, b2 = a2 * f2 - c2 * l2, x2 = a2 * d2 - s2 * l2, S2 = a2 * u2 - o2 * l2;
    return t2 * (m2 * _2 - h2 * v2 + g2 * y2) - n2 * (p2 * _2 - h2 * b2 + g2 * x2) + r3 * (p2 * v2 - m2 * b2 + g2 * S2) - i2 * (p2 * y2 - m2 * x2 + h2 * S2);
  }
  determinantAffine() {
    let e21 = this.elements, t2 = e21[0], n2 = e21[4], r3 = e21[8], i2 = e21[1], a2 = e21[5], o2 = e21[9], s2 = e21[2], c2 = e21[6], l2 = e21[10];
    return t2 * (a2 * l2 - o2 * c2) - n2 * (i2 * l2 - o2 * s2) + r3 * (i2 * c2 - a2 * s2);
  }
  transpose() {
    let e21 = this.elements, t2;
    return t2 = e21[1], e21[1] = e21[4], e21[4] = t2, t2 = e21[2], e21[2] = e21[8], e21[8] = t2, t2 = e21[6], e21[6] = e21[9], e21[9] = t2, t2 = e21[3], e21[3] = e21[12], e21[12] = t2, t2 = e21[7], e21[7] = e21[13], e21[13] = t2, t2 = e21[11], e21[11] = e21[14], e21[14] = t2, this;
  }
  setPosition(e21, t2, n2) {
    let r3 = this.elements;
    return e21.isVector3 ? (r3[12] = e21.x, r3[13] = e21.y, r3[14] = e21.z) : (r3[12] = e21, r3[13] = t2, r3[14] = n2), this;
  }
  invert() {
    let e21 = this.elements, t2 = e21[0], n2 = e21[1], r3 = e21[2], i2 = e21[3], a2 = e21[4], o2 = e21[5], s2 = e21[6], c2 = e21[7], l2 = e21[8], u2 = e21[9], d2 = e21[10], f2 = e21[11], p2 = e21[12], m2 = e21[13], h2 = e21[14], g2 = e21[15], _2 = t2 * o2 - n2 * a2, v2 = t2 * s2 - r3 * a2, y2 = t2 * c2 - i2 * a2, b2 = n2 * s2 - r3 * o2, x2 = n2 * c2 - i2 * o2, S2 = r3 * c2 - i2 * s2, C2 = l2 * m2 - u2 * p2, w2 = l2 * h2 - d2 * p2, T2 = l2 * g2 - f2 * p2, E2 = u2 * h2 - d2 * m2, D2 = u2 * g2 - f2 * m2, O2 = d2 * g2 - f2 * h2, k2 = _2 * O2 - v2 * D2 + y2 * E2 + b2 * T2 - x2 * w2 + S2 * C2;
    if (k2 === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    let A2 = 1 / k2;
    return e21[0] = (o2 * O2 - s2 * D2 + c2 * E2) * A2, e21[1] = (r3 * D2 - n2 * O2 - i2 * E2) * A2, e21[2] = (m2 * S2 - h2 * x2 + g2 * b2) * A2, e21[3] = (d2 * x2 - u2 * S2 - f2 * b2) * A2, e21[4] = (s2 * T2 - a2 * O2 - c2 * w2) * A2, e21[5] = (t2 * O2 - r3 * T2 + i2 * w2) * A2, e21[6] = (h2 * y2 - p2 * S2 - g2 * v2) * A2, e21[7] = (l2 * S2 - d2 * y2 + f2 * v2) * A2, e21[8] = (a2 * D2 - o2 * T2 + c2 * C2) * A2, e21[9] = (n2 * T2 - t2 * D2 - i2 * C2) * A2, e21[10] = (p2 * x2 - m2 * y2 + g2 * _2) * A2, e21[11] = (u2 * y2 - l2 * x2 - f2 * _2) * A2, e21[12] = (o2 * w2 - a2 * E2 - s2 * C2) * A2, e21[13] = (t2 * E2 - n2 * w2 + r3 * C2) * A2, e21[14] = (m2 * v2 - p2 * b2 - h2 * _2) * A2, e21[15] = (l2 * b2 - u2 * v2 + d2 * _2) * A2, this;
  }
  scale(e21) {
    let t2 = this.elements, n2 = e21.x, r3 = e21.y, i2 = e21.z;
    return t2[0] *= n2, t2[4] *= r3, t2[8] *= i2, t2[1] *= n2, t2[5] *= r3, t2[9] *= i2, t2[2] *= n2, t2[6] *= r3, t2[10] *= i2, t2[3] *= n2, t2[7] *= r3, t2[11] *= i2, this;
  }
  getMaxScaleOnAxis() {
    let e21 = this.elements, t2 = e21[0] * e21[0] + e21[1] * e21[1] + e21[2] * e21[2], n2 = e21[4] * e21[4] + e21[5] * e21[5] + e21[6] * e21[6], r3 = e21[8] * e21[8] + e21[9] * e21[9] + e21[10] * e21[10];
    return Math.sqrt(Math.max(t2, n2, r3));
  }
  makeTranslation(e21, t2, n2) {
    return e21.isVector3 ? this.set(1, 0, 0, e21.x, 0, 1, 0, e21.y, 0, 0, 1, e21.z, 0, 0, 0, 1) : this.set(1, 0, 0, e21, 0, 1, 0, t2, 0, 0, 1, n2, 0, 0, 0, 1), this;
  }
  makeRotationX(e21) {
    let t2 = Math.cos(e21), n2 = Math.sin(e21);
    return this.set(1, 0, 0, 0, 0, t2, -n2, 0, 0, n2, t2, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e21) {
    let t2 = Math.cos(e21), n2 = Math.sin(e21);
    return this.set(t2, 0, n2, 0, 0, 1, 0, 0, -n2, 0, t2, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e21) {
    let t2 = Math.cos(e21), n2 = Math.sin(e21);
    return this.set(t2, -n2, 0, 0, n2, t2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e21, t2) {
    let n2 = Math.cos(t2), r3 = Math.sin(t2), i2 = 1 - n2, a2 = e21.x, o2 = e21.y, s2 = e21.z, c2 = i2 * a2, l2 = i2 * o2;
    return this.set(c2 * a2 + n2, c2 * o2 - r3 * s2, c2 * s2 + r3 * o2, 0, c2 * o2 + r3 * s2, l2 * o2 + n2, l2 * s2 - r3 * a2, 0, c2 * s2 - r3 * o2, l2 * s2 + r3 * a2, i2 * s2 * s2 + n2, 0, 0, 0, 0, 1), this;
  }
  makeScale(e21, t2, n2) {
    return this.set(e21, 0, 0, 0, 0, t2, 0, 0, 0, 0, n2, 0, 0, 0, 0, 1), this;
  }
  makeShear(e21, t2, n2, r3, i2, a2) {
    return this.set(1, n2, i2, 0, e21, 1, a2, 0, t2, r3, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e21, t2, n2) {
    let r3 = this.elements, i2 = t2._x, a2 = t2._y, o2 = t2._z, s2 = t2._w, c2 = i2 + i2, l2 = a2 + a2, u2 = o2 + o2, d2 = i2 * c2, f2 = i2 * l2, p2 = i2 * u2, m2 = a2 * l2, h2 = a2 * u2, g2 = o2 * u2, _2 = s2 * c2, v2 = s2 * l2, y2 = s2 * u2, b2 = n2.x, x2 = n2.y, S2 = n2.z;
    return r3[0] = (1 - (m2 + g2)) * b2, r3[1] = (f2 + y2) * b2, r3[2] = (p2 - v2) * b2, r3[3] = 0, r3[4] = (f2 - y2) * x2, r3[5] = (1 - (d2 + g2)) * x2, r3[6] = (h2 + _2) * x2, r3[7] = 0, r3[8] = (p2 + v2) * S2, r3[9] = (h2 - _2) * S2, r3[10] = (1 - (d2 + m2)) * S2, r3[11] = 0, r3[12] = e21.x, r3[13] = e21.y, r3[14] = e21.z, r3[15] = 1, this;
  }
  decompose(e21, t2, n2) {
    let r3 = this.elements;
    e21.x = r3[12], e21.y = r3[13], e21.z = r3[14];
    let i2 = this.determinantAffine();
    if (i2 === 0) return n2.set(1, 1, 1), t2.identity(), this;
    let a2 = Pt.set(r3[0], r3[1], r3[2]).length(), o2 = Pt.set(r3[4], r3[5], r3[6]).length(), s2 = Pt.set(r3[8], r3[9], r3[10]).length();
    i2 < 0 && (a2 = -a2), Ft.copy(this);
    let c2 = 1 / a2, l2 = 1 / o2, u2 = 1 / s2;
    return Ft.elements[0] *= c2, Ft.elements[1] *= c2, Ft.elements[2] *= c2, Ft.elements[4] *= l2, Ft.elements[5] *= l2, Ft.elements[6] *= l2, Ft.elements[8] *= u2, Ft.elements[9] *= u2, Ft.elements[10] *= u2, t2.setFromRotationMatrix(Ft), n2.x = a2, n2.y = o2, n2.z = s2, this;
  }
  makePerspective(e21, t2, n2, r3, i2, a2, o2 = Ue, s2 = false) {
    let c2 = this.elements, l2 = 2 * i2 / (t2 - e21), u2 = 2 * i2 / (n2 - r3), d2 = (t2 + e21) / (t2 - e21), f2 = (n2 + r3) / (n2 - r3), p2, m2;
    if (s2) p2 = i2 / (a2 - i2), m2 = a2 * i2 / (a2 - i2);
    else if (o2 === 2e3) p2 = -(a2 + i2) / (a2 - i2), m2 = -2 * a2 * i2 / (a2 - i2);
    else if (o2 === 2001) p2 = -a2 / (a2 - i2), m2 = -a2 * i2 / (a2 - i2);
    else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: ` + o2);
    return c2[0] = l2, c2[4] = 0, c2[8] = d2, c2[12] = 0, c2[1] = 0, c2[5] = u2, c2[9] = f2, c2[13] = 0, c2[2] = 0, c2[6] = 0, c2[10] = p2, c2[14] = m2, c2[3] = 0, c2[7] = 0, c2[11] = -1, c2[15] = 0, this;
  }
  makeOrthographic(e21, t2, n2, r3, i2, a2, o2 = Ue, s2 = false) {
    let c2 = this.elements, l2 = 2 / (t2 - e21), u2 = 2 / (n2 - r3), d2 = -(t2 + e21) / (t2 - e21), f2 = -(n2 + r3) / (n2 - r3), p2, m2;
    if (s2) p2 = 1 / (a2 - i2), m2 = a2 / (a2 - i2);
    else if (o2 === 2e3) p2 = -2 / (a2 - i2), m2 = -(a2 + i2) / (a2 - i2);
    else if (o2 === 2001) p2 = -1 / (a2 - i2), m2 = -i2 / (a2 - i2);
    else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ` + o2);
    return c2[0] = l2, c2[4] = 0, c2[8] = 0, c2[12] = d2, c2[1] = 0, c2[5] = u2, c2[9] = 0, c2[13] = f2, c2[2] = 0, c2[6] = 0, c2[10] = p2, c2[14] = m2, c2[3] = 0, c2[7] = 0, c2[11] = 0, c2[15] = 1, this;
  }
  equals(e21) {
    let t2 = this.elements, n2 = e21.elements;
    for (let e22 = 0; e22 < 16; e22++) if (t2[e22] !== n2[e22]) return false;
    return true;
  }
  fromArray(e21, t2 = 0) {
    for (let n2 = 0; n2 < 16; n2++) this.elements[n2] = e21[n2 + t2];
    return this;
  }
  toArray(e21 = [], t2 = 0) {
    let n2 = this.elements;
    return e21[t2] = n2[0], e21[t2 + 1] = n2[1], e21[t2 + 2] = n2[2], e21[t2 + 3] = n2[3], e21[t2 + 4] = n2[4], e21[t2 + 5] = n2[5], e21[t2 + 6] = n2[6], e21[t2 + 7] = n2[7], e21[t2 + 8] = n2[8], e21[t2 + 9] = n2[9], e21[t2 + 10] = n2[10], e21[t2 + 11] = n2[11], e21[t2 + 12] = n2[12], e21[t2 + 13] = n2[13], e21[t2 + 14] = n2[14], e21[t2 + 15] = n2[15], e21;
  }
};
var Pt = new U();
var Ft = new Nt();
var It = new U(0, 0, 0);
var Lt = new U(1, 1, 1);
var Rt = new U();
var zt = new U();
var Bt = new U();
var Vt = new Nt();
var Ht = new dt();
var Ut = class e3 {
  constructor(t2 = 0, n2 = 0, r3 = 0, i2 = e3.DEFAULT_ORDER) {
    this.isEuler = true, this._x = t2, this._y = n2, this._z = r3, this._order = i2;
  }
  get x() {
    return this._x;
  }
  set x(e21) {
    this._x = e21, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e21) {
    this._y = e21, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e21) {
    this._z = e21, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e21) {
    this._order = e21, this._onChangeCallback();
  }
  set(e21, t2, n2, r3 = this._order) {
    return this._x = e21, this._y = t2, this._z = n2, this._order = r3, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e21) {
    return this._x = e21._x, this._y = e21._y, this._z = e21._z, this._order = e21._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e21, t2 = this._order, n2 = true) {
    let r3 = e21.elements, i2 = r3[0], a2 = r3[4], o2 = r3[8], s2 = r3[1], c2 = r3[5], l2 = r3[9], u2 = r3[2], d2 = r3[6], f2 = r3[10];
    switch (t2) {
      case `XYZ`:
        this._y = Math.asin(V(o2, -1, 1)), Math.abs(o2) < 0.9999999 ? (this._x = Math.atan2(-l2, f2), this._z = Math.atan2(-a2, i2)) : (this._x = Math.atan2(d2, c2), this._z = 0);
        break;
      case `YXZ`:
        this._x = Math.asin(-V(l2, -1, 1)), Math.abs(l2) < 0.9999999 ? (this._y = Math.atan2(o2, f2), this._z = Math.atan2(s2, c2)) : (this._y = Math.atan2(-u2, i2), this._z = 0);
        break;
      case `ZXY`:
        this._x = Math.asin(V(d2, -1, 1)), Math.abs(d2) < 0.9999999 ? (this._y = Math.atan2(-u2, f2), this._z = Math.atan2(-a2, c2)) : (this._y = 0, this._z = Math.atan2(s2, i2));
        break;
      case `ZYX`:
        this._y = Math.asin(-V(u2, -1, 1)), Math.abs(u2) < 0.9999999 ? (this._x = Math.atan2(d2, f2), this._z = Math.atan2(s2, i2)) : (this._x = 0, this._z = Math.atan2(-a2, c2));
        break;
      case `YZX`:
        this._z = Math.asin(V(s2, -1, 1)), Math.abs(s2) < 0.9999999 ? (this._x = Math.atan2(-l2, c2), this._y = Math.atan2(-u2, i2)) : (this._x = 0, this._y = Math.atan2(o2, f2));
        break;
      case `XZY`:
        this._z = Math.asin(-V(a2, -1, 1)), Math.abs(a2) < 0.9999999 ? (this._x = Math.atan2(d2, c2), this._y = Math.atan2(o2, i2)) : (this._x = Math.atan2(-l2, f2), this._y = 0);
        break;
      default:
        z(`Euler: .setFromRotationMatrix() encountered an unknown order: ` + t2);
    }
    return this._order = t2, n2 === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e21, t2, n2) {
    return Vt.makeRotationFromQuaternion(e21), this.setFromRotationMatrix(Vt, t2, n2);
  }
  setFromVector3(e21, t2 = this._order) {
    return this.set(e21.x, e21.y, e21.z, t2);
  }
  reorder(e21) {
    return Ht.setFromEuler(this), this.setFromQuaternion(Ht, e21);
  }
  equals(e21) {
    return e21._x === this._x && e21._y === this._y && e21._z === this._z && e21._order === this._order;
  }
  fromArray(e21) {
    return this._x = e21[0], this._y = e21[1], this._z = e21[2], e21[3] !== void 0 && (this._order = e21[3]), this._onChangeCallback(), this;
  }
  toArray(e21 = [], t2 = 0) {
    return e21[t2] = this._x, e21[t2 + 1] = this._y, e21[t2 + 2] = this._z, e21[t2 + 3] = this._order, e21;
  }
  _onChange(e21) {
    return this._onChangeCallback = e21, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
};
Ut.DEFAULT_ORDER = `XYZ`;
var Wt = class {
  constructor() {
    this.mask = 1;
  }
  set(e21) {
    this.mask = 1 << e21 >>> 0;
  }
  enable(e21) {
    this.mask |= 1 << e21;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e21) {
    this.mask ^= 1 << e21;
  }
  disable(e21) {
    this.mask &= ~(1 << e21);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e21) {
    return (this.mask & e21.mask) !== 0;
  }
  isEnabled(e21) {
    return !!(this.mask & 1 << e21);
  }
};
var Gt = 0;
var Kt = new U();
var qt = new dt();
var Jt = new Nt();
var Yt = new U();
var Xt = new U();
var Zt = new U();
var Qt = new dt();
var $t = new U(1, 0, 0);
var en = new U(0, 1, 0);
var tn = new U(0, 0, 1);
var nn = {
  type: `added`
};
var rn = {
  type: `removed`
};
var an = {
  type: `childadded`,
  child: null
};
var on = {
  type: `childremoved`,
  child: null
};
var sn = class e4 extends et {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", {
      value: Gt++
    }), this.uuid = it(), this.name = ``, this.type = `Object3D`, this.parent = null, this.children = [], this.up = e4.DEFAULT_UP.clone();
    let t2 = new U(), n2 = new Ut(), r3 = new dt(), i2 = new U(1, 1, 1);
    function a2() {
      r3.setFromEuler(n2, false);
    }
    function o2() {
      n2.setFromQuaternion(r3, void 0, false);
    }
    n2._onChange(a2), r3._onChange(o2), Object.defineProperties(this, {
      position: {
        configurable: true,
        enumerable: true,
        value: t2
      },
      rotation: {
        configurable: true,
        enumerable: true,
        value: n2
      },
      quaternion: {
        configurable: true,
        enumerable: true,
        value: r3
      },
      scale: {
        configurable: true,
        enumerable: true,
        value: i2
      },
      modelViewMatrix: {
        value: new Nt()
      },
      normalMatrix: {
        value: new W()
      }
    }), this.matrix = new Nt(), this.matrixWorld = new Nt(), this.matrixAutoUpdate = e4.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = e4.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new Wt(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = false, this.userData = {}, this.pivot = null;
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e21) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e21), this.matrix.decompose(this.position, this.quaternion, this.scale), this.pivot !== null && this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot);
  }
  applyQuaternion(e21) {
    return this.quaternion.premultiply(e21), this;
  }
  setRotationFromAxisAngle(e21, t2) {
    this.quaternion.setFromAxisAngle(e21, t2);
  }
  setRotationFromEuler(e21) {
    this.quaternion.setFromEuler(e21, true);
  }
  setRotationFromMatrix(e21) {
    this.quaternion.setFromRotationMatrix(e21);
  }
  setRotationFromQuaternion(e21) {
    this.quaternion.copy(e21);
  }
  rotateOnAxis(e21, t2) {
    return qt.setFromAxisAngle(e21, t2), this.quaternion.multiply(qt), this;
  }
  rotateOnWorldAxis(e21, t2) {
    return qt.setFromAxisAngle(e21, t2), this.quaternion.premultiply(qt), this;
  }
  rotateX(e21) {
    return this.rotateOnAxis($t, e21);
  }
  rotateY(e21) {
    return this.rotateOnAxis(en, e21);
  }
  rotateZ(e21) {
    return this.rotateOnAxis(tn, e21);
  }
  translateOnAxis(e21, t2) {
    return Kt.copy(e21).applyQuaternion(this.quaternion), this.position.add(Kt.multiplyScalar(t2)), this;
  }
  translateX(e21) {
    return this.translateOnAxis($t, e21);
  }
  translateY(e21) {
    return this.translateOnAxis(en, e21);
  }
  translateZ(e21) {
    return this.translateOnAxis(tn, e21);
  }
  localToWorld(e21) {
    return this.updateWorldMatrix(true, false), e21.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e21) {
    return this.updateWorldMatrix(true, false), e21.applyMatrix4(Jt.copy(this.matrixWorld).invert());
  }
  lookAt(e21, t2, n2) {
    e21.isVector3 ? Yt.copy(e21) : Yt.set(e21, t2, n2);
    let r3 = this.parent;
    this.updateWorldMatrix(true, false), Xt.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Jt.lookAt(Xt, Yt, this.up) : Jt.lookAt(Yt, Xt, this.up), this.quaternion.setFromRotationMatrix(Jt), r3 && (Jt.extractRotation(r3.matrixWorld), qt.setFromRotationMatrix(Jt), this.quaternion.premultiply(qt.invert()));
  }
  add(e21) {
    if (arguments.length > 1) {
      for (let e22 = 0; e22 < arguments.length; e22++) this.add(arguments[e22]);
      return this;
    }
    return e21 === this ? (B(`Object3D.add: object can't be added as a child of itself.`, e21), this) : (e21 && e21.isObject3D ? (e21.removeFromParent(), e21.parent = this, this.children.push(e21), e21.dispatchEvent(nn), an.child = e21, this.dispatchEvent(an), an.child = null) : B(`Object3D.add: object not an instance of THREE.Object3D.`, e21), this);
  }
  remove(e21) {
    if (arguments.length > 1) {
      for (let e22 = 0; e22 < arguments.length; e22++) this.remove(arguments[e22]);
      return this;
    }
    let t2 = this.children.indexOf(e21);
    return t2 !== -1 && (e21.parent = null, this.children.splice(t2, 1), e21.dispatchEvent(rn), on.child = e21, this.dispatchEvent(on), on.child = null), this;
  }
  removeFromParent() {
    let e21 = this.parent;
    return e21 !== null && e21.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e21) {
    return this.updateWorldMatrix(true, false), Jt.copy(this.matrixWorld).invert(), e21.parent !== null && (e21.parent.updateWorldMatrix(true, false), Jt.multiply(e21.parent.matrixWorld)), e21.applyMatrix4(Jt), e21.removeFromParent(), e21.parent = this, this.children.push(e21), e21.updateWorldMatrix(false, true), e21.dispatchEvent(nn), an.child = e21, this.dispatchEvent(an), an.child = null, this;
  }
  getObjectById(e21) {
    return this.getObjectByProperty(`id`, e21);
  }
  getObjectByName(e21) {
    return this.getObjectByProperty(`name`, e21);
  }
  getObjectByProperty(e21, t2) {
    if (this[e21] === t2) return this;
    for (let n2 = 0, r3 = this.children.length; n2 < r3; n2++) {
      let r4 = this.children[n2].getObjectByProperty(e21, t2);
      if (r4 !== void 0) return r4;
    }
  }
  getObjectsByProperty(e21, t2, n2 = []) {
    this[e21] === t2 && n2.push(this);
    let r3 = this.children;
    for (let i2 = 0, a2 = r3.length; i2 < a2; i2++) r3[i2].getObjectsByProperty(e21, t2, n2);
    return n2;
  }
  getWorldPosition(e21) {
    return this.updateWorldMatrix(true, false), e21.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e21) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Xt, e21, Zt), e21;
  }
  getWorldScale(e21) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Xt, Qt, e21), e21;
  }
  getWorldDirection(e21) {
    this.updateWorldMatrix(true, false);
    let t2 = this.matrixWorld.elements;
    return e21.set(t2[8], t2[9], t2[10]).normalize();
  }
  raycast() {
  }
  intersectsFrustum() {
    return true;
  }
  traverse(e21) {
    e21(this);
    let t2 = this.children;
    for (let n2 = 0, r3 = t2.length; n2 < r3; n2++) t2[n2].traverse(e21);
  }
  traverseVisible(e21) {
    if (this.visible === false) return;
    e21(this);
    let t2 = this.children;
    for (let n2 = 0, r3 = t2.length; n2 < r3; n2++) t2[n2].traverseVisible(e21);
  }
  traverseAncestors(e21) {
    let t2 = this.parent;
    t2 !== null && (e21(t2), t2.traverseAncestors(e21));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    let e21 = this.pivot;
    if (e21 !== null) {
      let t2 = e21.x, n2 = e21.y, r3 = e21.z, i2 = this.matrix.elements;
      i2[12] += t2 - i2[0] * t2 - i2[4] * n2 - i2[8] * r3, i2[13] += n2 - i2[1] * t2 - i2[5] * n2 - i2[9] * r3, i2[14] += r3 - i2[2] * t2 - i2[6] * n2 - i2[10] * r3;
    }
    this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e21) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e21) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, e21 = true);
    let t2 = this.children;
    for (let n2 = 0, r3 = t2.length; n2 < r3; n2++) t2[n2].updateMatrixWorld(e21);
  }
  updateWorldMatrix(e21, t2, n2 = false) {
    let r3 = this.parent;
    if (e21 === true && r3 !== null && r3.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || n2) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, n2 = true), t2 === true) {
      let e22 = this.children;
      for (let t3 = 0, r4 = e22.length; t3 < r4; t3++) e22[t3].updateWorldMatrix(false, true, n2);
    }
  }
  toJSON(e21) {
    let t2 = e21 === void 0 || typeof e21 == `string`, n2 = {};
    t2 && (e21 = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n2.metadata = {
      version: 4.7,
      type: `Object`,
      generator: `Object3D.toJSON`
    });
    let r3 = {};
    r3.uuid = this.uuid, r3.type = this.type, r3.name = this.name, r3.castShadow = this.castShadow, r3.receiveShadow = this.receiveShadow, r3.visible = this.visible, r3.frustumCulled = this.frustumCulled, r3.renderOrder = this.renderOrder, r3.static = this.static, r3.matrixAutoUpdate = this.matrixAutoUpdate, Object.keys(this.userData).length > 0 && (r3.userData = this.userData), r3.layers = this.layers.mask, r3.matrix = this.matrix.toArray(), r3.up = this.up.toArray(), this.pivot !== null && (r3.pivot = this.pivot.toArray()), this.morphTargetDictionary !== void 0 && (r3.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r3.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r3.type = `InstancedMesh`, r3.count = this.count, r3.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r3.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r3.type = `BatchedMesh`, r3.perObjectFrustumCulled = this.perObjectFrustumCulled, r3.sortObjects = this.sortObjects, r3.drawRanges = this._drawRanges, r3.reservedRanges = this._reservedRanges, r3.geometryInfo = this._geometryInfo.map((e22) => ({
      ...e22,
      boundingBox: e22.boundingBox ? e22.boundingBox.toJSON() : void 0,
      boundingSphere: e22.boundingSphere ? e22.boundingSphere.toJSON() : void 0
    })), r3.instanceInfo = this._instanceInfo.map((e22) => ({
      ...e22
    })), r3.availableInstanceIds = this._availableInstanceIds.slice(), r3.availableGeometryIds = this._availableGeometryIds.slice(), r3.nextIndexStart = this._nextIndexStart, r3.nextVertexStart = this._nextVertexStart, r3.geometryCount = this._geometryCount, r3.maxInstanceCount = this._maxInstanceCount, r3.maxVertexCount = this._maxVertexCount, r3.maxIndexCount = this._maxIndexCount, r3.geometryInitialized = this._geometryInitialized, r3.matricesTexture = this._matricesTexture.toJSON(e21), r3.indirectTexture = this._indirectTexture.toJSON(e21), this._colorsTexture !== null && (r3.colorsTexture = this._colorsTexture.toJSON(e21)), this.boundingSphere !== null && (r3.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r3.boundingBox = this.boundingBox.toJSON()));
    function i2(t3, n3) {
      return t3[n3.uuid] === void 0 && (t3[n3.uuid] = n3.toJSON(e21)), n3.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? r3.background = this.background.toJSON() : this.background.isTexture && (r3.background = this.background.toJSON(e21).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (r3.environment = this.environment.toJSON(e21).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r3.geometry = i2(e21.geometries, this.geometry);
      let t3 = this.geometry.parameters;
      if (t3 !== void 0 && t3.shapes !== void 0) {
        let n3 = t3.shapes;
        if (Array.isArray(n3)) for (let t4 = 0, r4 = n3.length; t4 < r4; t4++) {
          let r5 = n3[t4];
          i2(e21.shapes, r5);
        }
        else i2(e21.shapes, n3);
      }
    }
    if (this.isSkinnedMesh && (r3.bindMode = this.bindMode, r3.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (i2(e21.skeletons, this.skeleton), r3.skeleton = this.skeleton.uuid)), this.material !== void 0) {
      if (Array.isArray(this.material)) {
        let t3 = [];
        for (let n3 = 0, r4 = this.material.length; n3 < r4; n3++) t3.push(i2(e21.materials, this.material[n3]));
        r3.material = t3;
      } else r3.material = i2(e21.materials, this.material);
    }
    if (this.children.length > 0) {
      r3.children = [];
      for (let t3 = 0; t3 < this.children.length; t3++) r3.children.push(this.children[t3].toJSON(e21).object);
    }
    if (this.animations.length > 0) {
      r3.animations = [];
      for (let t3 = 0; t3 < this.animations.length; t3++) {
        let n3 = this.animations[t3];
        r3.animations.push(i2(e21.animations, n3));
      }
    }
    if (t2) {
      let t3 = a2(e21.geometries), r4 = a2(e21.materials), i3 = a2(e21.textures), o2 = a2(e21.images), s2 = a2(e21.shapes), c2 = a2(e21.skeletons), l2 = a2(e21.animations), u2 = a2(e21.nodes);
      t3.length > 0 && (n2.geometries = t3), r4.length > 0 && (n2.materials = r4), i3.length > 0 && (n2.textures = i3), o2.length > 0 && (n2.images = o2), s2.length > 0 && (n2.shapes = s2), c2.length > 0 && (n2.skeletons = c2), l2.length > 0 && (n2.animations = l2), u2.length > 0 && (n2.nodes = u2);
    }
    return n2.object = r3, n2;
    function a2(e22) {
      let t3 = [];
      for (let n3 in e22) {
        let r4 = e22[n3];
        delete r4.metadata, t3.push(r4);
      }
      return t3;
    }
  }
  clone(e21) {
    return new this.constructor().copy(this, e21);
  }
  copy(e21, t2 = true) {
    if (this.name = e21.name, this.up.copy(e21.up), this.position.copy(e21.position), this.rotation.order = e21.rotation.order, this.quaternion.copy(e21.quaternion), this.scale.copy(e21.scale), this.pivot = e21.pivot === null ? null : e21.pivot.clone(), this.matrix.copy(e21.matrix), this.matrixWorld.copy(e21.matrixWorld), this.matrixAutoUpdate = e21.matrixAutoUpdate, this.matrixWorldAutoUpdate = e21.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e21.matrixWorldNeedsUpdate, this.layers.mask = e21.layers.mask, this.visible = e21.visible, this.castShadow = e21.castShadow, this.receiveShadow = e21.receiveShadow, this.frustumCulled = e21.frustumCulled, this.renderOrder = e21.renderOrder, this.static = e21.static, this.animations = e21.animations.slice(), this.userData = JSON.parse(JSON.stringify(e21.userData)), t2 === true) for (let t3 = 0; t3 < e21.children.length; t3++) {
      let n2 = e21.children[t3];
      this.add(n2.clone());
    }
    return this;
  }
  dispose() {
    this.dispatchEvent({
      type: `dispose`
    });
  }
};
sn.DEFAULT_UP = new U(0, 1, 0), sn.DEFAULT_MATRIX_AUTO_UPDATE = true, sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
var cn = class extends sn {
  constructor() {
    super(), this.isGroup = true, this.type = `Group`;
  }
};
var ln = {
  type: `move`
};
var un = class {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new cn(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = {
      pinching: false
    }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new cn(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new U(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new U()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new cn(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new U(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new U(), this._grip.eventsEnabled = false), this._grip;
  }
  dispatchEvent(e21) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e21), this._grip !== null && this._grip.dispatchEvent(e21), this._hand !== null && this._hand.dispatchEvent(e21), this;
  }
  connect(e21) {
    if (e21 && e21.hand) {
      let t2 = this._hand;
      if (t2) for (let n2 of e21.hand.values()) this._getHandJoint(t2, n2);
    }
    return this.dispatchEvent({
      type: `connected`,
      data: e21
    }), this;
  }
  disconnect(e21) {
    return this.dispatchEvent({
      type: `disconnected`,
      data: e21
    }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(e21, t2, n2) {
    let r3 = null, i2 = null, a2 = null, o2 = this._targetRay, s2 = this._grip, c2 = this._hand;
    if (e21 && t2.session.visibilityState !== `visible-blurred`) {
      if (c2 && e21.hand) {
        a2 = true;
        for (let r5 of e21.hand.values()) {
          let e22 = t2.getJointPose(r5, n2), i4 = this._getHandJoint(c2, r5);
          e22 !== null && (i4.matrix.fromArray(e22.transform.matrix), i4.matrix.decompose(i4.position, i4.quaternion, i4.scale), i4.matrixWorldNeedsUpdate = true, i4.jointRadius = e22.radius), i4.visible = e22 !== null;
        }
        let r4 = c2.joints[`index-finger-tip`], i3 = c2.joints[`thumb-tip`], o3 = r4.position.distanceTo(i3.position);
        c2.inputState.pinching && o3 > 0.025 ? (c2.inputState.pinching = false, this.dispatchEvent({
          type: `pinchend`,
          handedness: e21.handedness,
          target: this
        })) : !c2.inputState.pinching && o3 <= 0.015 && (c2.inputState.pinching = true, this.dispatchEvent({
          type: `pinchstart`,
          handedness: e21.handedness,
          target: this
        }));
      } else s2 !== null && e21.gripSpace && (i2 = t2.getPose(e21.gripSpace, n2), i2 !== null && (s2.matrix.fromArray(i2.transform.matrix), s2.matrix.decompose(s2.position, s2.quaternion, s2.scale), s2.matrixWorldNeedsUpdate = true, i2.linearVelocity ? (s2.hasLinearVelocity = true, s2.linearVelocity.copy(i2.linearVelocity)) : s2.hasLinearVelocity = false, i2.angularVelocity ? (s2.hasAngularVelocity = true, s2.angularVelocity.copy(i2.angularVelocity)) : s2.hasAngularVelocity = false, s2.eventsEnabled && s2.dispatchEvent({
        type: `gripUpdated`,
        data: e21,
        target: this
      })));
      o2 !== null && (r3 = t2.getPose(e21.targetRaySpace, n2), r3 === null && i2 !== null && (r3 = i2), r3 !== null && (o2.matrix.fromArray(r3.transform.matrix), o2.matrix.decompose(o2.position, o2.quaternion, o2.scale), o2.matrixWorldNeedsUpdate = true, r3.linearVelocity ? (o2.hasLinearVelocity = true, o2.linearVelocity.copy(r3.linearVelocity)) : o2.hasLinearVelocity = false, r3.angularVelocity ? (o2.hasAngularVelocity = true, o2.angularVelocity.copy(r3.angularVelocity)) : o2.hasAngularVelocity = false, this.dispatchEvent(ln)));
    }
    return o2 !== null && (o2.visible = r3 !== null), s2 !== null && (s2.visible = i2 !== null), c2 !== null && (c2.visible = a2 !== null), this;
  }
  _getHandJoint(e21, t2) {
    if (e21.joints[t2.jointName] === void 0) {
      let n2 = new cn();
      n2.matrixAutoUpdate = false, n2.visible = false, e21.joints[t2.jointName] = n2, e21.add(n2);
    }
    return e21.joints[t2.jointName];
  }
};
var dn = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
var fn = {
  h: 0,
  s: 0,
  l: 0
};
var pn = {
  h: 0,
  s: 0,
  l: 0
};
function mn(e21, t2, n2) {
  return n2 < 0 && (n2 += 1), n2 > 1 && --n2, n2 < 1 / 6 ? e21 + (t2 - e21) * 6 * n2 : n2 < 1 / 2 ? t2 : n2 < 2 / 3 ? e21 + (t2 - e21) * 6 * (2 / 3 - n2) : e21;
}
var K = class {
  constructor(e21, t2, n2) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e21, t2, n2);
  }
  set(e21, t2, n2) {
    if (t2 === void 0 && n2 === void 0) {
      let t3 = e21;
      t3 && t3.isColor ? this.copy(t3) : typeof t3 == `number` ? this.setHex(t3) : typeof t3 == `string` && this.setStyle(t3);
    } else this.setRGB(e21, t2, n2);
    return this;
  }
  setScalar(e21) {
    return this.r = e21, this.g = e21, this.b = e21, this;
  }
  setHex(e21, t2 = ze) {
    return e21 = Math.floor(e21), this.r = (e21 >> 16 & 255) / 255, this.g = (e21 >> 8 & 255) / 255, this.b = (e21 & 255) / 255, G.colorSpaceToWorking(this, t2), this;
  }
  setRGB(e21, t2, n2, r3 = G.workingColorSpace) {
    return this.r = e21, this.g = t2, this.b = n2, G.colorSpaceToWorking(this, r3), this;
  }
  setHSL(e21, t2, n2, r3 = G.workingColorSpace) {
    if (e21 = at(e21, 1), t2 = V(t2, 0, 1), n2 = V(n2, 0, 1), t2 === 0) this.r = this.g = this.b = n2;
    else {
      let r4 = n2 <= 0.5 ? n2 * (1 + t2) : n2 + t2 - n2 * t2, i2 = 2 * n2 - r4;
      this.r = mn(i2, r4, e21 + 1 / 3), this.g = mn(i2, r4, e21), this.b = mn(i2, r4, e21 - 1 / 3);
    }
    return G.colorSpaceToWorking(this, r3), this;
  }
  setStyle(e21, t2 = ze) {
    function n2(t3) {
      t3 !== void 0 && parseFloat(t3) < 1 && z(`Color: Alpha component of ` + e21 + ` will be ignored.`);
    }
    let r3;
    if (r3 = /^(\w+)\(([^\)]*)\)/.exec(e21)) {
      let i2, a2 = r3[1], o2 = r3[2];
      switch (a2) {
        case `rgb`:
        case `rgba`:
          if (i2 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o2)) return n2(i2[4]), this.setRGB(Math.min(255, parseInt(i2[1], 10)) / 255, Math.min(255, parseInt(i2[2], 10)) / 255, Math.min(255, parseInt(i2[3], 10)) / 255, t2);
          if (i2 = /^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o2)) return n2(i2[4]), this.setRGB(Math.min(100, parseFloat(i2[1])) / 100, Math.min(100, parseFloat(i2[2])) / 100, Math.min(100, parseFloat(i2[3])) / 100, t2);
          break;
        case `hsl`:
        case `hsla`:
          if (i2 = /^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o2)) return n2(i2[4]), this.setHSL(parseFloat(i2[1]) / 360, parseFloat(i2[2]) / 100, parseFloat(i2[3]) / 100, t2);
          break;
        default:
          z(`Color: Unknown color model ` + e21);
      }
    } else if (r3 = /^\#([A-Fa-f\d]+)$/.exec(e21)) {
      let n3 = r3[1], i2 = n3.length;
      if (i2 === 3) return this.setRGB(parseInt(n3.charAt(0), 16) / 15, parseInt(n3.charAt(1), 16) / 15, parseInt(n3.charAt(2), 16) / 15, t2);
      if (i2 === 6) return this.setHex(parseInt(n3, 16), t2);
      z(`Color: Invalid hex color ` + e21);
    } else if (e21 && e21.length > 0) return this.setColorName(e21, t2);
    return this;
  }
  setColorName(e21, t2 = ze) {
    let n2 = dn[e21.toLowerCase()];
    return n2 === void 0 ? z(`Color: Unknown color ` + e21) : this.setHex(n2, t2), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e21) {
    return this.r = e21.r, this.g = e21.g, this.b = e21.b, this;
  }
  copySRGBToLinear(e21) {
    return this.r = vt(e21.r), this.g = vt(e21.g), this.b = vt(e21.b), this;
  }
  copyLinearToSRGB(e21) {
    return this.r = yt(e21.r), this.g = yt(e21.g), this.b = yt(e21.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e21 = ze) {
    return G.workingToColorSpace(hn.copy(this), e21), Math.round(V(hn.r * 255, 0, 255)) * 65536 + Math.round(V(hn.g * 255, 0, 255)) * 256 + Math.round(V(hn.b * 255, 0, 255));
  }
  getHexString(e21 = ze) {
    return (`000000` + this.getHex(e21).toString(16)).slice(-6);
  }
  getHSL(e21, t2 = G.workingColorSpace) {
    G.workingToColorSpace(hn.copy(this), t2);
    let n2 = hn.r, r3 = hn.g, i2 = hn.b, a2 = Math.max(n2, r3, i2), o2 = Math.min(n2, r3, i2), s2, c2, l2 = (o2 + a2) / 2;
    if (o2 === a2) s2 = 0, c2 = 0;
    else {
      let e22 = a2 - o2;
      switch (c2 = l2 <= 0.5 ? e22 / (a2 + o2) : e22 / (2 - a2 - o2), a2) {
        case n2:
          s2 = (r3 - i2) / e22 + (r3 < i2 ? 6 : 0);
          break;
        case r3:
          s2 = (i2 - n2) / e22 + 2;
          break;
        case i2:
          s2 = (n2 - r3) / e22 + 4;
      }
      s2 /= 6;
    }
    return e21.h = s2, e21.s = c2, e21.l = l2, e21;
  }
  getRGB(e21, t2 = G.workingColorSpace) {
    return G.workingToColorSpace(hn.copy(this), t2), e21.r = hn.r, e21.g = hn.g, e21.b = hn.b, e21;
  }
  getStyle(e21 = ze) {
    G.workingToColorSpace(hn.copy(this), e21);
    let t2 = hn.r, n2 = hn.g, r3 = hn.b;
    return e21 === `srgb` ? `rgb(${Math.round(t2 * 255)},${Math.round(n2 * 255)},${Math.round(r3 * 255)})` : `color(${e21} ${t2.toFixed(3)} ${n2.toFixed(3)} ${r3.toFixed(3)})`;
  }
  offsetHSL(e21, t2, n2) {
    return this.getHSL(fn), this.setHSL(fn.h + e21, fn.s + t2, fn.l + n2);
  }
  add(e21) {
    return this.r += e21.r, this.g += e21.g, this.b += e21.b, this;
  }
  addColors(e21, t2) {
    return this.r = e21.r + t2.r, this.g = e21.g + t2.g, this.b = e21.b + t2.b, this;
  }
  addScalar(e21) {
    return this.r += e21, this.g += e21, this.b += e21, this;
  }
  sub(e21) {
    return this.r = Math.max(0, this.r - e21.r), this.g = Math.max(0, this.g - e21.g), this.b = Math.max(0, this.b - e21.b), this;
  }
  multiply(e21) {
    return this.r *= e21.r, this.g *= e21.g, this.b *= e21.b, this;
  }
  multiplyScalar(e21) {
    return this.r *= e21, this.g *= e21, this.b *= e21, this;
  }
  lerp(e21, t2) {
    return this.r += (e21.r - this.r) * t2, this.g += (e21.g - this.g) * t2, this.b += (e21.b - this.b) * t2, this;
  }
  lerpColors(e21, t2, n2) {
    return this.r = e21.r + (t2.r - e21.r) * n2, this.g = e21.g + (t2.g - e21.g) * n2, this.b = e21.b + (t2.b - e21.b) * n2, this;
  }
  lerpHSL(e21, t2) {
    this.getHSL(fn), e21.getHSL(pn);
    let n2 = ot(fn.h, pn.h, t2), r3 = ot(fn.s, pn.s, t2), i2 = ot(fn.l, pn.l, t2);
    return this.setHSL(n2, r3, i2), this;
  }
  setFromVector3(e21) {
    return this.r = e21.x, this.g = e21.y, this.b = e21.z, this;
  }
  applyMatrix3(e21) {
    let t2 = this.r, n2 = this.g, r3 = this.b, i2 = e21.elements;
    return this.r = i2[0] * t2 + i2[3] * n2 + i2[6] * r3, this.g = i2[1] * t2 + i2[4] * n2 + i2[7] * r3, this.b = i2[2] * t2 + i2[5] * n2 + i2[8] * r3, this;
  }
  equals(e21) {
    return e21.r === this.r && e21.g === this.g && e21.b === this.b;
  }
  fromArray(e21, t2 = 0) {
    return this.r = e21[t2], this.g = e21[t2 + 1], this.b = e21[t2 + 2], this;
  }
  toArray(e21 = [], t2 = 0) {
    return e21[t2] = this.r, e21[t2 + 1] = this.g, e21[t2 + 2] = this.b, e21;
  }
  fromBufferAttribute(e21, t2) {
    return this.r = e21.getX(t2), this.g = e21.getY(t2), this.b = e21.getZ(t2), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
};
var hn = new K();
K.NAMES = dn;
var gn = class extends sn {
  constructor() {
    super(), this.isScene = true, this.type = `Scene`, this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Ut(), this.environmentIntensity = 1, this.environmentRotation = new Ut(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < `u` && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`, {
      detail: this
    }));
  }
  copy(e21, t2) {
    return super.copy(e21, t2), this.background = e21.background === null ? null : e21.background.clone(), this.environment = e21.environment === null ? null : e21.environment.clone(), this.fog = e21.fog === null ? null : e21.fog.clone(), this.backgroundBlurriness = e21.backgroundBlurriness, this.backgroundIntensity = e21.backgroundIntensity, this.backgroundRotation.copy(e21.backgroundRotation), this.environmentIntensity = e21.environmentIntensity, this.environmentRotation.copy(e21.environmentRotation), this.overrideMaterial = e21.overrideMaterial === null ? null : e21.overrideMaterial.clone(), this.matrixAutoUpdate = e21.matrixAutoUpdate, this;
  }
  toJSON(e21) {
    let t2 = super.toJSON(e21);
    return this.fog !== null && (t2.object.fog = this.fog.toJSON()), t2.object.backgroundBlurriness = this.backgroundBlurriness, t2.object.backgroundIntensity = this.backgroundIntensity, t2.object.backgroundRotation = this.backgroundRotation.toArray(), t2.object.environmentIntensity = this.environmentIntensity, t2.object.environmentRotation = this.environmentRotation.toArray(), t2;
  }
};
var _n = new U();
var vn = new U();
var yn = new U();
var bn = new U();
var xn = new U();
var Sn = new U();
var Cn = new U();
var wn = new U();
var Tn = new U();
var En = new U();
var Dn = new Ot();
var On = new Ot();
var kn = new Ot();
var An = class e5 {
  constructor(e21 = new U(), t2 = new U(), n2 = new U()) {
    this.a = e21, this.b = t2, this.c = n2;
  }
  static getNormal(e21, t2, n2, r3) {
    r3.subVectors(n2, t2), _n.subVectors(e21, t2), r3.cross(_n);
    let i2 = r3.lengthSq();
    return i2 > 0 ? r3.multiplyScalar(1 / Math.sqrt(i2)) : r3.set(0, 0, 0);
  }
  static getBarycoord(e21, t2, n2, r3, i2) {
    _n.subVectors(r3, t2), vn.subVectors(n2, t2), yn.subVectors(e21, t2);
    let a2 = _n.dot(_n), o2 = _n.dot(vn), s2 = _n.dot(yn), c2 = vn.dot(vn), l2 = vn.dot(yn), u2 = a2 * c2 - o2 * o2;
    if (u2 === 0) return i2.set(0, 0, 0), null;
    let d2 = 1 / u2, f2 = (c2 * s2 - o2 * l2) * d2, p2 = (a2 * l2 - o2 * s2) * d2;
    return i2.set(1 - f2 - p2, p2, f2);
  }
  static containsPoint(e21, t2, n2, r3) {
    return this.getBarycoord(e21, t2, n2, r3, bn) !== null && bn.x >= 0 && bn.y >= 0 && bn.x + bn.y <= 1;
  }
  static getInterpolation(e21, t2, n2, r3, i2, a2, o2, s2) {
    return this.getBarycoord(e21, t2, n2, r3, bn) === null ? (s2.x = 0, s2.y = 0, `z` in s2 && (s2.z = 0), `w` in s2 && (s2.w = 0), null) : (s2.setScalar(0), s2.addScaledVector(i2, bn.x), s2.addScaledVector(a2, bn.y), s2.addScaledVector(o2, bn.z), s2);
  }
  static getInterpolatedAttribute(e21, t2, n2, r3, i2, a2) {
    return Dn.setScalar(0), On.setScalar(0), kn.setScalar(0), Dn.fromBufferAttribute(e21, t2), On.fromBufferAttribute(e21, n2), kn.fromBufferAttribute(e21, r3), a2.setScalar(0), a2.addScaledVector(Dn, i2.x), a2.addScaledVector(On, i2.y), a2.addScaledVector(kn, i2.z), a2;
  }
  static isFrontFacing(e21, t2, n2, r3) {
    return _n.subVectors(n2, t2), vn.subVectors(e21, t2), _n.cross(vn).dot(r3) < 0;
  }
  set(e21, t2, n2) {
    return this.a.copy(e21), this.b.copy(t2), this.c.copy(n2), this;
  }
  setFromPointsAndIndices(e21, t2, n2, r3) {
    return this.a.copy(e21[t2]), this.b.copy(e21[n2]), this.c.copy(e21[r3]), this;
  }
  setFromAttributeAndIndices(e21, t2, n2, r3) {
    return this.a.fromBufferAttribute(e21, t2), this.b.fromBufferAttribute(e21, n2), this.c.fromBufferAttribute(e21, r3), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e21) {
    return this.a.copy(e21.a), this.b.copy(e21.b), this.c.copy(e21.c), this;
  }
  getArea() {
    return _n.subVectors(this.c, this.b), vn.subVectors(this.a, this.b), _n.cross(vn).length() * 0.5;
  }
  getMidpoint(e21) {
    return e21.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t2) {
    return e5.getNormal(this.a, this.b, this.c, t2);
  }
  getPlane(e21) {
    return e21.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t2, n2) {
    return e5.getBarycoord(t2, this.a, this.b, this.c, n2);
  }
  getInterpolation(t2, n2, r3, i2, a2) {
    return e5.getInterpolation(t2, this.a, this.b, this.c, n2, r3, i2, a2);
  }
  containsPoint(t2) {
    return e5.containsPoint(t2, this.a, this.b, this.c);
  }
  isFrontFacing(t2) {
    return e5.isFrontFacing(this.a, this.b, this.c, t2);
  }
  intersectsBox(e21) {
    return e21.intersectsTriangle(this);
  }
  closestPointToPoint(e21, t2) {
    let n2 = this.a, r3 = this.b, i2 = this.c, a2, o2;
    xn.subVectors(r3, n2), Sn.subVectors(i2, n2), wn.subVectors(e21, n2);
    let s2 = xn.dot(wn), c2 = Sn.dot(wn);
    if (s2 <= 0 && c2 <= 0) return t2.copy(n2);
    Tn.subVectors(e21, r3);
    let l2 = xn.dot(Tn), u2 = Sn.dot(Tn);
    if (l2 >= 0 && u2 <= l2) return t2.copy(r3);
    let d2 = s2 * u2 - l2 * c2;
    if (d2 <= 0 && s2 >= 0 && l2 <= 0 && s2 - l2 > 0) return a2 = s2 / (s2 - l2), t2.copy(n2).addScaledVector(xn, a2);
    En.subVectors(e21, i2);
    let f2 = xn.dot(En), p2 = Sn.dot(En);
    if (p2 >= 0 && f2 <= p2) return t2.copy(i2);
    let m2 = f2 * c2 - s2 * p2;
    if (m2 <= 0 && c2 >= 0 && p2 <= 0) return o2 = c2 / (c2 - p2), t2.copy(n2).addScaledVector(Sn, o2);
    let h2 = l2 * p2 - f2 * u2;
    if (h2 <= 0 && u2 - l2 >= 0 && f2 - p2 >= 0) return Cn.subVectors(i2, r3), o2 = (u2 - l2) / (u2 - l2 + (f2 - p2)), t2.copy(r3).addScaledVector(Cn, o2);
    let g2 = 1 / (h2 + m2 + d2);
    return a2 = m2 * g2, o2 = d2 * g2, t2.copy(n2).addScaledVector(xn, a2).addScaledVector(Sn, o2);
  }
  equals(e21) {
    return e21.a.equals(this.a) && e21.b.equals(this.b) && e21.c.equals(this.c);
  }
};
var jn = class {
  constructor(e21 = new U(1 / 0, 1 / 0, 1 / 0), t2 = new U(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e21, this.max = t2;
  }
  set(e21, t2) {
    return this.min.copy(e21), this.max.copy(t2), this;
  }
  setFromArray(e21) {
    this.makeEmpty();
    for (let t2 = 0, n2 = e21.length; t2 < n2; t2 += 3) this.expandByPoint(Nn.fromArray(e21, t2));
    return this;
  }
  setFromBufferAttribute(e21) {
    this.makeEmpty();
    for (let t2 = 0, n2 = e21.count; t2 < n2; t2++) this.expandByPoint(Nn.fromBufferAttribute(e21, t2));
    return this;
  }
  setFromPoints(e21) {
    this.makeEmpty();
    for (let t2 = 0, n2 = e21.length; t2 < n2; t2++) this.expandByPoint(e21[t2]);
    return this;
  }
  setFromCenterAndSize(e21, t2) {
    let n2 = Nn.copy(t2).multiplyScalar(0.5);
    return this.min.copy(e21).sub(n2), this.max.copy(e21).add(n2), this;
  }
  setFromObject(e21, t2 = false) {
    return this.makeEmpty(), this.expandByObject(e21, t2);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e21) {
    return this.min.copy(e21.min), this.max.copy(e21.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e21) {
    return this.isEmpty() ? e21.set(0, 0, 0) : e21.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e21) {
    return this.isEmpty() ? e21.set(0, 0, 0) : e21.subVectors(this.max, this.min);
  }
  expandByPoint(e21) {
    return this.min.min(e21), this.max.max(e21), this;
  }
  expandByVector(e21) {
    return this.min.sub(e21), this.max.add(e21), this;
  }
  expandByScalar(e21) {
    return this.min.addScalar(-e21), this.max.addScalar(e21), this;
  }
  expandByObject(e21, t2 = false) {
    e21.updateWorldMatrix(false, false);
    let n2 = e21.geometry;
    if (n2 !== void 0) {
      let r4 = n2.getAttribute(`position`);
      if (t2 === true && r4 !== void 0 && e21.isInstancedMesh !== true && e21.isBatchedMesh !== true) for (let t3 = 0, n3 = r4.count; t3 < n3; t3++) e21.isMesh === true ? e21.getVertexPosition(t3, Nn) : Nn.fromBufferAttribute(r4, t3), Nn.applyMatrix4(e21.matrixWorld), this.expandByPoint(Nn);
      else e21.boundingBox === void 0 ? (n2.boundingBox === null && n2.computeBoundingBox(), Pn.copy(n2.boundingBox)) : (e21.boundingBox === null && e21.computeBoundingBox(), Pn.copy(e21.boundingBox)), Pn.applyMatrix4(e21.matrixWorld), this.union(Pn);
    }
    let r3 = e21.children;
    for (let e22 = 0, n3 = r3.length; e22 < n3; e22++) this.expandByObject(r3[e22], t2);
    return this;
  }
  containsPoint(e21) {
    return e21.x >= this.min.x && e21.x <= this.max.x && e21.y >= this.min.y && e21.y <= this.max.y && e21.z >= this.min.z && e21.z <= this.max.z;
  }
  containsBox(e21) {
    return this.min.x <= e21.min.x && e21.max.x <= this.max.x && this.min.y <= e21.min.y && e21.max.y <= this.max.y && this.min.z <= e21.min.z && e21.max.z <= this.max.z;
  }
  getParameter(e21, t2) {
    return t2.set((e21.x - this.min.x) / (this.max.x - this.min.x), (e21.y - this.min.y) / (this.max.y - this.min.y), (e21.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e21) {
    return e21.max.x >= this.min.x && e21.min.x <= this.max.x && e21.max.y >= this.min.y && e21.min.y <= this.max.y && e21.max.z >= this.min.z && e21.min.z <= this.max.z;
  }
  intersectsSphere(e21) {
    return this.clampPoint(e21.center, Nn), Nn.distanceToSquared(e21.center) <= e21.radius * e21.radius;
  }
  intersectsPlane(e21) {
    let t2, n2;
    return e21.normal.x > 0 ? (t2 = e21.normal.x * this.min.x, n2 = e21.normal.x * this.max.x) : (t2 = e21.normal.x * this.max.x, n2 = e21.normal.x * this.min.x), e21.normal.y > 0 ? (t2 += e21.normal.y * this.min.y, n2 += e21.normal.y * this.max.y) : (t2 += e21.normal.y * this.max.y, n2 += e21.normal.y * this.min.y), e21.normal.z > 0 ? (t2 += e21.normal.z * this.min.z, n2 += e21.normal.z * this.max.z) : (t2 += e21.normal.z * this.max.z, n2 += e21.normal.z * this.min.z), t2 <= -e21.constant && n2 >= -e21.constant;
  }
  intersectsTriangle(e21) {
    if (this.isEmpty()) return false;
    this.getCenter(Vn), Hn.subVectors(this.max, Vn), Fn.subVectors(e21.a, Vn), In.subVectors(e21.b, Vn), Ln.subVectors(e21.c, Vn), Rn.subVectors(In, Fn), zn.subVectors(Ln, In), Bn.subVectors(Fn, Ln);
    let t2 = [0, -Rn.z, Rn.y, 0, -zn.z, zn.y, 0, -Bn.z, Bn.y, Rn.z, 0, -Rn.x, zn.z, 0, -zn.x, Bn.z, 0, -Bn.x, -Rn.y, Rn.x, 0, -zn.y, zn.x, 0, -Bn.y, Bn.x, 0];
    return !Gn(t2, Fn, In, Ln, Hn) || (t2 = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Gn(t2, Fn, In, Ln, Hn)) ? false : (Un.crossVectors(Rn, zn), t2 = [Un.x, Un.y, Un.z], Gn(t2, Fn, In, Ln, Hn));
  }
  clampPoint(e21, t2) {
    return t2.copy(e21).clamp(this.min, this.max);
  }
  distanceToPoint(e21) {
    return this.clampPoint(e21, Nn).distanceTo(e21);
  }
  getBoundingSphere(e21) {
    return this.isEmpty() ? e21.makeEmpty() : (this.getCenter(e21.center), e21.radius = this.getSize(Nn).length() * 0.5), e21;
  }
  intersect(e21) {
    return this.min.max(e21.min), this.max.min(e21.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e21) {
    return this.min.min(e21.min), this.max.max(e21.max), this;
  }
  applyMatrix4(e21) {
    return this.isEmpty() || (Mn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e21), Mn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e21), Mn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e21), Mn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e21), Mn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e21), Mn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e21), Mn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e21), Mn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e21), this.setFromPoints(Mn)), this;
  }
  translate(e21) {
    return this.min.add(e21), this.max.add(e21), this;
  }
  equals(e21) {
    return e21.min.equals(this.min) && e21.max.equals(this.max);
  }
  toJSON() {
    return {
      min: this.min.toArray(),
      max: this.max.toArray()
    };
  }
  fromJSON(e21) {
    return this.min.fromArray(e21.min), this.max.fromArray(e21.max), this;
  }
};
var Mn = [new U(), new U(), new U(), new U(), new U(), new U(), new U(), new U()];
var Nn = new U();
var Pn = new jn();
var Fn = new U();
var In = new U();
var Ln = new U();
var Rn = new U();
var zn = new U();
var Bn = new U();
var Vn = new U();
var Hn = new U();
var Un = new U();
var Wn = new U();
function Gn(e21, t2, n2, r3, i2) {
  for (let a2 = 0, o2 = e21.length - 3; a2 <= o2; a2 += 3) {
    Wn.fromArray(e21, a2);
    let o3 = i2.x * Math.abs(Wn.x) + i2.y * Math.abs(Wn.y) + i2.z * Math.abs(Wn.z), s2 = t2.dot(Wn), c2 = n2.dot(Wn), l2 = r3.dot(Wn);
    if (Math.max(-Math.max(s2, c2, l2), Math.min(s2, c2, l2)) > o3) return false;
  }
  return true;
}
var Kn = new U();
var qn = new H();
var Jn = 0;
var Yn = class extends et {
  constructor(e21, t2, n2 = false) {
    if (super(), Array.isArray(e21)) throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);
    this.isBufferAttribute = true, Object.defineProperty(this, "id", {
      value: Jn++
    }), this.name = ``, this.array = e21, this.itemSize = t2, this.count = e21 === void 0 ? 0 : e21.length / t2, this.normalized = n2, this.usage = He, this.updateRanges = [], this.gpuType = h, this.version = 0, this._normalizationScale = e21 === void 0 ? void 0 : ct(e21);
  }
  onUploadCallback() {
  }
  set needsUpdate(e21) {
    e21 === true && this.version++;
  }
  setUsage(e21) {
    return this.usage = e21, this;
  }
  addUpdateRange(e21, t2) {
    this.updateRanges.push({
      start: e21,
      count: t2
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e21) {
    return this.name = e21.name, this.array = new e21.array.constructor(e21.array), this.itemSize = e21.itemSize, this.count = e21.count, this.normalized = e21.normalized, this.usage = e21.usage, this.gpuType = e21.gpuType, this._normalizationScale = e21._normalizationScale, this;
  }
  copyAt(e21, t2, n2) {
    e21 *= this.itemSize, n2 *= t2.itemSize;
    for (let r3 = 0, i2 = this.itemSize; r3 < i2; r3++) this.array[e21 + r3] = t2.array[n2 + r3];
    return this;
  }
  copyArray(e21) {
    return this.array.set(e21), this;
  }
  applyMatrix3(e21) {
    if (this.itemSize === 2) for (let t2 = 0, n2 = this.count; t2 < n2; t2++) qn.fromBufferAttribute(this, t2), qn.applyMatrix3(e21), this.setXY(t2, qn.x, qn.y);
    else if (this.itemSize === 3) for (let t2 = 0, n2 = this.count; t2 < n2; t2++) Kn.fromBufferAttribute(this, t2), Kn.applyMatrix3(e21), this.setXYZ(t2, Kn.x, Kn.y, Kn.z);
    return this;
  }
  applyMatrix4(e21) {
    for (let t2 = 0, n2 = this.count; t2 < n2; t2++) Kn.fromBufferAttribute(this, t2), Kn.applyMatrix4(e21), this.setXYZ(t2, Kn.x, Kn.y, Kn.z);
    return this;
  }
  applyNormalMatrix(e21) {
    for (let t2 = 0, n2 = this.count; t2 < n2; t2++) Kn.fromBufferAttribute(this, t2), Kn.applyNormalMatrix(e21), this.setXYZ(t2, Kn.x, Kn.y, Kn.z);
    return this;
  }
  transformDirection(e21) {
    for (let t2 = 0, n2 = this.count; t2 < n2; t2++) Kn.fromBufferAttribute(this, t2), Kn.transformDirection(e21), this.setXYZ(t2, Kn.x, Kn.y, Kn.z);
    return this;
  }
  set(e21, t2 = 0) {
    return this.array.set(e21, t2), this;
  }
  getComponent(e21, t2) {
    let n2 = this.array[e21 * this.itemSize + t2];
    return this.normalized && (n2 = this._denormalize(n2)), n2;
  }
  setComponent(e21, t2, n2) {
    return this.normalized && (n2 = this._normalize(n2)), this.array[e21 * this.itemSize + t2] = n2, this;
  }
  getX(e21) {
    let t2 = this.array[e21 * this.itemSize];
    return this.normalized && (t2 = this._denormalize(t2)), t2;
  }
  setX(e21, t2) {
    return this.normalized && (t2 = this._normalize(t2)), this.array[e21 * this.itemSize] = t2, this;
  }
  getY(e21) {
    let t2 = this.array[e21 * this.itemSize + 1];
    return this.normalized && (t2 = this._denormalize(t2)), t2;
  }
  setY(e21, t2) {
    return this.normalized && (t2 = this._normalize(t2)), this.array[e21 * this.itemSize + 1] = t2, this;
  }
  getZ(e21) {
    let t2 = this.array[e21 * this.itemSize + 2];
    return this.normalized && (t2 = this._denormalize(t2)), t2;
  }
  setZ(e21, t2) {
    return this.normalized && (t2 = this._normalize(t2)), this.array[e21 * this.itemSize + 2] = t2, this;
  }
  getW(e21) {
    let t2 = this.array[e21 * this.itemSize + 3];
    return this.normalized && (t2 = this._denormalize(t2)), t2;
  }
  setW(e21, t2) {
    return this.normalized && (t2 = this._normalize(t2)), this.array[e21 * this.itemSize + 3] = t2, this;
  }
  setXY(e21, t2, n2) {
    return e21 *= this.itemSize, this.normalized && (t2 = this._normalize(t2), n2 = this._normalize(n2)), this.array[e21 + 0] = t2, this.array[e21 + 1] = n2, this;
  }
  setXYZ(e21, t2, n2, r3) {
    return e21 *= this.itemSize, this.normalized && (t2 = this._normalize(t2), n2 = this._normalize(n2), r3 = this._normalize(r3)), this.array[e21 + 0] = t2, this.array[e21 + 1] = n2, this.array[e21 + 2] = r3, this;
  }
  setXYZW(e21, t2, n2, r3, i2) {
    return e21 *= this.itemSize, this.normalized && (t2 = this._normalize(t2), n2 = this._normalize(n2), r3 = this._normalize(r3), i2 = this._normalize(i2)), this.array[e21 + 0] = t2, this.array[e21 + 1] = n2, this.array[e21 + 2] = r3, this.array[e21 + 3] = i2, this;
  }
  onUpload(e21) {
    return this.onUploadCallback = e21, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    let e21 = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return e21.name = this.name, e21.usage = this.usage, e21.gpuType = this.gpuType, e21;
  }
  dispose() {
    this.dispatchEvent({
      type: `dispose`
    });
  }
  _denormalize(e21) {
    let t2 = this._normalizationScale;
    return t2 === void 0 ? lt(e21, this.array) : Math.max(e21 / t2, -1);
  }
  _normalize(e21) {
    let t2 = this._normalizationScale;
    return t2 === void 0 ? ut(e21, this.array) : Math.round(e21 * t2);
  }
};
var Xn = class extends Yn {
  constructor(e21, t2, n2) {
    super(new Uint16Array(e21), t2, n2);
  }
};
var Zn = class extends Yn {
  constructor(e21, t2, n2) {
    super(new Uint32Array(e21), t2, n2);
  }
};
var Qn = class extends Yn {
  constructor(e21, t2, n2) {
    super(new Float32Array(e21), t2, n2);
  }
};
var $n = new jn();
var er = new U();
var tr = new U();
var nr = class {
  constructor(e21 = new U(), t2 = -1) {
    this.isSphere = true, this.center = e21, this.radius = t2;
  }
  set(e21, t2) {
    return this.center.copy(e21), this.radius = t2, this;
  }
  setFromPoints(e21, t2) {
    let n2 = this.center;
    t2 === void 0 ? $n.setFromPoints(e21).getCenter(n2) : n2.copy(t2);
    let r3 = 0;
    for (let t3 = 0, i2 = e21.length; t3 < i2; t3++) r3 = Math.max(r3, n2.distanceToSquared(e21[t3]));
    return this.radius = Math.sqrt(r3), this;
  }
  copy(e21) {
    return this.center.copy(e21.center), this.radius = e21.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e21) {
    return e21.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e21) {
    return e21.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e21) {
    let t2 = this.radius + e21.radius;
    return e21.center.distanceToSquared(this.center) <= t2 * t2;
  }
  intersectsBox(e21) {
    return e21.intersectsSphere(this);
  }
  intersectsPlane(e21) {
    return Math.abs(e21.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e21, t2) {
    let n2 = this.center.distanceToSquared(e21);
    return t2.copy(e21), n2 > this.radius * this.radius && (t2.sub(this.center).normalize(), t2.multiplyScalar(this.radius).add(this.center)), t2;
  }
  getBoundingBox(e21) {
    return this.isEmpty() ? (e21.makeEmpty(), e21) : (e21.set(this.center, this.center), e21.expandByScalar(this.radius), e21);
  }
  applyMatrix4(e21) {
    return this.center.applyMatrix4(e21), this.radius *= e21.getMaxScaleOnAxis(), this;
  }
  translate(e21) {
    return this.center.add(e21), this;
  }
  expandByPoint(e21) {
    if (this.isEmpty()) return this.center.copy(e21), this.radius = 0, this;
    er.subVectors(e21, this.center);
    let t2 = er.lengthSq();
    if (t2 > this.radius * this.radius) {
      let e22 = Math.sqrt(t2), n2 = (e22 - this.radius) * 0.5;
      this.center.addScaledVector(er, n2 / e22), this.radius += n2;
    }
    return this;
  }
  union(e21) {
    return e21.isEmpty() ? this : this.isEmpty() ? (this.copy(e21), this) : (this.center.equals(e21.center) === true ? this.radius = Math.max(this.radius, e21.radius) : (tr.subVectors(e21.center, this.center).setLength(e21.radius), this.expandByPoint(er.copy(e21.center).add(tr)), this.expandByPoint(er.copy(e21.center).sub(tr))), this);
  }
  equals(e21) {
    return e21.center.equals(this.center) && e21.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return {
      radius: this.radius,
      center: this.center.toArray()
    };
  }
  fromJSON(e21) {
    return this.radius = e21.radius, this.center.fromArray(e21.center), this;
  }
};
var rr = 0;
var ir = new Nt();
var ar = new sn();
var or = new U();
var sr = new jn();
var cr = new jn();
var lr = new U();
var ur = class e6 extends et {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", {
      value: rr++
    }), this.uuid = it(), this.name = ``, this.type = `BufferGeometry`, this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
      start: 0,
      count: 1 / 0
    }, this.userData = {}, this._transformed = false;
  }
  getIndex() {
    return this.index;
  }
  setIndex(e21) {
    return this.index = Array.isArray(e21) ? new (We(e21) ? Zn : Xn)(e21, 1) : e21, this;
  }
  setIndirect(e21, t2 = 0) {
    return this.indirect = e21, this.indirectOffset = t2, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e21) {
    return this.attributes[e21];
  }
  setAttribute(e21, t2) {
    return this.attributes[e21] = t2, this;
  }
  deleteAttribute(e21) {
    return delete this.attributes[e21], this;
  }
  hasAttribute(e21) {
    return this.attributes[e21] !== void 0;
  }
  addGroup(e21, t2, n2 = 0) {
    this.groups.push({
      start: e21,
      count: t2,
      materialIndex: n2
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e21, t2) {
    this.drawRange.start = e21, this.drawRange.count = t2;
  }
  applyMatrix4(e21) {
    let t2 = this.attributes.position;
    t2 !== void 0 && (t2.applyMatrix4(e21), t2.needsUpdate = true);
    let n2 = this.attributes.normal;
    if (n2 !== void 0) {
      let t3 = new W().getNormalMatrix(e21);
      n2.applyNormalMatrix(t3), n2.needsUpdate = true;
    }
    let r3 = this.attributes.tangent;
    return r3 !== void 0 && (r3.transformDirection(e21), r3.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this._transformed = true, this;
  }
  applyQuaternion(e21) {
    return ir.makeRotationFromQuaternion(e21), this.applyMatrix4(ir), this;
  }
  rotateX(e21) {
    return ir.makeRotationX(e21), this.applyMatrix4(ir), this;
  }
  rotateY(e21) {
    return ir.makeRotationY(e21), this.applyMatrix4(ir), this;
  }
  rotateZ(e21) {
    return ir.makeRotationZ(e21), this.applyMatrix4(ir), this;
  }
  translate(e21, t2, n2) {
    return ir.makeTranslation(e21, t2, n2), this.applyMatrix4(ir), this;
  }
  scale(e21, t2, n2) {
    return ir.makeScale(e21, t2, n2), this.applyMatrix4(ir), this;
  }
  lookAt(e21) {
    return ar.lookAt(e21), ar.updateMatrix(), this.applyMatrix4(ar.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(or).negate(), this.translate(or.x, or.y, or.z), this;
  }
  setFromPoints(e21) {
    let t2 = this.getAttribute(`position`);
    if (t2 === void 0) {
      let t3 = [];
      for (let n2 = 0, r3 = e21.length; n2 < r3; n2++) {
        let r4 = e21[n2];
        t3.push(r4.x, r4.y, r4.z || 0);
      }
      this.setAttribute(`position`, new Qn(t3, 3));
    } else {
      let n2 = Math.min(e21.length, t2.count);
      for (let r3 = 0; r3 < n2; r3++) {
        let n3 = e21[r3];
        t2.setXYZ(r3, n3.x, n3.y, n3.z || 0);
      }
      e21.length > t2.count && z(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`), t2.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new jn());
    let e21 = this.attributes.position, t2 = this.morphAttributes.position;
    if (e21 && e21.isGLBufferAttribute) B(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`, this), this.boundingBox.set(new U(-1 / 0, -1 / 0, -1 / 0), new U(1 / 0, 1 / 0, 1 / 0));
    else {
      if (e21 !== void 0) {
        if (this.boundingBox.setFromBufferAttribute(e21), t2) for (let e22 = 0, n2 = t2.length; e22 < n2; e22++) {
          let n3 = t2[e22];
          sr.setFromBufferAttribute(n3), this.morphTargetsRelative ? (lr.addVectors(this.boundingBox.min, sr.min), this.boundingBox.expandByPoint(lr), lr.addVectors(this.boundingBox.max, sr.max), this.boundingBox.expandByPoint(lr)) : (this.boundingBox.expandByPoint(sr.min), this.boundingBox.expandByPoint(sr.max));
        }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && B(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`, this);
    }
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new nr());
    let e21 = this.attributes.position, t2 = this.morphAttributes.position;
    if (e21 && e21.isGLBufferAttribute) B(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`, this), this.boundingSphere.set(new U(), 1 / 0);
    else if (e21) {
      let n2 = this.boundingSphere.center;
      if (sr.setFromBufferAttribute(e21), t2) for (let e22 = 0, n3 = t2.length; e22 < n3; e22++) {
        let n4 = t2[e22];
        cr.setFromBufferAttribute(n4), this.morphTargetsRelative ? (lr.addVectors(sr.min, cr.min), sr.expandByPoint(lr), lr.addVectors(sr.max, cr.max), sr.expandByPoint(lr)) : (sr.expandByPoint(cr.min), sr.expandByPoint(cr.max));
      }
      sr.getCenter(n2);
      let r3 = 0;
      for (let t3 = 0, i2 = e21.count; t3 < i2; t3++) lr.fromBufferAttribute(e21, t3), r3 = Math.max(r3, n2.distanceToSquared(lr));
      if (t2) for (let i2 = 0, a2 = t2.length; i2 < a2; i2++) {
        let a3 = t2[i2], o2 = this.morphTargetsRelative;
        for (let t3 = 0, i3 = a3.count; t3 < i3; t3++) lr.fromBufferAttribute(a3, t3), o2 && (or.fromBufferAttribute(e21, t3), lr.add(or)), r3 = Math.max(r3, n2.distanceToSquared(lr));
      }
      this.boundingSphere.radius = Math.sqrt(r3), isNaN(this.boundingSphere.radius) && B(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`, this);
    }
  }
  computeTangents() {
    let e21 = this.index, t2 = this.attributes;
    if (e21 === null || t2.position === void 0 || t2.normal === void 0 || t2.uv === void 0) {
      B(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);
      return;
    }
    let n2 = t2.position, r3 = t2.normal, i2 = t2.uv, a2 = this.getAttribute(`tangent`);
    (a2 === void 0 || a2.count !== n2.count) && (a2 = new Yn(new Float32Array(4 * n2.count), 4), this.setAttribute(`tangent`, a2));
    let o2 = [], s2 = [], c2 = new Uint8Array(n2.count);
    for (let e22 = 0; e22 < n2.count; e22++) o2[e22] = new U(), s2[e22] = new U();
    let l2 = new U(), u2 = new U(), d2 = new U(), f2 = new H(), p2 = new H(), m2 = new H(), h2 = new U(), g2 = new U();
    function _2(e22, t3, r4) {
      c2[e22] = c2[t3] = c2[r4] = 1, l2.fromBufferAttribute(n2, e22), u2.fromBufferAttribute(n2, t3), d2.fromBufferAttribute(n2, r4), f2.fromBufferAttribute(i2, e22), p2.fromBufferAttribute(i2, t3), m2.fromBufferAttribute(i2, r4), u2.sub(l2), d2.sub(l2), p2.sub(f2), m2.sub(f2);
      let a3 = 1 / (p2.x * m2.y - m2.x * p2.y);
      isFinite(a3) && (h2.copy(u2).multiplyScalar(m2.y).addScaledVector(d2, -p2.y).multiplyScalar(a3), g2.copy(d2).multiplyScalar(p2.x).addScaledVector(u2, -m2.x).multiplyScalar(a3), o2[e22].add(h2), o2[t3].add(h2), o2[r4].add(h2), s2[e22].add(g2), s2[t3].add(g2), s2[r4].add(g2));
    }
    let v2 = this.groups;
    v2.length === 0 && (v2 = [{
      start: 0,
      count: e21.count
    }]);
    for (let t3 = 0, n3 = v2.length; t3 < n3; ++t3) {
      let n4 = v2[t3], r4 = n4.start, i3 = n4.count;
      for (let t4 = r4, n5 = r4 + i3; t4 < n5; t4 += 3) _2(e21.getX(t4 + 0), e21.getX(t4 + 1), e21.getX(t4 + 2));
    }
    let y2 = new U(), b2 = new U(), x2 = new U(), S2 = new U();
    function C2(e22) {
      x2.fromBufferAttribute(r3, e22), S2.copy(x2);
      let t3 = o2[e22];
      y2.copy(t3), y2.sub(x2.multiplyScalar(x2.dot(t3))).normalize(), b2.crossVectors(S2, t3);
      let n3 = b2.dot(s2[e22]) < 0 ? -1 : 1;
      a2.setXYZW(e22, y2.x, y2.y, y2.z, n3);
    }
    for (let e22 = 0, t3 = n2.count; e22 < t3; ++e22) c2[e22] && C2(e22);
    this._transformed = true;
  }
  computeVertexNormals() {
    let e21 = this.index, t2 = this.getAttribute(`position`);
    if (t2 !== void 0) {
      let n2 = this.getAttribute(`normal`);
      if (n2 === void 0 || n2.count !== t2.count) n2 = new Yn(new Float32Array(t2.count * 3), 3), this.setAttribute(`normal`, n2);
      else for (let e22 = 0, t3 = n2.count; e22 < t3; e22++) n2.setXYZ(e22, 0, 0, 0);
      let r3 = new U(), i2 = new U(), a2 = new U(), o2 = new U(), s2 = new U(), c2 = new U(), l2 = new U(), u2 = new U();
      if (e21) for (let d2 = 0, f2 = e21.count; d2 < f2; d2 += 3) {
        let f3 = e21.getX(d2 + 0), p2 = e21.getX(d2 + 1), m2 = e21.getX(d2 + 2);
        r3.fromBufferAttribute(t2, f3), i2.fromBufferAttribute(t2, p2), a2.fromBufferAttribute(t2, m2), l2.subVectors(a2, i2), u2.subVectors(r3, i2), l2.cross(u2), o2.fromBufferAttribute(n2, f3), s2.fromBufferAttribute(n2, p2), c2.fromBufferAttribute(n2, m2), o2.add(l2), s2.add(l2), c2.add(l2), n2.setXYZ(f3, o2.x, o2.y, o2.z), n2.setXYZ(p2, s2.x, s2.y, s2.z), n2.setXYZ(m2, c2.x, c2.y, c2.z);
      }
      else for (let e22 = 0, o3 = t2.count; e22 < o3; e22 += 3) r3.fromBufferAttribute(t2, e22 + 0), i2.fromBufferAttribute(t2, e22 + 1), a2.fromBufferAttribute(t2, e22 + 2), l2.subVectors(a2, i2), u2.subVectors(r3, i2), l2.cross(u2), n2.setXYZ(e22 + 0, l2.x, l2.y, l2.z), n2.setXYZ(e22 + 1, l2.x, l2.y, l2.z), n2.setXYZ(e22 + 2, l2.x, l2.y, l2.z);
      this.normalizeNormals(), n2.needsUpdate = true;
    }
  }
  normalizeNormals() {
    let e21 = this.attributes.normal;
    for (let t2 = 0, n2 = e21.count; t2 < n2; t2++) lr.fromBufferAttribute(e21, t2), lr.normalize(), e21.setXYZ(t2, lr.x, lr.y, lr.z);
  }
  toNonIndexed() {
    function t2(e21, t3) {
      let n3 = e21.array, r4 = e21.itemSize, i3 = e21.normalized, a3 = new n3.constructor(t3.length * r4), o3 = 0, s2 = 0;
      for (let i4 = 0, c2 = t3.length; i4 < c2; i4++) {
        o3 = e21.isInterleavedBufferAttribute ? t3[i4] * e21.data.stride + e21.offset : t3[i4] * r4;
        for (let e22 = 0; e22 < r4; e22++) a3[s2++] = n3[o3++];
      }
      return new Yn(a3, r4, i3);
    }
    if (this.index === null) return z(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`), this;
    let n2 = new e6(), r3 = this.index.array, i2 = this.attributes;
    for (let e21 in i2) {
      let a3 = i2[e21], o3 = t2(a3, r3);
      n2.setAttribute(e21, o3);
    }
    let a2 = this.morphAttributes;
    for (let e21 in a2) {
      let i3 = [], o3 = a2[e21];
      for (let e22 = 0, n3 = o3.length; e22 < n3; e22++) {
        let n4 = o3[e22], a3 = t2(n4, r3);
        i3.push(a3);
      }
      n2.morphAttributes[e21] = i3;
    }
    n2.morphTargetsRelative = this.morphTargetsRelative;
    let o2 = this.groups;
    for (let e21 = 0, t3 = o2.length; e21 < t3; e21++) {
      let t4 = o2[e21];
      n2.addGroup(t4.start, t4.count, t4.materialIndex);
    }
    return n2;
  }
  toJSON() {
    let e21 = {
      metadata: {
        version: 4.7,
        type: `BufferGeometry`,
        generator: `BufferGeometry.toJSON`
      }
    };
    if (e21.uuid = this.uuid, e21.type = this.parameters !== void 0 && this._transformed === true ? `BufferGeometry` : this.type, e21.name = this.name, Object.keys(this.userData).length > 0 && (e21.userData = this.userData), this.parameters !== void 0 && this._transformed !== true) {
      let t3 = this.parameters;
      for (let n3 in t3) t3[n3] !== void 0 && (e21[n3] = t3[n3]);
      return e21;
    }
    e21.data = {
      attributes: {}
    };
    let t2 = this.index;
    t2 !== null && (e21.data.index = {
      type: t2.array.constructor.name,
      array: Array.prototype.slice.call(t2.array)
    });
    let n2 = this.attributes;
    for (let t3 in n2) {
      let r4 = n2[t3];
      e21.data.attributes[t3] = r4.toJSON(e21.data);
    }
    let r3 = {}, i2 = false;
    for (let t3 in this.morphAttributes) {
      let n3 = this.morphAttributes[t3], a3 = [];
      for (let t4 = 0, r4 = n3.length; t4 < r4; t4++) {
        let r5 = n3[t4];
        a3.push(r5.toJSON(e21.data));
      }
      a3.length > 0 && (r3[t3] = a3, i2 = true);
    }
    i2 && (e21.data.morphAttributes = r3, e21.data.morphTargetsRelative = this.morphTargetsRelative);
    let a2 = this.groups;
    a2.length > 0 && (e21.data.groups = JSON.parse(JSON.stringify(a2)));
    let o2 = this.boundingSphere;
    return o2 !== null && (e21.data.boundingSphere = o2.toJSON()), e21;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e21) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    let t2 = {};
    this.name = e21.name;
    let n2 = e21.index;
    n2 !== null && this.setIndex(n2.clone());
    let r3 = e21.attributes;
    for (let e22 in r3) {
      let n3 = r3[e22];
      this.setAttribute(e22, n3.clone(t2));
    }
    let i2 = e21.morphAttributes;
    for (let e22 in i2) {
      let n3 = [], r4 = i2[e22];
      for (let e23 = 0, i3 = r4.length; e23 < i3; e23++) n3.push(r4[e23].clone(t2));
      this.morphAttributes[e22] = n3;
    }
    this.morphTargetsRelative = e21.morphTargetsRelative;
    let a2 = e21.groups;
    for (let e22 = 0, t3 = a2.length; e22 < t3; e22++) {
      let t4 = a2[e22];
      this.addGroup(t4.start, t4.count, t4.materialIndex);
    }
    let o2 = e21.boundingBox;
    o2 !== null && (this.boundingBox = o2.clone());
    let s2 = e21.boundingSphere;
    return s2 !== null && (this.boundingSphere = s2.clone()), this.drawRange.start = e21.drawRange.start, this.drawRange.count = e21.drawRange.count, this.userData = e21.userData, this._transformed = e21._transformed, this;
  }
  dispose() {
    this.dispatchEvent({
      type: `dispose`
    });
  }
};
var dr = class {
  constructor(e21, t2) {
    this.isInterleavedBuffer = true, this.array = e21, this.stride = t2, this.count = e21 === void 0 ? 0 : e21.length / t2, this.usage = He, this.updateRanges = [], this.version = 0, this.uuid = it();
  }
  onUploadCallback() {
  }
  set needsUpdate(e21) {
    e21 === true && this.version++;
  }
  setUsage(e21) {
    return this.usage = e21, this;
  }
  addUpdateRange(e21, t2) {
    this.updateRanges.push({
      start: e21,
      count: t2
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e21) {
    return this.array = new e21.array.constructor(e21.array), this.count = e21.count, this.stride = e21.stride, this.usage = e21.usage, this;
  }
  copyAt(e21, t2, n2) {
    e21 *= this.stride, n2 *= t2.stride;
    for (let r3 = 0, i2 = this.stride; r3 < i2; r3++) this.array[e21 + r3] = t2.array[n2 + r3];
    return this;
  }
  set(e21, t2 = 0) {
    return this.array.set(e21, t2), this;
  }
  clone(e21) {
    e21.arrayBuffers === void 0 && (e21.arrayBuffers = {});
    let t2 = fr(this.array);
    e21.arrayBuffers[t2] === void 0 && (e21.arrayBuffers[t2] = this.array.slice(0).buffer);
    let n2 = new this.array.constructor(e21.arrayBuffers[t2]), r3 = new this.constructor(n2, this.stride);
    return r3.setUsage(this.usage), r3;
  }
  onUpload(e21) {
    return this.onUploadCallback = e21, this;
  }
  toJSON(e21) {
    e21.arrayBuffers === void 0 && (e21.arrayBuffers = {});
    let t2 = fr(this.array);
    e21.arrayBuffers[t2] === void 0 && (e21.arrayBuffers[t2] = Array.from(new Uint32Array(this.array.slice(0).buffer)));
    let n2 = {
      uuid: this.uuid,
      buffer: t2,
      type: this.array.constructor.name,
      stride: this.stride
    };
    return n2.usage = this.usage, n2;
  }
};
function fr(e21) {
  return e21.buffer._uuid === void 0 && (e21.buffer._uuid = it()), e21.byteOffset === 0 && e21.byteLength === e21.buffer.byteLength ? e21.buffer._uuid : e21.buffer._uuid + `:` + e21.byteOffset + `:` + e21.byteLength;
}
var pr = new U();
var mr = class e7 {
  constructor(e21, t2, n2, r3 = false) {
    this.isInterleavedBufferAttribute = true, this.name = ``, this.data = e21, this.itemSize = t2, this.offset = n2, this.normalized = r3, this._normalizationScale = e21 === void 0 ? void 0 : ct(e21.array);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e21) {
    this.data.needsUpdate = e21;
  }
  applyMatrix4(e21) {
    for (let t2 = 0, n2 = this.data.count; t2 < n2; t2++) pr.fromBufferAttribute(this, t2), pr.applyMatrix4(e21), this.setXYZ(t2, pr.x, pr.y, pr.z);
    return this;
  }
  applyNormalMatrix(e21) {
    for (let t2 = 0, n2 = this.count; t2 < n2; t2++) pr.fromBufferAttribute(this, t2), pr.applyNormalMatrix(e21), this.setXYZ(t2, pr.x, pr.y, pr.z);
    return this;
  }
  transformDirection(e21) {
    for (let t2 = 0, n2 = this.count; t2 < n2; t2++) pr.fromBufferAttribute(this, t2), pr.transformDirection(e21), this.setXYZ(t2, pr.x, pr.y, pr.z);
    return this;
  }
  getComponent(e21, t2) {
    let n2 = this.array[e21 * this.data.stride + this.offset + t2];
    return this.normalized && (n2 = this._denormalize(n2)), n2;
  }
  setComponent(e21, t2, n2) {
    return this.normalized && (n2 = this._normalize(n2)), this.data.array[e21 * this.data.stride + this.offset + t2] = n2, this;
  }
  setX(e21, t2) {
    return this.normalized && (t2 = this._normalize(t2)), this.data.array[e21 * this.data.stride + this.offset] = t2, this;
  }
  setY(e21, t2) {
    return this.normalized && (t2 = this._normalize(t2)), this.data.array[e21 * this.data.stride + this.offset + 1] = t2, this;
  }
  setZ(e21, t2) {
    return this.normalized && (t2 = this._normalize(t2)), this.data.array[e21 * this.data.stride + this.offset + 2] = t2, this;
  }
  setW(e21, t2) {
    return this.normalized && (t2 = this._normalize(t2)), this.data.array[e21 * this.data.stride + this.offset + 3] = t2, this;
  }
  getX(e21) {
    let t2 = this.data.array[e21 * this.data.stride + this.offset];
    return this.normalized && (t2 = this._denormalize(t2)), t2;
  }
  getY(e21) {
    let t2 = this.data.array[e21 * this.data.stride + this.offset + 1];
    return this.normalized && (t2 = this._denormalize(t2)), t2;
  }
  getZ(e21) {
    let t2 = this.data.array[e21 * this.data.stride + this.offset + 2];
    return this.normalized && (t2 = this._denormalize(t2)), t2;
  }
  getW(e21) {
    let t2 = this.data.array[e21 * this.data.stride + this.offset + 3];
    return this.normalized && (t2 = this._denormalize(t2)), t2;
  }
  setXY(e21, t2, n2) {
    return e21 = e21 * this.data.stride + this.offset, this.normalized && (t2 = this._normalize(t2), n2 = this._normalize(n2)), this.data.array[e21 + 0] = t2, this.data.array[e21 + 1] = n2, this;
  }
  setXYZ(e21, t2, n2, r3) {
    return e21 = e21 * this.data.stride + this.offset, this.normalized && (t2 = this._normalize(t2), n2 = this._normalize(n2), r3 = this._normalize(r3)), this.data.array[e21 + 0] = t2, this.data.array[e21 + 1] = n2, this.data.array[e21 + 2] = r3, this;
  }
  setXYZW(e21, t2, n2, r3, i2) {
    return e21 = e21 * this.data.stride + this.offset, this.normalized && (t2 = this._normalize(t2), n2 = this._normalize(n2), r3 = this._normalize(r3), i2 = this._normalize(i2)), this.data.array[e21 + 0] = t2, this.data.array[e21 + 1] = n2, this.data.array[e21 + 2] = r3, this.data.array[e21 + 3] = i2, this;
  }
  clone(t2) {
    if (t2 === void 0) {
      Ye(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);
      let e21 = [];
      for (let t3 = 0; t3 < this.count; t3++) {
        let n2 = t3 * this.data.stride + this.offset;
        for (let t4 = 0; t4 < this.itemSize; t4++) e21.push(this.data.array[n2 + t4]);
      }
      return new Yn(new this.array.constructor(e21), this.itemSize, this.normalized);
    }
    return t2.interleavedBuffers === void 0 && (t2.interleavedBuffers = {}), t2.interleavedBuffers[this.data.uuid] === void 0 && (t2.interleavedBuffers[this.data.uuid] = this.data.clone(t2)), new e7(t2.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e21) {
    if (e21 === void 0) {
      Ye(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);
      let e22 = [];
      for (let t2 = 0; t2 < this.count; t2++) {
        let n2 = t2 * this.data.stride + this.offset;
        for (let t3 = 0; t3 < this.itemSize; t3++) e22.push(this.data.array[n2 + t3]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: e22,
        normalized: this.normalized
      };
    }
    return e21.interleavedBuffers === void 0 && (e21.interleavedBuffers = {}), e21.interleavedBuffers[this.data.uuid] === void 0 && (e21.interleavedBuffers[this.data.uuid] = this.data.toJSON(e21)), {
      isInterleavedBufferAttribute: true,
      itemSize: this.itemSize,
      data: this.data.uuid,
      offset: this.offset,
      normalized: this.normalized
    };
  }
  _denormalize(e21) {
    let t2 = this._normalizationScale;
    return t2 === void 0 ? lt(e21, this.data.array) : Math.max(e21 / t2, -1);
  }
  _normalize(e21) {
    let t2 = this._normalizationScale;
    return t2 === void 0 ? ut(e21, this.data.array) : Math.round(e21 * t2);
  }
};
var hr = new U();
var gr = new U();
var _r = new W();
var vr = class {
  constructor(e21 = new U(1, 0, 0), t2 = 0) {
    this.isPlane = true, this.normal = e21, this.constant = t2;
  }
  set(e21, t2) {
    return this.normal.copy(e21), this.constant = t2, this;
  }
  setComponents(e21, t2, n2, r3) {
    return this.normal.set(e21, t2, n2), this.constant = r3, this;
  }
  setFromNormalAndCoplanarPoint(e21, t2) {
    return this.normal.copy(e21), this.constant = -t2.dot(this.normal), this;
  }
  setFromCoplanarPoints(e21, t2, n2) {
    let r3 = hr.subVectors(n2, t2).cross(gr.subVectors(e21, t2)).normalize();
    return this.setFromNormalAndCoplanarPoint(r3, e21), this;
  }
  copy(e21) {
    return this.normal.copy(e21.normal), this.constant = e21.constant, this;
  }
  normalize() {
    let e21 = 1 / this.normal.length();
    return this.normal.multiplyScalar(e21), this.constant *= e21, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e21) {
    return this.normal.dot(e21) + this.constant;
  }
  distanceToSphere(e21) {
    return this.distanceToPoint(e21.center) - e21.radius;
  }
  projectPoint(e21, t2) {
    return t2.copy(e21).addScaledVector(this.normal, -this.distanceToPoint(e21));
  }
  intersectLine(e21, t2, n2 = true) {
    let r3 = e21.delta(hr), i2 = this.normal.dot(r3);
    if (i2 === 0) return this.distanceToPoint(e21.start) === 0 ? t2.copy(e21.start) : null;
    let a2 = -(e21.start.dot(this.normal) + this.constant) / i2;
    return n2 === true && (a2 < 0 || a2 > 1) ? null : t2.copy(e21.start).addScaledVector(r3, a2);
  }
  intersectsLine(e21) {
    let t2 = this.distanceToPoint(e21.start), n2 = this.distanceToPoint(e21.end);
    return t2 < 0 && n2 > 0 || n2 < 0 && t2 > 0;
  }
  intersectsBox(e21) {
    return e21.intersectsPlane(this);
  }
  intersectsSphere(e21) {
    return e21.intersectsPlane(this);
  }
  coplanarPoint(e21) {
    return e21.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e21, t2) {
    let n2 = t2 || _r.getNormalMatrix(e21), r3 = this.coplanarPoint(hr).applyMatrix4(e21), i2 = this.normal.applyMatrix3(n2).normalize();
    return this.constant = -r3.dot(i2), this;
  }
  translate(e21) {
    return this.constant -= e21.dot(this.normal), this;
  }
  equals(e21) {
    return e21.normal.equals(this.normal) && e21.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return {
      normal: this.normal.toArray(),
      constant: this.constant
    };
  }
  fromJSON(e21) {
    return this.normal.fromArray(e21.normal), this.constant = e21.constant, this;
  }
};
var yr = 0;
var br = class extends et {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", {
      value: yr++
    }), this.uuid = it(), this.name = ``, this.type = `Material`, this.blending = 1, this.side = 0, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new K(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Ve, this.stencilZFail = Ve, this.stencilZPass = Ve, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e21) {
    this._alphaTest > 0 != e21 > 0 && this.version++, this._alphaTest = e21;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e21) {
    if (e21 !== void 0) for (let t2 in e21) {
      let n2 = e21[t2];
      if (n2 === void 0) {
        z(`Material: parameter '${t2}' has value of undefined.`);
        continue;
      }
      let r3 = this[t2];
      r3 === void 0 ? z(`Material: '${t2}' is not a property of THREE.${this.type}.`) : r3 && r3.isColor ? r3.set(n2) : r3 && r3.isVector2 && n2 && n2.isVector2 || r3 && r3.isEuler && n2 && n2.isEuler || r3 && r3.isVector3 && n2 && n2.isVector3 ? r3.copy(n2) : this[t2] = n2;
    }
  }
  toJSON(e21) {
    let t2 = e21 === void 0 || typeof e21 == `string`;
    t2 && (e21 = {
      textures: {},
      images: {}
    });
    let n2 = {
      metadata: {
        version: 4.7,
        type: `Material`,
        generator: `Material.toJSON`
      }
    };
    n2.uuid = this.uuid, n2.type = this.type, n2.blending = this.blending, n2.side = this.side, n2.shadowSide = this.shadowSide, n2.vertexColors = this.vertexColors, n2.opacity = this.opacity, n2.transparent = this.transparent, n2.blendSrc = this.blendSrc, n2.blendDst = this.blendDst, n2.blendEquation = this.blendEquation, n2.blendSrcAlpha = this.blendSrcAlpha, n2.blendDstAlpha = this.blendDstAlpha, n2.blendEquationAlpha = this.blendEquationAlpha, n2.blendColor = this.blendColor.getHex(), n2.blendAlpha = this.blendAlpha, n2.depthFunc = this.depthFunc, n2.depthTest = this.depthTest, n2.depthWrite = this.depthWrite, n2.colorWrite = this.colorWrite, n2.clipIntersection = this.clipIntersection, n2.clipShadows = this.clipShadows, n2.stencilWriteMask = this.stencilWriteMask, n2.stencilFunc = this.stencilFunc, n2.stencilRef = this.stencilRef, n2.stencilFuncMask = this.stencilFuncMask, n2.stencilFail = this.stencilFail, n2.stencilZFail = this.stencilZFail, n2.stencilZPass = this.stencilZPass, n2.stencilWrite = this.stencilWrite, n2.polygonOffset = this.polygonOffset, n2.polygonOffsetFactor = this.polygonOffsetFactor, n2.polygonOffsetUnits = this.polygonOffsetUnits, n2.dithering = this.dithering, n2.alphaTest = this.alphaTest, n2.alphaHash = this.alphaHash, n2.alphaToCoverage = this.alphaToCoverage, n2.premultipliedAlpha = this.premultipliedAlpha, n2.forceSinglePass = this.forceSinglePass, n2.allowOverride = this.allowOverride, n2.visible = this.visible, n2.toneMapped = this.toneMapped, n2.name = this.name, this.color && this.color.isColor && (n2.color = this.color.getHex()), this.roughness !== void 0 && (n2.roughness = this.roughness), this.metalness !== void 0 && (n2.metalness = this.metalness), this.sheen !== void 0 && (n2.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n2.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n2.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n2.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && (n2.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n2.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n2.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n2.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n2.shininess = this.shininess), this.clearcoat !== void 0 && (n2.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n2.clearcoatRoughness = this.clearcoatRoughness), this.diffuseRoughness !== void 0 && (n2.diffuseRoughness = this.diffuseRoughness), this.diffuseRoughnessMap && this.diffuseRoughnessMap.isTexture && (n2.diffuseRoughnessMap = this.diffuseRoughnessMap.toJSON(e21).uuid), this.clearcoatMap && this.clearcoatMap.isTexture && (n2.clearcoatMap = this.clearcoatMap.toJSON(e21).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n2.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e21).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n2.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e21).uuid, n2.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n2.sheenColorMap = this.sheenColorMap.toJSON(e21).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n2.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e21).uuid), this.dispersion !== void 0 && (n2.dispersion = this.dispersion), this.retroreflectivity !== void 0 && (n2.retroreflectivity = this.retroreflectivity), this.iridescence !== void 0 && (n2.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n2.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessMinimum !== void 0 && (n2.iridescenceThicknessMinimum = this.iridescenceThicknessMinimum), this.iridescenceThicknessMaximum !== void 0 && (n2.iridescenceThicknessMaximum = this.iridescenceThicknessMaximum), this.iridescenceMap && this.iridescenceMap.isTexture && (n2.iridescenceMap = this.iridescenceMap.toJSON(e21).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n2.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e21).uuid), this.anisotropy !== void 0 && (n2.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n2.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n2.anisotropyMap = this.anisotropyMap.toJSON(e21).uuid), this.map && this.map.isTexture && (n2.map = this.map.toJSON(e21).uuid), this.matcap && this.matcap.isTexture && (n2.matcap = this.matcap.toJSON(e21).uuid), this.alphaMap && this.alphaMap.isTexture && (n2.alphaMap = this.alphaMap.toJSON(e21).uuid), this.lightMap && this.lightMap.isTexture && (n2.lightMap = this.lightMap.toJSON(e21).uuid, n2.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n2.aoMap = this.aoMap.toJSON(e21).uuid, n2.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n2.bumpMap = this.bumpMap.toJSON(e21).uuid, n2.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n2.normalMap = this.normalMap.toJSON(e21).uuid, n2.normalMapType = this.normalMapType, n2.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n2.displacementMap = this.displacementMap.toJSON(e21).uuid, n2.displacementScale = this.displacementScale, n2.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n2.roughnessMap = this.roughnessMap.toJSON(e21).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n2.metalnessMap = this.metalnessMap.toJSON(e21).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n2.emissiveMap = this.emissiveMap.toJSON(e21).uuid), this.specularMap && this.specularMap.isTexture && (n2.specularMap = this.specularMap.toJSON(e21).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n2.specularIntensityMap = this.specularIntensityMap.toJSON(e21).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n2.specularColorMap = this.specularColorMap.toJSON(e21).uuid), this.envMap && this.envMap.isTexture && (n2.envMap = this.envMap.toJSON(e21).uuid, this.combine !== void 0 && (n2.combine = this.combine)), this.envMapRotation !== void 0 && (n2.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n2.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n2.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n2.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n2.gradientMap = this.gradientMap.toJSON(e21).uuid), this.transmission !== void 0 && (n2.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n2.transmissionMap = this.transmissionMap.toJSON(e21).uuid), this.thickness !== void 0 && (n2.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n2.thicknessMap = this.thicknessMap.toJSON(e21).uuid), this.attenuationDistance !== void 0 && (n2.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n2.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n2.size = this.size), this.sizeAttenuation !== void 0 && (n2.sizeAttenuation = this.sizeAttenuation), Array.isArray(this.clippingPlanes) && this.clippingPlanes.length > 0 && (n2.clippingPlanes = this.clippingPlanes.map((e22) => e22.toJSON())), this.rotation !== void 0 && (n2.rotation = this.rotation), this.depthPacking !== void 0 && (n2.depthPacking = this.depthPacking), this.linewidth !== void 0 && (n2.linewidth = this.linewidth), this.linecap !== void 0 && (n2.linecap = this.linecap), this.linejoin !== void 0 && (n2.linejoin = this.linejoin), this.dashSize !== void 0 && (n2.dashSize = this.dashSize), this.gapSize !== void 0 && (n2.gapSize = this.gapSize), this.scale !== void 0 && (n2.scale = this.scale), this.wireframe !== void 0 && (n2.wireframe = this.wireframe), this.wireframeLinewidth !== void 0 && (n2.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== void 0 && (n2.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== void 0 && (n2.wireframeLinejoin = this.wireframeLinejoin), this.flatShading !== void 0 && (n2.flatShading = this.flatShading), this.fog !== void 0 && (n2.fog = this.fog), Object.keys(this.userData).length > 0 && (n2.userData = this.userData);
    function r3(e22) {
      let t3 = [];
      for (let n3 in e22) {
        let r4 = e22[n3];
        delete r4.metadata, t3.push(r4);
      }
      return t3;
    }
    if (t2) {
      let t3 = r3(e21.textures), i2 = r3(e21.images);
      t3.length > 0 && (n2.textures = t3), i2.length > 0 && (n2.images = i2);
    }
    return n2;
  }
  fromJSON(e21, t2) {
    if (e21.uuid !== void 0 && (this.uuid = e21.uuid), e21.name !== void 0 && (this.name = e21.name), e21.color !== void 0 && this.color !== void 0 && this.color.setHex(e21.color), e21.roughness !== void 0 && (this.roughness = e21.roughness), e21.metalness !== void 0 && (this.metalness = e21.metalness), e21.sheen !== void 0 && (this.sheen = e21.sheen), e21.sheenColor !== void 0 && (this.sheenColor = new K().setHex(e21.sheenColor)), e21.sheenRoughness !== void 0 && (this.sheenRoughness = e21.sheenRoughness), e21.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e21.emissive), e21.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e21.specular), e21.specularIntensity !== void 0 && (this.specularIntensity = e21.specularIntensity), e21.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e21.specularColor), e21.shininess !== void 0 && (this.shininess = e21.shininess), e21.clearcoat !== void 0 && (this.clearcoat = e21.clearcoat), e21.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e21.clearcoatRoughness), e21.diffuseRoughness !== void 0 && (this.diffuseRoughness = e21.diffuseRoughness), e21.dispersion !== void 0 && (this.dispersion = e21.dispersion), e21.retroreflectivity !== void 0 && (this.retroreflectivity = e21.retroreflectivity), e21.iridescence !== void 0 && (this.iridescence = e21.iridescence), e21.iridescenceIOR !== void 0 && (this.iridescenceIOR = e21.iridescenceIOR), e21.iridescenceThicknessMinimum !== void 0 && (this.iridescenceThicknessMinimum = e21.iridescenceThicknessMinimum), e21.iridescenceThicknessMaximum !== void 0 && (this.iridescenceThicknessMaximum = e21.iridescenceThicknessMaximum), e21.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessMinimum = e21.iridescenceThicknessRange[0], this.iridescenceThicknessMaximum = e21.iridescenceThicknessRange[1]), e21.transmission !== void 0 && (this.transmission = e21.transmission), e21.thickness !== void 0 && (this.thickness = e21.thickness), e21.attenuationDistance !== void 0 && (this.attenuationDistance = e21.attenuationDistance), e21.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e21.attenuationColor), e21.anisotropy !== void 0 && (this.anisotropy = e21.anisotropy), e21.anisotropyRotation !== void 0 && (this.anisotropyRotation = e21.anisotropyRotation), e21.fog !== void 0 && (this.fog = e21.fog), e21.flatShading !== void 0 && (this.flatShading = e21.flatShading), e21.blending !== void 0 && (this.blending = e21.blending), e21.combine !== void 0 && (this.combine = e21.combine), e21.side !== void 0 && (this.side = e21.side), e21.shadowSide !== void 0 && (this.shadowSide = e21.shadowSide), e21.opacity !== void 0 && (this.opacity = e21.opacity), e21.transparent !== void 0 && (this.transparent = e21.transparent), e21.alphaTest !== void 0 && (this.alphaTest = e21.alphaTest), e21.alphaHash !== void 0 && (this.alphaHash = e21.alphaHash), e21.depthFunc !== void 0 && (this.depthFunc = e21.depthFunc), e21.depthTest !== void 0 && (this.depthTest = e21.depthTest), e21.depthWrite !== void 0 && (this.depthWrite = e21.depthWrite), e21.colorWrite !== void 0 && (this.colorWrite = e21.colorWrite), e21.clippingPlanes !== void 0 && (this.clippingPlanes = e21.clippingPlanes.map((e22) => new vr().fromJSON(e22))), e21.clipIntersection !== void 0 && (this.clipIntersection = e21.clipIntersection), e21.clipShadows !== void 0 && (this.clipShadows = e21.clipShadows), e21.depthPacking !== void 0 && (this.depthPacking = e21.depthPacking), e21.blendSrc !== void 0 && (this.blendSrc = e21.blendSrc), e21.blendDst !== void 0 && (this.blendDst = e21.blendDst), e21.blendEquation !== void 0 && (this.blendEquation = e21.blendEquation), e21.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e21.blendSrcAlpha), e21.blendDstAlpha !== void 0 && (this.blendDstAlpha = e21.blendDstAlpha), e21.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e21.blendEquationAlpha), e21.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e21.blendColor), e21.blendAlpha !== void 0 && (this.blendAlpha = e21.blendAlpha), e21.stencilWriteMask !== void 0 && (this.stencilWriteMask = e21.stencilWriteMask), e21.stencilFunc !== void 0 && (this.stencilFunc = e21.stencilFunc), e21.stencilRef !== void 0 && (this.stencilRef = e21.stencilRef), e21.stencilFuncMask !== void 0 && (this.stencilFuncMask = e21.stencilFuncMask), e21.stencilFail !== void 0 && (this.stencilFail = e21.stencilFail), e21.stencilZFail !== void 0 && (this.stencilZFail = e21.stencilZFail), e21.stencilZPass !== void 0 && (this.stencilZPass = e21.stencilZPass), e21.stencilWrite !== void 0 && (this.stencilWrite = e21.stencilWrite), e21.wireframe !== void 0 && (this.wireframe = e21.wireframe), e21.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e21.wireframeLinewidth), e21.wireframeLinecap !== void 0 && (this.wireframeLinecap = e21.wireframeLinecap), e21.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e21.wireframeLinejoin), e21.rotation !== void 0 && (this.rotation = e21.rotation), e21.linewidth !== void 0 && (this.linewidth = e21.linewidth), e21.linecap !== void 0 && (this.linecap = e21.linecap), e21.linejoin !== void 0 && (this.linejoin = e21.linejoin), e21.dashSize !== void 0 && (this.dashSize = e21.dashSize), e21.gapSize !== void 0 && (this.gapSize = e21.gapSize), e21.scale !== void 0 && (this.scale = e21.scale), e21.polygonOffset !== void 0 && (this.polygonOffset = e21.polygonOffset), e21.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e21.polygonOffsetFactor), e21.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e21.polygonOffsetUnits), e21.dithering !== void 0 && (this.dithering = e21.dithering), e21.alphaToCoverage !== void 0 && (this.alphaToCoverage = e21.alphaToCoverage), e21.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e21.premultipliedAlpha), e21.forceSinglePass !== void 0 && (this.forceSinglePass = e21.forceSinglePass), e21.allowOverride !== void 0 && (this.allowOverride = e21.allowOverride), e21.visible !== void 0 && (this.visible = e21.visible), e21.toneMapped !== void 0 && (this.toneMapped = e21.toneMapped), e21.userData !== void 0 && (this.userData = e21.userData), e21.vertexColors !== void 0 && (this.vertexColors = typeof e21.vertexColors == `number` ? e21.vertexColors > 0 : e21.vertexColors), e21.size !== void 0 && (this.size = e21.size), e21.sizeAttenuation !== void 0 && (this.sizeAttenuation = e21.sizeAttenuation), e21.map !== void 0 && (this.map = t2[e21.map] || null), e21.matcap !== void 0 && (this.matcap = t2[e21.matcap] || null), e21.alphaMap !== void 0 && (this.alphaMap = t2[e21.alphaMap] || null), e21.bumpMap !== void 0 && (this.bumpMap = t2[e21.bumpMap] || null), e21.bumpScale !== void 0 && (this.bumpScale = e21.bumpScale), e21.normalMap !== void 0 && (this.normalMap = t2[e21.normalMap] || null), e21.normalMapType !== void 0 && (this.normalMapType = e21.normalMapType), e21.normalScale !== void 0) {
      let t3 = e21.normalScale;
      Array.isArray(t3) === false && (t3 = [t3, t3]), this.normalScale = new H().fromArray(t3);
    }
    return e21.displacementMap !== void 0 && (this.displacementMap = t2[e21.displacementMap] || null), e21.displacementScale !== void 0 && (this.displacementScale = e21.displacementScale), e21.displacementBias !== void 0 && (this.displacementBias = e21.displacementBias), e21.roughnessMap !== void 0 && (this.roughnessMap = t2[e21.roughnessMap] || null), e21.metalnessMap !== void 0 && (this.metalnessMap = t2[e21.metalnessMap] || null), e21.emissiveMap !== void 0 && (this.emissiveMap = t2[e21.emissiveMap] || null), e21.emissiveIntensity !== void 0 && (this.emissiveIntensity = e21.emissiveIntensity), e21.specularMap !== void 0 && (this.specularMap = t2[e21.specularMap] || null), e21.specularIntensityMap !== void 0 && (this.specularIntensityMap = t2[e21.specularIntensityMap] || null), e21.specularColorMap !== void 0 && (this.specularColorMap = t2[e21.specularColorMap] || null), e21.envMap !== void 0 && (this.envMap = t2[e21.envMap] || null), e21.envMapRotation !== void 0 && this.envMapRotation.fromArray(e21.envMapRotation), e21.envMapIntensity !== void 0 && (this.envMapIntensity = e21.envMapIntensity), e21.reflectivity !== void 0 && (this.reflectivity = e21.reflectivity), e21.refractionRatio !== void 0 && (this.refractionRatio = e21.refractionRatio), e21.lightMap !== void 0 && (this.lightMap = t2[e21.lightMap] || null), e21.lightMapIntensity !== void 0 && (this.lightMapIntensity = e21.lightMapIntensity), e21.aoMap !== void 0 && (this.aoMap = t2[e21.aoMap] || null), e21.aoMapIntensity !== void 0 && (this.aoMapIntensity = e21.aoMapIntensity), e21.gradientMap !== void 0 && (this.gradientMap = t2[e21.gradientMap] || null), e21.clearcoatMap !== void 0 && (this.clearcoatMap = t2[e21.clearcoatMap] || null), e21.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = t2[e21.clearcoatRoughnessMap] || null), e21.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = t2[e21.clearcoatNormalMap] || null), e21.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new H().fromArray(e21.clearcoatNormalScale)), e21.diffuseRoughnessMap !== void 0 && (this.diffuseRoughnessMap = t2[e21.diffuseRoughnessMap] || null), e21.iridescenceMap !== void 0 && (this.iridescenceMap = t2[e21.iridescenceMap] || null), e21.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = t2[e21.iridescenceThicknessMap] || null), e21.transmissionMap !== void 0 && (this.transmissionMap = t2[e21.transmissionMap] || null), e21.thicknessMap !== void 0 && (this.thicknessMap = t2[e21.thicknessMap] || null), e21.anisotropyMap !== void 0 && (this.anisotropyMap = t2[e21.anisotropyMap] || null), e21.sheenColorMap !== void 0 && (this.sheenColorMap = t2[e21.sheenColorMap] || null), e21.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = t2[e21.sheenRoughnessMap] || null), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e21) {
    this.name = e21.name, this.blending = e21.blending, this.side = e21.side, this.vertexColors = e21.vertexColors, this.opacity = e21.opacity, this.transparent = e21.transparent, this.blendSrc = e21.blendSrc, this.blendDst = e21.blendDst, this.blendEquation = e21.blendEquation, this.blendSrcAlpha = e21.blendSrcAlpha, this.blendDstAlpha = e21.blendDstAlpha, this.blendEquationAlpha = e21.blendEquationAlpha, this.blendColor.copy(e21.blendColor), this.blendAlpha = e21.blendAlpha, this.depthFunc = e21.depthFunc, this.depthTest = e21.depthTest, this.depthWrite = e21.depthWrite, this.stencilWriteMask = e21.stencilWriteMask, this.stencilFunc = e21.stencilFunc, this.stencilRef = e21.stencilRef, this.stencilFuncMask = e21.stencilFuncMask, this.stencilFail = e21.stencilFail, this.stencilZFail = e21.stencilZFail, this.stencilZPass = e21.stencilZPass, this.stencilWrite = e21.stencilWrite;
    let t2 = e21.clippingPlanes, n2 = null;
    if (t2 !== null) {
      let e22 = t2.length;
      n2 = Array(e22);
      for (let r3 = 0; r3 !== e22; ++r3) n2[r3] = t2[r3].clone();
    }
    return this.clippingPlanes = n2, this.clipIntersection = e21.clipIntersection, this.clipShadows = e21.clipShadows, this.shadowSide = e21.shadowSide, this.colorWrite = e21.colorWrite, this.precision = e21.precision, this.polygonOffset = e21.polygonOffset, this.polygonOffsetFactor = e21.polygonOffsetFactor, this.polygonOffsetUnits = e21.polygonOffsetUnits, this.dithering = e21.dithering, this.alphaTest = e21.alphaTest, this.alphaHash = e21.alphaHash, this.alphaToCoverage = e21.alphaToCoverage, this.premultipliedAlpha = e21.premultipliedAlpha, this.forceSinglePass = e21.forceSinglePass, this.allowOverride = e21.allowOverride, this.visible = e21.visible, this.toneMapped = e21.toneMapped, this.userData = JSON.parse(JSON.stringify(e21.userData)), this;
  }
  dispose() {
    this.dispatchEvent({
      type: `dispose`
    });
  }
  set needsUpdate(e21) {
    e21 === true && this.version++;
  }
};
var xr = class extends br {
  constructor(e21) {
    super(), this.isSpriteMaterial = true, this.type = `SpriteMaterial`, this.color = new K(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = true, this.transparent = true, this.fog = true, this.setValues(e21);
  }
  copy(e21) {
    return super.copy(e21), this.color.copy(e21.color), this.map = e21.map, this.alphaMap = e21.alphaMap, this.rotation = e21.rotation, this.sizeAttenuation = e21.sizeAttenuation, this.fog = e21.fog, this;
  }
};
var Sr;
var Cr = new U();
var wr = new U();
var Tr = new U();
var Er = new H();
var Dr = new H();
var Or = new Nt();
var kr = new U();
var Ar = new U();
var jr = new U();
var Mr = new H();
var Nr = new H();
var Pr = new H();
var Fr = class extends sn {
  constructor(e21 = new xr()) {
    if (super(), this.isSprite = true, this.type = `Sprite`, Sr === void 0) {
      Sr = new ur();
      let e22 = new dr(new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), 5);
      Sr.setIndex([0, 1, 2, 0, 2, 3]), Sr.setAttribute(`position`, new mr(e22, 3, 0, false)), Sr.setAttribute(`uv`, new mr(e22, 2, 3, false));
    }
    this.geometry = Sr, this.material = e21, this.center = new H(0.5, 0.5), this.count = 1;
  }
  intersectsFrustum(e21) {
    return e21.intersectsSprite(this);
  }
  raycast(e21, t2) {
    e21.camera === null && B(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`), wr.setFromMatrixScale(this.matrixWorld), Or.copy(e21.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e21.camera.matrixWorldInverse, this.matrixWorld), Tr.setFromMatrixPosition(this.modelViewMatrix), e21.camera.isPerspectiveCamera && this.material.sizeAttenuation === false && wr.multiplyScalar(-Tr.z);
    let n2 = this.material.rotation, r3, i2;
    n2 !== 0 && (i2 = Math.cos(n2), r3 = Math.sin(n2));
    let a2 = this.center;
    Ir(kr.set(-0.5, -0.5, 0), Tr, a2, wr, r3, i2), Ir(Ar.set(0.5, -0.5, 0), Tr, a2, wr, r3, i2), Ir(jr.set(0.5, 0.5, 0), Tr, a2, wr, r3, i2), Mr.set(0, 0), Nr.set(1, 0), Pr.set(1, 1);
    let o2 = e21.ray.intersectTriangle(kr, Ar, jr, false, Cr);
    if (o2 === null && (Ir(Ar.set(-0.5, 0.5, 0), Tr, a2, wr, r3, i2), Nr.set(0, 1), o2 = e21.ray.intersectTriangle(kr, jr, Ar, false, Cr), o2 === null)) return;
    let s2 = e21.ray.origin.distanceTo(Cr);
    s2 < e21.near || s2 > e21.far || t2.push({
      distance: s2,
      point: Cr.clone(),
      uv: An.getInterpolation(Cr, kr, Ar, jr, Mr, Nr, Pr, new H()),
      face: null,
      object: this
    });
  }
  copy(e21, t2) {
    return super.copy(e21, t2), e21.center !== void 0 && this.center.copy(e21.center), this.material = e21.material, this;
  }
  toJSON(e21) {
    let t2 = super.toJSON(e21);
    return t2.object.center = this.center.toArray(), t2;
  }
};
function Ir(e21, t2, n2, r3, i2, a2) {
  Er.subVectors(e21, n2).addScalar(0.5).multiply(r3), i2 === void 0 ? Dr.copy(Er) : (Dr.x = a2 * Er.x - i2 * Er.y, Dr.y = i2 * Er.x + a2 * Er.y), e21.copy(t2), e21.x += Dr.x, e21.y += Dr.y, e21.applyMatrix4(Or);
}
var Lr = new U();
var Rr = new U();
var zr = new U();
var Br = new U();
var Vr = class {
  constructor(e21 = new U(), t2 = new U(0, 0, -1)) {
    this.origin = e21, this.direction = t2;
  }
  set(e21, t2) {
    return this.origin.copy(e21), this.direction.copy(t2), this;
  }
  copy(e21) {
    return this.origin.copy(e21.origin), this.direction.copy(e21.direction), this;
  }
  at(e21, t2) {
    return t2.copy(this.origin).addScaledVector(this.direction, e21);
  }
  lookAt(e21) {
    return this.direction.copy(e21).sub(this.origin).normalize(), this;
  }
  recast(e21) {
    return this.origin.copy(this.at(e21, Lr)), this;
  }
  closestPointToPoint(e21, t2) {
    t2.subVectors(e21, this.origin);
    let n2 = t2.dot(this.direction);
    return n2 < 0 ? t2.copy(this.origin) : t2.copy(this.origin).addScaledVector(this.direction, n2);
  }
  distanceToPoint(e21) {
    return Math.sqrt(this.distanceSqToPoint(e21));
  }
  distanceSqToPoint(e21) {
    let t2 = Lr.subVectors(e21, this.origin).dot(this.direction);
    return t2 < 0 ? this.origin.distanceToSquared(e21) : (Lr.copy(this.origin).addScaledVector(this.direction, t2), Lr.distanceToSquared(e21));
  }
  distanceSqToSegment(e21, t2, n2, r3) {
    Rr.copy(e21).add(t2).multiplyScalar(0.5), zr.copy(t2).sub(e21).normalize(), Br.copy(this.origin).sub(Rr);
    let i2 = e21.distanceTo(t2) * 0.5, a2 = -this.direction.dot(zr), o2 = Br.dot(this.direction), s2 = -Br.dot(zr), c2 = Br.lengthSq(), l2 = Math.abs(1 - a2 * a2), u2, d2, f2, p2;
    if (l2 > 0) {
      if (u2 = a2 * s2 - o2, d2 = a2 * o2 - s2, p2 = i2 * l2, u2 >= 0) {
        if (d2 >= -p2) {
          if (d2 <= p2) {
            let e22 = 1 / l2;
            u2 *= e22, d2 *= e22, f2 = u2 * (u2 + a2 * d2 + 2 * o2) + d2 * (a2 * u2 + d2 + 2 * s2) + c2;
          } else d2 = i2, u2 = Math.max(0, -(a2 * d2 + o2)), f2 = -u2 * u2 + d2 * (d2 + 2 * s2) + c2;
        } else d2 = -i2, u2 = Math.max(0, -(a2 * d2 + o2)), f2 = -u2 * u2 + d2 * (d2 + 2 * s2) + c2;
      } else d2 <= -p2 ? (u2 = Math.max(0, -(-a2 * i2 + o2)), d2 = u2 > 0 ? -i2 : Math.min(Math.max(-i2, -s2), i2), f2 = -u2 * u2 + d2 * (d2 + 2 * s2) + c2) : d2 <= p2 ? (u2 = 0, d2 = Math.min(Math.max(-i2, -s2), i2), f2 = d2 * (d2 + 2 * s2) + c2) : (u2 = Math.max(0, -(a2 * i2 + o2)), d2 = u2 > 0 ? i2 : Math.min(Math.max(-i2, -s2), i2), f2 = -u2 * u2 + d2 * (d2 + 2 * s2) + c2);
    } else d2 = a2 > 0 ? -i2 : i2, u2 = Math.max(0, -(a2 * d2 + o2)), f2 = -u2 * u2 + d2 * (d2 + 2 * s2) + c2;
    return n2 && n2.copy(this.origin).addScaledVector(this.direction, u2), r3 && r3.copy(Rr).addScaledVector(zr, d2), f2;
  }
  intersectSphere(e21, t2) {
    if (e21.radius < 0) return null;
    Lr.subVectors(e21.center, this.origin);
    let n2 = Lr.dot(this.direction), r3 = Lr.dot(Lr) - n2 * n2, i2 = e21.radius * e21.radius;
    if (r3 > i2) return null;
    let a2 = Math.sqrt(i2 - r3), o2 = n2 - a2, s2 = n2 + a2;
    return s2 < 0 ? null : o2 < 0 ? this.at(s2, t2) : this.at(o2, t2);
  }
  intersectsSphere(e21) {
    return e21.radius < 0 ? false : this.distanceSqToPoint(e21.center) <= e21.radius * e21.radius;
  }
  distanceToPlane(e21) {
    let t2 = e21.normal.dot(this.direction);
    if (t2 === 0) return e21.distanceToPoint(this.origin) === 0 ? 0 : null;
    let n2 = -(this.origin.dot(e21.normal) + e21.constant) / t2;
    return n2 >= 0 ? n2 : null;
  }
  intersectPlane(e21, t2) {
    let n2 = this.distanceToPlane(e21);
    return n2 === null ? null : this.at(n2, t2);
  }
  intersectsPlane(e21) {
    let t2 = e21.distanceToPoint(this.origin);
    return t2 === 0 || e21.normal.dot(this.direction) * t2 < 0;
  }
  intersectBox(e21, t2) {
    let n2, r3, i2, a2, o2, s2, c2 = 1 / this.direction.x, l2 = 1 / this.direction.y, u2 = 1 / this.direction.z, d2 = this.origin;
    return c2 >= 0 ? (n2 = (e21.min.x - d2.x) * c2, r3 = (e21.max.x - d2.x) * c2) : (n2 = (e21.max.x - d2.x) * c2, r3 = (e21.min.x - d2.x) * c2), l2 >= 0 ? (i2 = (e21.min.y - d2.y) * l2, a2 = (e21.max.y - d2.y) * l2) : (i2 = (e21.max.y - d2.y) * l2, a2 = (e21.min.y - d2.y) * l2), n2 > a2 || i2 > r3 || ((i2 > n2 || isNaN(n2)) && (n2 = i2), (a2 < r3 || isNaN(r3)) && (r3 = a2), u2 >= 0 ? (o2 = (e21.min.z - d2.z) * u2, s2 = (e21.max.z - d2.z) * u2) : (o2 = (e21.max.z - d2.z) * u2, s2 = (e21.min.z - d2.z) * u2), n2 > s2 || o2 > r3) || ((o2 > n2 || n2 !== n2) && (n2 = o2), (s2 < r3 || r3 !== r3) && (r3 = s2), r3 < 0) ? null : this.at(n2 >= 0 ? n2 : r3, t2);
  }
  intersectsBox(e21) {
    return this.intersectBox(e21, Lr) !== null;
  }
  intersectTriangle(e21, t2, n2, r3, i2) {
    let a2 = this.origin, o2 = this.direction, s2 = o2.x, c2 = o2.y, l2 = o2.z, u2 = e21.x - a2.x, d2 = e21.y - a2.y, f2 = e21.z - a2.z, p2 = t2.x - a2.x, m2 = t2.y - a2.y, h2 = t2.z - a2.z, g2 = n2.x - a2.x, _2 = n2.y - a2.y, v2 = n2.z - a2.z, y2 = Math.abs(s2), b2 = Math.abs(c2), x2 = Math.abs(l2), S2, C2, w2, T2, E2, D2, O2, k2, A2, ee2, j2, te2;
    if (y2 >= b2 && y2 >= x2 ? (w2 = s2, D2 = u2, A2 = p2, te2 = g2, s2 >= 0 ? (S2 = c2, C2 = l2, T2 = d2, E2 = f2, O2 = m2, k2 = h2, ee2 = _2, j2 = v2) : (S2 = l2, C2 = c2, T2 = f2, E2 = d2, O2 = h2, k2 = m2, ee2 = v2, j2 = _2)) : b2 >= x2 ? (w2 = c2, D2 = d2, A2 = m2, te2 = _2, c2 >= 0 ? (S2 = l2, C2 = s2, T2 = f2, E2 = u2, O2 = h2, k2 = p2, ee2 = v2, j2 = g2) : (S2 = s2, C2 = l2, T2 = u2, E2 = f2, O2 = p2, k2 = h2, ee2 = g2, j2 = v2)) : (w2 = l2, D2 = f2, A2 = h2, te2 = v2, l2 >= 0 ? (S2 = s2, C2 = c2, T2 = u2, E2 = d2, O2 = p2, k2 = m2, ee2 = g2, j2 = _2) : (S2 = c2, C2 = s2, T2 = d2, E2 = u2, O2 = m2, k2 = p2, ee2 = _2, j2 = g2)), w2 === 0) return null;
    let M2 = S2 / w2, ne2 = C2 / w2, N2 = 1 / w2, re2 = T2 - M2 * D2, ie2 = E2 - ne2 * D2, ae2 = O2 - M2 * A2, oe2 = k2 - ne2 * A2, se2 = ee2 - M2 * te2, ce2 = j2 - ne2 * te2, le2 = se2 * oe2 - ce2 * ae2, P2 = re2 * ce2 - ie2 * se2, ue2 = ae2 * ie2 - oe2 * re2;
    if (r3) {
      if (le2 < 0 || P2 < 0 || ue2 < 0) return null;
    } else if ((le2 < 0 || P2 < 0 || ue2 < 0) && (le2 > 0 || P2 > 0 || ue2 > 0)) return null;
    let de2 = le2 + P2 + ue2;
    if (de2 === 0) return null;
    let fe2 = N2 * (le2 * D2 + P2 * A2 + ue2 * te2);
    return (de2 > 0 ? fe2 < 0 : fe2 > 0) ? null : this.at(fe2 / de2, i2);
  }
  applyMatrix4(e21) {
    return this.origin.applyMatrix4(e21), this.direction.transformDirection(e21), this;
  }
  equals(e21) {
    return e21.origin.equals(this.origin) && e21.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var Hr = class extends br {
  constructor(e21) {
    super(), this.isMeshBasicMaterial = true, this.type = `MeshBasicMaterial`, this.color = new K(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ut(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = `round`, this.wireframeLinejoin = `round`, this.fog = true, this.setValues(e21);
  }
  copy(e21) {
    return super.copy(e21), this.color.copy(e21.color), this.map = e21.map, this.lightMap = e21.lightMap, this.lightMapIntensity = e21.lightMapIntensity, this.aoMap = e21.aoMap, this.aoMapIntensity = e21.aoMapIntensity, this.specularMap = e21.specularMap, this.alphaMap = e21.alphaMap, this.envMap = e21.envMap, this.envMapRotation.copy(e21.envMapRotation), this.combine = e21.combine, this.reflectivity = e21.reflectivity, this.refractionRatio = e21.refractionRatio, this.wireframe = e21.wireframe, this.wireframeLinewidth = e21.wireframeLinewidth, this.wireframeLinecap = e21.wireframeLinecap, this.wireframeLinejoin = e21.wireframeLinejoin, this.fog = e21.fog, this;
  }
};
var Ur = new Nt();
var Wr = new Vr();
var Gr = new nr();
var Kr = new U();
var qr = new U();
var Jr = new U();
var Yr = new U();
var Xr = new U();
var Zr = new U();
var Qr = new U();
var $r = new U();
var ei = class extends sn {
  constructor(e21 = new ur(), t2 = new Hr()) {
    super(), this.isMesh = true, this.type = `Mesh`, this.geometry = e21, this.material = t2, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e21, t2) {
    return super.copy(e21, t2), this.morphTargetInfluences = e21.morphTargetInfluences === void 0 ? void 0 : e21.morphTargetInfluences.slice(), this.morphTargetDictionary = e21.morphTargetDictionary === void 0 ? void 0 : Object.assign({}, e21.morphTargetDictionary), this.material = Array.isArray(e21.material) ? e21.material.slice() : e21.material, this.geometry = e21.geometry, this;
  }
  updateMorphTargets() {
    let e21 = this.geometry.morphAttributes, t2 = Object.keys(e21);
    if (t2.length > 0) {
      let n2 = e21[t2[0]];
      if (n2 !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let e22 = 0, t3 = n2.length; e22 < t3; e22++) {
          let t4 = n2[e22].name || String(e22);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[t4] = e22;
        }
      }
    }
  }
  getVertexPosition(e21, t2) {
    let n2 = this.geometry, r3 = n2.attributes.position, i2 = n2.morphAttributes.position, a2 = n2.morphTargetsRelative;
    t2.fromBufferAttribute(r3, e21);
    let o2 = this.morphTargetInfluences;
    if (i2 && o2) {
      Zr.set(0, 0, 0);
      for (let n3 = 0, r4 = i2.length; n3 < r4; n3++) {
        let r5 = o2[n3], s2 = i2[n3];
        r5 !== 0 && (Xr.fromBufferAttribute(s2, e21), a2 ? Zr.addScaledVector(Xr, r5) : Zr.addScaledVector(Xr.sub(t2), r5));
      }
      t2.add(Zr);
    }
    return t2;
  }
  intersectsFrustum(e21) {
    return e21.intersectsObject(this);
  }
  raycast(e21, t2) {
    let n2 = this.geometry, r3 = this.material, i2 = this.matrixWorld;
    r3 !== void 0 && (n2.boundingSphere === null && n2.computeBoundingSphere(), Gr.copy(n2.boundingSphere), Gr.applyMatrix4(i2), Wr.copy(e21.ray).recast(e21.near), Gr.containsPoint(Wr.origin) === false && (Wr.intersectSphere(Gr, Kr) === null || Wr.origin.distanceToSquared(Kr) > (e21.far - e21.near) ** 2) || (Ur.copy(i2).invert(), Wr.copy(e21.ray).applyMatrix4(Ur), (n2.boundingBox === null || Wr.intersectsBox(n2.boundingBox) !== false) && this._computeIntersections(e21, t2, Wr)));
  }
  _computeIntersections(e21, t2, n2) {
    let r3, i2 = this.geometry, a2 = this.material, o2 = i2.index, s2 = i2.attributes.position, c2 = i2.attributes.uv, l2 = i2.attributes.uv1, u2 = i2.attributes.normal, d2 = i2.groups, f2 = i2.drawRange;
    if (o2 !== null) {
      if (Array.isArray(a2)) for (let i3 = 0, s3 = d2.length; i3 < s3; i3++) {
        let s4 = d2[i3], p2 = a2[s4.materialIndex], m2 = Math.max(s4.start, f2.start), h2 = Math.min(o2.count, Math.min(s4.start + s4.count, f2.start + f2.count));
        for (let i4 = m2, a3 = h2; i4 < a3; i4 += 3) {
          let a4 = o2.getX(i4), d3 = o2.getX(i4 + 1), f3 = o2.getX(i4 + 2);
          r3 = ni(this, p2, e21, n2, c2, l2, u2, a4, d3, f3), r3 && (r3.faceIndex = Math.floor(i4 / 3), r3.face.materialIndex = s4.materialIndex, t2.push(r3));
        }
      }
      else {
        let i3 = Math.max(0, f2.start), s3 = Math.min(o2.count, f2.start + f2.count);
        for (let d3 = i3, f3 = s3; d3 < f3; d3 += 3) {
          let i4 = o2.getX(d3), s4 = o2.getX(d3 + 1), f4 = o2.getX(d3 + 2);
          r3 = ni(this, a2, e21, n2, c2, l2, u2, i4, s4, f4), r3 && (r3.faceIndex = Math.floor(d3 / 3), t2.push(r3));
        }
      }
    } else if (s2 !== void 0) {
      if (Array.isArray(a2)) for (let i3 = 0, o3 = d2.length; i3 < o3; i3++) {
        let o4 = d2[i3], p2 = a2[o4.materialIndex], m2 = Math.max(o4.start, f2.start), h2 = Math.min(s2.count, Math.min(o4.start + o4.count, f2.start + f2.count));
        for (let i4 = m2, a3 = h2; i4 < a3; i4 += 3) {
          let a4 = i4, s3 = i4 + 1, d3 = i4 + 2;
          r3 = ni(this, p2, e21, n2, c2, l2, u2, a4, s3, d3), r3 && (r3.faceIndex = Math.floor(i4 / 3), r3.face.materialIndex = o4.materialIndex, t2.push(r3));
        }
      }
      else {
        let i3 = Math.max(0, f2.start), o3 = Math.min(s2.count, f2.start + f2.count);
        for (let s3 = i3, d3 = o3; s3 < d3; s3 += 3) {
          let i4 = s3, o4 = s3 + 1, d4 = s3 + 2;
          r3 = ni(this, a2, e21, n2, c2, l2, u2, i4, o4, d4), r3 && (r3.faceIndex = Math.floor(s3 / 3), t2.push(r3));
        }
      }
    }
  }
};
function ti(e21, t2, n2, r3, i2, a2, o2, s2) {
  let c2;
  if (c2 = t2.side === 1 ? r3.intersectTriangle(o2, a2, i2, true, s2) : r3.intersectTriangle(i2, a2, o2, t2.side === 0, s2), c2 === null) return null;
  $r.copy(s2), $r.applyMatrix4(e21.matrixWorld);
  let l2 = n2.ray.origin.distanceTo($r);
  return l2 < n2.near || l2 > n2.far ? null : {
    distance: l2,
    point: $r.clone(),
    object: e21
  };
}
function ni(e21, t2, n2, r3, i2, a2, o2, s2, c2, l2) {
  e21.getVertexPosition(s2, qr), e21.getVertexPosition(c2, Jr), e21.getVertexPosition(l2, Yr);
  let u2 = ti(e21, t2, n2, r3, qr, Jr, Yr, Qr);
  if (u2) {
    let e22 = new U();
    An.getBarycoord(Qr, qr, Jr, Yr, e22), i2 && (u2.uv = An.getInterpolatedAttribute(i2, s2, c2, l2, e22, new H())), a2 && (u2.uv1 = An.getInterpolatedAttribute(a2, s2, c2, l2, e22, new H())), o2 && (u2.normal = An.getInterpolatedAttribute(o2, s2, c2, l2, e22, new U()), u2.normal.dot(r3.direction) > 0 && u2.normal.multiplyScalar(-1));
    let t3 = {
      a: s2,
      b: c2,
      c: l2,
      normal: new U(),
      materialIndex: 0
    };
    An.getNormal(qr, Jr, Yr, t3.normal), u2.face = t3, u2.barycoord = e22;
  }
  return u2;
}
var ri = class extends Dt {
  constructor(e21 = null, t2 = 1, n2 = 1, i2, a2, o2, s2, c2, l2 = r, u2 = r, d2, f2) {
    super(null, o2, s2, c2, l2, u2, i2, a2, d2, f2), this.isDataTexture = true, this.image = {
      data: e21,
      width: t2,
      height: n2
    }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
};
var ii = new nr();
var ai = new H(0.5, 0.5);
var oi = new U();
var si = class {
  constructor(e21 = new vr(), t2 = new vr(), n2 = new vr(), r3 = new vr(), i2 = new vr(), a2 = new vr()) {
    this.planes = [e21, t2, n2, r3, i2, a2];
  }
  set(e21, t2, n2, r3, i2, a2) {
    let o2 = this.planes;
    return o2[0].copy(e21), o2[1].copy(t2), o2[2].copy(n2), o2[3].copy(r3), o2[4].copy(i2), o2[5].copy(a2), this;
  }
  copy(e21) {
    let t2 = this.planes;
    for (let n2 = 0; n2 < 6; n2++) t2[n2].copy(e21.planes[n2]);
    return this;
  }
  setFromProjectionMatrix(e21, t2 = Ue, n2 = false) {
    let r3 = this.planes, i2 = e21.elements, a2 = i2[0], o2 = i2[1], s2 = i2[2], c2 = i2[3], l2 = i2[4], u2 = i2[5], d2 = i2[6], f2 = i2[7], p2 = i2[8], m2 = i2[9], h2 = i2[10], g2 = i2[11], _2 = i2[12], v2 = i2[13], y2 = i2[14], b2 = i2[15];
    if (r3[0].setComponents(c2 - a2, f2 - l2, g2 - p2, b2 - _2).normalize(), r3[1].setComponents(c2 + a2, f2 + l2, g2 + p2, b2 + _2).normalize(), r3[2].setComponents(c2 + o2, f2 + u2, g2 + m2, b2 + v2).normalize(), r3[3].setComponents(c2 - o2, f2 - u2, g2 - m2, b2 - v2).normalize(), n2) r3[4].setComponents(s2, d2, h2, y2).normalize(), r3[5].setComponents(c2 - s2, f2 - d2, g2 - h2, b2 - y2).normalize();
    else if (r3[4].setComponents(c2 - s2, f2 - d2, g2 - h2, b2 - y2).normalize(), t2 === 2e3) r3[5].setComponents(c2 + s2, f2 + d2, g2 + h2, b2 + y2).normalize();
    else if (t2 === 2001) r3[5].setComponents(s2, d2, h2, y2).normalize();
    else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: ` + t2);
    return this;
  }
  intersectsObject(e21) {
    if (e21.boundingSphere !== void 0) e21.boundingSphere === null && e21.computeBoundingSphere(), ii.copy(e21.boundingSphere).applyMatrix4(e21.matrixWorld);
    else {
      let t2 = e21.geometry;
      t2.boundingSphere === null && t2.computeBoundingSphere(), ii.copy(t2.boundingSphere).applyMatrix4(e21.matrixWorld);
    }
    return this.intersectsSphere(ii);
  }
  intersectsSprite(e21) {
    return ii.center.set(0, 0, 0), ii.radius = 0.7071067811865476 + ai.distanceTo(e21.center), ii.applyMatrix4(e21.matrixWorld), this.intersectsSphere(ii);
  }
  intersectsSphere(e21) {
    let t2 = this.planes, n2 = e21.center, r3 = -e21.radius;
    for (let e22 = 0; e22 < 6; e22++) if (t2[e22].distanceToPoint(n2) < r3) return false;
    return true;
  }
  intersectsBox(e21) {
    let t2 = this.planes;
    for (let n2 = 0; n2 < 6; n2++) {
      let r3 = t2[n2];
      if (oi.x = r3.normal.x > 0 ? e21.max.x : e21.min.x, oi.y = r3.normal.y > 0 ? e21.max.y : e21.min.y, oi.z = r3.normal.z > 0 ? e21.max.z : e21.min.z, r3.distanceToPoint(oi) < 0) return false;
    }
    return true;
  }
  containsPoint(e21) {
    let t2 = this.planes;
    for (let n2 = 0; n2 < 6; n2++) if (t2[n2].distanceToPoint(e21) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var ci = new Nt();
var li = class e8 {
  constructor() {
    this.coordinateSystem = Ue, this._frustums = [], this._count = 0;
  }
  setFromArrayCamera(e21) {
    let t2 = e21.cameras, n2 = this._frustums;
    for (let e22 = 0; e22 < t2.length; e22++) {
      let r3 = t2[e22];
      ci.multiplyMatrices(r3.projectionMatrix, r3.matrixWorldInverse), n2[e22] === void 0 && (n2[e22] = new si()), n2[e22].setFromProjectionMatrix(ci, r3.coordinateSystem, r3.reversedDepth);
    }
    return this._count = t2.length, this;
  }
  getFrustum(e21) {
    return this._frustums[e21];
  }
  intersectsObject(e21) {
    let t2 = this._frustums;
    for (let n2 = 0; n2 < this._count; n2++) if (t2[n2].intersectsObject(e21)) return true;
    return false;
  }
  intersectsSprite(e21) {
    let t2 = this._frustums;
    for (let n2 = 0; n2 < this._count; n2++) if (t2[n2].intersectsSprite(e21)) return true;
    return false;
  }
  intersectsSphere(e21) {
    let t2 = this._frustums;
    for (let n2 = 0; n2 < this._count; n2++) if (t2[n2].intersectsSphere(e21)) return true;
    return false;
  }
  intersectsBox(e21) {
    let t2 = this._frustums;
    for (let n2 = 0; n2 < this._count; n2++) if (t2[n2].intersectsBox(e21)) return true;
    return false;
  }
  containsPoint(e21) {
    let t2 = this._frustums;
    for (let n2 = 0; n2 < this._count; n2++) if (t2[n2].containsPoint(e21)) return true;
    return false;
  }
  copy(e21) {
    this.coordinateSystem = e21.coordinateSystem;
    let t2 = this._frustums, n2 = e21._frustums;
    for (let r3 = 0; r3 < e21._count; r3++) t2[r3] === void 0 && (t2[r3] = new si()), t2[r3].copy(n2[r3]);
    return this._count = e21._count, this;
  }
  clone() {
    return new e8().copy(this);
  }
};
var ui = class extends Dt {
  constructor(e21 = [], t2 = 301, n2, r3, i2, a2, o2, s2, c2, l2) {
    super(e21, t2, n2, r3, i2, a2, o2, s2, c2, l2), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e21) {
    this.image = e21;
  }
};
var di = class extends Dt {
  constructor(e21, t2, n2, r3, i2, a2, o2, s2, c2) {
    super(e21, t2, n2, r3, i2, a2, o2, s2, c2), this.isCanvasTexture = true, this.needsUpdate = true;
  }
};
var fi = class extends Dt {
  constructor(e21, t2, n2 = m, i2, a2, o2, s2 = r, c2 = r, l2, u2 = T, d2 = 1) {
    if (u2 !== 1026 && u2 !== 1027) throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);
    super({
      width: e21,
      height: t2,
      depth: d2
    }, i2, a2, o2, s2, c2, u2, n2, l2), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e21) {
    return super.copy(e21), this.source = new Ct(Object.assign({}, e21.image)), this.compareFunction = e21.compareFunction, this;
  }
  toJSON(e21) {
    let t2 = super.toJSON(e21);
    return t2.compareFunction = this.compareFunction, t2;
  }
};
var pi = class extends fi {
  constructor(e21, t2 = m, n2 = 301, i2, a2, o2 = r, s2 = r, c2, l2 = T) {
    let u2 = {
      width: e21,
      height: e21,
      depth: 1
    }, d2 = [u2, u2, u2, u2, u2, u2];
    super(e21, e21, t2, n2, i2, a2, o2, s2, c2, l2), this.image = d2, this.isCubeDepthTexture = true, this.isCubeTexture = true;
  }
  get images() {
    return this.image;
  }
  set images(e21) {
    this.image = e21;
  }
};
var mi = class extends Dt {
  constructor(e21 = null) {
    super(), this.sourceTexture = e21, this.isExternalTexture = true;
  }
  copy(e21) {
    return super.copy(e21), this.sourceTexture = e21.sourceTexture, this;
  }
};
var hi = class e9 extends ur {
  constructor(e21 = 1, t2 = 1, n2 = 1, r3 = 1, i2 = 1, a2 = 1) {
    super(), this.type = `BoxGeometry`, this.parameters = {
      width: e21,
      height: t2,
      depth: n2,
      widthSegments: r3,
      heightSegments: i2,
      depthSegments: a2
    };
    let o2 = this;
    r3 = Math.floor(r3), i2 = Math.floor(i2), a2 = Math.floor(a2);
    let s2 = [], c2 = [], l2 = [], u2 = [], d2 = 0, f2 = 0;
    p2(`z`, `y`, `x`, -1, -1, n2, t2, e21, a2, i2, 0), p2(`z`, `y`, `x`, 1, -1, n2, t2, -e21, a2, i2, 1), p2(`x`, `z`, `y`, 1, 1, e21, n2, t2, r3, a2, 2), p2(`x`, `z`, `y`, 1, -1, e21, n2, -t2, r3, a2, 3), p2(`x`, `y`, `z`, 1, -1, e21, t2, n2, r3, i2, 4), p2(`x`, `y`, `z`, -1, -1, e21, t2, -n2, r3, i2, 5), this.setIndex(s2), this.setAttribute(`position`, new Qn(c2, 3)), this.setAttribute(`normal`, new Qn(l2, 3)), this.setAttribute(`uv`, new Qn(u2, 2));
    function p2(e22, t3, n3, r4, i3, a3, p3, m2, h2, g2, _2) {
      let v2 = a3 / h2, y2 = p3 / g2, b2 = a3 / 2, x2 = p3 / 2, S2 = m2 / 2, C2 = h2 + 1, w2 = g2 + 1, T2 = 0, E2 = 0, D2 = new U();
      for (let a4 = 0; a4 < w2; a4++) {
        let o3 = a4 * y2 - x2;
        for (let s3 = 0; s3 < C2; s3++) D2[e22] = (s3 * v2 - b2) * r4, D2[t3] = o3 * i3, D2[n3] = S2, c2.push(D2.x, D2.y, D2.z), D2[e22] = 0, D2[t3] = 0, D2[n3] = m2 > 0 ? 1 : -1, l2.push(D2.x, D2.y, D2.z), u2.push(s3 / h2), u2.push(1 - a4 / g2), T2 += 1;
      }
      for (let e23 = 0; e23 < g2; e23++) for (let t4 = 0; t4 < h2; t4++) {
        let n4 = d2 + t4 + C2 * e23, r5 = d2 + t4 + C2 * (e23 + 1), i4 = d2 + (t4 + 1) + C2 * (e23 + 1), a4 = d2 + (t4 + 1) + C2 * e23;
        s2.push(n4, r5, a4), s2.push(r5, i4, a4), E2 += 6;
      }
      o2.addGroup(f2, E2, _2), f2 += E2, d2 += T2;
    }
  }
  copy(e21) {
    return super.copy(e21), this.parameters = Object.assign({}, e21.parameters), this;
  }
  static fromJSON(t2) {
    return new e9(t2.width, t2.height, t2.depth, t2.widthSegments, t2.heightSegments, t2.depthSegments);
  }
};
var gi = class e10 extends ur {
  constructor(e21 = 1, t2 = 1, n2 = 1, r3 = 32, i2 = 1, a2 = false, o2 = 0, s2 = Math.PI * 2) {
    super(), this.type = `CylinderGeometry`, this.parameters = {
      radiusTop: e21,
      radiusBottom: t2,
      height: n2,
      radialSegments: r3,
      heightSegments: i2,
      openEnded: a2,
      thetaStart: o2,
      thetaLength: s2
    };
    let c2 = this;
    r3 = Math.floor(r3), i2 = Math.floor(i2);
    let l2 = [], u2 = [], d2 = [], f2 = [], p2 = 0, m2 = [], h2 = n2 / 2, g2 = 0;
    _2(), a2 === false && (e21 > 0 && v2(true), t2 > 0 && v2(false)), this.setIndex(l2), this.setAttribute(`position`, new Qn(u2, 3)), this.setAttribute(`normal`, new Qn(d2, 3)), this.setAttribute(`uv`, new Qn(f2, 2));
    function _2() {
      let a3 = new U(), _3 = new U(), v3 = 0, y2 = (t2 - e21) / n2;
      for (let c3 = 0; c3 <= i2; c3++) {
        let l3 = [], g3 = c3 / i2, v4 = g3 * (t2 - e21) + e21;
        for (let e22 = 0; e22 <= r3; e22++) {
          let t3 = e22 / r3, i3 = t3 * s2 + o2, c4 = Math.sin(i3), m3 = Math.cos(i3);
          _3.x = v4 * c4, _3.y = -g3 * n2 + h2, _3.z = v4 * m3, u2.push(_3.x, _3.y, _3.z), a3.set(c4, y2, m3).normalize(), d2.push(a3.x, a3.y, a3.z), f2.push(t3, 1 - g3), l3.push(p2++);
        }
        m2.push(l3);
      }
      for (let n3 = 0; n3 < r3; n3++) for (let r4 = 0; r4 < i2; r4++) {
        let a4 = m2[r4][n3], o3 = m2[r4 + 1][n3], s3 = m2[r4 + 1][n3 + 1], c3 = m2[r4][n3 + 1];
        (e21 > 0 || r4 !== 0) && (l2.push(a4, o3, c3), v3 += 3), (t2 > 0 || r4 !== i2 - 1) && (l2.push(o3, s3, c3), v3 += 3);
      }
      c2.addGroup(g2, v3, 0), g2 += v3;
    }
    function v2(n3) {
      let i3 = p2, a3 = new H(), m3 = new U(), _3 = 0, v3 = n3 === true ? e21 : t2, y2 = n3 === true ? 1 : -1;
      for (let e22 = 1; e22 <= r3; e22++) u2.push(0, h2 * y2, 0), d2.push(0, y2, 0), f2.push(0.5, 0.5), p2++;
      let b2 = p2;
      for (let e22 = 0; e22 <= r3; e22++) {
        let t3 = e22 / r3 * s2 + o2, n4 = Math.cos(t3), i4 = Math.sin(t3);
        m3.x = v3 * i4, m3.y = h2 * y2, m3.z = v3 * n4, u2.push(m3.x, m3.y, m3.z), d2.push(0, y2, 0), a3.x = n4 * 0.5 + 0.5, a3.y = i4 * 0.5 * y2 + 0.5, f2.push(a3.x, a3.y), p2++;
      }
      for (let e22 = 0; e22 < r3; e22++) {
        let t3 = i3 + e22, r4 = b2 + e22;
        n3 === true ? l2.push(r4, r4 + 1, t3) : l2.push(r4 + 1, r4, t3), _3 += 3;
      }
      c2.addGroup(g2, _3, n3 === true ? 1 : 2), g2 += _3;
    }
  }
  copy(e21) {
    return super.copy(e21), this.parameters = Object.assign({}, e21.parameters), this;
  }
  static fromJSON(t2) {
    return new e10(t2.radiusTop, t2.radiusBottom, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
  }
};
var _i = class e11 extends gi {
  constructor(e21 = 1, t2 = 1, n2 = 32, r3 = 1, i2 = false, a2 = 0, o2 = Math.PI * 2) {
    super(0, e21, t2, n2, r3, i2, a2, o2), this.type = `ConeGeometry`, this.parameters = {
      radius: e21,
      height: t2,
      radialSegments: n2,
      heightSegments: r3,
      openEnded: i2,
      thetaStart: a2,
      thetaLength: o2
    };
  }
  static fromJSON(t2) {
    return new e11(t2.radius, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
  }
};
var vi = class e12 extends ur {
  constructor(e21 = [], t2 = [], n2 = 1, r3 = 0) {
    super(), this.type = `PolyhedronGeometry`, this.parameters = {
      vertices: e21,
      indices: t2,
      radius: n2,
      detail: r3
    };
    let i2 = [], a2 = [];
    o2(r3), c2(n2), l2(), this.setAttribute(`position`, new Qn(i2, 3)), this.setAttribute(`normal`, new Qn(i2.slice(), 3)), this.setAttribute(`uv`, new Qn(a2, 2)), r3 === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function o2(e22) {
      let n3 = new U(), r4 = new U(), i3 = new U();
      for (let a3 = 0; a3 < t2.length; a3 += 3) f2(t2[a3 + 0], n3), f2(t2[a3 + 1], r4), f2(t2[a3 + 2], i3), s2(n3, r4, i3, e22);
    }
    function s2(e22, t3, n3, r4) {
      let i3 = r4 + 1, a3 = [];
      for (let r5 = 0; r5 <= i3; r5++) {
        a3[r5] = [];
        let o3 = e22.clone().lerp(n3, r5 / i3), s3 = t3.clone().lerp(n3, r5 / i3), c3 = i3 - r5;
        for (let e23 = 0; e23 <= c3; e23++) e23 === 0 && r5 === i3 ? a3[r5][e23] = o3 : a3[r5][e23] = o3.clone().lerp(s3, e23 / c3);
      }
      for (let e23 = 0; e23 < i3; e23++) for (let t4 = 0; t4 < 2 * (i3 - e23) - 1; t4++) {
        let n4 = Math.floor(t4 / 2);
        t4 % 2 == 0 ? (d2(a3[e23][n4 + 1]), d2(a3[e23 + 1][n4]), d2(a3[e23][n4])) : (d2(a3[e23][n4 + 1]), d2(a3[e23 + 1][n4 + 1]), d2(a3[e23 + 1][n4]));
      }
    }
    function c2(e22) {
      let t3 = new U();
      for (let n3 = 0; n3 < i2.length; n3 += 3) t3.x = i2[n3 + 0], t3.y = i2[n3 + 1], t3.z = i2[n3 + 2], t3.normalize().multiplyScalar(e22), i2[n3 + 0] = t3.x, i2[n3 + 1] = t3.y, i2[n3 + 2] = t3.z;
    }
    function l2() {
      let e22 = new U();
      for (let t3 = 0; t3 < i2.length; t3 += 3) {
        e22.x = i2[t3 + 0], e22.y = i2[t3 + 1], e22.z = i2[t3 + 2];
        let n3 = h2(e22) / 2 / Math.PI + 0.5, r4 = g2(e22) / Math.PI + 0.5;
        a2.push(n3, 1 - r4);
      }
      p2(), u2();
    }
    function u2() {
      for (let e22 = 0; e22 < a2.length; e22 += 6) {
        let t3 = a2[e22 + 0], n3 = a2[e22 + 2], r4 = a2[e22 + 4];
        Math.max(t3, n3, r4) > 0.9 && Math.min(t3, n3, r4) < 0.1 && (t3 < 0.2 && (a2[e22 + 0] += 1), n3 < 0.2 && (a2[e22 + 2] += 1), r4 < 0.2 && (a2[e22 + 4] += 1));
      }
    }
    function d2(e22) {
      i2.push(e22.x, e22.y, e22.z);
    }
    function f2(t3, n3) {
      let r4 = t3 * 3;
      n3.x = e21[r4 + 0], n3.y = e21[r4 + 1], n3.z = e21[r4 + 2];
    }
    function p2() {
      let e22 = new U(), t3 = new U(), n3 = new U(), r4 = new U(), o3 = new H(), s3 = new H(), c3 = new H();
      for (let l3 = 0, u3 = 0; l3 < i2.length; l3 += 9, u3 += 6) {
        e22.set(i2[l3 + 0], i2[l3 + 1], i2[l3 + 2]), t3.set(i2[l3 + 3], i2[l3 + 4], i2[l3 + 5]), n3.set(i2[l3 + 6], i2[l3 + 7], i2[l3 + 8]), o3.set(a2[u3 + 0], a2[u3 + 1]), s3.set(a2[u3 + 2], a2[u3 + 3]), c3.set(a2[u3 + 4], a2[u3 + 5]), r4.copy(e22).add(t3).add(n3).divideScalar(3);
        let d3 = h2(r4);
        m2(o3, u3 + 0, e22, d3), m2(s3, u3 + 2, t3, d3), m2(c3, u3 + 4, n3, d3);
      }
    }
    function m2(e22, t3, n3, r4) {
      r4 < 0 && e22.x === 1 && (a2[t3] = e22.x - 1), n3.x === 0 && n3.z === 0 && (a2[t3] = r4 / 2 / Math.PI + 0.5);
    }
    function h2(e22) {
      return Math.atan2(e22.z, -e22.x);
    }
    function g2(e22) {
      return Math.atan2(-e22.y, Math.sqrt(e22.x * e22.x + e22.z * e22.z));
    }
  }
  copy(e21) {
    return super.copy(e21), this.parameters = Object.assign({}, e21.parameters), this;
  }
  static fromJSON(t2) {
    return new e12(t2.vertices, t2.indices, t2.radius, t2.detail);
  }
};
var yi = class {
  constructor() {
    this.type = `Curve`, this.arcLengthDivisions = 200, this.needsUpdate = false, this.cacheArcLengths = null;
  }
  getPoint() {
    z(`Curve: .getPoint() not implemented.`);
  }
  getPointAt(e21, t2) {
    let n2 = this.getUtoTmapping(e21);
    return this.getPoint(n2, t2);
  }
  getPoints(e21 = 5) {
    let t2 = [];
    for (let n2 = 0; n2 <= e21; n2++) t2.push(this.getPoint(n2 / e21));
    return t2;
  }
  getSpacedPoints(e21 = 5) {
    let t2 = [];
    for (let n2 = 0; n2 <= e21; n2++) t2.push(this.getPointAt(n2 / e21));
    return t2;
  }
  getLength() {
    let e21 = this.getLengths();
    return e21[e21.length - 1];
  }
  getLengths(e21 = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e21 + 1 && !this.needsUpdate) return this.cacheArcLengths;
    this.needsUpdate = false;
    let t2 = [], n2, r3 = this.getPoint(0), i2 = 0;
    t2.push(0);
    for (let a2 = 1; a2 <= e21; a2++) n2 = this.getPoint(a2 / e21), i2 += n2.distanceTo(r3), t2.push(i2), r3 = n2;
    return this.cacheArcLengths = t2, t2;
  }
  updateArcLengths() {
    this.needsUpdate = true, this.getLengths();
  }
  getUtoTmapping(e21, t2 = null) {
    let n2 = this.getLengths(), r3 = 0, i2 = n2.length, a2;
    a2 = t2 || e21 * n2[i2 - 1];
    let o2 = 0, s2 = i2 - 1, c2;
    for (; o2 <= s2; ) if (r3 = Math.floor(o2 + (s2 - o2) / 2), c2 = n2[r3] - a2, c2 < 0) o2 = r3 + 1;
    else if (c2 > 0) s2 = r3 - 1;
    else {
      s2 = r3;
      break;
    }
    if (r3 = s2, n2[r3] === a2) return r3 / (i2 - 1);
    let l2 = n2[r3], u2 = n2[r3 + 1] - l2, d2 = (a2 - l2) / u2;
    return (r3 + d2) / (i2 - 1);
  }
  getTangent(e21, t2) {
    let n2 = 1e-4, r3 = e21 - n2, i2 = e21 + n2;
    r3 < 0 && (r3 = 0), i2 > 1 && (i2 = 1);
    let a2 = this.getPoint(r3), o2 = this.getPoint(i2), s2 = t2 || (a2.isVector2 ? new H() : new U());
    return s2.copy(o2).sub(a2).normalize(), s2;
  }
  getTangentAt(e21, t2) {
    let n2 = this.getUtoTmapping(e21);
    return this.getTangent(n2, t2);
  }
  computeFrenetFrames(e21, t2 = false) {
    let n2 = new U(), r3 = [], i2 = [], a2 = [], o2 = new U(), s2 = new Nt();
    for (let t3 = 0; t3 <= e21; t3++) {
      let n3 = t3 / e21;
      r3[t3] = this.getTangentAt(n3, new U());
    }
    i2[0] = new U(), a2[0] = new U();
    let c2 = Number.MAX_VALUE, l2 = Math.abs(r3[0].x), u2 = Math.abs(r3[0].y), d2 = Math.abs(r3[0].z);
    l2 <= c2 && (c2 = l2, n2.set(1, 0, 0)), u2 <= c2 && (c2 = u2, n2.set(0, 1, 0)), d2 <= c2 && n2.set(0, 0, 1), o2.crossVectors(r3[0], n2).normalize(), i2[0].crossVectors(r3[0], o2), a2[0].crossVectors(r3[0], i2[0]);
    for (let t3 = 1; t3 <= e21; t3++) {
      if (i2[t3] = i2[t3 - 1].clone(), a2[t3] = a2[t3 - 1].clone(), o2.crossVectors(r3[t3 - 1], r3[t3]), o2.length() > 2 ** -52) {
        o2.normalize();
        let e22 = Math.acos(V(r3[t3 - 1].dot(r3[t3]), -1, 1));
        i2[t3].applyMatrix4(s2.makeRotationAxis(o2, e22));
      }
      a2[t3].crossVectors(r3[t3], i2[t3]);
    }
    if (t2 === true) {
      let t3 = Math.acos(V(i2[0].dot(i2[e21]), -1, 1));
      t3 /= e21, r3[0].dot(o2.crossVectors(i2[0], i2[e21])) > 0 && (t3 = -t3);
      for (let n3 = 1; n3 <= e21; n3++) i2[n3].applyMatrix4(s2.makeRotationAxis(r3[n3], t3 * n3)), a2[n3].crossVectors(r3[n3], i2[n3]);
    }
    return {
      tangents: r3,
      normals: i2,
      binormals: a2
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e21) {
    return this.arcLengthDivisions = e21.arcLengthDivisions, this.cacheArcLengths = null, this;
  }
  toJSON() {
    let e21 = {
      metadata: {
        version: 4.7,
        type: `Curve`,
        generator: `Curve.toJSON`
      }
    };
    return e21.arcLengthDivisions = this.arcLengthDivisions, e21.type = this.type, e21;
  }
  fromJSON(e21) {
    return this.arcLengthDivisions = e21.arcLengthDivisions, this.cacheArcLengths = null, this;
  }
};
var bi = class extends yi {
  constructor(e21 = 0, t2 = 0, n2 = 1, r3 = 1, i2 = 0, a2 = Math.PI * 2, o2 = false, s2 = 0) {
    super(), this.isEllipseCurve = true, this.type = `EllipseCurve`, this.aX = e21, this.aY = t2, this.xRadius = n2, this.yRadius = r3, this.aStartAngle = i2, this.aEndAngle = a2, this.aClockwise = o2, this.aRotation = s2;
  }
  getPoint(e21, t2 = new H()) {
    let n2 = t2, r3 = Math.PI * 2, i2 = this.aEndAngle - this.aStartAngle, a2 = Math.abs(i2) < 2 ** -52;
    for (; i2 < 0; ) i2 += r3;
    for (; i2 > r3; ) i2 -= r3;
    i2 < 2 ** -52 && (i2 = a2 ? 0 : r3), this.aClockwise === true && !a2 && (i2 === r3 ? i2 = -r3 : i2 -= r3);
    let o2 = this.aStartAngle + e21 * i2, s2 = this.aX + this.xRadius * Math.cos(o2), c2 = this.aY + this.yRadius * Math.sin(o2);
    if (this.aRotation !== 0) {
      let e22 = Math.cos(this.aRotation), t3 = Math.sin(this.aRotation), n3 = s2 - this.aX, r4 = c2 - this.aY;
      s2 = n3 * e22 - r4 * t3 + this.aX, c2 = n3 * t3 + r4 * e22 + this.aY;
    }
    return n2.set(s2, c2);
  }
  copy(e21) {
    return super.copy(e21), this.aX = e21.aX, this.aY = e21.aY, this.xRadius = e21.xRadius, this.yRadius = e21.yRadius, this.aStartAngle = e21.aStartAngle, this.aEndAngle = e21.aEndAngle, this.aClockwise = e21.aClockwise, this.aRotation = e21.aRotation, this;
  }
  toJSON() {
    let e21 = super.toJSON();
    return e21.aX = this.aX, e21.aY = this.aY, e21.xRadius = this.xRadius, e21.yRadius = this.yRadius, e21.aStartAngle = this.aStartAngle, e21.aEndAngle = this.aEndAngle, e21.aClockwise = this.aClockwise, e21.aRotation = this.aRotation, e21;
  }
  fromJSON(e21) {
    return super.fromJSON(e21), this.aX = e21.aX, this.aY = e21.aY, this.xRadius = e21.xRadius, this.yRadius = e21.yRadius, this.aStartAngle = e21.aStartAngle, this.aEndAngle = e21.aEndAngle, this.aClockwise = e21.aClockwise, this.aRotation = e21.aRotation, this;
  }
};
var xi = class extends bi {
  constructor(e21, t2, n2, r3, i2, a2) {
    super(e21, t2, n2, n2, r3, i2, a2), this.isArcCurve = true, this.type = `ArcCurve`;
  }
};
function Si() {
  let e21 = 0, t2 = 0, n2 = 0, r3 = 0;
  function i2(i3, a2, o2, s2) {
    e21 = i3, t2 = o2, n2 = -3 * i3 + 3 * a2 - 2 * o2 - s2, r3 = 2 * i3 - 2 * a2 + o2 + s2;
  }
  return {
    initCatmullRom: function(e22, t3, n3, r4, a2) {
      i2(t3, n3, a2 * (n3 - e22), a2 * (r4 - t3));
    },
    initNonuniformCatmullRom: function(e22, t3, n3, r4, a2, o2, s2) {
      let c2 = (t3 - e22) / a2 - (n3 - e22) / (a2 + o2) + (n3 - t3) / o2, l2 = (n3 - t3) / o2 - (r4 - t3) / (o2 + s2) + (r4 - n3) / s2;
      c2 *= o2, l2 *= o2, i2(t3, n3, c2, l2);
    },
    calc: function(i3) {
      let a2 = i3 * i3, o2 = a2 * i3;
      return e21 + t2 * i3 + n2 * a2 + r3 * o2;
    }
  };
}
var Ci = new U();
var wi = new U();
var Ti = new Si();
var Ei = new Si();
var Di = new Si();
var Oi = class extends yi {
  constructor(e21 = [], t2 = false, n2 = `centripetal`, r3 = 0.5) {
    super(), this.isCatmullRomCurve3 = true, this.type = `CatmullRomCurve3`, this.points = e21, this.closed = t2, this.curveType = n2, this.tension = r3;
  }
  getPoint(e21, t2 = new U()) {
    let n2 = t2, r3 = this.points, i2 = r3.length, a2 = (i2 - +!this.closed) * e21, o2 = Math.floor(a2), s2 = a2 - o2;
    this.closed ? o2 += o2 > 0 ? 0 : (Math.floor(Math.abs(o2) / i2) + 1) * i2 : s2 === 0 && o2 === i2 - 1 && (o2 = i2 - 2, s2 = 1);
    let c2, l2;
    this.closed || o2 > 0 ? c2 = r3[(o2 - 1) % i2] : (wi.subVectors(r3[0], r3[1]).add(r3[0]), c2 = wi);
    let u2 = r3[o2 % i2], d2 = r3[(o2 + 1) % i2];
    if (this.closed || o2 + 2 < i2 ? l2 = r3[(o2 + 2) % i2] : (Ci.subVectors(r3[i2 - 1], r3[i2 - 2]).add(r3[i2 - 1]), l2 = Ci), this.curveType === `centripetal` || this.curveType === `chordal`) {
      let e22 = this.curveType === `chordal` ? 0.5 : 0.25, t3 = c2.distanceToSquared(u2) ** +e22, n3 = u2.distanceToSquared(d2) ** +e22, r4 = d2.distanceToSquared(l2) ** +e22;
      n3 < 1e-4 && (n3 = 1), t3 < 1e-4 && (t3 = n3), r4 < 1e-4 && (r4 = n3), Ti.initNonuniformCatmullRom(c2.x, u2.x, d2.x, l2.x, t3, n3, r4), Ei.initNonuniformCatmullRom(c2.y, u2.y, d2.y, l2.y, t3, n3, r4), Di.initNonuniformCatmullRom(c2.z, u2.z, d2.z, l2.z, t3, n3, r4);
    } else this.curveType === `catmullrom` && (Ti.initCatmullRom(c2.x, u2.x, d2.x, l2.x, this.tension), Ei.initCatmullRom(c2.y, u2.y, d2.y, l2.y, this.tension), Di.initCatmullRom(c2.z, u2.z, d2.z, l2.z, this.tension));
    return n2.set(Ti.calc(s2), Ei.calc(s2), Di.calc(s2)), n2;
  }
  copy(e21) {
    super.copy(e21), this.points = [];
    for (let t2 = 0, n2 = e21.points.length; t2 < n2; t2++) {
      let n3 = e21.points[t2];
      this.points.push(n3.clone());
    }
    return this.closed = e21.closed, this.curveType = e21.curveType, this.tension = e21.tension, this;
  }
  toJSON() {
    let e21 = super.toJSON();
    e21.points = [];
    for (let t2 = 0, n2 = this.points.length; t2 < n2; t2++) {
      let n3 = this.points[t2];
      e21.points.push(n3.toArray());
    }
    return e21.closed = this.closed, e21.curveType = this.curveType, e21.tension = this.tension, e21;
  }
  fromJSON(e21) {
    super.fromJSON(e21), this.points = [];
    for (let t2 = 0, n2 = e21.points.length; t2 < n2; t2++) {
      let n3 = e21.points[t2];
      this.points.push(new U().fromArray(n3));
    }
    return this.closed = e21.closed, this.curveType = e21.curveType, this.tension = e21.tension, this;
  }
};
function ki(e21, t2, n2, r3, i2) {
  let a2 = (r3 - t2) * 0.5, o2 = (i2 - n2) * 0.5, s2 = e21 * e21, c2 = e21 * s2;
  return (2 * n2 - 2 * r3 + a2 + o2) * c2 + (-3 * n2 + 3 * r3 - 2 * a2 - o2) * s2 + a2 * e21 + n2;
}
function Ai(e21, t2) {
  let n2 = 1 - e21;
  return n2 * n2 * t2;
}
function ji(e21, t2) {
  return 2 * (1 - e21) * e21 * t2;
}
function Mi(e21, t2) {
  return e21 * e21 * t2;
}
function Ni(e21, t2, n2, r3) {
  return Ai(e21, t2) + ji(e21, n2) + Mi(e21, r3);
}
function Pi(e21, t2) {
  let n2 = 1 - e21;
  return n2 * n2 * n2 * t2;
}
function Fi(e21, t2) {
  let n2 = 1 - e21;
  return 3 * n2 * n2 * e21 * t2;
}
function Ii(e21, t2) {
  return 3 * (1 - e21) * e21 * e21 * t2;
}
function Li(e21, t2) {
  return e21 * e21 * e21 * t2;
}
function Ri(e21, t2, n2, r3, i2) {
  return Pi(e21, t2) + Fi(e21, n2) + Ii(e21, r3) + Li(e21, i2);
}
var zi = class extends yi {
  constructor(e21 = new H(), t2 = new H(), n2 = new H(), r3 = new H()) {
    super(), this.isCubicBezierCurve = true, this.type = `CubicBezierCurve`, this.v0 = e21, this.v1 = t2, this.v2 = n2, this.v3 = r3;
  }
  getPoint(e21, t2 = new H()) {
    let n2 = t2, r3 = this.v0, i2 = this.v1, a2 = this.v2, o2 = this.v3;
    return n2.set(Ri(e21, r3.x, i2.x, a2.x, o2.x), Ri(e21, r3.y, i2.y, a2.y, o2.y)), n2;
  }
  copy(e21) {
    return super.copy(e21), this.v0.copy(e21.v0), this.v1.copy(e21.v1), this.v2.copy(e21.v2), this.v3.copy(e21.v3), this;
  }
  toJSON() {
    let e21 = super.toJSON();
    return e21.v0 = this.v0.toArray(), e21.v1 = this.v1.toArray(), e21.v2 = this.v2.toArray(), e21.v3 = this.v3.toArray(), e21;
  }
  fromJSON(e21) {
    return super.fromJSON(e21), this.v0.fromArray(e21.v0), this.v1.fromArray(e21.v1), this.v2.fromArray(e21.v2), this.v3.fromArray(e21.v3), this;
  }
};
var Bi = class extends yi {
  constructor(e21 = new U(), t2 = new U(), n2 = new U(), r3 = new U()) {
    super(), this.isCubicBezierCurve3 = true, this.type = `CubicBezierCurve3`, this.v0 = e21, this.v1 = t2, this.v2 = n2, this.v3 = r3;
  }
  getPoint(e21, t2 = new U()) {
    let n2 = t2, r3 = this.v0, i2 = this.v1, a2 = this.v2, o2 = this.v3;
    return n2.set(Ri(e21, r3.x, i2.x, a2.x, o2.x), Ri(e21, r3.y, i2.y, a2.y, o2.y), Ri(e21, r3.z, i2.z, a2.z, o2.z)), n2;
  }
  copy(e21) {
    return super.copy(e21), this.v0.copy(e21.v0), this.v1.copy(e21.v1), this.v2.copy(e21.v2), this.v3.copy(e21.v3), this;
  }
  toJSON() {
    let e21 = super.toJSON();
    return e21.v0 = this.v0.toArray(), e21.v1 = this.v1.toArray(), e21.v2 = this.v2.toArray(), e21.v3 = this.v3.toArray(), e21;
  }
  fromJSON(e21) {
    return super.fromJSON(e21), this.v0.fromArray(e21.v0), this.v1.fromArray(e21.v1), this.v2.fromArray(e21.v2), this.v3.fromArray(e21.v3), this;
  }
};
var Vi = class extends yi {
  constructor(e21 = new H(), t2 = new H()) {
    super(), this.isLineCurve = true, this.type = `LineCurve`, this.v1 = e21, this.v2 = t2;
  }
  getPoint(e21, t2 = new H()) {
    let n2 = t2;
    return e21 === 1 ? n2.copy(this.v2) : (n2.copy(this.v2).sub(this.v1), n2.multiplyScalar(e21).add(this.v1)), n2;
  }
  getPointAt(e21, t2) {
    return this.getPoint(e21, t2);
  }
  getTangent(e21, t2 = new H()) {
    return t2.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e21, t2) {
    return this.getTangent(e21, t2);
  }
  copy(e21) {
    return super.copy(e21), this.v1.copy(e21.v1), this.v2.copy(e21.v2), this;
  }
  toJSON() {
    let e21 = super.toJSON();
    return e21.v1 = this.v1.toArray(), e21.v2 = this.v2.toArray(), e21;
  }
  fromJSON(e21) {
    return super.fromJSON(e21), this.v1.fromArray(e21.v1), this.v2.fromArray(e21.v2), this;
  }
};
var Hi = class extends yi {
  constructor(e21 = new U(), t2 = new U()) {
    super(), this.isLineCurve3 = true, this.type = `LineCurve3`, this.v1 = e21, this.v2 = t2;
  }
  getPoint(e21, t2 = new U()) {
    let n2 = t2;
    return e21 === 1 ? n2.copy(this.v2) : (n2.copy(this.v2).sub(this.v1), n2.multiplyScalar(e21).add(this.v1)), n2;
  }
  getPointAt(e21, t2) {
    return this.getPoint(e21, t2);
  }
  getTangent(e21, t2 = new U()) {
    return t2.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e21, t2) {
    return this.getTangent(e21, t2);
  }
  copy(e21) {
    return super.copy(e21), this.v1.copy(e21.v1), this.v2.copy(e21.v2), this;
  }
  toJSON() {
    let e21 = super.toJSON();
    return e21.v1 = this.v1.toArray(), e21.v2 = this.v2.toArray(), e21;
  }
  fromJSON(e21) {
    return super.fromJSON(e21), this.v1.fromArray(e21.v1), this.v2.fromArray(e21.v2), this;
  }
};
var Ui = class extends yi {
  constructor(e21 = new H(), t2 = new H(), n2 = new H()) {
    super(), this.isQuadraticBezierCurve = true, this.type = `QuadraticBezierCurve`, this.v0 = e21, this.v1 = t2, this.v2 = n2;
  }
  getPoint(e21, t2 = new H()) {
    let n2 = t2, r3 = this.v0, i2 = this.v1, a2 = this.v2;
    return n2.set(Ni(e21, r3.x, i2.x, a2.x), Ni(e21, r3.y, i2.y, a2.y)), n2;
  }
  copy(e21) {
    return super.copy(e21), this.v0.copy(e21.v0), this.v1.copy(e21.v1), this.v2.copy(e21.v2), this;
  }
  toJSON() {
    let e21 = super.toJSON();
    return e21.v0 = this.v0.toArray(), e21.v1 = this.v1.toArray(), e21.v2 = this.v2.toArray(), e21;
  }
  fromJSON(e21) {
    return super.fromJSON(e21), this.v0.fromArray(e21.v0), this.v1.fromArray(e21.v1), this.v2.fromArray(e21.v2), this;
  }
};
var Wi = class extends yi {
  constructor(e21 = new U(), t2 = new U(), n2 = new U()) {
    super(), this.isQuadraticBezierCurve3 = true, this.type = `QuadraticBezierCurve3`, this.v0 = e21, this.v1 = t2, this.v2 = n2;
  }
  getPoint(e21, t2 = new U()) {
    let n2 = t2, r3 = this.v0, i2 = this.v1, a2 = this.v2;
    return n2.set(Ni(e21, r3.x, i2.x, a2.x), Ni(e21, r3.y, i2.y, a2.y), Ni(e21, r3.z, i2.z, a2.z)), n2;
  }
  copy(e21) {
    return super.copy(e21), this.v0.copy(e21.v0), this.v1.copy(e21.v1), this.v2.copy(e21.v2), this;
  }
  toJSON() {
    let e21 = super.toJSON();
    return e21.v0 = this.v0.toArray(), e21.v1 = this.v1.toArray(), e21.v2 = this.v2.toArray(), e21;
  }
  fromJSON(e21) {
    return super.fromJSON(e21), this.v0.fromArray(e21.v0), this.v1.fromArray(e21.v1), this.v2.fromArray(e21.v2), this;
  }
};
var Gi = class extends yi {
  constructor(e21 = []) {
    super(), this.isSplineCurve = true, this.type = `SplineCurve`, this.points = e21;
  }
  getPoint(e21, t2 = new H()) {
    let n2 = t2, r3 = this.points, i2 = (r3.length - 1) * e21, a2 = Math.floor(i2), o2 = i2 - a2, s2 = r3[a2 === 0 ? a2 : a2 - 1], c2 = r3[a2], l2 = r3[a2 > r3.length - 2 ? r3.length - 1 : a2 + 1], u2 = r3[a2 > r3.length - 3 ? r3.length - 1 : a2 + 2];
    return n2.set(ki(o2, s2.x, c2.x, l2.x, u2.x), ki(o2, s2.y, c2.y, l2.y, u2.y)), n2;
  }
  copy(e21) {
    super.copy(e21), this.points = [];
    for (let t2 = 0, n2 = e21.points.length; t2 < n2; t2++) {
      let n3 = e21.points[t2];
      this.points.push(n3.clone());
    }
    return this;
  }
  toJSON() {
    let e21 = super.toJSON();
    e21.points = [];
    for (let t2 = 0, n2 = this.points.length; t2 < n2; t2++) {
      let n3 = this.points[t2];
      e21.points.push(n3.toArray());
    }
    return e21;
  }
  fromJSON(e21) {
    super.fromJSON(e21), this.points = [];
    for (let t2 = 0, n2 = e21.points.length; t2 < n2; t2++) {
      let n3 = e21.points[t2];
      this.points.push(new H().fromArray(n3));
    }
    return this;
  }
};
var Ki = Object.freeze({
  __proto__: null,
  ArcCurve: xi,
  CatmullRomCurve3: Oi,
  CubicBezierCurve: zi,
  CubicBezierCurve3: Bi,
  EllipseCurve: bi,
  LineCurve: Vi,
  LineCurve3: Hi,
  QuadraticBezierCurve: Ui,
  QuadraticBezierCurve3: Wi,
  SplineCurve: Gi
});
var qi = class extends yi {
  constructor() {
    super(), this.type = `CurvePath`, this.curves = [], this.autoClose = false, this.cacheLengths = null;
  }
  add(e21) {
    this.curves.push(e21);
  }
  closePath() {
    let e21 = this.curves[0].getPoint(0), t2 = this.curves[this.curves.length - 1].getPoint(1);
    if (!e21.equals(t2)) {
      let n2 = e21.isVector2 === true ? `LineCurve` : `LineCurve3`;
      this.curves.push(new Ki[n2](t2, e21));
    }
    return this;
  }
  getPoint(e21, t2) {
    let n2 = e21 * this.getLength(), r3 = this.getCurveLengths(), i2 = 0;
    for (; i2 < r3.length; ) {
      if (r3[i2] >= n2) {
        let e22 = r3[i2] - n2, a2 = this.curves[i2], o2 = a2.getLength(), s2 = o2 === 0 ? 0 : 1 - e22 / o2;
        return a2.getPointAt(s2, t2);
      }
      i2++;
    }
    return null;
  }
  getLength() {
    let e21 = this.getCurveLengths();
    return e21[e21.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
    let e21 = [], t2 = 0;
    for (let n2 = 0, r3 = this.curves.length; n2 < r3; n2++) t2 += this.curves[n2].getLength(), e21.push(t2);
    return this.cacheLengths = e21, e21;
  }
  getSpacedPoints(e21 = 40) {
    let t2 = [];
    for (let n2 = 0; n2 <= e21; n2++) t2.push(this.getPoint(n2 / e21));
    return this.autoClose && t2.push(t2[0]), t2;
  }
  getPoints(e21 = 12) {
    let t2 = [], n2;
    for (let r3 = 0, i2 = this.curves; r3 < i2.length; r3++) {
      let a2 = i2[r3], o2 = a2.isEllipseCurve ? e21 * 2 : a2.isLineCurve || a2.isLineCurve3 ? 1 : a2.isSplineCurve ? e21 * a2.points.length : e21, s2 = a2.getPoints(o2);
      for (let e22 = 0; e22 < s2.length; e22++) {
        let r4 = s2[e22];
        n2 && n2.equals(r4) || (t2.push(r4), n2 = r4);
      }
    }
    return this.autoClose && t2.length > 1 && !t2[t2.length - 1].equals(t2[0]) && t2.push(t2[0]), t2;
  }
  copy(e21) {
    super.copy(e21), this.curves = [];
    for (let t2 = 0, n2 = e21.curves.length; t2 < n2; t2++) {
      let n3 = e21.curves[t2];
      this.curves.push(n3.clone());
    }
    return this.autoClose = e21.autoClose, this.cacheLengths = null, this;
  }
  toJSON() {
    let e21 = super.toJSON();
    e21.autoClose = this.autoClose, e21.curves = [];
    for (let t2 = 0, n2 = this.curves.length; t2 < n2; t2++) {
      let n3 = this.curves[t2];
      e21.curves.push(n3.toJSON());
    }
    return e21;
  }
  fromJSON(e21) {
    super.fromJSON(e21), this.autoClose = e21.autoClose, this.curves = [];
    for (let t2 = 0, n2 = e21.curves.length; t2 < n2; t2++) {
      let n3 = e21.curves[t2];
      this.curves.push(new Ki[n3.type]().fromJSON(n3));
    }
    return this.cacheLengths = null, this;
  }
};
var Ji = class extends qi {
  constructor(e21) {
    super(), this.type = `Path`, this.currentPoint = new H(), e21 && this.setFromPoints(e21);
  }
  setFromPoints(e21) {
    this.moveTo(e21[0].x, e21[0].y);
    for (let t2 = 1, n2 = e21.length; t2 < n2; t2++) this.lineTo(e21[t2].x, e21[t2].y);
    return this;
  }
  moveTo(e21, t2) {
    return this.currentPoint.set(e21, t2), this;
  }
  lineTo(e21, t2) {
    let n2 = new Vi(this.currentPoint.clone(), new H(e21, t2));
    return this.curves.push(n2), this.currentPoint.set(e21, t2), this;
  }
  quadraticCurveTo(e21, t2, n2, r3) {
    let i2 = new Ui(this.currentPoint.clone(), new H(e21, t2), new H(n2, r3));
    return this.curves.push(i2), this.currentPoint.set(n2, r3), this;
  }
  bezierCurveTo(e21, t2, n2, r3, i2, a2) {
    let o2 = new zi(this.currentPoint.clone(), new H(e21, t2), new H(n2, r3), new H(i2, a2));
    return this.curves.push(o2), this.currentPoint.set(i2, a2), this;
  }
  splineThru(e21) {
    let t2 = new Gi([this.currentPoint.clone()].concat(e21));
    return this.curves.push(t2), this.currentPoint.copy(e21[e21.length - 1]), this;
  }
  arc(e21, t2, n2, r3, i2, a2) {
    let o2 = this.currentPoint.x, s2 = this.currentPoint.y;
    return this.absarc(e21 + o2, t2 + s2, n2, r3, i2, a2), this;
  }
  absarc(e21, t2, n2, r3, i2, a2) {
    return this.absellipse(e21, t2, n2, n2, r3, i2, a2), this;
  }
  ellipse(e21, t2, n2, r3, i2, a2, o2, s2) {
    let c2 = this.currentPoint.x, l2 = this.currentPoint.y;
    return this.absellipse(e21 + c2, t2 + l2, n2, r3, i2, a2, o2, s2), this;
  }
  absellipse(e21, t2, n2, r3, i2, a2, o2, s2) {
    let c2 = new bi(e21, t2, n2, r3, i2, a2, o2, s2);
    if (this.curves.length > 0) {
      let e22 = c2.getPoint(0);
      e22.equals(this.currentPoint) || this.lineTo(e22.x, e22.y);
    }
    this.curves.push(c2);
    let l2 = c2.getPoint(1);
    return this.currentPoint.copy(l2), this;
  }
  copy(e21) {
    return super.copy(e21), this.currentPoint.copy(e21.currentPoint), this;
  }
  toJSON() {
    let e21 = super.toJSON();
    return e21.currentPoint = this.currentPoint.toArray(), e21;
  }
  fromJSON(e21) {
    return super.fromJSON(e21), this.currentPoint.fromArray(e21.currentPoint), this;
  }
};
var Yi = class extends Ji {
  constructor(e21) {
    super(e21), this.uuid = it(), this.type = `Shape`, this.holes = [];
  }
  getPointsHoles(e21) {
    let t2 = [];
    for (let n2 = 0, r3 = this.holes.length; n2 < r3; n2++) t2[n2] = this.holes[n2].getPoints(e21);
    return t2;
  }
  extractPoints(e21) {
    return {
      shape: this.getPoints(e21),
      holes: this.getPointsHoles(e21)
    };
  }
  copy(e21) {
    super.copy(e21), this.holes = [];
    for (let t2 = 0, n2 = e21.holes.length; t2 < n2; t2++) {
      let n3 = e21.holes[t2];
      this.holes.push(n3.clone());
    }
    return this;
  }
  toJSON() {
    let e21 = super.toJSON();
    e21.uuid = this.uuid, e21.holes = [];
    for (let t2 = 0, n2 = this.holes.length; t2 < n2; t2++) {
      let n3 = this.holes[t2];
      e21.holes.push(n3.toJSON());
    }
    return e21;
  }
  fromJSON(e21) {
    super.fromJSON(e21), this.uuid = e21.uuid, this.holes = [];
    for (let t2 = 0, n2 = e21.holes.length; t2 < n2; t2++) {
      let n3 = e21.holes[t2];
      this.holes.push(new Ji().fromJSON(n3));
    }
    return this;
  }
};
function Xi(e21, t2, n2 = 2) {
  let r3 = t2 && t2.length, i2 = r3 ? t2[0] * n2 : e21.length, a2 = Zi(e21, 0, i2, n2, true), o2 = [];
  if (!a2 || a2.next === a2.prev) return o2;
  let s2, c2, l2;
  if (r3 && (a2 = ia(e21, t2, a2, n2)), e21.length > 80 * n2) {
    s2 = e21[0], c2 = e21[1];
    let t3 = s2, r4 = c2;
    for (let a3 = n2; a3 < i2; a3 += n2) {
      let n3 = e21[a3], i3 = e21[a3 + 1];
      n3 < s2 && (s2 = n3), i3 < c2 && (c2 = i3), n3 > t3 && (t3 = n3), i3 > r4 && (r4 = i3);
    }
    l2 = Math.max(t3 - s2, r4 - c2), l2 = l2 === 0 ? 0 : 32767 / l2;
  }
  return $i(a2, o2, n2, s2, c2, l2, 0), o2;
}
function Zi(e21, t2, n2, r3, i2) {
  let a2;
  if (i2 === Oa(e21, t2, n2, r3) > 0) for (let i3 = t2; i3 < n2; i3 += r3) a2 = Ta(i3 / r3 | 0, e21[i3], e21[i3 + 1], a2);
  else for (let i3 = n2 - r3; i3 >= t2; i3 -= r3) a2 = Ta(i3 / r3 | 0, e21[i3], e21[i3 + 1], a2);
  return a2 && _a(a2, a2.next) && (Ea(a2), a2 = a2.next), a2;
}
function Qi(e21, t2) {
  if (!e21) return e21;
  t2 ||= e21;
  let n2 = e21, r3;
  do
    if (r3 = false, !n2.steiner && (_a(n2, n2.next) || ga(n2.prev, n2, n2.next) === 0)) {
      if (Ea(n2), n2 = t2 = n2.prev, n2 === n2.next) break;
      r3 = true;
    } else n2 = n2.next;
  while (r3 || n2 !== t2);
  return t2;
}
function $i(e21, t2, n2, r3, i2, a2, o2) {
  if (!e21) return;
  !o2 && a2 && la(e21, r3, i2, a2);
  let s2 = e21;
  for (; e21.prev !== e21.next; ) {
    let c2 = e21.prev, l2 = e21.next;
    if (a2 ? ta(e21, r3, i2, a2) : ea(e21)) t2.push(c2.i, e21.i, l2.i), Ea(e21), e21 = l2.next, s2 = l2.next;
    else if (e21 = l2, e21 === s2) {
      o2 ? o2 === 1 ? (e21 = na(Qi(e21), t2), $i(e21, t2, n2, r3, i2, a2, 2)) : o2 === 2 && ra(e21, t2, n2, r3, i2, a2) : $i(Qi(e21), t2, n2, r3, i2, a2, 1);
      break;
    }
  }
}
function ea(e21) {
  let t2 = e21.prev, n2 = e21, r3 = e21.next;
  if (ga(t2, n2, r3) >= 0) return false;
  let i2 = t2.x, a2 = n2.x, o2 = r3.x, s2 = t2.y, c2 = n2.y, l2 = r3.y, u2 = Math.min(i2, a2, o2), d2 = Math.min(s2, c2, l2), f2 = Math.max(i2, a2, o2), p2 = Math.max(s2, c2, l2), m2 = r3.next;
  for (; m2 !== t2; ) {
    if (m2.x >= u2 && m2.x <= f2 && m2.y >= d2 && m2.y <= p2 && ma(i2, s2, a2, c2, o2, l2, m2.x, m2.y) && ga(m2.prev, m2, m2.next) >= 0) return false;
    m2 = m2.next;
  }
  return true;
}
function ta(e21, t2, n2, r3) {
  let i2 = e21.prev, a2 = e21, o2 = e21.next;
  if (ga(i2, a2, o2) >= 0) return false;
  let s2 = i2.x, c2 = a2.x, l2 = o2.x, u2 = i2.y, d2 = a2.y, f2 = o2.y, p2 = Math.min(s2, c2, l2), m2 = Math.min(u2, d2, f2), h2 = Math.max(s2, c2, l2), g2 = Math.max(u2, d2, f2), _2 = da(p2, m2, t2, n2, r3), v2 = da(h2, g2, t2, n2, r3), y2 = e21.prevZ, b2 = e21.nextZ;
  for (; y2 && y2.z >= _2 && b2 && b2.z <= v2; ) {
    if (y2.x >= p2 && y2.x <= h2 && y2.y >= m2 && y2.y <= g2 && y2 !== i2 && y2 !== o2 && ma(s2, u2, c2, d2, l2, f2, y2.x, y2.y) && ga(y2.prev, y2, y2.next) >= 0 || (y2 = y2.prevZ, b2.x >= p2 && b2.x <= h2 && b2.y >= m2 && b2.y <= g2 && b2 !== i2 && b2 !== o2 && ma(s2, u2, c2, d2, l2, f2, b2.x, b2.y) && ga(b2.prev, b2, b2.next) >= 0)) return false;
    b2 = b2.nextZ;
  }
  for (; y2 && y2.z >= _2; ) {
    if (y2.x >= p2 && y2.x <= h2 && y2.y >= m2 && y2.y <= g2 && y2 !== i2 && y2 !== o2 && ma(s2, u2, c2, d2, l2, f2, y2.x, y2.y) && ga(y2.prev, y2, y2.next) >= 0) return false;
    y2 = y2.prevZ;
  }
  for (; b2 && b2.z <= v2; ) {
    if (b2.x >= p2 && b2.x <= h2 && b2.y >= m2 && b2.y <= g2 && b2 !== i2 && b2 !== o2 && ma(s2, u2, c2, d2, l2, f2, b2.x, b2.y) && ga(b2.prev, b2, b2.next) >= 0) return false;
    b2 = b2.nextZ;
  }
  return true;
}
function na(e21, t2) {
  let n2 = e21;
  do {
    let r3 = n2.prev, i2 = n2.next.next;
    !_a(r3, i2) && va(r3, n2, n2.next, i2) && Sa(r3, i2) && Sa(i2, r3) && (t2.push(r3.i, n2.i, i2.i), Ea(n2), Ea(n2.next), n2 = e21 = i2), n2 = n2.next;
  } while (n2 !== e21);
  return Qi(n2);
}
function ra(e21, t2, n2, r3, i2, a2) {
  let o2 = e21;
  do {
    let e22 = o2.next.next;
    for (; e22 !== o2.prev; ) {
      if (o2.i !== e22.i && ha(o2, e22)) {
        let s2 = wa(o2, e22);
        o2 = Qi(o2, o2.next), s2 = Qi(s2, s2.next), $i(o2, t2, n2, r3, i2, a2, 0), $i(s2, t2, n2, r3, i2, a2, 0);
        return;
      }
      e22 = e22.next;
    }
    o2 = o2.next;
  } while (o2 !== e21);
}
function ia(e21, t2, n2, r3) {
  let i2 = [];
  for (let n3 = 0, a2 = t2.length; n3 < a2; n3++) {
    let o2 = Zi(e21, t2[n3] * r3, n3 < a2 - 1 ? t2[n3 + 1] * r3 : e21.length, r3, false);
    o2 === o2.next && (o2.steiner = true), i2.push(fa(o2));
  }
  i2.sort(aa);
  for (let e22 = 0; e22 < i2.length; e22++) n2 = oa(i2[e22], n2);
  return n2;
}
function aa(e21, t2) {
  let n2 = e21.x - t2.x;
  return n2 === 0 && (n2 = e21.y - t2.y, n2 === 0 && (n2 = (e21.next.y - e21.y) / (e21.next.x - e21.x) - (t2.next.y - t2.y) / (t2.next.x - t2.x))), n2;
}
function oa(e21, t2) {
  let n2 = sa(e21, t2);
  if (!n2) return t2;
  let r3 = wa(n2, e21);
  return Qi(r3, r3.next), Qi(n2, n2.next);
}
function sa(e21, t2) {
  let n2 = t2, r3 = e21.x, i2 = e21.y, a2 = -1 / 0, o2;
  if (_a(e21, n2)) return n2;
  do {
    if (_a(e21, n2.next)) return n2.next;
    if (i2 <= n2.y && i2 >= n2.next.y && n2.next.y !== n2.y) {
      let e22 = n2.x + (i2 - n2.y) * (n2.next.x - n2.x) / (n2.next.y - n2.y);
      if (e22 <= r3 && e22 > a2 && (a2 = e22, o2 = n2.x < n2.next.x ? n2 : n2.next, e22 === r3)) return o2;
    }
    n2 = n2.next;
  } while (n2 !== t2);
  if (!o2) return null;
  let s2 = o2, c2 = o2.x, l2 = o2.y, u2 = 1 / 0;
  n2 = o2;
  do {
    if (r3 >= n2.x && n2.x >= c2 && r3 !== n2.x && pa(i2 < l2 ? r3 : a2, i2, c2, l2, i2 < l2 ? a2 : r3, i2, n2.x, n2.y)) {
      let t3 = Math.abs(i2 - n2.y) / (r3 - n2.x);
      Sa(n2, e21) && (t3 < u2 || t3 === u2 && (n2.x > o2.x || n2.x === o2.x && ca(o2, n2))) && (o2 = n2, u2 = t3);
    }
    n2 = n2.next;
  } while (n2 !== s2);
  return o2;
}
function ca(e21, t2) {
  return ga(e21.prev, e21, t2.prev) < 0 && ga(t2.next, e21, e21.next) < 0;
}
function la(e21, t2, n2, r3) {
  let i2 = e21;
  do
    i2.z === 0 && (i2.z = da(i2.x, i2.y, t2, n2, r3)), i2.prevZ = i2.prev, i2.nextZ = i2.next, i2 = i2.next;
  while (i2 !== e21);
  i2.prevZ.nextZ = null, i2.prevZ = null, ua(i2);
}
function ua(e21) {
  let t2, n2 = 1;
  do {
    let r3 = e21, i2;
    e21 = null;
    let a2 = null;
    for (t2 = 0; r3; ) {
      t2++;
      let o2 = r3, s2 = 0;
      for (let e22 = 0; e22 < n2 && (s2++, o2 = o2.nextZ, o2); e22++) ;
      let c2 = n2;
      for (; s2 > 0 || c2 > 0 && o2; ) s2 !== 0 && (c2 === 0 || !o2 || r3.z <= o2.z) ? (i2 = r3, r3 = r3.nextZ, s2--) : (i2 = o2, o2 = o2.nextZ, c2--), a2 ? a2.nextZ = i2 : e21 = i2, i2.prevZ = a2, a2 = i2;
      r3 = o2;
    }
    a2.nextZ = null, n2 *= 2;
  } while (t2 > 1);
  return e21;
}
function da(e21, t2, n2, r3, i2) {
  return e21 = (e21 - n2) * i2 | 0, t2 = (t2 - r3) * i2 | 0, e21 = (e21 | e21 << 8) & 16711935, e21 = (e21 | e21 << 4) & 252645135, e21 = (e21 | e21 << 2) & 858993459, e21 = (e21 | e21 << 1) & 1431655765, t2 = (t2 | t2 << 8) & 16711935, t2 = (t2 | t2 << 4) & 252645135, t2 = (t2 | t2 << 2) & 858993459, t2 = (t2 | t2 << 1) & 1431655765, e21 | t2 << 1;
}
function fa(e21) {
  let t2 = e21, n2 = e21;
  do
    (t2.x < n2.x || t2.x === n2.x && t2.y < n2.y) && (n2 = t2), t2 = t2.next;
  while (t2 !== e21);
  return n2;
}
function pa(e21, t2, n2, r3, i2, a2, o2, s2) {
  return (i2 - o2) * (t2 - s2) >= (e21 - o2) * (a2 - s2) && (e21 - o2) * (r3 - s2) >= (n2 - o2) * (t2 - s2) && (n2 - o2) * (a2 - s2) >= (i2 - o2) * (r3 - s2);
}
function ma(e21, t2, n2, r3, i2, a2, o2, s2) {
  return (e21 !== o2 || t2 !== s2) && pa(e21, t2, n2, r3, i2, a2, o2, s2);
}
function ha(e21, t2) {
  return e21.next.i !== t2.i && e21.prev.i !== t2.i && !xa(e21, t2) && (Sa(e21, t2) && Sa(t2, e21) && Ca(e21, t2) && (ga(e21.prev, e21, t2.prev) || ga(e21, t2.prev, t2)) || _a(e21, t2) && ga(e21.prev, e21, e21.next) > 0 && ga(t2.prev, t2, t2.next) > 0);
}
function ga(e21, t2, n2) {
  return (t2.y - e21.y) * (n2.x - t2.x) - (t2.x - e21.x) * (n2.y - t2.y);
}
function _a(e21, t2) {
  return e21.x === t2.x && e21.y === t2.y;
}
function va(e21, t2, n2, r3) {
  let i2 = ba(ga(e21, t2, n2)), a2 = ba(ga(e21, t2, r3)), o2 = ba(ga(n2, r3, e21)), s2 = ba(ga(n2, r3, t2));
  return !!(i2 !== a2 && o2 !== s2 || i2 === 0 && ya(e21, n2, t2) || a2 === 0 && ya(e21, r3, t2) || o2 === 0 && ya(n2, e21, r3) || s2 === 0 && ya(n2, t2, r3));
}
function ya(e21, t2, n2) {
  return t2.x <= Math.max(e21.x, n2.x) && t2.x >= Math.min(e21.x, n2.x) && t2.y <= Math.max(e21.y, n2.y) && t2.y >= Math.min(e21.y, n2.y);
}
function ba(e21) {
  return e21 > 0 ? 1 : e21 < 0 ? -1 : 0;
}
function xa(e21, t2) {
  let n2 = e21;
  do {
    if (n2.i !== e21.i && n2.next.i !== e21.i && n2.i !== t2.i && n2.next.i !== t2.i && va(n2, n2.next, e21, t2)) return true;
    n2 = n2.next;
  } while (n2 !== e21);
  return false;
}
function Sa(e21, t2) {
  return ga(e21.prev, e21, e21.next) < 0 ? ga(e21, t2, e21.next) >= 0 && ga(e21, e21.prev, t2) >= 0 : ga(e21, t2, e21.prev) < 0 || ga(e21, e21.next, t2) < 0;
}
function Ca(e21, t2) {
  let n2 = e21, r3 = false, i2 = (e21.x + t2.x) / 2, a2 = (e21.y + t2.y) / 2;
  do
    n2.y > a2 != n2.next.y > a2 && n2.next.y !== n2.y && i2 < (n2.next.x - n2.x) * (a2 - n2.y) / (n2.next.y - n2.y) + n2.x && (r3 = !r3), n2 = n2.next;
  while (n2 !== e21);
  return r3;
}
function wa(e21, t2) {
  let n2 = Da(e21.i, e21.x, e21.y), r3 = Da(t2.i, t2.x, t2.y), i2 = e21.next, a2 = t2.prev;
  return e21.next = t2, t2.prev = e21, n2.next = i2, i2.prev = n2, r3.next = n2, n2.prev = r3, a2.next = r3, r3.prev = a2, r3;
}
function Ta(e21, t2, n2, r3) {
  let i2 = Da(e21, t2, n2);
  return r3 ? (i2.next = r3.next, i2.prev = r3, r3.next.prev = i2, r3.next = i2) : (i2.prev = i2, i2.next = i2), i2;
}
function Ea(e21) {
  e21.next.prev = e21.prev, e21.prev.next = e21.next, e21.prevZ && (e21.prevZ.nextZ = e21.nextZ), e21.nextZ && (e21.nextZ.prevZ = e21.prevZ);
}
function Da(e21, t2, n2) {
  return {
    i: e21,
    x: t2,
    y: n2,
    prev: null,
    next: null,
    z: 0,
    prevZ: null,
    nextZ: null,
    steiner: false
  };
}
function Oa(e21, t2, n2, r3) {
  let i2 = 0;
  for (let a2 = t2, o2 = n2 - r3; a2 < n2; a2 += r3) i2 += (e21[o2] - e21[a2]) * (e21[a2 + 1] + e21[o2 + 1]), o2 = a2;
  return i2;
}
var ka = class {
  static triangulate(e21, t2, n2 = 2) {
    return Xi(e21, t2, n2);
  }
};
var Aa = class e13 {
  static area(e21) {
    let t2 = e21.length, n2 = 0;
    for (let r3 = t2 - 1, i2 = 0; i2 < t2; r3 = i2++) n2 += e21[r3].x * e21[i2].y - e21[i2].x * e21[r3].y;
    return n2 * 0.5;
  }
  static isClockWise(t2) {
    return e13.area(t2) < 0;
  }
  static triangulateShape(e21, t2) {
    let n2 = [], r3 = [], i2 = [];
    ja(e21), Ma(n2, e21);
    let a2 = e21.length;
    t2.forEach(ja);
    for (let e22 = 0; e22 < t2.length; e22++) r3.push(a2), a2 += t2[e22].length, Ma(n2, t2[e22]);
    let o2 = ka.triangulate(n2, r3);
    for (let e22 = 0; e22 < o2.length; e22 += 3) i2.push(o2.slice(e22, e22 + 3));
    return i2;
  }
};
function ja(e21) {
  let t2 = e21.length;
  t2 > 2 && e21[t2 - 1].equals(e21[0]) && e21.pop();
}
function Ma(e21, t2) {
  for (let n2 = 0; n2 < t2.length; n2++) e21.push(t2[n2].x), e21.push(t2[n2].y);
}
var Na = class e14 extends vi {
  constructor(e21 = 1, t2 = 0) {
    let n2 = (1 + Math.sqrt(5)) / 2, r3 = [-1, n2, 0, 1, n2, 0, -1, -n2, 0, 1, -n2, 0, 0, -1, n2, 0, 1, n2, 0, -1, -n2, 0, 1, -n2, n2, 0, -1, n2, 0, 1, -n2, 0, -1, -n2, 0, 1];
    super(r3, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], e21, t2), this.type = `IcosahedronGeometry`, this.parameters = {
      radius: e21,
      detail: t2
    };
  }
  static fromJSON(t2) {
    return new e14(t2.radius, t2.detail);
  }
};
var Pa = class e15 extends ur {
  constructor(e21 = 1, t2 = 1, n2 = 1, r3 = 1) {
    super(), this.type = `PlaneGeometry`, this.parameters = {
      width: e21,
      height: t2,
      widthSegments: n2,
      heightSegments: r3
    };
    let i2 = e21 / 2, a2 = t2 / 2, o2 = Math.floor(n2), s2 = Math.floor(r3), c2 = o2 + 1, l2 = s2 + 1, u2 = e21 / o2, d2 = t2 / s2, f2 = [], p2 = [], m2 = [], h2 = [];
    for (let e22 = 0; e22 < l2; e22++) {
      let t3 = e22 * d2 - a2;
      for (let n3 = 0; n3 < c2; n3++) {
        let r4 = n3 * u2 - i2;
        p2.push(r4, -t3, 0), m2.push(0, 0, 1), h2.push(n3 / o2), h2.push(1 - e22 / s2);
      }
    }
    for (let e22 = 0; e22 < s2; e22++) for (let t3 = 0; t3 < o2; t3++) {
      let n3 = t3 + c2 * e22, r4 = t3 + c2 * (e22 + 1), i3 = t3 + 1 + c2 * (e22 + 1), a3 = t3 + 1 + c2 * e22;
      f2.push(n3, r4, a3), f2.push(r4, i3, a3);
    }
    this.setIndex(f2), this.setAttribute(`position`, new Qn(p2, 3)), this.setAttribute(`normal`, new Qn(m2, 3)), this.setAttribute(`uv`, new Qn(h2, 2));
  }
  copy(e21) {
    return super.copy(e21), this.parameters = Object.assign({}, e21.parameters), this;
  }
  static fromJSON(t2) {
    return new e15(t2.width, t2.height, t2.widthSegments, t2.heightSegments);
  }
};
var Fa = class e16 extends ur {
  constructor(e21 = new Yi([new H(0, 0.5), new H(-0.5, -0.5), new H(0.5, -0.5)]), t2 = 12) {
    super(), this.type = `ShapeGeometry`, this.parameters = {
      shapes: e21,
      curveSegments: t2
    };
    let n2 = [], r3 = [], i2 = [], a2 = [], o2 = 0, s2 = 0;
    if (Array.isArray(e21) === false) c2(e21);
    else for (let t3 = 0; t3 < e21.length; t3++) c2(e21[t3]), this.addGroup(o2, s2, t3), o2 += s2, s2 = 0;
    this.setIndex(n2), this.setAttribute(`position`, new Qn(r3, 3)), this.setAttribute(`normal`, new Qn(i2, 3)), this.setAttribute(`uv`, new Qn(a2, 2));
    function c2(e22) {
      let o3 = r3.length / 3, c3 = e22.extractPoints(t2), l2 = c3.shape, u2 = c3.holes;
      Aa.isClockWise(l2) === false && (l2 = l2.reverse());
      for (let e23 = 0, t3 = u2.length; e23 < t3; e23++) {
        let t4 = u2[e23];
        Aa.isClockWise(t4) === true && (u2[e23] = t4.reverse());
      }
      let d2 = Aa.triangulateShape(l2, u2);
      for (let e23 = 0, t3 = u2.length; e23 < t3; e23++) {
        let t4 = u2[e23];
        l2 = l2.concat(t4);
      }
      for (let e23 = 0, t3 = l2.length; e23 < t3; e23++) {
        let t4 = l2[e23];
        r3.push(t4.x, t4.y, 0), i2.push(0, 0, 1), a2.push(t4.x, t4.y);
      }
      for (let e23 = 0, t3 = d2.length; e23 < t3; e23++) {
        let t4 = d2[e23], r4 = t4[0] + o3, i3 = t4[1] + o3, a3 = t4[2] + o3;
        n2.push(r4, i3, a3), s2 += 3;
      }
    }
  }
  copy(e21) {
    return super.copy(e21), this.parameters = Object.assign({}, e21.parameters), this;
  }
  toJSON() {
    let e21 = super.toJSON(), t2 = this.parameters.shapes;
    return Ia(t2, e21);
  }
  static fromJSON(t2, n2) {
    let r3 = [];
    for (let e21 = 0, i2 = t2.shapes.length; e21 < i2; e21++) {
      let i3 = n2[t2.shapes[e21]];
      r3.push(i3);
    }
    return new e16(r3, t2.curveSegments);
  }
};
function Ia(e21, t2) {
  if (t2.shapes = [], Array.isArray(e21)) for (let n2 = 0, r3 = e21.length; n2 < r3; n2++) {
    let r4 = e21[n2];
    t2.shapes.push(r4.uuid);
  }
  else t2.shapes.push(e21.uuid);
  return t2;
}
function La(e21) {
  let t2 = {};
  for (let n2 in e21) {
    t2[n2] = {};
    for (let r3 in e21[n2]) {
      let i2 = e21[n2][r3];
      if (za(i2)) i2.isRenderTargetTexture ? (z(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`), t2[n2][r3] = null) : t2[n2][r3] = i2.clone();
      else if (Array.isArray(i2)) {
        if (za(i2[0])) {
          let e22 = [];
          for (let t3 = 0, n3 = i2.length; t3 < n3; t3++) e22[t3] = i2[t3].clone();
          t2[n2][r3] = e22;
        } else t2[n2][r3] = i2.slice();
      } else t2[n2][r3] = i2;
    }
  }
  return t2;
}
function Ra(e21) {
  let t2 = {};
  for (let n2 = 0; n2 < e21.length; n2++) {
    let r3 = La(e21[n2]);
    for (let e22 in r3) t2[e22] = r3[e22];
  }
  return t2;
}
function za(e21) {
  return e21 && (e21.isColor || e21.isMatrix3 || e21.isMatrix4 || e21.isVector2 || e21.isVector3 || e21.isVector4 || e21.isTexture || e21.isQuaternion);
}
function Ba(e21) {
  let t2 = [];
  for (let n2 = 0; n2 < e21.length; n2++) t2.push(e21[n2].clone());
  return t2;
}
function Va(e21) {
  let t2 = e21.getRenderTarget();
  return t2 === null ? e21.outputColorSpace : t2.isXRRenderTarget === true ? t2.texture.colorSpace : G.workingColorSpace;
}
var Ha = {
  clone: La,
  merge: Ra
};
var Ua = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;
var Wa = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
var Ga = class extends br {
  constructor(e21) {
    super(), this.isShaderMaterial = true, this.type = `ShaderMaterial`, this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Ua, this.fragmentShader = Wa, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = {
      clipCullDistance: false,
      multiDraw: false
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e21 !== void 0 && this.setValues(e21);
  }
  copy(e21) {
    return super.copy(e21), this.fragmentShader = e21.fragmentShader, this.vertexShader = e21.vertexShader, this.uniforms = La(e21.uniforms), this.uniformsGroups = Ba(e21.uniformsGroups), this.defines = Object.assign({}, e21.defines), this.wireframe = e21.wireframe, this.wireframeLinewidth = e21.wireframeLinewidth, this.fog = e21.fog, this.lights = e21.lights, this.clipping = e21.clipping, this.extensions = Object.assign({}, e21.extensions), this.glslVersion = e21.glslVersion, this.defaultAttributeValues = Object.assign({}, e21.defaultAttributeValues), this.index0AttributeName = e21.index0AttributeName, this.uniformsNeedUpdate = e21.uniformsNeedUpdate, this;
  }
  toJSON(e21) {
    let t2 = super.toJSON(e21);
    t2.glslVersion = this.glslVersion, t2.uniforms = {};
    for (let n3 in this.uniforms) {
      let r3 = this.uniforms[n3].value;
      r3 && r3.isTexture ? t2.uniforms[n3] = {
        type: `t`,
        value: r3.toJSON(e21).uuid
      } : r3 && r3.isColor ? t2.uniforms[n3] = {
        type: `c`,
        value: r3.getHex()
      } : r3 && r3.isVector2 ? t2.uniforms[n3] = {
        type: `v2`,
        value: r3.toArray()
      } : r3 && r3.isVector3 ? t2.uniforms[n3] = {
        type: `v3`,
        value: r3.toArray()
      } : r3 && r3.isVector4 ? t2.uniforms[n3] = {
        type: `v4`,
        value: r3.toArray()
      } : r3 && r3.isMatrix3 ? t2.uniforms[n3] = {
        type: `m3`,
        value: r3.toArray()
      } : r3 && r3.isMatrix4 ? t2.uniforms[n3] = {
        type: `m4`,
        value: r3.toArray()
      } : t2.uniforms[n3] = {
        value: r3
      };
    }
    Object.keys(this.defines).length > 0 && (t2.defines = this.defines), t2.vertexShader = this.vertexShader, t2.fragmentShader = this.fragmentShader, t2.lights = this.lights, t2.clipping = this.clipping;
    let n2 = {};
    for (let e22 in this.extensions) this.extensions[e22] === true && (n2[e22] = true);
    return Object.keys(n2).length > 0 && (t2.extensions = n2), t2;
  }
  fromJSON(e21, t2) {
    if (super.fromJSON(e21, t2), e21.uniforms !== void 0) for (let n2 in e21.uniforms) {
      let r3 = e21.uniforms[n2];
      switch (this.uniforms[n2] = {}, r3.type) {
        case `t`:
          this.uniforms[n2].value = t2[r3.value] || null;
          break;
        case `c`:
          this.uniforms[n2].value = new K().setHex(r3.value);
          break;
        case `v2`:
          this.uniforms[n2].value = new H().fromArray(r3.value);
          break;
        case `v3`:
          this.uniforms[n2].value = new U().fromArray(r3.value);
          break;
        case `v4`:
          this.uniforms[n2].value = new Ot().fromArray(r3.value);
          break;
        case `m3`:
          this.uniforms[n2].value = new W().fromArray(r3.value);
          break;
        case `m4`:
          this.uniforms[n2].value = new Nt().fromArray(r3.value);
          break;
        default:
          this.uniforms[n2].value = r3.value;
      }
    }
    if (e21.defines !== void 0 && (this.defines = e21.defines), e21.vertexShader !== void 0 && (this.vertexShader = e21.vertexShader), e21.fragmentShader !== void 0 && (this.fragmentShader = e21.fragmentShader), e21.glslVersion !== void 0 && (this.glslVersion = e21.glslVersion), e21.extensions !== void 0) for (let t3 in e21.extensions) this.extensions[t3] = e21.extensions[t3];
    return e21.lights !== void 0 && (this.lights = e21.lights), e21.clipping !== void 0 && (this.clipping = e21.clipping), this;
  }
};
var Ka = class extends Ga {
  constructor(e21) {
    super(e21), this.isRawShaderMaterial = true, this.type = `RawShaderMaterial`;
  }
};
var qa = class extends br {
  constructor(e21) {
    super(), this.isMeshLambertMaterial = true, this.type = `MeshLambertMaterial`, this.color = new K(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new K(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new H(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ut(), this.combine = 0, this.reflectivity = 1, this.envMapIntensity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = `round`, this.wireframeLinejoin = `round`, this.flatShading = false, this.fog = true, this.setValues(e21);
  }
  copy(e21) {
    return super.copy(e21), this.color.copy(e21.color), this.map = e21.map, this.lightMap = e21.lightMap, this.lightMapIntensity = e21.lightMapIntensity, this.aoMap = e21.aoMap, this.aoMapIntensity = e21.aoMapIntensity, this.emissive.copy(e21.emissive), this.emissiveMap = e21.emissiveMap, this.emissiveIntensity = e21.emissiveIntensity, this.bumpMap = e21.bumpMap, this.bumpScale = e21.bumpScale, this.normalMap = e21.normalMap, this.normalMapType = e21.normalMapType, this.normalScale.copy(e21.normalScale), this.displacementMap = e21.displacementMap, this.displacementScale = e21.displacementScale, this.displacementBias = e21.displacementBias, this.specularMap = e21.specularMap, this.alphaMap = e21.alphaMap, this.envMap = e21.envMap, this.envMapRotation.copy(e21.envMapRotation), this.combine = e21.combine, this.reflectivity = e21.reflectivity, this.envMapIntensity = e21.envMapIntensity, this.refractionRatio = e21.refractionRatio, this.wireframe = e21.wireframe, this.wireframeLinewidth = e21.wireframeLinewidth, this.wireframeLinecap = e21.wireframeLinecap, this.wireframeLinejoin = e21.wireframeLinejoin, this.flatShading = e21.flatShading, this.fog = e21.fog, this;
  }
};
var Ja = class extends br {
  constructor(e21) {
    super(), this.isMeshDepthMaterial = true, this.type = `MeshDepthMaterial`, this.depthPacking = Re, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e21);
  }
  copy(e21) {
    return super.copy(e21), this.depthPacking = e21.depthPacking, this.map = e21.map, this.alphaMap = e21.alphaMap, this.displacementMap = e21.displacementMap, this.displacementScale = e21.displacementScale, this.displacementBias = e21.displacementBias, this.wireframe = e21.wireframe, this.wireframeLinewidth = e21.wireframeLinewidth, this;
  }
};
var Ya = class extends br {
  constructor(e21) {
    super(), this.isMeshDistanceMaterial = true, this.type = `MeshDistanceMaterial`, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e21);
  }
  copy(e21) {
    return super.copy(e21), this.map = e21.map, this.alphaMap = e21.alphaMap, this.displacementMap = e21.displacementMap, this.displacementScale = e21.displacementScale, this.displacementBias = e21.displacementBias, this;
  }
};
function Xa(e21, t2) {
  return !e21 || e21.constructor === t2 ? e21 : typeof t2.BYTES_PER_ELEMENT == `number` ? new t2(e21) : Array.prototype.slice.call(e21);
}
function Za(e21) {
  return e21 !== void 0 && e21.inTangents !== void 0 && e21.outTangents !== void 0;
}
var Qa = class {
  constructor(e21, t2, n2, r3) {
    this.parameterPositions = e21, this._cachedIndex = 0, this.resultBuffer = r3 === void 0 ? new t2.constructor(n2) : r3, this.sampleValues = t2, this.valueSize = n2, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e21) {
    let t2 = this.parameterPositions, n2 = this._cachedIndex, r3 = t2[n2], i2 = t2[n2 - 1];
    validate_interval: {
      seek: {
        let a2;
        linear_scan: {
          forward_scan: if (!(e21 < r3)) {
            for (let a3 = n2 + 2; ; ) {
              if (r3 === void 0) {
                if (e21 < i2) break forward_scan;
                return n2 = t2.length, this._cachedIndex = n2, this.copySampleValue_(n2 - 1);
              }
              if (n2 === a3) break;
              if (i2 = r3, r3 = t2[++n2], e21 < r3) break seek;
            }
            a2 = t2.length;
            break linear_scan;
          }
          if (!(e21 >= i2)) {
            let o2 = t2[1];
            e21 < o2 && (n2 = 2, i2 = o2);
            for (let a3 = n2 - 2; ; ) {
              if (i2 === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n2 === a3) break;
              if (r3 = i2, i2 = t2[--n2 - 1], e21 >= i2) break seek;
            }
            a2 = n2, n2 = 0;
            break linear_scan;
          }
          break validate_interval;
        }
        for (; n2 < a2; ) {
          let r4 = n2 + a2 >>> 1;
          e21 < t2[r4] ? a2 = r4 : n2 = r4 + 1;
        }
        if (r3 = t2[n2], i2 = t2[n2 - 1], i2 === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
        if (r3 === void 0) return n2 = t2.length, this._cachedIndex = n2, this.copySampleValue_(n2 - 1);
      }
      this._cachedIndex = n2, this.intervalChanged_(n2, i2, r3);
    }
    return this.interpolate_(n2, i2, e21, r3);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e21) {
    let t2 = this.resultBuffer, n2 = this.sampleValues, r3 = this.valueSize, i2 = e21 * r3;
    for (let e22 = 0; e22 !== r3; ++e22) t2[e22] = n2[i2 + e22];
    return t2;
  }
  interpolate_() {
    throw Error(`THREE.Interpolant: Call to abstract method.`);
  }
  intervalChanged_() {
  }
};
var $a = class extends Qa {
  constructor(e21, t2, n2, r3) {
    super(e21, t2, n2, r3), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: Ie,
      endingEnd: Ie
    };
  }
  intervalChanged_(e21, t2, n2) {
    let r3 = this.parameterPositions, i2 = e21 - 2, a2 = e21 + 1, o2 = r3[i2], s2 = r3[a2];
    if (o2 === void 0) switch (this.getSettings_().endingStart) {
      case Le:
        i2 = e21, o2 = 2 * t2 - n2;
        break;
      case I:
        i2 = r3.length - 2, o2 = t2 + r3[i2] - r3[i2 + 1];
        break;
      default:
        i2 = e21, o2 = n2;
    }
    if (s2 === void 0) switch (this.getSettings_().endingEnd) {
      case Le:
        a2 = e21, s2 = 2 * n2 - t2;
        break;
      case I:
        a2 = 1, s2 = n2 + r3[1] - r3[0];
        break;
      default:
        a2 = e21 - 1, s2 = t2;
    }
    let c2 = (n2 - t2) * 0.5, l2 = this.valueSize;
    this._weightPrev = c2 / (t2 - o2), this._weightNext = c2 / (s2 - n2), this._offsetPrev = i2 * l2, this._offsetNext = a2 * l2;
  }
  interpolate_(e21, t2, n2, r3) {
    let i2 = this.resultBuffer, a2 = this.sampleValues, o2 = this.valueSize, s2 = e21 * o2, c2 = s2 - o2, l2 = this._offsetPrev, u2 = this._offsetNext, d2 = this._weightPrev, f2 = this._weightNext, p2 = (n2 - t2) / (r3 - t2), m2 = p2 * p2, h2 = m2 * p2, g2 = -d2 * h2 + 2 * d2 * m2 - d2 * p2, _2 = (1 + d2) * h2 + (-1.5 - 2 * d2) * m2 + (-0.5 + d2) * p2 + 1, v2 = (-1 - f2) * h2 + (1.5 + f2) * m2 + 0.5 * p2, y2 = f2 * h2 - f2 * m2;
    for (let e22 = 0; e22 !== o2; ++e22) i2[e22] = g2 * a2[l2 + e22] + _2 * a2[c2 + e22] + v2 * a2[s2 + e22] + y2 * a2[u2 + e22];
    return i2;
  }
};
var eo = class extends Qa {
  constructor(e21, t2, n2, r3) {
    super(e21, t2, n2, r3);
  }
  interpolate_(e21, t2, n2, r3) {
    let i2 = this.resultBuffer, a2 = this.sampleValues, o2 = this.valueSize, s2 = e21 * o2, c2 = s2 - o2, l2 = (n2 - t2) / (r3 - t2), u2 = 1 - l2;
    for (let e22 = 0; e22 !== o2; ++e22) i2[e22] = a2[c2 + e22] * u2 + a2[s2 + e22] * l2;
    return i2;
  }
};
var to = class extends Qa {
  constructor(e21, t2, n2, r3) {
    super(e21, t2, n2, r3);
  }
  interpolate_(e21) {
    return this.copySampleValue_(e21 - 1);
  }
};
var no = class extends Qa {
  interpolate_(e21, t2, n2, r3) {
    let i2 = this.resultBuffer, a2 = this.sampleValues, o2 = this.valueSize, s2 = e21 * o2, c2 = s2 - o2, l2 = this.inTangents, u2 = this.outTangents;
    if (!l2 || !u2) {
      let e22 = (n2 - t2) / (r3 - t2), l3 = 1 - e22;
      for (let t3 = 0; t3 !== o2; ++t3) i2[t3] = a2[c2 + t3] * l3 + a2[s2 + t3] * e22;
      return i2;
    }
    let d2 = o2 * 2, f2 = e21 - 1;
    for (let p2 = 0; p2 !== o2; ++p2) {
      let o3 = a2[c2 + p2], m2 = a2[s2 + p2], h2 = f2 * d2 + p2 * 2, g2 = u2[h2], _2 = u2[h2 + 1], v2 = e21 * d2 + p2 * 2, y2 = l2[v2], b2 = l2[v2 + 1], x2 = ao(n2, t2, g2, y2, r3);
      i2[p2] = ro(x2, o3, _2, b2, m2);
    }
    return i2;
  }
};
function ro(e21, t2, n2, r3, i2) {
  let a2 = 1 - e21;
  return a2 * a2 * a2 * t2 + 3 * a2 * a2 * e21 * n2 + 3 * a2 * e21 * e21 * r3 + e21 * e21 * e21 * i2;
}
function io(e21, t2, n2, r3, i2) {
  let a2 = 1 - e21;
  return 3 * a2 * a2 * (n2 - t2) + 6 * a2 * e21 * (r3 - n2) + 3 * e21 * e21 * (i2 - r3);
}
function ao(e21, t2, n2, r3, i2) {
  let a2 = (e21 - t2) / (i2 - t2);
  for (let o2 = 0; o2 < 8; o2++) {
    let o3 = ro(a2, t2, n2, r3, i2) - e21;
    if (Math.abs(o3) < 1e-10) break;
    let s2 = io(a2, t2, n2, r3, i2);
    if (Math.abs(s2) < 1e-10) break;
    a2 = Math.max(0, Math.min(1, a2 - o3 / s2));
  }
  return a2;
}
var oo = class {
  constructor(e21, t2, n2, r3) {
    if (e21 === void 0) throw Error(`THREE.KeyframeTrack: track name is undefined`);
    if (t2 === void 0 || t2.length === 0) throw Error(`THREE.KeyframeTrack: no keyframes in track named ` + e21);
    this.name = e21, this.times = Xa(t2, this.TimeBufferType), this.values = Xa(n2, this.ValueBufferType), this.setInterpolation(r3 || this.DefaultInterpolation);
  }
  static toJSON(e21) {
    let t2 = e21.constructor, n2;
    if (t2.toJSON !== this.toJSON) n2 = t2.toJSON(e21);
    else {
      n2 = {
        name: e21.name,
        times: Xa(e21.times, Array),
        values: Xa(e21.values, Array)
      };
      let t3 = e21.getInterpolation();
      t3 !== e21.DefaultInterpolation && (n2.interpolation = t3), Za(e21.settings) && (n2.settings = {
        inTangents: Xa(e21.settings.inTangents, Array),
        outTangents: Xa(e21.settings.outTangents, Array)
      });
    }
    return n2.type = e21.ValueTypeName, n2;
  }
  InterpolantFactoryMethodDiscrete(e21) {
    return new to(this.times, this.values, this.getValueSize(), e21);
  }
  InterpolantFactoryMethodLinear(e21) {
    return new eo(this.times, this.values, this.getValueSize(), e21);
  }
  InterpolantFactoryMethodSmooth(e21) {
    return new $a(this.times, this.values, this.getValueSize(), e21);
  }
  InterpolantFactoryMethodBezier(e21) {
    let t2 = new no(this.times, this.values, this.getValueSize(), e21);
    return this.settings && (t2.inTangents = this.settings.inTangents, t2.outTangents = this.settings.outTangents), t2;
  }
  setInterpolation(e21) {
    let t2;
    switch (e21) {
      case Ne:
        t2 = this.InterpolantFactoryMethodDiscrete;
        break;
      case Pe:
        t2 = this.InterpolantFactoryMethodLinear;
        break;
      case F:
        t2 = this.InterpolantFactoryMethodSmooth;
        break;
      case Fe:
        t2 = this.InterpolantFactoryMethodBezier;
    }
    if (t2 === void 0) {
      let t3 = `unsupported interpolation for ` + this.ValueTypeName + ` keyframe track named ` + this.name;
      if (this.createInterpolant === void 0) {
        if (e21 !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
        else throw Error(t3);
      }
      return z(`KeyframeTrack:`, t3), this;
    }
    return this.createInterpolant = t2, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Ne;
      case this.InterpolantFactoryMethodLinear:
        return Pe;
      case this.InterpolantFactoryMethodSmooth:
        return F;
      case this.InterpolantFactoryMethodBezier:
        return Fe;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e21) {
    if (e21 !== 0) {
      let t2 = this.times;
      for (let n2 = 0, r3 = t2.length; n2 !== r3; ++n2) t2[n2] += e21;
      Za(this.settings) && (so(this.settings.inTangents, e21), so(this.settings.outTangents, e21));
    }
    return this;
  }
  scale(e21) {
    if (e21 !== 1) {
      let t2 = this.times;
      for (let n2 = 0, r3 = t2.length; n2 !== r3; ++n2) t2[n2] *= e21;
      Za(this.settings) && (co(this.settings.inTangents, e21), co(this.settings.outTangents, e21));
    }
    return this;
  }
  trim(e21, t2) {
    let n2 = this.times, r3 = n2.length, i2 = 0, a2 = r3 - 1;
    for (; i2 !== r3 && n2[i2] < e21; ) ++i2;
    for (; a2 !== -1 && n2[a2] > t2; ) --a2;
    if (++a2, i2 !== 0 || a2 !== r3) {
      i2 >= a2 && (a2 = Math.max(a2, 1), i2 = a2 - 1);
      let e22 = this.getValueSize();
      this.times = n2.slice(i2, a2), this.values = this.values.slice(i2 * e22, a2 * e22);
    }
    return this;
  }
  validate() {
    let e21 = true, t2 = this.getValueSize();
    t2 - Math.floor(t2) !== 0 && (B(`KeyframeTrack: Invalid value size in track.`, this), e21 = false);
    let n2 = this.times, r3 = this.values, i2 = n2.length;
    i2 === 0 && (B(`KeyframeTrack: Track is empty.`, this), e21 = false);
    let a2 = null;
    for (let t3 = 0; t3 !== i2; t3++) {
      let r4 = n2[t3];
      if (typeof r4 == `number` && isNaN(r4)) {
        B(`KeyframeTrack: Time is not a valid number.`, this, t3, r4), e21 = false;
        break;
      }
      if (a2 !== null && a2 > r4) {
        B(`KeyframeTrack: Out of order keys.`, this, t3, r4, a2), e21 = false;
        break;
      }
      a2 = r4;
    }
    if (r3 !== void 0 && Ge(r3)) for (let t3 = 0, n3 = r3.length; t3 !== n3; ++t3) {
      let n4 = r3[t3];
      if (isNaN(n4)) {
        B(`KeyframeTrack: Value is not a valid number.`, this, t3, n4), e21 = false;
        break;
      }
    }
    return e21;
  }
  optimize() {
    let e21 = this.times.slice(), t2 = this.values.slice(), n2 = this.getValueSize(), r3 = this.getInterpolation() === F, i2 = e21.length - 1, a2 = 1;
    for (let o2 = 1; o2 < i2; ++o2) {
      let i3 = false, s2 = e21[o2];
      if (s2 !== e21[o2 + 1] && (o2 !== 1 || s2 !== e21[0])) {
        if (r3) i3 = true;
        else {
          let e22 = o2 * n2, r4 = e22 - n2, a3 = e22 + n2;
          for (let o3 = 0; o3 !== n2; ++o3) {
            let n3 = t2[e22 + o3];
            if (n3 !== t2[r4 + o3] || n3 !== t2[a3 + o3]) {
              i3 = true;
              break;
            }
          }
        }
      }
      if (i3) {
        if (o2 !== a2) {
          e21[a2] = e21[o2];
          let r4 = o2 * n2, i4 = a2 * n2;
          for (let e22 = 0; e22 !== n2; ++e22) t2[i4 + e22] = t2[r4 + e22];
        }
        ++a2;
      }
    }
    if (i2 > 0) {
      e21[a2] = e21[i2];
      for (let e22 = i2 * n2, r4 = a2 * n2, o2 = 0; o2 !== n2; ++o2) t2[r4 + o2] = t2[e22 + o2];
      ++a2;
    }
    return a2 === e21.length ? (this.times = e21, this.values = t2) : (this.times = e21.slice(0, a2), this.values = t2.slice(0, a2 * n2)), this;
  }
  clone() {
    let e21 = this.times.slice(), t2 = this.values.slice(), n2 = this.constructor, r3 = new n2(this.name, e21, t2);
    return r3.createInterpolant = this.createInterpolant, Za(this.settings) && (r3.settings = {
      inTangents: this.settings.inTangents.slice(),
      outTangents: this.settings.outTangents.slice()
    }), r3;
  }
};
function so(e21, t2) {
  for (let n2 = 0, r3 = e21.length; n2 !== r3; n2 += 2) e21[n2] += t2;
}
function co(e21, t2) {
  for (let n2 = 0, r3 = e21.length; n2 !== r3; n2 += 2) e21[n2] *= t2;
}
oo.prototype.ValueTypeName = ``, oo.prototype.TimeBufferType = Float32Array, oo.prototype.ValueBufferType = Float32Array, oo.prototype.DefaultInterpolation = Pe;
var lo = class extends oo {
  constructor(e21, t2, n2) {
    super(e21, t2, n2);
  }
};
lo.prototype.ValueTypeName = `bool`, lo.prototype.ValueBufferType = Array, lo.prototype.DefaultInterpolation = Ne, lo.prototype.InterpolantFactoryMethodLinear = void 0, lo.prototype.InterpolantFactoryMethodSmooth = void 0;
var uo = class extends oo {
  constructor(e21, t2, n2, r3) {
    super(e21, t2, n2, r3);
  }
};
uo.prototype.ValueTypeName = `color`;
var fo = class extends oo {
  constructor(e21, t2, n2, r3) {
    super(e21, t2, n2, r3);
  }
};
fo.prototype.ValueTypeName = `number`;
var po = class extends Qa {
  constructor(e21, t2, n2, r3) {
    super(e21, t2, n2, r3);
  }
  interpolate_(e21, t2, n2, r3) {
    let i2 = this.resultBuffer, a2 = this.sampleValues, o2 = this.valueSize, s2 = (n2 - t2) / (r3 - t2), c2 = e21 * o2;
    for (let e22 = c2 + o2; c2 !== e22; c2 += 4) dt.slerpFlat(i2, 0, a2, c2 - o2, a2, c2, s2);
    return i2;
  }
};
var mo = class extends oo {
  constructor(e21, t2, n2, r3) {
    super(e21, t2, n2, r3);
  }
  InterpolantFactoryMethodLinear(e21) {
    return new po(this.times, this.values, this.getValueSize(), e21);
  }
};
mo.prototype.ValueTypeName = `quaternion`, mo.prototype.InterpolantFactoryMethodSmooth = void 0;
var ho = class extends oo {
  constructor(e21, t2, n2) {
    super(e21, t2, n2);
  }
};
ho.prototype.ValueTypeName = `string`, ho.prototype.ValueBufferType = Array, ho.prototype.DefaultInterpolation = Ne, ho.prototype.InterpolantFactoryMethodLinear = void 0, ho.prototype.InterpolantFactoryMethodSmooth = void 0;
var go = class extends oo {
  constructor(e21, t2, n2, r3) {
    super(e21, t2, n2, r3);
  }
};
go.prototype.ValueTypeName = `vector`;
var _o = class extends sn {
  static registerNode(e21) {
    this.prototype._lightNode = e21;
  }
  constructor(e21, t2 = 1) {
    super(), this.isLight = true, this.type = `Light`, this.color = new K(e21), this.intensity = t2;
  }
  copy(e21, t2) {
    return super.copy(e21, t2), this.color.copy(e21.color), this.intensity = e21.intensity, this;
  }
  toJSON(e21) {
    let t2 = super.toJSON(e21);
    return t2.object.color = this.color.getHex(), t2.object.intensity = this.intensity, t2;
  }
};
var vo = class extends _o {
  constructor(e21, t2, n2) {
    super(e21, n2), this.isHemisphereLight = true, this.type = `HemisphereLight`, this.position.copy(sn.DEFAULT_UP), this.updateMatrix(), this.groundColor = new K(t2);
  }
  copy(e21, t2) {
    return super.copy(e21, t2), this.groundColor.copy(e21.groundColor), this;
  }
  toJSON(e21) {
    let t2 = super.toJSON(e21);
    return t2.object.groundColor = this.groundColor.getHex(), t2;
  }
};
var yo = new Nt();
var bo = new U();
var xo = new U();
var So = class {
  constructor(e21) {
    this.camera = e21, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new H(512, 512), this.mapType = l, this.map = null, this.mapPass = null, this.matrix = new Nt(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new si(), this._frameExtents = new H(1, 1), this._viewportCount = 1, this._viewports = [new Ot(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getCamera() {
    return this.camera;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e21) {
    let t2 = this.camera;
    bo.setFromMatrixPosition(e21.matrixWorld), t2.position.copy(bo), xo.setFromMatrixPosition(e21.target.matrixWorld), t2.lookAt(xo), t2.updateMatrixWorld(), this._updateMatrix(t2, this.matrix, this._frustum);
  }
  _updateMatrix(e21, t2, n2, r3) {
    yo.multiplyMatrices(e21.projectionMatrix, e21.matrixWorldInverse), n2.setFromProjectionMatrix(yo, e21.coordinateSystem, e21.reversedDepth);
    let i2 = this._frameExtents, a2 = r3 ? r3.z / i2.x : 1, o2 = r3 ? r3.w / i2.y : 1, s2 = r3 ? r3.x / i2.x : 0, c2 = r3 ? r3.y / i2.y : 0;
    e21.coordinateSystem === 2001 || e21.reversedDepth ? t2.set(0.5 * a2, 0, 0, 0.5 * a2 + s2, 0, 0.5 * o2, 0, 0.5 * o2 + c2, 0, 0, 1, 0, 0, 0, 0, 1) : t2.set(0.5 * a2, 0, 0, 0.5 * a2 + s2, 0, 0.5 * o2, 0, 0.5 * o2 + c2, 0, 0, 0.5, 0.5, 0, 0, 0, 1), t2.multiply(yo);
  }
  getViewport(e21) {
    return this._viewports[e21];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e21) {
    return this.camera = e21.camera.clone(), this.intensity = e21.intensity, this.bias = e21.bias, this.radius = e21.radius, this.autoUpdate = e21.autoUpdate, this.needsUpdate = e21.needsUpdate, this.normalBias = e21.normalBias, this.blurSamples = e21.blurSamples, this.mapSize.copy(e21.mapSize), this.mapType = e21.mapType, this.biasNode = e21.biasNode, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    let e21 = {};
    return e21.intensity = this.intensity, e21.bias = this.bias, e21.normalBias = this.normalBias, e21.radius = this.radius, e21.blurSamples = this.blurSamples, e21.mapSize = this.mapSize.toArray(), e21.mapType = this.mapType, e21.camera = this.camera.toJSON(false).object, delete e21.camera.matrix, e21;
  }
};
var Co = new U();
var wo = new dt();
var To = new U();
var Eo = class extends sn {
  constructor() {
    super(), this.isCamera = true, this.type = `Camera`, this.matrixWorldInverse = new Nt(), this.projectionMatrix = new Nt(), this.projectionMatrixInverse = new Nt(), this.coordinateSystem = Ue, this._reversedDepth = false;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e21, t2) {
    return super.copy(e21, t2), this.matrixWorldInverse.copy(e21.matrixWorldInverse), this.projectionMatrix.copy(e21.projectionMatrix), this.projectionMatrixInverse.copy(e21.projectionMatrixInverse), this.coordinateSystem = e21.coordinateSystem, this;
  }
  getWorldDirection(e21) {
    return super.getWorldDirection(e21).negate();
  }
  updateMatrixWorld(e21) {
    super.updateMatrixWorld(e21), this.matrixWorld.decompose(Co, wo, To), To.x === 1 && To.y === 1 && To.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Co, wo, To.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e21, t2, n2 = false) {
    super.updateWorldMatrix(e21, t2, n2), this.matrixWorld.decompose(Co, wo, To), To.x === 1 && To.y === 1 && To.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Co, wo, To.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var Do = new U();
var Oo = new H();
var ko = new H();
var Ao = class extends Eo {
  constructor(e21 = 50, t2 = 1, n2 = 0.1, r3 = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = `PerspectiveCamera`, this.fov = e21, this.zoom = 1, this.near = n2, this.far = r3, this.focus = 10, this.aspect = t2, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e21, t2) {
    return super.copy(e21, t2), this.fov = e21.fov, this.zoom = e21.zoom, this.near = e21.near, this.far = e21.far, this.focus = e21.focus, this.aspect = e21.aspect, this.view = e21.view === null ? null : Object.assign({}, e21.view), this.filmGauge = e21.filmGauge, this.filmOffset = e21.filmOffset, this;
  }
  setFocalLength(e21) {
    let t2 = 0.5 * this.getFilmHeight() / e21;
    this.fov = rt * 2 * Math.atan(t2), this.updateProjectionMatrix();
  }
  getFocalLength() {
    let e21 = Math.tan(nt * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e21;
  }
  getEffectiveFOV() {
    return rt * 2 * Math.atan(Math.tan(nt * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e21, t2, n2) {
    Do.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t2.set(Do.x, Do.y).multiplyScalar(-e21 / Do.z), Do.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n2.set(Do.x, Do.y).multiplyScalar(-e21 / Do.z);
  }
  getViewSize(e21, t2) {
    return this.getViewBounds(e21, Oo, ko), t2.subVectors(ko, Oo);
  }
  setViewOffset(e21, t2, n2, r3, i2, a2) {
    this.aspect = e21 / t2, this.view === null && (this.view = {
      enabled: true,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = true, this.view.fullWidth = e21, this.view.fullHeight = t2, this.view.offsetX = n2, this.view.offsetY = r3, this.view.width = i2, this.view.height = a2, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    let e21 = this.near, t2 = e21 * Math.tan(nt * 0.5 * this.fov) / this.zoom, n2 = 2 * t2, r3 = this.aspect * n2, i2 = -0.5 * r3, a2 = this.view;
    if (this.view !== null && this.view.enabled) {
      let e22 = a2.fullWidth, o3 = a2.fullHeight;
      i2 += a2.offsetX * r3 / e22, t2 -= a2.offsetY * n2 / o3, r3 *= a2.width / e22, n2 *= a2.height / o3;
    }
    let o2 = this.filmOffset;
    o2 !== 0 && (i2 += e21 * o2 / this.getFilmWidth()), this.projectionMatrix.makePerspective(i2, i2 + r3, t2, t2 - n2, e21, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e21) {
    let t2 = super.toJSON(e21);
    return t2.object.fov = this.fov, t2.object.zoom = this.zoom, t2.object.near = this.near, t2.object.far = this.far, t2.object.focus = this.focus, t2.object.aspect = this.aspect, this.view !== null && (t2.object.view = Object.assign({}, this.view)), t2.object.filmGauge = this.filmGauge, t2.object.filmOffset = this.filmOffset, t2;
  }
};
var jo = class extends Eo {
  constructor(e21 = -1, t2 = 1, n2 = 1, r3 = -1, i2 = 0.1, a2 = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = `OrthographicCamera`, this.zoom = 1, this.view = null, this.left = e21, this.right = t2, this.top = n2, this.bottom = r3, this.near = i2, this.far = a2, this.updateProjectionMatrix();
  }
  copy(e21, t2) {
    return super.copy(e21, t2), this.left = e21.left, this.right = e21.right, this.top = e21.top, this.bottom = e21.bottom, this.near = e21.near, this.far = e21.far, this.zoom = e21.zoom, this.view = e21.view === null ? null : Object.assign({}, e21.view), this;
  }
  setViewOffset(e21, t2, n2, r3, i2, a2) {
    this.view === null && (this.view = {
      enabled: true,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = true, this.view.fullWidth = e21, this.view.fullHeight = t2, this.view.offsetX = n2, this.view.offsetY = r3, this.view.width = i2, this.view.height = a2, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    let e21 = (this.right - this.left) / (2 * this.zoom), t2 = (this.top - this.bottom) / (2 * this.zoom), n2 = (this.right + this.left) / 2, r3 = (this.top + this.bottom) / 2, i2 = n2 - e21, a2 = n2 + e21, o2 = r3 + t2, s2 = r3 - t2;
    if (this.view !== null && this.view.enabled) {
      let e22 = (this.right - this.left) / this.view.fullWidth / this.zoom, t3 = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      i2 += e22 * this.view.offsetX, a2 = i2 + e22 * this.view.width, o2 -= t3 * this.view.offsetY, s2 = o2 - t3 * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(i2, a2, o2, s2, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e21) {
    let t2 = super.toJSON(e21);
    return t2.object.zoom = this.zoom, t2.object.left = this.left, t2.object.right = this.right, t2.object.top = this.top, t2.object.bottom = this.bottom, t2.object.near = this.near, t2.object.far = this.far, this.view !== null && (t2.object.view = Object.assign({}, this.view)), t2;
  }
};
var Mo = class extends So {
  constructor() {
    super(new jo(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
};
var No = class extends _o {
  constructor(e21, t2) {
    super(e21, t2), this.isDirectionalLight = true, this.type = `DirectionalLight`, this.position.copy(sn.DEFAULT_UP), this.updateMatrix(), this.target = new sn(), this.shadow = new Mo();
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e21) {
    return super.copy(e21), this.target = e21.target.clone(), this.shadow = e21.shadow.clone(), this;
  }
  toJSON(e21) {
    let t2 = super.toJSON(e21);
    return t2.object.shadow = this.shadow.toJSON(), t2.object.target = this.target.uuid, t2;
  }
};
var Po = -90;
var Fo = 1;
var Io = class extends sn {
  constructor(e21, t2, n2) {
    super(), this.type = `CubeCamera`, this.renderTarget = n2, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    let r3 = new Ao(Po, Fo, e21, t2);
    r3.layers = this.layers, this.add(r3);
    let i2 = new Ao(Po, Fo, e21, t2);
    i2.layers = this.layers, this.add(i2);
    let a2 = new Ao(Po, Fo, e21, t2);
    a2.layers = this.layers, this.add(a2);
    let o2 = new Ao(Po, Fo, e21, t2);
    o2.layers = this.layers, this.add(o2);
    let s2 = new Ao(Po, Fo, e21, t2);
    s2.layers = this.layers, this.add(s2);
    let c2 = new Ao(Po, Fo, e21, t2);
    c2.layers = this.layers, this.add(c2);
  }
  updateCoordinateSystem() {
    let e21 = this.coordinateSystem, t2 = this.children.concat(), [n2, r3, i2, a2, o2, s2] = t2;
    for (let e22 of t2) this.remove(e22);
    if (e21 === 2e3) n2.up.set(0, 1, 0), n2.lookAt(1, 0, 0), r3.up.set(0, 1, 0), r3.lookAt(-1, 0, 0), i2.up.set(0, 0, -1), i2.lookAt(0, 1, 0), a2.up.set(0, 0, 1), a2.lookAt(0, -1, 0), o2.up.set(0, 1, 0), o2.lookAt(0, 0, 1), s2.up.set(0, 1, 0), s2.lookAt(0, 0, -1);
    else if (e21 === 2001) n2.up.set(0, -1, 0), n2.lookAt(-1, 0, 0), r3.up.set(0, -1, 0), r3.lookAt(1, 0, 0), i2.up.set(0, 0, 1), i2.lookAt(0, 1, 0), a2.up.set(0, 0, -1), a2.lookAt(0, -1, 0), o2.up.set(0, -1, 0), o2.lookAt(0, 0, 1), s2.up.set(0, -1, 0), s2.lookAt(0, 0, -1);
    else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: ` + e21);
    for (let e22 of t2) this.add(e22), e22.updateMatrixWorld();
  }
  update(e21, t2) {
    this.parent === null && this.updateMatrixWorld();
    let {
      renderTarget: n2,
      activeMipmapLevel: r3
    } = this;
    this.coordinateSystem !== e21.coordinateSystem && (this.coordinateSystem = e21.coordinateSystem, this.updateCoordinateSystem());
    let [i2, a2, o2, s2, c2, l2] = this.children, u2 = e21.getRenderTarget(), d2 = e21.getActiveCubeFace(), f2 = e21.getActiveMipmapLevel(), p2 = e21.xr.enabled;
    e21.xr.enabled = false;
    let m2 = n2.texture.mipmapsAutoUpdate;
    n2.texture.mipmapsAutoUpdate = false;
    let h2 = false;
    h2 = e21.isWebGLRenderer === true ? e21.state.buffers.depth.getReversed() : e21.reversedDepthBuffer, e21.setRenderTarget(n2, 0, r3), h2 && e21.autoClear === false && e21.clearDepth(), e21.render(t2, i2), e21.setRenderTarget(n2, 1, r3), h2 && e21.autoClear === false && e21.clearDepth(), e21.render(t2, a2), e21.setRenderTarget(n2, 2, r3), h2 && e21.autoClear === false && e21.clearDepth(), e21.render(t2, o2), e21.setRenderTarget(n2, 3, r3), h2 && e21.autoClear === false && e21.clearDepth(), e21.render(t2, s2), e21.setRenderTarget(n2, 4, r3), h2 && e21.autoClear === false && e21.clearDepth(), e21.render(t2, c2), n2.texture.mipmapsAutoUpdate = m2, e21.setRenderTarget(n2, 5, r3), h2 && e21.autoClear === false && e21.clearDepth(), e21.render(t2, l2), e21.setRenderTarget(u2, d2, f2), e21.xr.enabled = p2, n2.texture.needsPMREMUpdate = true;
  }
};
var Lo = class extends Ao {
  constructor(e21 = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = e21, this.perCameraFrustumCulled = false;
  }
};
var Ro = `\\[\\]\\.:\\/`;
var zo = RegExp(`[\\[\\]\\.:\\/]`, `g`);
var Bo = `[^\\[\\]\\.:\\/]`;
var Vo = `[^` + Ro.replace(`\\.`, ``) + `]`;
var Ho = `((?:WC+[\\/:])*)`.replace(`WC`, Bo);
var Uo = `(WCOD+)?`.replace(`WCOD`, Vo);
var Wo = `(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`, Bo);
var Go = `\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`, Bo);
var Ko = RegExp(`^` + Ho + Uo + Wo + Go + `$`);
var qo = [`material`, `materials`, `bones`, `map`];
var Jo = class {
  constructor(e21, t2, n2) {
    let r3 = n2 || Yo.parseTrackName(t2);
    this._targetGroup = e21, this._bindings = e21.subscribe_(t2, r3);
  }
  getValue(e21, t2) {
    this.bind();
    let n2 = this._targetGroup.nCachedObjects_, r3 = this._bindings[n2];
    r3 !== void 0 && r3.getValue(e21, t2);
  }
  setValue(e21, t2) {
    let n2 = this._bindings;
    for (let r3 = this._targetGroup.nCachedObjects_, i2 = n2.length; r3 !== i2; ++r3) n2[r3].setValue(e21, t2);
  }
  bind() {
    let e21 = this._bindings;
    for (let t2 = this._targetGroup.nCachedObjects_, n2 = e21.length; t2 !== n2; ++t2) e21[t2].bind();
  }
  unbind() {
    let e21 = this._bindings;
    for (let t2 = this._targetGroup.nCachedObjects_, n2 = e21.length; t2 !== n2; ++t2) e21[t2].unbind();
  }
};
var Yo = class e17 {
  constructor(t2, n2, r3) {
    this.path = n2, this.parsedPath = r3 || e17.parseTrackName(n2), this.node = e17.findNode(t2, this.parsedPath.nodeName), this.rootNode = t2, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(t2, n2, r3) {
    return t2 && t2.isAnimationObjectGroup ? new e17.Composite(t2, n2, r3) : new e17(t2, n2, r3);
  }
  static sanitizeNodeName(e21) {
    return e21.replace(/\s/g, `_`).replace(zo, ``);
  }
  static parseTrackName(e21) {
    let t2 = Ko.exec(e21);
    if (t2 === null) throw Error(`THREE.PropertyBinding: Cannot parse trackName: ` + e21);
    let n2 = {
      nodeName: t2[2],
      objectName: t2[3],
      objectIndex: t2[4],
      propertyName: t2[5],
      propertyIndex: t2[6]
    }, r3 = n2.nodeName && n2.nodeName.lastIndexOf(`.`);
    if (r3 !== void 0 && r3 !== -1) {
      let e22 = n2.nodeName.substring(r3 + 1);
      qo.indexOf(e22) !== -1 && (n2.nodeName = n2.nodeName.substring(0, r3), n2.objectName = e22);
    }
    if (n2.propertyName === null || n2.propertyName.length === 0) throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: ` + e21);
    return n2;
  }
  static findNode(e21, t2) {
    if (t2 === void 0 || t2 === `` || t2 === `.` || t2 === -1 || t2 === e21.name || t2 === e21.uuid) return e21;
    if (e21.skeleton) {
      let n2 = e21.skeleton.getBoneByName(t2);
      if (n2 !== void 0) return n2;
    }
    if (e21.children) {
      let n2 = function(e22) {
        for (let r4 = 0; r4 < e22.length; r4++) {
          let i2 = e22[r4];
          if (i2.name === t2 || i2.uuid === t2) return i2;
          let a2 = n2(i2.children);
          if (a2) return a2;
        }
        return null;
      }, r3 = n2(e21.children);
      if (r3) return r3;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(e21, t2) {
    e21[t2] = this.targetObject[this.propertyName];
  }
  _getValue_array(e21, t2) {
    let n2 = this.resolvedProperty;
    for (let r3 = 0, i2 = n2.length; r3 !== i2; ++r3) e21[t2++] = n2[r3];
  }
  _getValue_arrayElement(e21, t2) {
    e21[t2] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e21, t2) {
    this.resolvedProperty.toArray(e21, t2);
  }
  _setValue_direct(e21, t2) {
    this.targetObject[this.propertyName] = e21[t2];
  }
  _setValue_direct_setNeedsUpdate(e21, t2) {
    this.targetObject[this.propertyName] = e21[t2], this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e21, t2) {
    this.targetObject[this.propertyName] = e21[t2], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_array(e21, t2) {
    let n2 = this.resolvedProperty;
    for (let r3 = 0, i2 = n2.length; r3 !== i2; ++r3) n2[r3] = e21[t2++];
  }
  _setValue_array_setNeedsUpdate(e21, t2) {
    let n2 = this.resolvedProperty;
    for (let r3 = 0, i2 = n2.length; r3 !== i2; ++r3) n2[r3] = e21[t2++];
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e21, t2) {
    let n2 = this.resolvedProperty;
    for (let r3 = 0, i2 = n2.length; r3 !== i2; ++r3) n2[r3] = e21[t2++];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_arrayElement(e21, t2) {
    this.resolvedProperty[this.propertyIndex] = e21[t2];
  }
  _setValue_arrayElement_setNeedsUpdate(e21, t2) {
    this.resolvedProperty[this.propertyIndex] = e21[t2], this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e21, t2) {
    this.resolvedProperty[this.propertyIndex] = e21[t2], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_fromArray(e21, t2) {
    this.resolvedProperty.fromArray(e21, t2);
  }
  _setValue_fromArray_setNeedsUpdate(e21, t2) {
    this.resolvedProperty.fromArray(e21, t2), this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e21, t2) {
    this.resolvedProperty.fromArray(e21, t2), this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(e21, t2) {
    this.bind(), this.getValue(e21, t2);
  }
  _setValue_unbound(e21, t2) {
    this.bind(), this.setValue(e21, t2);
  }
  bind() {
    let t2 = this.node, n2 = this.parsedPath, r3 = n2.objectName, i2 = n2.propertyName, a2 = n2.propertyIndex;
    if (t2 || (t2 = e17.findNode(this.rootNode, n2.nodeName), this.node = t2), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t2) {
      z(`PropertyBinding: No target node found for track: ` + this.path + `.`);
      return;
    }
    if (r3) {
      let e21 = n2.objectIndex;
      switch (r3) {
        case `materials`:
          if (!t2.material) {
            B(`PropertyBinding: Can not bind to material as node does not have a material.`, this);
            return;
          }
          if (!t2.material.materials) {
            B(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`, this);
            return;
          }
          t2 = t2.material.materials;
          break;
        case `bones`:
          if (!t2.skeleton) {
            B(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`, this);
            return;
          }
          t2 = t2.skeleton.bones;
          for (let n3 = 0; n3 < t2.length; n3++) if (t2[n3].name === e21) {
            e21 = n3;
            break;
          }
          break;
        case `map`:
          if (`map` in t2) {
            t2 = t2.map;
            break;
          }
          if (!t2.material) {
            B(`PropertyBinding: Can not bind to material as node does not have a material.`, this);
            return;
          }
          if (!t2.material.map) {
            B(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`, this);
            return;
          }
          t2 = t2.material.map;
          break;
        default:
          if (t2[r3] === void 0) {
            B(`PropertyBinding: Can not bind to objectName of node undefined.`, this);
            return;
          }
          t2 = t2[r3];
      }
      if (e21 !== void 0) {
        if (t2[e21] === void 0) {
          B(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`, this, t2);
          return;
        }
        t2 = t2[e21];
      }
    }
    let o2 = t2[i2];
    if (o2 === void 0) {
      let e21 = n2.nodeName;
      B(`PropertyBinding: Trying to update property for track: ` + e21 + `.` + i2 + ` but it wasn't found.`, t2);
      return;
    }
    let s2 = this.Versioning.None;
    this.targetObject = t2, t2.isMaterial === true ? s2 = this.Versioning.NeedsUpdate : t2.isObject3D === true && (s2 = this.Versioning.MatrixWorldNeedsUpdate);
    let c2 = this.BindingType.Direct;
    if (a2 !== void 0) {
      if (i2 === `morphTargetInfluences`) {
        if (!t2.geometry) {
          B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`, this);
          return;
        }
        if (!t2.geometry.morphAttributes) {
          B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`, this);
          return;
        }
        t2.morphTargetDictionary[a2] !== void 0 && (a2 = t2.morphTargetDictionary[a2]);
      }
      c2 = this.BindingType.ArrayElement, this.resolvedProperty = o2, this.propertyIndex = a2;
    } else o2.fromArray !== void 0 && o2.toArray !== void 0 ? (c2 = this.BindingType.HasFromToArray, this.resolvedProperty = o2) : Array.isArray(o2) ? (c2 = this.BindingType.EntireArray, this.resolvedProperty = o2) : this.propertyName = i2;
    this.getValue = this.GetterByBindingType[c2], this.setValue = this.SetterByBindingTypeAndVersioning[c2][s2];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
};
Yo.Composite = Jo, Yo.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
}, Yo.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
}, Yo.prototype.GetterByBindingType = [Yo.prototype._getValue_direct, Yo.prototype._getValue_array, Yo.prototype._getValue_arrayElement, Yo.prototype._getValue_toArray], Yo.prototype.SetterByBindingTypeAndVersioning = [[Yo.prototype._setValue_direct, Yo.prototype._setValue_direct_setNeedsUpdate, Yo.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [Yo.prototype._setValue_array, Yo.prototype._setValue_array_setNeedsUpdate, Yo.prototype._setValue_array_setMatrixWorldNeedsUpdate], [Yo.prototype._setValue_arrayElement, Yo.prototype._setValue_arrayElement_setNeedsUpdate, Yo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [Yo.prototype._setValue_fromArray, Yo.prototype._setValue_fromArray_setNeedsUpdate, Yo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]], class {
  static {
    this.prototype.isMatrix2 = true;
  }
  constructor(e21, t2, n2, r3) {
    this.elements = [1, 0, 0, 1], e21 !== void 0 && this.set(e21, t2, n2, r3);
  }
  identity() {
    return this.set(1, 0, 0, 1), this;
  }
  fromArray(e21, t2 = 0) {
    for (let n2 = 0; n2 < 4; n2++) this.elements[n2] = e21[n2 + t2];
    return this;
  }
  set(e21, t2, n2, r3) {
    let i2 = this.elements;
    return i2[0] = e21, i2[2] = t2, i2[1] = n2, i2[3] = r3, this;
  }
};
function Xo(e21, t2, n2, r3) {
  let i2 = Zo(r3);
  switch (n2) {
    case S:
      return e21 * t2;
    case D:
      return e21 * t2 / i2.components * i2.byteLength;
    case O:
      return e21 * t2 / i2.components * i2.byteLength;
    case k:
      return e21 * t2 * 2 / i2.components * i2.byteLength;
    case A:
      return e21 * t2 * 2 / i2.components * i2.byteLength;
    case C:
      return e21 * t2 * 3 / i2.components * i2.byteLength;
    case w:
      return e21 * t2 * 4 / i2.components * i2.byteLength;
    case ee:
      return e21 * t2 * 4 / i2.components * i2.byteLength;
    case j:
    case te:
      return Math.floor((e21 + 3) / 4) * Math.floor((t2 + 3) / 4) * 8;
    case M:
    case ne:
      return Math.floor((e21 + 3) / 4) * Math.floor((t2 + 3) / 4) * 16;
    case re:
    case ae:
      return Math.max(e21, 16) * Math.max(t2, 8) / 4;
    case N:
    case ie:
      return Math.max(e21, 8) * Math.max(t2, 8) / 2;
    case oe:
    case se:
    case le:
    case P:
      return Math.floor((e21 + 3) / 4) * Math.floor((t2 + 3) / 4) * 8;
    case ce:
    case ue:
    case de:
      return Math.floor((e21 + 3) / 4) * Math.floor((t2 + 3) / 4) * 16;
    case fe:
      return Math.floor((e21 + 3) / 4) * Math.floor((t2 + 3) / 4) * 16;
    case pe:
      return Math.floor((e21 + 4) / 5) * Math.floor((t2 + 3) / 4) * 16;
    case me:
      return Math.floor((e21 + 4) / 5) * Math.floor((t2 + 4) / 5) * 16;
    case he:
      return Math.floor((e21 + 5) / 6) * Math.floor((t2 + 4) / 5) * 16;
    case ge:
      return Math.floor((e21 + 5) / 6) * Math.floor((t2 + 5) / 6) * 16;
    case _e:
      return Math.floor((e21 + 7) / 8) * Math.floor((t2 + 4) / 5) * 16;
    case ve:
      return Math.floor((e21 + 7) / 8) * Math.floor((t2 + 5) / 6) * 16;
    case ye:
      return Math.floor((e21 + 7) / 8) * Math.floor((t2 + 7) / 8) * 16;
    case be:
      return Math.floor((e21 + 9) / 10) * Math.floor((t2 + 4) / 5) * 16;
    case xe:
      return Math.floor((e21 + 9) / 10) * Math.floor((t2 + 5) / 6) * 16;
    case Se:
      return Math.floor((e21 + 9) / 10) * Math.floor((t2 + 7) / 8) * 16;
    case Ce:
      return Math.floor((e21 + 9) / 10) * Math.floor((t2 + 9) / 10) * 16;
    case we:
      return Math.floor((e21 + 11) / 12) * Math.floor((t2 + 9) / 10) * 16;
    case Te:
      return Math.floor((e21 + 11) / 12) * Math.floor((t2 + 11) / 12) * 16;
    case Ee:
    case De:
    case Oe:
      return Math.ceil(e21 / 4) * Math.ceil(t2 / 4) * 16;
    case ke:
    case Ae:
      return Math.ceil(e21 / 4) * Math.ceil(t2 / 4) * 8;
    case je:
    case Me:
      return Math.ceil(e21 / 4) * Math.ceil(t2 / 4) * 16;
  }
  throw Error(`Unable to determine texture byte length for ${n2} format.`);
}
function Zo(e21) {
  switch (e21) {
    case l:
    case u:
      return {
        byteLength: 1,
        components: 1
      };
    case f:
    case d:
    case g:
      return {
        byteLength: 2,
        components: 1
      };
    case _:
    case v:
      return {
        byteLength: 2,
        components: 4
      };
    case m:
    case p:
    case h:
      return {
        byteLength: 4,
        components: 1
      };
    case b:
    case x:
      return {
        byteLength: 4,
        components: 3
      };
  }
  throw Error(`THREE.TextureUtils: Unknown texture type ${e21}.`);
}
typeof __THREE_DEVTOOLS__ < `u` && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`, {
  detail: {
    revision: `187`
  }
})), typeof window < `u` && (window.__THREE__ ? z(`WARNING: Multiple instances of Three.js being imported.`) : window.__THREE__ = `187`);
function Qo() {
  let e21 = null, t2 = false, n2 = null, r3 = null;
  function i2(t3, a2) {
    r3 = e21.requestAnimationFrame(i2), n2(t3, a2);
  }
  return {
    start: function() {
      t2 !== true && n2 !== null && e21 !== null && (r3 = e21.requestAnimationFrame(i2), t2 = true);
    },
    stop: function() {
      e21 !== null && e21.cancelAnimationFrame(r3), t2 = false;
    },
    setAnimationLoop: function(e22) {
      n2 = e22;
    },
    setContext: function(t3) {
      e21 = t3;
    }
  };
}
function $o(e21) {
  let t2 = /* @__PURE__ */ new WeakMap();
  function n2(t3, n3) {
    let r4 = t3.array, i3 = t3.usage, a3 = r4.byteLength, o3 = e21.createBuffer();
    e21.bindBuffer(n3, o3), e21.bufferData(n3, r4, i3), t3.onUploadCallback();
    let s2;
    if (r4 instanceof Float32Array) s2 = e21.FLOAT;
    else if (typeof Float16Array < `u` && r4 instanceof Float16Array) s2 = e21.HALF_FLOAT;
    else if (r4 instanceof Uint16Array) s2 = t3.isFloat16BufferAttribute ? e21.HALF_FLOAT : e21.UNSIGNED_SHORT;
    else if (r4 instanceof Int16Array) s2 = e21.SHORT;
    else if (r4 instanceof Uint32Array) s2 = e21.UNSIGNED_INT;
    else if (r4 instanceof Int32Array) s2 = e21.INT;
    else if (r4 instanceof Int8Array) s2 = e21.BYTE;
    else if (r4 instanceof Uint8Array) s2 = e21.UNSIGNED_BYTE;
    else if (r4 instanceof Uint8ClampedArray) s2 = e21.UNSIGNED_BYTE;
    else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: ` + r4);
    return {
      buffer: o3,
      type: s2,
      bytesPerElement: r4.BYTES_PER_ELEMENT,
      version: t3.version,
      size: a3
    };
  }
  function r3(t3, n3, r4) {
    let i3 = n3.array, a3 = n3.updateRanges;
    if (e21.bindBuffer(r4, t3), a3.length === 0) e21.bufferSubData(r4, 0, i3);
    else {
      a3.sort((e22, t5) => e22.start - t5.start);
      let t4 = 0;
      for (let e22 = 1; e22 < a3.length; e22++) {
        let n4 = a3[t4], r5 = a3[e22];
        r5.start <= n4.start + n4.count + 1 ? n4.count = Math.max(n4.count, r5.start + r5.count - n4.start) : (++t4, a3[t4] = r5);
      }
      a3.length = t4 + 1;
      for (let t5 = 0, n4 = a3.length; t5 < n4; t5++) {
        let n5 = a3[t5];
        e21.bufferSubData(r4, n5.start * i3.BYTES_PER_ELEMENT, i3, n5.start, n5.count);
      }
      n3.clearUpdateRanges();
    }
    n3.onUploadCallback();
  }
  function i2(e22) {
    return e22.isInterleavedBufferAttribute && (e22 = e22.data), t2.get(e22);
  }
  function a2(n3) {
    n3.isInterleavedBufferAttribute && (n3 = n3.data);
    let r4 = t2.get(n3);
    r4 && (e21.deleteBuffer(r4.buffer), t2.delete(n3));
  }
  function o2(e22, i3) {
    if (e22.isInterleavedBufferAttribute && (e22 = e22.data), e22.isGLBufferAttribute) {
      let n3 = t2.get(e22);
      (!n3 || n3.version < e22.version) && t2.set(e22, {
        buffer: e22.buffer,
        type: e22.type,
        bytesPerElement: e22.elementSize,
        version: e22.version
      });
      return;
    }
    let a3 = t2.get(e22);
    if (a3 === void 0) t2.set(e22, n2(e22, i3));
    else if (a3.version < e22.version) {
      if (a3.size !== e22.array.byteLength) throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);
      r3(a3.buffer, e22, i3), a3.version = e22.version;
    }
  }
  return {
    get: i2,
    remove: a2,
    update: o2
  };
}
var q = {
  alphahash_fragment: `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  alphahash_pars_fragment: `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  alphamap_fragment: `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  alphamap_pars_fragment: `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  alphatest_fragment: `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  alphatest_pars_fragment: `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  aomap_fragment: `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  aomap_pars_fragment: `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  batching_pars_vertex: `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,
  batching_vertex: `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  begin_vertex: `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  beginnormal_vertex: `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  bsdfs: `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  iridescence_fragment: `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  bumpmap_pars_fragment: `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  clipping_planes_fragment: `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  clipping_planes_pars_fragment: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  clipping_planes_pars_vertex: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  clipping_planes_vertex: `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  color_fragment: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,
  color_pars_fragment: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,
  color_pars_vertex: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,
  color_vertex: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,
  common: `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  defaultnormal_vertex: `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,
  displacementmap_pars_vertex: `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  displacementmap_vertex: `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  emissivemap_fragment: `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  emissivemap_pars_fragment: `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  colorspace_fragment: `gl_FragColor = linearToOutputTexel( gl_FragColor );`,
  colorspace_pars_fragment: `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  envmap_fragment: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,
  envmap_common_pars_fragment: `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,
  envmap_pars_fragment: `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  envmap_pars_vertex: `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  envmap_physical_pars_fragment: `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,
  envmap_vertex: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  fog_vertex: `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  fog_pars_vertex: `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  fog_fragment: `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  fog_pars_fragment: `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  gradientmap_pars_fragment: `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  lightmap_pars_fragment: `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  lights_lambert_fragment: `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  lights_lambert_pars_fragment: `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  lights_pars_begin: `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,
  lights_toon_fragment: `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  lights_toon_pars_fragment: `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  lights_phong_fragment: `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  lights_phong_pars_fragment: `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  lights_physical_fragment: `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  lights_physical_pars_fragment: `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  lights_fragment_begin: `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  lights_fragment_maps: `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  lights_fragment_end: `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  lightprobes_pars_fragment: `#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,
  logdepthbuf_fragment: `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  logdepthbuf_pars_fragment: `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  logdepthbuf_pars_vertex: `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  logdepthbuf_vertex: `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  map_fragment: `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  map_pars_fragment: `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  map_particle_fragment: `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  map_particle_pars_fragment: `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  metalnessmap_fragment: `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  metalnessmap_pars_fragment: `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  morphinstance_vertex: `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  morphcolor_vertex: `#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  morphnormal_vertex: `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  morphtarget_pars_vertex: `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  morphtarget_vertex: `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  normal_fragment_begin: `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  normal_fragment_maps: `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  normal_pars_fragment: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  normal_pars_vertex: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  normal_vertex: `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,
  normalmap_pars_fragment: `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  clearcoat_normal_fragment_begin: `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  clearcoat_normal_fragment_maps: `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  clearcoat_pars_fragment: `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  iridescence_pars_fragment: `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  opaque_fragment: `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  packing: `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,
  premultiplied_alpha_fragment: `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  project_vertex: `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  dithering_fragment: `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  dithering_pars_fragment: `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  roughnessmap_fragment: `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  roughnessmap_pars_fragment: `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  shadowmap_pars_fragment: `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,
  shadowmap_pars_vertex: `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  shadowmap_vertex: `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  shadowmask_pars_fragment: `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  skinbase_vertex: `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  skinning_pars_vertex: `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  skinning_vertex: `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  skinnormal_vertex: `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  specularmap_fragment: `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  specularmap_pars_fragment: `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  tonemapping_fragment: `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  tonemapping_pars_fragment: `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  transmission_fragment: `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  transmission_pars_fragment: `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  uv_pars_fragment: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  uv_pars_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  uv_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  worldpos_vertex: `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,
  background_vert: `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  background_frag: `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  backgroundCube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  backgroundCube_frag: `uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  cube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  cube_frag: `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  depth_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  depth_frag: `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  distance_vert: `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  distance_frag: `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,
  equirect_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  equirect_frag: `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  linedashed_vert: `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  linedashed_frag: `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  meshbasic_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  meshbasic_frag: `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshlambert_vert: `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  meshlambert_frag: `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshmatcap_vert: `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  meshmatcap_frag: `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshnormal_vert: `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  meshnormal_frag: `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  meshphong_vert: `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  meshphong_frag: `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshphysical_vert: `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  meshphysical_frag: `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshtoon_vert: `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  meshtoon_frag: `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  points_vert: `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  points_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  shadow_vert: `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  shadow_frag: `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  sprite_vert: `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  sprite_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
};
var J = {
  common: {
    diffuse: {
      value: new K(16777215)
    },
    opacity: {
      value: 1
    },
    map: {
      value: null
    },
    mapTransform: {
      value: new W()
    },
    alphaMap: {
      value: null
    },
    alphaMapTransform: {
      value: new W()
    },
    alphaTest: {
      value: 0
    }
  },
  specularmap: {
    specularMap: {
      value: null
    },
    specularMapTransform: {
      value: new W()
    }
  },
  envmap: {
    envMap: {
      value: null
    },
    envMapRotation: {
      value: new W()
    },
    reflectivity: {
      value: 1
    },
    ior: {
      value: 1.5
    },
    refractionRatio: {
      value: 0.98
    },
    dfgLUT: {
      value: null
    }
  },
  aomap: {
    aoMap: {
      value: null
    },
    aoMapIntensity: {
      value: 1
    },
    aoMapTransform: {
      value: new W()
    }
  },
  lightmap: {
    lightMap: {
      value: null
    },
    lightMapIntensity: {
      value: 1
    },
    lightMapTransform: {
      value: new W()
    }
  },
  bumpmap: {
    bumpMap: {
      value: null
    },
    bumpMapTransform: {
      value: new W()
    },
    bumpScale: {
      value: 1
    }
  },
  normalmap: {
    normalMap: {
      value: null
    },
    normalMapTransform: {
      value: new W()
    },
    normalScale: {
      value: new H(1, 1)
    }
  },
  displacementmap: {
    displacementMap: {
      value: null
    },
    displacementMapTransform: {
      value: new W()
    },
    displacementScale: {
      value: 1
    },
    displacementBias: {
      value: 0
    }
  },
  emissivemap: {
    emissiveMap: {
      value: null
    },
    emissiveMapTransform: {
      value: new W()
    }
  },
  metalnessmap: {
    metalnessMap: {
      value: null
    },
    metalnessMapTransform: {
      value: new W()
    }
  },
  roughnessmap: {
    roughnessMap: {
      value: null
    },
    roughnessMapTransform: {
      value: new W()
    }
  },
  gradientmap: {
    gradientMap: {
      value: null
    }
  },
  fog: {
    fogDensity: {
      value: 25e-5
    },
    fogNear: {
      value: 1
    },
    fogFar: {
      value: 2e3
    },
    fogColor: {
      value: new K(16777215)
    }
  },
  lights: {
    ambientLightColor: {
      value: []
    },
    lightProbe: {
      value: []
    },
    sunLights: {
      value: [],
      properties: {
        direction: {},
        color: {}
      }
    },
    sunLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    sunShadowMatrix: {
      value: []
    },
    sunShadowCascade: {
      value: []
    },
    directionalLights: {
      value: [],
      properties: {
        direction: {},
        color: {}
      }
    },
    directionalLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    directionalShadowMatrix: {
      value: []
    },
    spotLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        direction: {},
        distance: {},
        coneCos: {},
        penumbraCos: {},
        decay: {}
      }
    },
    spotLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    spotLightMap: {
      value: []
    },
    spotLightMatrix: {
      value: []
    },
    pointLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        decay: {},
        distance: {}
      }
    },
    pointLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {},
        shadowCameraNear: {},
        shadowCameraFar: {}
      }
    },
    pointShadowMatrix: {
      value: []
    },
    hemisphereLights: {
      value: [],
      properties: {
        direction: {},
        skyColor: {},
        groundColor: {}
      }
    },
    rectAreaLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        width: {},
        height: {}
      }
    },
    ltc_1: {
      value: null
    },
    ltc_2: {
      value: null
    },
    probesSH: {
      value: []
    },
    probesMin: {
      value: []
    },
    probesMax: {
      value: []
    },
    probesResolution: {
      value: []
    }
  },
  points: {
    diffuse: {
      value: new K(16777215)
    },
    opacity: {
      value: 1
    },
    size: {
      value: 1
    },
    scale: {
      value: 1
    },
    map: {
      value: null
    },
    alphaMap: {
      value: null
    },
    alphaMapTransform: {
      value: new W()
    },
    alphaTest: {
      value: 0
    },
    uvTransform: {
      value: new W()
    }
  },
  sprite: {
    diffuse: {
      value: new K(16777215)
    },
    opacity: {
      value: 1
    },
    center: {
      value: new H(0.5, 0.5)
    },
    rotation: {
      value: 0
    },
    map: {
      value: null
    },
    mapTransform: {
      value: new W()
    },
    alphaMap: {
      value: null
    },
    alphaMapTransform: {
      value: new W()
    },
    alphaTest: {
      value: 0
    }
  }
};
var es = {
  basic: {
    uniforms: Ra([J.common, J.specularmap, J.envmap, J.aomap, J.lightmap, J.fog]),
    vertexShader: q.meshbasic_vert,
    fragmentShader: q.meshbasic_frag
  },
  lambert: {
    uniforms: Ra([J.common, J.specularmap, J.envmap, J.aomap, J.lightmap, J.emissivemap, J.bumpmap, J.normalmap, J.displacementmap, J.fog, J.lights, {
      emissive: {
        value: new K(0)
      },
      envMapIntensity: {
        value: 1
      }
    }]),
    vertexShader: q.meshlambert_vert,
    fragmentShader: q.meshlambert_frag
  },
  phong: {
    uniforms: Ra([J.common, J.specularmap, J.envmap, J.aomap, J.lightmap, J.emissivemap, J.bumpmap, J.normalmap, J.displacementmap, J.fog, J.lights, {
      emissive: {
        value: new K(0)
      },
      specular: {
        value: new K(1118481)
      },
      shininess: {
        value: 30
      },
      envMapIntensity: {
        value: 1
      }
    }]),
    vertexShader: q.meshphong_vert,
    fragmentShader: q.meshphong_frag
  },
  standard: {
    uniforms: Ra([J.common, J.envmap, J.aomap, J.lightmap, J.emissivemap, J.bumpmap, J.normalmap, J.displacementmap, J.roughnessmap, J.metalnessmap, J.fog, J.lights, {
      emissive: {
        value: new K(0)
      },
      roughness: {
        value: 1
      },
      metalness: {
        value: 0
      },
      envMapIntensity: {
        value: 1
      }
    }]),
    vertexShader: q.meshphysical_vert,
    fragmentShader: q.meshphysical_frag
  },
  toon: {
    uniforms: Ra([J.common, J.aomap, J.lightmap, J.emissivemap, J.bumpmap, J.normalmap, J.displacementmap, J.gradientmap, J.fog, J.lights, {
      emissive: {
        value: new K(0)
      }
    }]),
    vertexShader: q.meshtoon_vert,
    fragmentShader: q.meshtoon_frag
  },
  matcap: {
    uniforms: Ra([J.common, J.bumpmap, J.normalmap, J.displacementmap, J.fog, {
      matcap: {
        value: null
      }
    }]),
    vertexShader: q.meshmatcap_vert,
    fragmentShader: q.meshmatcap_frag
  },
  points: {
    uniforms: Ra([J.points, J.fog]),
    vertexShader: q.points_vert,
    fragmentShader: q.points_frag
  },
  dashed: {
    uniforms: Ra([J.common, J.fog, {
      scale: {
        value: 1
      },
      dashSize: {
        value: 1
      },
      totalSize: {
        value: 2
      }
    }]),
    vertexShader: q.linedashed_vert,
    fragmentShader: q.linedashed_frag
  },
  depth: {
    uniforms: Ra([J.common, J.displacementmap]),
    vertexShader: q.depth_vert,
    fragmentShader: q.depth_frag
  },
  normal: {
    uniforms: Ra([J.common, J.bumpmap, J.normalmap, J.displacementmap, {
      opacity: {
        value: 1
      }
    }]),
    vertexShader: q.meshnormal_vert,
    fragmentShader: q.meshnormal_frag
  },
  sprite: {
    uniforms: Ra([J.sprite, J.fog]),
    vertexShader: q.sprite_vert,
    fragmentShader: q.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: {
        value: new W()
      },
      t2D: {
        value: null
      },
      backgroundIntensity: {
        value: 1
      }
    },
    vertexShader: q.background_vert,
    fragmentShader: q.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: {
        value: null
      },
      backgroundBlurriness: {
        value: 0
      },
      backgroundIntensity: {
        value: 1
      },
      backgroundRotation: {
        value: new W()
      }
    },
    vertexShader: q.backgroundCube_vert,
    fragmentShader: q.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: {
        value: null
      },
      tFlip: {
        value: -1
      },
      opacity: {
        value: 1
      }
    },
    vertexShader: q.cube_vert,
    fragmentShader: q.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: {
        value: null
      }
    },
    vertexShader: q.equirect_vert,
    fragmentShader: q.equirect_frag
  },
  distance: {
    uniforms: Ra([J.common, J.displacementmap, {
      referencePosition: {
        value: new U()
      },
      nearDistance: {
        value: 1
      },
      farDistance: {
        value: 1e3
      }
    }]),
    vertexShader: q.distance_vert,
    fragmentShader: q.distance_frag
  },
  shadow: {
    uniforms: Ra([J.lights, J.fog, {
      color: {
        value: new K(0)
      },
      opacity: {
        value: 1
      }
    }]),
    vertexShader: q.shadow_vert,
    fragmentShader: q.shadow_frag
  }
};
es.physical = {
  uniforms: Ra([es.standard.uniforms, {
    clearcoat: {
      value: 0
    },
    clearcoatMap: {
      value: null
    },
    clearcoatMapTransform: {
      value: new W()
    },
    clearcoatNormalMap: {
      value: null
    },
    clearcoatNormalMapTransform: {
      value: new W()
    },
    clearcoatNormalScale: {
      value: new H(1, 1)
    },
    clearcoatRoughness: {
      value: 0
    },
    clearcoatRoughnessMap: {
      value: null
    },
    clearcoatRoughnessMapTransform: {
      value: new W()
    },
    diffuseRoughness: {
      value: 0
    },
    diffuseRoughnessMap: {
      value: null
    },
    diffuseRoughnessMapTransform: {
      value: new W()
    },
    dispersion: {
      value: 0
    },
    retroreflectivity: {
      value: 0
    },
    iridescence: {
      value: 0
    },
    iridescenceMap: {
      value: null
    },
    iridescenceMapTransform: {
      value: new W()
    },
    iridescenceIOR: {
      value: 1.3
    },
    iridescenceThicknessMinimum: {
      value: 100
    },
    iridescenceThicknessMaximum: {
      value: 400
    },
    iridescenceThicknessMap: {
      value: null
    },
    iridescenceThicknessMapTransform: {
      value: new W()
    },
    sheen: {
      value: 0
    },
    sheenColor: {
      value: new K(0)
    },
    sheenColorMap: {
      value: null
    },
    sheenColorMapTransform: {
      value: new W()
    },
    sheenRoughness: {
      value: 1
    },
    sheenRoughnessMap: {
      value: null
    },
    sheenRoughnessMapTransform: {
      value: new W()
    },
    transmission: {
      value: 0
    },
    transmissionMap: {
      value: null
    },
    transmissionMapTransform: {
      value: new W()
    },
    transmissionSamplerSize: {
      value: new H()
    },
    transmissionSamplerMap: {
      value: null
    },
    thickness: {
      value: 0
    },
    thicknessMap: {
      value: null
    },
    thicknessMapTransform: {
      value: new W()
    },
    attenuationDistance: {
      value: 0
    },
    attenuationColor: {
      value: new K(0)
    },
    specularColor: {
      value: new K(1, 1, 1)
    },
    specularColorMap: {
      value: null
    },
    specularColorMapTransform: {
      value: new W()
    },
    specularIntensity: {
      value: 1
    },
    specularIntensityMap: {
      value: null
    },
    specularIntensityMapTransform: {
      value: new W()
    },
    anisotropyVector: {
      value: new H()
    },
    anisotropyMap: {
      value: null
    },
    anisotropyMapTransform: {
      value: new W()
    }
  }]),
  vertexShader: q.meshphysical_vert,
  fragmentShader: q.meshphysical_frag
};
var ts = {
  r: 0,
  b: 0,
  g: 0
};
var ns = new Nt();
var rs = new W();
rs.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function is(e21, t2, n2, r3, i2, a2) {
  let o2 = new K(0), s2 = i2 === true ? 0 : 1, c2, l2, u2 = null, d2 = 0, f2 = null;
  function p2(e22) {
    let n3 = e22.isScene === true ? e22.background : null;
    if (n3 && n3.isTexture) {
      let r4 = e22.backgroundBlurriness > 0;
      n3 = t2.get(n3, r4);
    }
    return n3;
  }
  function m2(t3) {
    let r4 = false, i3 = p2(t3);
    i3 === null ? g2(o2, s2) : i3 && i3.isColor && (g2(i3, 1), r4 = true);
    let c3 = e21.xr.getEnvironmentBlendMode();
    c3 === `additive` ? n2.buffers.color.setClear(0, 0, 0, 1, a2) : c3 === `alpha-blend` && n2.buffers.color.setClear(0, 0, 0, 0, a2), (e21.autoClear || r4) && (n2.buffers.depth.setTest(true), n2.buffers.depth.setMask(true), n2.buffers.color.setMask(true), e21.clear(e21.autoClearColor, e21.autoClearDepth, e21.autoClearStencil));
  }
  function h2(t3, n3) {
    let i3 = p2(n3);
    i3 && i3.isCubeTexture ? (l2 === void 0 && (l2 = new ei(new hi(1, 1, 1), new Ga({
      name: `BackgroundCubeMaterial`,
      uniforms: La(es.backgroundCube.uniforms),
      vertexShader: es.backgroundCube.vertexShader,
      fragmentShader: es.backgroundCube.fragmentShader,
      side: 1,
      depthTest: false,
      depthWrite: false,
      fog: false,
      allowOverride: false
    })), l2.geometry.deleteAttribute(`normal`), l2.geometry.deleteAttribute(`uv`), l2.onBeforeRender = function(e22, t4, n4) {
      this.matrixWorld.copyPosition(n4.matrixWorld);
    }, Object.defineProperty(l2.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r3.update(l2)), l2.material.uniforms.envMap.value = i3, l2.material.uniforms.backgroundBlurriness.value = n3.backgroundBlurriness, l2.material.uniforms.backgroundIntensity.value = n3.backgroundIntensity, l2.material.uniforms.backgroundRotation.value.setFromMatrix4(ns.makeRotationFromEuler(n3.backgroundRotation)).transpose(), i3.isRenderTargetTexture === false && l2.material.uniforms.backgroundRotation.value.premultiply(rs), l2.material.toneMapped = G.getTransfer(i3.colorSpace) !== Be, (u2 !== i3 || d2 !== i3.version || f2 !== e21.toneMapping) && (l2.material.needsUpdate = true, u2 = i3, d2 = i3.version, f2 = e21.toneMapping), l2.layers.enableAll(), t3.unshift(l2, l2.geometry, l2.material, 0, 0, null)) : i3 && i3.isTexture && (c2 === void 0 && (c2 = new ei(new Pa(2, 2), new Ga({
      name: `BackgroundMaterial`,
      uniforms: La(es.background.uniforms),
      vertexShader: es.background.vertexShader,
      fragmentShader: es.background.fragmentShader,
      side: 0,
      depthTest: false,
      depthWrite: false,
      fog: false,
      allowOverride: false
    })), c2.geometry.deleteAttribute(`normal`), Object.defineProperty(c2.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r3.update(c2)), c2.material.uniforms.t2D.value = i3, c2.material.uniforms.backgroundIntensity.value = n3.backgroundIntensity, c2.material.toneMapped = G.getTransfer(i3.colorSpace) !== Be, i3.matrixAutoUpdate === true && i3.updateMatrix(), c2.material.uniforms.uvTransform.value.copy(i3.matrix), (u2 !== i3 || d2 !== i3.version || f2 !== e21.toneMapping) && (c2.material.needsUpdate = true, u2 = i3, d2 = i3.version, f2 = e21.toneMapping), c2.layers.enableAll(), t3.unshift(c2, c2.geometry, c2.material, 0, 0, null));
  }
  function g2(t3, r4) {
    t3.getRGB(ts, Va(e21)), n2.buffers.color.setClear(ts.r, ts.g, ts.b, r4, a2);
  }
  function _2() {
    l2 !== void 0 && (l2.geometry.dispose(), l2.material.dispose(), l2 = void 0), c2 !== void 0 && (c2.geometry.dispose(), c2.material.dispose(), c2 = void 0);
  }
  return {
    getClearColor: function() {
      return o2;
    },
    setClearColor: function(e22, t3 = 1) {
      o2.set(e22), s2 = t3, g2(o2, s2);
    },
    getClearAlpha: function() {
      return s2;
    },
    setClearAlpha: function(e22) {
      s2 = e22, g2(o2, s2);
    },
    render: m2,
    addToRenderList: h2,
    dispose: _2
  };
}
function as(e21, t2) {
  let n2 = e21.getParameter(e21.MAX_VERTEX_ATTRIBS), r3 = {}, i2 = f2(null), a2 = i2, o2 = false;
  function s2(n3, r4, i3, s3, c3) {
    let u3 = false, f3 = d2(n3, s3, i3, r4);
    a2 !== f3 && (a2 = f3, l2(a2.object)), u3 = p2(n3, s3, i3, c3), u3 && m2(n3, s3, i3, c3), c3 !== null && t2.update(c3, e21.ELEMENT_ARRAY_BUFFER), (u3 || o2) && (o2 = false, b2(n3, r4, i3, s3), c3 !== null && e21.bindBuffer(e21.ELEMENT_ARRAY_BUFFER, t2.get(c3).buffer));
  }
  function c2() {
    return e21.createVertexArray();
  }
  function l2(t3) {
    return e21.bindVertexArray(t3);
  }
  function u2(t3) {
    return e21.deleteVertexArray(t3);
  }
  function d2(e22, t3, n3, i3) {
    let a3 = i3.wireframe === true, o3 = r3[t3.id];
    o3 === void 0 && (o3 = {}, r3[t3.id] = o3);
    let s3 = e22.isInstancedMesh === true ? e22.id : 0, l3 = o3[s3];
    l3 === void 0 && (l3 = {}, o3[s3] = l3);
    let u3 = l3[n3.id];
    u3 === void 0 && (u3 = {}, l3[n3.id] = u3);
    let d3 = u3[a3];
    return d3 === void 0 && (d3 = f2(c2()), u3[a3] = d3), d3;
  }
  function f2(e22) {
    let t3 = [], r4 = [], i3 = [];
    for (let e23 = 0; e23 < n2; e23++) t3[e23] = 0, r4[e23] = 0, i3[e23] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: false,
      newAttributes: t3,
      enabledAttributes: r4,
      attributeDivisors: i3,
      object: e22,
      attributes: {},
      index: null
    };
  }
  function p2(e22, t3, n3, r4) {
    let i3 = a2.attributes, o3 = t3.attributes, s3 = 0, c3 = n3.getAttributes();
    for (let t4 in c3) if (c3[t4].location >= 0) {
      let n4 = i3[t4], r5 = o3[t4];
      if (r5 === void 0 && (t4 === `instanceMatrix` && e22.instanceMatrix && (r5 = e22.instanceMatrix), t4 === `instanceColor` && e22.instanceColor && (r5 = e22.instanceColor)), n4 === void 0 || n4.attribute !== r5 || r5 && n4.data !== r5.data) return true;
      s3++;
    }
    return a2.attributesNum !== s3 || a2.index !== r4;
  }
  function m2(e22, t3, n3, r4) {
    let i3 = {}, o3 = t3.attributes, s3 = 0, c3 = n3.getAttributes();
    for (let t4 in c3) if (c3[t4].location >= 0) {
      let n4 = o3[t4];
      n4 === void 0 && (t4 === `instanceMatrix` && e22.instanceMatrix && (n4 = e22.instanceMatrix), t4 === `instanceColor` && e22.instanceColor && (n4 = e22.instanceColor));
      let r5 = {};
      r5.attribute = n4, n4 && n4.data && (r5.data = n4.data), i3[t4] = r5, s3++;
    }
    a2.attributes = i3, a2.attributesNum = s3, a2.index = r4;
  }
  function h2() {
    let e22 = a2.newAttributes;
    for (let t3 = 0, n3 = e22.length; t3 < n3; t3++) e22[t3] = 0;
  }
  function g2(e22) {
    _2(e22, 0);
  }
  function _2(t3, n3) {
    let r4 = a2.newAttributes, i3 = a2.enabledAttributes, o3 = a2.attributeDivisors;
    r4[t3] = 1, i3[t3] === 0 && (e21.enableVertexAttribArray(t3), i3[t3] = 1), o3[t3] !== n3 && (e21.vertexAttribDivisor(t3, n3), o3[t3] = n3);
  }
  function v2() {
    let t3 = a2.newAttributes, n3 = a2.enabledAttributes;
    for (let r4 = 0, i3 = n3.length; r4 < i3; r4++) n3[r4] !== t3[r4] && (e21.disableVertexAttribArray(r4), n3[r4] = 0);
  }
  function y2(t3, n3, r4, i3, a3, o3, s3) {
    s3 === true ? e21.vertexAttribIPointer(t3, n3, r4, a3, o3) : e21.vertexAttribPointer(t3, n3, r4, i3, a3, o3);
  }
  function b2(n3, r4, i3, a3) {
    h2();
    let o3 = a3.attributes, s3 = i3.getAttributes(), c3 = r4.defaultAttributeValues;
    for (let r5 in s3) {
      let i4 = s3[r5];
      if (i4.location >= 0) {
        let s4 = o3[r5];
        if (s4 === void 0 && (r5 === `instanceMatrix` && n3.instanceMatrix && (s4 = n3.instanceMatrix), r5 === `instanceColor` && n3.instanceColor && (s4 = n3.instanceColor)), s4 !== void 0) {
          let r6 = s4.normalized, o4 = s4.itemSize, c4 = t2.get(s4);
          if (c4 === void 0) continue;
          let l3 = c4.buffer, u3 = c4.type, d3 = c4.bytesPerElement, f3 = u3 === e21.INT || u3 === e21.UNSIGNED_INT || s4.gpuType === 1013;
          if (s4.isInterleavedBufferAttribute) {
            let t3 = s4.data, c5 = t3.isInterleavedBuffer === true ? t3.stride : t3.itemSize, p3 = s4.offset;
            if (t3.isInstancedInterleavedBuffer || t3.isInstancedBufferAttribute) {
              for (let e22 = 0; e22 < i4.locationSize; e22++) _2(i4.location + e22, t3.meshPerAttribute);
              n3.isInstancedMesh !== true && a3._maxInstanceCount === void 0 && (a3._maxInstanceCount = t3.meshPerAttribute * t3.count);
            } else for (let e22 = 0; e22 < i4.locationSize; e22++) g2(i4.location + e22);
            e21.bindBuffer(e21.ARRAY_BUFFER, l3);
            for (let e22 = 0; e22 < i4.locationSize; e22++) y2(i4.location + e22, o4 / i4.locationSize, u3, r6, c5 * d3, (p3 + o4 / i4.locationSize * e22) * d3, f3);
          } else {
            if (s4.isInstancedBufferAttribute) {
              for (let e22 = 0; e22 < i4.locationSize; e22++) _2(i4.location + e22, s4.meshPerAttribute);
              n3.isInstancedMesh !== true && a3._maxInstanceCount === void 0 && (a3._maxInstanceCount = s4.meshPerAttribute * s4.count);
            } else for (let e22 = 0; e22 < i4.locationSize; e22++) g2(i4.location + e22);
            e21.bindBuffer(e21.ARRAY_BUFFER, l3);
            for (let e22 = 0; e22 < i4.locationSize; e22++) y2(i4.location + e22, o4 / i4.locationSize, u3, r6, o4 * d3, o4 / i4.locationSize * e22 * d3, f3);
          }
        } else if (c3 !== void 0) {
          let t3 = c3[r5];
          if (t3 !== void 0) switch (t3.length) {
            case 2:
              e21.vertexAttrib2fv(i4.location, t3);
              break;
            case 3:
              e21.vertexAttrib3fv(i4.location, t3);
              break;
            case 4:
              e21.vertexAttrib4fv(i4.location, t3);
              break;
            default:
              e21.vertexAttrib1fv(i4.location, t3);
          }
        }
      }
    }
    v2();
  }
  function x2() {
    T2();
    for (let e22 in r3) {
      let t3 = r3[e22];
      for (let e23 in t3) {
        let n3 = t3[e23];
        for (let e24 in n3) {
          let t4 = n3[e24];
          for (let e25 in t4) u2(t4[e25].object), delete t4[e25];
          delete n3[e24];
        }
      }
      delete r3[e22];
    }
  }
  function S2(e22) {
    if (r3[e22.id] === void 0) return;
    let t3 = r3[e22.id];
    for (let e23 in t3) {
      let n3 = t3[e23];
      for (let e24 in n3) {
        let t4 = n3[e24];
        for (let e25 in t4) u2(t4[e25].object), delete t4[e25];
        delete n3[e24];
      }
    }
    delete r3[e22.id];
  }
  function C2(e22) {
    for (let t3 in r3) {
      let n3 = r3[t3];
      for (let t4 in n3) {
        let r4 = n3[t4];
        if (r4[e22.id] === void 0) continue;
        let i3 = r4[e22.id];
        for (let e23 in i3) u2(i3[e23].object), delete i3[e23];
        delete r4[e22.id];
      }
    }
  }
  function w2(e22) {
    for (let t3 in r3) {
      let n3 = r3[t3], i3 = e22.isInstancedMesh === true ? e22.id : 0, a3 = n3[i3];
      if (a3 !== void 0) {
        for (let e23 in a3) {
          let t4 = a3[e23];
          for (let e24 in t4) u2(t4[e24].object), delete t4[e24];
          delete a3[e23];
        }
        delete n3[i3], Object.keys(n3).length === 0 && delete r3[t3];
      }
    }
  }
  function T2() {
    E2(), o2 = true, a2 !== i2 && (a2 = i2, l2(a2.object));
  }
  function E2() {
    i2.geometry = null, i2.program = null, i2.wireframe = false;
  }
  return {
    setup: s2,
    reset: T2,
    resetDefaultState: E2,
    dispose: x2,
    releaseStatesOfGeometry: S2,
    releaseStatesOfObject: w2,
    releaseStatesOfProgram: C2,
    initAttributes: h2,
    enableAttribute: g2,
    disableUnusedAttributes: v2
  };
}
function os(e21, t2, n2) {
  let r3;
  function i2(e22) {
    r3 = e22;
  }
  function a2(t3, i3) {
    e21.drawArrays(r3, t3, i3), n2.update(i3, r3, 1);
  }
  function o2(t3, i3, a3) {
    a3 !== 0 && (e21.drawArraysInstanced(r3, t3, i3, a3), n2.update(i3, r3, a3));
  }
  function s2(e22, i3, a3) {
    if (a3 === 0) return;
    t2.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r3, e22, 0, i3, 0, a3);
    let o3 = 0;
    for (let e23 = 0; e23 < a3; e23++) o3 += i3[e23];
    n2.update(o3, r3, 1);
  }
  this.setMode = i2, this.render = a2, this.renderInstances = o2, this.renderMultiDraw = s2;
}
function ss(e21, t2, n2, r3) {
  let i2;
  function a2() {
    if (i2 !== void 0) return i2;
    if (t2.has(`EXT_texture_filter_anisotropic`) === true) {
      let n3 = t2.get(`EXT_texture_filter_anisotropic`);
      i2 = e21.getParameter(n3.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i2 = 0;
    return i2;
  }
  function o2(t3) {
    return t3 === 1023 || r3.convert(t3) === e21.getParameter(e21.IMPLEMENTATION_COLOR_READ_FORMAT);
  }
  function s2(n3) {
    let i3 = n3 === 1016 && (t2.has(`EXT_color_buffer_half_float`) || t2.has(`EXT_color_buffer_float`));
    return !(n3 !== 1009 && n3 !== 1015 && !i3 && r3.convert(n3) !== e21.getParameter(e21.IMPLEMENTATION_COLOR_READ_TYPE));
  }
  function c2(t3) {
    if (t3 === `highp`) {
      if (e21.getShaderPrecisionFormat(e21.VERTEX_SHADER, e21.HIGH_FLOAT).precision > 0 && e21.getShaderPrecisionFormat(e21.FRAGMENT_SHADER, e21.HIGH_FLOAT).precision > 0) return `highp`;
      t3 = `mediump`;
    }
    return t3 === `mediump` && e21.getShaderPrecisionFormat(e21.VERTEX_SHADER, e21.MEDIUM_FLOAT).precision > 0 && e21.getShaderPrecisionFormat(e21.FRAGMENT_SHADER, e21.MEDIUM_FLOAT).precision > 0 ? `mediump` : `lowp`;
  }
  let l2 = n2.precision === void 0 ? `highp` : n2.precision, u2 = c2(l2);
  u2 !== l2 && (z(`WebGLRenderer:`, l2, `not supported, using`, u2, `instead.`), l2 = u2);
  let d2 = n2.reversedDepthBuffer === true && t2.has(`EXT_clip_control`), f2 = n2.logarithmicDepthBuffer === true && d2 === false;
  n2.reversedDepthBuffer === true && d2 === false && z(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`), n2.logarithmicDepthBuffer === true && d2 === true && z(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);
  let p2 = e21.getParameter(e21.MAX_TEXTURE_IMAGE_UNITS), m2 = e21.getParameter(e21.MAX_VERTEX_TEXTURE_IMAGE_UNITS), h2 = e21.getParameter(e21.MAX_TEXTURE_SIZE), g2 = e21.getParameter(e21.MAX_CUBE_MAP_TEXTURE_SIZE), _2 = e21.getParameter(e21.MAX_VERTEX_ATTRIBS), v2 = e21.getParameter(e21.MAX_VERTEX_UNIFORM_VECTORS), y2 = e21.getParameter(e21.MAX_VARYING_VECTORS), b2 = e21.getParameter(e21.MAX_FRAGMENT_UNIFORM_VECTORS), x2 = e21.getParameter(e21.MAX_SAMPLES), S2 = e21.getParameter(e21.SAMPLES);
  return {
    isWebGL2: true,
    getMaxAnisotropy: a2,
    getMaxPrecision: c2,
    textureFormatReadable: o2,
    textureTypeReadable: s2,
    precision: l2,
    logarithmicDepthBuffer: f2,
    reversedDepthBuffer: d2,
    maxTextures: p2,
    maxVertexTextures: m2,
    maxTextureSize: h2,
    maxCubemapSize: g2,
    maxAttributes: _2,
    maxVertexUniforms: v2,
    maxVaryings: y2,
    maxFragmentUniforms: b2,
    maxSamples: x2,
    samples: S2
  };
}
function cs(e21) {
  let t2 = this, n2 = null, r3 = 0, i2 = false, a2 = false, o2 = new vr(), s2 = new W(), c2 = {
    value: null,
    needsUpdate: false
  };
  this.uniform = c2, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e22, t3) {
    let n3 = e22.length !== 0 || t3 || r3 !== 0 || i2;
    return i2 = t3, r3 = e22.length, n3;
  }, this.beginShadows = function() {
    a2 = true, u2(null);
  }, this.endShadows = function() {
    a2 = false;
  }, this.setGlobalState = function(e22, t3) {
    n2 = u2(e22, t3, 0);
  }, this.setState = function(t3, o3, s3) {
    let d2 = t3.clippingPlanes, f2 = t3.clipIntersection, p2 = t3.clipShadows, m2 = e21.get(t3);
    if (!i2 || d2 === null || d2.length === 0 || a2 && !p2) a2 ? u2(null) : l2();
    else {
      let e22 = a2 ? 0 : r3, t4 = e22 * 4, i3 = m2.clippingState || null;
      c2.value = i3, i3 = u2(d2, o3, t4, s3);
      for (let e23 = 0; e23 !== t4; ++e23) i3[e23] = n2[e23];
      m2.clippingState = i3, this.numIntersection = f2 ? this.numPlanes : 0, this.numPlanes += e22;
    }
  };
  function l2() {
    c2.value !== n2 && (c2.value = n2, c2.needsUpdate = r3 > 0), t2.numPlanes = r3, t2.numIntersection = 0;
  }
  function u2(e22, n3, r4, i3) {
    let a3 = e22 === null ? 0 : e22.length, l3 = null;
    if (a3 !== 0) {
      if (l3 = c2.value, i3 !== true || l3 === null) {
        let t3 = r4 + a3 * 4, i4 = n3.matrixWorldInverse;
        s2.getNormalMatrix(i4), (l3 === null || l3.length < t3) && (l3 = new Float32Array(t3));
        for (let t4 = 0, n4 = r4; t4 !== a3; ++t4, n4 += 4) o2.copy(e22[t4]).applyMatrix4(i4, s2), o2.normal.toArray(l3, n4), l3[n4 + 3] = o2.constant;
      }
      c2.value = l3, c2.needsUpdate = true;
    }
    return t2.numPlanes = a3, t2.numIntersection = 0, l3;
  }
}
var ls = class extends At {
  constructor(e21 = 1, t2 = {}) {
    super(e21, e21, t2), this.isWebGLCubeRenderTarget = true;
    let n2 = {
      width: e21,
      height: e21,
      depth: 1
    }, r3 = [n2, n2, n2, n2, n2, n2];
    this.texture = new ui(r3), this._setTextureOptions(t2), this.texture.isRenderTargetTexture = true;
  }
  fromEquirectangularTexture(e21, t2) {
    this.texture.type = t2.type, this.texture.colorSpace = t2.colorSpace, this.texture.generateMipmaps = t2.generateMipmaps, this.texture.minFilter = t2.minFilter, this.texture.magFilter = t2.magFilter;
    let n2 = {
      uniforms: {
        tEquirect: {
          value: null
        }
      },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    }, r3 = new hi(5, 5, 5), i2 = new Ga({
      name: `CubemapFromEquirect`,
      uniforms: La(n2.uniforms),
      vertexShader: n2.vertexShader,
      fragmentShader: n2.fragmentShader,
      side: 1,
      blending: 0
    });
    i2.uniforms.tEquirect.value = t2;
    let a2 = new ei(r3, i2), s2 = t2.minFilter;
    return t2.minFilter === 1008 && (t2.minFilter = o), new Io(1, 10, this).update(e21, a2), t2.minFilter = s2, a2.geometry.dispose(), a2.material.dispose(), this;
  }
  clear(e21, t2 = true, n2 = true, r3 = true) {
    let i2 = e21.getRenderTarget();
    for (let i3 = 0; i3 < 6; i3++) e21.setRenderTarget(this, i3), e21.clear(t2, n2, r3);
    e21.setRenderTarget(i2);
  }
};
var us = 256;
var ds = 3;
var fs = 20;
var ps = 256;
var ms = 16;
var hs = 3;
var gs = new U();
var _s = new K();
var vs = class e18 {
  constructor(e21) {
    this._renderer = e21, this._cubeSize = 0, this._sourceTarget = null, this._cubeCamera = new Io(1, 10, null), this._boxMesh = new ei(new hi(5, 5, 5), null), this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null, this._integrationMaterial = null;
  }
  fromScene(e21, t2 = 0, n2 = 0.1, r3 = 100, i2 = {}) {
    let {
      size: a2 = 256,
      position: o2 = gs
    } = i2, s2 = this._renderer;
    this._setSize(a2);
    let c2 = this._allocateTarget(), l2 = this._getSourceTarget(true);
    t2 > 0 && (l2.texture.mipmapsAutoUpdate = false);
    let u2 = s2.autoClear, d2 = s2.autoClearColor, f2 = s2.autoClearDepth, p2 = s2.autoClearStencil, m2 = e21.background;
    s2.autoClear = true, s2.autoClearColor = true, s2.autoClearDepth = true, s2.autoClearStencil = true, m2 === null && (e21.background = s2.getClearColor(_s));
    let h2 = new Io(n2, r3, l2);
    return h2.position.copy(o2), h2.update(s2, e21), s2.autoClear = u2, s2.autoClearColor = d2, s2.autoClearDepth = f2, s2.autoClearStencil = p2, e21.background = m2, t2 > 0 && (l2.texture.mipmapsAutoUpdate = true, this._blur(c2, t2)), this._applyPMREM(c2), c2;
  }
  fromEquirectangular(e21, t2 = null) {
    return this._fromTexture(e21, t2);
  }
  fromCubemap(e21, t2 = null) {
    return this._fromTexture(e21, t2);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Ts(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = ws(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._sourceTarget !== null && this._sourceTarget.dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._integrationMaterial !== null && this._integrationMaterial.dispose(), this._boxMesh.geometry.dispose();
  }
  static lodToRoughness(e21, t2) {
    return t2 > 0 ? 1 - Math.sqrt(1 - e21 / t2) : 0;
  }
  _setSize(e21) {
    this._cubeSize = Math.max(us, st(e21));
  }
  _fromTexture(e21, t2) {
    e21.mapping === 301 || e21.mapping === 302 ? this._setSize(e21.image.length === 0 ? us : e21.image[0].width || e21.image[0].image.width) : this._setSize(e21.image.width / 4);
    let n2 = t2 || this._allocateTarget();
    return this._textureToCubemap(e21), this._applyPMREM(n2), n2;
  }
  _allocateTarget() {
    let e21 = this._cubeSize, t2 = ys(e21, false, false), n2 = Math.log2(e21) - ds;
    for (let r3 = 0; r3 <= n2; r3++) t2.texture.mipmaps.push({
      width: e21 >> r3,
      height: e21 >> r3
    });
    return t2.texture.name = `PMREM`, t2.texture.isPMREMTexture = true, t2;
  }
  _getSourceTarget(e21 = false) {
    let t2 = this._cubeSize, n2 = this._sourceTarget;
    return (n2 === null || n2.width !== t2 || e21 && n2.depthBuffer === false) && (n2 !== null && n2.dispose(), this._sourceTarget = ys(t2, true, e21)), this._sourceTarget;
  }
  _compileMaterial(e21) {
    this._boxMesh.material = e21, this._renderer.compile(this._boxMesh, this._cubeCamera.children[0]);
  }
  _renderCube(e21, t2, n2) {
    let r3 = this._boxMesh, i2 = this._cubeCamera;
    r3.material = n2, i2.renderTarget = e21, i2.activeMipmapLevel = t2;
    let a2 = e21.width >> t2;
    e21.viewport.set(0, 0, a2, a2), i2.update(this._renderer, r3), e21.viewport.set(0, 0, e21.width, e21.height);
  }
  _textureToCubemap(e21) {
    let t2;
    e21.mapping === 301 || e21.mapping === 302 ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ts()), t2 = this._cubemapMaterial, t2.uniforms.flipEnvMap.value = e21.isRenderTargetTexture === false ? -1 : 1) : (this._equirectMaterial === null && (this._equirectMaterial = ws()), t2 = this._equirectMaterial), t2.uniforms.envMap.value = e21, this._renderCube(this._getSourceTarget(), 0, t2);
  }
  _applyPMREM(t2) {
    this._ggxMaterial === null && (this._ggxMaterial = xs(), this._integrationMaterial = Ss());
    let n2 = this._cubeSize, r3 = t2.texture.mipmaps.length - 1, i2 = this._ggxMaterial.uniforms;
    i2.envMap.value = this._sourceTarget.texture;
    let a2 = this._integrationMaterial.uniforms;
    a2.envMap.value = this._sourceTarget.texture, a2.sourceLod.value = Math.log2(n2 / ms);
    for (let o2 = 0; o2 <= r3; o2++) {
      let s2 = e18.lodToRoughness(o2, r3);
      if (o2 > r3 - hs) a2.roughness.value = s2, this._renderCube(t2, o2, this._integrationMaterial);
      else {
        let e21 = s2 > 0 ? Math.log2(n2) + 0.5 * Math.log2(6 / (ps * s2 ** 4)) + 0.5 : 0;
        i2.roughness.value = s2, i2.lodBias.value = e21, this._renderCube(t2, o2, this._ggxMaterial);
      }
    }
  }
  _blur(e21, t2) {
    this._blurMaterial === null && (this._blurMaterial = Cs());
    let n2 = this._blurMaterial, r3 = n2.uniforms, i2 = this._sourceTarget;
    r3.sigma.value = Math.min(t2, Math.PI) / Math.SQRT2, r3.envMap.value = i2.texture, this._renderCube(e21, 0, n2), r3.envMap.value = e21.texture, this._renderCube(i2, 0, n2);
  }
};
function ys(e21, t2, n2) {
  return new ls(e21, {
    minFilter: c,
    generateMipmaps: t2,
    type: g,
    colorSpace: L,
    depthBuffer: n2
  });
}
function bs(e21, t2, n2) {
  return new Ga({
    name: e21,
    uniforms: t2,
    vertexShader: q.cube_vert,
    fragmentShader: n2,
    side: 1,
    blending: 0,
    depthTest: false,
    depthWrite: false
  });
}
function xs() {
  return bs(`PMREMGGXConvolution`, {
    envMap: {
      value: null
    },
    roughness: {
      value: 0
    },
    lodBias: {
      value: 0
    }
  }, `

		#define GGX_SAMPLES ${ps}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`);
}
function Ss() {
  return bs(`PMREMGGXIntegration`, {
    envMap: {
      value: null
    },
    roughness: {
      value: 0
    },
    sourceLod: {
      value: 0
    },
    sourceSize: {
      value: ms
    }
  }, `

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`);
}
function Cs() {
  return bs(`PMREMSphericalGaussianBlur`, {
    envMap: {
      value: null
    },
    sigma: {
      value: 0
    }
  }, `

		#define SAMPLES ${fs}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`);
}
function ws() {
  return bs(`PMREMEquirectangularToCubemap`, {
    envMap: {
      value: null
    }
  }, `

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`);
}
function Ts() {
  return bs(`PMREMCubemapToCubemap`, {
    envMap: {
      value: null
    },
    flipEnvMap: {
      value: -1
    }
  }, `

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`);
}
function Es(e21) {
  let t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap(), r3 = null;
  function i2(e22, t3 = false) {
    return e22 == null ? null : t3 ? o2(e22) : a2(e22);
  }
  function a2(n3) {
    if (n3 && n3.isTexture) {
      let r4 = n3.mapping;
      if (r4 === 303 || r4 === 304) {
        if (t2.has(n3)) {
          let e22 = t2.get(n3).texture;
          return s2(e22, n3.mapping);
        }
        {
          let r5 = n3.image;
          if (r5 && r5.height > 0) {
            let i3 = new ls(r5.height);
            return i3.fromEquirectangularTexture(e21, n3), t2.set(n3, i3), n3.addEventListener(`dispose`, l2), s2(i3.texture, n3.mapping);
          }
          return null;
        }
      }
    }
    return n3;
  }
  function o2(t3) {
    if (t3 && t3.isTexture && t3.isPMREMTexture !== true) {
      let i3 = t3.mapping, a3 = i3 === 303 || i3 === 304, o3 = i3 === 301 || i3 === 302;
      if (a3 || o3) {
        let i4 = n2.get(t3), s3 = i4 === void 0 ? 0 : i4.texture.pmremVersion;
        if (t3.isRenderTargetTexture && t3.pmremVersion !== s3) return r3 === null && (r3 = new vs(e21)), i4 = a3 ? r3.fromEquirectangular(t3, i4) : r3.fromCubemap(t3, i4), i4.texture.pmremVersion = t3.pmremVersion, n2.set(t3, i4), i4.texture;
        if (i4 !== void 0) return i4.texture;
        {
          let s4 = t3.image;
          return a3 && s4 && s4.height > 0 || o3 && s4 && c2(s4) ? (r3 === null && (r3 = new vs(e21)), i4 = a3 ? r3.fromEquirectangular(t3) : r3.fromCubemap(t3), i4.texture.pmremVersion = t3.pmremVersion, n2.set(t3, i4), t3.addEventListener(`dispose`, u2), i4.texture) : null;
        }
      }
    }
    return t3;
  }
  function s2(e22, t3) {
    return t3 === 303 ? e22.mapping = 301 : t3 === 304 && (e22.mapping = 302), e22;
  }
  function c2(e22) {
    let t3 = 0;
    for (let n3 = 0; n3 < 6; n3++) e22[n3] !== void 0 && t3++;
    return t3 === 6;
  }
  function l2(e22) {
    let n3 = e22.target;
    n3.removeEventListener(`dispose`, l2);
    let r4 = t2.get(n3);
    r4 !== void 0 && (t2.delete(n3), r4.dispose());
  }
  function u2(e22) {
    let t3 = e22.target;
    t3.removeEventListener(`dispose`, u2);
    let r4 = n2.get(t3);
    r4 !== void 0 && (n2.delete(t3), r4.dispose());
  }
  function d2() {
    t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap(), r3 !== null && (r3.dispose(), r3 = null);
  }
  return {
    get: i2,
    dispose: d2
  };
}
function Ds(e21) {
  let t2 = {};
  function n2(n3) {
    if (t2[n3] !== void 0) return t2[n3];
    let r3 = e21.getExtension(n3);
    return t2[n3] = r3, r3;
  }
  return {
    has: function(e22) {
      return n2(e22) !== null;
    },
    init: function() {
      n2(`EXT_color_buffer_float`), n2(`WEBGL_clip_cull_distance`), n2(`OES_texture_float_linear`), n2(`EXT_color_buffer_half_float`), n2(`WEBGL_multisampled_render_to_texture`), n2(`WEBGL_render_shared_exponent`);
    },
    get: function(e22) {
      let t3 = n2(e22);
      return t3 === null && Ze(`WebGLRenderer: ` + e22 + ` extension not supported.`), t3;
    }
  };
}
function Os(e21, t2, n2, r3) {
  let i2 = {}, a2 = /* @__PURE__ */ new WeakMap(), o2 = new FinalizationRegistry((e22) => delete i2[e22]);
  function s2(e22) {
    c2(e22.target);
  }
  function c2(e22) {
    e22.index !== null && t2.remove(e22.index);
    for (let n3 in e22.attributes) t2.remove(e22.attributes[n3]);
    e22.removeEventListener(`dispose`, s2), delete i2[e22.id], o2.unregister(e22);
    let c3 = a2.get(e22);
    c3 && (t2.remove(c3), a2.delete(e22)), r3.releaseStatesOfGeometry(e22), e22.isInstancedBufferGeometry === true && delete e22._maxInstanceCount, n2.memory.geometries--;
  }
  function l2(e22, t3) {
    return i2[t3.id] === void 0 && (t3.addEventListener(`dispose`, s2), i2[t3.id] = new WeakRef(t3), o2.register(t3, t3.id, t3), n2.memory.geometries++), t3;
  }
  function u2(n3) {
    let r4 = n3.attributes;
    for (let n4 in r4) t2.update(r4[n4], e21.ARRAY_BUFFER);
  }
  function d2(e22) {
    let n3 = e22.index, r4 = e22.attributes.position, i3 = 0;
    if (r4 === void 0) return;
    let o3 = n3 === null ? r4.array.length / 3 - 1 : n3.array.length, s3 = new (r4.count >= 65535 ? Zn : Xn)(Math.ceil(o3 / 3) * 6, 1), c3 = s3.array;
    if (n3 !== null) {
      let e23 = n3.array;
      i3 = n3.version;
      for (let t3 = 0, n4 = 0; t3 < o3; t3 += 3) {
        let r5 = e23[t3 + 0], i4 = e23[t3 + 1], a3 = e23[t3 + 2];
        c3[n4++] = r5, c3[n4++] = i4, c3[n4++] = i4, c3[n4++] = a3, c3[n4++] = a3, c3[n4++] = r5;
      }
    } else {
      i3 = r4.version;
      for (let e23 = 0, t3 = 0; e23 < o3; e23 += 3) {
        let n4 = e23 + 0, r5 = e23 + 1, i4 = e23 + 2;
        c3[t3++] = n4, c3[t3++] = r5, c3[t3++] = r5, c3[t3++] = i4, c3[t3++] = i4, c3[t3++] = n4;
      }
    }
    s3.version = i3;
    let l3 = a2.get(e22);
    l3 && t2.remove(l3), a2.set(e22, s3);
  }
  function f2(e22) {
    let t3 = a2.get(e22);
    if (t3) {
      let n3 = e22.index;
      n3 !== null && t3.version < n3.version && d2(e22);
    } else d2(e22);
    return a2.get(e22);
  }
  function p2() {
    for (let e22 in i2) {
      let t3 = i2[e22].deref();
      t3 !== void 0 && c2(t3);
    }
  }
  return {
    get: l2,
    update: u2,
    getWireframeAttribute: f2,
    dispose: p2
  };
}
function ks(e21, t2, n2) {
  let r3;
  function i2(e22) {
    r3 = e22;
  }
  let a2, o2;
  function s2(e22) {
    a2 = e22.type, o2 = e22.bytesPerElement;
  }
  function c2(t3, i3) {
    e21.drawElements(r3, i3, a2, t3 * o2), n2.update(i3, r3, 1);
  }
  function l2(t3, i3, s3) {
    s3 !== 0 && (e21.drawElementsInstanced(r3, i3, a2, t3 * o2, s3), n2.update(i3, r3, s3));
  }
  function u2(e22, i3, o3) {
    if (o3 === 0) return;
    t2.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r3, i3, 0, a2, e22, 0, o3);
    let s3 = 0;
    for (let e23 = 0; e23 < o3; e23++) s3 += i3[e23];
    n2.update(s3, r3, 1);
  }
  this.setMode = i2, this.setIndex = s2, this.render = c2, this.renderInstances = l2, this.renderMultiDraw = u2;
}
function As(e21) {
  let t2 = {
    geometries: 0,
    textures: 0
  }, n2 = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function r3(t3, r4, i3) {
    switch (n2.calls++, r4) {
      case e21.TRIANGLES:
        n2.triangles += t3 / 3 * i3;
        break;
      case e21.LINES:
        n2.lines += t3 / 2 * i3;
        break;
      case e21.LINE_STRIP:
        n2.lines += i3 * (t3 - 1);
        break;
      case e21.LINE_LOOP:
        n2.lines += i3 * t3;
        break;
      case e21.POINTS:
        n2.points += i3 * t3;
        break;
      default:
        B(`WebGLInfo: Unknown draw mode:`, r4);
    }
  }
  function i2() {
    n2.calls = 0, n2.triangles = 0, n2.points = 0, n2.lines = 0;
  }
  return {
    memory: t2,
    render: n2,
    programs: null,
    autoReset: true,
    reset: i2,
    update: r3
  };
}
function js(e21, t2, n2) {
  let r3 = /* @__PURE__ */ new WeakMap(), i2 = new Ot();
  function a2(a3, o2, s2) {
    let c2 = a3.morphTargetInfluences, l2 = o2.morphAttributes.position || o2.morphAttributes.normal || o2.morphAttributes.color, u2 = l2 === void 0 ? 0 : l2.length, d2 = r3.get(o2);
    if (d2 === void 0 || d2.count !== u2) {
      let y2 = function() {
        _2.dispose(), r3.delete(o2), o2.removeEventListener(`dispose`, y2);
      };
      d2 !== void 0 && d2.texture.dispose();
      let e22 = o2.morphAttributes.position !== void 0, n3 = o2.morphAttributes.normal !== void 0, a4 = o2.morphAttributes.color !== void 0, s3 = o2.morphAttributes.position || [], c3 = o2.morphAttributes.normal || [], l3 = o2.morphAttributes.color || [], f2 = 0;
      e22 === true && (f2 = 1), n3 === true && (f2 = 2), a4 === true && (f2 = 3);
      let p2 = o2.attributes.position.count * f2, m2 = 1;
      p2 > t2.maxTextureSize && (m2 = Math.ceil(p2 / t2.maxTextureSize), p2 = t2.maxTextureSize);
      let g2 = new Float32Array(p2 * m2 * 4 * u2), _2 = new jt(g2, p2, m2, u2);
      _2.type = h, _2.needsUpdate = true;
      let v2 = f2 * 4;
      for (let t3 = 0; t3 < u2; t3++) {
        let r4 = s3[t3], o3 = c3[t3], u3 = l3[t3], d3 = p2 * m2 * 4 * t3;
        for (let t4 = 0; t4 < r4.count; t4++) {
          let s4 = t4 * v2;
          e22 === true && (i2.fromBufferAttribute(r4, t4), g2[d3 + s4 + 0] = i2.x, g2[d3 + s4 + 1] = i2.y, g2[d3 + s4 + 2] = i2.z, g2[d3 + s4 + 3] = 0), n3 === true && (i2.fromBufferAttribute(o3, t4), g2[d3 + s4 + 4] = i2.x, g2[d3 + s4 + 5] = i2.y, g2[d3 + s4 + 6] = i2.z, g2[d3 + s4 + 7] = 0), a4 === true && (i2.fromBufferAttribute(u3, t4), g2[d3 + s4 + 8] = i2.x, g2[d3 + s4 + 9] = i2.y, g2[d3 + s4 + 10] = i2.z, g2[d3 + s4 + 11] = u3.itemSize === 4 ? i2.w : 1);
        }
      }
      d2 = {
        count: u2,
        texture: _2,
        size: new H(p2, m2)
      }, r3.set(o2, d2);
      o2.addEventListener(`dispose`, y2);
    }
    if (a3.isInstancedMesh === true && a3.morphTexture !== null) s2.getUniforms().setValue(e21, `morphTexture`, a3.morphTexture, n2);
    else {
      let t3 = 0;
      for (let e22 = 0; e22 < c2.length; e22++) t3 += c2[e22];
      let n3 = o2.morphTargetsRelative ? 1 : 1 - t3;
      s2.getUniforms().setValue(e21, `morphTargetBaseInfluence`, n3), s2.getUniforms().setValue(e21, `morphTargetInfluences`, c2);
    }
    s2.getUniforms().setValue(e21, `morphTargetsTexture`, d2.texture, n2), s2.getUniforms().setValue(e21, `morphTargetsTextureSize`, d2.size);
  }
  return {
    update: a2
  };
}
function Ms(e21, t2, n2, r3, i2) {
  let a2 = /* @__PURE__ */ new WeakMap();
  function o2(r4) {
    let o3 = i2.render.frame, s3 = r4.geometry, l2 = t2.get(r4, s3);
    if (a2.get(l2) !== o3 && (t2.update(l2), a2.set(l2, o3)), r4.isInstancedMesh && (r4.hasEventListener(`dispose`, c2) === false && r4.addEventListener(`dispose`, c2), a2.get(r4) !== o3 && (n2.update(r4.instanceMatrix, e21.ARRAY_BUFFER), r4.instanceColor !== null && n2.update(r4.instanceColor, e21.ARRAY_BUFFER), a2.set(r4, o3))), r4.isSkinnedMesh) {
      let e22 = r4.skeleton;
      a2.get(e22) !== o3 && (e22.update(), a2.set(e22, o3));
    }
    return l2;
  }
  function s2() {
    a2 = /* @__PURE__ */ new WeakMap();
  }
  function c2(e22) {
    let t3 = e22.target;
    t3.removeEventListener(`dispose`, c2), r3.releaseStatesOfObject(t3), n2.remove(t3.instanceMatrix), t3.instanceColor !== null && n2.remove(t3.instanceColor);
  }
  return {
    update: o2,
    dispose: s2
  };
}
var Ns = {
  1: `LINEAR_TONE_MAPPING`,
  2: `REINHARD_TONE_MAPPING`,
  3: `CINEON_TONE_MAPPING`,
  4: `ACES_FILMIC_TONE_MAPPING`,
  6: `AGX_TONE_MAPPING`,
  7: `NEUTRAL_TONE_MAPPING`,
  5: `CUSTOM_TONE_MAPPING`
};
function Ps(e21, t2, n2, r3, i2, a2) {
  let o2 = new At(t2, n2, {
    type: e21,
    depthBuffer: i2,
    stencilBuffer: a2,
    samples: r3 ? 4 : 0,
    storeMultisampledDepthBuffer: false,
    storeMultisampledStencilBuffer: false,
    resolveDepthBuffer: false,
    resolveStencilBuffer: false
  }), s2 = null, c2 = null, l2 = null, u2 = new ur();
  u2.setAttribute(`position`, new Qn([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), u2.setAttribute(`uv`, new Qn([0, 2, 0, 0, 2, 0], 2));
  let d2 = new Ka({
    uniforms: {
      tDiffuse: {
        value: null
      }
    },
    vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
    fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,
    depthTest: false,
    depthWrite: false
  }), f2 = new ei(u2, d2), p2 = new jo(-1, 1, 1, -1, 0, 1), m2 = null, h2 = null, _2 = false, v2, b2 = null, x2 = [], S2 = false;
  this.setSize = function(e22, t3) {
    o2.setSize(e22, t3), s2 !== null && s2.setSize(e22, t3), c2 !== null && c2.setSize(e22, t3);
    for (let n3 = 0; n3 < x2.length; n3++) {
      let r4 = x2[n3];
      r4.setSize && r4.setSize(e22, t3);
    }
  }, this.setEffects = function(e22) {
    x2 = e22, S2 = x2.length > 0 && x2[0].isRenderPass === true;
    let t3 = o2.width, n3 = o2.height;
    x2.length > 0 && s2 === null && (s2 = new At(t3, n3, {
      type: g,
      depthBuffer: false,
      stencilBuffer: false
    }), c2 = new At(t3, n3, {
      type: g,
      depthBuffer: false,
      stencilBuffer: false
    }));
    let r4 = i2 === true && x2.some((e23) => e23.needsDepthTexture === true);
    r4 !== (o2.depthTexture !== null) && (r4 === true && l2 === null && (l2 = new fi(t3, n3), a2 === true && (l2.format = E, l2.type = y)), o2.dispose(), o2.depthTexture = r4 ? l2 : null, o2.resolveDepthBuffer = r4, o2.storeMultisampledDepthBuffer = r4);
    for (let e23 = 0; e23 < x2.length; e23++) {
      let i3 = x2[e23];
      i3.setSize && i3.setSize(t3, n3), r4 && i3.needsDepthTexture === true && i3.setDepthTexture && i3.setDepthTexture(l2);
    }
  }, this.begin = function(e22, t3) {
    if (_2 || e22.toneMapping === 0 && x2.length === 0) return false;
    if (b2 = t3, t3 !== null) {
      let e23 = t3.width, n3 = t3.height;
      (o2.width !== e23 || o2.height !== n3) && this.setSize(e23, n3);
    }
    return S2 === false && e22.setRenderTarget(o2), v2 = e22.toneMapping, e22.toneMapping = 0, true;
  }, this.hasRenderPass = function() {
    return S2;
  }, this.end = function(e22, t3) {
    e22.toneMapping = v2, _2 = true;
    let n3 = o2, r4 = s2;
    for (let i3 = 0; i3 < x2.length; i3++) {
      let a3 = x2[i3];
      a3.enabled !== false && (a3.render(e22, r4, n3, t3), a3.needsSwap !== false && (n3 = r4, r4 = r4 === s2 ? c2 : s2));
    }
    if (m2 !== e22.outputColorSpace || h2 !== e22.toneMapping) {
      m2 = e22.outputColorSpace, h2 = e22.toneMapping, d2.defines = {}, G.getTransfer(m2) === `srgb` && (d2.defines.SRGB_TRANSFER = ``);
      let t4 = Ns[h2];
      t4 && (d2.defines[t4] = ``), d2.needsUpdate = true;
    }
    d2.uniforms.tDiffuse.value = n3.texture, e22.setRenderTarget(b2), e22.render(f2, p2), b2 = null, _2 = false;
  }, this.isCompositing = function() {
    return _2;
  }, this.dispose = function() {
    o2.dispose(), s2 !== null && s2.dispose(), c2 !== null && c2.dispose(), u2.dispose(), d2.dispose();
  };
}
var Fs = new Dt();
var Is = new fi(1, 1);
var Ls = new pi(1);
var Rs = new jt();
var zs = new Mt();
var Bs = new ui();
var Vs = [];
var Hs = [];
var Us = new Float32Array(16);
var Ws = new Float32Array(9);
var Gs = new Float32Array(4);
function Ks(e21, t2, n2) {
  let r3 = e21[0];
  if (r3 <= 0 || r3 > 0) return e21;
  let i2 = t2 * n2, a2 = Vs[i2];
  if (a2 === void 0 && (a2 = new Float32Array(i2), Vs[i2] = a2), t2 !== 0) {
    r3.toArray(a2, 0);
    for (let r4 = 1, i3 = 0; r4 !== t2; ++r4) i3 += n2, e21[r4].toArray(a2, i3);
  }
  return a2;
}
function qs(e21, t2) {
  if (e21.length !== t2.length) return false;
  for (let n2 = 0, r3 = e21.length; n2 < r3; n2++) if (e21[n2] !== t2[n2]) return false;
  return true;
}
function Js(e21, t2) {
  for (let n2 = 0, r3 = t2.length; n2 < r3; n2++) e21[n2] = t2[n2];
}
function Ys(e21, t2) {
  let n2 = Hs[t2];
  n2 === void 0 && (n2 = new Int32Array(t2), Hs[t2] = n2);
  for (let r3 = 0; r3 !== t2; ++r3) n2[r3] = e21.allocateTextureUnit();
  return n2;
}
function Xs(e21, t2) {
  let n2 = this.cache;
  n2[0] !== t2 && (e21.uniform1f(this.addr, t2), n2[0] = t2);
}
function Zs(e21, t2) {
  let n2 = this.cache;
  if (t2.x !== void 0) (n2[0] !== t2.x || n2[1] !== t2.y) && (e21.uniform2f(this.addr, t2.x, t2.y), n2[0] = t2.x, n2[1] = t2.y);
  else {
    if (qs(n2, t2)) return;
    e21.uniform2fv(this.addr, t2), Js(n2, t2);
  }
}
function Qs(e21, t2) {
  let n2 = this.cache;
  if (t2.x !== void 0) (n2[0] !== t2.x || n2[1] !== t2.y || n2[2] !== t2.z) && (e21.uniform3f(this.addr, t2.x, t2.y, t2.z), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z);
  else if (t2.r !== void 0) (n2[0] !== t2.r || n2[1] !== t2.g || n2[2] !== t2.b) && (e21.uniform3f(this.addr, t2.r, t2.g, t2.b), n2[0] = t2.r, n2[1] = t2.g, n2[2] = t2.b);
  else {
    if (qs(n2, t2)) return;
    e21.uniform3fv(this.addr, t2), Js(n2, t2);
  }
}
function $s(e21, t2) {
  let n2 = this.cache;
  if (t2.x !== void 0) (n2[0] !== t2.x || n2[1] !== t2.y || n2[2] !== t2.z || n2[3] !== t2.w) && (e21.uniform4f(this.addr, t2.x, t2.y, t2.z, t2.w), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.w);
  else {
    if (qs(n2, t2)) return;
    e21.uniform4fv(this.addr, t2), Js(n2, t2);
  }
}
function ec(e21, t2) {
  let n2 = this.cache, r3 = t2.elements;
  if (r3 === void 0) {
    if (qs(n2, t2)) return;
    e21.uniformMatrix2fv(this.addr, false, t2), Js(n2, t2);
  } else {
    if (qs(n2, r3)) return;
    Gs.set(r3), e21.uniformMatrix2fv(this.addr, false, Gs), Js(n2, r3);
  }
}
function tc(e21, t2) {
  let n2 = this.cache, r3 = t2.elements;
  if (r3 === void 0) {
    if (qs(n2, t2)) return;
    e21.uniformMatrix3fv(this.addr, false, t2), Js(n2, t2);
  } else {
    if (qs(n2, r3)) return;
    Ws.set(r3), e21.uniformMatrix3fv(this.addr, false, Ws), Js(n2, r3);
  }
}
function nc(e21, t2) {
  let n2 = this.cache, r3 = t2.elements;
  if (r3 === void 0) {
    if (qs(n2, t2)) return;
    e21.uniformMatrix4fv(this.addr, false, t2), Js(n2, t2);
  } else {
    if (qs(n2, r3)) return;
    Us.set(r3), e21.uniformMatrix4fv(this.addr, false, Us), Js(n2, r3);
  }
}
function rc(e21, t2) {
  let n2 = this.cache;
  n2[0] !== t2 && (e21.uniform1i(this.addr, t2), n2[0] = t2);
}
function ic(e21, t2) {
  let n2 = this.cache;
  if (t2.x !== void 0) (n2[0] !== t2.x || n2[1] !== t2.y) && (e21.uniform2i(this.addr, t2.x, t2.y), n2[0] = t2.x, n2[1] = t2.y);
  else {
    if (qs(n2, t2)) return;
    e21.uniform2iv(this.addr, t2), Js(n2, t2);
  }
}
function ac(e21, t2) {
  let n2 = this.cache;
  if (t2.x !== void 0) (n2[0] !== t2.x || n2[1] !== t2.y || n2[2] !== t2.z) && (e21.uniform3i(this.addr, t2.x, t2.y, t2.z), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z);
  else {
    if (qs(n2, t2)) return;
    e21.uniform3iv(this.addr, t2), Js(n2, t2);
  }
}
function oc(e21, t2) {
  let n2 = this.cache;
  if (t2.x !== void 0) (n2[0] !== t2.x || n2[1] !== t2.y || n2[2] !== t2.z || n2[3] !== t2.w) && (e21.uniform4i(this.addr, t2.x, t2.y, t2.z, t2.w), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.w);
  else {
    if (qs(n2, t2)) return;
    e21.uniform4iv(this.addr, t2), Js(n2, t2);
  }
}
function sc(e21, t2) {
  let n2 = this.cache;
  n2[0] !== t2 && (e21.uniform1ui(this.addr, t2), n2[0] = t2);
}
function cc(e21, t2) {
  let n2 = this.cache;
  if (t2.x !== void 0) (n2[0] !== t2.x || n2[1] !== t2.y) && (e21.uniform2ui(this.addr, t2.x, t2.y), n2[0] = t2.x, n2[1] = t2.y);
  else {
    if (qs(n2, t2)) return;
    e21.uniform2uiv(this.addr, t2), Js(n2, t2);
  }
}
function lc(e21, t2) {
  let n2 = this.cache;
  if (t2.x !== void 0) (n2[0] !== t2.x || n2[1] !== t2.y || n2[2] !== t2.z) && (e21.uniform3ui(this.addr, t2.x, t2.y, t2.z), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z);
  else {
    if (qs(n2, t2)) return;
    e21.uniform3uiv(this.addr, t2), Js(n2, t2);
  }
}
function uc(e21, t2) {
  let n2 = this.cache;
  if (t2.x !== void 0) (n2[0] !== t2.x || n2[1] !== t2.y || n2[2] !== t2.z || n2[3] !== t2.w) && (e21.uniform4ui(this.addr, t2.x, t2.y, t2.z, t2.w), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.w);
  else {
    if (qs(n2, t2)) return;
    e21.uniform4uiv(this.addr, t2), Js(n2, t2);
  }
}
function dc(e21) {
  return e21.version === 0 && (e21.compareFunction = 519, e21.needsUpdate = true), e21;
}
function fc(e21, t2, n2) {
  let r3 = this.cache, i2 = n2.allocateTextureUnit();
  r3[0] !== i2 && (e21.uniform1i(this.addr, i2), r3[0] = i2);
  let a2;
  a2 = this.type === e21.SAMPLER_2D_SHADOW ? dc(Is) : Fs, n2.setTexture2D(t2 || a2, i2);
}
function pc(e21, t2, n2) {
  let r3 = this.cache, i2 = n2.allocateTextureUnit();
  r3[0] !== i2 && (e21.uniform1i(this.addr, i2), r3[0] = i2), n2.setTexture3D(t2 || zs, i2);
}
function mc(e21, t2, n2) {
  let r3 = this.cache, i2 = n2.allocateTextureUnit();
  r3[0] !== i2 && (e21.uniform1i(this.addr, i2), r3[0] = i2);
  let a2;
  a2 = this.type === e21.SAMPLER_CUBE_SHADOW ? dc(Ls) : Bs, n2.setTextureCube(t2 || a2, i2);
}
function hc(e21, t2, n2) {
  let r3 = this.cache, i2 = n2.allocateTextureUnit();
  r3[0] !== i2 && (e21.uniform1i(this.addr, i2), r3[0] = i2), n2.setTexture2DArray(t2 || Rs, i2);
}
function gc(e21) {
  switch (e21) {
    case 5126:
      return Xs;
    case 35664:
      return Zs;
    case 35665:
      return Qs;
    case 35666:
      return $s;
    case 35674:
      return ec;
    case 35675:
      return tc;
    case 35676:
      return nc;
    case 5124:
    case 35670:
      return rc;
    case 35667:
    case 35671:
      return ic;
    case 35668:
    case 35672:
      return ac;
    case 35669:
    case 35673:
      return oc;
    case 5125:
      return sc;
    case 36294:
      return cc;
    case 36295:
      return lc;
    case 36296:
      return uc;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return fc;
    case 35679:
    case 36299:
    case 36307:
      return pc;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return mc;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return hc;
  }
}
function _c(e21, t2) {
  e21.uniform1fv(this.addr, t2);
}
function vc(e21, t2) {
  let n2 = Ks(t2, this.size, 2);
  e21.uniform2fv(this.addr, n2);
}
function yc(e21, t2) {
  let n2 = Ks(t2, this.size, 3);
  e21.uniform3fv(this.addr, n2);
}
function bc(e21, t2) {
  let n2 = Ks(t2, this.size, 4);
  e21.uniform4fv(this.addr, n2);
}
function xc(e21, t2) {
  let n2 = Ks(t2, this.size, 4);
  e21.uniformMatrix2fv(this.addr, false, n2);
}
function Sc(e21, t2) {
  let n2 = Ks(t2, this.size, 9);
  e21.uniformMatrix3fv(this.addr, false, n2);
}
function Cc(e21, t2) {
  let n2 = Ks(t2, this.size, 16);
  e21.uniformMatrix4fv(this.addr, false, n2);
}
function wc(e21, t2) {
  e21.uniform1iv(this.addr, t2);
}
function Tc(e21, t2) {
  e21.uniform2iv(this.addr, t2);
}
function Ec(e21, t2) {
  e21.uniform3iv(this.addr, t2);
}
function Dc(e21, t2) {
  e21.uniform4iv(this.addr, t2);
}
function Oc(e21, t2) {
  e21.uniform1uiv(this.addr, t2);
}
function kc(e21, t2) {
  e21.uniform2uiv(this.addr, t2);
}
function Ac(e21, t2) {
  e21.uniform3uiv(this.addr, t2);
}
function jc(e21, t2) {
  e21.uniform4uiv(this.addr, t2);
}
function Mc(e21, t2, n2) {
  let r3 = this.cache, i2 = t2.length, a2 = Ys(n2, i2);
  qs(r3, a2) || (e21.uniform1iv(this.addr, a2), Js(r3, a2));
  let o2;
  o2 = this.type === e21.SAMPLER_2D_SHADOW ? dc(Is) : Fs;
  for (let e22 = 0; e22 !== i2; ++e22) n2.setTexture2D(t2[e22] || o2, a2[e22]);
}
function Nc(e21, t2, n2) {
  let r3 = this.cache, i2 = t2.length, a2 = Ys(n2, i2);
  qs(r3, a2) || (e21.uniform1iv(this.addr, a2), Js(r3, a2));
  for (let e22 = 0; e22 !== i2; ++e22) n2.setTexture3D(t2[e22] || zs, a2[e22]);
}
function Pc(e21, t2, n2) {
  let r3 = this.cache, i2 = t2.length, a2 = Ys(n2, i2);
  qs(r3, a2) || (e21.uniform1iv(this.addr, a2), Js(r3, a2));
  let o2;
  o2 = this.type === e21.SAMPLER_CUBE_SHADOW ? dc(Ls) : Bs;
  for (let e22 = 0; e22 !== i2; ++e22) n2.setTextureCube(t2[e22] || o2, a2[e22]);
}
function Fc(e21, t2, n2) {
  let r3 = this.cache, i2 = t2.length, a2 = Ys(n2, i2);
  qs(r3, a2) || (e21.uniform1iv(this.addr, a2), Js(r3, a2));
  for (let e22 = 0; e22 !== i2; ++e22) n2.setTexture2DArray(t2[e22] || Rs, a2[e22]);
}
function Ic(e21) {
  switch (e21) {
    case 5126:
      return _c;
    case 35664:
      return vc;
    case 35665:
      return yc;
    case 35666:
      return bc;
    case 35674:
      return xc;
    case 35675:
      return Sc;
    case 35676:
      return Cc;
    case 5124:
    case 35670:
      return wc;
    case 35667:
    case 35671:
      return Tc;
    case 35668:
    case 35672:
      return Ec;
    case 35669:
    case 35673:
      return Dc;
    case 5125:
      return Oc;
    case 36294:
      return kc;
    case 36295:
      return Ac;
    case 36296:
      return jc;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Mc;
    case 35679:
    case 36299:
    case 36307:
      return Nc;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Pc;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Fc;
  }
}
var Lc = class {
  constructor(e21, t2, n2) {
    this.id = e21, this.addr = n2, this.cache = [], this.type = t2.type, this.setValue = gc(t2.type);
  }
};
var Rc = class {
  constructor(e21, t2, n2) {
    this.id = e21, this.addr = n2, this.cache = [], this.type = t2.type, this.size = t2.size, this.setValue = Ic(t2.type);
  }
};
var zc = class {
  constructor(e21) {
    this.id = e21, this.seq = [], this.map = {};
  }
  setValue(e21, t2, n2) {
    let r3 = this.seq;
    for (let i2 = 0, a2 = r3.length; i2 !== a2; ++i2) {
      let a3 = r3[i2];
      a3.setValue(e21, t2[a3.id], n2);
    }
  }
};
var Bc = /(\w+)(\])?(\[|\.)?/g;
function Vc(e21, t2) {
  e21.seq.push(t2), e21.map[t2.id] = t2;
}
function Hc(e21, t2, n2) {
  let r3 = e21.name, i2 = r3.length;
  for (Bc.lastIndex = 0; ; ) {
    let a2 = Bc.exec(r3), o2 = Bc.lastIndex, s2 = a2[1], c2 = a2[2] === `]`, l2 = a2[3];
    if (c2 && (s2 |= 0), l2 === void 0 || l2 === `[` && o2 + 2 === i2) {
      Vc(n2, l2 === void 0 ? new Lc(s2, e21, t2) : new Rc(s2, e21, t2));
      break;
    }
    {
      let e22 = n2.map[s2];
      e22 === void 0 && (e22 = new zc(s2), Vc(n2, e22)), n2 = e22;
    }
  }
}
var Uc = class {
  constructor(e21, t2) {
    this.seq = [], this.map = {};
    let n2 = e21.getProgramParameter(t2, e21.ACTIVE_UNIFORMS);
    for (let r4 = 0; r4 < n2; ++r4) {
      let n3 = e21.getActiveUniform(t2, r4);
      Hc(n3, e21.getUniformLocation(t2, n3.name), this);
    }
    let r3 = [], i2 = [];
    for (let t3 of this.seq) t3.type === e21.SAMPLER_2D_SHADOW || t3.type === e21.SAMPLER_CUBE_SHADOW || t3.type === e21.SAMPLER_2D_ARRAY_SHADOW ? r3.push(t3) : i2.push(t3);
    r3.length > 0 && (this.seq = r3.concat(i2));
  }
  setValue(e21, t2, n2, r3) {
    let i2 = this.map[t2];
    i2 !== void 0 && i2.setValue(e21, n2, r3);
  }
  setOptional(e21, t2, n2) {
    let r3 = t2[n2];
    r3 !== void 0 && this.setValue(e21, n2, r3);
  }
  static upload(e21, t2, n2, r3) {
    for (let i2 = 0, a2 = t2.length; i2 !== a2; ++i2) {
      let a3 = t2[i2], o2 = n2[a3.id];
      o2.needsUpdate !== false && a3.setValue(e21, o2.value, r3);
    }
  }
  static seqWithValue(e21, t2) {
    let n2 = [];
    for (let r3 = 0, i2 = e21.length; r3 !== i2; ++r3) {
      let i3 = e21[r3];
      i3.id in t2 && n2.push(i3);
    }
    return n2;
  }
};
function Wc(e21, t2, n2) {
  let r3 = e21.createShader(t2);
  return e21.shaderSource(r3, n2), e21.compileShader(r3), r3;
}
var Gc = 37297;
var Kc = 0;
function qc(e21, t2) {
  let n2 = e21.split(`
`), r3 = [], i2 = Math.max(t2 - 6, 0), a2 = Math.min(t2 + 6, n2.length);
  for (let e22 = i2; e22 < a2; e22++) {
    let i3 = e22 + 1;
    r3.push(`${i3 === t2 ? `>` : ` `} ${i3}: ${n2[e22]}`);
  }
  return r3.join(`
`);
}
var Jc = new W();
function Yc(e21) {
  G._getMatrix(Jc, G.workingColorSpace, e21);
  let t2 = `mat3( ${Jc.elements.map((e22) => e22.toFixed(4))} )`;
  switch (G.getTransfer(e21)) {
    case R:
      return [t2, `LinearTransferOETF`];
    case Be:
      return [t2, `sRGBTransferOETF`];
    default:
      return z(`WebGLProgram: Unsupported color space: `, e21), [t2, `LinearTransferOETF`];
  }
}
function Xc(e21, t2, n2) {
  let r3 = e21.getShaderParameter(t2, e21.COMPILE_STATUS), i2 = (e21.getShaderInfoLog(t2) || ``).trim();
  if (r3 && i2 === ``) return ``;
  let a2 = /ERROR: 0:(\d+)/.exec(i2);
  if (a2) {
    let r4 = parseInt(a2[1]);
    return n2.toUpperCase() + `

` + i2 + `

` + qc(e21.getShaderSource(t2), r4);
  }
  return i2;
}
function Zc(e21, t2) {
  let n2 = Yc(t2);
  return [`vec4 ${e21}( vec4 value ) {`, `	return ${n2[1]}( vec4( ${n2[0]} * value.rgb, value.a ) );`, `}`].join(`
`);
}
var Qc = {
  1: `Linear`,
  2: `Reinhard`,
  3: `Cineon`,
  4: `ACESFilmic`,
  6: `AgX`,
  7: `Neutral`,
  5: `Custom`
};
function $c(e21, t2) {
  let n2 = Qc[t2];
  return n2 === void 0 ? (z(`WebGLProgram: Unsupported toneMapping:`, t2), `vec3 ` + e21 + `( vec3 color ) { return LinearToneMapping( color ); }`) : `vec3 ` + e21 + `( vec3 color ) { return ` + n2 + `ToneMapping( color ); }`;
}
var el = new U();
function tl() {
  return G.getLuminanceCoefficients(el), [`float luminance( const in vec3 rgb ) {`, `	const vec3 weights = vec3( ${el.x.toFixed(4)}, ${el.y.toFixed(4)}, ${el.z.toFixed(4)} );`, `	return dot( weights, rgb );`, `}`].join(`
`);
}
function nl(e21) {
  return [e21.extensionClipCullDistance ? `#extension GL_ANGLE_clip_cull_distance : require` : ``, e21.extensionMultiDraw ? `#extension GL_ANGLE_multi_draw : require` : ``].filter(al).join(`
`);
}
function rl(e21) {
  let t2 = [];
  for (let n2 in e21) {
    let r3 = e21[n2];
    r3 !== false && t2.push(`#define ` + n2 + ` ` + r3);
  }
  return t2.join(`
`);
}
function il(e21, t2) {
  let n2 = {}, r3 = e21.getProgramParameter(t2, e21.ACTIVE_ATTRIBUTES);
  for (let i2 = 0; i2 < r3; i2++) {
    let r4 = e21.getActiveAttrib(t2, i2), a2 = r4.name, o2 = 1;
    r4.type === e21.FLOAT_MAT2 && (o2 = 2), r4.type === e21.FLOAT_MAT3 && (o2 = 3), r4.type === e21.FLOAT_MAT4 && (o2 = 4), n2[a2] = {
      type: r4.type,
      location: e21.getAttribLocation(t2, a2),
      locationSize: o2
    };
  }
  return n2;
}
function al(e21) {
  return e21 !== ``;
}
function ol(e21, t2) {
  let n2 = t2.numSpotLightShadows + t2.numSpotLightMaps - t2.numSpotLightShadowsWithMaps;
  return e21.replace(/NUM_SUN_LIGHTS/g, t2.numSunLights).replace(/NUM_DIR_LIGHTS/g, t2.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t2.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t2.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n2).replace(/NUM_RECT_AREA_LIGHTS/g, t2.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t2.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t2.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g, t2.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g, t2.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t2.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t2.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t2.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g, t2.numLightProbeGrids);
}
function sl(e21, t2) {
  return e21.replace(/NUM_CLIPPING_PLANES/g, t2.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t2.numClippingPlanes - t2.numClipIntersection);
}
var cl = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ll(e21) {
  return e21.replace(cl, ul);
}
function ul(e21, t2) {
  let n2 = q[t2];
  if (n2 === void 0) throw Error(`THREE.WebGLProgram: Can not resolve #include <` + t2 + `>`);
  return ll(n2);
}
var dl = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function fl(e21) {
  return e21.replace(dl, pl);
}
function pl(e21, t2, n2, r3) {
  let i2 = ``;
  for (let e22 = parseInt(t2); e22 < parseInt(n2); e22++) i2 += r3.replace(/\[\s*i\s*\]/g, `[ ` + e22 + ` ]`).replace(/UNROLLED_LOOP_INDEX/g, e22);
  return i2;
}
function ml(e21) {
  let t2 = `precision ${e21.precision} float;
	precision ${e21.precision} int;
	precision ${e21.precision} sampler2D;
	precision ${e21.precision} samplerCube;
	precision ${e21.precision} sampler3D;
	precision ${e21.precision} sampler2DArray;
	precision ${e21.precision} sampler2DShadow;
	precision ${e21.precision} samplerCubeShadow;
	precision ${e21.precision} sampler2DArrayShadow;
	precision ${e21.precision} isampler2D;
	precision ${e21.precision} isampler3D;
	precision ${e21.precision} isamplerCube;
	precision ${e21.precision} isampler2DArray;
	precision ${e21.precision} usampler2D;
	precision ${e21.precision} usampler3D;
	precision ${e21.precision} usamplerCube;
	precision ${e21.precision} usampler2DArray;
	`;
  return e21.precision === `highp` ? t2 += `
#define HIGH_PRECISION` : e21.precision === `mediump` ? t2 += `
#define MEDIUM_PRECISION` : e21.precision === `lowp` && (t2 += `
#define LOW_PRECISION`), t2;
}
var hl = {
  1: `SHADOWMAP_TYPE_PCF`,
  3: `SHADOWMAP_TYPE_VSM`
};
function gl(e21) {
  return hl[e21.shadowMapType] || `SHADOWMAP_TYPE_BASIC`;
}
var _l = {
  302: `ENVMAP_MODE_REFRACTION`
};
function vl(e21) {
  return e21.envMap === false ? `ENVMAP_MODE_REFLECTION` : _l[e21.envMapMode] || `ENVMAP_MODE_REFLECTION`;
}
var yl = {
  0: `ENVMAP_BLENDING_MULTIPLY`,
  1: `ENVMAP_BLENDING_MIX`,
  2: `ENVMAP_BLENDING_ADD`
};
function bl(e21) {
  return e21.envMap === false ? `ENVMAP_BLENDING_NONE` : yl[e21.combine] || `ENVMAP_BLENDING_NONE`;
}
function xl(e21, t2, n2, r3) {
  let i2 = e21.getContext(), a2 = n2.defines, o2 = n2.vertexShader, s2 = n2.fragmentShader, c2 = gl(n2), l2 = n2.envMapPMREM === true ? `ENVMAP_TYPE_PMREM` : `ENVMAP_TYPE_CUBE`, u2 = vl(n2), d2 = bl(n2), f2 = nl(n2), p2 = rl(a2), m2 = i2.createProgram(), h2, g2, _2 = n2.glslVersion ? `#version ` + n2.glslVersion + `
` : ``;
  n2.isRawShaderMaterial ? (h2 = [`#define SHADER_TYPE ` + n2.shaderType, `#define SHADER_NAME ` + n2.shaderName, p2].filter(al).join(`
`), h2.length > 0 && (h2 += `
`), g2 = [`#define SHADER_TYPE ` + n2.shaderType, `#define SHADER_NAME ` + n2.shaderName, p2].filter(al).join(`
`), g2.length > 0 && (g2 += `
`)) : (h2 = [ml(n2), `#define SHADER_TYPE ` + n2.shaderType, `#define SHADER_NAME ` + n2.shaderName, p2, n2.extensionClipCullDistance ? `#define USE_CLIP_DISTANCE` : ``, n2.batching ? `#define USE_BATCHING` : ``, n2.batchingColor ? `#define USE_BATCHING_COLOR` : ``, n2.instancing ? `#define USE_INSTANCING` : ``, n2.instancingColor ? `#define USE_INSTANCING_COLOR` : ``, n2.instancingMorph ? `#define USE_INSTANCING_MORPH` : ``, n2.useFog && n2.fog ? `#define USE_FOG` : ``, n2.useFog && n2.fogExp2 ? `#define FOG_EXP2` : ``, n2.map ? `#define USE_MAP` : ``, n2.envMap ? `#define USE_ENVMAP` : ``, n2.envMap ? `#define ` + u2 : ``, n2.lightMap ? `#define USE_LIGHTMAP` : ``, n2.aoMap ? `#define USE_AOMAP` : ``, n2.bumpMap ? `#define USE_BUMPMAP` : ``, n2.normalMap ? `#define USE_NORMALMAP` : ``, n2.normalMapObjectSpace ? `#define USE_NORMALMAP_OBJECTSPACE` : ``, n2.normalMapTangentSpace ? `#define USE_NORMALMAP_TANGENTSPACE` : ``, n2.displacementMap ? `#define USE_DISPLACEMENTMAP` : ``, n2.emissiveMap ? `#define USE_EMISSIVEMAP` : ``, n2.anisotropy ? `#define USE_ANISOTROPY` : ``, n2.anisotropyMap ? `#define USE_ANISOTROPYMAP` : ``, n2.clearcoatMap ? `#define USE_CLEARCOATMAP` : ``, n2.clearcoatRoughnessMap ? `#define USE_CLEARCOAT_ROUGHNESSMAP` : ``, n2.clearcoatNormalMap ? `#define USE_CLEARCOAT_NORMALMAP` : ``, n2.diffuseRoughnessMap ? `#define USE_DIFFUSE_ROUGHNESSMAP` : ``, n2.iridescenceMap ? `#define USE_IRIDESCENCEMAP` : ``, n2.iridescenceThicknessMap ? `#define USE_IRIDESCENCE_THICKNESSMAP` : ``, n2.specularMap ? `#define USE_SPECULARMAP` : ``, n2.specularColorMap ? `#define USE_SPECULAR_COLORMAP` : ``, n2.specularIntensityMap ? `#define USE_SPECULAR_INTENSITYMAP` : ``, n2.roughnessMap ? `#define USE_ROUGHNESSMAP` : ``, n2.metalnessMap ? `#define USE_METALNESSMAP` : ``, n2.alphaMap ? `#define USE_ALPHAMAP` : ``, n2.alphaHash ? `#define USE_ALPHAHASH` : ``, n2.transmission ? `#define USE_TRANSMISSION` : ``, n2.transmissionMap ? `#define USE_TRANSMISSIONMAP` : ``, n2.thicknessMap ? `#define USE_THICKNESSMAP` : ``, n2.sheenColorMap ? `#define USE_SHEEN_COLORMAP` : ``, n2.sheenRoughnessMap ? `#define USE_SHEEN_ROUGHNESSMAP` : ``, n2.mapUv ? `#define MAP_UV ` + n2.mapUv : ``, n2.alphaMapUv ? `#define ALPHAMAP_UV ` + n2.alphaMapUv : ``, n2.lightMapUv ? `#define LIGHTMAP_UV ` + n2.lightMapUv : ``, n2.aoMapUv ? `#define AOMAP_UV ` + n2.aoMapUv : ``, n2.emissiveMapUv ? `#define EMISSIVEMAP_UV ` + n2.emissiveMapUv : ``, n2.bumpMapUv ? `#define BUMPMAP_UV ` + n2.bumpMapUv : ``, n2.normalMapUv ? `#define NORMALMAP_UV ` + n2.normalMapUv : ``, n2.displacementMapUv ? `#define DISPLACEMENTMAP_UV ` + n2.displacementMapUv : ``, n2.metalnessMapUv ? `#define METALNESSMAP_UV ` + n2.metalnessMapUv : ``, n2.roughnessMapUv ? `#define ROUGHNESSMAP_UV ` + n2.roughnessMapUv : ``, n2.anisotropyMapUv ? `#define ANISOTROPYMAP_UV ` + n2.anisotropyMapUv : ``, n2.clearcoatMapUv ? `#define CLEARCOATMAP_UV ` + n2.clearcoatMapUv : ``, n2.clearcoatNormalMapUv ? `#define CLEARCOAT_NORMALMAP_UV ` + n2.clearcoatNormalMapUv : ``, n2.clearcoatRoughnessMapUv ? `#define CLEARCOAT_ROUGHNESSMAP_UV ` + n2.clearcoatRoughnessMapUv : ``, n2.diffuseRoughnessMapUv ? `#define DIFFUSE_ROUGHNESSMAP_UV ` + n2.diffuseRoughnessMapUv : ``, n2.iridescenceMapUv ? `#define IRIDESCENCEMAP_UV ` + n2.iridescenceMapUv : ``, n2.iridescenceThicknessMapUv ? `#define IRIDESCENCE_THICKNESSMAP_UV ` + n2.iridescenceThicknessMapUv : ``, n2.sheenColorMapUv ? `#define SHEEN_COLORMAP_UV ` + n2.sheenColorMapUv : ``, n2.sheenRoughnessMapUv ? `#define SHEEN_ROUGHNESSMAP_UV ` + n2.sheenRoughnessMapUv : ``, n2.specularMapUv ? `#define SPECULARMAP_UV ` + n2.specularMapUv : ``, n2.specularColorMapUv ? `#define SPECULAR_COLORMAP_UV ` + n2.specularColorMapUv : ``, n2.specularIntensityMapUv ? `#define SPECULAR_INTENSITYMAP_UV ` + n2.specularIntensityMapUv : ``, n2.transmissionMapUv ? `#define TRANSMISSIONMAP_UV ` + n2.transmissionMapUv : ``, n2.thicknessMapUv ? `#define THICKNESSMAP_UV ` + n2.thicknessMapUv : ``, n2.vertexTangents && n2.flatShading === false ? `#define USE_TANGENT` : ``, n2.vertexNormals ? `#define HAS_NORMAL` : ``, n2.vertexColors ? `#define USE_COLOR` : ``, n2.vertexAlphas ? `#define USE_COLOR_ALPHA` : ``, n2.vertexUv1s ? `#define USE_UV1` : ``, n2.vertexUv2s ? `#define USE_UV2` : ``, n2.vertexUv3s ? `#define USE_UV3` : ``, n2.pointsUvs ? `#define USE_POINTS_UV` : ``, n2.flatShading ? `#define FLAT_SHADED` : ``, n2.skinning ? `#define USE_SKINNING` : ``, n2.morphTargets ? `#define USE_MORPHTARGETS` : ``, n2.morphNormals && n2.flatShading === false ? `#define USE_MORPHNORMALS` : ``, n2.morphColors ? `#define USE_MORPHCOLORS` : ``, n2.morphTargetsCount > 0 ? `#define MORPHTARGETS_TEXTURE_STRIDE ` + n2.morphTextureStride : ``, n2.morphTargetsCount > 0 ? `#define MORPHTARGETS_COUNT ` + n2.morphTargetsCount : ``, n2.doubleSided ? `#define DOUBLE_SIDED` : ``, n2.flipSided ? `#define FLIP_SIDED` : ``, n2.shadowMapEnabled ? `#define USE_SHADOWMAP` : ``, n2.shadowMapEnabled ? `#define ` + c2 : ``, n2.sizeAttenuation ? `#define USE_SIZEATTENUATION` : ``, n2.numLightProbes > 0 ? `#define USE_LIGHT_PROBES` : ``, n2.logarithmicDepthBuffer ? `#define USE_LOGARITHMIC_DEPTH_BUFFER` : ``, n2.reversedDepthBuffer ? `#define USE_REVERSED_DEPTH_BUFFER` : ``, `uniform mat4 modelMatrix;`, `uniform mat4 modelViewMatrix;`, `uniform mat4 projectionMatrix;`, `uniform mat4 viewMatrix;`, `uniform mat3 normalMatrix;`, `uniform vec3 cameraPosition;`, `uniform bool isOrthographic;`, `#ifdef USE_INSTANCING`, `	attribute mat4 instanceMatrix;`, `#endif`, `#ifdef USE_INSTANCING_COLOR`, `	attribute vec3 instanceColor;`, `#endif`, `#ifdef USE_INSTANCING_MORPH`, `	uniform sampler2D morphTexture;`, `#endif`, `attribute vec3 position;`, `attribute vec3 normal;`, `attribute vec2 uv;`, `#ifdef USE_UV1`, `	attribute vec2 uv1;`, `#endif`, `#ifdef USE_UV2`, `	attribute vec2 uv2;`, `#endif`, `#ifdef USE_UV3`, `	attribute vec2 uv3;`, `#endif`, `#ifdef USE_TANGENT`, `	attribute vec4 tangent;`, `#endif`, `#if defined( USE_COLOR_ALPHA )`, `	attribute vec4 color;`, `#elif defined( USE_COLOR )`, `	attribute vec3 color;`, `#endif`, `#ifdef USE_SKINNING`, `	attribute vec4 skinIndex;`, `	attribute vec4 skinWeight;`, `#endif`, `
`].filter(al).join(`
`), g2 = [ml(n2), `#define SHADER_TYPE ` + n2.shaderType, `#define SHADER_NAME ` + n2.shaderName, p2, n2.useFog && n2.fog ? `#define USE_FOG` : ``, n2.useFog && n2.fogExp2 ? `#define FOG_EXP2` : ``, n2.alphaToCoverage ? `#define ALPHA_TO_COVERAGE` : ``, n2.map ? `#define USE_MAP` : ``, n2.matcap ? `#define USE_MATCAP` : ``, n2.envMap ? `#define USE_ENVMAP` : ``, n2.envMap ? `#define ` + l2 : ``, n2.envMap ? `#define ` + u2 : ``, n2.envMap ? `#define ` + d2 : ``, n2.envMapPMREM ? `#define ENVMAP_MAX_LOD ` + n2.envMapMaxLod + `.0` : ``, n2.envMapPMREM ? `#define ENVMAP_SIZE ` + n2.envMapSize + `.0` : ``, n2.lightMap ? `#define USE_LIGHTMAP` : ``, n2.aoMap ? `#define USE_AOMAP` : ``, n2.bumpMap ? `#define USE_BUMPMAP` : ``, n2.normalMap ? `#define USE_NORMALMAP` : ``, n2.normalMapObjectSpace ? `#define USE_NORMALMAP_OBJECTSPACE` : ``, n2.normalMapTangentSpace ? `#define USE_NORMALMAP_TANGENTSPACE` : ``, n2.packedNormalMap ? `#define USE_PACKED_NORMALMAP` : ``, n2.emissiveMap ? `#define USE_EMISSIVEMAP` : ``, n2.anisotropy ? `#define USE_ANISOTROPY` : ``, n2.anisotropyMap ? `#define USE_ANISOTROPYMAP` : ``, n2.clearcoat ? `#define USE_CLEARCOAT` : ``, n2.clearcoatMap ? `#define USE_CLEARCOATMAP` : ``, n2.clearcoatRoughnessMap ? `#define USE_CLEARCOAT_ROUGHNESSMAP` : ``, n2.clearcoatNormalMap ? `#define USE_CLEARCOAT_NORMALMAP` : ``, n2.diffuseRoughness ? `#define USE_DIFFUSE_ROUGHNESS` : ``, n2.diffuseRoughnessMap ? `#define USE_DIFFUSE_ROUGHNESSMAP` : ``, n2.dispersion ? `#define USE_DISPERSION` : ``, n2.retroreflection ? `#define USE_RETROREFLECTION` : ``, n2.iridescence ? `#define USE_IRIDESCENCE` : ``, n2.iridescenceMap ? `#define USE_IRIDESCENCEMAP` : ``, n2.iridescenceThicknessMap ? `#define USE_IRIDESCENCE_THICKNESSMAP` : ``, n2.specularMap ? `#define USE_SPECULARMAP` : ``, n2.specularColorMap ? `#define USE_SPECULAR_COLORMAP` : ``, n2.specularIntensityMap ? `#define USE_SPECULAR_INTENSITYMAP` : ``, n2.roughnessMap ? `#define USE_ROUGHNESSMAP` : ``, n2.metalnessMap ? `#define USE_METALNESSMAP` : ``, n2.alphaMap ? `#define USE_ALPHAMAP` : ``, n2.alphaTest ? `#define USE_ALPHATEST` : ``, n2.alphaHash ? `#define USE_ALPHAHASH` : ``, n2.sheen ? `#define USE_SHEEN` : ``, n2.sheenColorMap ? `#define USE_SHEEN_COLORMAP` : ``, n2.sheenRoughnessMap ? `#define USE_SHEEN_ROUGHNESSMAP` : ``, n2.transmission ? `#define USE_TRANSMISSION` : ``, n2.transmissionMap ? `#define USE_TRANSMISSIONMAP` : ``, n2.thicknessMap ? `#define USE_THICKNESSMAP` : ``, n2.vertexTangents && n2.flatShading === false ? `#define USE_TANGENT` : ``, n2.vertexColors || n2.instancingColor ? `#define USE_COLOR` : ``, n2.vertexAlphas || n2.batchingColor ? `#define USE_COLOR_ALPHA` : ``, n2.vertexUv1s ? `#define USE_UV1` : ``, n2.vertexUv2s ? `#define USE_UV2` : ``, n2.vertexUv3s ? `#define USE_UV3` : ``, n2.pointsUvs ? `#define USE_POINTS_UV` : ``, n2.gradientMap ? `#define USE_GRADIENTMAP` : ``, n2.flatShading ? `#define FLAT_SHADED` : ``, n2.doubleSided ? `#define DOUBLE_SIDED` : ``, n2.flipSided ? `#define FLIP_SIDED` : ``, n2.shadowMapEnabled ? `#define USE_SHADOWMAP` : ``, n2.shadowMapEnabled ? `#define ` + c2 : ``, n2.premultipliedAlpha ? `#define PREMULTIPLIED_ALPHA` : ``, n2.numLightProbes > 0 ? `#define USE_LIGHT_PROBES` : ``, n2.decodeVideoTexture ? `#define DECODE_VIDEO_TEXTURE` : ``, n2.decodeVideoTextureEmissive ? `#define DECODE_VIDEO_TEXTURE_EMISSIVE` : ``, n2.logarithmicDepthBuffer ? `#define USE_LOGARITHMIC_DEPTH_BUFFER` : ``, n2.reversedDepthBuffer ? `#define USE_REVERSED_DEPTH_BUFFER` : ``, `uniform mat4 viewMatrix;`, `uniform vec3 cameraPosition;`, `uniform bool isOrthographic;`, n2.toneMapping === 0 ? `` : `#define TONE_MAPPING`, n2.toneMapping === 0 ? `` : q.tonemapping_pars_fragment, n2.toneMapping === 0 ? `` : $c(`toneMapping`, n2.toneMapping), n2.dithering ? `#define DITHERING` : ``, n2.opaque ? `#define OPAQUE` : ``, q.colorspace_pars_fragment, Zc(`linearToOutputTexel`, n2.outputColorSpace), tl(), n2.useDepthPacking ? `#define DEPTH_PACKING ` + n2.depthPacking : ``, `
`].filter(al).join(`
`)), o2 = ll(o2), o2 = ol(o2, n2), o2 = sl(o2, n2), s2 = ll(s2), s2 = ol(s2, n2), s2 = sl(s2, n2), o2 = fl(o2), s2 = fl(s2), n2.isRawShaderMaterial !== true && (_2 = `#version 300 es
`, h2 = [f2, `#define attribute in`, `#define varying out`, `#define texture2D texture`].join(`
`) + `
` + h2, g2 = [`#define varying in`, n2.glslVersion === `300 es` ? `` : `layout(location = 0) out highp vec4 pc_fragColor;`, n2.glslVersion === `300 es` ? `` : `#define gl_FragColor pc_fragColor`, `#define gl_FragDepthEXT gl_FragDepth`, `#define texture2D texture`, `#define textureCube texture`, `#define texture2DProj textureProj`, `#define texture2DLodEXT textureLod`, `#define texture2DProjLodEXT textureProjLod`, `#define textureCubeLodEXT textureLod`, `#define texture2DGradEXT textureGrad`, `#define texture2DProjGradEXT textureProjGrad`, `#define textureCubeGradEXT textureGrad`].join(`
`) + `
` + g2);
  let v2 = _2 + h2 + o2, y2 = _2 + g2 + s2, b2 = Wc(i2, i2.VERTEX_SHADER, v2), x2 = Wc(i2, i2.FRAGMENT_SHADER, y2);
  i2.attachShader(m2, b2), i2.attachShader(m2, x2), n2.index0AttributeName === void 0 ? n2.hasPositionAttribute === true && i2.bindAttribLocation(m2, 0, `position`) : i2.bindAttribLocation(m2, 0, n2.index0AttributeName), i2.linkProgram(m2);
  function S2(t3) {
    if (e21.debug.checkShaderErrors) {
      let n3 = i2.getProgramInfoLog(m2) || ``, r4 = i2.getShaderInfoLog(b2) || ``, a3 = i2.getShaderInfoLog(x2) || ``, o3 = n3.trim(), s3 = r4.trim(), c3 = a3.trim(), l3 = true, u3 = true;
      if (i2.getProgramParameter(m2, i2.LINK_STATUS) === false) {
        if (l3 = false, typeof e21.debug.onShaderError == `function`) e21.debug.onShaderError(i2, m2, b2, x2);
        else {
          let e22 = Xc(i2, b2, `vertex`), n4 = Xc(i2, x2, `fragment`);
          B(`WebGLProgram: Shader Error ` + i2.getError() + ` - VALIDATE_STATUS ` + i2.getProgramParameter(m2, i2.VALIDATE_STATUS) + `

Material Name: ` + t3.name + `
Material Type: ` + t3.type + `

Program Info Log: ` + o3 + `
` + e22 + `
` + n4);
        }
      } else o3 === `` ? (s3 === `` || c3 === ``) && (u3 = false) : z(`WebGLProgram: Program Info Log:`, o3);
      u3 && (t3.diagnostics = {
        runnable: l3,
        programLog: o3,
        vertexShader: {
          log: s3,
          prefix: h2
        },
        fragmentShader: {
          log: c3,
          prefix: g2
        }
      });
    }
    i2.deleteShader(b2), i2.deleteShader(x2), C2 = new Uc(i2, m2), w2 = il(i2, m2);
  }
  let C2;
  this.getUniforms = function() {
    return C2 === void 0 && S2(this), C2;
  };
  let w2;
  this.getAttributes = function() {
    return w2 === void 0 && S2(this), w2;
  };
  let T2 = n2.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return T2 === false && (T2 = i2.getProgramParameter(m2, Gc)), T2;
  }, this.destroy = function() {
    r3.releaseStatesOfProgram(this), i2.deleteProgram(m2), this.program = void 0;
  }, this.type = n2.shaderType, this.name = n2.shaderName, this.id = Kc++, this.cacheKey = t2, this.usedTimes = 1, this.program = m2, this.vertexShader = b2, this.fragmentShader = x2, this;
}
var Sl = 0;
var Cl = class {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e21, t2, n2) {
    let r3 = this._getShaderCacheForMaterial(e21);
    return r3.has(t2) === false && (r3.add(t2), t2.usedTimes++), r3.has(n2) === false && (r3.add(n2), n2.usedTimes++), this;
  }
  remove(e21) {
    let t2 = this.materialCache.get(e21);
    for (let e22 of t2) e22.usedTimes--, e22.usedTimes === 0 && this.shaderCache.delete(e22.code);
    return this.materialCache.delete(e21), this;
  }
  getVertexShaderStage(e21) {
    return this._getShaderStage(e21.vertexShader);
  }
  getFragmentShaderStage(e21) {
    return this._getShaderStage(e21.fragmentShader);
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e21) {
    let t2 = this.materialCache, n2 = t2.get(e21);
    return n2 === void 0 && (n2 = /* @__PURE__ */ new Set(), t2.set(e21, n2)), n2;
  }
  _getShaderStage(e21) {
    let t2 = this.shaderCache, n2 = t2.get(e21);
    return n2 === void 0 && (n2 = new wl(e21), t2.set(e21, n2)), n2;
  }
};
var wl = class {
  constructor(e21) {
    this.id = Sl++, this.code = e21, this.usedTimes = 0;
  }
};
function Tl(e21) {
  return e21 === 1030 || e21 === 37490 || e21 === 36285;
}
function El(e21, t2, n2, r3, i2, a2) {
  let o2 = new Wt(), s2 = new Cl(), c2 = /* @__PURE__ */ new Set(), l2 = [], u2 = /* @__PURE__ */ new Map(), d2 = r3.logarithmicDepthBuffer, f2 = {
    MeshDepthMaterial: `depth`,
    MeshDistanceMaterial: `distance`,
    MeshNormalMaterial: `normal`,
    MeshBasicMaterial: `basic`,
    MeshLambertMaterial: `lambert`,
    MeshPhongMaterial: `phong`,
    MeshToonMaterial: `toon`,
    MeshStandardMaterial: `physical`,
    MeshPhysicalMaterial: `physical`,
    MeshMatcapMaterial: `matcap`,
    LineBasicMaterial: `basic`,
    LineDashedMaterial: `dashed`,
    PointsMaterial: `points`,
    ShadowMaterial: `shadow`,
    SpriteMaterial: `sprite`
  };
  function p2(e22) {
    return c2.add(e22), e22 === 0 ? `uv` : `uv${e22}`;
  }
  function m2(i3, o3, l3, u3, m3, h3) {
    let g3 = u3.fog, _3 = m3.geometry, v3 = i3.isMeshStandardMaterial || i3.isMeshLambertMaterial || i3.isMeshPhongMaterial ? u3.environment : null, y3 = i3.isMeshStandardMaterial || i3.isMeshLambertMaterial && !i3.envMap || i3.isMeshPhongMaterial && !i3.envMap, b3 = t2.get(i3.envMap || v3, y3), x3 = f2[i3.type], S3 = r3.precision;
    i3.precision !== null && (S3 = r3.getMaxPrecision(i3.precision), S3 !== i3.precision && z(`WebGLProgram.getParameters:`, i3.precision, `not supported, using`, S3, `instead.`));
    let C2 = _3.morphAttributes.position || _3.morphAttributes.normal || _3.morphAttributes.color, w2 = C2 === void 0 ? 0 : C2.length, T2 = 0;
    _3.morphAttributes.position !== void 0 && (T2 = 1), _3.morphAttributes.normal !== void 0 && (T2 = 2), _3.morphAttributes.color !== void 0 && (T2 = 3);
    let E2, D2, O2, k2;
    if (x3) {
      let e22 = es[x3];
      E2 = e22.vertexShader, D2 = e22.fragmentShader;
    } else {
      E2 = i3.vertexShader, D2 = i3.fragmentShader;
      let e22 = s2.getVertexShaderStage(i3), t3 = s2.getFragmentShaderStage(i3);
      s2.update(i3, e22, t3), O2 = e22.id, k2 = t3.id;
    }
    let A2 = e21.getRenderTarget(), ee2 = e21.state.buffers.depth.getReversed(), j2 = m3.isInstancedMesh === true, te2 = m3.isBatchedMesh === true, M2 = !!i3.map, ne2 = !!i3.matcap, N2 = !!b3, re2 = N2 && b3.isPMREMTexture === true, ie2 = !!i3.aoMap, ae2 = !!i3.lightMap, oe2 = !!i3.bumpMap && i3.wireframe === false, se2 = !!i3.normalMap, ce2 = !!i3.displacementMap, le2 = !!i3.emissiveMap, P2 = !!i3.metalnessMap, ue2 = !!i3.roughnessMap, de2 = i3.anisotropy > 0, fe2 = i3.clearcoat > 0, pe2 = i3.diffuseRoughness > 0, me2 = i3.dispersion > 0, he2 = i3.retroreflectivity > 0, ge2 = i3.iridescence > 0, _e2 = i3.sheen > 0, ve2 = i3.transmission > 0, ye2 = de2 && !!i3.anisotropyMap, be2 = fe2 && !!i3.clearcoatMap, xe2 = fe2 && !!i3.clearcoatNormalMap, Se2 = fe2 && !!i3.clearcoatRoughnessMap, Ce2 = pe2 && !!i3.diffuseRoughnessMap, we2 = ge2 && !!i3.iridescenceMap, Te2 = ge2 && !!i3.iridescenceThicknessMap, Ee2 = _e2 && !!i3.sheenColorMap, De2 = _e2 && !!i3.sheenRoughnessMap, Oe2 = !!i3.specularMap, ke2 = !!i3.specularColorMap, Ae2 = !!i3.specularIntensityMap, je2 = ve2 && !!i3.transmissionMap, Me2 = ve2 && !!i3.thicknessMap, Ne2 = !!i3.gradientMap, Pe2 = !!i3.alphaMap, F2 = i3.alphaTest > 0, Fe2 = !!i3.alphaHash, Ie2 = !!i3.extensions, Le2 = 0;
    i3.toneMapped && (A2 === null || A2.isXRRenderTarget === true) && (Le2 = e21.toneMapping);
    let I2 = re2 ? b3.isCompressedCubeTexture ? b3.image[0].mipmaps : b3.mipmaps : null, Re2 = {
      shaderID: x3,
      shaderType: i3.type,
      shaderName: i3.name,
      vertexShader: E2,
      fragmentShader: D2,
      defines: i3.defines,
      customVertexShaderID: O2,
      customFragmentShaderID: k2,
      isRawShaderMaterial: i3.isRawShaderMaterial === true,
      glslVersion: i3.glslVersion,
      precision: S3,
      batching: te2,
      batchingColor: te2 && m3._colorsTexture !== null,
      instancing: j2,
      instancingColor: j2 && m3.instanceColor !== null,
      instancingMorph: j2 && m3.morphTexture !== null,
      outputColorSpace: A2 === null ? e21.outputColorSpace : A2.isXRRenderTarget === true ? A2.texture.colorSpace : G.workingColorSpace,
      alphaToCoverage: !!i3.alphaToCoverage,
      map: M2,
      matcap: ne2,
      envMap: N2,
      envMapMode: N2 && b3.mapping,
      envMapPMREM: re2,
      envMapMaxLod: re2 ? I2.length - 1 : null,
      envMapSize: re2 ? I2[0].width : null,
      aoMap: ie2,
      lightMap: ae2,
      bumpMap: oe2,
      normalMap: se2,
      displacementMap: ce2,
      emissiveMap: le2,
      normalMapObjectSpace: se2 && i3.normalMapType === 1,
      normalMapTangentSpace: se2 && i3.normalMapType === 0,
      packedNormalMap: se2 && i3.normalMapType === 0 && Tl(i3.normalMap.format),
      metalnessMap: P2,
      roughnessMap: ue2,
      anisotropy: de2,
      anisotropyMap: ye2,
      clearcoat: fe2,
      clearcoatMap: be2,
      clearcoatNormalMap: xe2,
      clearcoatRoughnessMap: Se2,
      diffuseRoughness: pe2,
      diffuseRoughnessMap: Ce2,
      dispersion: me2,
      retroreflection: he2,
      iridescence: ge2,
      iridescenceMap: we2,
      iridescenceThicknessMap: Te2,
      sheen: _e2,
      sheenColorMap: Ee2,
      sheenRoughnessMap: De2,
      specularMap: Oe2,
      specularColorMap: ke2,
      specularIntensityMap: Ae2,
      transmission: ve2,
      transmissionMap: je2,
      thicknessMap: Me2,
      gradientMap: Ne2,
      opaque: i3.transparent === false && i3.blending === 1 && i3.alphaToCoverage === false,
      alphaMap: Pe2,
      alphaTest: F2,
      alphaHash: Fe2,
      combine: i3.combine,
      mapUv: M2 && p2(i3.map.channel),
      aoMapUv: ie2 && p2(i3.aoMap.channel),
      lightMapUv: ae2 && p2(i3.lightMap.channel),
      bumpMapUv: oe2 && p2(i3.bumpMap.channel),
      normalMapUv: se2 && p2(i3.normalMap.channel),
      displacementMapUv: ce2 && p2(i3.displacementMap.channel),
      emissiveMapUv: le2 && p2(i3.emissiveMap.channel),
      metalnessMapUv: P2 && p2(i3.metalnessMap.channel),
      roughnessMapUv: ue2 && p2(i3.roughnessMap.channel),
      anisotropyMapUv: ye2 && p2(i3.anisotropyMap.channel),
      clearcoatMapUv: be2 && p2(i3.clearcoatMap.channel),
      clearcoatNormalMapUv: xe2 && p2(i3.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Se2 && p2(i3.clearcoatRoughnessMap.channel),
      diffuseRoughnessMapUv: Ce2 && p2(i3.diffuseRoughnessMap.channel),
      iridescenceMapUv: we2 && p2(i3.iridescenceMap.channel),
      iridescenceThicknessMapUv: Te2 && p2(i3.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ee2 && p2(i3.sheenColorMap.channel),
      sheenRoughnessMapUv: De2 && p2(i3.sheenRoughnessMap.channel),
      specularMapUv: Oe2 && p2(i3.specularMap.channel),
      specularColorMapUv: ke2 && p2(i3.specularColorMap.channel),
      specularIntensityMapUv: Ae2 && p2(i3.specularIntensityMap.channel),
      transmissionMapUv: je2 && p2(i3.transmissionMap.channel),
      thicknessMapUv: Me2 && p2(i3.thicknessMap.channel),
      alphaMapUv: Pe2 && p2(i3.alphaMap.channel),
      vertexTangents: !!_3.attributes.tangent && (se2 || de2),
      vertexNormals: !!_3.attributes.normal,
      vertexColors: i3.vertexColors,
      vertexAlphas: i3.vertexColors === true && !!_3.attributes.color && _3.attributes.color.itemSize === 4,
      pointsUvs: m3.isPoints === true && !!_3.attributes.uv && (M2 || Pe2),
      fog: !!g3,
      useFog: i3.fog === true,
      fogExp2: !!g3 && g3.isFogExp2,
      flatShading: i3.wireframe === false && (i3.flatShading === true || _3.attributes.normal === void 0 && se2 === false && (i3.isMeshLambertMaterial || i3.isMeshPhongMaterial || i3.isMeshStandardMaterial || i3.isMeshPhysicalMaterial)),
      sizeAttenuation: i3.sizeAttenuation === true,
      logarithmicDepthBuffer: d2,
      reversedDepthBuffer: ee2,
      skinning: m3.isSkinnedMesh === true,
      hasPositionAttribute: _3.attributes.position !== void 0,
      morphTargets: _3.morphAttributes.position !== void 0,
      morphNormals: _3.morphAttributes.normal !== void 0,
      morphColors: _3.morphAttributes.color !== void 0,
      morphTargetsCount: w2,
      morphTextureStride: T2,
      numSunLights: o3.sun.length,
      numDirLights: o3.directional.length,
      numPointLights: o3.point.length,
      numSpotLights: o3.spot.length,
      numSpotLightMaps: o3.spotLightMap.length,
      numRectAreaLights: o3.rectArea.length,
      numHemiLights: o3.hemi.length,
      numSunLightShadows: o3.sunShadowMap.length,
      numDirLightShadows: o3.directionalShadowMap.length,
      numPointLightShadows: o3.pointShadowMap.length,
      numSpotLightShadows: o3.spotShadowMap.length,
      numSpotLightShadowsWithMaps: o3.numSpotLightShadowsWithMaps,
      numLightProbes: o3.numLightProbes,
      numLightProbeGrids: h3.filter((e22) => e22.texture !== null).length,
      numClippingPlanes: a2.numPlanes,
      numClipIntersection: a2.numIntersection,
      dithering: i3.dithering,
      shadowMapEnabled: e21.shadowMap.enabled && l3.length > 0,
      shadowMapType: e21.shadowMap.type,
      toneMapping: Le2,
      decodeVideoTexture: M2 && i3.map.isVideoTexture === true && G.getTransfer(i3.map.colorSpace) === `srgb`,
      decodeVideoTextureEmissive: le2 && i3.emissiveMap.isVideoTexture === true && G.getTransfer(i3.emissiveMap.colorSpace) === `srgb`,
      premultipliedAlpha: i3.premultipliedAlpha,
      doubleSided: i3.side === 2,
      flipSided: i3.side === 1,
      useDepthPacking: i3.depthPacking >= 0,
      depthPacking: i3.depthPacking || 0,
      index0AttributeName: i3.index0AttributeName,
      extensionClipCullDistance: Ie2 && i3.extensions.clipCullDistance === true && n2.has(`WEBGL_clip_cull_distance`),
      extensionMultiDraw: (Ie2 && i3.extensions.multiDraw === true || te2) && n2.has(`WEBGL_multi_draw`),
      rendererExtensionParallelShaderCompile: n2.has(`KHR_parallel_shader_compile`),
      customProgramCacheKey: i3.customProgramCacheKey()
    };
    return Re2.vertexUv1s = c2.has(1), Re2.vertexUv2s = c2.has(2), Re2.vertexUv3s = c2.has(3), c2.clear(), Re2;
  }
  function h2(t3) {
    let n3 = [];
    if (t3.shaderID ? n3.push(t3.shaderID) : (n3.push(t3.customVertexShaderID), n3.push(t3.customFragmentShaderID)), t3.defines !== void 0) for (let e22 in t3.defines) n3.push(e22), n3.push(t3.defines[e22]);
    return t3.isRawShaderMaterial === false && (g2(n3, t3), _2(n3, t3), n3.push(e21.outputColorSpace)), n3.push(t3.customProgramCacheKey), n3.join();
  }
  function g2(e22, t3) {
    e22.push(t3.precision), e22.push(t3.outputColorSpace), e22.push(t3.envMapMode), e22.push(t3.envMapPMREM), e22.push(t3.envMapMaxLod), e22.push(t3.envMapSize), e22.push(t3.mapUv), e22.push(t3.alphaMapUv), e22.push(t3.lightMapUv), e22.push(t3.aoMapUv), e22.push(t3.bumpMapUv), e22.push(t3.normalMapUv), e22.push(t3.displacementMapUv), e22.push(t3.emissiveMapUv), e22.push(t3.metalnessMapUv), e22.push(t3.roughnessMapUv), e22.push(t3.anisotropyMapUv), e22.push(t3.clearcoatMapUv), e22.push(t3.clearcoatNormalMapUv), e22.push(t3.clearcoatRoughnessMapUv), e22.push(t3.diffuseRoughnessMapUv), e22.push(t3.iridescenceMapUv), e22.push(t3.iridescenceThicknessMapUv), e22.push(t3.sheenColorMapUv), e22.push(t3.sheenRoughnessMapUv), e22.push(t3.specularMapUv), e22.push(t3.specularColorMapUv), e22.push(t3.specularIntensityMapUv), e22.push(t3.transmissionMapUv), e22.push(t3.thicknessMapUv), e22.push(t3.combine), e22.push(t3.fogExp2), e22.push(t3.sizeAttenuation), e22.push(t3.morphTargetsCount), e22.push(t3.numSunLights), e22.push(t3.numDirLights), e22.push(t3.numPointLights), e22.push(t3.numSpotLights), e22.push(t3.numSpotLightMaps), e22.push(t3.numHemiLights), e22.push(t3.numRectAreaLights), e22.push(t3.numSunLightShadows), e22.push(t3.numDirLightShadows), e22.push(t3.numPointLightShadows), e22.push(t3.numSpotLightShadows), e22.push(t3.numSpotLightShadowsWithMaps), e22.push(t3.numLightProbes), e22.push(t3.numLightProbeGrids), e22.push(t3.shadowMapType), e22.push(t3.toneMapping), e22.push(t3.numClippingPlanes), e22.push(t3.numClipIntersection), e22.push(t3.depthPacking);
  }
  function _2(e22, t3) {
    o2.disableAll(), t3.instancing && o2.enable(0), t3.instancingColor && o2.enable(1), t3.instancingMorph && o2.enable(2), t3.matcap && o2.enable(3), t3.envMap && o2.enable(4), t3.normalMapObjectSpace && o2.enable(5), t3.normalMapTangentSpace && o2.enable(6), t3.clearcoat && o2.enable(7), t3.iridescence && o2.enable(8), t3.alphaTest && o2.enable(9), t3.vertexColors && o2.enable(10), t3.vertexAlphas && o2.enable(11), t3.vertexUv1s && o2.enable(12), t3.vertexUv2s && o2.enable(13), t3.vertexUv3s && o2.enable(14), t3.vertexTangents && o2.enable(15), t3.anisotropy && o2.enable(16), t3.alphaHash && o2.enable(17), t3.batching && o2.enable(18), t3.dispersion && o2.enable(19), t3.retroreflection && o2.enable(24), t3.diffuseRoughness && o2.enable(25), t3.batchingColor && o2.enable(20), t3.gradientMap && o2.enable(21), t3.packedNormalMap && o2.enable(22), t3.vertexNormals && o2.enable(23), e22.push(o2.mask), o2.disableAll(), t3.fog && o2.enable(0), t3.useFog && o2.enable(1), t3.flatShading && o2.enable(2), t3.logarithmicDepthBuffer && o2.enable(3), t3.reversedDepthBuffer && o2.enable(4), t3.skinning && o2.enable(5), t3.morphTargets && o2.enable(6), t3.morphNormals && o2.enable(7), t3.morphColors && o2.enable(8), t3.premultipliedAlpha && o2.enable(9), t3.shadowMapEnabled && o2.enable(10), t3.doubleSided && o2.enable(11), t3.flipSided && o2.enable(12), t3.useDepthPacking && o2.enable(13), t3.dithering && o2.enable(14), t3.transmission && o2.enable(15), t3.sheen && o2.enable(16), t3.opaque && o2.enable(17), t3.pointsUvs && o2.enable(18), t3.decodeVideoTexture && o2.enable(19), t3.decodeVideoTextureEmissive && o2.enable(20), t3.alphaToCoverage && o2.enable(21), t3.numLightProbeGrids > 0 && o2.enable(22), t3.hasPositionAttribute && o2.enable(23), e22.push(o2.mask);
  }
  function v2(e22) {
    let t3 = f2[e22.type], n3;
    if (t3) {
      let e23 = es[t3];
      n3 = Ha.clone(e23.uniforms);
    } else n3 = e22.uniforms;
    return n3;
  }
  function y2(t3, n3) {
    let r4 = u2.get(n3);
    return r4 === void 0 ? (r4 = new xl(e21, n3, t3, i2), l2.push(r4), u2.set(n3, r4)) : ++r4.usedTimes, r4;
  }
  function b2(e22) {
    if (--e22.usedTimes === 0) {
      let t3 = l2.indexOf(e22);
      l2[t3] = l2[l2.length - 1], l2.pop(), u2.delete(e22.cacheKey), e22.destroy();
    }
  }
  function x2(e22) {
    s2.remove(e22);
  }
  function S2() {
    s2.dispose();
  }
  return {
    getParameters: m2,
    getProgramCacheKey: h2,
    getUniforms: v2,
    acquireProgram: y2,
    releaseProgram: b2,
    releaseShaderCache: x2,
    programs: l2,
    dispose: S2
  };
}
function Dl() {
  let e21 = /* @__PURE__ */ new WeakMap();
  function t2(t3) {
    return e21.has(t3);
  }
  function n2(t3) {
    let n3 = e21.get(t3);
    return n3 === void 0 && (n3 = {}, e21.set(t3, n3)), n3;
  }
  function r3(t3) {
    e21.delete(t3);
  }
  function i2(t3, n3, r4) {
    e21.get(t3)[n3] = r4;
  }
  function a2() {
    e21 = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: t2,
    get: n2,
    remove: r3,
    update: i2,
    dispose: a2
  };
}
function Ol(e21, t2) {
  return e21.groupOrder === t2.groupOrder ? e21.renderOrder === t2.renderOrder ? e21.material.id === t2.material.id ? e21.materialVariant === t2.materialVariant ? e21.z === t2.z ? e21.id - t2.id : e21.z - t2.z : e21.materialVariant - t2.materialVariant : e21.material.id - t2.material.id : e21.renderOrder - t2.renderOrder : e21.groupOrder - t2.groupOrder;
}
function kl(e21, t2) {
  return e21.groupOrder === t2.groupOrder ? e21.renderOrder === t2.renderOrder ? e21.z === t2.z ? e21.id - t2.id : t2.z - e21.z : e21.renderOrder - t2.renderOrder : e21.groupOrder - t2.groupOrder;
}
function Al() {
  let e21 = [], t2 = 0, n2 = [], r3 = [], i2 = [];
  function a2() {
    t2 = 0, n2.length = 0, r3.length = 0, i2.length = 0;
  }
  function o2(e22) {
    let t3 = 0;
    return e22.isInstancedMesh && (t3 += 2), e22.isSkinnedMesh && (t3 += 1), t3;
  }
  function s2(n3, r4, i3, a3, s3, c3) {
    let l3 = e21[t2];
    return l3 === void 0 ? (l3 = {
      id: n3.id,
      object: n3,
      geometry: r4,
      material: i3,
      materialVariant: o2(n3),
      groupOrder: a3,
      renderOrder: n3.renderOrder,
      z: s3,
      group: c3
    }, e21[t2] = l3) : (l3.id = n3.id, l3.object = n3, l3.geometry = r4, l3.material = i3, l3.materialVariant = o2(n3), l3.groupOrder = a3, l3.renderOrder = n3.renderOrder, l3.z = s3, l3.group = c3), t2++, l3;
  }
  function c2(e22, t3, a3, o3, c3, l3, u3) {
    u3.reversedDepth === true && (c3 = -c3);
    let d3 = s2(e22, t3, a3, o3, c3, l3);
    a3.transmission > 0 ? r3.push(d3) : a3.transparent === true ? i2.push(d3) : n2.push(d3);
  }
  function l2(e22, t3, a3, o3, c3, l3) {
    let u3 = s2(e22, t3, a3, o3, c3, l3);
    a3.transmission > 0 ? r3.unshift(u3) : a3.transparent === true ? i2.unshift(u3) : n2.unshift(u3);
  }
  function u2(e22, t3) {
    n2.length > 1 && n2.sort(e22 || Ol), r3.length > 1 && r3.sort(t3 || kl), i2.length > 1 && i2.sort(t3 || kl);
  }
  function d2() {
    for (let n3 = t2, r4 = e21.length; n3 < r4; n3++) {
      let t3 = e21[n3];
      if (t3.id === null) break;
      t3.id = null, t3.object = null, t3.geometry = null, t3.material = null, t3.group = null;
    }
  }
  return {
    opaque: n2,
    transmissive: r3,
    transparent: i2,
    init: a2,
    push: c2,
    unshift: l2,
    finish: d2,
    sort: u2
  };
}
function jl() {
  let e21 = /* @__PURE__ */ new WeakMap();
  function t2(t3, n3) {
    let r3 = e21.get(t3), i2;
    return r3 === void 0 ? (i2 = new Al(), e21.set(t3, [i2])) : n3 >= r3.length ? (i2 = new Al(), r3.push(i2)) : i2 = r3[n3], i2;
  }
  function n2() {
    e21 = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t2,
    dispose: n2
  };
}
function Ml() {
  let e21 = {};
  return {
    get: function(t2) {
      if (e21[t2.id] !== void 0) return e21[t2.id];
      let n2;
      switch (t2.type) {
        case `SunLight`:
        case `DirectionalLight`:
          n2 = {
            direction: new U(),
            color: new K()
          };
          break;
        case `SpotLight`:
          n2 = {
            position: new U(),
            direction: new U(),
            color: new K(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case `PointLight`:
          n2 = {
            position: new U(),
            color: new K(),
            distance: 0,
            decay: 0
          };
          break;
        case `HemisphereLight`:
          n2 = {
            direction: new U(),
            skyColor: new K(),
            groundColor: new K()
          };
          break;
        case `RectAreaLight`:
          n2 = {
            color: new K(),
            position: new U(),
            halfWidth: new U(),
            halfHeight: new U()
          };
      }
      return e21[t2.id] = n2, n2;
    }
  };
}
function Nl() {
  let e21 = {};
  return {
    get: function(t2) {
      if (e21[t2.id] !== void 0) return e21[t2.id];
      let n2;
      switch (t2.type) {
        case `SunLight`:
        case `DirectionalLight`:
          n2 = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new H()
          };
          break;
        case `SpotLight`:
          n2 = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new H()
          };
          break;
        case `PointLight`:
          n2 = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new H(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
      }
      return e21[t2.id] = n2, n2;
    }
  };
}
var Pl = 0;
function Fl(e21, t2) {
  return (t2.castShadow ? 2 : 0) - (e21.castShadow ? 2 : 0) + +!!t2.map - !!e21.map;
}
function Il(e21) {
  let t2 = new Ml(), n2 = Nl(), r3 = {
    version: 0,
    hash: {
      sunLength: -1,
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numSunShadows: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    sun: [],
    sunShadow: [],
    sunShadowMap: [],
    sunShadowMatrix: [],
    sunShadowCascade: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let e22 = 0; e22 < 9; e22++) r3.probe.push(new U());
  let i2 = new U(), a2 = new Nt(), o2 = new Nt();
  function s2(i3) {
    let a3 = 0, o3 = 0, s3 = 0;
    for (let e22 = 0; e22 < 9; e22++) r3.probe[e22].set(0, 0, 0);
    let c3 = 0, l2 = 0, u2 = 0, d2 = 0, f2 = 0, p2 = 0, m2 = 0, h2 = 0, g2 = 0, _2 = 0, v2 = 0, y2 = 0, b2 = 0, x2 = 0;
    i3.sort(Fl);
    for (let e22 = 0, S3 = i3.length; e22 < S3; e22++) {
      let S4 = i3[e22], C2 = S4.color, w2 = S4.intensity, T2 = S4.distance, E2 = null;
      if (S4.shadow && S4.shadow.map && (E2 = S4.shadow.map.texture.format === 1030 ? S4.shadow.map.texture : S4.shadow.map.depthTexture || S4.shadow.map.texture), S4.isAmbientLight) a3 += C2.r * w2, o3 += C2.g * w2, s3 += C2.b * w2;
      else if (S4.isLightProbe) {
        for (let e23 = 0; e23 < 9; e23++) r3.probe[e23].addScaledVector(S4.sh.coefficients[e23], w2);
        x2++;
      } else if (S4.isSunLight) {
        let e23 = t2.get(S4);
        if (e23.color.copy(S4.color).multiplyScalar(S4.intensity), S4.castShadow) {
          let e24 = S4.shadow, t3 = n2.get(S4);
          t3.shadowIntensity = e24.intensity, t3.shadowBias = e24.bias, t3.shadowNormalBias = e24.normalBias, t3.shadowRadius = e24.radius, t3.shadowMapSize.copy(e24.mapSize).multiply(e24.getFrameExtents()), r3.sunShadow[l2] = t3, r3.sunShadowMap[l2] = E2;
          let i4 = e24.getViewportCount();
          for (let t4 = 0; t4 < i4; t4++) r3.sunShadowMatrix[u2 + t4] = e24.getMatrix(t4), r3.sunShadowCascade[u2 + t4] = e24._cascadeData[t4];
          u2 += i4, l2++;
        }
        r3.sun[c3] = e23, c3++;
      } else if (S4.isDirectionalLight) {
        let e23 = t2.get(S4);
        if (e23.color.copy(S4.color).multiplyScalar(S4.intensity), S4.castShadow) {
          let e24 = S4.shadow, t3 = n2.get(S4);
          t3.shadowIntensity = e24.intensity, t3.shadowBias = e24.bias, t3.shadowNormalBias = e24.normalBias, t3.shadowRadius = e24.radius, t3.shadowMapSize = e24.mapSize, r3.directionalShadow[d2] = t3, r3.directionalShadowMap[d2] = E2, r3.directionalShadowMatrix[d2] = S4.shadow.matrix, g2++;
        }
        r3.directional[d2] = e23, d2++;
      } else if (S4.isSpotLight) {
        let e23 = t2.get(S4);
        e23.position.setFromMatrixPosition(S4.matrixWorld), e23.color.copy(C2).multiplyScalar(w2), e23.distance = T2, e23.coneCos = Math.cos(S4.angle), e23.penumbraCos = Math.cos(S4.angle * (1 - S4.penumbra)), e23.decay = S4.decay, r3.spot[p2] = e23;
        let i4 = S4.shadow;
        if (S4.map && (r3.spotLightMap[y2] = S4.map, y2++, i4.updateMatrices(S4), S4.castShadow && b2++), r3.spotLightMatrix[p2] = i4.matrix, S4.castShadow) {
          let e24 = n2.get(S4);
          e24.shadowIntensity = i4.intensity, e24.shadowBias = i4.bias, e24.shadowNormalBias = i4.normalBias, e24.shadowRadius = i4.radius, e24.shadowMapSize = i4.mapSize, r3.spotShadow[p2] = e24, r3.spotShadowMap[p2] = E2, v2++;
        }
        p2++;
      } else if (S4.isRectAreaLight) {
        let e23 = t2.get(S4);
        e23.color.copy(C2).multiplyScalar(w2), e23.halfWidth.set(S4.width * 0.5, 0, 0), e23.halfHeight.set(0, S4.height * 0.5, 0), r3.rectArea[m2] = e23, m2++;
      } else if (S4.isPointLight) {
        let e23 = t2.get(S4);
        if (e23.color.copy(S4.color).multiplyScalar(S4.intensity), e23.distance = S4.distance, e23.decay = S4.decay, S4.castShadow) {
          let e24 = S4.shadow, t3 = n2.get(S4);
          t3.shadowIntensity = e24.intensity, t3.shadowBias = e24.bias, t3.shadowNormalBias = e24.normalBias, t3.shadowRadius = e24.radius, t3.shadowMapSize = e24.mapSize, t3.shadowCameraNear = e24.camera.near, t3.shadowCameraFar = e24.camera.far, r3.pointShadow[f2] = t3, r3.pointShadowMap[f2] = E2, r3.pointShadowMatrix[f2] = S4.shadow.matrix, _2++;
        }
        r3.point[f2] = e23, f2++;
      } else if (S4.isHemisphereLight) {
        let e23 = t2.get(S4);
        e23.skyColor.copy(S4.color).multiplyScalar(w2), e23.groundColor.copy(S4.groundColor).multiplyScalar(w2), r3.hemi[h2] = e23, h2++;
      }
    }
    m2 > 0 && (e21.has(`OES_texture_float_linear`) === true ? (r3.rectAreaLTC1 = J.LTC_FLOAT_1, r3.rectAreaLTC2 = J.LTC_FLOAT_2) : (r3.rectAreaLTC1 = J.LTC_HALF_1, r3.rectAreaLTC2 = J.LTC_HALF_2)), r3.ambient[0] = a3, r3.ambient[1] = o3, r3.ambient[2] = s3;
    let S2 = r3.hash;
    (S2.sunLength !== c3 || S2.directionalLength !== d2 || S2.pointLength !== f2 || S2.spotLength !== p2 || S2.rectAreaLength !== m2 || S2.hemiLength !== h2 || S2.numSunShadows !== l2 || S2.numDirectionalShadows !== g2 || S2.numPointShadows !== _2 || S2.numSpotShadows !== v2 || S2.numSpotMaps !== y2 || S2.numLightProbes !== x2) && (r3.sun.length = c3, r3.directional.length = d2, r3.spot.length = p2, r3.rectArea.length = m2, r3.point.length = f2, r3.hemi.length = h2, r3.sunShadow.length = l2, r3.sunShadowMap.length = l2, r3.sunShadowMatrix.length = u2, r3.sunShadowCascade.length = u2, r3.directionalShadow.length = g2, r3.directionalShadowMap.length = g2, r3.directionalShadowMatrix.length = g2, r3.pointShadow.length = _2, r3.pointShadowMap.length = _2, r3.pointShadowMatrix.length = _2, r3.spotShadow.length = v2, r3.spotShadowMap.length = v2, r3.spotLightMatrix.length = v2 + y2 - b2, r3.spotLightMap.length = y2, r3.numSpotLightShadowsWithMaps = b2, r3.numLightProbes = x2, S2.sunLength = c3, S2.directionalLength = d2, S2.pointLength = f2, S2.spotLength = p2, S2.rectAreaLength = m2, S2.hemiLength = h2, S2.numSunShadows = l2, S2.numDirectionalShadows = g2, S2.numPointShadows = _2, S2.numSpotShadows = v2, S2.numSpotMaps = y2, S2.numLightProbes = x2, r3.version = Pl++);
  }
  function c2(e22, t3) {
    let n3 = 0, s3 = 0, c3 = 0, l2 = 0, u2 = 0, d2 = 0, f2 = t3.matrixWorldInverse;
    for (let t4 = 0, p2 = e22.length; t4 < p2; t4++) {
      let p3 = e22[t4];
      if (p3.isSunLight) {
        let e23 = r3.sun[n3];
        e23.direction.setFromMatrixPosition(p3.matrixWorld), e23.direction.transformDirection(f2), n3++;
      } else if (p3.isDirectionalLight) {
        let e23 = r3.directional[s3];
        e23.direction.setFromMatrixPosition(p3.matrixWorld), i2.setFromMatrixPosition(p3.target.matrixWorld), e23.direction.sub(i2), e23.direction.transformDirection(f2), s3++;
      } else if (p3.isSpotLight) {
        let e23 = r3.spot[l2];
        e23.position.setFromMatrixPosition(p3.matrixWorld), e23.position.applyMatrix4(f2), e23.direction.setFromMatrixPosition(p3.matrixWorld), i2.setFromMatrixPosition(p3.target.matrixWorld), e23.direction.sub(i2), e23.direction.transformDirection(f2), l2++;
      } else if (p3.isRectAreaLight) {
        let e23 = r3.rectArea[u2];
        e23.position.setFromMatrixPosition(p3.matrixWorld), e23.position.applyMatrix4(f2), o2.identity(), a2.copy(p3.matrixWorld), a2.premultiply(f2), o2.extractRotation(a2), e23.halfWidth.set(p3.width * 0.5, 0, 0), e23.halfHeight.set(0, p3.height * 0.5, 0), e23.halfWidth.applyMatrix4(o2), e23.halfHeight.applyMatrix4(o2), u2++;
      } else if (p3.isPointLight) {
        let e23 = r3.point[c3];
        e23.position.setFromMatrixPosition(p3.matrixWorld), e23.position.applyMatrix4(f2), c3++;
      } else if (p3.isHemisphereLight) {
        let e23 = r3.hemi[d2];
        e23.direction.setFromMatrixPosition(p3.matrixWorld), e23.direction.transformDirection(f2), d2++;
      }
    }
  }
  return {
    setup: s2,
    setupView: c2,
    state: r3
  };
}
function Ll(e21) {
  let t2 = new Il(e21), n2 = [], r3 = [], i2 = [];
  function a2(e22) {
    u2.camera = e22, n2.length = 0, r3.length = 0, i2.length = 0;
  }
  function o2(e22) {
    e22.isLightProbeGrid ? i2.push(e22) : n2.push(e22);
  }
  function s2(e22) {
    r3.push(e22);
  }
  function c2() {
    t2.setup(n2), i2.sort((e22, t3) => e22.priority - t3.priority || e22.id - t3.id);
  }
  function l2(e22) {
    t2.setupView(n2, e22);
  }
  let u2 = {
    lightsArray: n2,
    shadowsArray: r3,
    lightProbeGridArray: i2,
    camera: null,
    lights: t2,
    transmissionRenderTarget: {},
    textureUnits: 0
  };
  return {
    init: a2,
    state: u2,
    setupLights: c2,
    setupLightsView: l2,
    pushLight: o2,
    pushShadow: s2
  };
}
function Rl(e21) {
  let t2 = /* @__PURE__ */ new WeakMap();
  function n2(n3, r4 = 0) {
    let i2 = t2.get(n3), a2;
    return i2 === void 0 ? (a2 = new Ll(e21), t2.set(n3, [a2])) : r4 >= i2.length ? (a2 = new Ll(e21), i2.push(a2)) : a2 = i2[r4], a2;
  }
  function r3() {
    t2 = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n2,
    dispose: r3
  };
}
var zl = `void main() {
	gl_Position = vec4( position, 1.0 );
}`;
var Bl = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`;
var Vl = [new U(1, 0, 0), new U(-1, 0, 0), new U(0, 1, 0), new U(0, -1, 0), new U(0, 0, 1), new U(0, 0, -1)];
var Hl = [new U(0, -1, 0), new U(0, -1, 0), new U(0, 0, 1), new U(0, 0, -1), new U(0, -1, 0), new U(0, -1, 0)];
var Ul = new Nt();
var Wl = new U();
var Gl = new U();
function Kl(e21, t2, n2) {
  let i2 = new si(), a2 = new H(), s2 = new H(), c2 = new Ot(), l2 = new Ja(), u2 = new Ya(), d2 = {}, f2 = n2.maxTextureSize, p2 = {
    0: 1,
    1: 0,
    2: 2
  }, _2 = new Ga({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: {
        value: null
      },
      resolution: {
        value: new H()
      },
      radius: {
        value: 4
      }
    },
    vertexShader: zl,
    fragmentShader: Bl
  }), v2 = _2.clone();
  v2.defines.HORIZONTAL_PASS = 1;
  let y2 = new ur();
  y2.setAttribute(`position`, new Yn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  let b2 = new ei(y2, _2), x2 = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = 1;
  let S2 = this.type;
  this.render = function(t3, n3, l3) {
    if (x2.enabled === false || x2.autoUpdate === false && x2.needsUpdate === false || t3.length === 0) return;
    this.type === 2 && (z(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`), this.type = 1);
    let u3 = e21.getRenderTarget(), d3 = e21.getActiveCubeFace(), p3 = e21.getActiveMipmapLevel(), _3 = e21.state;
    _3.setBlending(0), _3.buffers.depth.getReversed() === true ? _3.buffers.color.setClear(0, 0, 0, 0) : _3.buffers.color.setClear(1, 1, 1, 1), _3.buffers.depth.setTest(true), _3.setScissorTest(false);
    let v3 = S2 !== this.type;
    v3 && n3.traverse(function(e22) {
      e22.material && (Array.isArray(e22.material) ? e22.material.forEach((e23) => e23.needsUpdate = true) : e22.material.needsUpdate = true);
    });
    for (let u4 = 0, d4 = t3.length; u4 < d4; u4++) {
      let d5 = t3[u4], p4 = d5.shadow;
      if (p4 === void 0) {
        z(`WebGLShadowMap:`, d5, `has no shadow.`);
        continue;
      }
      if (p4.autoUpdate === false && p4.needsUpdate === false) continue;
      a2.copy(p4.mapSize);
      let y3 = p4.getFrameExtents();
      a2.multiply(y3), s2.copy(p4.mapSize), (a2.x > f2 || a2.y > f2) && (a2.x > f2 && (s2.x = Math.floor(f2 / y3.x), a2.x = s2.x * y3.x, p4.mapSize.x = s2.x), a2.y > f2 && (s2.y = Math.floor(f2 / y3.y), a2.y = s2.y * y3.y, p4.mapSize.y = s2.y));
      let b3 = e21.state.buffers.depth.getReversed();
      if (p4.camera._reversedDepth = b3, p4.map === null || v3 === true) {
        if (p4.map !== null && (p4.map.depthTexture !== null && (p4.map.depthTexture.dispose(), p4.map.depthTexture = null), p4.map.dispose()), this.type === 3) {
          if (d5.isPointLight) {
            z(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);
            continue;
          }
          p4.map = new At(a2.x, a2.y, {
            format: k,
            type: g,
            minFilter: o,
            magFilter: o,
            generateMipmaps: false
          }), p4.map.texture.name = d5.name + `.shadowMap`, p4.map.depthTexture = new fi(a2.x, a2.y, h), p4.map.depthTexture.name = d5.name + `.shadowMapDepth`, p4.map.depthTexture.format = T, p4.map.depthTexture.compareFunction = null, p4.map.depthTexture.minFilter = r, p4.map.depthTexture.magFilter = r;
        } else d5.isPointLight ? (p4.map = new ls(a2.x), p4.map.depthTexture = new pi(a2.x, m)) : (p4.map = new At(a2.x, a2.y), p4.map.depthTexture = new fi(a2.x, a2.y, m)), p4.map.depthTexture.name = d5.name + `.shadowMap`, p4.map.depthTexture.format = T, this.type === 1 ? (p4.map.depthTexture.compareFunction = b3 ? 518 : 515, p4.map.depthTexture.minFilter = o, p4.map.depthTexture.magFilter = o) : (p4.map.depthTexture.compareFunction = null, p4.map.depthTexture.minFilter = r, p4.map.depthTexture.magFilter = r);
        p4.camera.updateProjectionMatrix();
      }
      p4.map.isWebGLCubeRenderTarget !== true && (p4.map.width !== a2.x || p4.map.height !== a2.y) && p4.map.setSize(a2.x, a2.y);
      let x3 = p4.map.isWebGLCubeRenderTarget ? 6 : p4.getViewportCount();
      d5.isPointLight !== true && p4.updateMatrices(d5, l3);
      let S3 = p4.camera.layers.mask & 4294967294 ? p4.camera.layers : l3.layers;
      for (let t4 = 0; t4 < x3; t4++) {
        let r3 = p4.getCamera(t4);
        if (d5.isPointLight) {
          let e22 = p4.camera, n4 = p4.matrix, r4 = d5.distance || e22.far;
          r4 !== e22.far && (e22.far = r4, e22.updateProjectionMatrix()), Wl.setFromMatrixPosition(d5.matrixWorld), e22.position.copy(Wl), Gl.copy(e22.position), Gl.add(Vl[t4]), e22.up.copy(Hl[t4]), e22.lookAt(Gl), e22.updateMatrixWorld(), n4.makeTranslation(-Wl.x, -Wl.y, -Wl.z), Ul.multiplyMatrices(e22.projectionMatrix, e22.matrixWorldInverse), p4._frustum.setFromProjectionMatrix(Ul, e22.coordinateSystem, e22.reversedDepth);
        }
        if (p4.map.isWebGLCubeRenderTarget) e21.setRenderTarget(p4.map, t4), e21.clear();
        else {
          t4 === 0 && (e21.setRenderTarget(p4.map), e21.clear());
          let n4 = p4.getViewport(t4);
          c2.set(s2.x * n4.x, s2.y * n4.y, s2.x * n4.z, s2.y * n4.w), _3.viewport(c2);
        }
        i2 = p4.getFrustum(t4), E2(n3, l3, r3, d5, S3, this.type);
      }
      p4.isPointLightShadow !== true && this.type === 3 && C2(p4, l3), p4.needsUpdate = false;
    }
    S2 = this.type, x2.needsUpdate = false, e21.setRenderTarget(u3, d3, p3);
  };
  function C2(n3, r3) {
    let i3 = t2.update(b2);
    _2.defines.VSM_SAMPLES !== n3.blurSamples && (_2.defines.VSM_SAMPLES = n3.blurSamples, v2.defines.VSM_SAMPLES = n3.blurSamples, _2.needsUpdate = true, v2.needsUpdate = true), n3.mapPass === null ? n3.mapPass = new At(a2.x, a2.y, {
      format: k,
      type: g
    }) : (n3.mapPass.width !== n3.map.width || n3.mapPass.height !== n3.map.height) && n3.mapPass.setSize(n3.map.width, n3.map.height), _2.uniforms.shadow_pass.value = n3.map.depthTexture, _2.uniforms.resolution.value.set(n3.map.width, n3.map.height), _2.uniforms.radius.value = n3.radius, e21.setRenderTarget(n3.mapPass), e21.clear(), e21.renderBufferDirect(r3, null, i3, _2, b2, null), v2.uniforms.shadow_pass.value = n3.mapPass.texture, v2.uniforms.resolution.value.set(n3.map.width, n3.map.height), v2.uniforms.radius.value = n3.radius, e21.setRenderTarget(n3.map), e21.clear(), e21.renderBufferDirect(r3, null, i3, v2, b2, null);
  }
  function w2(t3, n3, r3, i3) {
    let a3 = null, o2 = r3.isPointLight === true ? t3.customDistanceMaterial : t3.customDepthMaterial;
    if (o2 !== void 0) a3 = o2;
    else if (a3 = r3.isPointLight === true ? u2 : l2, e21.localClippingEnabled && n3.clipShadows === true && Array.isArray(n3.clippingPlanes) && n3.clippingPlanes.length !== 0 || n3.displacementMap && n3.displacementScale !== 0 || n3.alphaMap && n3.alphaTest > 0 || n3.map && n3.alphaTest > 0 || n3.alphaToCoverage === true) {
      let e22 = a3.uuid, t4 = n3.uuid, r4 = d2[e22];
      r4 === void 0 && (r4 = {}, d2[e22] = r4);
      let i4 = r4[t4];
      i4 === void 0 && (i4 = a3.clone(), r4[t4] = i4, n3.addEventListener(`dispose`, D2)), a3 = i4;
    }
    if (a3.visible = n3.visible, a3.wireframe = n3.wireframe, i3 === 3 ? a3.side = n3.shadowSide === null ? n3.side : n3.shadowSide : a3.side = n3.shadowSide === null ? p2[n3.side] : n3.shadowSide, a3.alphaMap = n3.alphaMap, a3.alphaTest = n3.alphaToCoverage === true ? 0.5 : n3.alphaTest, a3.map = n3.map, a3.clipShadows = n3.clipShadows, a3.clippingPlanes = n3.clippingPlanes, a3.clipIntersection = n3.clipIntersection, a3.displacementMap = n3.displacementMap, a3.displacementScale = n3.displacementScale, a3.displacementBias = n3.displacementBias, a3.wireframeLinewidth = n3.wireframeLinewidth, a3.linewidth = n3.linewidth, r3.isPointLight === true && a3.isMeshDistanceMaterial === true) {
      let t4 = e21.properties.get(a3);
      t4.light = r3;
    }
    return a3;
  }
  function E2(n3, r3, a3, o2, s3, c3) {
    if (n3.visible === false) return;
    if (n3.layers.test(s3) && (n3.isMesh || n3.isLine || n3.isPoints) && (n3.castShadow || n3.receiveShadow && c3 === 3) && (!n3.frustumCulled || n3.intersectsFrustum(i2))) {
      n3.modelViewMatrix.multiplyMatrices(a3.matrixWorldInverse, n3.matrixWorld);
      let i3 = t2.update(n3), s4 = n3.material;
      if (Array.isArray(s4)) {
        let t3 = i3.groups;
        for (let l4 = 0, u3 = t3.length; l4 < u3; l4++) {
          let u4 = t3[l4], d3 = s4[u4.materialIndex];
          if (d3 && d3.visible) {
            let t4 = w2(n3, d3, o2, c3);
            n3.onBeforeShadow(e21, n3, r3, a3, i3, t4, u4), e21.renderBufferDirect(a3, null, i3, t4, n3, u4), n3.onAfterShadow(e21, n3, r3, a3, i3, t4, u4);
          }
        }
      } else if (s4.visible) {
        let t3 = w2(n3, s4, o2, c3);
        n3.onBeforeShadow(e21, n3, r3, a3, i3, t3, null), e21.renderBufferDirect(a3, null, i3, t3, n3, null), n3.onAfterShadow(e21, n3, r3, a3, i3, t3, null);
      }
    }
    let l3 = n3.children;
    for (let e22 = 0, t3 = l3.length; e22 < t3; e22++) E2(l3[e22], r3, a3, o2, s3, c3);
  }
  function D2(e22) {
    e22.target.removeEventListener(`dispose`, D2);
    for (let t3 in d2) {
      let n3 = d2[t3], r3 = e22.target.uuid;
      r3 in n3 && (n3[r3].dispose(), delete n3[r3]);
    }
  }
}
function ql(e21, t2) {
  function n2() {
    let t3 = false, n3 = new Ot(), r4 = null, i3 = new Ot(0, 0, 0, 0);
    return {
      setMask: function(n4) {
        r4 !== n4 && !t3 && (e21.colorMask(n4, n4, n4, n4), r4 = n4);
      },
      setLocked: function(e22) {
        t3 = e22;
      },
      setClear: function(t4, r5, a3, o3, s3) {
        s3 === true && (t4 *= o3, r5 *= o3, a3 *= o3), n3.set(t4, r5, a3, o3), i3.equals(n3) === false && (e21.clearColor(t4, r5, a3, o3), i3.copy(n3));
      },
      reset: function() {
        t3 = false, r4 = null, i3.set(-1, 0, 0, 0);
      }
    };
  }
  function r3() {
    let n3 = false, r4 = false, i3 = null, a3 = null, o3 = null;
    return {
      setReversed: function(e22) {
        if (r4 !== e22) {
          let n4 = t2.get(`EXT_clip_control`);
          e22 ? n4.clipControlEXT(n4.LOWER_LEFT_EXT, n4.ZERO_TO_ONE_EXT) : n4.clipControlEXT(n4.LOWER_LEFT_EXT, n4.NEGATIVE_ONE_TO_ONE_EXT), r4 = e22;
          let i4 = o3;
          o3 = null, this.setClear(i4);
        }
      },
      getReversed: function() {
        return r4;
      },
      setTest: function(t3) {
        t3 ? P2(e21.DEPTH_TEST) : ue2(e21.DEPTH_TEST);
      },
      setMask: function(t3) {
        i3 !== t3 && !n3 && (e21.depthMask(t3), i3 = t3);
      },
      setFunc: function(t3) {
        if (r4 && (t3 = $e[t3]), a3 !== t3) {
          switch (t3) {
            case 0:
              e21.depthFunc(e21.NEVER);
              break;
            case 1:
              e21.depthFunc(e21.ALWAYS);
              break;
            case 2:
              e21.depthFunc(e21.LESS);
              break;
            case 3:
              e21.depthFunc(e21.LEQUAL);
              break;
            case 4:
              e21.depthFunc(e21.EQUAL);
              break;
            case 5:
              e21.depthFunc(e21.GEQUAL);
              break;
            case 6:
              e21.depthFunc(e21.GREATER);
              break;
            case 7:
              e21.depthFunc(e21.NOTEQUAL);
              break;
            default:
              e21.depthFunc(e21.LEQUAL);
          }
          a3 = t3;
        }
      },
      setLocked: function(e22) {
        n3 = e22;
      },
      setClear: function(t3) {
        o3 !== t3 && (o3 = t3, r4 && (t3 = 1 - t3), e21.clearDepth(t3));
      },
      reset: function() {
        n3 = false, i3 = null, a3 = null, o3 = null, r4 = false;
      }
    };
  }
  function i2() {
    let t3 = false, n3 = null, r4 = null, i3 = null, a3 = null, o3 = null, s3 = null, c3 = null, l3 = null;
    return {
      setTest: function(n4) {
        t3 || (n4 ? P2(e21.STENCIL_TEST) : ue2(e21.STENCIL_TEST));
      },
      setMask: function(r5) {
        n3 !== r5 && !t3 && (e21.stencilMask(r5), n3 = r5);
      },
      setFunc: function(t4, n4, o4) {
        (r4 !== t4 || i3 !== n4 || a3 !== o4) && (e21.stencilFunc(t4, n4, o4), r4 = t4, i3 = n4, a3 = o4);
      },
      setOp: function(t4, n4, r5) {
        (o3 !== t4 || s3 !== n4 || c3 !== r5) && (e21.stencilOp(t4, n4, r5), o3 = t4, s3 = n4, c3 = r5);
      },
      setLocked: function(e22) {
        t3 = e22;
      },
      setClear: function(t4) {
        l3 !== t4 && (e21.clearStencil(t4), l3 = t4);
      },
      reset: function() {
        t3 = false, n3 = null, r4 = null, i3 = null, a3 = null, o3 = null, s3 = null, c3 = null, l3 = null;
      }
    };
  }
  let a2 = new n2(), o2 = new r3(), s2 = new i2(), c2 = {}, l2 = /* @__PURE__ */ new WeakMap(), u2 = {}, d2 = {}, f2 = {}, p2 = /* @__PURE__ */ new WeakMap(), m2 = [], h2 = null, g2 = false, _2 = null, v2 = null, y2 = null, b2 = null, x2 = null, S2 = null, C2 = null, w2 = new K(0, 0, 0), T2 = 0, E2 = false, D2 = null, O2 = null, k2 = null, A2 = null, ee2 = null, j2 = e21.getParameter(e21.MAX_COMBINED_TEXTURE_IMAGE_UNITS), te2 = false, M2 = 0, ne2 = e21.getParameter(e21.VERSION);
  ne2.indexOf(`WebGL`) === -1 ? ne2.indexOf(`OpenGL ES`) !== -1 && (M2 = parseFloat(/^OpenGL ES (\d)/.exec(ne2)[1]), te2 = M2 >= 2) : (M2 = parseFloat(/^WebGL (\d)/.exec(ne2)[1]), te2 = M2 >= 1);
  let N2 = null, re2 = {}, ie2 = e21.getParameter(e21.SCISSOR_BOX), ae2 = e21.getParameter(e21.VIEWPORT), oe2 = new Ot().fromArray(ie2), se2 = new Ot().fromArray(ae2);
  function ce2(t3, n3, r4, i3) {
    let a3 = new Uint8Array(4), o3 = e21.createTexture();
    e21.bindTexture(t3, o3), e21.texParameteri(t3, e21.TEXTURE_MIN_FILTER, e21.NEAREST), e21.texParameteri(t3, e21.TEXTURE_MAG_FILTER, e21.NEAREST);
    for (let o4 = 0; o4 < r4; o4++) t3 === e21.TEXTURE_3D || t3 === e21.TEXTURE_2D_ARRAY ? e21.texImage3D(n3, 0, e21.RGBA, 1, 1, i3, 0, e21.RGBA, e21.UNSIGNED_BYTE, a3) : e21.texImage2D(n3 + o4, 0, e21.RGBA, 1, 1, 0, e21.RGBA, e21.UNSIGNED_BYTE, a3);
    return o3;
  }
  let le2 = {};
  le2[e21.TEXTURE_2D] = ce2(e21.TEXTURE_2D, e21.TEXTURE_2D, 1), le2[e21.TEXTURE_CUBE_MAP] = ce2(e21.TEXTURE_CUBE_MAP, e21.TEXTURE_CUBE_MAP_POSITIVE_X, 6), le2[e21.TEXTURE_2D_ARRAY] = ce2(e21.TEXTURE_2D_ARRAY, e21.TEXTURE_2D_ARRAY, 1, 1), le2[e21.TEXTURE_3D] = ce2(e21.TEXTURE_3D, e21.TEXTURE_3D, 1, 1), a2.setClear(0, 0, 0, 1), o2.setClear(1), s2.setClear(0), P2(e21.DEPTH_TEST), o2.setFunc(3), ve2(false), ye2(1), P2(e21.CULL_FACE), ge2(0);
  function P2(t3) {
    u2[t3] !== true && (e21.enable(t3), u2[t3] = true);
  }
  function ue2(t3) {
    u2[t3] !== false && (e21.disable(t3), u2[t3] = false);
  }
  function de2(t3, n3) {
    return f2[t3] !== n3 && (e21.bindFramebuffer(t3, n3), f2[t3] = n3, t3 === e21.DRAW_FRAMEBUFFER && (f2[e21.FRAMEBUFFER] = n3), t3 === e21.FRAMEBUFFER && (f2[e21.DRAW_FRAMEBUFFER] = n3), true);
  }
  function fe2(t3, n3) {
    let r4 = m2, i3 = false;
    if (t3) {
      r4 = p2.get(n3), r4 === void 0 && (r4 = [], p2.set(n3, r4));
      let a3 = t3.textures;
      if (r4.length !== a3.length || r4[0] !== e21.COLOR_ATTACHMENT0) {
        for (let t4 = 0, n4 = a3.length; t4 < n4; t4++) r4[t4] = e21.COLOR_ATTACHMENT0 + t4;
        r4.length = a3.length, i3 = true;
      }
    } else r4[0] !== e21.BACK && (r4[0] = e21.BACK, i3 = true);
    i3 && e21.drawBuffers(r4);
  }
  function pe2(t3) {
    return h2 !== t3 && (e21.useProgram(t3), h2 = t3, true);
  }
  let me2 = {
    100: e21.FUNC_ADD,
    101: e21.FUNC_SUBTRACT,
    102: e21.FUNC_REVERSE_SUBTRACT
  };
  me2[103] = e21.MIN, me2[104] = e21.MAX;
  let he2 = {
    200: e21.ZERO,
    201: e21.ONE,
    202: e21.SRC_COLOR,
    204: e21.SRC_ALPHA,
    210: e21.SRC_ALPHA_SATURATE,
    208: e21.DST_COLOR,
    206: e21.DST_ALPHA,
    203: e21.ONE_MINUS_SRC_COLOR,
    205: e21.ONE_MINUS_SRC_ALPHA,
    209: e21.ONE_MINUS_DST_COLOR,
    207: e21.ONE_MINUS_DST_ALPHA,
    211: e21.CONSTANT_COLOR,
    212: e21.ONE_MINUS_CONSTANT_COLOR,
    213: e21.CONSTANT_ALPHA,
    214: e21.ONE_MINUS_CONSTANT_ALPHA
  };
  function ge2(t3, n3, r4, i3, a3, o3, s3, c3, l3, u3) {
    if (t3 === 0) g2 === true && (ue2(e21.BLEND), g2 = false);
    else if (g2 === false && (P2(e21.BLEND), g2 = true), t3 !== 5) {
      if (t3 !== _2 || u3 !== E2) {
        if ((v2 !== 100 || x2 !== 100) && (e21.blendEquation(e21.FUNC_ADD), v2 = 100, x2 = 100), u3) switch (t3) {
          case 1:
            e21.blendFuncSeparate(e21.ONE, e21.ONE_MINUS_SRC_ALPHA, e21.ONE, e21.ONE_MINUS_SRC_ALPHA);
            break;
          case 2:
            e21.blendFunc(e21.ONE, e21.ONE);
            break;
          case 3:
            e21.blendFuncSeparate(e21.ZERO, e21.ONE_MINUS_SRC_COLOR, e21.ZERO, e21.ONE);
            break;
          case 4:
            e21.blendFuncSeparate(e21.DST_COLOR, e21.ONE_MINUS_SRC_ALPHA, e21.ZERO, e21.ONE);
            break;
          default:
            B(`WebGLState: Invalid blending: `, t3);
        }
        else switch (t3) {
          case 1:
            e21.blendFuncSeparate(e21.SRC_ALPHA, e21.ONE_MINUS_SRC_ALPHA, e21.ONE, e21.ONE_MINUS_SRC_ALPHA);
            break;
          case 2:
            e21.blendFuncSeparate(e21.SRC_ALPHA, e21.ONE, e21.ONE, e21.ONE);
            break;
          case 3:
            B(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);
            break;
          case 4:
            B(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);
            break;
          default:
            B(`WebGLState: Invalid blending: `, t3);
        }
        y2 = null, b2 = null, S2 = null, C2 = null, w2.set(0, 0, 0), T2 = 0, _2 = t3, E2 = u3;
      }
    } else a3 ||= n3, o3 ||= r4, s3 ||= i3, (n3 !== v2 || a3 !== x2) && (e21.blendEquationSeparate(me2[n3], me2[a3]), v2 = n3, x2 = a3), (r4 !== y2 || i3 !== b2 || o3 !== S2 || s3 !== C2) && (e21.blendFuncSeparate(he2[r4], he2[i3], he2[o3], he2[s3]), y2 = r4, b2 = i3, S2 = o3, C2 = s3), (c3.equals(w2) === false || l3 !== T2) && (e21.blendColor(c3.r, c3.g, c3.b, l3), w2.copy(c3), T2 = l3), _2 = t3, E2 = false;
  }
  function _e2(t3, n3) {
    t3.side === 2 ? ue2(e21.CULL_FACE) : P2(e21.CULL_FACE);
    let r4 = t3.side === 1;
    n3 && (r4 = !r4), ve2(r4), t3.blending === 1 && t3.transparent === false ? ge2(0) : ge2(t3.blending, t3.blendEquation, t3.blendSrc, t3.blendDst, t3.blendEquationAlpha, t3.blendSrcAlpha, t3.blendDstAlpha, t3.blendColor, t3.blendAlpha, t3.premultipliedAlpha), o2.setFunc(t3.depthFunc), o2.setTest(t3.depthTest), o2.setMask(t3.depthWrite), a2.setMask(t3.colorWrite);
    let i3 = t3.stencilWrite;
    s2.setTest(i3), i3 && (s2.setMask(t3.stencilWriteMask), s2.setFunc(t3.stencilFunc, t3.stencilRef, t3.stencilFuncMask), s2.setOp(t3.stencilFail, t3.stencilZFail, t3.stencilZPass)), xe2(t3.polygonOffset, t3.polygonOffsetFactor, t3.polygonOffsetUnits), t3.alphaToCoverage === true ? P2(e21.SAMPLE_ALPHA_TO_COVERAGE) : ue2(e21.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function ve2(t3) {
    D2 !== t3 && (t3 ? e21.frontFace(e21.CW) : e21.frontFace(e21.CCW), D2 = t3);
  }
  function ye2(t3) {
    t3 === 0 ? ue2(e21.CULL_FACE) : (P2(e21.CULL_FACE), t3 !== O2 && (t3 === 1 ? e21.cullFace(e21.BACK) : t3 === 2 ? e21.cullFace(e21.FRONT) : e21.cullFace(e21.FRONT_AND_BACK))), O2 = t3;
  }
  function be2(t3) {
    t3 !== k2 && (te2 && e21.lineWidth(t3), k2 = t3);
  }
  function xe2(t3, n3, r4) {
    t3 ? (P2(e21.POLYGON_OFFSET_FILL), (A2 !== n3 || ee2 !== r4) && (A2 = n3, ee2 = r4, o2.getReversed() && (n3 = -n3, r4 = -r4), e21.polygonOffset(n3, r4))) : ue2(e21.POLYGON_OFFSET_FILL);
  }
  function Se2(t3) {
    t3 ? P2(e21.SCISSOR_TEST) : ue2(e21.SCISSOR_TEST);
  }
  function Ce2(t3) {
    t3 === void 0 && (t3 = e21.TEXTURE0 + j2 - 1), N2 !== t3 && (e21.activeTexture(t3), N2 = t3);
  }
  function we2(t3, n3, r4) {
    r4 === void 0 && (r4 = N2 === null ? e21.TEXTURE0 + j2 - 1 : N2);
    let i3 = re2[r4];
    i3 === void 0 && (i3 = {
      type: void 0,
      texture: void 0
    }, re2[r4] = i3), (i3.type !== t3 || i3.texture !== n3) && (N2 !== r4 && (e21.activeTexture(r4), N2 = r4), e21.bindTexture(t3, n3 || le2[t3]), i3.type = t3, i3.texture = n3);
  }
  function Te2() {
    let t3 = re2[N2];
    t3 !== void 0 && t3.type !== void 0 && (e21.bindTexture(t3.type, null), t3.type = void 0, t3.texture = void 0);
  }
  function Ee2() {
    try {
      e21.compressedTexImage2D(...arguments);
    } catch (e22) {
      B(`WebGLState:`, e22);
    }
  }
  function De2() {
    try {
      e21.compressedTexImage3D(...arguments);
    } catch (e22) {
      B(`WebGLState:`, e22);
    }
  }
  function Oe2() {
    try {
      e21.texSubImage2D(...arguments);
    } catch (e22) {
      B(`WebGLState:`, e22);
    }
  }
  function ke2() {
    try {
      e21.texSubImage3D(...arguments);
    } catch (e22) {
      B(`WebGLState:`, e22);
    }
  }
  function Ae2() {
    try {
      e21.compressedTexSubImage2D(...arguments);
    } catch (e22) {
      B(`WebGLState:`, e22);
    }
  }
  function je2() {
    try {
      e21.compressedTexSubImage3D(...arguments);
    } catch (e22) {
      B(`WebGLState:`, e22);
    }
  }
  function Me2() {
    try {
      e21.texStorage2D(...arguments);
    } catch (e22) {
      B(`WebGLState:`, e22);
    }
  }
  function Ne2() {
    try {
      e21.texStorage3D(...arguments);
    } catch (e22) {
      B(`WebGLState:`, e22);
    }
  }
  function Pe2() {
    try {
      e21.texImage2D(...arguments);
    } catch (e22) {
      B(`WebGLState:`, e22);
    }
  }
  function F2() {
    try {
      e21.texImage3D(...arguments);
    } catch (e22) {
      B(`WebGLState:`, e22);
    }
  }
  function Fe2(t3) {
    return d2[t3] === void 0 ? e21.getParameter(t3) : d2[t3];
  }
  function Ie2(t3, n3) {
    d2[t3] !== n3 && (e21.pixelStorei(t3, n3), d2[t3] = n3);
  }
  function Le2(t3) {
    oe2.equals(t3) === false && (e21.scissor(t3.x, t3.y, t3.z, t3.w), oe2.copy(t3));
  }
  function I2(t3) {
    se2.equals(t3) === false && (e21.viewport(t3.x, t3.y, t3.z, t3.w), se2.copy(t3));
  }
  function Re2(t3, n3) {
    let r4 = l2.get(n3);
    r4 === void 0 && (r4 = /* @__PURE__ */ new WeakMap(), l2.set(n3, r4));
    let i3 = r4.get(t3);
    i3 === void 0 && (i3 = e21.getUniformBlockIndex(n3, t3.name), e21.uniformBlockBinding(n3, i3, i3), r4.set(t3, i3));
  }
  function ze2(t3, n3, r4) {
    let i3 = l2.get(n3).get(t3);
    c2[i3] !== r4 && (e21.bindBufferBase(e21.UNIFORM_BUFFER, i3, r4), c2[i3] = r4);
  }
  function L2() {
    e21.disable(e21.BLEND), e21.disable(e21.CULL_FACE), e21.disable(e21.DEPTH_TEST), e21.disable(e21.POLYGON_OFFSET_FILL), e21.disable(e21.SCISSOR_TEST), e21.disable(e21.STENCIL_TEST), e21.disable(e21.SAMPLE_ALPHA_TO_COVERAGE), e21.blendEquation(e21.FUNC_ADD), e21.blendFunc(e21.ONE, e21.ZERO), e21.blendFuncSeparate(e21.ONE, e21.ZERO, e21.ONE, e21.ZERO), e21.blendColor(0, 0, 0, 0), e21.colorMask(true, true, true, true), e21.clearColor(0, 0, 0, 0), e21.depthMask(true), e21.depthFunc(e21.LESS), o2.setReversed(false), e21.clearDepth(1), e21.stencilMask(4294967295), e21.stencilFunc(e21.ALWAYS, 0, 4294967295), e21.stencilOp(e21.KEEP, e21.KEEP, e21.KEEP), e21.clearStencil(0), e21.cullFace(e21.BACK), e21.frontFace(e21.CCW), e21.polygonOffset(0, 0), e21.activeTexture(e21.TEXTURE0), e21.bindFramebuffer(e21.FRAMEBUFFER, null), e21.bindFramebuffer(e21.DRAW_FRAMEBUFFER, null), e21.bindFramebuffer(e21.READ_FRAMEBUFFER, null), e21.useProgram(null), e21.lineWidth(1), e21.scissor(0, 0, e21.canvas.width, e21.canvas.height), e21.viewport(0, 0, e21.canvas.width, e21.canvas.height), e21.pixelStorei(e21.PACK_ALIGNMENT, 4), e21.pixelStorei(e21.UNPACK_ALIGNMENT, 4), e21.pixelStorei(e21.UNPACK_FLIP_Y_WEBGL, false), e21.pixelStorei(e21.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false), e21.pixelStorei(e21.UNPACK_COLORSPACE_CONVERSION_WEBGL, e21.BROWSER_DEFAULT_WEBGL), e21.pixelStorei(e21.PACK_ROW_LENGTH, 0), e21.pixelStorei(e21.PACK_SKIP_PIXELS, 0), e21.pixelStorei(e21.PACK_SKIP_ROWS, 0), e21.pixelStorei(e21.UNPACK_ROW_LENGTH, 0), e21.pixelStorei(e21.UNPACK_IMAGE_HEIGHT, 0), e21.pixelStorei(e21.UNPACK_SKIP_PIXELS, 0), e21.pixelStorei(e21.UNPACK_SKIP_ROWS, 0), e21.pixelStorei(e21.UNPACK_SKIP_IMAGES, 0), u2 = {}, d2 = {}, N2 = null, re2 = {}, f2 = {}, c2 = {}, p2 = /* @__PURE__ */ new WeakMap(), m2 = [], h2 = null, g2 = false, _2 = null, v2 = null, y2 = null, b2 = null, x2 = null, S2 = null, C2 = null, w2 = new K(0, 0, 0), T2 = 0, E2 = false, D2 = null, O2 = null, k2 = null, A2 = null, ee2 = null, oe2.set(0, 0, e21.canvas.width, e21.canvas.height), se2.set(0, 0, e21.canvas.width, e21.canvas.height), a2.reset(), o2.reset(), s2.reset();
  }
  return {
    buffers: {
      color: a2,
      depth: o2,
      stencil: s2
    },
    enable: P2,
    disable: ue2,
    bindFramebuffer: de2,
    drawBuffers: fe2,
    useProgram: pe2,
    setBlending: ge2,
    setMaterial: _e2,
    setFlipSided: ve2,
    setCullFace: ye2,
    setLineWidth: be2,
    setPolygonOffset: xe2,
    setScissorTest: Se2,
    activeTexture: Ce2,
    bindTexture: we2,
    unbindTexture: Te2,
    compressedTexImage2D: Ee2,
    compressedTexImage3D: De2,
    texImage2D: Pe2,
    texImage3D: F2,
    pixelStorei: Ie2,
    getParameter: Fe2,
    updateUBOMapping: Re2,
    uniformBlockBinding: ze2,
    texStorage2D: Me2,
    texStorage3D: Ne2,
    texSubImage2D: Oe2,
    texSubImage3D: ke2,
    compressedTexSubImage2D: Ae2,
    compressedTexSubImage3D: je2,
    scissor: Le2,
    viewport: I2,
    reset: L2
  };
}
function Jl(l2, u2, d2, f2, p2, m2, h2) {
  let g2 = u2.has(`WEBGL_multisampled_render_to_texture`) ? u2.get(`WEBGL_multisampled_render_to_texture`) : null, _2 = typeof navigator > `u` ? false : /OculusBrowser/g.test(navigator.userAgent), v2 = new H(), y2 = /* @__PURE__ */ new WeakMap(), b2 = /* @__PURE__ */ new Set(), x2, S2 = /* @__PURE__ */ new WeakMap(), C2 = /* @__PURE__ */ new Set(), w2 = new FinalizationRegistry((e21) => C2.delete(e21)), T2 = false;
  try {
    T2 = typeof OffscreenCanvas < `u` && new OffscreenCanvas(1, 1).getContext(`2d`) !== null;
  } catch {
  }
  function D2(e21, t2) {
    return T2 ? new OffscreenCanvas(e21, t2) : Ke(`canvas`);
  }
  function O2(e21, t2, n2) {
    let r3 = 1, i2 = L2(e21);
    if ((i2.width > n2 || i2.height > n2) && (r3 = n2 / Math.max(i2.width, i2.height)), r3 < 1) {
      if (typeof HTMLImageElement < `u` && e21 instanceof HTMLImageElement || typeof HTMLCanvasElement < `u` && e21 instanceof HTMLCanvasElement || typeof ImageBitmap < `u` && e21 instanceof ImageBitmap || typeof VideoFrame < `u` && e21 instanceof VideoFrame) {
        let n3 = Math.floor(r3 * i2.width), a2 = Math.floor(r3 * i2.height);
        x2 === void 0 && (x2 = D2(n3, a2));
        let o2 = t2 ? D2(n3, a2) : x2;
        return o2.width = n3, o2.height = a2, o2.getContext(`2d`).drawImage(e21, 0, 0, n3, a2), z(`WebGLRenderer: Texture has been resized from (` + i2.width + `x` + i2.height + `) to (` + n3 + `x` + a2 + `).`), o2;
      }
      return `data` in e21 && z(`WebGLRenderer: Image in DataTexture is too big (` + i2.width + `x` + i2.height + `).`), e21;
    }
    return e21;
  }
  function k2(e21) {
    return e21.generateMipmaps;
  }
  function A2(e21) {
    l2.generateMipmap(e21);
  }
  function ee2(e21) {
    return e21.isWebGLCubeRenderTarget ? l2.TEXTURE_CUBE_MAP : e21.isWebGL3DRenderTarget ? l2.TEXTURE_3D : e21.isWebGLArrayRenderTarget || e21.isCompressedArrayTexture ? l2.TEXTURE_2D_ARRAY : l2.TEXTURE_2D;
  }
  function j2(e21, t2, n2, r3, i2, a2 = false) {
    if (e21 !== null) {
      if (l2[e21] !== void 0) return l2[e21];
      z(`WebGLRenderer: Attempt to use non-existing WebGL internal format '` + e21 + `'`);
    }
    let o2;
    r3 && (o2 = u2.get(`EXT_texture_norm16`), o2 || z(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));
    let s2 = t2;
    if (t2 === l2.RED && (n2 === l2.FLOAT && (s2 = l2.R32F), n2 === l2.HALF_FLOAT && (s2 = l2.R16F), n2 === l2.UNSIGNED_BYTE && (s2 = l2.R8), n2 === l2.UNSIGNED_SHORT && o2 && (s2 = o2.R16_EXT), n2 === l2.SHORT && o2 && (s2 = o2.R16_SNORM_EXT)), t2 === l2.RED_INTEGER && (n2 === l2.UNSIGNED_BYTE && (s2 = l2.R8UI), n2 === l2.UNSIGNED_SHORT && (s2 = l2.R16UI), n2 === l2.UNSIGNED_INT && (s2 = l2.R32UI), n2 === l2.BYTE && (s2 = l2.R8I), n2 === l2.SHORT && (s2 = l2.R16I), n2 === l2.INT && (s2 = l2.R32I)), t2 === l2.RG && (n2 === l2.FLOAT && (s2 = l2.RG32F), n2 === l2.HALF_FLOAT && (s2 = l2.RG16F), n2 === l2.UNSIGNED_BYTE && (s2 = l2.RG8), n2 === l2.UNSIGNED_SHORT && o2 && (s2 = o2.RG16_EXT), n2 === l2.SHORT && o2 && (s2 = o2.RG16_SNORM_EXT)), t2 === l2.RG_INTEGER && (n2 === l2.UNSIGNED_BYTE && (s2 = l2.RG8UI), n2 === l2.UNSIGNED_SHORT && (s2 = l2.RG16UI), n2 === l2.UNSIGNED_INT && (s2 = l2.RG32UI), n2 === l2.BYTE && (s2 = l2.RG8I), n2 === l2.SHORT && (s2 = l2.RG16I), n2 === l2.INT && (s2 = l2.RG32I)), t2 === l2.RGB_INTEGER && (n2 === l2.UNSIGNED_BYTE && (s2 = l2.RGB8UI), n2 === l2.UNSIGNED_SHORT && (s2 = l2.RGB16UI), n2 === l2.UNSIGNED_INT && (s2 = l2.RGB32UI), n2 === l2.BYTE && (s2 = l2.RGB8I), n2 === l2.SHORT && (s2 = l2.RGB16I), n2 === l2.INT && (s2 = l2.RGB32I)), t2 === l2.RGBA_INTEGER && (n2 === l2.UNSIGNED_BYTE && (s2 = l2.RGBA8UI), n2 === l2.UNSIGNED_SHORT && (s2 = l2.RGBA16UI), n2 === l2.UNSIGNED_INT && (s2 = l2.RGBA32UI), n2 === l2.BYTE && (s2 = l2.RGBA8I), n2 === l2.SHORT && (s2 = l2.RGBA16I), n2 === l2.INT && (s2 = l2.RGBA32I)), t2 === l2.RGB && (n2 === l2.UNSIGNED_SHORT && o2 && (s2 = o2.RGB16_EXT), n2 === l2.SHORT && o2 && (s2 = o2.RGB16_SNORM_EXT), n2 === l2.UNSIGNED_INT_5_9_9_9_REV && (s2 = l2.RGB9_E5), n2 === l2.UNSIGNED_INT_10F_11F_11F_REV && (s2 = l2.R11F_G11F_B10F)), t2 === l2.RGBA) {
      let e22 = a2 ? R : G.getTransfer(i2);
      n2 === l2.FLOAT && (s2 = l2.RGBA32F), n2 === l2.HALF_FLOAT && (s2 = l2.RGBA16F), n2 === l2.UNSIGNED_BYTE && (s2 = e22 === `srgb` ? l2.SRGB8_ALPHA8 : l2.RGBA8), n2 === l2.UNSIGNED_SHORT && o2 && (s2 = o2.RGBA16_EXT), n2 === l2.SHORT && o2 && (s2 = o2.RGBA16_SNORM_EXT), n2 === l2.UNSIGNED_SHORT_4_4_4_4 && (s2 = l2.RGBA4), n2 === l2.UNSIGNED_SHORT_5_5_5_1 && (s2 = l2.RGB5_A1);
    }
    return (s2 === l2.R16F || s2 === l2.R32F || s2 === l2.RG16F || s2 === l2.RG32F || s2 === l2.RGBA16F || s2 === l2.RGBA32F) && u2.get(`EXT_color_buffer_float`), s2;
  }
  function te2(e21, t2) {
    let n2;
    return e21 ? t2 === null || t2 === 1014 || t2 === 1020 ? n2 = l2.DEPTH24_STENCIL8 : t2 === 1015 ? n2 = l2.DEPTH32F_STENCIL8 : t2 === 1012 && (n2 = l2.DEPTH24_STENCIL8, z(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)) : t2 === null || t2 === 1014 || t2 === 1020 ? n2 = l2.DEPTH_COMPONENT24 : t2 === 1015 ? n2 = l2.DEPTH_COMPONENT32F : t2 === 1012 && (n2 = l2.DEPTH_COMPONENT16), n2;
  }
  function M2(e21, t2) {
    return k2(e21) === true || e21.isFramebufferTexture && e21.minFilter !== 1003 && e21.minFilter !== 1006 ? Math.log2(Math.max(t2.width, t2.height)) + 1 : e21.mipmaps.length > 0 ? e21.mipmaps.length : e21.isCompressedTexture && Array.isArray(e21.image) ? t2.mipmaps.length : 1;
  }
  function ne2(e21) {
    let t2 = new WeakRef(e21);
    f2.get(e21).__ref = t2, C2.add(t2), w2.register(e21, t2, t2);
  }
  function N2(e21) {
    let t2 = f2.get(e21).__ref;
    t2 !== void 0 && (C2.delete(t2), w2.unregister(t2));
  }
  function re2(e21) {
    ae2(e21.target);
  }
  function ie2(e21) {
    oe2(e21.target);
  }
  function ae2(e21) {
    e21.removeEventListener(`dispose`, re2), N2(e21), ce2(e21), e21.isVideoTexture && y2.delete(e21), e21.isHTMLTexture && b2.delete(e21);
  }
  function oe2(e21) {
    e21.removeEventListener(`dispose`, ie2), N2(e21), P2(e21);
  }
  function se2() {
    for (let e21 of C2) {
      let t2 = e21.deref();
      t2 !== void 0 && (t2.isRenderTarget === true ? oe2(t2) : ae2(t2));
    }
    C2.clear(), b2.clear();
  }
  function ce2(e21) {
    let t2 = f2.get(e21);
    if (t2.__webglInit === void 0) return;
    let n2 = e21.source, r3 = S2.get(n2);
    if (r3) {
      let i2 = r3[t2.__cacheKey];
      i2.usedTimes--, i2.usedTimes === 0 && le2(e21), Object.keys(r3).length === 0 && S2.delete(n2);
    }
    f2.remove(e21);
  }
  function le2(e21) {
    let t2 = f2.get(e21);
    l2.deleteTexture(t2.__webglTexture);
    let n2 = e21.source, r3 = S2.get(n2);
    delete r3[t2.__cacheKey], h2.memory.textures--;
  }
  function P2(e21) {
    let t2 = f2.get(e21);
    t2.__depthDisposeCallback && t2.__depthDisposeCallback();
    let n2 = e21.depthTexture;
    if (n2 && n2.renderTarget === e21 && ae2(n2), e21.isWebGLCubeRenderTarget) for (let e22 = 0; e22 < 6; e22++) {
      if (Array.isArray(t2.__webglFramebuffer[e22])) for (let n3 = 0; n3 < t2.__webglFramebuffer[e22].length; n3++) l2.deleteFramebuffer(t2.__webglFramebuffer[e22][n3]);
      else l2.deleteFramebuffer(t2.__webglFramebuffer[e22]);
      t2.__webglDepthbuffer && l2.deleteRenderbuffer(t2.__webglDepthbuffer[e22]);
    }
    else {
      if (Array.isArray(t2.__webglFramebuffer)) for (let e22 = 0; e22 < t2.__webglFramebuffer.length; e22++) l2.deleteFramebuffer(t2.__webglFramebuffer[e22]);
      else l2.deleteFramebuffer(t2.__webglFramebuffer);
      if (t2.__webglDepthbuffer && l2.deleteRenderbuffer(t2.__webglDepthbuffer), t2.__webglMultisampledFramebuffer && l2.deleteFramebuffer(t2.__webglMultisampledFramebuffer), t2.__webglColorRenderbuffer) for (let e22 = 0; e22 < t2.__webglColorRenderbuffer.length; e22++) t2.__webglColorRenderbuffer[e22] && l2.deleteRenderbuffer(t2.__webglColorRenderbuffer[e22]);
      t2.__webglDepthRenderbuffer && l2.deleteRenderbuffer(t2.__webglDepthRenderbuffer);
    }
    let r3 = e21.textures;
    for (let e22 = 0, t3 = r3.length; e22 < t3; e22++) {
      let t4 = f2.get(r3[e22]);
      t4.__webglTexture && (l2.deleteTexture(t4.__webglTexture), h2.memory.textures--), f2.remove(r3[e22]);
    }
    f2.remove(e21);
  }
  let ue2 = 0;
  function de2() {
    ue2 = 0;
  }
  function fe2() {
    return ue2;
  }
  function pe2(e21) {
    ue2 = e21;
  }
  function me2() {
    let e21 = ue2;
    return e21 >= p2.maxTextures && z(`WebGLTextures: Trying to use ` + (e21 + 1) + ` texture units while this GPU supports only ` + p2.maxTextures), ue2 += 1, e21;
  }
  function he2(e21) {
    let t2 = [];
    return t2.push(e21.wrapS), t2.push(e21.wrapT), t2.push(e21.wrapR || 0), t2.push(e21.magFilter), t2.push(e21.minFilter), t2.push(e21.anisotropy), t2.push(e21.internalFormat), t2.push(e21.format), t2.push(e21.type), t2.push(e21.generateMipmaps), t2.push(e21.mipmapsAutoUpdate), t2.push(e21.premultiplyAlpha), t2.push(e21.flipY), t2.push(e21.unpackAlignment), t2.push(e21.colorSpace), t2.join();
  }
  function ge2(e21, t2) {
    let n2 = f2.get(e21);
    if (e21.isVideoTexture && Re2(e21), e21.isRenderTargetTexture === false && e21.isExternalTexture !== true && e21.version > 0 && n2.__version !== e21.version) {
      let r3 = e21.image;
      if (r3 === null) z(`WebGLRenderer: Texture marked for update but no image data found.`);
      else if (r3.complete === false) z(`WebGLRenderer: Texture marked for update but image is incomplete`);
      else {
        De2(n2, e21, t2);
        return;
      }
    } else e21.isExternalTexture && (n2.__webglTexture = e21.sourceTexture ? e21.sourceTexture : null);
    d2.bindTexture(l2.TEXTURE_2D, n2.__webglTexture, l2.TEXTURE0 + t2);
  }
  function _e2(e21, t2) {
    let n2 = f2.get(e21);
    e21.isRenderTargetTexture === false && e21.version > 0 && n2.__version !== e21.version ? De2(n2, e21, t2) : (e21.isExternalTexture && (n2.__webglTexture = e21.sourceTexture ? e21.sourceTexture : null), d2.bindTexture(l2.TEXTURE_2D_ARRAY, n2.__webglTexture, l2.TEXTURE0 + t2));
  }
  function ve2(e21, t2) {
    let n2 = f2.get(e21);
    e21.isRenderTargetTexture === false && e21.version > 0 && n2.__version !== e21.version ? De2(n2, e21, t2) : d2.bindTexture(l2.TEXTURE_3D, n2.__webglTexture, l2.TEXTURE0 + t2);
  }
  function ye2(e21, t2) {
    let n2 = f2.get(e21);
    e21.version > 0 && n2.__version !== e21.version ? Oe2(n2, e21, t2) : d2.bindTexture(l2.TEXTURE_CUBE_MAP, n2.__webglTexture, l2.TEXTURE0 + t2);
  }
  let be2 = {
    [e]: l2.REPEAT,
    [t]: l2.CLAMP_TO_EDGE,
    [n]: l2.MIRRORED_REPEAT
  }, xe2 = {
    [r]: l2.NEAREST,
    [i]: l2.NEAREST_MIPMAP_NEAREST,
    [a]: l2.NEAREST_MIPMAP_LINEAR,
    [o]: l2.LINEAR,
    [s]: l2.LINEAR_MIPMAP_NEAREST,
    [c]: l2.LINEAR_MIPMAP_LINEAR
  }, Se2 = {
    512: l2.NEVER,
    519: l2.ALWAYS,
    513: l2.LESS,
    515: l2.LEQUAL,
    514: l2.EQUAL,
    518: l2.GEQUAL,
    516: l2.GREATER,
    517: l2.NOTEQUAL
  };
  function Ce2(e21, t2) {
    if (t2.type === 1015 && u2.has(`OES_texture_float_linear`) === false && (t2.magFilter === 1006 || t2.magFilter === 1007 || t2.magFilter === 1005 || t2.magFilter === 1008 || t2.minFilter === 1006 || t2.minFilter === 1007 || t2.minFilter === 1005 || t2.minFilter === 1008) && z(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`), l2.texParameteri(e21, l2.TEXTURE_WRAP_S, be2[t2.wrapS]), l2.texParameteri(e21, l2.TEXTURE_WRAP_T, be2[t2.wrapT]), (e21 === l2.TEXTURE_3D || e21 === l2.TEXTURE_2D_ARRAY) && l2.texParameteri(e21, l2.TEXTURE_WRAP_R, be2[t2.wrapR]), l2.texParameteri(e21, l2.TEXTURE_MAG_FILTER, xe2[t2.magFilter]), l2.texParameteri(e21, l2.TEXTURE_MIN_FILTER, xe2[t2.minFilter]), t2.compareFunction && (l2.texParameteri(e21, l2.TEXTURE_COMPARE_MODE, l2.COMPARE_REF_TO_TEXTURE), l2.texParameteri(e21, l2.TEXTURE_COMPARE_FUNC, Se2[t2.compareFunction])), u2.has(`EXT_texture_filter_anisotropic`) === true) {
      if (t2.magFilter === 1003 || t2.minFilter !== 1005 && t2.minFilter !== 1008 || t2.type === 1015 && u2.has(`OES_texture_float_linear`) === false) return;
      if (t2.anisotropy > 1 || f2.get(t2).__currentAnisotropy) {
        let n2 = u2.get(`EXT_texture_filter_anisotropic`);
        l2.texParameterf(e21, n2.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(t2.anisotropy, p2.getMaxAnisotropy())), f2.get(t2).__currentAnisotropy = t2.anisotropy;
      }
    }
  }
  function we2(e21, t2) {
    let n2 = false;
    e21.__webglInit === void 0 && (e21.__webglInit = true, t2.addEventListener(`dispose`, re2), ne2(t2));
    let r3 = t2.source, i2 = S2.get(r3);
    i2 === void 0 && (i2 = {}, S2.set(r3, i2));
    let a2 = he2(t2);
    if (a2 !== e21.__cacheKey) {
      i2[a2] === void 0 && (i2[a2] = {
        texture: l2.createTexture(),
        usedTimes: 0
      }, h2.memory.textures++, n2 = true), i2[a2].usedTimes++;
      let r4 = i2[e21.__cacheKey];
      r4 !== void 0 && (i2[e21.__cacheKey].usedTimes--, r4.usedTimes === 0 && le2(t2)), e21.__cacheKey = a2, e21.__webglTexture = i2[a2].texture;
    }
    return n2;
  }
  function Te2(e21, t2, n2) {
    return Math.floor(Math.floor(e21 / n2) / t2);
  }
  function Ee2(e21, t2, n2, r3) {
    let i2 = e21.updateRanges;
    if (i2.length === 0) d2.texSubImage2D(l2.TEXTURE_2D, 0, 0, 0, t2.width, t2.height, n2, r3, t2.data);
    else {
      i2.sort((e22, t3) => e22.start - t3.start);
      let a2 = 0;
      for (let e22 = 1; e22 < i2.length; e22++) {
        let n3 = i2[a2], r4 = i2[e22], o3 = n3.start + n3.count, s3 = Te2(r4.start, t2.width, 4), c3 = Te2(n3.start, t2.width, 4);
        r4.start <= o3 + 1 && s3 === c3 && Te2(r4.start + r4.count - 1, t2.width, 4) === s3 ? n3.count = Math.max(n3.count, r4.start + r4.count - n3.start) : (++a2, i2[a2] = r4);
      }
      i2.length = a2 + 1;
      let o2 = d2.getParameter(l2.UNPACK_ROW_LENGTH), s2 = d2.getParameter(l2.UNPACK_SKIP_PIXELS), c2 = d2.getParameter(l2.UNPACK_SKIP_ROWS);
      d2.pixelStorei(l2.UNPACK_ROW_LENGTH, t2.width);
      for (let e22 = 0, a3 = i2.length; e22 < a3; e22++) {
        let a4 = i2[e22], o3 = Math.floor(a4.start / 4), s3 = Math.ceil(a4.count / 4), c3 = o3 % t2.width, u3 = Math.floor(o3 / t2.width), f3 = s3;
        d2.pixelStorei(l2.UNPACK_SKIP_PIXELS, c3), d2.pixelStorei(l2.UNPACK_SKIP_ROWS, u3), d2.texSubImage2D(l2.TEXTURE_2D, 0, c3, u3, f3, 1, n2, r3, t2.data);
      }
      e21.clearUpdateRanges(), d2.pixelStorei(l2.UNPACK_ROW_LENGTH, o2), d2.pixelStorei(l2.UNPACK_SKIP_PIXELS, s2), d2.pixelStorei(l2.UNPACK_SKIP_ROWS, c2);
    }
  }
  function De2(e21, t2, n2) {
    let r3 = l2.TEXTURE_2D;
    (t2.isDataArrayTexture || t2.isCompressedArrayTexture) && (r3 = l2.TEXTURE_2D_ARRAY), t2.isData3DTexture && (r3 = l2.TEXTURE_3D);
    let i2 = we2(e21, t2), a2 = t2.source;
    d2.bindTexture(r3, e21.__webglTexture, l2.TEXTURE0 + n2);
    let o2 = f2.get(a2);
    if (a2.version !== o2.__version || i2 === true) {
      if (d2.activeTexture(l2.TEXTURE0 + n2), !(typeof ImageBitmap < `u` && t2.image instanceof ImageBitmap)) {
        let e23 = G.getPrimaries(G.workingColorSpace), n3 = t2.colorSpace === `` ? null : G.getPrimaries(t2.colorSpace), r4 = t2.colorSpace === `` || e23 === n3 ? l2.NONE : l2.BROWSER_DEFAULT_WEBGL;
        d2.pixelStorei(l2.UNPACK_FLIP_Y_WEBGL, t2.flipY), d2.pixelStorei(l2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t2.premultiplyAlpha), d2.pixelStorei(l2.UNPACK_COLORSPACE_CONVERSION_WEBGL, r4);
      }
      d2.pixelStorei(l2.UNPACK_ALIGNMENT, t2.unpackAlignment);
      let e22 = O2(t2.image, false, p2.maxTextureSize);
      e22 = ze2(t2, e22);
      let s2 = m2.convert(t2.format, t2.colorSpace), c2 = m2.convert(t2.type), u3 = j2(t2.internalFormat, s2, c2, t2.normalized, t2.colorSpace, t2.isVideoTexture);
      Ce2(r3, t2);
      let f3, h3 = t2.mipmaps, g3 = t2.isVideoTexture !== true, _3 = o2.__version === void 0 || i2 === true, v3 = a2.dataReady, y3 = M2(t2, e22);
      if (t2.isDepthTexture) u3 = te2(t2.format === E, t2.type), _3 && (g3 ? d2.texStorage2D(l2.TEXTURE_2D, 1, u3, e22.width, e22.height) : d2.texImage2D(l2.TEXTURE_2D, 0, u3, e22.width, e22.height, 0, s2, c2, null));
      else if (t2.isDataTexture) {
        if (h3.length > 0) {
          g3 && _3 && d2.texStorage2D(l2.TEXTURE_2D, y3, u3, h3[0].width, h3[0].height);
          for (let e23 = 0, t3 = h3.length; e23 < t3; e23++) f3 = h3[e23], g3 ? v3 && d2.texSubImage2D(l2.TEXTURE_2D, e23, 0, 0, f3.width, f3.height, s2, c2, f3.data) : d2.texImage2D(l2.TEXTURE_2D, e23, u3, f3.width, f3.height, 0, s2, c2, f3.data);
          t2.generateMipmaps = false;
        } else g3 ? (_3 && d2.texStorage2D(l2.TEXTURE_2D, y3, u3, e22.width, e22.height), v3 && Ee2(t2, e22, s2, c2)) : d2.texImage2D(l2.TEXTURE_2D, 0, u3, e22.width, e22.height, 0, s2, c2, e22.data);
      } else if (t2.isCompressedTexture) {
        if (t2.isCompressedArrayTexture) {
          g3 && _3 && d2.texStorage3D(l2.TEXTURE_2D_ARRAY, y3, u3, h3[0].width, h3[0].height, e22.depth);
          for (let n3 = 0, r4 = h3.length; n3 < r4; n3++) if (f3 = h3[n3], t2.format !== 1023) {
            if (s2 !== null) {
              if (g3) {
                if (v3) {
                  if (t2.layerUpdates.size > 0) {
                    let e23 = Xo(f3.width, f3.height, t2.format, t2.type);
                    for (let r5 of t2.layerUpdates) {
                      let t3 = f3.data.subarray(r5 * e23 / f3.data.BYTES_PER_ELEMENT, (r5 + 1) * e23 / f3.data.BYTES_PER_ELEMENT);
                      d2.compressedTexSubImage3D(l2.TEXTURE_2D_ARRAY, n3, 0, 0, r5, f3.width, f3.height, 1, s2, t3);
                    }
                  } else d2.compressedTexSubImage3D(l2.TEXTURE_2D_ARRAY, n3, 0, 0, 0, f3.width, f3.height, e22.depth, s2, f3.data);
                }
              } else d2.compressedTexImage3D(l2.TEXTURE_2D_ARRAY, n3, u3, f3.width, f3.height, e22.depth, 0, f3.data, 0, 0);
            } else z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);
          } else g3 ? v3 && d2.texSubImage3D(l2.TEXTURE_2D_ARRAY, n3, 0, 0, 0, f3.width, f3.height, e22.depth, s2, c2, f3.data) : d2.texImage3D(l2.TEXTURE_2D_ARRAY, n3, u3, f3.width, f3.height, e22.depth, 0, s2, c2, f3.data);
          t2.layerUpdates.size > 0 && t2.clearLayerUpdates();
        } else {
          g3 && _3 && d2.texStorage2D(l2.TEXTURE_2D, y3, u3, h3[0].width, h3[0].height);
          for (let e23 = 0, n3 = h3.length; e23 < n3; e23++) f3 = h3[e23], t2.format === 1023 ? g3 ? v3 && d2.texSubImage2D(l2.TEXTURE_2D, e23, 0, 0, f3.width, f3.height, s2, c2, f3.data) : d2.texImage2D(l2.TEXTURE_2D, e23, u3, f3.width, f3.height, 0, s2, c2, f3.data) : s2 === null ? z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`) : g3 ? v3 && d2.compressedTexSubImage2D(l2.TEXTURE_2D, e23, 0, 0, f3.width, f3.height, s2, f3.data) : d2.compressedTexImage2D(l2.TEXTURE_2D, e23, u3, f3.width, f3.height, 0, f3.data);
        }
      } else if (t2.isDataArrayTexture) {
        if (g3) {
          if (_3 && d2.texStorage3D(l2.TEXTURE_2D_ARRAY, y3, u3, e22.width, e22.height, e22.depth), v3) {
            if (t2.layerUpdates.size > 0) {
              let n3 = Xo(e22.width, e22.height, t2.format, t2.type);
              for (let r4 of t2.layerUpdates) {
                let t3 = e22.data.subarray(r4 * n3 / e22.data.BYTES_PER_ELEMENT, (r4 + 1) * n3 / e22.data.BYTES_PER_ELEMENT);
                d2.texSubImage3D(l2.TEXTURE_2D_ARRAY, 0, 0, 0, r4, e22.width, e22.height, 1, s2, c2, t3);
              }
              t2.clearLayerUpdates();
            } else d2.texSubImage3D(l2.TEXTURE_2D_ARRAY, 0, 0, 0, 0, e22.width, e22.height, e22.depth, s2, c2, e22.data);
          }
        } else d2.texImage3D(l2.TEXTURE_2D_ARRAY, 0, u3, e22.width, e22.height, e22.depth, 0, s2, c2, e22.data);
      } else if (t2.isData3DTexture) g3 ? (_3 && d2.texStorage3D(l2.TEXTURE_3D, y3, u3, e22.width, e22.height, e22.depth), v3 && d2.texSubImage3D(l2.TEXTURE_3D, 0, 0, 0, 0, e22.width, e22.height, e22.depth, s2, c2, e22.data)) : d2.texImage3D(l2.TEXTURE_3D, 0, u3, e22.width, e22.height, e22.depth, 0, s2, c2, e22.data);
      else if (t2.isFramebufferTexture) {
        if (_3) {
          if (g3) d2.texStorage2D(l2.TEXTURE_2D, y3, u3, e22.width, e22.height);
          else {
            let t3 = e22.width, n3 = e22.height;
            for (let e23 = 0; e23 < y3; e23++) d2.texImage2D(l2.TEXTURE_2D, e23, u3, t3, n3, 0, s2, c2, null), t3 >>= 1, n3 >>= 1;
          }
        }
      } else if (t2.isHTMLTexture) {
        if (`texElementImage2D` in l2) {
          let n3 = l2.canvas;
          if (n3.hasAttribute(`layoutsubtree`) || n3.setAttribute(`layoutsubtree`, `true`), e22.parentNode !== n3) {
            n3.appendChild(e22), b2.add(t2), n3.onpaint = (e23) => {
              let t3 = e23.changedElements;
              for (let e24 of b2) t3.includes(e24.image) && (e24.needsUpdate = true);
            }, n3.requestPaint();
            return;
          }
          if (l2.texElementImage2D.length === 3) l2.texElementImage2D(l2.TEXTURE_2D, l2.RGBA8, e22);
          else {
            let t3 = l2.RGBA, n4 = l2.RGBA, r4 = l2.UNSIGNED_BYTE;
            l2.texElementImage2D(l2.TEXTURE_2D, 0, t3, n4, r4, e22);
          }
          l2.texParameteri(l2.TEXTURE_2D, l2.TEXTURE_MIN_FILTER, l2.LINEAR), l2.texParameteri(l2.TEXTURE_2D, l2.TEXTURE_WRAP_S, l2.CLAMP_TO_EDGE), l2.texParameteri(l2.TEXTURE_2D, l2.TEXTURE_WRAP_T, l2.CLAMP_TO_EDGE);
        }
      } else if (h3.length > 0) {
        if (g3 && _3) {
          let e23 = L2(h3[0]);
          d2.texStorage2D(l2.TEXTURE_2D, y3, u3, e23.width, e23.height);
        }
        for (let e23 = 0, t3 = h3.length; e23 < t3; e23++) f3 = h3[e23], g3 ? v3 && d2.texSubImage2D(l2.TEXTURE_2D, e23, 0, 0, s2, c2, f3) : d2.texImage2D(l2.TEXTURE_2D, e23, u3, s2, c2, f3);
        t2.generateMipmaps = false;
      } else if (g3) {
        if (_3) {
          let t3 = L2(e22);
          d2.texStorage2D(l2.TEXTURE_2D, y3, u3, t3.width, t3.height);
        }
        v3 && d2.texSubImage2D(l2.TEXTURE_2D, 0, 0, 0, s2, c2, e22);
      } else d2.texImage2D(l2.TEXTURE_2D, 0, u3, s2, c2, e22);
      k2(t2) && t2.mipmapsAutoUpdate === true && A2(r3), o2.__version = a2.version, t2.onUpdate && t2.onUpdate(t2);
    }
    e21.__version = t2.version;
  }
  function Oe2(e21, t2, n2) {
    if (t2.image.length !== 6) return;
    let r3 = we2(e21, t2), i2 = t2.source;
    d2.bindTexture(l2.TEXTURE_CUBE_MAP, e21.__webglTexture, l2.TEXTURE0 + n2);
    let a2 = f2.get(i2);
    if (i2.version !== a2.__version || r3 === true) {
      d2.activeTexture(l2.TEXTURE0 + n2);
      let e22 = G.getPrimaries(G.workingColorSpace), o2 = t2.colorSpace === `` ? null : G.getPrimaries(t2.colorSpace), s2 = t2.colorSpace === `` || e22 === o2 ? l2.NONE : l2.BROWSER_DEFAULT_WEBGL;
      d2.pixelStorei(l2.UNPACK_FLIP_Y_WEBGL, t2.flipY), d2.pixelStorei(l2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t2.premultiplyAlpha), d2.pixelStorei(l2.UNPACK_ALIGNMENT, t2.unpackAlignment), d2.pixelStorei(l2.UNPACK_COLORSPACE_CONVERSION_WEBGL, s2);
      let c2 = t2.isCompressedTexture || t2.image[0].isCompressedTexture, u3 = t2.image[0] && t2.image[0].isDataTexture, f3 = [];
      for (let e23 = 0; e23 < 6; e23++) !c2 && !u3 ? f3[e23] = O2(t2.image[e23], true, p2.maxCubemapSize) : f3[e23] = u3 ? t2.image[e23].image : t2.image[e23], f3[e23] = ze2(t2, f3[e23]);
      let h3 = f3[0], g3 = m2.convert(t2.format, t2.colorSpace), _3 = m2.convert(t2.type), v3 = j2(t2.internalFormat, g3, _3, t2.normalized, t2.colorSpace), y3 = t2.isVideoTexture !== true, b3 = a2.__version === void 0 || r3 === true, x3 = i2.dataReady, S3 = M2(t2, h3);
      Ce2(l2.TEXTURE_CUBE_MAP, t2);
      let C3;
      if (t2.isDepthTexture) {
        if (v3 = te2(t2.format === E, t2.type), b3) {
          if (y3) d2.texStorage2D(l2.TEXTURE_CUBE_MAP, 1, v3, h3.width, h3.height);
          else for (let e23 = 0; e23 < 6; e23++) d2.texImage2D(l2.TEXTURE_CUBE_MAP_POSITIVE_X + e23, 0, v3, h3.width, h3.height, 0, g3, _3, null);
        }
      } else if (c2) {
        y3 && b3 && d2.texStorage2D(l2.TEXTURE_CUBE_MAP, S3, v3, h3.width, h3.height);
        for (let e23 = 0; e23 < 6; e23++) {
          C3 = f3[e23].mipmaps;
          for (let n3 = 0; n3 < C3.length; n3++) {
            let r4 = C3[n3];
            t2.format === 1023 ? y3 ? x3 && d2.texSubImage2D(l2.TEXTURE_CUBE_MAP_POSITIVE_X + e23, n3, 0, 0, r4.width, r4.height, g3, _3, r4.data) : d2.texImage2D(l2.TEXTURE_CUBE_MAP_POSITIVE_X + e23, n3, v3, r4.width, r4.height, 0, g3, _3, r4.data) : g3 === null ? z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`) : y3 ? x3 && d2.compressedTexSubImage2D(l2.TEXTURE_CUBE_MAP_POSITIVE_X + e23, n3, 0, 0, r4.width, r4.height, g3, r4.data) : d2.compressedTexImage2D(l2.TEXTURE_CUBE_MAP_POSITIVE_X + e23, n3, v3, r4.width, r4.height, 0, r4.data);
          }
        }
      } else {
        if (C3 = t2.mipmaps, y3 && b3) {
          C3.length > 0 && S3++;
          let e23 = L2(f3[0]);
          d2.texStorage2D(l2.TEXTURE_CUBE_MAP, S3, v3, e23.width, e23.height);
        }
        for (let e23 = 0; e23 < 6; e23++) if (u3) {
          y3 ? x3 && d2.texSubImage2D(l2.TEXTURE_CUBE_MAP_POSITIVE_X + e23, 0, 0, 0, f3[e23].width, f3[e23].height, g3, _3, f3[e23].data) : d2.texImage2D(l2.TEXTURE_CUBE_MAP_POSITIVE_X + e23, 0, v3, f3[e23].width, f3[e23].height, 0, g3, _3, f3[e23].data);
          for (let t3 = 0; t3 < C3.length; t3++) {
            let n3 = C3[t3].image[e23].image;
            y3 ? x3 && d2.texSubImage2D(l2.TEXTURE_CUBE_MAP_POSITIVE_X + e23, t3 + 1, 0, 0, n3.width, n3.height, g3, _3, n3.data) : d2.texImage2D(l2.TEXTURE_CUBE_MAP_POSITIVE_X + e23, t3 + 1, v3, n3.width, n3.height, 0, g3, _3, n3.data);
          }
        } else {
          y3 ? x3 && d2.texSubImage2D(l2.TEXTURE_CUBE_MAP_POSITIVE_X + e23, 0, 0, 0, g3, _3, f3[e23]) : d2.texImage2D(l2.TEXTURE_CUBE_MAP_POSITIVE_X + e23, 0, v3, g3, _3, f3[e23]);
          for (let t3 = 0; t3 < C3.length; t3++) {
            let n3 = C3[t3];
            y3 ? x3 && d2.texSubImage2D(l2.TEXTURE_CUBE_MAP_POSITIVE_X + e23, t3 + 1, 0, 0, g3, _3, n3.image[e23]) : d2.texImage2D(l2.TEXTURE_CUBE_MAP_POSITIVE_X + e23, t3 + 1, v3, g3, _3, n3.image[e23]);
          }
        }
      }
      k2(t2) && t2.mipmapsAutoUpdate === true && A2(l2.TEXTURE_CUBE_MAP), a2.__version = i2.version, t2.onUpdate && t2.onUpdate(t2);
    }
    e21.__version = t2.version;
  }
  function ke2(e21, t2, n2, r3, i2, a2) {
    let o2 = m2.convert(n2.format, n2.colorSpace), s2 = m2.convert(n2.type), c2 = j2(n2.internalFormat, o2, s2, n2.normalized, n2.colorSpace), u3 = f2.get(t2), p3 = f2.get(n2);
    if (p3.__renderTarget = t2, !u3.__hasExternalTextures) {
      let e22 = Math.max(1, t2.width >> a2), n3 = Math.max(1, t2.height >> a2);
      i2 === l2.TEXTURE_3D || i2 === l2.TEXTURE_2D_ARRAY ? d2.texImage3D(i2, a2, c2, e22, n3, t2.depth, 0, o2, s2, null) : d2.texImage2D(i2, a2, c2, e22, n3, 0, o2, s2, null);
    }
    d2.bindFramebuffer(l2.FRAMEBUFFER, e21), I2(t2) ? g2.framebufferTexture2DMultisampleEXT(l2.FRAMEBUFFER, r3, i2, p3.__webglTexture, 0, Le2(t2)) : (i2 === l2.TEXTURE_2D || i2 >= l2.TEXTURE_CUBE_MAP_POSITIVE_X && i2 <= l2.TEXTURE_CUBE_MAP_NEGATIVE_Z) && l2.framebufferTexture2D(l2.FRAMEBUFFER, r3, i2, p3.__webglTexture, a2), d2.bindFramebuffer(l2.FRAMEBUFFER, null);
  }
  function Ae2(e21, t2, n2) {
    if (l2.bindRenderbuffer(l2.RENDERBUFFER, e21), t2.depthBuffer) {
      let r3 = t2.depthTexture, i2 = r3 && r3.isDepthTexture ? r3.type : null, a2 = te2(t2.stencilBuffer, i2), o2 = t2.stencilBuffer ? l2.DEPTH_STENCIL_ATTACHMENT : l2.DEPTH_ATTACHMENT;
      I2(t2) ? g2.renderbufferStorageMultisampleEXT(l2.RENDERBUFFER, Le2(t2), a2, t2.width, t2.height) : n2 ? l2.renderbufferStorageMultisample(l2.RENDERBUFFER, Le2(t2), a2, t2.width, t2.height) : l2.renderbufferStorage(l2.RENDERBUFFER, a2, t2.width, t2.height), l2.framebufferRenderbuffer(l2.FRAMEBUFFER, o2, l2.RENDERBUFFER, e21);
    } else {
      let e22 = t2.textures;
      for (let r3 = 0; r3 < e22.length; r3++) {
        let i2 = e22[r3], a2 = m2.convert(i2.format, i2.colorSpace), o2 = m2.convert(i2.type), s2 = j2(i2.internalFormat, a2, o2, i2.normalized, i2.colorSpace);
        I2(t2) ? g2.renderbufferStorageMultisampleEXT(l2.RENDERBUFFER, Le2(t2), s2, t2.width, t2.height) : n2 ? l2.renderbufferStorageMultisample(l2.RENDERBUFFER, Le2(t2), s2, t2.width, t2.height) : l2.renderbufferStorage(l2.RENDERBUFFER, s2, t2.width, t2.height);
      }
    }
    l2.bindRenderbuffer(l2.RENDERBUFFER, null);
  }
  function je2(e21, t2, n2) {
    let r3 = t2.isWebGLCubeRenderTarget === true;
    if (d2.bindFramebuffer(l2.FRAMEBUFFER, e21), !(t2.depthTexture && t2.depthTexture.isDepthTexture)) throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);
    let i2 = f2.get(t2.depthTexture);
    i2.__renderTarget = t2;
    let a2 = r3 ? t2.depthTexture.image[0] : t2.depthTexture.image;
    i2.__webglTexture && a2.width === t2.width && a2.height === t2.height || (a2.width = t2.width, a2.height = t2.height, t2.depthTexture.needsUpdate = true), r3 ? ye2(t2.depthTexture, 0) : ge2(t2.depthTexture, 0);
    let o2 = i2.__webglTexture, s2 = Le2(t2), c2 = r3 ? l2.TEXTURE_CUBE_MAP_POSITIVE_X + n2 : l2.TEXTURE_2D, u3 = t2.depthTexture.format === 1027 ? l2.DEPTH_STENCIL_ATTACHMENT : l2.DEPTH_ATTACHMENT;
    if (t2.depthTexture.format === 1026) I2(t2) ? g2.framebufferTexture2DMultisampleEXT(l2.FRAMEBUFFER, u3, c2, o2, 0, s2) : l2.framebufferTexture2D(l2.FRAMEBUFFER, u3, c2, o2, 0);
    else if (t2.depthTexture.format === 1027) I2(t2) ? g2.framebufferTexture2DMultisampleEXT(l2.FRAMEBUFFER, u3, c2, o2, 0, s2) : l2.framebufferTexture2D(l2.FRAMEBUFFER, u3, c2, o2, 0);
    else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`);
  }
  function Me2(e21) {
    let t2 = f2.get(e21), n2 = e21.isWebGLCubeRenderTarget === true;
    if (t2.__boundDepthTexture !== e21.depthTexture) {
      let n3 = e21.depthTexture;
      if (t2.__depthDisposeCallback && t2.__depthDisposeCallback(), n3) {
        let e22 = () => {
          delete t2.__boundDepthTexture, delete t2.__depthDisposeCallback, n3.removeEventListener(`dispose`, e22);
        };
        n3.addEventListener(`dispose`, e22), t2.__depthDisposeCallback = e22;
      }
      t2.__boundDepthTexture = n3;
    }
    if (e21.depthTexture && !t2.__autoAllocateDepthBuffer) {
      if (n2) for (let n3 = 0; n3 < 6; n3++) je2(t2.__webglFramebuffer[n3], e21, n3);
      else e21.texture.mipmaps.length > 0 ? je2(t2.__webglFramebuffer[0], e21, 0) : je2(t2.__webglFramebuffer, e21, 0);
    } else if (n2) {
      t2.__webglDepthbuffer = [];
      for (let n3 = 0; n3 < 6; n3++) if (d2.bindFramebuffer(l2.FRAMEBUFFER, t2.__webglFramebuffer[n3]), t2.__webglDepthbuffer[n3] === void 0) t2.__webglDepthbuffer[n3] = l2.createRenderbuffer(), Ae2(t2.__webglDepthbuffer[n3], e21, false);
      else {
        let r3 = e21.stencilBuffer ? l2.DEPTH_STENCIL_ATTACHMENT : l2.DEPTH_ATTACHMENT, i2 = t2.__webglDepthbuffer[n3];
        l2.bindRenderbuffer(l2.RENDERBUFFER, i2), l2.framebufferRenderbuffer(l2.FRAMEBUFFER, r3, l2.RENDERBUFFER, i2);
      }
    } else if (e21.texture.mipmaps.length > 0 ? d2.bindFramebuffer(l2.FRAMEBUFFER, t2.__webglFramebuffer[0]) : d2.bindFramebuffer(l2.FRAMEBUFFER, t2.__webglFramebuffer), t2.__webglDepthbuffer === void 0) t2.__webglDepthbuffer = l2.createRenderbuffer(), Ae2(t2.__webglDepthbuffer, e21, false);
    else {
      let n3 = e21.stencilBuffer ? l2.DEPTH_STENCIL_ATTACHMENT : l2.DEPTH_ATTACHMENT, r3 = t2.__webglDepthbuffer;
      l2.bindRenderbuffer(l2.RENDERBUFFER, r3), l2.framebufferRenderbuffer(l2.FRAMEBUFFER, n3, l2.RENDERBUFFER, r3);
    }
    d2.bindFramebuffer(l2.FRAMEBUFFER, null);
  }
  function Ne2(e21, t2, n2) {
    let r3 = f2.get(e21);
    t2 !== void 0 && ke2(r3.__webglFramebuffer, e21, e21.texture, l2.COLOR_ATTACHMENT0, l2.TEXTURE_2D, 0), n2 !== void 0 && Me2(e21);
  }
  function Pe2(e21) {
    let t2 = e21.texture, n2 = f2.get(e21), r3 = f2.get(t2);
    e21.addEventListener(`dispose`, ie2), ne2(e21);
    let i2 = e21.textures, a2 = e21.isWebGLCubeRenderTarget === true, o2 = i2.length > 1;
    if (o2 || (r3.__webglTexture === void 0 && (r3.__webglTexture = l2.createTexture()), r3.__version = t2.version, h2.memory.textures++), a2) {
      n2.__webglFramebuffer = [];
      for (let e22 = 0; e22 < 6; e22++) if (t2.mipmaps.length > 0) {
        n2.__webglFramebuffer[e22] = [];
        for (let r4 = 0; r4 < t2.mipmaps.length; r4++) n2.__webglFramebuffer[e22][r4] = l2.createFramebuffer();
      } else n2.__webglFramebuffer[e22] = l2.createFramebuffer();
    } else {
      if (t2.mipmaps.length > 0) {
        n2.__webglFramebuffer = [];
        for (let e22 = 0; e22 < t2.mipmaps.length; e22++) n2.__webglFramebuffer[e22] = l2.createFramebuffer();
      } else n2.__webglFramebuffer = l2.createFramebuffer();
      if (o2) for (let e22 = 0, t3 = i2.length; e22 < t3; e22++) {
        let t4 = f2.get(i2[e22]);
        t4.__webglTexture === void 0 && (t4.__webglTexture = l2.createTexture(), h2.memory.textures++);
      }
      if (e21.samples > 0 && I2(e21) === false) {
        n2.__webglMultisampledFramebuffer = l2.createFramebuffer(), n2.__webglColorRenderbuffer = [], d2.bindFramebuffer(l2.FRAMEBUFFER, n2.__webglMultisampledFramebuffer);
        for (let t3 = 0; t3 < i2.length; t3++) {
          let r4 = i2[t3];
          n2.__webglColorRenderbuffer[t3] = l2.createRenderbuffer(), l2.bindRenderbuffer(l2.RENDERBUFFER, n2.__webglColorRenderbuffer[t3]);
          let a3 = m2.convert(r4.format, r4.colorSpace), o3 = m2.convert(r4.type), s2 = j2(r4.internalFormat, a3, o3, r4.normalized, r4.colorSpace, e21.isXRRenderTarget === true), c2 = Le2(e21);
          l2.renderbufferStorageMultisample(l2.RENDERBUFFER, c2, s2, e21.width, e21.height), l2.framebufferRenderbuffer(l2.FRAMEBUFFER, l2.COLOR_ATTACHMENT0 + t3, l2.RENDERBUFFER, n2.__webglColorRenderbuffer[t3]);
        }
        l2.bindRenderbuffer(l2.RENDERBUFFER, null), e21.depthBuffer && (n2.__webglDepthRenderbuffer = l2.createRenderbuffer(), Ae2(n2.__webglDepthRenderbuffer, e21, true)), d2.bindFramebuffer(l2.FRAMEBUFFER, null);
      }
    }
    if (a2) {
      d2.bindTexture(l2.TEXTURE_CUBE_MAP, r3.__webglTexture), Ce2(l2.TEXTURE_CUBE_MAP, t2);
      for (let r4 = 0; r4 < 6; r4++) if (t2.mipmaps.length > 0) for (let i3 = 0; i3 < t2.mipmaps.length; i3++) ke2(n2.__webglFramebuffer[r4][i3], e21, t2, l2.COLOR_ATTACHMENT0, l2.TEXTURE_CUBE_MAP_POSITIVE_X + r4, i3);
      else ke2(n2.__webglFramebuffer[r4], e21, t2, l2.COLOR_ATTACHMENT0, l2.TEXTURE_CUBE_MAP_POSITIVE_X + r4, 0);
      k2(t2) ? A2(l2.TEXTURE_CUBE_MAP) : t2.mipmaps.length > 0 && l2.texParameteri(l2.TEXTURE_CUBE_MAP, l2.TEXTURE_MAX_LEVEL, t2.mipmaps.length - 1), d2.unbindTexture();
    } else if (o2) {
      for (let t3 = 0, r4 = i2.length; t3 < r4; t3++) {
        let r5 = i2[t3], a3 = f2.get(r5), o3 = l2.TEXTURE_2D;
        (e21.isWebGL3DRenderTarget || e21.isWebGLArrayRenderTarget) && (o3 = e21.isWebGL3DRenderTarget ? l2.TEXTURE_3D : l2.TEXTURE_2D_ARRAY), d2.bindTexture(o3, a3.__webglTexture), Ce2(o3, r5), ke2(n2.__webglFramebuffer, e21, r5, l2.COLOR_ATTACHMENT0 + t3, o3, 0), k2(r5) && A2(o3);
      }
      d2.unbindTexture();
    } else {
      let i3 = l2.TEXTURE_2D;
      if ((e21.isWebGL3DRenderTarget || e21.isWebGLArrayRenderTarget) && (i3 = e21.isWebGL3DRenderTarget ? l2.TEXTURE_3D : l2.TEXTURE_2D_ARRAY), d2.bindTexture(i3, r3.__webglTexture), Ce2(i3, t2), t2.mipmaps.length > 0) for (let r4 = 0; r4 < t2.mipmaps.length; r4++) ke2(n2.__webglFramebuffer[r4], e21, t2, l2.COLOR_ATTACHMENT0, i3, r4);
      else ke2(n2.__webglFramebuffer, e21, t2, l2.COLOR_ATTACHMENT0, i3, 0);
      k2(t2) ? A2(i3) : t2.mipmaps.length > 0 && l2.texParameteri(i3, l2.TEXTURE_MAX_LEVEL, t2.mipmaps.length - 1), d2.unbindTexture();
    }
    e21.depthBuffer && Me2(e21);
  }
  function F2(e21) {
    let t2 = e21.textures;
    for (let n2 = 0, r3 = t2.length; n2 < r3; n2++) {
      let r4 = t2[n2];
      if (k2(r4) && r4.mipmapsAutoUpdate === true) {
        let t3 = ee2(e21), n3 = f2.get(r4).__webglTexture;
        d2.bindTexture(t3, n3), A2(t3), d2.unbindTexture();
      }
    }
  }
  let Fe2 = [];
  function Ie2(e21) {
    if (e21.samples > 0) {
      if (I2(e21) === false) {
        let t2 = e21.textures, n2 = e21.width, r3 = e21.height, i2 = l2.COLOR_BUFFER_BIT, a2 = e21.stencilBuffer ? l2.DEPTH_STENCIL_ATTACHMENT : l2.DEPTH_ATTACHMENT, o2 = f2.get(e21), s2 = t2.length > 1;
        if (s2) for (let e22 = 0; e22 < t2.length; e22++) d2.bindFramebuffer(l2.FRAMEBUFFER, o2.__webglMultisampledFramebuffer), l2.framebufferRenderbuffer(l2.FRAMEBUFFER, l2.COLOR_ATTACHMENT0 + e22, l2.RENDERBUFFER, null), d2.bindFramebuffer(l2.FRAMEBUFFER, o2.__webglFramebuffer), l2.framebufferTexture2D(l2.DRAW_FRAMEBUFFER, l2.COLOR_ATTACHMENT0 + e22, l2.TEXTURE_2D, null, 0);
        d2.bindFramebuffer(l2.READ_FRAMEBUFFER, o2.__webglMultisampledFramebuffer), e21.texture.mipmaps.length > 0 ? d2.bindFramebuffer(l2.DRAW_FRAMEBUFFER, o2.__webglFramebuffer[0]) : d2.bindFramebuffer(l2.DRAW_FRAMEBUFFER, o2.__webglFramebuffer);
        for (let c2 = 0; c2 < t2.length; c2++) {
          if (e21.resolveDepthBuffer && (e21.depthBuffer && (i2 |= l2.DEPTH_BUFFER_BIT), e21.stencilBuffer && e21.resolveStencilBuffer && (i2 |= l2.STENCIL_BUFFER_BIT)), s2) {
            l2.framebufferRenderbuffer(l2.READ_FRAMEBUFFER, l2.COLOR_ATTACHMENT0, l2.RENDERBUFFER, o2.__webglColorRenderbuffer[c2]);
            let e22 = f2.get(t2[c2]).__webglTexture;
            l2.framebufferTexture2D(l2.DRAW_FRAMEBUFFER, l2.COLOR_ATTACHMENT0, l2.TEXTURE_2D, e22, 0);
          }
          l2.blitFramebuffer(0, 0, n2, r3, 0, 0, n2, r3, i2, l2.NEAREST), _2 === true && (Fe2.length = 0, Fe2.push(l2.COLOR_ATTACHMENT0 + c2), e21.depthBuffer && e21.storeMultisampledDepthBuffer === false && Fe2.push(a2), l2.invalidateFramebuffer(l2.READ_FRAMEBUFFER, Fe2));
        }
        if (d2.bindFramebuffer(l2.READ_FRAMEBUFFER, null), d2.bindFramebuffer(l2.DRAW_FRAMEBUFFER, null), s2) for (let e22 = 0; e22 < t2.length; e22++) {
          d2.bindFramebuffer(l2.FRAMEBUFFER, o2.__webglMultisampledFramebuffer), l2.framebufferRenderbuffer(l2.FRAMEBUFFER, l2.COLOR_ATTACHMENT0 + e22, l2.RENDERBUFFER, o2.__webglColorRenderbuffer[e22]);
          let n3 = f2.get(t2[e22]).__webglTexture;
          d2.bindFramebuffer(l2.FRAMEBUFFER, o2.__webglFramebuffer), l2.framebufferTexture2D(l2.DRAW_FRAMEBUFFER, l2.COLOR_ATTACHMENT0 + e22, l2.TEXTURE_2D, n3, 0);
        }
        d2.bindFramebuffer(l2.DRAW_FRAMEBUFFER, o2.__webglMultisampledFramebuffer);
      } else if (e21.depthBuffer && e21.storeMultisampledDepthBuffer === false && _2) {
        let t2 = e21.stencilBuffer ? l2.DEPTH_STENCIL_ATTACHMENT : l2.DEPTH_ATTACHMENT;
        l2.invalidateFramebuffer(l2.DRAW_FRAMEBUFFER, [t2]);
      }
    }
  }
  function Le2(e21) {
    return Math.min(p2.maxSamples, e21.samples);
  }
  function I2(e21) {
    let t2 = f2.get(e21);
    return e21.samples > 0 && u2.has(`WEBGL_multisampled_render_to_texture`) === true && t2.__useRenderToTexture !== false;
  }
  function Re2(e21) {
    let t2 = h2.render.frame;
    y2.get(e21) !== t2 && (y2.set(e21, t2), e21.update());
  }
  function ze2(e21, t2) {
    let n2 = e21.colorSpace, r3 = e21.format, i2 = e21.type;
    return e21.isCompressedTexture === true || e21.isVideoTexture === true || n2 !== `srgb-linear` && n2 !== `` && (G.getTransfer(n2) === `srgb` ? (r3 !== 1023 || i2 !== 1009) && z(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`) : B(`WebGLTextures: Unsupported texture color space:`, n2)), t2;
  }
  function L2(e21) {
    return typeof HTMLImageElement < `u` && e21 instanceof HTMLImageElement ? (v2.width = e21.naturalWidth || e21.width, v2.height = e21.naturalHeight || e21.height) : typeof VideoFrame < `u` && e21 instanceof VideoFrame ? (v2.width = e21.displayWidth, v2.height = e21.displayHeight) : (v2.width = e21.width, v2.height = e21.height), v2;
  }
  this.allocateTextureUnit = me2, this.resetTextureUnits = de2, this.getTextureUnits = fe2, this.setTextureUnits = pe2, this.setTexture2D = ge2, this.setTexture2DArray = _e2, this.setTexture3D = ve2, this.setTextureCube = ye2, this.rebindTextures = Ne2, this.setupRenderTarget = Pe2, this.updateRenderTargetMipmap = F2, this.updateMultisampleRenderTarget = Ie2, this.setupDepthRenderbuffer = Me2, this.setupFrameBufferTexture = ke2, this.useMultisampledRTT = I2, this.dispose = se2;
}
function Yl(e21, t2) {
  function n2(n3, r3 = ``) {
    let i2, a2 = G.getTransfer(r3);
    if (n3 === 1009) return e21.UNSIGNED_BYTE;
    if (n3 === 1017) return e21.UNSIGNED_SHORT_4_4_4_4;
    if (n3 === 1018) return e21.UNSIGNED_SHORT_5_5_5_1;
    if (n3 === 35902) return e21.UNSIGNED_INT_5_9_9_9_REV;
    if (n3 === 35899) return e21.UNSIGNED_INT_10F_11F_11F_REV;
    if (n3 === 1010) return e21.BYTE;
    if (n3 === 1011) return e21.SHORT;
    if (n3 === 1012) return e21.UNSIGNED_SHORT;
    if (n3 === 1013) return e21.INT;
    if (n3 === 1014) return e21.UNSIGNED_INT;
    if (n3 === 1015) return e21.FLOAT;
    if (n3 === 1016) return e21.HALF_FLOAT;
    if (n3 === 1021) return e21.ALPHA;
    if (n3 === 1022) return e21.RGB;
    if (n3 === 1023) return e21.RGBA;
    if (n3 === 1026) return e21.DEPTH_COMPONENT;
    if (n3 === 1027) return e21.DEPTH_STENCIL;
    if (n3 === 1028) return e21.RED;
    if (n3 === 1029) return e21.RED_INTEGER;
    if (n3 === 1030) return e21.RG;
    if (n3 === 1031) return e21.RG_INTEGER;
    if (n3 === 1033) return e21.RGBA_INTEGER;
    if (n3 === 33776 || n3 === 33777 || n3 === 33778 || n3 === 33779) {
      if (a2 === `srgb`) {
        if (i2 = t2.get(`WEBGL_compressed_texture_s3tc_srgb`), i2 !== null) {
          if (n3 === 33776) return i2.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n3 === 33777) return i2.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n3 === 33778) return i2.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n3 === 33779) return i2.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      } else if (i2 = t2.get(`WEBGL_compressed_texture_s3tc`), i2 !== null) {
        if (n3 === 33776) return i2.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n3 === 33777) return i2.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n3 === 33778) return i2.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n3 === 33779) return i2.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    }
    if (n3 === 35840 || n3 === 35841 || n3 === 35842 || n3 === 35843) {
      if (i2 = t2.get(`WEBGL_compressed_texture_pvrtc`), i2 !== null) {
        if (n3 === 35840) return i2.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n3 === 35841) return i2.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n3 === 35842) return i2.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n3 === 35843) return i2.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    }
    if (n3 === 36196 || n3 === 37492 || n3 === 37496 || n3 === 37488 || n3 === 37489 || n3 === 37490 || n3 === 37491) {
      if (i2 = t2.get(`WEBGL_compressed_texture_etc`), i2 !== null) {
        if (n3 === 36196 || n3 === 37492) return a2 === `srgb` ? i2.COMPRESSED_SRGB8_ETC2 : i2.COMPRESSED_RGB8_ETC2;
        if (n3 === 37496) return a2 === `srgb` ? i2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : i2.COMPRESSED_RGBA8_ETC2_EAC;
        if (n3 === 37488) return i2.COMPRESSED_R11_EAC;
        if (n3 === 37489) return i2.COMPRESSED_SIGNED_R11_EAC;
        if (n3 === 37490) return i2.COMPRESSED_RG11_EAC;
        if (n3 === 37491) return i2.COMPRESSED_SIGNED_RG11_EAC;
      } else return null;
    }
    if (n3 === 37808 || n3 === 37809 || n3 === 37810 || n3 === 37811 || n3 === 37812 || n3 === 37813 || n3 === 37814 || n3 === 37815 || n3 === 37816 || n3 === 37817 || n3 === 37818 || n3 === 37819 || n3 === 37820 || n3 === 37821) {
      if (i2 = t2.get(`WEBGL_compressed_texture_astc`), i2 !== null) {
        if (n3 === 37808) return a2 === `srgb` ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : i2.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n3 === 37809) return a2 === `srgb` ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : i2.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n3 === 37810) return a2 === `srgb` ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : i2.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n3 === 37811) return a2 === `srgb` ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : i2.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n3 === 37812) return a2 === `srgb` ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : i2.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n3 === 37813) return a2 === `srgb` ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : i2.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n3 === 37814) return a2 === `srgb` ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : i2.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n3 === 37815) return a2 === `srgb` ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : i2.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n3 === 37816) return a2 === `srgb` ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : i2.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n3 === 37817) return a2 === `srgb` ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : i2.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n3 === 37818) return a2 === `srgb` ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : i2.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n3 === 37819) return a2 === `srgb` ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : i2.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n3 === 37820) return a2 === `srgb` ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : i2.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n3 === 37821) return a2 === `srgb` ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : i2.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    }
    if (n3 === 36492 || n3 === 36494 || n3 === 36495) {
      if (i2 = t2.get(`EXT_texture_compression_bptc`), i2 !== null) {
        if (n3 === 36492) return a2 === `srgb` ? i2.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : i2.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n3 === 36494) return i2.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n3 === 36495) return i2.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    }
    if (n3 === 36283 || n3 === 36284 || n3 === 36285 || n3 === 36286) {
      if (i2 = t2.get(`EXT_texture_compression_rgtc`), i2 !== null) {
        if (n3 === 36283) return i2.COMPRESSED_RED_RGTC1_EXT;
        if (n3 === 36284) return i2.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n3 === 36285) return i2.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n3 === 36286) return i2.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    }
    return n3 === 1020 ? e21.UNSIGNED_INT_24_8 : e21[n3] === void 0 ? null : e21[n3];
  }
  return {
    convert: n2
  };
}
var Xl = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`;
var Zl = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
var Ql = class {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e21, t2) {
    if (this.texture === null) {
      let n2 = new mi(e21.texture);
      (e21.depthNear !== t2.depthNear || e21.depthFar !== t2.depthFar) && (this.depthNear = e21.depthNear, this.depthFar = e21.depthFar), this.texture = n2;
    }
  }
  getMesh(e21) {
    if (this.texture !== null && this.mesh === null) {
      let t2 = e21.cameras[0].viewport, n2 = new Ga({
        vertexShader: Xl,
        fragmentShader: Zl,
        uniforms: {
          depthColor: {
            value: this.texture
          },
          depthWidth: {
            value: t2.z
          },
          depthHeight: {
            value: t2.w
          }
        }
      });
      this.mesh = new ei(new Pa(20, 20), n2);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
};
var $l = class extends et {
  constructor(e21, t2) {
    super();
    let n2 = this, r3 = null, i2 = 1, a2 = null, o2 = `local-floor`, s2 = 1, c2 = null, u2 = null, d2 = null, f2 = null, p2 = null, h2 = null, g2 = typeof XRWebGLBinding < `u`, _2 = new Ql(), v2 = {}, b2 = t2.getContextAttributes(), x2 = null, S2 = null, C2 = [], D2 = [], O2 = new H(), k2 = null, A2 = null, ee2 = new Ao();
    ee2.viewport = new Ot();
    let j2 = new Ao();
    j2.viewport = new Ot();
    let te2 = [ee2, j2], M2 = new Lo(), ne2 = null, N2 = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(e22) {
      let t3 = C2[e22];
      return t3 === void 0 && (t3 = new un(), C2[e22] = t3), t3.getTargetRaySpace();
    }, this.getControllerGrip = function(e22) {
      let t3 = C2[e22];
      return t3 === void 0 && (t3 = new un(), C2[e22] = t3), t3.getGripSpace();
    }, this.getHand = function(e22) {
      let t3 = C2[e22];
      return t3 === void 0 && (t3 = new un(), C2[e22] = t3), t3.getHandSpace();
    };
    function re2(e22) {
      let t3 = D2.indexOf(e22.inputSource);
      if (t3 === -1) return;
      let n3 = C2[t3];
      n3 !== void 0 && (n3.update(e22.inputSource, e22.frame, c2 || a2), n3.dispatchEvent({
        type: e22.type,
        data: e22.inputSource
      }));
    }
    function ie2() {
      r3.removeEventListener(`select`, re2), r3.removeEventListener(`selectstart`, re2), r3.removeEventListener(`selectend`, re2), r3.removeEventListener(`squeeze`, re2), r3.removeEventListener(`squeezestart`, re2), r3.removeEventListener(`squeezeend`, re2), r3.removeEventListener(`end`, ie2), r3.removeEventListener(`inputsourceschange`, ae2);
      for (let e22 = 0; e22 < C2.length; e22++) {
        let t3 = D2[e22];
        t3 !== null && (D2[e22] = null, C2[e22].disconnect(t3));
      }
      ne2 = null, N2 = null, _2.reset();
      for (let e22 in v2) delete v2[e22];
      if (e21.setRenderTarget(x2), p2 = null, f2 = null, d2 = null, r3 = null, S2 = null, P2.stop(), n2.isPresenting = false, e21.setPixelRatio(k2), e21.setSize(O2.width, O2.height, false), A2 !== null) {
        let e22 = A2.camera;
        e22.fov = A2.fov, e22.zoom = A2.zoom, e22.updateProjectionMatrix(), A2 = null;
      }
      n2.dispatchEvent({
        type: `sessionend`
      });
    }
    this.setFramebufferScaleFactor = function(e22) {
      i2 = e22, n2.isPresenting === true && z(`WebXRManager: Cannot change framebuffer scale while presenting.`);
    }, this.setReferenceSpaceType = function(e22) {
      o2 = e22, n2.isPresenting === true && z(`WebXRManager: Cannot change reference space type while presenting.`);
    }, this.getReferenceSpace = function() {
      return c2 || a2;
    }, this.setReferenceSpace = function(e22) {
      c2 = e22;
    }, this.getBaseLayer = function() {
      return f2 === null ? p2 : f2;
    }, this.getBinding = function() {
      return d2 === null && g2 && (d2 = new XRWebGLBinding(r3, t2)), d2;
    }, this.getFrame = function() {
      return h2;
    }, this.getSession = function() {
      return r3;
    }, this.setSession = async function(u3) {
      if (r3 = u3, r3 !== null) {
        if (x2 = e21.getRenderTarget(), r3.addEventListener(`select`, re2), r3.addEventListener(`selectstart`, re2), r3.addEventListener(`selectend`, re2), r3.addEventListener(`squeeze`, re2), r3.addEventListener(`squeezestart`, re2), r3.addEventListener(`squeezeend`, re2), r3.addEventListener(`end`, ie2), r3.addEventListener(`inputsourceschange`, ae2), b2.xrCompatible !== true && await t2.makeXRCompatible(), k2 = e21.getPixelRatio(), e21.getSize(O2), g2 && `createProjectionLayer` in XRWebGLBinding.prototype) {
          let n3 = null, a3 = null, o3 = null;
          b2.depth && (o3 = b2.stencil ? t2.DEPTH24_STENCIL8 : t2.DEPTH_COMPONENT24, n3 = b2.stencil ? E : T, a3 = b2.stencil ? y : m);
          let s3 = {
            colorFormat: t2.RGBA8,
            depthFormat: o3,
            scaleFactor: i2
          };
          d2 = this.getBinding(), f2 = d2.createProjectionLayer(s3), r3.updateRenderState({
            layers: [f2]
          }), e21.setPixelRatio(1), e21.setSize(f2.textureWidth, f2.textureHeight, false), S2 = new At(f2.textureWidth, f2.textureHeight, {
            format: w,
            type: l,
            depthTexture: new fi(f2.textureWidth, f2.textureHeight, a3, void 0, void 0, void 0, void 0, void 0, void 0, n3),
            stencilBuffer: b2.stencil,
            colorSpace: e21.outputColorSpace,
            samples: b2.antialias ? 4 : 0,
            resolveDepthBuffer: f2.ignoreDepthValues === false,
            resolveStencilBuffer: f2.ignoreDepthValues === false,
            storeMultisampledDepthBuffer: f2.ignoreDepthValues === false,
            storeMultisampledStencilBuffer: f2.ignoreDepthValues === false
          });
        } else {
          let n3 = {
            antialias: b2.antialias,
            alpha: true,
            depth: b2.depth,
            stencil: b2.stencil,
            framebufferScaleFactor: i2
          };
          p2 = new XRWebGLLayer(r3, t2, n3), r3.updateRenderState({
            baseLayer: p2
          }), e21.setPixelRatio(1), e21.setSize(p2.framebufferWidth, p2.framebufferHeight, false), S2 = new At(p2.framebufferWidth, p2.framebufferHeight, {
            format: w,
            type: l,
            colorSpace: e21.outputColorSpace,
            stencilBuffer: b2.stencil,
            resolveDepthBuffer: p2.ignoreDepthValues === false,
            resolveStencilBuffer: p2.ignoreDepthValues === false,
            storeMultisampledDepthBuffer: p2.ignoreDepthValues === false,
            storeMultisampledStencilBuffer: p2.ignoreDepthValues === false
          });
        }
        S2.isXRRenderTarget = true, this.setFoveation(s2), c2 = null, a2 = await r3.requestReferenceSpace(o2), P2.setContext(r3), P2.start(), n2.isPresenting = true, n2.dispatchEvent({
          type: `sessionstart`
        });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r3 !== null) return r3.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _2.getDepthTexture();
    };
    function ae2(e22) {
      for (let t3 = 0; t3 < e22.removed.length; t3++) {
        let n3 = e22.removed[t3], r4 = D2.indexOf(n3);
        r4 >= 0 && (D2[r4] = null, C2[r4].disconnect(n3));
      }
      for (let t3 = 0; t3 < e22.added.length; t3++) {
        let n3 = e22.added[t3], r4 = D2.indexOf(n3);
        if (r4 === -1) {
          for (let e23 = 0; e23 < C2.length; e23++) if (e23 >= D2.length) {
            D2.push(n3), r4 = e23;
            break;
          } else if (D2[e23] === null) {
            D2[e23] = n3, r4 = e23;
            break;
          }
          if (r4 === -1) break;
        }
        let i3 = C2[r4];
        i3 && i3.connect(n3);
      }
    }
    function oe2(e22, t3) {
      t3 === null ? e22.matrixWorld.copy(e22.matrix) : e22.matrixWorld.multiplyMatrices(t3.matrixWorld, e22.matrix), e22.matrixWorldInverse.copy(e22.matrixWorld).invert();
    }
    this.updateCamera = function(e22) {
      if (r3 === null) return;
      let t3 = e22.near, n3 = e22.far;
      _2.texture !== null && (_2.depthNear > 0 && (t3 = _2.depthNear), _2.depthFar > 0 && (n3 = _2.depthFar)), M2.near = j2.near = ee2.near = t3, M2.far = j2.far = ee2.far = n3, (ne2 !== M2.near || N2 !== M2.far) && (r3.updateRenderState({
        depthNear: M2.near,
        depthFar: M2.far
      }), ne2 = M2.near, N2 = M2.far), M2.layers.mask = e22.layers.mask | 6, ee2.layers.mask = M2.layers.mask & -5, j2.layers.mask = M2.layers.mask & -3;
      let i3 = e22.parent, a3 = M2.cameras;
      oe2(M2, i3);
      for (let e23 = 0; e23 < a3.length; e23++) oe2(a3[e23], i3);
      M2.projectionMatrix.copy(ee2.projectionMatrix), M2.projectionMatrixInverse.copy(ee2.projectionMatrixInverse), A2 === null && e22.isPerspectiveCamera && (A2 = {
        camera: e22,
        fov: e22.fov,
        zoom: e22.zoom
      }), se2(e22, M2, i3);
    };
    function se2(e22, t3, n3) {
      n3 === null ? e22.matrix.copy(t3.matrixWorld) : (e22.matrix.copy(n3.matrixWorld), e22.matrix.invert(), e22.matrix.multiply(t3.matrixWorld)), e22.matrix.decompose(e22.position, e22.quaternion, e22.scale), e22.updateMatrixWorld(true), e22.projectionMatrix.copy(t3.projectionMatrix), e22.projectionMatrixInverse.copy(t3.projectionMatrixInverse), e22.isPerspectiveCamera && (e22.fov = rt * 2 * Math.atan(1 / e22.projectionMatrix.elements[5]), e22.zoom = 1);
    }
    this.getCamera = function() {
      return M2;
    }, this.getFoveation = function() {
      if (f2 !== null || p2 !== null) return s2;
    }, this.setFoveation = function(e22) {
      s2 = e22, f2 !== null && (f2.fixedFoveation = e22), p2 !== null && p2.fixedFoveation !== void 0 && (p2.fixedFoveation = e22);
    }, this.hasDepthSensing = function() {
      return _2.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _2.getMesh(M2);
    }, this.getCameraTexture = function(e22) {
      return v2[e22];
    };
    let ce2 = null;
    function le2(t3, i3) {
      if (u2 = i3.getViewerPose(c2 || a2), h2 = i3, u2 !== null) {
        let t4 = u2.views;
        p2 !== null && (e21.setRenderTargetFramebuffer(S2, p2.framebuffer), e21.setRenderTarget(S2));
        let i4 = false;
        t4.length !== M2.cameras.length && (M2.cameras.length = 0, i4 = true);
        for (let n3 = 0; n3 < t4.length; n3++) {
          let r4 = t4[n3], a4 = null;
          if (p2 !== null) a4 = p2.getViewport(r4);
          else {
            let t5 = d2.getViewSubImage(f2, r4);
            a4 = t5.viewport, n3 === 0 && (e21.setRenderTargetTextures(S2, t5.colorTexture, t5.depthStencilTexture), e21.setRenderTarget(S2));
          }
          let o3 = te2[n3];
          o3 === void 0 && (o3 = new Ao(), o3.layers.enable(n3), o3.viewport = new Ot(), te2[n3] = o3), o3.matrix.fromArray(r4.transform.matrix), o3.matrix.decompose(o3.position, o3.quaternion, o3.scale), o3.projectionMatrix.fromArray(r4.projectionMatrix), o3.projectionMatrixInverse.copy(o3.projectionMatrix).invert(), o3.viewport.set(a4.x, a4.y, a4.width, a4.height), n3 === 0 && (M2.matrix.copy(o3.matrix), M2.matrix.decompose(M2.position, M2.quaternion, M2.scale)), i4 === true && M2.cameras.push(o3);
        }
        let a3 = r3.enabledFeatures;
        if (a3 && a3.includes(`depth-sensing`) && r3.depthUsage == `gpu-optimized` && g2) {
          d2 = n2.getBinding();
          let e22 = d2.getDepthInformation(t4[0]);
          e22 && e22.isValid && e22.texture && _2.init(e22, r3.renderState);
        }
        if (a3 && a3.includes(`camera-access`) && g2) {
          e21.state.unbindTexture(), d2 = n2.getBinding();
          for (let e22 = 0; e22 < t4.length; e22++) {
            let n3 = t4[e22].camera;
            if (n3) {
              let e23 = v2[n3];
              e23 || (e23 = new mi(), v2[n3] = e23);
              let t5 = d2.getCameraImage(n3);
              e23.sourceTexture = t5;
            }
          }
        }
      }
      for (let e22 = 0; e22 < C2.length; e22++) {
        let t4 = D2[e22], n3 = C2[e22];
        t4 !== null && n3 !== void 0 && n3.update(t4, i3, c2 || a2);
      }
      ce2 && ce2(t3, i3), i3.detectedPlanes && n2.dispatchEvent({
        type: `planesdetected`,
        data: i3
      }), h2 = null;
    }
    let P2 = new Qo();
    P2.setAnimationLoop(le2), this.setAnimationLoop = function(e22) {
      ce2 = e22;
    }, this.dispose = function() {
    };
  }
};
var eu = new Nt();
var tu = new W();
tu.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function nu(e21, t2) {
  function n2(e22, t3) {
    e22.matrixAutoUpdate === true && e22.updateMatrix(), t3.value.copy(e22.matrix);
  }
  function r3(t3, n3) {
    n3.color.getRGB(t3.fogColor.value, Va(e21)), n3.isFog ? (t3.fogNear.value = n3.near, t3.fogFar.value = n3.far) : n3.isFogExp2 && (t3.fogDensity.value = n3.density);
  }
  function i2(e22, t3, n3, r4, i3) {
    t3.isNodeMaterial ? t3.uniformsNeedUpdate = false : t3.isMeshBasicMaterial ? a2(e22, t3) : t3.isMeshLambertMaterial ? (a2(e22, t3), t3.envMap && (e22.envMapIntensity.value = t3.envMapIntensity)) : t3.isMeshToonMaterial ? (a2(e22, t3), d2(e22, t3)) : t3.isMeshPhongMaterial ? (a2(e22, t3), u2(e22, t3), t3.envMap && (e22.envMapIntensity.value = t3.envMapIntensity)) : t3.isMeshStandardMaterial ? (a2(e22, t3), f2(e22, t3), t3.isMeshPhysicalMaterial && p2(e22, t3, i3)) : t3.isMeshMatcapMaterial ? (a2(e22, t3), m2(e22, t3)) : t3.isMeshDepthMaterial ? a2(e22, t3) : t3.isMeshDistanceMaterial ? (a2(e22, t3), h2(e22, t3)) : t3.isMeshNormalMaterial ? a2(e22, t3) : t3.isLineBasicMaterial ? (o2(e22, t3), t3.isLineDashedMaterial && s2(e22, t3)) : t3.isPointsMaterial ? c2(e22, t3, n3, r4) : t3.isSpriteMaterial ? l2(e22, t3) : t3.isShadowMaterial ? (e22.color.value.copy(t3.color), e22.opacity.value = t3.opacity) : t3.isShaderMaterial && (t3.uniformsNeedUpdate = false);
  }
  function a2(e22, r4) {
    e22.opacity.value = r4.opacity, r4.color && e22.diffuse.value.copy(r4.color), r4.emissive && e22.emissive.value.copy(r4.emissive).multiplyScalar(r4.emissiveIntensity), r4.map && (e22.map.value = r4.map, n2(r4.map, e22.mapTransform)), r4.alphaMap && (e22.alphaMap.value = r4.alphaMap, n2(r4.alphaMap, e22.alphaMapTransform)), r4.bumpMap && (e22.bumpMap.value = r4.bumpMap, n2(r4.bumpMap, e22.bumpMapTransform), e22.bumpScale.value = r4.bumpScale, r4.side === 1 && (e22.bumpScale.value *= -1)), r4.normalMap && (e22.normalMap.value = r4.normalMap, n2(r4.normalMap, e22.normalMapTransform), e22.normalScale.value.copy(r4.normalScale), r4.side === 1 && e22.normalScale.value.negate()), r4.displacementMap && (e22.displacementMap.value = r4.displacementMap, n2(r4.displacementMap, e22.displacementMapTransform), e22.displacementScale.value = r4.displacementScale, e22.displacementBias.value = r4.displacementBias), r4.emissiveMap && (e22.emissiveMap.value = r4.emissiveMap, n2(r4.emissiveMap, e22.emissiveMapTransform)), r4.specularMap && (e22.specularMap.value = r4.specularMap, n2(r4.specularMap, e22.specularMapTransform)), r4.alphaTest > 0 && (e22.alphaTest.value = r4.alphaTest);
    let i3 = t2.get(r4), a3 = i3.envMap, o3 = i3.envMapRotation;
    a3 && (e22.envMap.value = a3, e22.envMapRotation.value.setFromMatrix4(eu.makeRotationFromEuler(o3)).transpose(), a3.isCubeTexture && a3.isRenderTargetTexture === false && e22.envMapRotation.value.premultiply(tu), e22.reflectivity.value = r4.reflectivity, e22.ior.value = r4.ior, e22.refractionRatio.value = r4.refractionRatio), r4.lightMap && (e22.lightMap.value = r4.lightMap, e22.lightMapIntensity.value = r4.lightMapIntensity, n2(r4.lightMap, e22.lightMapTransform)), r4.aoMap && (e22.aoMap.value = r4.aoMap, e22.aoMapIntensity.value = r4.aoMapIntensity, n2(r4.aoMap, e22.aoMapTransform));
  }
  function o2(e22, t3) {
    e22.diffuse.value.copy(t3.color), e22.opacity.value = t3.opacity, t3.map && (e22.map.value = t3.map, n2(t3.map, e22.mapTransform));
  }
  function s2(e22, t3) {
    e22.dashSize.value = t3.dashSize, e22.totalSize.value = t3.dashSize + t3.gapSize, e22.scale.value = t3.scale;
  }
  function c2(e22, t3, r4, i3) {
    e22.diffuse.value.copy(t3.color), e22.opacity.value = t3.opacity, e22.size.value = t3.size * r4, e22.scale.value = i3 * 0.5, t3.map && (e22.map.value = t3.map, n2(t3.map, e22.uvTransform)), t3.alphaMap && (e22.alphaMap.value = t3.alphaMap, n2(t3.alphaMap, e22.alphaMapTransform)), t3.alphaTest > 0 && (e22.alphaTest.value = t3.alphaTest);
  }
  function l2(e22, t3) {
    e22.diffuse.value.copy(t3.color), e22.opacity.value = t3.opacity, e22.rotation.value = t3.rotation, t3.map && (e22.map.value = t3.map, n2(t3.map, e22.mapTransform)), t3.alphaMap && (e22.alphaMap.value = t3.alphaMap, n2(t3.alphaMap, e22.alphaMapTransform)), t3.alphaTest > 0 && (e22.alphaTest.value = t3.alphaTest);
  }
  function u2(e22, t3) {
    e22.specular.value.copy(t3.specular), e22.shininess.value = Math.max(t3.shininess, 1e-4);
  }
  function d2(e22, t3) {
    t3.gradientMap && (e22.gradientMap.value = t3.gradientMap);
  }
  function f2(e22, t3) {
    e22.metalness.value = t3.metalness, t3.metalnessMap && (e22.metalnessMap.value = t3.metalnessMap, n2(t3.metalnessMap, e22.metalnessMapTransform)), e22.roughness.value = t3.roughness, t3.roughnessMap && (e22.roughnessMap.value = t3.roughnessMap, n2(t3.roughnessMap, e22.roughnessMapTransform)), t3.envMap && (e22.envMapIntensity.value = t3.envMapIntensity);
  }
  function p2(e22, t3, r4) {
    e22.ior.value = t3.ior, t3.diffuseRoughness > 0 && (e22.diffuseRoughness.value = t3.diffuseRoughness, t3.diffuseRoughnessMap && (e22.diffuseRoughnessMap.value = t3.diffuseRoughnessMap, n2(t3.diffuseRoughnessMap, e22.diffuseRoughnessMapTransform))), t3.sheen > 0 && (e22.sheenColor.value.copy(t3.sheenColor).multiplyScalar(t3.sheen), e22.sheenRoughness.value = t3.sheenRoughness, t3.sheenColorMap && (e22.sheenColorMap.value = t3.sheenColorMap, n2(t3.sheenColorMap, e22.sheenColorMapTransform)), t3.sheenRoughnessMap && (e22.sheenRoughnessMap.value = t3.sheenRoughnessMap, n2(t3.sheenRoughnessMap, e22.sheenRoughnessMapTransform))), t3.clearcoat > 0 && (e22.clearcoat.value = t3.clearcoat, e22.clearcoatRoughness.value = t3.clearcoatRoughness, t3.clearcoatMap && (e22.clearcoatMap.value = t3.clearcoatMap, n2(t3.clearcoatMap, e22.clearcoatMapTransform)), t3.clearcoatRoughnessMap && (e22.clearcoatRoughnessMap.value = t3.clearcoatRoughnessMap, n2(t3.clearcoatRoughnessMap, e22.clearcoatRoughnessMapTransform)), t3.clearcoatNormalMap && (e22.clearcoatNormalMap.value = t3.clearcoatNormalMap, n2(t3.clearcoatNormalMap, e22.clearcoatNormalMapTransform), e22.clearcoatNormalScale.value.copy(t3.clearcoatNormalScale), t3.side === 1 && e22.clearcoatNormalScale.value.negate())), t3.dispersion > 0 && (e22.dispersion.value = t3.dispersion), t3.retroreflectivity > 0 && (e22.retroreflectivity.value = t3.retroreflectivity), t3.iridescence > 0 && (e22.iridescence.value = t3.iridescence, e22.iridescenceIOR.value = t3.iridescenceIOR, e22.iridescenceThicknessMinimum.value = t3.iridescenceThicknessMinimum, e22.iridescenceThicknessMaximum.value = t3.iridescenceThicknessMaximum, t3.iridescenceMap && (e22.iridescenceMap.value = t3.iridescenceMap, n2(t3.iridescenceMap, e22.iridescenceMapTransform)), t3.iridescenceThicknessMap && (e22.iridescenceThicknessMap.value = t3.iridescenceThicknessMap, n2(t3.iridescenceThicknessMap, e22.iridescenceThicknessMapTransform))), t3.transmission > 0 && (e22.transmission.value = t3.transmission, e22.transmissionSamplerMap.value = r4.texture, e22.transmissionSamplerSize.value.set(r4.width, r4.height), t3.transmissionMap && (e22.transmissionMap.value = t3.transmissionMap, n2(t3.transmissionMap, e22.transmissionMapTransform)), e22.thickness.value = t3.thickness, t3.thicknessMap && (e22.thicknessMap.value = t3.thicknessMap, n2(t3.thicknessMap, e22.thicknessMapTransform)), e22.attenuationDistance.value = t3.attenuationDistance, e22.attenuationColor.value.copy(t3.attenuationColor)), t3.anisotropy > 0 && (e22.anisotropyVector.value.set(t3.anisotropy * Math.cos(t3.anisotropyRotation), t3.anisotropy * Math.sin(t3.anisotropyRotation)), t3.anisotropyMap && (e22.anisotropyMap.value = t3.anisotropyMap, n2(t3.anisotropyMap, e22.anisotropyMapTransform))), e22.specularIntensity.value = t3.specularIntensity, e22.specularColor.value.copy(t3.specularColor), t3.specularColorMap && (e22.specularColorMap.value = t3.specularColorMap, n2(t3.specularColorMap, e22.specularColorMapTransform)), t3.specularIntensityMap && (e22.specularIntensityMap.value = t3.specularIntensityMap, n2(t3.specularIntensityMap, e22.specularIntensityMapTransform));
  }
  function m2(e22, t3) {
    t3.matcap && (e22.matcap.value = t3.matcap);
  }
  function h2(e22, n3) {
    let r4 = t2.get(n3).light;
    e22.referencePosition.value.setFromMatrixPosition(r4.matrixWorld), e22.nearDistance.value = r4.shadow.camera.near, e22.farDistance.value = r4.shadow.camera.far;
  }
  return {
    refreshFogUniforms: r3,
    refreshMaterialUniforms: i2
  };
}
function ru(e21, t2, n2, r3) {
  let i2 = {}, a2 = {};
  function o2(e22, t3) {
    let n3 = t3.program;
    r3.uniformBlockBinding(e22, n3, i2[e22.id]);
  }
  function s2(e22, n3) {
    let o3 = i2[e22.id];
    o3 === void 0 && (m2(e22), o3 = c2(e22), i2[e22.id] = o3, e22.addEventListener(`dispose`, g2));
    let s3 = n3.program;
    r3.updateUBOMapping(e22, s3);
    let u3 = t2.render.frame;
    a2[e22.id] !== u3 && (l2(e22), a2[e22.id] = u3);
  }
  function c2(t3) {
    let n3 = e21.createBuffer(), r4 = t3.__size, i3 = t3.usage;
    return e21.bindBuffer(e21.UNIFORM_BUFFER, n3), e21.bufferData(e21.UNIFORM_BUFFER, r4, i3), e21.bindBuffer(e21.UNIFORM_BUFFER, null), n3;
  }
  function l2(t3) {
    let n3 = i2[t3.id], r4 = t3.uniforms, a3 = t3.__cache;
    e21.bindBuffer(e21.UNIFORM_BUFFER, n3);
    for (let e22 = 0, t4 = r4.length; e22 < t4; e22++) {
      let t5 = r4[e22];
      if (Array.isArray(t5)) for (let n4 = 0, r5 = t5.length; n4 < r5; n4++) u2(t5[n4], e22, n4, a3);
      else u2(t5, e22, 0, a3);
    }
    e21.bindBuffer(e21.UNIFORM_BUFFER, null);
  }
  function u2(t3, n3, r4, i3) {
    if (f2(t3, n3, r4, i3) === true) {
      let n4 = t3.__offset, r5 = t3.value;
      if (Array.isArray(r5)) {
        let e22 = 0;
        for (let n5 = 0; n5 < r5.length; n5++) {
          let i4 = r5[n5], a3 = h2(i4, true);
          d2(i4, t3.__data, e22), e22 += a3.storage / Float32Array.BYTES_PER_ELEMENT;
        }
      } else d2(r5, t3.__data, 0);
      e21.bufferSubData(e21.UNIFORM_BUFFER, n4, t3.__data);
    }
  }
  function d2(e22, t3, n3) {
    typeof e22 == `number` || typeof e22 == `boolean` ? t3[n3] = e22 : e22.isMatrix3 ? (t3[n3] = e22.elements[0], t3[n3 + 1] = e22.elements[1], t3[n3 + 2] = e22.elements[2], t3[n3 + 3] = 0, t3[n3 + 4] = e22.elements[3], t3[n3 + 5] = e22.elements[4], t3[n3 + 6] = e22.elements[5], t3[n3 + 7] = 0, t3[n3 + 8] = e22.elements[6], t3[n3 + 9] = e22.elements[7], t3[n3 + 10] = e22.elements[8], t3[n3 + 11] = 0) : ArrayBuffer.isView(e22) ? t3.set(e22.subarray(0, t3.length - n3), n3) : e22.toArray(t3, n3);
  }
  function f2(e22, t3, n3, r4) {
    let i3 = e22.value, a3 = t3 + `_` + n3;
    if (Array.isArray(i3)) {
      r4[a3] === void 0 && (r4[a3] = []);
      let e23 = r4[a3], t4 = false;
      for (let n4 = 0; n4 < i3.length; n4++) p2(i3[n4], e23, n4) === true && (t4 = true);
      return t4;
    }
    return p2(i3, r4, a3);
  }
  function p2(e22, t3, n3) {
    if (t3[n3] === void 0) return t3[n3] = typeof e22 == `number` || typeof e22 == `boolean` ? e22 : ArrayBuffer.isView(e22) ? e22.slice() : e22.clone(), true;
    {
      let r4 = t3[n3];
      if (typeof e22 == `number` || typeof e22 == `boolean`) {
        if (r4 !== e22) return t3[n3] = e22, true;
      } else if (ArrayBuffer.isView(e22)) return true;
      else if (r4.equals(e22) === false) return r4.copy(e22), true;
    }
    return false;
  }
  function m2(e22) {
    let t3 = e22.uniforms, n3 = 0;
    for (let e23 = 0, r5 = t3.length; e23 < r5; e23++) {
      let r6 = Array.isArray(t3[e23]) ? t3[e23] : [t3[e23]];
      for (let i3 = 0, a3 = r6.length; i3 < a3; i3++) {
        let a4 = r6[i3], o3 = Array.isArray(a4.value) ? a4.value : [a4.value], s3 = Array.isArray(t3[e23]) || Array.isArray(a4.value), c3 = n3;
        for (let e24 = 0, t4 = o3.length; e24 < t4; e24++) {
          let t5 = o3[e24], r7 = h2(t5, s3), i4 = n3 % 16, a5 = i4 % r7.boundary, l3 = i4 + a5;
          n3 += a5, l3 !== 0 && 16 - l3 < r7.storage && (n3 += 16 - l3), e24 === 0 && (c3 = n3), n3 += r7.storage;
        }
        a4.__data = new (a4.type === `int` ? Int32Array : a4.type === `uint` ? Uint32Array : Float32Array)((n3 - c3) / Float32Array.BYTES_PER_ELEMENT), a4.__offset = c3;
      }
    }
    let r4 = n3 % 16;
    return r4 > 0 && (n3 += 16 - r4), e22.__size = n3, e22.__cache = {}, this;
  }
  function h2(e22, t3) {
    let n3 = {
      boundary: 0,
      storage: 0
    };
    return typeof e22 == `number` || typeof e22 == `boolean` ? (n3.boundary = 4, n3.storage = 4) : e22.isVector2 ? (n3.boundary = 8, n3.storage = 8) : e22.isVector3 || e22.isColor ? (n3.boundary = 16, n3.storage = 12) : e22.isVector4 ? (n3.boundary = 16, n3.storage = 16) : e22.isMatrix3 ? (n3.boundary = 16, n3.storage = 48) : e22.isMatrix4 ? (n3.boundary = 16, n3.storage = 64) : e22.isTexture ? z(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`) : ArrayBuffer.isView(e22) ? (n3.boundary = 16, n3.storage = e22.byteLength) : z(`WebGLRenderer: Unsupported uniform value type.`, e22), t3 === true && (n3.boundary = 16, n3.storage = Math.ceil(n3.storage / 16) * 16), n3;
  }
  function g2(t3) {
    let n3 = t3.target;
    n3.removeEventListener(`dispose`, g2), e21.deleteBuffer(i2[n3.id]), delete i2[n3.id], delete a2[n3.id];
  }
  function _2() {
    for (let t3 in i2) e21.deleteBuffer(i2[t3]);
    i2 = {}, a2 = {};
  }
  return {
    bind: o2,
    update: s2,
    dispose: _2
  };
}
var iu = new Uint16Array([12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545, 13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829, 15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880, 14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410, 14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958, 11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039, 14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743, 12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751, 14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764, 13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387, 14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782, 10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831, 14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886, 11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600, 14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104, 12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205, 14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603, 8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451, 15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932, 10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461, 8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883, 9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279, 7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007, 5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302, 6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679, 6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377, 4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808, 3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1, 15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702, 1183]);
var au = null;
function ou() {
  return au === null && (au = new ri(iu, 16, 16, k, g), au.name = `DFG_LUT`, au.minFilter = o, au.magFilter = o, au.wrapS = t, au.wrapT = t, au.generateMipmaps = false, au.needsUpdate = true), au;
}
var su = class {
  constructor(e21 = {}) {
    let {
      canvas: t2 = qe(),
      context: n2 = null,
      depth: r3 = true,
      stencil: i2 = false,
      alpha: a2 = false,
      antialias: o2 = false,
      premultipliedAlpha: s2 = true,
      preserveDrawingBuffer: u2 = false,
      powerPreference: d2 = `default`,
      failIfMajorPerformanceCaveat: p2 = false,
      reversedDepthBuffer: h2 = false,
      outputBufferType: b2 = l
    } = e21;
    this.isWebGLRenderer = true;
    let x2;
    if (n2 !== null) {
      if (typeof WebGLRenderingContext < `u` && n2 instanceof WebGLRenderingContext) throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);
      x2 = n2.getContextAttributes().alpha;
    } else x2 = a2;
    let S2 = b2, C2 = /* @__PURE__ */ new Set([ee, A, O]), w2 = /* @__PURE__ */ new Set([l, m, f, y, _, v]), T2 = new Uint32Array(4), E2 = new Int32Array(4), D2 = {
      textures: [],
      min: [],
      max: [],
      resolution: []
    }, k2 = null, j2 = null, te2 = [], M2 = [], ne2 = null;
    this.domElement = t2, this.debug = {
      checkShaderErrors: true,
      diagnostics: {
        keywords: false
      },
      onShaderError: null
    }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    let N2 = this, re2 = false, ie2 = null, ae2 = null, oe2 = null, se2 = null;
    this._outputColorSpace = ze;
    let ce2 = 0, le2 = 0, P2 = null, ue2 = -1, de2 = null, fe2 = new Ot(), pe2 = new Ot(), me2 = null, he2 = new K(0), ge2 = 0, _e2 = t2.width, ve2 = t2.height, ye2 = 1, be2 = null, xe2 = null, Se2 = new Ot(0, 0, _e2, ve2), Ce2 = new Ot(0, 0, _e2, ve2), we2 = false, Te2 = new si(), Ee2 = new li(), De2 = false, Oe2 = false, ke2 = new Nt(), Ae2 = new U(), je2 = new Ot(), Me2 = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: true
    }, Ne2 = false;
    function Pe2() {
      return P2 === null ? ye2 : 1;
    }
    let F2 = n2;
    function Fe2(e22, n3) {
      return t2.getContext(e22, n3);
    }
    let Ie2, Le2, I2, Re2, L2, R2, Be2, Ve2, He2, We2, Ge2, Ke2, Je2, Xe2, Ze2, $e2, et2, tt2, nt2, rt2, it2, V2, at2;
    try {
      let e22 = {
        alpha: true,
        depth: r3,
        stencil: i2,
        antialias: o2,
        premultipliedAlpha: s2,
        preserveDrawingBuffer: u2,
        powerPreference: d2,
        failIfMajorPerformanceCaveat: p2
      };
      if (`setAttribute` in t2 && t2.setAttribute(`data-engine`, `three.js r187`), t2.addEventListener(`webglcontextlost`, ct2, false), t2.addEventListener(`webglcontextrestored`, lt2, false), t2.addEventListener(`webglcontextcreationerror`, ut2, false), F2 === null) {
        let t3 = `webgl2`;
        if (F2 = Fe2(t3, e22), F2 === null) throw Fe2(t3) ? Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`) : Error(`THREE.WebGLRenderer: Error creating WebGL context.`);
      }
      ot2();
    } catch (e22) {
      throw t2.removeEventListener(`webglcontextlost`, ct2, false), t2.removeEventListener(`webglcontextrestored`, lt2, false), t2.removeEventListener(`webglcontextcreationerror`, ut2, false), B(`WebGLRenderer: ` + e22.message), e22;
    }
    function ot2() {
      Ie2 = new Ds(F2), Ie2.init(), it2 = new Yl(F2, Ie2), Le2 = new ss(F2, Ie2, e21, it2), I2 = new ql(F2, Ie2), Le2.reversedDepthBuffer && h2 && I2.buffers.depth.setReversed(true), ae2 = F2.createFramebuffer(), oe2 = F2.createFramebuffer(), se2 = F2.createFramebuffer(), Re2 = new As(F2), L2 = new Dl(), R2 = new Jl(F2, Ie2, I2, L2, Le2, it2, Re2), Be2 = new Es(N2), Ve2 = new $o(F2), V2 = new as(F2, Ve2), He2 = new Os(F2, Ve2, Re2, V2), We2 = new Ms(F2, He2, Ve2, V2, Re2), tt2 = new js(F2, Le2, R2), Ze2 = new cs(L2), Ge2 = new El(N2, Be2, Ie2, Le2, V2, Ze2), Ke2 = new nu(N2, L2), Je2 = new jl(), Xe2 = new Rl(Ie2), et2 = new is(N2, Be2, I2, We2, x2, s2), $e2 = new Kl(N2, We2, Le2), at2 = new ru(F2, Re2, Le2, I2), nt2 = new os(F2, Ie2, Re2), rt2 = new ks(F2, Ie2, Re2), Re2.programs = Ge2.programs, N2.capabilities = Le2, N2.extensions = Ie2, N2.properties = L2, N2.renderLists = Je2, N2.shadowMap = $e2, N2.state = I2, N2.info = Re2;
    }
    S2 !== 1009 && (ne2 = new Ps(S2, t2.width, t2.height, o2, r3, i2));
    let st2 = new $l(N2, F2);
    this.xr = st2, this.getContext = function() {
      return F2;
    }, this.getContextAttributes = function() {
      return F2.getContextAttributes();
    }, this.forceContextLoss = function() {
      let e22 = Ie2.get(`WEBGL_lose_context`);
      e22 && e22.loseContext();
    }, this.forceContextRestore = function() {
      let e22 = Ie2.get(`WEBGL_lose_context`);
      e22 && e22.restoreContext();
    }, this.getPixelRatio = function() {
      return ye2;
    }, this.setPixelRatio = function(e22) {
      e22 !== void 0 && (ye2 = e22, this.setSize(_e2, ve2, false));
    }, this.getSize = function(e22) {
      return e22.set(_e2, ve2);
    }, this.setSize = function(e22, n3, r4 = true) {
      st2.isPresenting ? z(`WebGLRenderer: Can't change size while VR device is presenting.`) : (_e2 = e22, ve2 = n3, t2.width = Math.floor(e22 * ye2), t2.height = Math.floor(n3 * ye2), r4 === true && (t2.style.width = e22 + `px`, t2.style.height = n3 + `px`), ne2 !== null && ne2.setSize(t2.width, t2.height), this.setViewport(0, 0, e22, n3));
    }, this.getDrawingBufferSize = function(e22) {
      return e22.set(_e2 * ye2, ve2 * ye2).floor();
    }, this.setDrawingBufferSize = function(e22, n3, r4) {
      _e2 = e22, ve2 = n3, ye2 = r4, t2.width = Math.floor(e22 * r4), t2.height = Math.floor(n3 * r4), this.setViewport(0, 0, e22, n3);
    }, this.setEffects = function(e22) {
      if (S2 === 1009) B(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);
      else {
        if (e22) {
          for (let t3 = 0; t3 < e22.length; t3++) if (e22[t3].isOutputPass === true) {
            z(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);
            break;
          }
        }
        ne2.setEffects(e22 || []);
      }
    }, this.getCurrentViewport = function(e22) {
      return e22.copy(fe2);
    }, this.getViewport = function(e22) {
      return e22.copy(Se2);
    }, this.setViewport = function(e22, t3, n3, r4) {
      e22.isVector4 ? Se2.set(e22.x, e22.y, e22.z, e22.w) : Se2.set(e22, t3, n3, r4), I2.viewport(fe2.copy(Se2).multiplyScalar(Pe2()).round());
    }, this.getScissor = function(e22) {
      return e22.copy(Ce2);
    }, this.setScissor = function(e22, t3, n3, r4) {
      e22.isVector4 ? Ce2.set(e22.x, e22.y, e22.z, e22.w) : Ce2.set(e22, t3, n3, r4), I2.scissor(pe2.copy(Ce2).multiplyScalar(Pe2()).round());
    }, this.getScissorTest = function() {
      return we2;
    }, this.setScissorTest = function(e22) {
      I2.setScissorTest(we2 = e22);
    }, this.setOpaqueSort = function(e22) {
      be2 = e22;
    }, this.setTransparentSort = function(e22) {
      xe2 = e22;
    }, this.getClearColor = function(e22) {
      return e22.copy(et2.getClearColor());
    }, this.setClearColor = function() {
      et2.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return et2.getClearAlpha();
    }, this.setClearAlpha = function() {
      et2.setClearAlpha(...arguments);
    }, this.clear = function(e22 = true, t3 = true, n3 = true) {
      let r4 = 0;
      if (e22) {
        let e23 = false;
        if (P2 !== null) {
          let t4 = P2.texture.format;
          e23 = C2.has(t4);
        }
        if (e23) {
          let e24 = P2.texture.type, t4 = w2.has(e24), n4 = et2.getClearColor(), r5 = et2.getClearAlpha(), i3 = n4.r, a3 = n4.g, o3 = n4.b;
          t4 ? (T2[0] = i3, T2[1] = a3, T2[2] = o3, T2[3] = r5, F2.clearBufferuiv(F2.COLOR, 0, T2)) : (E2[0] = i3, E2[1] = a3, E2[2] = o3, E2[3] = r5, F2.clearBufferiv(F2.COLOR, 0, E2));
        } else r4 |= F2.COLOR_BUFFER_BIT;
      }
      t3 && (r4 |= F2.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(true)), n3 && (r4 |= F2.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), r4 !== 0 && F2.clear(r4);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.setNodesHandler = function(e22) {
      e22.setRenderer(this), ie2 = e22;
    }, this.dispose = function() {
      t2.removeEventListener(`webglcontextlost`, ct2, false), t2.removeEventListener(`webglcontextrestored`, lt2, false), t2.removeEventListener(`webglcontextcreationerror`, ut2, false), et2.dispose(), Je2.dispose(), Xe2.dispose(), R2.dispose(), L2.dispose(), Be2.dispose(), We2.dispose(), He2.dispose(), V2.dispose(), at2.dispose(), Ge2.dispose(), st2.dispose(), st2.removeEventListener(`sessionstart`, ht2), st2.removeEventListener(`sessionend`, gt2), _t2.stop();
    };
    function ct2(e22) {
      e22.preventDefault(), Ye(`WebGLRenderer: Context Lost.`), re2 = true;
    }
    function lt2() {
      Ye(`WebGLRenderer: Context Restored.`), re2 = false;
      let e22 = Re2.autoReset, t3 = $e2.enabled, n3 = $e2.autoUpdate, r4 = $e2.needsUpdate, i3 = $e2.type;
      ot2(), Re2.autoReset = e22, $e2.enabled = t3, $e2.autoUpdate = n3, $e2.needsUpdate = r4, $e2.type = i3;
    }
    function ut2(e22) {
      B(`WebGLRenderer: A WebGL context could not be created. Reason: `, e22.statusMessage);
    }
    function H2(e22) {
      let t3 = e22.target;
      t3.removeEventListener(`dispose`, H2), dt2(t3);
    }
    function dt2(e22) {
      ft2(e22), L2.remove(e22);
    }
    function ft2(e22) {
      let t3 = L2.get(e22).programs;
      t3 !== void 0 && (t3.forEach(function(e23) {
        Ge2.releaseProgram(e23);
      }), e22.isShaderMaterial && Ge2.releaseShaderCache(e22));
    }
    this.renderBufferDirect = function(e22, t3, n3, r4, i3, a3) {
      t3 === null && (t3 = Me2);
      let o3 = i3.isMesh && i3.matrixWorld.determinantAffine() < 0, s3 = kt2(e22, t3, n3, r4, i3);
      I2.setMaterial(r4, o3);
      let c2 = n3.index, l2 = 1;
      if (r4.wireframe === true) {
        if (c2 = He2.getWireframeAttribute(n3), c2 === void 0) return;
        l2 = 2;
      }
      let u3 = n3.drawRange, d3 = n3.attributes.position, f2 = u3.start * l2, p3 = (u3.start + u3.count) * l2;
      a3 !== null && (f2 = Math.max(f2, a3.start * l2), p3 = Math.min(p3, (a3.start + a3.count) * l2)), c2 === null ? d3 != null && (f2 = Math.max(f2, 0), p3 = Math.min(p3, d3.count)) : (f2 = Math.max(f2, 0), p3 = Math.min(p3, c2.count));
      let m2 = p3 - f2;
      if (m2 < 0 || m2 === 1 / 0) return;
      V2.setup(i3, r4, s3, n3, c2);
      let h3, g2 = nt2;
      if (c2 !== null && (h3 = Ve2.get(c2), g2 = rt2, g2.setIndex(h3)), i3.isMesh) r4.wireframe === true ? (I2.setLineWidth(r4.wireframeLinewidth * Pe2()), g2.setMode(F2.LINES)) : g2.setMode(F2.TRIANGLES);
      else if (i3.isLine) {
        let e23 = r4.linewidth;
        e23 === void 0 && (e23 = 1), I2.setLineWidth(e23 * Pe2()), i3.isLineSegments ? g2.setMode(F2.LINES) : i3.isLineLoop ? g2.setMode(F2.LINE_LOOP) : g2.setMode(F2.LINE_STRIP);
      } else i3.isPoints ? g2.setMode(F2.POINTS) : i3.isSprite && g2.setMode(F2.TRIANGLES);
      if (i3.isBatchedMesh) {
        if (Ie2.get(`WEBGL_multi_draw`)) g2.renderMultiDraw(i3._multiDrawStarts, i3._multiDrawCounts, i3._multiDrawCount);
        else {
          let e23 = i3._multiDrawStarts, t4 = i3._multiDrawCounts, n4 = i3._multiDrawCount, a4 = c2 ? Ve2.get(c2).bytesPerElement : 1, o4 = L2.get(r4).currentProgram.getUniforms();
          for (let r5 = 0; r5 < n4; r5++) o4.setValue(F2, `_gl_DrawID`, r5), g2.render(e23[r5] / a4, t4[r5]);
        }
      } else if (i3.isInstancedMesh) g2.renderInstances(f2, m2, i3.count);
      else if (n3.isInstancedBufferGeometry) {
        let e23 = n3._maxInstanceCount === void 0 ? 1 / 0 : n3._maxInstanceCount, t4 = Math.min(n3.instanceCount, e23);
        g2.renderInstances(f2, m2, t4);
      } else g2.render(f2, m2);
    };
    function pt2(e22, t3, n3, r4) {
      ie2 !== null && e22.isNodeMaterial && ie2.setObject(r4, e22), De2 === true && Ze2.setState(e22, n3, false), e22.transparent === true && e22.side === 2 && e22.forceSinglePass === false ? (e22.side = 1, e22.needsUpdate = true, wt2(e22, t3, r4), e22.side = 0, e22.needsUpdate = true, wt2(e22, t3, r4), e22.side = 2) : wt2(e22, t3, r4);
    }
    this.compile = function(e22, t3, n3 = null) {
      n3 === null && (n3 = e22), ie2 !== null && ie2.renderStart(e22, t3, n3), j2 = Xe2.get(n3), j2.init(t3), M2.push(j2), n3.traverseVisible(function(e23) {
        e23.isLight && e23.layers.test(t3.layers) && (j2.pushLight(e23), e23.castShadow && j2.pushShadow(e23));
      }), e22 !== n3 && e22.traverseVisible(function(e23) {
        e23.isLight && e23.layers.test(t3.layers) && (j2.pushLight(e23), e23.castShadow && j2.pushShadow(e23));
      }), j2.setupLights(), ie2 !== null && ie2.updateLights(j2.state.lightsArray), Oe2 = this.localClippingEnabled, De2 = Ze2.init(this.clippingPlanes, Oe2), De2 === true && Ze2.setGlobalState(this.clippingPlanes, t3), ie2 !== null && $e2.render(j2.state.shadowsArray, n3, t3);
      let r4 = /* @__PURE__ */ new Set();
      return e22.traverse(function(e23) {
        if (!(e23.isMesh || e23.isPoints || e23.isLine || e23.isSprite)) return;
        let i3 = e23.material;
        if (i3) {
          if (Array.isArray(i3)) for (let a3 = 0; a3 < i3.length; a3++) {
            let o3 = i3[a3];
            pt2(o3, n3, t3, e23), r4.add(o3);
          }
          else pt2(i3, n3, t3, e23), r4.add(i3);
        }
      }), j2 = M2.pop(), ie2 !== null && ie2.renderEnd(), r4;
    }, this.compileAsync = function(e22, t3, n3 = null) {
      let r4 = this.compile(e22, t3, n3);
      return new Promise((t4) => {
        function n4() {
          r4.forEach(function(e23) {
            let t5 = L2.get(e23).currentProgram;
            (t5 === void 0 || t5.isReady()) && r4.delete(e23);
          }), r4.size === 0 ? t4(e22) : setTimeout(n4, 10);
        }
        Ie2.get(`KHR_parallel_shader_compile`) === null ? setTimeout(n4, 10) : n4();
      });
    };
    let W2 = null;
    function mt2(e22) {
      W2 && W2(e22);
    }
    function ht2() {
      _t2.stop();
    }
    function gt2() {
      _t2.start();
    }
    let _t2 = new Qo();
    _t2.setAnimationLoop(mt2), typeof self < `u` && _t2.setContext(self), this.setAnimationLoop = function(e22) {
      W2 = e22, st2.setAnimationLoop(e22), e22 === null ? _t2.stop() : _t2.start();
    }, st2.addEventListener(`sessionstart`, ht2), st2.addEventListener(`sessionend`, gt2), this.render = function(e22, t3) {
      if (t3 !== void 0 && t3.isCamera !== true) {
        B(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);
        return;
      }
      if (re2 === true) return;
      ie2 !== null && ie2.renderStart(e22, t3);
      let n3 = st2.enabled === true && st2.isPresenting === true, r4 = ne2 !== null && (P2 === null || n3) && ne2.begin(N2, P2);
      if (e22.matrixWorldAutoUpdate === true && e22.updateMatrixWorld(), t3.parent === null && t3.matrixWorldAutoUpdate === true && t3.updateMatrixWorld(), st2.enabled === true && st2.isPresenting === true && (ne2 === null || ne2.isCompositing() === false) && (st2.cameraAutoUpdate === true && st2.updateCamera(t3), t3 = st2.getCamera()), e22.isScene === true && e22.onBeforeRender(N2, e22, t3, P2), j2 = Xe2.get(e22, M2.length), j2.init(t3), j2.state.textureUnits = R2.getTextureUnits(), M2.push(j2), ke2.multiplyMatrices(t3.projectionMatrix, t3.matrixWorldInverse), t3.isArrayCamera ? Ee2.setFromArrayCamera(t3) : Te2.setFromProjectionMatrix(ke2, Ue, t3.reversedDepth), Oe2 = this.localClippingEnabled, De2 = Ze2.init(this.clippingPlanes, Oe2), k2 = Je2.get(e22, te2.length), k2.init(), te2.push(k2), this.info.render.frame++, st2.enabled === true && st2.isPresenting === true) {
        let e23 = N2.xr.getDepthSensingMesh();
        e23 !== null && vt2(e23, t3, -1 / 0, N2.sortObjects);
      }
      vt2(e22, t3, 0, N2.sortObjects), k2.finish(), ie2 !== null && ie2.updateLights(j2.state.lightsArray), N2.sortObjects === true && k2.sort(be2, xe2), Ne2 = st2.enabled === false || st2.isPresenting === false || st2.hasDepthSensing() === false, Ne2 && et2.addToRenderList(k2, e22), this.info.autoReset === true && this.info.reset(), De2 === true && Ze2.beginShadows();
      let i3 = j2.state.shadowsArray;
      if ($e2.render(i3, e22, t3), De2 === true && Ze2.endShadows(), (r4 && ne2.hasRenderPass()) === false) {
        let n4 = k2.opaque, r5 = k2.transmissive;
        if (j2.setupLights(), t3.isArrayCamera) {
          let i4 = t3.cameras;
          if (r5.length > 0) for (let t4 = 0, a3 = i4.length; t4 < a3; t4++) {
            let a4 = i4[t4];
            bt2(n4, r5, e22, a4);
          }
          Ne2 && et2.render(e22);
          for (let t4 = 0, n5 = i4.length; t4 < n5; t4++) {
            let n6 = i4[t4];
            yt2(k2, e22, n6, n6.viewport);
          }
        } else r5.length > 0 && bt2(n4, r5, e22, t3), Ne2 && et2.render(e22), yt2(k2, e22, t3);
      }
      P2 !== null && le2 === 0 && (R2.updateMultisampleRenderTarget(P2), R2.updateRenderTargetMipmap(P2)), r4 && ne2.end(N2), e22.isScene === true && e22.onAfterRender(N2, e22, t3), V2.resetDefaultState(), ue2 = -1, de2 = null, M2.pop(), M2.length > 0 ? (j2 = M2[M2.length - 1], R2.setTextureUnits(j2.state.textureUnits), De2 === true && Ze2.setGlobalState(N2.clippingPlanes, j2.state.camera)) : j2 = null, te2.pop(), k2 = te2.length > 0 ? te2[te2.length - 1] : null, ie2 !== null && ie2.renderEnd();
    };
    function vt2(e22, t3, n3, r4) {
      if (e22.visible === false) return;
      if (e22.layers.test(t3.layers)) {
        if (e22.isGroup) n3 = e22.renderOrder;
        else if (e22.isLOD) e22.autoUpdate === true && e22.update(t3);
        else if (e22.isLight) j2.pushLight(e22), e22.castShadow && j2.pushShadow(e22);
        else if (e22.isSprite) {
          let i4 = t3.isArrayCamera ? Ee2 : Te2;
          if (!e22.frustumCulled || e22.intersectsFrustum(i4)) {
            r4 && je2.setFromMatrixPosition(e22.matrixWorld).applyMatrix4(ke2);
            let i5 = We2.update(e22), a3 = e22.material;
            a3.visible && k2.push(e22, i5, a3, n3, je2.z, null, t3);
          }
        } else if (e22.isMesh || e22.isLine || e22.isPoints) {
          let i4 = t3.isArrayCamera ? Ee2 : Te2;
          if (!e22.frustumCulled || e22.intersectsFrustum(i4)) {
            let i5 = We2.update(e22), a3 = e22.material;
            if (r4 && (e22.boundingSphere === void 0 ? (i5.boundingSphere === null && i5.computeBoundingSphere(), je2.copy(i5.boundingSphere.center)) : (e22.boundingSphere === null && e22.computeBoundingSphere(), je2.copy(e22.boundingSphere.center)), je2.applyMatrix4(e22.matrixWorld).applyMatrix4(ke2)), Array.isArray(a3)) {
              let r5 = i5.groups;
              for (let o3 = 0, s3 = r5.length; o3 < s3; o3++) {
                let s4 = r5[o3], c2 = a3[s4.materialIndex];
                c2 && c2.visible && k2.push(e22, i5, c2, n3, je2.z, s4, t3);
              }
            } else a3.visible && k2.push(e22, i5, a3, n3, je2.z, null, t3);
          }
        }
      }
      let i3 = e22.children;
      for (let e23 = 0, a3 = i3.length; e23 < a3; e23++) vt2(i3[e23], t3, n3, r4);
    }
    function yt2(e22, t3, n3, r4) {
      let {
        opaque: i3,
        transmissive: a3,
        transparent: o3
      } = e22;
      j2.setupLightsView(n3), De2 === true && Ze2.setGlobalState(N2.clippingPlanes, n3), r4 && I2.viewport(fe2.copy(r4)), i3.length > 0 && xt2(i3, t3, n3), a3.length > 0 && xt2(a3, t3, n3), o3.length > 0 && xt2(o3, t3, n3), I2.buffers.depth.setTest(true), I2.buffers.depth.setMask(true), I2.buffers.color.setMask(true), I2.setPolygonOffset(false);
    }
    function bt2(e22, t3, n3, r4) {
      if ((n3.isScene === true ? n3.overrideMaterial : null) !== null) return;
      if (j2.state.transmissionRenderTarget[r4.id] === void 0) {
        let e23 = Ie2.has(`EXT_color_buffer_half_float`) || Ie2.has(`EXT_color_buffer_float`);
        j2.state.transmissionRenderTarget[r4.id] = new At(1, 1, {
          generateMipmaps: true,
          type: e23 ? g : l,
          minFilter: c,
          samples: Math.max(4, Le2.samples),
          stencilBuffer: i2,
          resolveDepthBuffer: false,
          resolveStencilBuffer: false,
          storeMultisampledDepthBuffer: false,
          storeMultisampledStencilBuffer: false,
          colorSpace: G.workingColorSpace
        });
      }
      let a3 = j2.state.transmissionRenderTarget[r4.id], o3 = r4.viewport || fe2;
      a3.setSize(o3.z * N2.transmissionResolutionScale, o3.w * N2.transmissionResolutionScale);
      let s3 = N2.getRenderTarget(), u3 = N2.getActiveCubeFace(), d3 = N2.getActiveMipmapLevel();
      N2.setRenderTarget(a3), N2.getClearColor(he2), ge2 = N2.getClearAlpha(), ge2 < 1 && N2.setClearColor(16777215, 0.5), N2.clear(), Ne2 && et2.render(n3);
      let f2 = N2.toneMapping;
      N2.toneMapping = 0;
      let p3 = r4.viewport;
      if (r4.viewport !== void 0 && (r4.viewport = void 0), j2.setupLightsView(r4), De2 === true && Ze2.setGlobalState(N2.clippingPlanes, r4), xt2(e22, n3, r4), R2.updateMultisampleRenderTarget(a3), R2.updateRenderTargetMipmap(a3), Ie2.has(`WEBGL_multisampled_render_to_texture`) === false) {
        let e23 = false;
        for (let i3 = 0, a4 = t3.length; i3 < a4; i3++) {
          let {
            object: a5,
            geometry: o4,
            material: s4,
            group: c2
          } = t3[i3];
          if (s4.side === 2 && a5.layers.test(r4.layers)) {
            let t4 = s4.side;
            s4.side = 1, s4.needsUpdate = true, St2(a5, n3, r4, o4, s4, c2), s4.side = t4, s4.needsUpdate = true, e23 = true;
          }
        }
        e23 === true && (R2.updateMultisampleRenderTarget(a3), R2.updateRenderTargetMipmap(a3));
      }
      N2.setRenderTarget(s3, u3, d3), N2.setClearColor(he2, ge2), p3 !== void 0 && (r4.viewport = p3), N2.toneMapping = f2;
    }
    function xt2(e22, t3, n3) {
      let r4 = t3.isScene === true ? t3.overrideMaterial : null;
      for (let i3 = 0, a3 = e22.length; i3 < a3; i3++) {
        let a4 = e22[i3], {
          object: o3,
          geometry: s3,
          group: c2
        } = a4, l2 = a4.material;
        l2.allowOverride === true && r4 !== null && (l2 = r4), o3.layers.test(n3.layers) && St2(o3, t3, n3, s3, l2, c2);
      }
    }
    function St2(e22, t3, n3, r4, i3, a3) {
      ie2 !== null && i3.isNodeMaterial && ie2.setObject(e22, i3), e22.onBeforeRender(N2, t3, n3, r4, i3, a3), e22.modelViewMatrix.multiplyMatrices(n3.matrixWorldInverse, e22.matrixWorld), e22.normalMatrix.getNormalMatrix(e22.modelViewMatrix), i3.onBeforeRender(N2, t3, n3, r4, e22, a3), i3.transparent === true && i3.side === 2 && i3.forceSinglePass === false ? (i3.side = 1, i3.needsUpdate = true, N2.renderBufferDirect(n3, t3, r4, i3, e22, a3), i3.side = 0, i3.needsUpdate = true, N2.renderBufferDirect(n3, t3, r4, i3, e22, a3), i3.side = 2) : N2.renderBufferDirect(n3, t3, r4, i3, e22, a3), e22.onAfterRender(N2, t3, n3, r4, i3, a3);
    }
    function Ct2(e22) {
      let t3 = 0;
      for (let n3 of e22) n3.texture !== null && t3++;
      return t3;
    }
    function wt2(e22, t3, n3) {
      t3.isScene !== true && (t3 = Me2);
      let r4 = L2.get(e22), i3 = j2.state.lights, a3 = j2.state.shadowsArray, o3 = i3.state.version, s3 = Ge2.getParameters(e22, i3.state, a3, t3, n3, j2.state.lightProbeGridArray), c2 = Ge2.getProgramCacheKey(s3), l2 = r4.programs;
      r4.environment = e22.isMeshStandardMaterial || e22.isMeshLambertMaterial || e22.isMeshPhongMaterial ? t3.environment : null, r4.fog = t3.fog;
      let u3 = e22.isMeshStandardMaterial || e22.isMeshLambertMaterial && !e22.envMap || e22.isMeshPhongMaterial && !e22.envMap;
      r4.envMap = Be2.get(e22.envMap || r4.environment, u3), r4.envMapRotation = r4.environment !== null && e22.envMap === null ? t3.environmentRotation : e22.envMapRotation, l2 === void 0 && (e22.addEventListener(`dispose`, H2), l2 = /* @__PURE__ */ new Map(), r4.programs = l2, r4.programVariants = /* @__PURE__ */ new Map());
      let d3 = l2.get(c2);
      if (d3 !== void 0) {
        if (r4.currentProgram === d3 && r4.lightsStateVersion === o3) return Dt2(e22, s3), d3;
      } else s3.uniforms = Ge2.getUniforms(e22), ie2 !== null && e22.isNodeMaterial && ie2.build(e22, n3, s3), e22.onBeforeCompile(s3, N2), d3 = Ge2.acquireProgram(s3, c2), l2.set(c2, d3), r4.uniforms = s3.uniforms;
      let f2 = r4.uniforms;
      return (!e22.isShaderMaterial && !e22.isRawShaderMaterial || e22.clipping === true) && (f2.clippingPlanes = Ze2.uniform), Dt2(e22, s3), r4.needsLights = Mt2(e22), r4.lightsStateVersion = o3, r4.needsLights && (f2.ambientLightColor.value = i3.state.ambient, f2.lightProbe.value = i3.state.probe, f2.sunLights.value = i3.state.sun, f2.sunLightShadows.value = i3.state.sunShadow, f2.directionalLights.value = i3.state.directional, f2.directionalLightShadows.value = i3.state.directionalShadow, f2.spotLights.value = i3.state.spot, f2.spotLightShadows.value = i3.state.spotShadow, f2.rectAreaLights.value = i3.state.rectArea, f2.ltc_1.value = i3.state.rectAreaLTC1, f2.ltc_2.value = i3.state.rectAreaLTC2, f2.pointLights.value = i3.state.point, f2.pointLightShadows.value = i3.state.pointShadow, f2.hemisphereLights.value = i3.state.hemi, f2.sunShadowMatrix.value = i3.state.sunShadowMatrix, f2.sunShadowCascade.value = i3.state.sunShadowCascade, f2.directionalShadowMatrix.value = i3.state.directionalShadowMatrix, f2.spotLightMatrix.value = i3.state.spotLightMatrix, f2.spotLightMap.value = i3.state.spotLightMap, f2.pointShadowMatrix.value = i3.state.pointShadowMatrix), r4.numLightProbeGrids = Ct2(j2.state.lightProbeGridArray), r4.currentProgram = d3, r4.uniformsList = null, d3;
    }
    function Tt2(e22, t3, n3, r4, i3) {
      let a3 = L2.get(e22), o3 = a3.currentProgram.id + `,` + r4 + `,` + i3, s3 = a3.programVariants.get(o3);
      return s3 === void 0 ? (s3 = wt2(e22, t3, n3), a3.programVariants.set(o3, s3)) : (a3.currentProgram = s3, a3.uniformsList = null, a3.outputColorSpace = r4, a3.toneMapping = i3), s3;
    }
    function Et2(e22) {
      if (e22.uniformsList === null) {
        let t3 = e22.currentProgram.getUniforms();
        e22.uniformsList = Uc.seqWithValue(t3.seq, e22.uniforms);
      }
      return e22.uniformsList;
    }
    function Dt2(e22, t3) {
      let n3 = L2.get(e22);
      n3.outputColorSpace = t3.outputColorSpace, n3.batching = t3.batching, n3.batchingColor = t3.batchingColor, n3.instancing = t3.instancing, n3.instancingColor = t3.instancingColor, n3.instancingMorph = t3.instancingMorph, n3.skinning = t3.skinning, n3.morphTargets = t3.morphTargets, n3.morphNormals = t3.morphNormals, n3.morphColors = t3.morphColors, n3.morphTargetsCount = t3.morphTargetsCount, n3.numClippingPlanes = t3.numClippingPlanes, n3.numIntersection = t3.numClipIntersection, n3.vertexAlphas = t3.vertexAlphas, n3.vertexTangents = t3.vertexTangents, n3.toneMapping = t3.toneMapping;
    }
    function kt2(e22, t3, n3, r4, i3) {
      t3.isScene !== true && (t3 = Me2), R2.resetTextureUnits();
      let a3 = t3.fog, o3 = r4.isMeshStandardMaterial || r4.isMeshLambertMaterial || r4.isMeshPhongMaterial ? t3.environment : null, s3 = P2 === null ? N2.outputColorSpace : P2.isXRRenderTarget === true ? P2.texture.colorSpace : G.workingColorSpace, c2 = r4.isMeshStandardMaterial || r4.isMeshLambertMaterial && !r4.envMap || r4.isMeshPhongMaterial && !r4.envMap, l2 = Be2.get(r4.envMap || o3, c2), u3 = r4.vertexColors === true && !!n3.attributes.color && n3.attributes.color.itemSize === 4, d3 = !!n3.attributes.tangent && (!!r4.normalMap || r4.anisotropy > 0), f2 = !!n3.morphAttributes.position, p3 = !!n3.morphAttributes.normal, m2 = !!n3.morphAttributes.color, h3 = 0;
      r4.toneMapped && (P2 === null || P2.isXRRenderTarget === true) && (h3 = N2.toneMapping);
      let g2 = n3.morphAttributes.position || n3.morphAttributes.normal || n3.morphAttributes.color, _2 = g2 === void 0 ? 0 : g2.length, v2 = L2.get(r4), y2 = j2.state.lights;
      if (De2 === true && (Oe2 === true || e22 !== de2)) {
        let t4 = e22 === de2 && r4.id === ue2;
        Ze2.setState(r4, e22, t4);
      }
      let b3 = false, x3 = false;
      r4.version === v2.__version ? v2.needsLights && v2.lightsStateVersion !== y2.state.version || i3.isBatchedMesh && v2.batching === false || !i3.isBatchedMesh && v2.batching === true || i3.isBatchedMesh && v2.batchingColor === true && i3._colorsTexture === null || i3.isBatchedMesh && v2.batchingColor === false && i3._colorsTexture !== null || i3.isInstancedMesh && v2.instancing === false || !i3.isInstancedMesh && v2.instancing === true || i3.isSkinnedMesh && v2.skinning === false || !i3.isSkinnedMesh && v2.skinning === true || i3.isInstancedMesh && v2.instancingColor === true && i3.instanceColor === null || i3.isInstancedMesh && v2.instancingColor === false && i3.instanceColor !== null || i3.isInstancedMesh && v2.instancingMorph === true && i3.morphTexture === null || i3.isInstancedMesh && v2.instancingMorph === false && i3.morphTexture !== null ? b3 = true : v2.envMap === l2 ? r4.fog === true && v2.fog !== a3 || v2.numClippingPlanes !== void 0 && (v2.numClippingPlanes !== Ze2.numPlanes || v2.numIntersection !== Ze2.numIntersection) ? b3 = true : v2.vertexAlphas === u3 && v2.vertexTangents === d3 && v2.morphTargets === f2 && v2.morphNormals === p3 && v2.morphColors === m2 && v2.morphTargetsCount === _2 && v2.numLightProbeGrids === Ct2(j2.state.lightProbeGridArray) ? (v2.outputColorSpace !== s3 || v2.toneMapping !== h3) && (x3 = true) : b3 = true : b3 = true : (b3 = true, v2.__version = r4.version);
      let S3 = v2.currentProgram;
      (b3 === true || x3 === true) && (S3 = x3 === true ? Tt2(r4, t3, i3, s3, h3) : wt2(r4, t3, i3), ie2 && r4.isNodeMaterial && ie2.onUpdateProgram(r4, S3, v2));
      let C3 = false, w3 = false, T3 = false, E3 = S3.getUniforms(), O2 = v2.uniforms;
      if (I2.useProgram(S3.program) && (C3 = true, w3 = true, T3 = true), r4.id !== ue2 && (ue2 = r4.id, w3 = true), C3 || de2 !== e22) {
        I2.buffers.depth.getReversed() && e22.reversedDepth !== true && (e22._reversedDepth = true, e22.updateProjectionMatrix()), E3.setValue(F2, `projectionMatrix`, e22.projectionMatrix), E3.setValue(F2, `viewMatrix`, e22.matrixWorldInverse);
        let t4 = E3.map.cameraPosition;
        t4 !== void 0 && t4.setValue(F2, Ae2.setFromMatrixPosition(e22.matrixWorld)), Le2.logarithmicDepthBuffer && E3.setValue(F2, `logDepthBufFC`, 2 / (Math.log(e22.far + 1) / Math.LN2)), (r4.isMeshPhongMaterial || r4.isMeshToonMaterial || r4.isMeshLambertMaterial || r4.isMeshBasicMaterial || r4.isMeshStandardMaterial || r4.isShaderMaterial) && E3.setValue(F2, `isOrthographic`, e22.isOrthographicCamera === true), de2 !== e22 && (de2 = e22, w3 = true, T3 = true);
      }
      if (v2.needsLights && (y2.state.sunShadowMap.length > 0 && E3.setValue(F2, `sunShadowMap`, y2.state.sunShadowMap, R2), y2.state.directionalShadowMap.length > 0 && E3.setValue(F2, `directionalShadowMap`, y2.state.directionalShadowMap, R2), y2.state.spotShadowMap.length > 0 && E3.setValue(F2, `spotShadowMap`, y2.state.spotShadowMap, R2), y2.state.pointShadowMap.length > 0 && E3.setValue(F2, `pointShadowMap`, y2.state.pointShadowMap, R2)), i3.isSkinnedMesh) {
        E3.setOptional(F2, i3, `bindMatrix`), E3.setOptional(F2, i3, `bindMatrixInverse`);
        let e23 = i3.skeleton;
        e23 && (e23.boneTexture === null && e23.computeBoneTexture(), E3.setValue(F2, `boneTexture`, e23.boneTexture, R2));
      }
      i3.isBatchedMesh && (E3.setOptional(F2, i3, `batchingTexture`), E3.setValue(F2, `batchingTexture`, i3._matricesTexture, R2), E3.setOptional(F2, i3, `batchingIdTexture`), E3.setValue(F2, `batchingIdTexture`, i3._indirectTexture, R2), E3.setOptional(F2, i3, `batchingColorTexture`), i3._colorsTexture !== null && E3.setValue(F2, `batchingColorTexture`, i3._colorsTexture, R2));
      let k3 = n3.morphAttributes;
      if ((k3.position !== void 0 || k3.normal !== void 0 || k3.color !== void 0) && tt2.update(i3, n3, S3), (w3 || v2.receiveShadow !== i3.receiveShadow) && (v2.receiveShadow = i3.receiveShadow, E3.setValue(F2, `receiveShadow`, i3.receiveShadow)), (r4.isMeshStandardMaterial || r4.isMeshLambertMaterial || r4.isMeshPhongMaterial) && r4.envMap === null && t3.environment !== null && (O2.envMapIntensity.value = t3.environmentIntensity), O2.dfgLUT !== void 0 && (O2.dfgLUT.value = ou()), w3) {
        if (E3.setValue(F2, `toneMappingExposure`, N2.toneMappingExposure), v2.needsLights && jt2(O2, T3), a3 && r4.fog === true && Ke2.refreshFogUniforms(O2, a3), Ke2.refreshMaterialUniforms(O2, r4, ye2, ve2, j2.state.transmissionRenderTarget[e22.id]), v2.needsLights && v2.numLightProbeGrids > 0) {
          let e23 = D2, t4 = 0;
          for (let n4 of j2.state.lightProbeGridArray) n4.texture !== null && (e23.textures[t4] = n4.texture, e23.min[t4] = n4.boundingBox.min, e23.max[t4] = n4.boundingBox.max, e23.resolution[t4] = n4.resolution, t4++);
          for (let n4 in e23) e23[n4].length = t4;
          O2.probesSH.value = e23.textures, O2.probesMin.value = e23.min, O2.probesMax.value = e23.max, O2.probesResolution.value = e23.resolution;
        }
        Uc.upload(F2, Et2(v2), O2, R2);
      }
      if (r4.isShaderMaterial && r4.uniformsNeedUpdate === true && (Uc.upload(F2, Et2(v2), O2, R2), r4.uniformsNeedUpdate = false), r4.isSpriteMaterial && E3.setValue(F2, `center`, i3.center), E3.setValue(F2, `modelViewMatrix`, i3.modelViewMatrix), E3.setValue(F2, `normalMatrix`, i3.normalMatrix), E3.setValue(F2, `modelMatrix`, i3.matrixWorld), r4.uniformsGroups !== void 0) {
        let e23 = r4.uniformsGroups;
        for (let t4 = 0, n4 = e23.length; t4 < n4; t4++) {
          let n5 = e23[t4];
          at2.update(n5, S3), at2.bind(n5, S3);
        }
      }
      return S3;
    }
    function jt2(e22, t3) {
      e22.ambientLightColor.needsUpdate = t3, e22.lightProbe.needsUpdate = t3, e22.sunLights.needsUpdate = t3, e22.sunLightShadows.needsUpdate = t3, e22.directionalLights.needsUpdate = t3, e22.directionalLightShadows.needsUpdate = t3, e22.pointLights.needsUpdate = t3, e22.pointLightShadows.needsUpdate = t3, e22.spotLights.needsUpdate = t3, e22.spotLightShadows.needsUpdate = t3, e22.rectAreaLights.needsUpdate = t3, e22.hemisphereLights.needsUpdate = t3;
    }
    function Mt2(e22) {
      return e22.isMeshLambertMaterial || e22.isMeshToonMaterial || e22.isMeshPhongMaterial || e22.isMeshStandardMaterial || e22.isShadowMaterial || e22.isShaderMaterial && e22.lights === true;
    }
    this.getActiveCubeFace = function() {
      return ce2;
    }, this.getActiveMipmapLevel = function() {
      return le2;
    }, this.getRenderTarget = function() {
      return P2;
    }, this.setRenderTargetTextures = function(e22, t3, n3) {
      let r4 = L2.get(e22);
      r4.__autoAllocateDepthBuffer = e22.resolveDepthBuffer === false, r4.__autoAllocateDepthBuffer === false && (r4.__useRenderToTexture = false), L2.get(e22.texture).__webglTexture = t3, L2.get(e22.depthTexture).__webglTexture = r4.__autoAllocateDepthBuffer ? void 0 : n3, r4.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(e22, t3) {
      let n3 = L2.get(e22);
      n3.__webglFramebuffer = t3, n3.__useDefaultFramebuffer = t3 === void 0;
    }, this.setRenderTarget = function(e22, t3 = 0, n3 = 0) {
      P2 = e22, ce2 = t3, le2 = n3;
      let r4 = null, i3 = false, a3 = false;
      if (e22) {
        let o3 = L2.get(e22);
        if (o3.__useDefaultFramebuffer !== void 0) {
          I2.bindFramebuffer(F2.FRAMEBUFFER, o3.__webglFramebuffer), fe2.copy(e22.viewport), pe2.copy(e22.scissor), me2 = e22.scissorTest, I2.viewport(fe2), I2.scissor(pe2), I2.setScissorTest(me2), ue2 = -1;
          return;
        }
        if (o3.__webglFramebuffer === void 0) R2.setupRenderTarget(e22);
        else if (o3.__hasExternalTextures) R2.rebindTextures(e22, L2.get(e22.texture).__webglTexture, L2.get(e22.depthTexture).__webglTexture);
        else if (e22.depthBuffer) {
          let t4 = e22.depthTexture;
          if (o3.__boundDepthTexture !== t4) {
            if (t4 !== null && L2.has(t4) && (e22.width !== t4.image.width || e22.height !== t4.image.height)) throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);
            R2.setupDepthRenderbuffer(e22);
          }
        }
        let s3 = e22.texture;
        (s3.isData3DTexture || s3.isDataArrayTexture || s3.isCompressedArrayTexture) && (a3 = true);
        let c2 = L2.get(e22).__webglFramebuffer;
        e22.isWebGLCubeRenderTarget ? (r4 = Array.isArray(c2[t3]) ? c2[t3][n3] : c2[t3], i3 = true) : r4 = e22.samples > 0 && R2.useMultisampledRTT(e22) === false ? L2.get(e22).__webglMultisampledFramebuffer : Array.isArray(c2) ? c2[n3] : c2, fe2.copy(e22.viewport), pe2.copy(e22.scissor), me2 = e22.scissorTest;
      } else fe2.copy(Se2).multiplyScalar(ye2).floor(), pe2.copy(Ce2).multiplyScalar(ye2).floor(), me2 = we2;
      if (n3 !== 0 && (r4 = ae2), I2.bindFramebuffer(F2.FRAMEBUFFER, r4) && I2.drawBuffers(e22, r4), I2.viewport(fe2), I2.scissor(pe2), I2.setScissorTest(me2), i3) {
        let r5 = L2.get(e22.texture);
        F2.framebufferTexture2D(F2.FRAMEBUFFER, F2.COLOR_ATTACHMENT0, F2.TEXTURE_CUBE_MAP_POSITIVE_X + t3, r5.__webglTexture, n3);
      } else if (a3) {
        let r5 = t3;
        for (let t4 = 0; t4 < e22.textures.length; t4++) {
          let i4 = L2.get(e22.textures[t4]);
          F2.framebufferTextureLayer(F2.FRAMEBUFFER, F2.COLOR_ATTACHMENT0 + t4, i4.__webglTexture, n3, r5);
        }
      } else if (e22 !== null && n3 !== 0) {
        let t4 = L2.get(e22.texture);
        F2.framebufferTexture2D(F2.FRAMEBUFFER, F2.COLOR_ATTACHMENT0, F2.TEXTURE_2D, t4.__webglTexture, n3);
      }
      ue2 = -1;
    };
    function Pt2(e22) {
      let t3 = L2.get(e22);
      return (t3.__readFormat !== e22.format || t3.__readType !== e22.type) && (t3.__readFormat = e22.format, t3.__readType = e22.type, t3.__formatReadable = Le2.textureFormatReadable(e22.format), t3.__typeReadable = Le2.textureTypeReadable(e22.type)), t3;
    }
    this.readRenderTargetPixels = function(e22, t3, n3, r4, i3, a3, o3, s3 = 0) {
      if (!(e22 && e22.isWebGLRenderTarget)) {
        B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);
        return;
      }
      let c2 = L2.get(e22).__webglFramebuffer;
      if (e22.isWebGLCubeRenderTarget && o3 !== void 0 && (c2 = c2[o3], Array.isArray(c2) && (c2 = c2[0])), c2) {
        I2.bindFramebuffer(F2.FRAMEBUFFER, c2);
        try {
          let o4 = e22.textures[s3], c3 = o4.format, l2 = o4.type;
          e22.textures.length > 1 && F2.readBuffer(F2.COLOR_ATTACHMENT0 + s3);
          let u3 = Pt2(o4);
          if (u3.__formatReadable === false) {
            B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);
            return;
          }
          if (u3.__typeReadable === false) {
            B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);
            return;
          }
          t3 >= 0 && t3 <= e22.width - r4 && n3 >= 0 && n3 <= e22.height - i3 && F2.readPixels(t3, n3, r4, i3, it2.convert(c3), it2.convert(l2), a3);
        } finally {
          let e23 = P2 === null ? null : L2.get(P2).__webglFramebuffer;
          I2.bindFramebuffer(F2.FRAMEBUFFER, e23);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(e22, t3, n3, r4, i3, a3, o3, s3 = 0) {
      if (!(e22 && e22.isWebGLRenderTarget)) throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);
      let c2 = L2.get(e22).__webglFramebuffer;
      if (e22.isWebGLCubeRenderTarget && o3 !== void 0 && (c2 = c2[o3], Array.isArray(c2) && (c2 = c2[0])), c2) {
        if (t3 >= 0 && t3 <= e22.width - r4 && n3 >= 0 && n3 <= e22.height - i3) {
          I2.bindFramebuffer(F2.FRAMEBUFFER, c2);
          let o4 = e22.textures[s3], l2 = o4.format, u3 = o4.type;
          e22.textures.length > 1 && F2.readBuffer(F2.COLOR_ATTACHMENT0 + s3);
          let d3 = Pt2(o4);
          if (d3.__formatReadable === false) throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);
          if (d3.__typeReadable === false) throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);
          let f2 = F2.createBuffer();
          F2.bindBuffer(F2.PIXEL_PACK_BUFFER, f2), F2.bufferData(F2.PIXEL_PACK_BUFFER, a3.byteLength, F2.STREAM_READ), F2.readPixels(t3, n3, r4, i3, it2.convert(l2), it2.convert(u3), 0), F2.bindBuffer(F2.PIXEL_PACK_BUFFER, null);
          let p3 = P2 === null ? null : L2.get(P2).__webglFramebuffer;
          I2.bindFramebuffer(F2.FRAMEBUFFER, p3);
          let m2 = F2.fenceSync(F2.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return F2.flush(), await Qe(F2, m2, 4), F2.bindBuffer(F2.PIXEL_PACK_BUFFER, f2), F2.getBufferSubData(F2.PIXEL_PACK_BUFFER, 0, a3), F2.bindBuffer(F2.PIXEL_PACK_BUFFER, null), F2.deleteBuffer(f2), F2.deleteSync(m2), a3;
        }
        throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`);
      }
    }, this.copyFramebufferToTexture = function(e22, t3 = null, n3 = 0) {
      let r4 = 2 ** -n3, i3 = Math.floor(e22.image.width * r4), a3 = Math.floor(e22.image.height * r4), o3 = t3 === null ? 0 : t3.x, s3 = t3 === null ? 0 : t3.y;
      R2.setTexture2D(e22, 0), F2.copyTexSubImage2D(F2.TEXTURE_2D, n3, 0, 0, o3, s3, i3, a3), I2.unbindTexture();
    }, this.copyTextureToTexture = function(e22, t3, n3 = null, r4 = null, i3 = 0, a3 = 0) {
      let o3, s3, c2, l2, u3, d3, f2, p3, m2, h3 = e22.isCompressedTexture ? e22.mipmaps[a3] : e22.image;
      if (n3 !== null) o3 = n3.max.x - n3.min.x, s3 = n3.max.y - n3.min.y, c2 = n3.isBox3 ? n3.max.z - n3.min.z : 1, l2 = n3.min.x, u3 = n3.min.y, d3 = n3.isBox3 ? n3.min.z : 0;
      else {
        let t4 = 2 ** -i3;
        o3 = Math.floor(h3.width * t4), s3 = Math.floor(h3.height * t4), c2 = e22.isDataArrayTexture ? h3.depth : e22.isData3DTexture ? Math.floor(h3.depth * t4) : 1, l2 = 0, u3 = 0, d3 = 0;
      }
      r4 === null ? (f2 = 0, p3 = 0, m2 = 0) : (f2 = r4.x, p3 = r4.y, m2 = r4.z);
      let g2 = it2.convert(t3.format), _2 = it2.convert(t3.type), v2;
      t3.isData3DTexture ? (R2.setTexture3D(t3, 0), v2 = F2.TEXTURE_3D) : t3.isDataArrayTexture || t3.isCompressedArrayTexture ? (R2.setTexture2DArray(t3, 0), v2 = F2.TEXTURE_2D_ARRAY) : (R2.setTexture2D(t3, 0), v2 = F2.TEXTURE_2D), I2.activeTexture(F2.TEXTURE0), I2.pixelStorei(F2.UNPACK_FLIP_Y_WEBGL, t3.flipY), I2.pixelStorei(F2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t3.premultiplyAlpha), I2.pixelStorei(F2.UNPACK_ALIGNMENT, t3.unpackAlignment);
      let y2 = I2.getParameter(F2.UNPACK_ROW_LENGTH), b3 = I2.getParameter(F2.UNPACK_IMAGE_HEIGHT), x3 = I2.getParameter(F2.UNPACK_SKIP_PIXELS), S3 = I2.getParameter(F2.UNPACK_SKIP_ROWS), C3 = I2.getParameter(F2.UNPACK_SKIP_IMAGES);
      I2.pixelStorei(F2.UNPACK_ROW_LENGTH, h3.width), I2.pixelStorei(F2.UNPACK_IMAGE_HEIGHT, h3.height), I2.pixelStorei(F2.UNPACK_SKIP_PIXELS, l2), I2.pixelStorei(F2.UNPACK_SKIP_ROWS, u3), I2.pixelStorei(F2.UNPACK_SKIP_IMAGES, d3);
      let w3 = e22.isDataArrayTexture || e22.isData3DTexture, T3 = t3.isDataArrayTexture || t3.isData3DTexture;
      if (e22.isDepthTexture) {
        let n4 = L2.get(e22), r5 = L2.get(t3), h4 = L2.get(n4.__renderTarget), g3 = L2.get(r5.__renderTarget);
        I2.bindFramebuffer(F2.READ_FRAMEBUFFER, h4.__webglFramebuffer), I2.bindFramebuffer(F2.DRAW_FRAMEBUFFER, g3.__webglFramebuffer);
        for (let n5 = 0; n5 < c2; n5++) w3 && (F2.framebufferTextureLayer(F2.READ_FRAMEBUFFER, F2.COLOR_ATTACHMENT0, L2.get(e22).__webglTexture, i3, d3 + n5), F2.framebufferTextureLayer(F2.DRAW_FRAMEBUFFER, F2.COLOR_ATTACHMENT0, L2.get(t3).__webglTexture, a3, m2 + n5)), F2.blitFramebuffer(l2, u3, l2 + o3, u3 + s3, f2, p3, f2 + o3, p3 + s3, F2.DEPTH_BUFFER_BIT, F2.NEAREST);
        I2.bindFramebuffer(F2.READ_FRAMEBUFFER, null), I2.bindFramebuffer(F2.DRAW_FRAMEBUFFER, null);
      } else if (i3 !== 0 || e22.isRenderTargetTexture || L2.has(e22)) {
        let n4 = L2.get(e22), r5 = L2.get(t3);
        I2.bindFramebuffer(F2.READ_FRAMEBUFFER, oe2), I2.bindFramebuffer(F2.DRAW_FRAMEBUFFER, se2);
        for (let e23 = 0; e23 < c2; e23++) w3 ? F2.framebufferTextureLayer(F2.READ_FRAMEBUFFER, F2.COLOR_ATTACHMENT0, n4.__webglTexture, i3, d3 + e23) : F2.framebufferTexture2D(F2.READ_FRAMEBUFFER, F2.COLOR_ATTACHMENT0, F2.TEXTURE_2D, n4.__webglTexture, i3), T3 ? F2.framebufferTextureLayer(F2.DRAW_FRAMEBUFFER, F2.COLOR_ATTACHMENT0, r5.__webglTexture, a3, m2 + e23) : F2.framebufferTexture2D(F2.DRAW_FRAMEBUFFER, F2.COLOR_ATTACHMENT0, F2.TEXTURE_2D, r5.__webglTexture, a3), i3 === 0 ? T3 ? F2.copyTexSubImage3D(v2, a3, f2, p3, m2 + e23, l2, u3, o3, s3) : F2.copyTexSubImage2D(v2, a3, f2, p3, l2, u3, o3, s3) : F2.blitFramebuffer(l2, u3, l2 + o3, u3 + s3, f2, p3, f2 + o3, p3 + s3, F2.COLOR_BUFFER_BIT, F2.NEAREST);
        I2.bindFramebuffer(F2.READ_FRAMEBUFFER, null), I2.bindFramebuffer(F2.DRAW_FRAMEBUFFER, null);
      } else T3 ? e22.isDataTexture || e22.isData3DTexture ? F2.texSubImage3D(v2, a3, f2, p3, m2, o3, s3, c2, g2, _2, h3.data) : t3.isCompressedArrayTexture ? F2.compressedTexSubImage3D(v2, a3, f2, p3, m2, o3, s3, c2, g2, h3.data) : F2.texSubImage3D(v2, a3, f2, p3, m2, o3, s3, c2, g2, _2, h3) : e22.isDataTexture ? F2.texSubImage2D(F2.TEXTURE_2D, a3, f2, p3, o3, s3, g2, _2, h3.data) : e22.isCompressedTexture ? F2.compressedTexSubImage2D(F2.TEXTURE_2D, a3, f2, p3, h3.width, h3.height, g2, h3.data) : F2.texSubImage2D(F2.TEXTURE_2D, a3, f2, p3, o3, s3, g2, _2, h3);
      I2.pixelStorei(F2.UNPACK_ROW_LENGTH, y2), I2.pixelStorei(F2.UNPACK_IMAGE_HEIGHT, b3), I2.pixelStorei(F2.UNPACK_SKIP_PIXELS, x3), I2.pixelStorei(F2.UNPACK_SKIP_ROWS, S3), I2.pixelStorei(F2.UNPACK_SKIP_IMAGES, C3), a3 === 0 && t3.generateMipmaps === true && t3.mipmapsAutoUpdate === true && F2.generateMipmap(v2), I2.unbindTexture();
    }, this.initRenderTarget = function(e22) {
      L2.get(e22).__webglFramebuffer === void 0 && R2.setupRenderTarget(e22);
    }, this.initTexture = function(e22) {
      e22.isCubeTexture ? R2.setTextureCube(e22, 0) : e22.isData3DTexture ? R2.setTexture3D(e22, 0) : e22.isDataArrayTexture || e22.isCompressedArrayTexture ? R2.setTexture2DArray(e22, 0) : R2.setTexture2D(e22, 0), I2.unbindTexture();
    }, this.resetState = function() {
      ce2 = 0, le2 = 0, P2 = null, I2.reset(), V2.reset();
    }, typeof __THREE_DEVTOOLS__ < `u` && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`, {
      detail: this
    }));
  }
  get coordinateSystem() {
    return Ue;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e21) {
    this._outputColorSpace = e21;
    let t2 = this.getContext();
    t2.drawingBufferColorSpace = G._getDrawingBufferColorSpace(e21), t2.unpackColorSpace = G._getUnpackColorSpace();
  }
};
var cu = (e21, t2 = {}) => new qa({
  color: e21,
  ...t2
});

// src/app/audio.js
var Lf = 0.2;
var AudioEngine = class {
  constructor() {
    this.muted = localStorage.getItem(`tp-mute`) === `1`, this.musicOn = localStorage.getItem(`tp-music`) !== `0`, this.musicLoading = false, this.engines = /* @__PURE__ */ new Map(), this.sirenNodes = [], this.talking = 0;
  }
  unlock() {
    if (!this.ctx) {
      let e21 = window.AudioContext ?? window.webkitAudioContext;
      if (!e21) return;
      let t2 = this.ctx = new e21();
      this.master = t2.createGain(), this.master.gain.value = +!this.muted, this.master.connect(t2.destination), this.fx = t2.createGain(), this.voice = t2.createGain(), this.voice.gain.value = 1.1, this.music = t2.createGain(), this.music.gain.value = this.musicOn ? Lf : 0;
      for (let e22 of [this.fx, this.voice, this.music]) e22.connect(this.master);
      let n2 = Math.floor(t2.sampleRate * 2);
      this.noise = t2.createBuffer(1, n2, t2.sampleRate);
      let r3 = this.noise.getChannelData(0);
      for (let e22 = 0; e22 < n2; e22++) r3[e22] = Math.random() * 2 - 1;
      this.startBed(), this.musicOn && this.loadMusic();
    }
    this.ctx.state === `suspended` && this.ctx.resume();
  }
  toggleMute() {
    return this.muted = !this.muted, localStorage.setItem(`tp-mute`, this.muted ? `1` : `0`), this.master && (this.master.gain.value = +!this.muted), this.muted;
  }
  toggleMusic() {
    return this.musicOn = !this.musicOn, localStorage.setItem(`tp-music`, this.musicOn ? `1` : `0`), this.music && this.ctx && (this.music.gain.setTargetAtTime(
      this.musicOn ? this.duckLevel() : 0,
      this.ctx.currentTime,
      0.15
    ), this.musicOn && this.loadMusic()), this.musicOn;
  }
  async loadMusic() {
    if (!(this.musicSrc || this.musicLoading || !this.ctx)) {
      this.musicLoading = true;
      try {
        let e21 = await fetch(`/music/bgm.m4a`), t2 = await this.ctx.decodeAudioData(await e21.arrayBuffer()), n2 = this.ctx.createBufferSource();
        n2.buffer = t2, n2.loop = true, n2.connect(this.music), n2.start(), this.musicSrc = n2;
      } catch {
      }
      this.musicLoading = false;
    }
  }
  duckLevel() {
    return this.talking > 0 ? Lf * 0.5 : Lf;
  }
  duck(e21) {
    this.talking = Math.max(0, this.talking + e21), this.music && this.ctx && this.musicOn && this.music.gain.setTargetAtTime(this.duckLevel(), this.ctx.currentTime, 0.12);
  }
  tone(e21, t2, n2, r3, i2, a2 = t2) {
    let o2 = this.ctx, s2 = o2.createOscillator(), c2 = o2.createGain();
    return s2.type = e21, s2.frequency.setValueAtTime(t2, n2), a2 !== t2 && s2.frequency.linearRampToValueAtTime(a2, n2 + r3), c2.gain.setValueAtTime(0, n2), c2.gain.linearRampToValueAtTime(i2, n2 + 0.012), c2.gain.setValueAtTime(i2, n2 + Math.max(0.012, r3 - 0.04)), c2.gain.linearRampToValueAtTime(0, n2 + r3), s2.connect(c2).connect(this.fx), s2.start(n2), s2.stop(n2 + r3 + 0.02), s2;
  }
  whistle(e21 = 1, t2 = false) {
    if (!this.ctx) return;
    let n2 = this.ctx;
    for (let r3 = 0; r3 < e21; r3++) {
      let e22 = n2.currentTime + r3 * 0.17, i2 = t2 ? 0.6 : 0.11, a2 = this.tone(`sine`, 2750, e22, i2, 0.16, 2900), o2 = n2.createOscillator(), s2 = n2.createGain();
      o2.frequency.value = 42, s2.gain.value = 190, o2.connect(s2).connect(a2.frequency), o2.start(e22), o2.stop(e22 + i2 + 0.02);
    }
  }
  burst(e21, t2, n2) {
    let r3 = this.ctx, i2 = r3.createBufferSource();
    i2.buffer = this.noise;
    let a2 = r3.createBiquadFilter();
    a2.type = `lowpass`, a2.frequency.value = n2;
    let o2 = r3.createGain(), s2 = r3.currentTime;
    o2.gain.setValueAtTime(t2, s2), o2.gain.exponentialRampToValueAtTime(1e-3, s2 + e21), i2.connect(a2).connect(o2).connect(this.fx), i2.start(s2), i2.stop(s2 + e21);
  }
  crunch(e21 = false) {
    this.ctx && (this.burst(e21 ? 0.38 : 0.22, e21 ? 0.7 : 0.4, e21 ? 1400 : 900), this.tone(`sine`, e21 ? 90 : 120, this.ctx.currentTime, 0.18, 0.4, 50));
  }
  clack() {
    this.ctx && (this.burst(0.12, 0.35, 2600), this.tone(`triangle`, 320, this.ctx.currentTime, 0.08, 0.15, 180));
  }
  coin() {
    if (!this.ctx) return;
    let e21 = this.ctx.currentTime;
    this.tone(`square`, 988, e21, 0.08, 0.07), this.tone(`square`, 1319, e21 + 0.08, 0.26, 0.07);
  }
  honk(e21 = 1) {
    if (!this.ctx) return;
    let t2 = this.ctx.currentTime, n2 = e21 < 1 ? 0.85 + Math.random() * 0.5 : 1;
    for (let r3 of [0, 0.3])
      this.tone(`sawtooth`, 410 * n2, t2 + r3, 0.24, 0.07 * e21), this.tone(`sawtooth`, 515 * n2, t2 + r3, 0.24, 0.07 * e21);
  }
  startBed() {
    let e21 = this.ctx, t2 = e21.createBufferSource();
    t2.buffer = this.noise, t2.loop = true;
    let n2 = e21.createBiquadFilter();
    n2.type = `lowpass`, n2.frequency.value = 380;
    let r3 = this.bed = e21.createGain();
    r3.gain.value = 0.05, t2.connect(n2).connect(r3).connect(this.fx), t2.start();
  }
  passBy() {
    if (!this.ctx) return;
    let e21 = this.ctx, t2 = e21.currentTime, n2 = 1.6 + Math.random() * 0.8, r3 = Math.random() < 0.5 ? -1 : 1, i2 = 120 + Math.random() * 60, a2 = e21.createOscillator();
    a2.type = `sawtooth`, a2.frequency.setValueAtTime(i2 * 1.12, t2), a2.frequency.linearRampToValueAtTime(i2 * 0.9, t2 + n2);
    let o2 = e21.createBiquadFilter();
    o2.type = `bandpass`, o2.frequency.value = 900, o2.Q.value = 0.8;
    let s2 = e21.createGain(), c2 = 0.025 + Math.random() * 0.02;
    s2.gain.setValueAtTime(1e-4, t2), s2.gain.exponentialRampToValueAtTime(c2, t2 + n2 * 0.5), s2.gain.exponentialRampToValueAtTime(1e-4, t2 + n2);
    let l2 = e21.createStereoPanner();
    l2.pan.setValueAtTime(-0.8 * r3, t2), l2.pan.linearRampToValueAtTime(0.8 * r3, t2 + n2), a2.connect(o2).connect(s2).connect(l2).connect(this.fx), a2.start(t2), a2.stop(t2 + n2 + 0.05);
  }
  engine(e21, t2, n2, r3) {
    if (!this.ctx) return;
    let i2 = this.ctx, a2 = this.engines.get(e21);
    if (!a2) {
      let n3 = i2.createOscillator(), r4 = i2.createOscillator();
      n3.type = `sawtooth`, r4.type = t2 === `motor` ? `square` : `triangle`;
      let o3 = i2.createBiquadFilter();
      o3.type = t2 === `motor` ? `bandpass` : `lowpass`, o3.Q.value = t2 === `motor` ? 1.2 : 0.7;
      let s3 = i2.createGain();
      s3.gain.value = 0, n3.connect(o3), r4.connect(o3), o3.connect(s3);
      let c3;
      if (t2 === `motor`) {
        let e22 = i2.createGain();
        e22.gain.value = 0.65, c3 = i2.createOscillator(), c3.frequency.value = 22;
        let t3 = i2.createGain();
        t3.gain.value = 0.35, c3.connect(t3).connect(e22.gain), c3.start(), s3.connect(e22).connect(this.fx);
      } else s3.connect(this.fx);
      n3.start(), r4.start(), a2 = {
        osc: n3,
        sub: r4,
        filter: o3,
        gain: s3,
        trem: c3,
        kind: t2,
        seen: true
      }, this.engines.set(e21, a2);
    }
    a2.seen = true;
    let o2 = Math.min(Math.abs(n2), 9), s2 = i2.currentTime, c2, l2, u2;
    t2 === `motor` ? (c2 = 95 + o2 * 22, l2 = 700 + o2 * 160, u2 = 0.03 + o2 * 8e-3) : t2 === `truck` ? (c2 = 38 + o2 * 6, l2 = 260 + o2 * 40, u2 = 0.09 + o2 * 0.01) : (c2 = 48 + o2 * 13, l2 = 320 + o2 * 120, u2 = 0.05 + o2 * 0.02), a2.osc.frequency.setTargetAtTime(c2, s2, 0.12), a2.sub.frequency.setTargetAtTime(c2 / 2, s2, 0.12), a2.filter.frequency.setTargetAtTime(l2, s2, 0.12), a2.gain.gain.setTargetAtTime(u2 * Math.max(0, Math.min(1, r3)), s2, 0.1), a2.trem && a2.trem.frequency.setTargetAtTime(18 + o2 * 4, s2, 0.1);
  }
  enginesDone() {
    if (!this.ctx) return;
    let e21 = this.ctx.currentTime;
    for (let [t2, n2] of this.engines)
      if (n2.seen) n2.seen = false;
      else {
        n2.gain.gain.setTargetAtTime(0, e21, 0.08);
        for (let t3 of [n2.osc, n2.sub, n2.trem]) t3?.stop(e21 + 0.5);
        this.engines.delete(t2);
      }
  }
  siren(e21) {
    if (!this.ctx) return;
    let t2 = this.ctx;
    if (!this.sirenNodes.length) {
      let e22 = t2.createOscillator();
      e22.type = `square`, e22.frequency.value = 760;
      let n2 = t2.createOscillator();
      n2.type = `square`, n2.frequency.value = 1.6;
      let r3 = t2.createGain();
      r3.gain.value = 140, n2.connect(r3).connect(e22.frequency);
      let i2 = t2.createBiquadFilter();
      i2.type = `lowpass`, i2.frequency.value = 2200;
      let a2 = t2.createGain();
      a2.gain.value = 0, e22.connect(i2).connect(a2).connect(this.fx), e22.start(), n2.start(), this.sirenNodes = [e22, n2, a2];
    }
    this.sirenNodes[2].gain.setTargetAtTime(0.06 * Math.max(0, Math.min(1, e21)), t2.currentTime, 0.2);
  }
  sirenOff() {
    if (!this.ctx || !this.sirenNodes.length) return;
    let [e21, t2, n2] = this.sirenNodes, r3 = this.ctx.currentTime;
    n2.gain.setTargetAtTime(0, r3, 0.15), e21.stop(r3 + 1), t2.stop(r3 + 1), this.sirenNodes = [];
  }
};
var zf = (e21, t2, n2) => Math.max(t2, Math.min(n2, e21));
var Vf = {
  tukang: `Puck`,
  driver: {
    pemula: `Leda`,
    buru: `Sadachbia`,
    ngeyel: `Orus`
  },
  owners: [`Achird`, `Sulafat`],
  biker: `Zubenelgenubi`,
  heckle: [`Algenib`, `Alnilam`],
  bikeOwner: `Alnilam`,
  bakso: `Rasalgethi`,
  satpol: `Charon`,
  vendors: [`Gacrux`, `Alnilam`, `Sulafat`, `Algenib`, `Rasalgethi`, `Gacrux`, `Leda`]
};
var Hf = [
  `Terus, terus!`,
  `Kiri, kiri!`,
  `Kanan, kanan!`,
  `STOP! STOP!`,
  `Maju, maju!`,
  `Mundur, mundur!`
];
var Uf = {
  "Adanya segini, Pak.": [
    {
      v: `Achird`,
      f: `adanya-segini-pak.achird.m4a`
    }
  ],
  "Aduh! Mobil saya!": [
    {
      v: `Leda`,
      f: `aduh-mobil-saya.leda.m4a`
    },
    {
      v: `Sadachbia`,
      f: `aduh-mobil-saya.sadachbia.m4a`
    }
  ],
  "Agak miring nih, Pak.": [
    {
      v: `Leda`,
      f: `agak-miring-nih-pak.leda.m4a`
    },
    {
      v: `Sadachbia`,
      f: `agak-miring-nih-pak.sadachbia.m4a`
    },
    {
      v: `Orus`,
      f: `agak-miring-nih-pak.orus.m4a`
    }
  ],
  "Aman. Lanjut patroli.": [
    {
      v: `Charon`,
      f: `aman-lanjut-patroli.charon.m4a`
    }
  ],
  "Ampun, Pak! Saya cuma bantu-bantu!": [
    {
      v: `Puck`,
      f: `ampun-pak-saya-cuma-bantu-bantu.puck.m4a`
    }
  ],
  "Ayo dong, Pak!": [
    {
      v: `Leda`,
      f: `ayo-dong-pak.leda.m4a`
    },
    {
      v: `Sadachbia`,
      f: `ayo-dong-pak.sadachbia.m4a`
    },
    {
      v: `Orus`,
      f: `ayo-dong-pak.orus.m4a`
    }
  ],
  "BAKSO GUE!! Kuahnya tumpah semua!": [
    {
      v: `Rasalgethi`,
      f: `bakso-gue-kuahnya-tumpah-semua.rasalgethi.m4a`
    }
  ],
  "Bentar doang, Pak!": [
    {
      v: `Achird`,
      f: `bentar-doang-pak.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `bentar-doang-pak.sulafat.m4a`
    }
  ],
  "Bentar, bentar.": [
    {
      v: `Leda`,
      f: `bentar-bentar.leda.m4a`
    },
    {
      v: `Sadachbia`,
      f: `bentar-bentar.sadachbia.m4a`
    },
    {
      v: `Orus`,
      f: `bentar-bentar.orus.m4a`
    }
  ],
  "Besok mulu!": [
    {
      v: `Puck`,
      f: `besok-mulu.puck.m4a`
    }
  ],
  "Besok ya, Pak! Langganan kok!": [
    {
      v: `Achird`,
      f: `besok-ya-pak-langganan-kok.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `besok-ya-pak-langganan-kok.sulafat.m4a`
    }
  ],
  "Bisa QRIS, Pak?": [
    {
      v: `Achird`,
      f: `bisa-qris-pak.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `bisa-qris-pak.sulafat.m4a`
    }
  ],
  "Bos saya udah nelpon nih!": [
    {
      v: `Sadachbia`,
      f: `bos-saya-udah-nelpon-nih.sadachbia.m4a`
    }
  ],
  "Buat beli kopi, Pak!": [
    {
      v: `Achird`,
      f: `buat-beli-kopi-pak.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `buat-beli-kopi-pak.sulafat.m4a`
    }
  ],
  "Bubar, bubar! Ini parkir liar!": [
    {
      v: `Charon`,
      f: `bubar-bubar-ini-parkir-liar.charon.m4a`
    }
  ],
  "Capek-capek niup peluit\u2026": [
    {
      v: `Puck`,
      f: `capek-capek-niup-peluit.puck.m4a`
    }
  ],
  "Cash aja, Bos!": [
    {
      v: `Puck`,
      f: `cash-aja-bos.puck.m4a`
    }
  ],
  "Cepet dong, Pak!": [
    {
      v: `Sadachbia`,
      f: `cepet-dong-pak.sadachbia.m4a`
    }
  ],
  "Cepetan, Pak! Saya telat!": [
    {
      v: `Sadachbia`,
      f: `cepetan-pak-saya-telat.sadachbia.m4a`
    }
  ],
  "Dompet ketinggalan, Pak. Besok!": [
    {
      v: `Achird`,
      f: `dompet-ketinggalan-pak-besok.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `dompet-ketinggalan-pak-besok.sulafat.m4a`
    }
  ],
  "Dua ribu? Biasanya seribu!": [
    {
      v: `Zubenelgenubi`,
      f: `dua-ribu-biasanya-seribu.zubenelgenubi.m4a`
    }
  ],
  "Emang jalan nenek lu?!": [
    {
      v: `Alnilam`,
      f: `emang-jalan-nenek-lu.alnilam.m4a`
    }
  ],
  "Es cendol, seger!": [
    {
      v: `Sulafat`,
      f: `es-cendol-seger.sulafat.m4a`
    }
  ],
  "Hah? Apa?": [
    {
      v: `Sadachbia`,
      f: `hah-apa.sadachbia.m4a`
    },
    {
      v: `Orus`,
      f: `hah-apa.orus.m4a`
    }
  ],
  "Ikut kami ke kantor!": [
    {
      v: `Charon`,
      f: `ikut-kami-ke-kantor.charon.m4a`
    }
  ],
  "Ini mobil mertua, Pak.": [
    {
      v: `Leda`,
      f: `ini-mobil-mertua-pak.leda.m4a`
    }
  ],
  "Ini udah bener, Pak?": [
    {
      v: `Leda`,
      f: `ini-udah-bener-pak.leda.m4a`
    }
  ],
  "Ini, Pak. Uang pas ya.": [
    {
      v: `Achird`,
      f: `ini-pak-uang-pas-ya.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `ini-pak-uang-pas-ya.sulafat.m4a`
    }
  ],
  "Itu mobil orang, Pak!": [
    {
      v: `Achird`,
      f: `itu-mobil-orang-pak.achird.m4a`
    }
  ],
  "Iya, iya, tahu.": [
    {
      v: `Leda`,
      f: `iya-iya-tahu.leda.m4a`
    },
    {
      v: `Sadachbia`,
      f: `iya-iya-tahu.sadachbia.m4a`
    },
    {
      v: `Orus`,
      f: `iya-iya-tahu.orus.m4a`
    }
  ],
  "Jagain helm saya ya, Pak.": [
    {
      v: `Zubenelgenubi`,
      f: `jagain-helm-saya-ya-pak.zubenelgenubi.m4a`
    }
  ],
  "Jagain ya, Pak!": [
    {
      v: `Achird`,
      f: `jagain-ya-pak.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `jagain-ya-pak.sulafat.m4a`
    }
  ],
  "Jalan dong!": [
    {
      v: `Alnilam`,
      f: `jalan-dong.alnilam.m4a`
    }
  ],
  "Jangan teriak-teriak, Pak, saya grogi.": [
    {
      v: `Leda`,
      f: `jangan-teriak-teriak-pak-saya-grogi.leda.m4a`
    }
  ],
  "Kabur, kabur!": [
    {
      v: `Puck`,
      f: `kabur-kabur.puck.m4a`
    }
  ],
  "Kanan, kanan!": [
    {
      v: `Puck`,
      f: `kanan-kanan.puck.m4a`
    },
    {
      v: `Puck`,
      f: `kanan-kanan.puck.1.m4a`
    }
  ],
  "Kembaliannya ambil aja, Pak!": [
    {
      v: `Achird`,
      f: `kembaliannya-ambil-aja-pak.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `kembaliannya-ambil-aja-pak.sulafat.m4a`
    }
  ],
  "Kenyang! Yuk pulang.": [
    {
      v: `Achird`,
      f: `kenyang-yuk-pulang.achird.m4a`
    }
  ],
  "Kiri, kiri!": [
    {
      v: `Puck`,
      f: `kiri-kiri.puck.m4a`
    },
    {
      v: `Puck`,
      f: `kiri-kiri.puck.1.m4a`
    }
  ],
  "Lah\u2026 kabur!": [
    {
      v: `Puck`,
      f: `lah-kabur.puck.m4a`
    }
  ],
  "Lama amat!": [
    {
      v: `Leda`,
      f: `lama-amat.leda.m4a`
    },
    {
      v: `Sadachbia`,
      f: `lama-amat.sadachbia.m4a`
    },
    {
      v: `Orus`,
      f: `lama-amat.orus.m4a`
    }
  ],
  "Lecet gini masih minta bayar?": [
    {
      v: `Achird`,
      f: `lecet-gini-masih-minta-bayar.achird.m4a`
    }
  ],
  "Lele, lele! Masih anget!": [
    {
      v: `Gacrux`,
      f: `lele-lele-masih-anget.gacrux.m4a`
    }
  ],
  "Maju, maju!": [
    {
      v: `Puck`,
      f: `maju-maju.puck.m4a`
    },
    {
      v: `Puck`,
      f: `maju-maju.puck.1.m4a`
    }
  ],
  "Makasih, Bos! Hati-hati!": [
    {
      v: `Puck`,
      f: `makasih-bos-hati-hati.puck.m4a`
    }
  ],
  "Makasih, Pak!": [
    {
      v: `Leda`,
      f: `makasih-pak.leda.m4a`
    },
    {
      v: `Sadachbia`,
      f: `makasih-pak.sadachbia.m4a`
    },
    {
      v: `Orus`,
      f: `makasih-pak.orus.m4a`
    }
  ],
  "Makasih, Pak. Hati-hati!": [
    {
      v: `Achird`,
      f: `makasih-pak-hati-hati.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `makasih-pak-hati-hati.sulafat.m4a`
    }
  ],
  "Mana nih jukir liarnya?!": [
    {
      v: `Charon`,
      f: `mana-nih-jukir-liarnya.charon.m4a`
    }
  ],
  "Mana ya mobil saya\u2026 oh itu.": [
    {
      v: `Achird`,
      f: `mana-ya-mobil-saya-oh-itu.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `mana-ya-mobil-saya-oh-itu.sulafat.m4a`
    }
  ],
  "Mantap, Pak!": [
    {
      v: `Leda`,
      f: `mantap-pak.leda.m4a`
    },
    {
      v: `Sadachbia`,
      f: `mantap-pak.sadachbia.m4a`
    },
    {
      v: `Orus`,
      f: `mantap-pak.orus.m4a`
    }
  ],
  "Mantap. Aman sama saya!": [
    {
      v: `Puck`,
      f: `mantap-aman-sama-saya.puck.m4a`
    }
  ],
  "Meeting saya lima menit lagi!": [
    {
      v: `Sadachbia`,
      f: `meeting-saya-lima-menit-lagi.sadachbia.m4a`
    }
  ],
  "Meong.": [
    {
      v: `Leda`,
      f: `meong.leda.m4a`
    }
  ],
  "Miring dikit, ya sudahlah.": [
    {
      v: `Leda`,
      f: `miring-dikit-ya-sudahlah.leda.m4a`
    },
    {
      v: `Sadachbia`,
      f: `miring-dikit-ya-sudahlah.sadachbia.m4a`
    },
    {
      v: `Orus`,
      f: `miring-dikit-ya-sudahlah.orus.m4a`
    }
  ],
  "Motor doang, seribu aja ya.": [
    {
      v: `Zubenelgenubi`,
      f: `motor-doang-seribu-aja-ya.zubenelgenubi.m4a`
    }
  ],
  "Motor siapa tuh yang jatuh? \u2026Motor gue!": [
    {
      v: `Alnilam`,
      f: `motor-siapa-tuh-yang-jatuh-motor-gue.alnilam.m4a`
    }
  ],
  "Mundur, mundur!": [
    {
      v: `Puck`,
      f: `mundur-mundur.puck.m4a`
    },
    {
      v: `Puck`,
      f: `mundur-mundur.puck.1.m4a`
    }
  ],
  "Nah! Ketangkep kamu!": [
    {
      v: `Charon`,
      f: `nah-ketangkep-kamu.charon.m4a`
    }
  ],
  "Nah, gitu dong!": [
    {
      v: `Puck`,
      f: `nah-gitu-dong.puck.m4a`
    }
  ],
  "Nah, gitu dong.": [
    {
      v: `Leda`,
      f: `nah-gitu-dong.leda.m4a`
    },
    {
      v: `Sadachbia`,
      f: `nah-gitu-dong.sadachbia.m4a`
    },
    {
      v: `Orus`,
      f: `nah-gitu-dong.orus.m4a`
    }
  ],
  "Nggak ada siapa-siapa. Jalan!": [
    {
      v: `Charon`,
      f: `nggak-ada-siapa-siapa-jalan.charon.m4a`
    }
  ],
  "Nggak usah diatur-atur.": [
    {
      v: `Orus`,
      f: `nggak-usah-diatur-atur.orus.m4a`
    }
  ],
  "Nih, Pak. Makasih ya!": [
    {
      v: `Sulafat`,
      f: `nih-pak-makasih-ya.sulafat.m4a`
    }
  ],
  "Oke, oke, saya atur!": [
    {
      v: `Puck`,
      f: `oke-oke-saya-atur.puck.m4a`
    }
  ],
  "Oke, titip sama saya!": [
    {
      v: `Puck`,
      f: `oke-titip-sama-saya.puck.m4a`
    }
  ],
  "Orderan saya keburu dingin!": [
    {
      v: `Alnilam`,
      f: `orderan-saya-keburu-dingin.alnilam.m4a`
    }
  ],
  "Pak! Gimana sih?!": [
    {
      v: `Leda`,
      f: `pak-gimana-sih.leda.m4a`
    },
    {
      v: `Sadachbia`,
      f: `pak-gimana-sih.sadachbia.m4a`
    },
    {
      v: `Orus`,
      f: `pak-gimana-sih.orus.m4a`
    }
  ],
  "Pak! Keluarin mobil saya dong!": [
    {
      v: `Achird`,
      f: `pak-keluarin-mobil-saya-dong.achird.m4a`
    }
  ],
  "Pak! Tolong tahan jalannya dong!": [
    {
      v: `Achird`,
      f: `pak-tolong-tahan-jalannya-dong.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `pak-tolong-tahan-jalannya-dong.sulafat.m4a`
    }
  ],
  "Pak, motor saya yang mana ya?": [
    {
      v: `Zubenelgenubi`,
      f: `pak-motor-saya-yang-mana-ya.zubenelgenubi.m4a`
    }
  ],
  "Pak, nggak bisa keluar nih!": [
    {
      v: `Achird`,
      f: `pak-nggak-bisa-keluar-nih.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `pak-nggak-bisa-keluar-nih.sulafat.m4a`
    }
  ],
  "Pak, saya ada anak istri, Pak!": [
    {
      v: `Puck`,
      f: `pak-saya-ada-anak-istri-pak.puck.m4a`
    }
  ],
  "Pak, saya balik!": [
    {
      v: `Achird`,
      f: `pak-saya-balik.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `pak-saya-balik.sulafat.m4a`
    }
  ],
  "Pak, saya duluan dong!": [
    {
      v: `Achird`,
      f: `pak-saya-duluan-dong.achird.m4a`
    }
  ],
  "Pak, saya mau keluar!": [
    {
      v: `Achird`,
      f: `pak-saya-mau-keluar.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `pak-saya-mau-keluar.sulafat.m4a`
    }
  ],
  "Pelan-pelan ya, Pak\u2026": [
    {
      v: `Leda`,
      f: `pelan-pelan-ya-pak.leda.m4a`
    }
  ],
  "Permisi, Pak, mau keluar!": [
    {
      v: `Zubenelgenubi`,
      f: `permisi-pak-mau-keluar.zubenelgenubi.m4a`
    }
  ],
  "Permisi, Pak, mau pulang.": [
    {
      v: `Achird`,
      f: `permisi-pak-mau-pulang.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `permisi-pak-mau-pulang.sulafat.m4a`
    }
  ],
  "Potong ya, Pak. Buat ketok magic.": [
    {
      v: `Achird`,
      f: `potong-ya-pak-buat-ketok-magic.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `potong-ya-pak-buat-ketok-magic.sulafat.m4a`
    }
  ],
  "QRIS-nya lagi rusak, Bos. Cash!": [
    {
      v: `Puck`,
      f: `qris-nya-lagi-rusak-bos-cash.puck.m4a`
    }
  ],
  "STOP! STOP!": [
    {
      v: `Puck`,
      f: `stop-stop.puck.m4a`
    },
    {
      v: `Puck`,
      f: `stop-stop.puck.1.m4a`
    }
  ],
  "Sabar, Bos, sabar!": [
    {
      v: `Puck`,
      f: `sabar-bos-sabar.puck.m4a`
    }
  ],
  "Saya baru bisa nyetir, Pak.": [
    {
      v: `Leda`,
      f: `saya-baru-bisa-nyetir-pak.leda.m4a`
    }
  ],
  "Saya cuma beli kopi, Pak\u2026": [
    {
      v: `Puck`,
      f: `saya-cuma-beli-kopi-pak.puck.m4a`
    }
  ],
  "Saya keluar sendiri aja. Nggak usah bayar ya!": [
    {
      v: `Achird`,
      f: `saya-keluar-sendiri-aja-nggak-usah-bayar.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `saya-keluar-sendiri-aja-nggak-usah-bayar.sulafat.m4a`
    }
  ],
  "Saya parkir sendiri aja!": [
    {
      v: `Leda`,
      f: `saya-parkir-sendiri-aja.leda.m4a`
    },
    {
      v: `Sadachbia`,
      f: `saya-parkir-sendiri-aja.sadachbia.m4a`
    },
    {
      v: `Orus`,
      f: `saya-parkir-sendiri-aja.orus.m4a`
    }
  ],
  "Saya udah 20 tahun nyetir, Pak.": [
    {
      v: `Orus`,
      f: `saya-udah-20-tahun-nyetir-pak.orus.m4a`
    }
  ],
  "Saya udah jago, Pak.": [
    {
      v: `Orus`,
      f: `saya-udah-jago-pak.orus.m4a`
    }
  ],
  "Sebentar doang, Pak!": [
    {
      v: `Zubenelgenubi`,
      f: `sebentar-doang-pak.zubenelgenubi.m4a`
    }
  ],
  "Sebentar ya, Pak, ke ATM.": [
    {
      v: `Achird`,
      f: `sebentar-ya-pak-ke-atm.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `sebentar-ya-pak-ke-atm.sulafat.m4a`
    }
  ],
  "Segini doang?!": [
    {
      v: `Puck`,
      f: `segini-doang.puck.m4a`
    }
  ],
  "Siap, Bos! Terus, terus\u2026": [
    {
      v: `Puck`,
      f: `siap-bos-terus-terus.puck.m4a`
    }
  ],
  "Sip! Jangan lupa kunci ya, Bos!": [
    {
      v: `Puck`,
      f: `sip-jangan-lupa-kunci-ya-bos.puck.m4a`
    }
  ],
  "Sip, Bos! Sering-sering ya!": [
    {
      v: `Puck`,
      f: `sip-bos-sering-sering-ya.puck.m4a`
    }
  ],
  "Spionnya juga keliatan kok.": [
    {
      v: `Orus`,
      f: `spionnya-juga-keliatan-kok.orus.m4a`
    }
  ],
  "Stop, stop! Ada yang keluar!": [
    {
      v: `Puck`,
      f: `stop-stop-ada-yang-keluar.puck.m4a`
    }
  ],
  "Tenang, saya ahlinya.": [
    {
      v: `Orus`,
      f: `tenang-saya-ahlinya.orus.m4a`
    }
  ],
  "Tertib, Pak, tertib!": [
    {
      v: `Charon`,
      f: `tertib-pak-tertib.charon.m4a`
    }
  ],
  "Terus, terus!": [
    {
      v: `Puck`,
      f: `terus-terus.puck.m4a`
    },
    {
      v: `Puck`,
      f: `terus-terus.puck.1.m4a`
    }
  ],
  "Tin tiiin!": [
    {
      v: `Achird`,
      f: `tin-tiiin.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `tin-tiiin.sulafat.m4a`
    },
    {
      v: `Algenib`,
      f: `tin-tiiin.algenib.m4a`
    }
  ],
  "Titip ya, Pak!": [
    {
      v: `Zubenelgenubi`,
      f: `titip-ya-pak.zubenelgenubi.m4a`
    }
  ],
  "Titip ya, Pak! Mau makan dulu.": [
    {
      v: `Achird`,
      f: `titip-ya-pak-mau-makan-dulu.achird.m4a`
    }
  ],
  "Transfer aja boleh, Pak?": [
    {
      v: `Achird`,
      f: `transfer-aja-boleh-pak.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `transfer-aja-boleh-pak.sulafat.m4a`
    }
  ],
  "Tukang parkirnya mana sih?!": [
    {
      v: `Achird`,
      f: `tukang-parkirnya-mana-sih.achird.m4a`
    },
    {
      v: `Sulafat`,
      f: `tukang-parkirnya-mana-sih.sulafat.m4a`
    }
  ],
  "Udah, udah, cukup!": [
    {
      v: `Sadachbia`,
      f: `udah-udah-cukup.sadachbia.m4a`
    }
  ],
  "Untung sepi. Gratis dong!": [
    {
      v: `Achird`,
      f: `untung-sepi-gratis-dong.achird.m4a`
    }
  ],
  "WOY! Bayar dulu!": [
    {
      v: `Puck`,
      f: `woy-bayar-dulu.puck.m4a`
    }
  ],
  "WOY! Mobil gue!": [
    {
      v: `Sulafat`,
      f: `woy-mobil-gue.sulafat.m4a`
    }
  ],
  "WOY! Motor gue kok rebahan?!": [
    {
      v: `Alnilam`,
      f: `woy-motor-gue-kok-rebahan.alnilam.m4a`
    }
  ],
  "Waduh, Satpol PP! Ngumpet dulu!": [
    {
      v: `Puck`,
      f: `waduh-satpol-pp-ngumpet-dulu.puck.m4a`
    }
  ],
  "Waduh, lecet!": [
    {
      v: `Leda`,
      f: `waduh-lecet.leda.m4a`
    },
    {
      v: `Orus`,
      f: `waduh-lecet.orus.m4a`
    }
  ],
  "Woy woy, tahan dulu!": [
    {
      v: `Puck`,
      f: `woy-woy-tahan-dulu.puck.m4a`
    }
  ],
  "Woy, lama!": [
    {
      v: `Algenib`,
      f: `woy-lama.algenib.m4a`
    }
  ],
  "Yaelah, Bos\u2026 pelit amat.": [
    {
      v: `Puck`,
      f: `yaelah-bos-pelit-amat.puck.m4a`
    }
  ]
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
  queue: 0
};
var Gf = /* @__PURE__ */ new Map();
var Kf = /* @__PURE__ */ new Map();
var qf = (e21, t2) => e21.id.forEach((n2, r3) => {
  Gf.set(n2, n2), e21.en[r3] && Gf.set(e21.en[r3], n2), Kf.set(n2, t2);
});
var Speech = class {
  constructor(e21) {
    this.sfx = e21, this.driver = Vf.driver.pemula, this.buffers = /* @__PURE__ */ new Map(), this.playing = [], this.lastAmbient = -1 / 0, this.preloaded = false;
  }
  preload() {
    if (this.preloaded || !this.sfx.ctx) return;
    this.preloaded = true;
    let e21 = Object.values(Uf).flatMap((e22) => e22.map((e23) => e23.f)), t2 = 0, n2 = async () => {
      let r3 = e21[t2++];
      if (r3) return await this.load(r3), n2();
    };
    for (let e22 = 0; e22 < 4; e22++) n2();
  }
  load(e21) {
    let t2 = this.buffers.get(e21);
    if (!t2) {
      let n2 = this.sfx.ctx;
      t2 = fetch(`/voice/${e21}`).then((e22) => e22.ok ? e22.arrayBuffer() : Promise.reject()).then((e22) => n2.decodeAudioData(e22)).catch(() => null), this.buffers.set(e21, t2);
    }
    return t2;
  }
  choose(e21, t2) {
    let n2 = Uf[e21];
    if (!n2?.length) return null;
    let r3 = t2 === `tukang` ? Vf.tukang : t2 === `driver` ? this.driver : null, i2 = r3 ? n2.filter((e22) => e22.v === r3) : n2.filter((e22) => e22.v !== Vf.tukang);
    return i2.length ? i2[Math.floor(Math.random() * i2.length)] : null;
  }
  rank(e21, t2) {
    return t2 === `tukang` ? 3 : t2 === `driver` ? 2 : Wf[Kf.get(e21) ?? ``] ?? 1;
  }
  fadeOut(e21) {
    let t2 = this.sfx.ctx.currentTime;
    e21.gain.gain.cancelScheduledValues(t2), e21.gain.gain.setValueAtTime(e21.gain.gain.value, t2), e21.gain.gain.linearRampToValueAtTime(0, t2 + 0.08), e21.src.stop(t2 + 0.1), e21.ends = t2;
  }
  say(e21, t2) {
    let n2 = this.sfx.ctx;
    if (!n2) return;
    let r3 = Gf.get(e21), i2 = r3 && this.choose(r3, t2);
    if (!r3 || !i2) return;
    let a2 = this.rank(r3, t2), o2 = n2.currentTime;
    this.load(i2.f).then((e22) => {
      if (!e22) return;
      let i3 = () => {
        let s2 = n2.currentTime;
        if (s2 - o2 > (a2 >= 2 ? 1.2 : 0.8)) return;
        let c2 = this.playing.filter((e23) => e23.ends > s2 + 0.05);
        if (t2 === `tukang`) {
          if (c2.some((e23) => e23.who === `tukang` && e23.line === r3 && e23.ends - s2 > 0.3)) return;
          for (let e23 of c2) e23.who === `tukang` && this.fadeOut(e23);
        } else if (a2 === 0) {
          if (c2.length || s2 - this.lastAmbient < 5) return;
          this.lastAmbient = s2;
        } else {
          let e23 = c2.filter((e24) => e24.rank >= a2 && e24.who !== `tukang`);
          if (e23.length) {
            let t3 = Math.max(...e23.map((e24) => e24.ends)) - s2;
            t3 < 0.9 && setTimeout(i3, t3 * 1e3 + 60);
            return;
          }
          for (let e24 of c2) e24.rank < a2 && e24.who !== `tukang` && this.fadeOut(e24);
        }
        this.start(e22, a2, t2, r3);
      };
      i3();
    });
  }
  start(e21, t2, n2, r3) {
    let i2 = this.sfx.ctx, a2 = i2.createBufferSource();
    a2.buffer = e21;
    let o2 = i2.createGain();
    o2.gain.value = t2 === 3 ? 1 : t2 === 2 ? 0.9 : t2 === 1 ? 0.75 : 0.5, a2.connect(o2).connect(this.sfx.voice);
    let s2 = {
      src: a2,
      gain: o2,
      rank: t2,
      who: n2,
      line: r3,
      ends: i2.currentTime + e21.duration
    };
    if (n2 === `tukang`)
      for (let e22 of this.playing)
        e22.who !== `tukang` && e22.ends > i2.currentTime && e22.gain.gain.setTargetAtTime(0.35, i2.currentTime, 0.05);
    this.playing.push(s2), this.sfx.duck(1), a2.onended = () => {
      this.sfx.duck(-1), this.playing = this.playing.filter((e22) => e22 !== s2);
    }, a2.start();
  }
};
var Yf = (e21, t2 = {}) => new qa({
  color: e21,
  ...t2
});
function Xf(e21, t2, n2, r3, i2, a2, o2) {
  let s2 = new ei(new hi(e21, t2, n2), Yf(r3));
  return s2.position.set(i2, a2, o2), s2.castShadow = true, s2.receiveShadow = true, s2;
}
function Zf(e21, t2, n2, r3, i2, a2 = 0.012, o2 = 1) {
  let s2 = new ei(
    new Pa(e21, t2),
    new Hr({
      color: n2,
      transparent: o2 < 1,
      opacity: o2
    })
  );
  return s2.rotation.x = -Math.PI / 2, s2.position.set(r3, a2, i2), s2;
}

// src/app/engine.js
function addBoxMesh(e21, t2, n2, r3, i2, a2, o2, s2 = true) {
  let c2 = new ei(new hi(e21, t2, n2), r3);
  return c2.position.set(i2, a2, o2), c2.castShadow = s2, c2;
}
var uu = 0.28;
var du = 0.32;
var CarMesh = class {
  constructor(e21, t2) {
    this.def = e21, this.color = t2, this.group = new cn(), this.x = 0, this.z = 0, this.heading = 0, this.v = 0, this.steer = 0, this.rects = [], this.pivots = [], this.wheels = [], this.body = new cn(), this.doorPivot = new cn(), this.door = 0, this.doorTo = 0, this.pitch = 0, this.pitchV = 0, this.roll = 0, this.rollV = 0, this.lastV = 0;
    let n2 = e21, r3 = this.body;
    this.group.add(r3), this.bodyCz = -n2.rearOverhang + n2.length / 2;
    let i2 = -n2.rearOverhang, a2 = i2 + n2.length, o2 = cu(t2), s2 = cu(2043194), c2 = uu + n2.bodyH;
    r3.add(addBoxMesh(n2.width, n2.bodyH, n2.length, o2, 0, uu + n2.bodyH / 2, this.bodyCz)), r3.add(
      addBoxMesh(
        n2.width + 0.06,
        0.16,
        n2.length + 0.08,
        cu(2829099),
        0,
        0.36000000000000004,
        this.bodyCz,
        false
      )
    );
    let l2 = this.bodyCz + n2.cabin.off;
    r3.add(addBoxMesh(n2.width - 0.18, n2.cabin.h, n2.cabin.len, s2, 0, c2 + n2.cabin.h / 2, l2));
    let u2 = Math.min(1, n2.wheelbase * 0.42);
    if (this.doorPivot.position.set(-n2.width / 2 - 0.03, uu + n2.bodyH * 0.52, n2.wheelbase * 0.8), this.doorPivot.add(addBoxMesh(0.05, n2.bodyH * 0.86, u2, o2, 0, 0, -u2 / 2, false)), this.doorPivot.add(
      addBoxMesh(0.05, 0.05, 0.16, cu(2236962), -0.04, n2.bodyH * 0.2, -u2 + 0.18, false)
    ), r3.add(this.doorPivot), r3.add(addBoxMesh(n2.width - 0.1, 0.08, n2.cabin.len - 0.25, o2, 0, c2 + n2.cabin.h + 0.04, l2, false)), this.rects.push({
      cz: this.bodyCz,
      hx: n2.width / 2,
      hz: n2.length / 2
    }), n2.cargo) {
      let e22 = l2 - n2.cabin.len / 2, t3 = e22 - i2;
      r3.add(addBoxMesh(n2.width - 0.24, 0.04, t3 - 0.12, cu(3815994), 0, c2 + 0.02, i2 + t3 / 2, false));
      let a3 = t3 + n2.cargo.overhang, o3 = cu(13938762);
      for (let t4 of [-0.15, 0, 0.15]) {
        let n3 = new ei(new gi(0.06, 0.06, a3, 6), o3);
        n3.rotation.x = Math.PI / 2, n3.position.set(t4, c2 + 0.12 + (t4 === 0 ? 0.1 : 0), e22 - a3 / 2), n3.castShadow = true, r3.add(n3);
      }
      r3.add(
        addBoxMesh(0.3, 0.3, 0.04, cu(15087942), 0, c2 + 0.08, i2 - n2.cargo.overhang - 0.03, false)
      ), this.rects.push({
        cz: i2 - n2.cargo.overhang / 2,
        hx: n2.cargo.width / 2,
        hz: n2.cargo.overhang / 2
      });
    }
    let d2 = uu + n2.bodyH * 0.62, f2 = n2.width / 2 - 0.3, p2 = cu(16774856, {
      emissive: 16773808,
      emissiveIntensity: 0.9
    });
    this.tail = cu(11538464, {
      emissive: 3342336
    }), this.rev = cu(14540253, {
      emissive: 1118481
    });
    for (let e22 of [-1, 1])
      r3.add(addBoxMesh(0.34, 0.16, 0.06, p2, e22 * f2, d2, a2 + 0.01, false)), r3.add(addBoxMesh(0.34, 0.16, 0.06, this.tail, e22 * f2, d2, i2 - 0.01, false));
    r3.add(addBoxMesh(0.3, 0.1, 0.06, this.rev, 0, d2, i2 - 0.01, false));
    let m2 = cu(1447446), h2 = cu(12172998), g2 = new gi(du, du, 0.24, 12);
    g2.rotateZ(Math.PI / 2);
    let _2 = new hi(0.26, 0.09, du * 1.5), v2 = () => {
      let e22 = new ei(g2, m2);
      return e22.add(new ei(_2, h2)), this.wheels.push(e22), e22;
    };
    for (let e22 of [-1, 1]) {
      let t3 = e22 * (n2.width / 2 - 0.1), r4 = v2();
      r4.position.set(t3, du, 0), this.group.add(r4);
      let i3 = new cn();
      i3.position.set(t3, du, n2.wheelbase), i3.add(v2()), this.group.add(i3), this.pivots.push(i3);
    }
  }
  animate(e21) {
    if (e21 <= 0) return;
    this.door += Math.max(-e21 * 4, Math.min(e21 * 4, this.doorTo - this.door)), this.doorPivot.rotation.y = this.door * 1.15;
    let t2 = Math.max(-12, Math.min(12, (this.v - this.lastV) / e21));
    this.lastV = this.v;
    let n2 = this.v * this.v * Math.tan(this.steer) / this.def.wheelbase, r3 = Math.max(-0.06, Math.min(0.06, -t2 * 0.011)), i2 = Math.max(-0.07, Math.min(0.07, n2 * 0.03));
    this.pitchV += (-90 * (this.pitch - r3) - 9 * this.pitchV) * e21, this.pitch += this.pitchV * e21, this.rollV += (-90 * (this.roll - i2) - 9 * this.rollV) * e21, this.roll += this.rollV * e21, this.body.rotation.set(this.pitch, 0, this.roll);
    let a2 = this.v / du * e21;
    for (let e22 of this.wheels) e22.rotation.x += a2;
  }
  jolt(e21, t2 = 0) {
    this.pitchV += e21, this.rollV += t2;
  }
  setPose(e21, t2, n2) {
    this.x = e21, this.z = t2, this.heading = n2, this.sync();
  }
  setBodyCenter(e21, t2, n2) {
    this.setPose(e21 - Math.sin(n2) * this.bodyCz, t2 - Math.cos(n2) * this.bodyCz, n2);
  }
  step(e21, t2, n2, r3, i2, a2) {
    let o2 = (Math.abs(t2) < Math.abs(this.v) || t2 * this.v < 0 ? a2 : i2) * e21;
    this.v += Math.max(-o2, Math.min(o2, t2 - this.v));
    let s2 = r3 * e21;
    this.steer += Math.max(-s2, Math.min(s2, n2 - this.steer)), this.heading += this.v / this.def.wheelbase * Math.tan(this.steer) * e21, this.x += this.v * Math.sin(this.heading) * e21, this.z += this.v * Math.cos(this.heading) * e21;
  }
  sync() {
    this.group.position.set(this.x, 0, this.z), this.group.rotation.y = this.heading;
    for (let e21 of this.pivots) e21.rotation.y = this.steer;
  }
  setLights(e21, t2) {
    this.tail.emissive.setHex(e21 ? 16718362 : 3342336), this.rev.emissive.setHex(t2 ? 16777215 : 1118481);
  }
  footprint() {
    return {
      rects: this.rects.map((e21) => ({
        ...e21
      })),
      wheelbase: this.def.wheelbase
    };
  }
  doorPoint() {
    let e21 = -(this.def.width / 2 + 0.55), t2 = this.def.wheelbase * 0.5, n2 = Math.sin(this.heading), r3 = Math.cos(this.heading);
    return [this.x + n2 * t2 + r3 * e21, this.z + r3 * t2 - n2 * e21];
  }
  bodyCenter() {
    return [
      this.x + Math.sin(this.heading) * this.bodyCz,
      this.z + Math.cos(this.heading) * this.bodyCz
    ];
  }
  bodyObb() {
    return this.obbs()[0];
  }
  obbs() {
    return this.obbsAt(this.x, this.z, this.heading);
  }
  obbsAt(e21, t2, n2, r3 = 0) {
    let i2 = Math.sin(n2), a2 = Math.cos(n2);
    return this.rects.map((o2) => ({
      x: e21 + i2 * o2.cz,
      z: t2 + a2 * o2.cz,
      hx: o2.hx + r3,
      hz: o2.hz + r3,
      rot: n2
    }));
  }
};
function obbCorners(e21) {
  let t2 = Math.cos(e21.rot), n2 = Math.sin(e21.rot), r3 = [];
  for (let [i2, a2] of [
    [1, 1],
    [1, -1],
    [-1, -1],
    [-1, 1]
  ]) {
    let o2 = i2 * e21.hx, s2 = a2 * e21.hz;
    r3.push([e21.x + t2 * o2 + n2 * s2, e21.z - n2 * o2 + t2 * s2]);
  }
  return r3;
}
function obbOverlap(e21, t2) {
  let n2 = Math.cos(e21.rot), r3 = Math.sin(e21.rot), i2 = Math.cos(t2.rot), a2 = Math.sin(t2.rot), o2 = [
    [n2, -r3],
    [r3, n2],
    [i2, -a2],
    [a2, i2]
  ], s2 = t2.x - e21.x, c2 = t2.z - e21.z;
  for (let [l2, u2] of o2) {
    let o3 = e21.hx * Math.abs(n2 * l2 - r3 * u2) + e21.hz * Math.abs(r3 * l2 + n2 * u2), d2 = t2.hx * Math.abs(i2 * l2 - a2 * u2) + t2.hz * Math.abs(a2 * l2 + i2 * u2);
    if (Math.abs(s2 * l2 + c2 * u2) > o3 + d2) return false;
  }
  return true;
}
function arcGeometry(e21) {
  let t2 = 1.7, n2 = [], r3 = [], i2 = new H(), a2 = new H();
  for (let o3 = 0; o3 <= 10; o3++) {
    let s3 = o3 / 10 * 0.95, c3 = new H(e21 * (1.92 - t2 * Math.cos(s3)), t2 * Math.sin(s3)), l2 = new H(e21 * Math.sin(s3), Math.cos(s3)), u2 = new H(l2.y, -l2.x);
    n2.push(c3.clone().addScaledVector(u2, -0.13)), r3.push(c3.clone().addScaledVector(u2, 0.13)), i2 = c3, a2 = l2;
  }
  let o2 = new H(a2.y, -a2.x), s2 = new Yi();
  s2.moveTo(n2[0].x, n2[0].y);
  for (let e22 of n2) s2.lineTo(e22.x, e22.y);
  s2.lineTo(i2.x - o2.x * 0.36, i2.y - o2.y * 0.36), s2.lineTo(i2.x + a2.x * 0.5, i2.y + a2.y * 0.5), s2.lineTo(i2.x + o2.x * 0.36, i2.y + o2.y * 0.36);
  for (let e22 = r3.length - 1; e22 >= 0; e22--) s2.lineTo(r3[e22].x, r3[e22].y);
  let c2 = new Fa(s2);
  return c2.rotateX(Math.PI / 2), c2;
}
function signTexture(e21, t2) {
  let n2 = document.createElement(`canvas`);
  n2.width = 256, n2.height = 96;
  let r3 = n2.getContext(`2d`);
  r3.fillStyle = `#` + t2.toString(16).padStart(6, `0`), r3.beginPath(), r3.roundRect(6, 6, 244, 84, 40), r3.fill(), r3.strokeStyle = `#ffffff`, r3.lineWidth = 8, r3.stroke(), r3.fillStyle = `#ffffff`, r3.font = `900 54px "Arial Black", "Helvetica Neue", Arial, sans-serif`, r3.textAlign = `center`, r3.textBaseline = `middle`, r3.fillText(e21, 128, 52);
  let i2 = new di(n2);
  i2.colorSpace = ze;
  let a2 = new Fr(
    new xr({
      map: i2,
      depthTest: false,
      transparent: true
    })
  );
  return a2.scale.set(1.25, 0.47, 1), a2.renderOrder = 10, a2;
}
var GuideHud = class {
  constructor() {
    this.group = new cn(), this.fade = 0, this.t = 0;
    let e21 = (e22, t2, n2) => {
      let r3 = new Hr({
        color: t2,
        transparent: true,
        opacity: 0.6,
        depthWrite: false,
        side: 2
      }), i2 = new ei(arcGeometry(e22), r3);
      i2.position.y = 0.03, i2.renderOrder = 2;
      let a2 = signTexture(n2, t2);
      return this.group.add(i2, a2), {
        bend: e22,
        arrow: i2,
        mat: r3,
        tag: a2,
        glow: 0
      };
    };
    this.sides = {
      kiri: e21(1, COLOR_ASPHALT, `KIRI`),
      kanan: e21(-1, COLOR_ASPHALT_LIGHT, `KANAN`)
    }, this.group.visible = false;
  }
  update(e21, t2, n2, r3) {
    if (this.t += e21, this.fade = Math.max(0, Math.min(1, this.fade + (t2 ? 4 : -4) * e21)), this.group.visible = this.fade > 0, !t2)
      return;
    let [i2, a2] = t2.bodyCenter(), o2 = Math.sin(t2.heading) * n2, s2 = Math.cos(t2.heading) * n2, c2 = t2.def.length / 2 + 0.45 + (n2 < 0 ? t2.def.cargo?.overhang ?? 0 : 0), l2 = new U(i2 + o2 * c2, 0, a2 + s2 * c2), u2 = Math.atan2(o2, s2), d2 = Math.min(1, e21 * 12);
    this.group.position.lerp(l2, d2);
    let f2 = u2 - this.group.rotation.y;
    f2 = Math.atan2(Math.sin(f2), Math.cos(f2)), this.group.rotation.y += f2 * d2;
    for (let t3 of [`kiri`, `kanan`]) {
      let i3 = this.sides[t3];
      i3.glow += (+!!r3[t3] - i3.glow) * Math.min(1, e21 * 14);
      let a3 = r3[t3] ? 0.06 * Math.sin(this.t * 14) : 0;
      i3.mat.opacity = (0.45 + 0.5 * i3.glow) * this.fade;
      let o3 = 1 + 0.12 * i3.glow + a3;
      i3.arrow.scale.set(o3 * n2, o3, o3), i3.tag.position.set(i3.bend * n2 * 1.3, 0.6, 1.9), i3.tag.material.opacity = (0.75 + 0.25 * i3.glow) * this.fade, i3.tag.scale.set(1.25 * (1 + 0.15 * i3.glow), 0.47 * (1 + 0.15 * i3.glow), 1);
    }
  }
};
function mergeGeometries(e21, t2 = false) {
  let n2 = e21[0].index !== null, r3 = new Set(Object.keys(e21[0].attributes)), i2 = new Set(Object.keys(e21[0].morphAttributes)), a2 = {}, o2 = {}, s2 = e21[0].morphTargetsRelative, c2 = new ur();
  c2.morphTargetsRelative = s2;
  let l2 = 0;
  for (let u2 = 0; u2 < e21.length; ++u2) {
    let d2 = e21[u2], f2 = 0, p2 = 0;
    if (n2 !== (d2.index !== null))
      return console.error(
        `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` + u2 + `. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`
      ), null;
    for (let e22 in d2.attributes) {
      if (!r3.has(e22))
        return console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` + u2 + `. All geometries must have compatible attributes; make sure "` + e22 + `" attribute exists among all geometries, or in none of them.`
        ), null;
      a2[e22] === void 0 && (a2[e22] = []), a2[e22].push(d2.attributes[e22]), f2++;
    }
    if (f2 !== r3.size)
      return console.error(
        `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` + u2 + `. Make sure all geometries have the same number of attributes.`
      ), null;
    if (s2 !== d2.morphTargetsRelative)
      return console.error(
        `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` + u2 + `. .morphTargetsRelative must be consistent throughout all geometries.`
      ), null;
    for (let t3 in d2.morphAttributes) {
      if (!i2.has(t3))
        return console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` + u2 + `.  .morphAttributes must be consistent throughout all geometries.`
        ), null;
      if (d2.morphAttributes[t3].length !== e21[0].morphAttributes[t3].length)
        return console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` + u2 + `. All geometries must have the same number of morph targets for the "` + t3 + `" morph attribute.`
        ), null;
      o2[t3] === void 0 && (o2[t3] = []), o2[t3].push(d2.morphAttributes[t3]), p2++;
    }
    if (p2 !== i2.size)
      return console.error(
        `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` + u2 + `. Make sure all geometries have the same number of morph attributes.`
      ), null;
    if (t2) {
      let e22;
      if (n2) e22 = d2.index.count;
      else if (d2.attributes.position !== void 0) e22 = d2.attributes.position.count;
      else
        return console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` + u2 + `. The geometry must have either an index or a position attribute`
        ), null;
      c2.addGroup(l2, e22, u2), l2 += e22;
    }
  }
  if (n2) {
    let t3 = 0, n3 = [];
    for (let r4 = 0; r4 < e21.length; ++r4) {
      let i3 = e21[r4].index;
      for (let e22 = 0; e22 < i3.count; ++e22) n3.push(i3.getX(e22) + t3);
      t3 += e21[r4].attributes.position.count;
    }
    c2.setIndex(n3);
  }
  for (let e22 in a2) {
    let t3 = mergeAttributes(a2[e22]);
    if (!t3)
      return console.error(
        `THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` + e22 + ` attribute.`
      ), null;
    c2.setAttribute(e22, t3);
  }
  for (let e22 in o2) {
    let t3 = o2[e22][0].length;
    if (t3 !== 0) {
      c2.morphAttributes = c2.morphAttributes || {}, c2.morphAttributes[e22] = [];
      for (let n3 = 0; n3 < t3; ++n3) {
        let t4 = [];
        for (let r5 = 0; r5 < o2[e22].length; ++r5) t4.push(o2[e22][r5][n3]);
        let r4 = mergeAttributes(t4);
        if (!r4)
          return console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` + e22 + ` morphAttribute.`
          ), null;
        c2.morphAttributes[e22].push(r4);
      }
    }
  }
  return c2;
}
function mergeAttributes(e21) {
  let t2, n2, r3, i2 = -1, a2 = 0;
  for (let o3 = 0; o3 < e21.length; ++o3) {
    let s3 = e21[o3];
    if (t2 === void 0 && (t2 = s3.array.constructor), t2 !== s3.array.constructor)
      return console.error(
        `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`
      ), null;
    if (n2 === void 0 && (n2 = s3.itemSize), n2 !== s3.itemSize)
      return console.error(
        `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`
      ), null;
    if (r3 === void 0 && (r3 = s3.normalized), r3 !== s3.normalized)
      return console.error(
        `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`
      ), null;
    if (i2 === -1 && (i2 = s3.gpuType), i2 !== s3.gpuType)
      return console.error(
        `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`
      ), null;
    a2 += s3.count * n2;
  }
  let o2 = new t2(a2), s2 = new Yn(o2, n2, r3), c2 = 0;
  for (let t3 = 0; t3 < e21.length; ++t3) {
    let r4 = e21[t3];
    if (r4.isInterleavedBufferAttribute) {
      let e22 = c2 / n2;
      for (let t4 = 0, i3 = r4.count; t4 < i3; t4++)
        for (let i4 = 0; i4 < n2; i4++) {
          let n3 = r4.getComponent(t4, i4);
          s2.setComponent(t4 + e22, i4, n3);
        }
    } else o2.set(r4.array, c2);
    c2 += r4.count * n2;
  }
  return i2 !== void 0 && (s2.gpuType = i2), s2;
}
var vertexColorMaterial = new qa({
  vertexColors: true
});
var Hu = 1513239;
var Uu = class {
  constructor() {
    this.parts = [], this.base = new Nt(), this.m = new Nt(), this.p = new U(), this.q = new dt(), this.e = new Ut(), this.s = new U(1, 1, 1), this.c = new K();
  }
  at(e21 = 0, t2 = 0, n2 = 0, r3 = 0, i2 = 1) {
    return this.base.compose(new U(e21, t2, n2), new dt().setFromEuler(new Ut(0, r3, 0)), new U(i2, i2, i2)), this;
  }
  add(e21, t2, n2, r3, i2, a2 = 0, o2 = 0, s2 = 0) {
    let c2 = e21.index ? e21.toNonIndexed() : e21;
    this.m.compose(this.p.set(n2, r3, i2), this.q.setFromEuler(this.e.set(a2, o2, s2, `YXZ`)), this.s).premultiply(this.base), c2.applyMatrix4(this.m), c2.deleteAttribute(`uv`);
    let l2 = c2.attributes.position.count, u2 = new Float32Array(l2 * 3);
    this.c.set(t2);
    for (let e22 = 0; e22 < l2; e22++) u2.set([this.c.r, this.c.g, this.c.b], e22 * 3);
    return c2.setAttribute(`color`, new Yn(u2, 3)), this.parts.push(c2), this;
  }
  box(e21, t2, n2, r3, i2, a2, o2, s2 = 0, c2 = 0, l2 = 0) {
    return this.add(new hi(e21, t2, n2), r3, i2, a2, o2, s2, c2, l2);
  }
  cyl(e21, t2, n2, r3, i2, a2, o2, s2 = 8, c2 = 0, l2 = 0) {
    return this.add(new gi(e21, t2, n2, s2), r3, i2, a2, o2, c2, 0, l2);
  }
  wheel(e21, t2, n2, r3) {
    return this.cyl(e21, e21, t2, Hu, n2, e21, r3, 10, 0, Math.PI / 2);
  }
  cone(e21, t2, n2, r3, i2, a2, o2 = 8, s2 = 0, c2 = 0) {
    return this.add(new _i(e21, t2, o2), n2, r3, i2, a2, s2, 0, c2);
  }
  ball(e21, t2, n2, r3, i2, a2 = 1) {
    return this.add(new Na(e21, a2), t2, n2, r3, i2);
  }
  roof(e21, t2, n2, r3, i2, a2, o2) {
    let s2 = new _i(Math.SQRT1_2, n2, 4);
    return s2.rotateY(Math.PI / 4), s2.scale(e21, 1, t2), this.add(s2, r3, i2, a2 + n2 / 2, o2);
  }
  build(e21 = true) {
    let t2 = new ei(mergeGeometries(this.parts, false), vertexColorMaterial);
    return t2.castShadow = e21, this.parts = [], t2;
  }
};
function drawCanvasSign(e21, t2, n2, r3, i2, a2 = {}) {
  let o2 = Math.min(96, 512 / t2), s2 = document.createElement(`canvas`);
  s2.width = Math.round(t2 * o2), s2.height = Math.round(n2 * o2);
  let c2 = s2.getContext(`2d`);
  c2.fillStyle = r3, c2.fillRect(0, 0, s2.width, s2.height);
  let l2 = 0;
  if (a2.stripes) {
    let e22 = s2.height * 0.14;
    a2.stripes.forEach((t3, n3) => {
      c2.fillStyle = t3, c2.fillRect(0, s2.height - e22 * (a2.stripes.length - n3), s2.width, e22);
    }), l2 = -e22 * a2.stripes.length;
  }
  a2.border && (c2.strokeStyle = a2.border, c2.lineWidth = Math.max(3, s2.height * 0.06), c2.strokeRect(c2.lineWidth / 2, c2.lineWidth / 2, s2.width - c2.lineWidth, s2.height - c2.lineWidth));
  let u2 = (s2.height + l2) / e21.length;
  c2.textAlign = `center`, c2.textBaseline = `middle`, e21.forEach((e22, t3) => {
    let n3 = u2 * (t3 === 0 ? 0.74 : 0.6), r4 = a2.font ?? `900 {s}px "Arial Black", "Helvetica Neue", Arial, sans-serif`;
    c2.font = r4.replace(`{s}`, String(n3));
    let o3 = s2.width * 0.9 / c2.measureText(e22).width;
    o3 < 1 && (n3 *= o3, c2.font = r4.replace(`{s}`, String(n3))), c2.fillStyle = Array.isArray(i2) ? i2[t3 % i2.length] : i2, c2.fillText(e22, s2.width / 2, u2 * (t3 + 0.5));
  });
  let d2 = new di(s2);
  return d2.colorSpace = ze, d2.anisotropy = 4, new ei(
    new Pa(t2, n2),
    new Hr({
      map: d2
    })
  );
}
function disposeTree(e21) {
  e21.traverse((e22) => {
    let t2 = e22;
    t2.isMesh && (t2.geometry.dispose(), t2.material !== vertexColorMaterial && t2.material.dispose());
  });
}
var Ku = [13010498, 11104570, 14262374, 9262372];
var qu = [
  15087942,
  4553629,
  16032353,
  2792847,
  16777215,
  16765286,
  8599788,
  3835647,
  7107965,
  16743074
];
var Ju = [3095378, 3815994, 6048314, 1914199];
var Yu = 1615178;
var Xu = 2043194;
var Zu = 10474495;
var Qu = (e21, t2) => e21 + Math.random() * (t2 - e21);
function $u() {
  let e21 = new Uu(), t2 = pickLang([14034984, 1914199, 1118481, 16219904, 16777215, 2855752]), n2 = Math.random() < 0.4, r3 = n2 ? Yu : pickLang(qu), i2 = n2 ? Yu : pickLang([1118481, 16777215, 14034984, 1914199, 16743074]);
  e21.wheel(0.3, 0.12, 0, 0.62).wheel(0.3, 0.12, 0, -0.62), e21.box(0.3, 0.38, 1.15, t2, 0, 0.58, 0), e21.box(0.28, 0.1, 0.7, 1710618, 0, 0.82, -0.25), e21.box(0.6, 0.05, 0.06, 4473924, 0, 1.02, 0.45), e21.box(0.22, 0.32, 0.1, t2, 0, 0.86, 0.52), e21.box(0.3, 0.22, 0.5, pickLang(Ju), 0, 0.92, 0.05), e21.box(0.4, 0.52, 0.28, r3, 0, 1.2, -0.08), e21.ball(0.19, i2, 0, 1.6, -0.05, 0);
  let a2 = Math.random();
  return a2 < 0.3 ? (e21.box(0.38, 0.5, 0.26, pickLang(qu), 0, 1.2, -0.42), e21.ball(0.18, pickLang([1118481, 16777215, Yu]), 0, 1.58, -0.4, 0)) : n2 && a2 < 0.65 && e21.box(0.42, 0.42, 0.4, Yu, 0, 1.05, -0.5), {
    obj: e21.build(),
    len: 2,
    speed: Qu(8, 11),
    kind: `motor`
  };
}
function ed() {
  let e21 = new Uu(), t2 = Math.random() < 0.8, n2 = t2 ? 1863120 : 15888413;
  return e21.wheel(0.26, 0.14, 0, 1.05).wheel(0.26, 0.14, -0.6, -0.75).wheel(0.26, 0.14, 0.6, -0.75), e21.box(1.3, 0.75, 1.9, n2, 0, 0.7, -0.2), e21.box(0.95, 0.65, 0.7, n2, 0, 0.65, 0.95), e21.box(1.2, 0.5, 1.6, Xu, 0, 1.3, -0.25), e21.box(0.9, 0.45, 0.08, Zu, 0, 1.25, 0.6), e21.box(1.34, 0.1, 2, t2 ? 1195898 : 1447446, 0, 1.6, -0.2), e21.box(0.2, 0.12, 0.06, 16773808, 0, 0.82, 1.31), {
    obj: e21.build(),
    len: 2.7,
    speed: Qu(4.5, 5.5),
    kind: `bajaj`
  };
}
function td() {
  let e21 = new Uu(), t2 = pickLang([6931442, 6931442, 14236218, 3120731]);
  for (let t3 of [-0.78, 0.78]) e21.wheel(0.3, 0.2, t3, 1.25).wheel(0.3, 0.2, t3, -1.25);
  return e21.box(1.7, 1.25, 4, t2, 0, 0.95, 0), e21.box(1.74, 0.12, 4.02, 16777215, 0, 0.72, 0), e21.box(1.72, 0.42, 2.6, Xu, 0, 1.28, -0.5), e21.box(1.5, 0.5, 0.08, Zu, 0, 1.22, 2), e21.box(0.08, 0.95, 0.95, 1053978, 0.84, 0.95, 0.6), e21.box(0.5, 0.16, 0.3, 16765503, 0, 1.66, 1.4), {
    obj: e21.build(),
    len: 4.2,
    speed: Qu(5, 6),
    kind: `angkot`
  };
}
function nd() {
  let e21 = new Uu(), [t2, n2] = pickLang([
    [16777215, 2060241],
    [15888413, 1914199],
    [15330543, 14034984]
  ]);
  for (let t3 of [-1.05, 1.05]) e21.wheel(0.45, 0.3, t3, 3.4).wheel(0.45, 0.3, t3, -3.2);
  return e21.box(2.4, 2.5, 10, t2, 0, 1.75, 0), e21.box(2.42, 0.5, 10.02, n2, 0, 0.9, 0), e21.box(2.42, 0.8, 8.6, Xu, 0, 2.2, -0.3), e21.box(2.1, 1, 0.08, Zu, 0, 2, 5), e21.box(1.6, 0.25, 0.08, 16765503, 0, 2.75, 5), {
    obj: e21.build(),
    len: 10.6,
    speed: Qu(5.5, 6.5),
    kind: `bus`
  };
}
function rd() {
  let e21 = new Uu(), t2 = pickLang([15909424, 14034984, 2855752]);
  for (let t3 of [-0.9, 0.9])
    e21.wheel(0.42, 0.28, t3, 2).wheel(0.42, 0.28, t3, -1.2).wheel(0.42, 0.28, t3, -2.1);
  return e21.box(2.1, 0.25, 6.2, 3355443, 0, 0.72, 0), e21.box(2, 1.5, 1.6, t2, 0, 1.55, 2.2), e21.box(1.8, 0.6, 0.08, Zu, 0, 1.85, 3), e21.box(2.1, 1.4, 4.2, pickLang([3112271, 9263659, 4157352]), 0, 1.55, -0.95), {
    obj: e21.build(),
    len: 6.4,
    speed: Qu(5, 6.5),
    kind: `truk`
  };
}
function id() {
  let e21 = Math.random() < 0.25, t2 = e21 ? VEHICLES.mpv : pickLang([VEHICLES.mpv, VEHICLES.mpv, VEHICLES.city]), n2 = new CarMesh(
    t2,
    e21 ? 5223400 : pickLang([14277081, 16777215, 2236962, 9080728, 8068638, 14277081])
  );
  n2.group.position.z = -n2.bodyCz;
  let r3 = new cn();
  if (r3.add(n2.group), e21) {
    let e22 = new Uu().box(0.5, 0.16, 0.22, 16765503, 0, 1.75, -0.2).build(false);
    r3.add(e22);
  }
  return {
    obj: r3,
    len: t2.length,
    speed: Qu(6.5, 8.5),
    kind: `mobil`,
    tick: (e22, t3) => {
      n2.v = e22, n2.animate(t3);
    }
  };
}
function ad() {
  let e21 = Math.random();
  return e21 < 0.4 ? id() : e21 < 0.64 ? ed() : e21 < 0.83 ? td() : e21 < 0.95 ? rd() : nd();
}
function od(e21, t2, n2, r3, i2, a2, o2) {
  let s2 = new Uu().box(e21, t2, n2, r3, 0, -t2 / 2, 0);
  i2 !== null && s2.box(e21 * 0.95, 0.12, n2 * 1.05, i2, 0, -t2 - 0.04, 0.02);
  let c2 = s2.build();
  return c2.position.set(a2, o2, 0), c2;
}
function crowdFigure(e21 = pickLang([`pria`, `pria`, `wanita`, `hijab`, `hijab`, `sd`, `peci`])) {
  let t2 = new Uu(), n2 = pickLang(Ku), r3 = pickLang(qu), i2 = pickLang(Ju);
  if (e21 === `sd` ? (r3 = 16777215, i2 = 12653087) : e21 === `hijab` ? i2 = r3 : e21 === `peci` && (r3 = pickLang([16777215, 15327944, 10146224]), i2 = pickLang([3824192, 6048314, 3095378])), t2.box(0.42, 0.6, 0.26, r3, 0, 1, 0), t2.box(0.27, 0.27, 0.25, n2, 0, 1.45, 0), e21 === `hijab`) {
    let e22 = pickLang([15910622, 10146224, 16777215, 4553629, 15320170, 7107965]);
    t2.box(0.36, 0.46, 0.34, e22, 0, 1.41, -0.03), t2.box(0.2, 0.2, 0.04, n2, 0, 1.46, 0.15);
  } else
    e21 === `peci` ? t2.box(0.29, 0.14, 0.27, 1118481, 0, 1.64, 0) : (t2.box(0.29, 0.1, 0.27, 1710618, 0, 1.62, 0), e21 === `wanita` && t2.box(0.29, 0.34, 0.08, 1710618, 0, 1.45, -0.15));
  if (e21 === `pikulan`) {
    t2.box(0.05, 0.05, 2, 9263659, 0.2, 1.33, 0);
    for (let e22 of [-0.9, 0.9])
      t2.box(0.02, 0.7, 0.02, 9263659, 0.2, 0.98, e22), t2.box(0.42, 0.3, 0.42, 13214247, 0.2, 0.53, e22);
    t2.cone(0.3, 0.16, 14271098, 0, 1.75, 0, 8);
  }
  let a2 = new cn();
  a2.add(t2.build());
  let o2 = pickLang([1710618, 3811866, 15921906]), s2 = [-1, 1].map((e22) => od(0.17, 0.62, 0.2, i2, o2, e22 * 0.11, 0.72)), c2 = [-1, 1].map((e22) => od(0.12, 0.5, 0.14, r3, n2, e22 * 0.28, 1.27));
  return a2.add(...s2, ...c2), a2.userData = {
    legs: s2,
    arms: c2
  }, a2.scale.setScalar(e21 === `sd` ? 0.85 : 1.15), a2;
}
function swayProp(e21, t2, n2 = 1) {
  let { legs: r3, arms: i2 } = e21.userData;
  if (!r3 || !i2) return;
  let a2 = Math.sin(t2) * n2;
  r3[0].rotation.x = a2 * 0.6, r3[1].rotation.x = -a2 * 0.6, i2[0].rotation.x = -a2 * 0.45, i2[1].rotation.x = a2 * 0.45;
}
var ld = 1.45;
function ud(e21) {
  let t2 = new Uu(), n2 = e21 ? 2067020 : 12653087;
  t2.cyl(0.42, 0.66, 2, n2, 0, 1, 0, 8), t2.box(0.72, 0.5, 0.7, e21 ? 16765503 : 1914199, 0, 1.55, 0), t2.box(1.7, 0.16, 0.2, n2, 0, 1.85, 0), t2.box(0.56, 0.6, 0.5, e21 ? 16119285 : 14034984, 0, 2.4, 0);
  for (let e22 of [-0.13, 0.13]) t2.box(0.1, 0.08, 0.03, 1118481, e22, 2.48, 0.26);
  return t2.box(0.2, 0.05, 0.03, e21 ? 14034984 : 1118481, 0, 2.25, 0.26), t2.box(0.64, 0.16, 0.58, 16765503, 0, 2.78, 0), [14034984, 16765503, 2855752, 16777215, 16743074, 16765503, 14034984].forEach((e22, n3) => {
    let r3 = n3 - 3;
    t2.box(0.05, 1, 0.05, e22, r3 * 0.13, 3.3, 0, 0, 0, -r3 * 0.2);
  }), t2.build();
}
function patrolTruck() {
  let e21 = new Uu(), t2 = 3029802;
  for (let t3 of [-0.85, 0.85]) e21.wheel(0.38, 0.26, t3, 1.45).wheel(0.38, 0.26, t3, -1.35);
  e21.box(1.9, 0.5, 5, t2, 0, 0.75, 0), e21.box(1.86, 0.85, 1.9, t2, 0, 1.4, 1.2), e21.box(1.7, 0.5, 0.06, Zu, 0, 1.55, 2.16), e21.box(1.88, 0.06, 0.06, 15921906, 0, 0.98, 0), e21.box(1.9, 0.4, 0.08, t2, 0, 1.2, -2.46).box(0.08, 0.4, 2.9, t2, -0.91, 1.2, -1).box(0.08, 0.4, 2.9, t2, 0.91, 1.2, -1), e21.box(0.5, 0.35, 2.4, 3815994, 0, 1.17, -1.1);
  for (let [t3, n3] of [
    [-0.45, -0.4],
    [0.45, -1.1],
    [-0.45, -1.8]
  ])
    e21.box(0.42, 0.6, 0.3, 10521173, t3, 1.62, n3).box(0.3, 0.3, 0.28, 13010498, t3, 2.07, n3).box(0.36, 0.1, 0.34, 2503455, t3, 2.26, n3);
  let n2 = new cn();
  n2.add(e21.build());
  for (let e22 of [-1, 1]) {
    let t3 = drawCanvasSign([`SATPOL PP`], 1.6, 0.36, `#2e3b2a`, `#ffd23f`);
    t3.position.set(e22 * 0.955, 0.78, 0), t3.rotation.y = e22 * Math.PI / 2, n2.add(t3);
  }
  let r3 = [15087942, 1863120].map((e22, t3) => {
    let r4 = new ei(
      new hi(0.62, 0.16, 0.3),
      new Hr({
        color: e22
      })
    );
    return r4.position.set(t3 ? 0.34 : -0.34, 1.92, 1.1), n2.add(r4), r4;
  }), i2 = 0;
  return {
    obj: n2,
    len: 5.2,
    speed: 6,
    kind: `truk`,
    tick: (e22, t3) => {
      i2 += t3;
      let n3 = Math.floor(i2 * 6) % 2;
      r3[0].visible = n3 === 0, r3[1].visible = n3 === 1;
    },
    lights: r3
  };
}
var fd = (e21, t2, n2) => Math.max(t2, Math.min(n2, e21));
var Crowd = class {
  constructor(e21) {
    this.parent = e21, this.list = [];
  }
  spawn(e21, t2 = {}) {
    let n2 = crowdFigure(t2.kind);
    n2.rotation.order = `YXZ`;
    let [r3, i2] = e21[0], a2 = {
      obj: n2,
      path: e21,
      i: 1,
      x: r3,
      z: i2,
      h: 0,
      v: 0,
      speed: t2.speed ?? 1.45 + Math.random() * 0.35,
      phase: Math.random() * 6,
      base: n2.scale.x,
      size: +(t2.appear === false),
      state: t2.appear === false ? `walk` : `appear`,
      vanishAtEnd: t2.vanishAtEnd ?? true,
      onArrive: t2.onArrive
    };
    return e21[1] && (a2.h = Math.atan2(e21[1][0] - r3, e21[1][1] - i2)), this.parent.add(n2), this.place(a2), this.list.push(a2), a2;
  }
  vanish(e21) {
    e21.state = `vanish`;
  }
  clear() {
    for (let e21 of this.list) this.remove(e21);
    this.list = [];
  }
  remove(e21) {
    e21.obj.removeFromParent(), disposeTree(e21.obj);
  }
  place(e21) {
    e21.obj.position.set(e21.x, e21.obj.position.y, e21.z), e21.obj.rotation.y = e21.h, e21.obj.scale.setScalar(Math.max(1e-3, e21.base * e21.size));
  }
  update(e21) {
    for (let t2 of this.list) {
      t2.state === `appear` ? (t2.size = Math.min(1, t2.size + e21 / 0.3), t2.size >= 1 && (t2.state = `walk`)) : t2.state === `vanish` && (t2.size = Math.max(0, t2.size - e21 / 0.3), t2.v = 0, t2.size <= 0 && (t2.state = `done`));
      let n2 = 0;
      if (t2.state === `walk` || t2.state === `appear`) {
        let r4 = t2.path[t2.i];
        if (!r4) t2.v = 0;
        else {
          let i2 = r4[0] - t2.x, a2 = r4[1] - t2.z, o2 = Math.hypot(i2, a2), s2 = t2.i === t2.path.length - 1, c2 = t2.state === `appear` ? 0 : t2.speed;
          if (s2 && (c2 = Math.min(c2, 0.4 + o2 * 2)), t2.v += fd(c2 - t2.v, -6 * e21, 3 * e21), o2 > 0.05) {
            let n3 = Math.atan2(Math.sin(Math.atan2(i2, a2) - t2.h), Math.cos(Math.atan2(i2, a2) - t2.h));
            t2.h += fd(n3, -8 * e21, 8 * e21);
          }
          n2 = Math.min(o2, t2.v * e21), o2 > 1e-3 && (t2.x += i2 / o2 * n2, t2.z += a2 / o2 * n2), o2 < 0.12 && (s2 ? (t2.i++, t2.onArrive?.(t2), t2.vanishAtEnd && t2.state === `walk` && (t2.state = `vanish`)) : t2.i++);
        }
      }
      t2.phase += n2 / ld * Math.PI * 2;
      let r3 = fd(t2.v / 0.8, 0, 1);
      swayProp(t2.obj, t2.phase, r3), t2.obj.position.y = Math.abs(Math.sin(t2.phase)) * 0.035 * r3, this.place(t2);
    }
    for (let e22 of this.list) e22.state === `done` && this.remove(e22);
    this.list = this.list.filter((e22) => e22.state !== `done`);
  }
};
var md = (e21) => Math.atan2(Math.sin(e21), Math.cos(e21));
var AStarPlanner = class e19 {
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
  constructor(t2, n2, r3) {
    this.grid = new Uint8Array(e19.W * e19.H);
    let { X0: i2, Z0: a2, CELL: o2, W: s2, H: c2 } = e19;
    for (let e21 = 0; e21 < c2; e21++)
      for (let t3 = 0; t3 < s2; t3++)
        r3(i2 + (t3 + 0.5) * o2, a2 + (e21 + 0.5) * o2) && (this.grid[e21 * s2 + t3] = 1);
    for (let e21 of t2) {
      let t3 = Math.cos(e21.rot), r4 = Math.sin(e21.rot), l2 = e21.hx + n2, u2 = e21.hz + n2, d2 = Math.abs(t3) * l2 + Math.abs(r4) * u2, f2 = Math.abs(r4) * l2 + Math.abs(t3) * u2, p2 = Math.max(0, Math.floor((e21.x - d2 - i2) / o2)), m2 = Math.min(s2 - 1, Math.floor((e21.x + d2 - i2) / o2)), h2 = Math.max(0, Math.floor((e21.z - f2 - a2) / o2)), g2 = Math.min(c2 - 1, Math.floor((e21.z + f2 - a2) / o2));
      for (let n3 = h2; n3 <= g2; n3++) {
        let c3 = a2 + (n3 + 0.5) * o2 - e21.z;
        for (let a3 = p2; a3 <= m2; a3++) {
          let d3 = i2 + (a3 + 0.5) * o2 - e21.x;
          Math.abs(d3 * t3 - c3 * r4) <= l2 && Math.abs(d3 * r4 + c3 * t3) <= u2 && (this.grid[n3 * s2 + a3] = 1);
        }
      }
    }
  }
  blocked(t2, n2) {
    let r3 = Math.floor((t2 - e19.X0) / e19.CELL), i2 = Math.floor((n2 - e19.Z0) / e19.CELL);
    return r3 < 0 || i2 < 0 || r3 >= e19.W || i2 >= e19.H || this.grid[i2 * e19.W + r3] === 1;
  }
};
function obstacleRects(e21) {
  let t2 = [];
  for (let n2 of e21.rects) {
    let e22 = Math.max(2, Math.ceil(n2.hz * 2 / 0.3)), r3 = Math.max(2, Math.ceil(n2.hx * 2 / 0.3));
    for (let r4 = 0; r4 <= e22; r4++) {
      let i2 = n2.cz - n2.hz + 2 * n2.hz * r4 / e22;
      t2.push([-n2.hx, i2], [n2.hx, i2]);
    }
    for (let e23 = 1; e23 < r3; e23++) {
      let i2 = -n2.hx + 2 * n2.hx * e23 / r3;
      t2.push([i2, n2.cz - n2.hz], [i2, n2.cz + n2.hz]);
    }
  }
  return t2;
}
function isBlocked(e21, t2, n2, r3, i2) {
  let a2 = Math.sin(i2), o2 = Math.cos(i2);
  for (let [i3, s2] of t2) if (e21.blocked(n2 + a2 * s2 + o2 * i3, r3 + o2 * s2 - a2 * i3)) return false;
  return true;
}
var vd = class {
  constructor() {
    this.a = [];
  }
  get size() {
    return this.a.length;
  }
  push(e21) {
    let t2 = this.a;
    t2.push(e21);
    let n2 = t2.length - 1;
    for (; n2 > 0; ) {
      let e22 = n2 - 1 >> 1;
      if (t2[e22].f <= t2[n2].f) break;
      [t2[e22], t2[n2]] = [t2[n2], t2[e22]], n2 = e22;
    }
  }
  pop() {
    let e21 = this.a, t2 = e21[0], n2 = e21.pop();
    if (e21.length) {
      e21[0] = n2;
      let t3 = 0;
      for (; ; ) {
        let n3 = t3 * 2 + 1, r3 = n3 + 1, i2 = t3;
        if (n3 < e21.length && e21[n3].f < e21[i2].f && (i2 = n3), r3 < e21.length && e21[r3].f < e21[i2].f && (i2 = r3), i2 === t3)
          break;
        [e21[i2], e21[t3]] = [e21[t3], e21[i2]], t3 = i2;
      }
    }
    return t2;
  }
};
var yd = 0.2;
var bd = 3;
var xd = [-0.58, -0.29, 0, 0.29, 0.58];
var Sd = 36;
function* astarSearch(e21, t2, n2, r3, i2 = 4e4) {
  let a2 = obstacleRects(n2), o2 = n2.wheelbase, s2 = /* @__PURE__ */ new Map(), c2 = (e22, t3, n3) => {
    let r4 = Math.round((e22 - AStarPlanner.X0) / 0.3), i3 = Math.round((t3 - AStarPlanner.Z0) / 0.3), a3 = (Math.round(n3 / (2 * Math.PI / Sd)) % Sd + Sd) % Sd;
    return (r4 * 200 + i3) * Sd + a3;
  }, l2 = (e22, n3, r4) => 1.4 * (Math.hypot(t2.x - e22, t2.z - n3) + 1.2 * Math.abs(md(t2.h - r4))), u2 = (e22) => Math.abs(e22.x - t2.x) < 0.45 && Math.abs(e22.z - t2.z) < 0.7 && Math.abs(md(e22.h - t2.h)) < 0.18, d2 = !isBlocked(r3, a2, e21.x, e21.z, e21.h), f2 = (t3, n3) => d2 && Math.hypot(t3 - e21.x, n3 - e21.z) < 1.1, p2 = new vd();
  p2.push({
    ...e21,
    g: 0,
    f: l2(e21.x, e21.z, e21.h),
    dir: 1,
    steer: 0,
    parent: null
  });
  let m2 = 0;
  for (; p2.size && m2 < i2; ) {
    let e22 = p2.pop(), t3 = c2(e22.x, e22.z, e22.h), n3 = s2.get(t3);
    if (!(n3 !== void 0 && n3 <= e22.g)) {
      if (s2.set(t3, e22.g), m2++, u2(e22)) return wd(e22, o2);
      m2 % 400 == 0 && (yield);
      for (let t4 of [1, -1])
        for (let n4 of xd) {
          let { x: i3, z: u3, h: d3 } = e22, m3 = true, h2 = Math.tan(n4) / o2;
          for (let e23 = 0; e23 < bd; e23++)
            if (d3 += t4 * yd * h2, i3 += t4 * yd * Math.sin(d3), u3 += t4 * yd * Math.cos(d3), !f2(i3, u3) && !isBlocked(r3, a2, i3, u3, d3)) {
              m3 = false;
              break;
            }
          if (!m3) continue;
          let g2 = yd * bd, _2 = e22.g + g2 * (t4 < 0 ? 1.8 : 1) + Math.abs(n4 - e22.steer) * 0.4 + Math.abs(n4) * 0.05;
          e22.parent && t4 !== e22.dir && (_2 += 4);
          let v2 = c2(i3, u3, d3), y2 = s2.get(v2);
          y2 !== void 0 && y2 <= _2 || p2.push({
            x: i3,
            z: u3,
            h: d3,
            g: _2,
            f: _2 + l2(i3, u3, d3),
            dir: t4,
            steer: n4,
            parent: e22
          });
        }
    }
  }
  return null;
}
function wd(e21, t2) {
  let n2 = [];
  for (let t3 = e21; t3; t3 = t3.parent) n2.push(t3);
  n2.reverse();
  let r3 = [
    {
      x: n2[0].x,
      z: n2[0].z,
      h: n2[0].h,
      dir: n2[1]?.dir ?? 1,
      steer: 0
    }
  ];
  for (let e22 = 1; e22 < n2.length; e22++) {
    let i2 = n2[e22 - 1], a2 = n2[e22], { x: o2, z: s2, h: c2 } = i2, l2 = Math.tan(a2.steer) / t2;
    for (let e23 = 0; e23 < bd; e23++)
      c2 += a2.dir * yd * l2, o2 += a2.dir * yd * Math.sin(c2), s2 += a2.dir * yd * Math.cos(c2), r3.push({
        x: o2,
        z: s2,
        h: c2,
        dir: a2.dir,
        steer: a2.steer
      });
  }
  return r3;
}
function Td(e21, t2) {
  let n2 = e21[e21.length - 1], r3 = Math.max(0, Math.round(t2 / yd));
  for (let t3 = 1; t3 <= r3; t3++)
    e21.push({
      x: n2.x + Math.sin(n2.h) * yd * t3,
      z: n2.z + Math.cos(n2.h) * yd * t3,
      h: n2.h,
      dir: 1,
      steer: 0
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
function captureFrame(e21) {
  let t2 = Math.min(1, Dd * 1.4 / e21.width), n2 = document.createElement(`canvas`);
  return n2.width = Math.max(1, Math.round(e21.width * t2)), n2.height = Math.max(1, Math.round(e21.height * t2)), n2.getContext(`2d`).drawImage(e21, 0, 0, n2.width, n2.height), n2;
}
function Ld(e21, t2, n2, r3, i2, a2) {
  let o2 = r3;
  do
    e21.font = `${n2} ${o2}px ${i2}`, o2 -= 2;
  while (o2 > 12 && e21.measureText(t2).width > a2);
}
function Rd(e21, t2, n2, r3) {
  let i2 = [], a2 = ``;
  for (let r4 of t2.split(` `)) {
    let t3 = a2 ? `${a2} ${r4}` : r4;
    e21.measureText(t3).width <= n2 || !a2 ? a2 = t3 : (i2.push(a2), a2 = r4);
  }
  return a2 && i2.push(a2), i2.length > r3 && (i2.length = r3, i2[r3 - 1] += `\u2026`), i2;
}
function zd(e21, t2, n2, r3, i2) {
  e21.save(), e21.strokeStyle = i2, e21.lineWidth = 4, e21.setLineDash([16, 12]), e21.beginPath(), e21.moveTo(t2, r3), e21.lineTo(n2, r3), e21.stroke(), e21.restore();
}
function drawWorldLabels(e21, t2, n2) {
  let r3 = document.createElement(`canvas`);
  r3.width = Dd, r3.height = Od;
  let i2 = r3.getContext(`2d`), a2 = !!e21.busted;
  if (i2.fillStyle = Ad, i2.fillRect(0, 0, Dd, Od), t2) {
    let e22 = Math.max(Dd / t2.width, kd / t2.height), n3 = Dd / e22, r4 = kd / e22;
    i2.drawImage(t2, (t2.width - n3) / 2, (t2.height - r4) / 2, n3, r4, 0, 0, Dd, kd);
  } else i2.fillStyle = `#bfb59e`, i2.fillRect(0, 0, Dd, kd);
  let o2 = i2.createLinearGradient(0, 450, 0, kd);
  o2.addColorStop(0, `rgba(28,30,34,0)`), o2.addColorStop(1, `rgba(28,30,34,0.85)`), i2.fillStyle = o2, i2.fillRect(0, 450, Dd, 160), i2.font = `900 46px ${Fd}`;
  let s2 = `TUKANG PARKIR`, c2 = i2.measureText(s2).width;
  i2.fillStyle = Ad, i2.beginPath(), i2.roundRect(48, 44, 92 + c2 + 36, 84, 20), i2.fill(), i2.fillStyle = `#1c5fd0`, i2.beginPath(), i2.roundRect(62, 58, 56, 56, 12), i2.fill(), i2.fillStyle = `#fff`, i2.textAlign = `center`, i2.textBaseline = `middle`, i2.font = `900 40px ${Fd}`, i2.fillText(`P`, 90, 88), i2.fillStyle = Md, i2.textAlign = `left`, i2.font = `900 46px ${Fd}`, i2.fillText(s2, 140, 88), i2.save(), i2.shadowColor = `rgba(0,0,0,0.45)`, i2.shadowBlur = 40, i2.shadowOffsetY = 14, i2.fillStyle = jd, i2.beginPath(), i2.roundRect(70, 540, 940, 720, 14), i2.fill(), i2.restore(), i2.save(), i2.beginPath(), i2.roundRect(70, 540, 940, 720, 14), i2.clip(), i2.fillStyle = a2 ? `#3b4a33` : Md, i2.fillRect(70, 540, 940, 118), i2.restore(), zd(i2, 70, 1010, 658, Ad);
  let l2 = Dd / 2;
  i2.textAlign = `center`, i2.textBaseline = `alphabetic`, i2.fillStyle = a2 ? `#fff` : Ad, i2.font = `800 42px ${Pd}`, i2.letterSpacing = `8px`, i2.fillText(trApp(`r.head`), 544, 600), i2.letterSpacing = `0px`, i2.font = `600 26px ${Pd}`, i2.fillText(trApp(a2 ? `r.busted` : `r.title`), l2, 638);
  let u2 = 766;
  if (i2.fillStyle = e21.money < 0 ? Nd : Ad, Ld(i2, formatMoney(e21.money), 900, 92, Pd, 860), i2.fillText(formatMoney(e21.money), l2, u2), a2 && e21.money > 0) {
    let t3 = i2.measureText(formatMoney(e21.money)).width;
    i2.strokeStyle = Nd, i2.lineWidth = 8, i2.beginPath(), i2.moveTo(l2 - t3 / 2 - 10, u2 - 30), i2.lineTo(l2 + t3 / 2 + 10, u2 - 30), i2.stroke();
  }
  if (a2) {
    i2.save(), i2.font = `900 34px ${Pd}`;
    let e22 = trApp(`r.busted`).toUpperCase(), t3 = i2.measureText(e22).width + 40;
    i2.translate(1010 - t3 / 2 + 20, 534), i2.rotate(-0.1), i2.fillStyle = jd, i2.fillRect(-t3 / 2, -36, t3, 60), i2.strokeStyle = Nd, i2.lineWidth = 7, i2.strokeRect(-t3 / 2, -36, t3, 60), i2.fillStyle = Nd, i2.fillText(e22, 0, 7), i2.restore();
  }
  u2 += 58, i2.fillStyle = Ad, i2.font = `700 30px ${Pd}`;
  for (let t3 of Rd(i2, e21.busted ?? e21.rank, 850, 2)) i2.fillText(t3, l2, u2), u2 += 40;
  e21.emoji && (u2 += 14, Ld(i2, e21.emoji, 400, 46, Fd, 860), i2.fillText(e21.emoji, l2, u2), u2 += 20), u2 += 24, zd(i2, 110, 970, u2, `rgba(0,0,0,0.3)`);
  let d2 = [
    [trApp(`r.cars`), String(e21.cars)],
    [trApp(`r.paidCars`), String(e21.paidCars)],
    [trApp(`r.paidBikes`), String(e21.paidBikes)],
    [trApp(`r.unpaid`), String(e21.unpaid)],
    [trApp(`r.scratch`), String(e21.scratches)]
  ], f2 = 1220 - (u2 + 20), p2 = Math.min(50, f2 / d2.length);
  u2 += 20 + p2 * 0.72;
  for (let [e22, t3] of d2)
    i2.textAlign = `left`, i2.font = `500 ${Math.round(p2 * 0.56)}px ${Pd}`, i2.fillText(e22, 126, u2), i2.textAlign = `right`, i2.font = `800 ${Math.round(p2 * 0.56)}px ${Pd}`, i2.fillText(t3, 954, u2), u2 += p2;
  return i2.textAlign = `center`, i2.fillStyle = Md, i2.font = `800 34px ${Fd}`, i2.fillText(n2, l2, 1314), r3;
}
function Vd(e21) {
  return new Promise((t2) => e21.toBlob(t2, `image/png`));
}
var Hd = (e21, t2, n2, r3, i2, a2, o2) => {
  let s2 = new ei(
    new hi(e21, t2, n2),
    new qa({
      color: r3
    })
  );
  return s2.position.set(i2, a2, o2), s2.castShadow = true, s2;
};
var Ud = 0.42;
var Wd = 3.2;
var Gd = (e21, t2, n2, r3 = 0) => {
  let i2 = Math.cos(e21.rot), a2 = Math.sin(e21.rot), o2 = t2 - e21.x, s2 = n2 - e21.z;
  return Math.abs(o2 * i2 - s2 * a2) < e21.hx + r3 && Math.abs(o2 * a2 + s2 * i2) < e21.hz + r3;
};
var Kd = 3.4;
var qd = 1.9;
var Jd = 3.8;
var Yd = class {
  constructor() {
    this.group = new cn(), this.arms = [], this.legs = [], this.t = 0, this.vx = 0, this.vz = 0, this.stride = 0, this.facing = 0, this.pick = ``, this.crouched = false;
    let e21 = this.group;
    e21.add(Hd(0.56, 0.7, 0.32, 16742912, 0, 1.1, 0)), e21.add(Hd(0.58, 0.1, 0.34, 16248914, 0, 1.05, 0)), e21.add(Hd(0.34, 0.34, 0.32, 13010498, 0, 1.64, 0)), e21.add(Hd(0.38, 0.12, 0.36, 1920649, 0, 1.86, 0), Hd(0.3, 0.05, 0.2, 1920649, 0, 1.82, 0.25));
    for (let t2 of [-1, 1]) {
      let n2 = new cn();
      n2.position.set(t2 * 0.14, 0.76, 0), n2.add(
        Hd(0.2, 0.68, 0.24, 3095378, 0, -0.34, 0),
        Hd(0.21, 0.1, 0.32, 1710618, 0, -0.71, 0.04)
      ), e21.add(n2), this.legs.push(n2);
      let r3 = new cn();
      r3.position.set(t2 * 0.37, 1.4, 0), r3.add(Hd(0.16, 0.62, 0.16, 16742912, 0, -0.28, 0)), r3.add(Hd(0.15, 0.14, 0.15, 13010498, 0, -0.64, 0)), e21.add(r3), this.arms.push(r3);
    }
    e21.scale.setScalar(1.3), e21.rotation.order = `YXZ`;
  }
  place(e21) {
    this.pick = ``;
    let [t2, n2] = this.spot(e21, -1);
    this.group.position.set(t2, 0, n2), this.vx = this.vz = 0;
  }
  spot(e21, t2, n2 = `idle`, r3 = [], i2 = null) {
    let a2 = t2 < 0 ? -1 : 1, o2 = this.sweep(e21, a2, e21.steer), s2 = n2 === `kiri` ? STEER_RATE : n2 === `kanan` ? -STEER_RATE : null;
    s2 !== null && Math.abs(s2 - e21.steer) > 0.1 && o2.push(...this.sweep(e21, a2, s2));
    let c2 = e21.obbs(), l2 = r3.filter((e22) => !c2.some((t3) => t3.x === e22.x && t3.z === e22.z && t3.rot === e22.rot)), u2 = Math.sin(e21.heading), d2 = Math.cos(e21.heading), [f2, p2] = e21.bodyCenter(), m2 = e21.def.length / 2 + (a2 < 0 ? e21.def.cargo?.overhang ?? 0 : 0), h2 = e21.def.length / 2 + (a2 > 0 ? e21.def.cargo?.overhang ?? 0 : 0), g2 = e21.def.width / 2, _2 = this.group.position, v2 = Math.sign((_2.x - f2) * d2 - (_2.z - p2) * u2) || 1, y2 = Math.abs((_2.x - f2) * u2 + (_2.z - p2) * d2) > e21.def.length / 2 + 0.4 ? 0.3 : 1, b2 = i2 && {
      x0: i2.x - AREA.bayW / 2 - 0.4,
      x1: i2.x + AREA.bayW / 2 + 0.4,
      z0: i2.z - AREA.bayD / 2 - 0.4,
      z1: -AREA.laneHalf + Kd
    }, x2 = [f2, p2], S2 = 1 / 0, C2 = ``, w2 = (t3, n3, r4, i3) => {
      let s3 = f2 + u2 * n3 * a2 + d2 * r4, c3 = p2 + d2 * n3 * a2 - u2 * r4, m3 = Math.max(AREA.minX + 0.6, Math.min(AREA.maxX - 0.6, s3)), h3 = Math.max(AREA.minZ + 0.6, Math.min(AREA.maxZ + 1.6, c3)), g3 = i3, v3 = 0;
      for (let e22 of o2) Gd(e22, m3, h3) && v3++;
      v3 && (g3 += 12 + v3 * 3);
      for (let e22 of l2) Gd(e22, m3, h3, Ud) && (g3 += 8);
      b2 && m3 > b2.x0 && m3 < b2.x1 && h3 > b2.z0 && h3 < b2.z1 && (m3 - f2) * u2 * a2 + (h3 - p2) * d2 * a2 > -e21.def.length / 2 && (g3 += 10), g3 += Math.hypot(m3 - s3, h3 - c3) * 2, g3 += Math.abs(h3) * 0.35, g3 += Math.hypot(m3 - _2.x, h3 - _2.z) * 0.12, this.pick && t3 !== this.pick && (g3 += this.pick.split(`:`)[0] === t3.split(`:`)[0] ? 0.5 : 1.5), g3 < S2 && (S2 = g3, x2 = [m3, h3], C2 = t3);
    };
    for (let e22 of [1, -1])
      for (let [t3, n3] of [m2 + 0.5, m2 - 0.6, m2 + 1.4, 0].entries())
        for (let [r4, i3] of [1.2, 2, 2.9].entries())
          w2(`${e22}:${t3}:${r4}`, n3, e22 * (g2 + i3), t3 * 0.6 + r4 * 0.8 + (e22 === v2 ? 0 : y2));
    for (let [e22, t3] of [0, 1, -1].entries()) w2(`0:${e22}`, -(h2 + 1.3), t3, 4 + e22 * 0.3);
    return this.pick = C2, x2;
  }
  sweep(e21, t2, n2) {
    let r3 = e21.obbsAt(e21.x, e21.z, e21.heading, 0.62), i2 = e21.x, a2 = e21.z, o2 = e21.heading, s2 = 0.35 * t2;
    for (let t3 = 0; t3 < Wd; t3 += 0.35)
      o2 += s2 / e21.def.wheelbase * Math.tan(n2), i2 += s2 * Math.sin(o2), a2 += s2 * Math.cos(o2), r3.push(...e21.obbsAt(i2, a2, o2, 0.62));
    return r3;
  }
  waypoint(e21, t2) {
    let n2 = this.group.position, r3 = (e22) => e22 < 5.6;
    if (r3(n2.z) === r3(t2)) return [e21, t2];
    let i2 = [-7.35, 2, 7.6], a2 = (t3) => Math.abs(n2.x - t3) + Math.abs(t3 - e21), o2 = i2.reduce((e22, t3) => a2(t3) < a2(e22) ? t3 : e22), s2 = r3(n2.z) ? 3.9 : 7.3, c2 = r3(n2.z) ? 7.3 : 3.9;
    return Math.abs(n2.x - o2) > 0.35 ? [o2, n2.z > 4.2 && n2.z < 7 ? n2.z : s2] : [o2, c2];
  }
  update(e21, t2, n2, r3, i2 = [], a2 = null, o2 = null) {
    this.t += e21;
    let s2 = this.group, c2 = s2.position, l2 = 0, u2 = 0;
    if (t2 || a2) {
      let [e22, s3] = this.waypoint(...a2 ?? this.spot(t2, n2, r3, i2, o2)), d3 = e22 - c2.x, f3 = s3 - c2.z, p3 = Math.hypot(d3, f3);
      if (p3 > 0.12) {
        let e23 = Math.min(a2 ? Jd * 1.5 : p3 > 3.5 ? Jd : qd, p3 * 2.5);
        l2 = d3 / p3 * e23, u2 = f3 / p3 * e23;
      }
    }
    let d2 = l2 - this.vx, f2 = u2 - this.vz, p2 = Math.hypot(d2, f2), m2 = 9 * e21, h2 = p2 > m2 ? m2 / p2 : 1;
    this.vx += d2 * h2, this.vz += f2 * h2;
    let g2 = c2.x, _2 = c2.z;
    c2.x += this.vx * e21, c2.z += this.vz * e21;
    let v2 = Math.hypot(c2.x - g2, c2.z - _2), y2 = v2 / Math.max(e21, 1e-3), b2 = this.facing;
    if (y2 > 0.6) b2 = Math.atan2(c2.x - g2, c2.z - _2);
    else if (a2) b2 = -Math.PI / 2;
    else if (t2) {
      let [e22, n3] = t2.bodyCenter();
      b2 = Math.atan2(e22 - c2.x, n3 - c2.z);
    }
    let x2 = b2 - this.facing;
    x2 = Math.atan2(Math.sin(x2), Math.cos(x2)), this.facing += Math.max(-9 * e21, Math.min(9 * e21, x2)), s2.rotation.y = this.facing;
    let S2 = 1.3 * (this.crouched && y2 < 1 ? 0.62 : 1);
    s2.scale.y += (S2 - s2.scale.y) * Math.min(1, e21 * 10), this.stride += v2 / (ld * 1.15) * Math.PI * 2;
    let C2 = Math.min(1, y2 / 1.2), w2 = Math.sin(this.stride) * C2, T2 = y2 > 2.6 ? 0.85 : 0.6;
    this.legs[0].rotation.x = w2 * T2, this.legs[1].rotation.x = -w2 * T2, c2.y = Math.abs(Math.sin(this.stride)) * (y2 > 2.6 ? 0.09 : 0.04) * C2, s2.rotation.x = y2 > 2.6 ? 0.12 : 0;
    let [E2, D2] = this.arms, O2 = Math.sin(this.t * 12), k2 = -w2 * 0.5, A2 = 0, ee2 = w2 * 0.5, j2 = 0;
    r3 === `terus` ? k2 = ee2 = -1.9 + O2 * 0.5 : r3 === `stop` ? (k2 = ee2 = 0, A2 = -2.9, j2 = 2.9) : r3 === `kiri` ? j2 = 1.6 + O2 * 0.35 : r3 === `kanan` && (A2 = -1.6 - O2 * 0.35);
    let te2 = Math.min(1, e21 * 18);
    E2.rotation.x += (k2 - E2.rotation.x) * te2, E2.rotation.z += (A2 - E2.rotation.z) * te2, D2.rotation.x += (ee2 - D2.rotation.x) * te2, D2.rotation.z += (j2 - D2.rotation.z) * te2;
  }
  head() {
    return [this.group.position.x, 2.9, this.group.position.z];
  }
};
var Xd = {
  clean: `\u2705`,
  lecet: `\u{1F7E8}`,
  angry: `\u{1F4A5}`
};
var Zd = {
  terus: `Terus, terus!`,
  kiri: `Kiri, kiri!`,
  kanan: `Kanan, kanan!`,
  stop: `STOP! STOP!`
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
  [3.1, 1, 7.1]
];
var cf = [
  [[-3.6, 7.75]],
  [[0, 7.7]],
  [[2.3, 7.75]],
  [[4.6, 7.7]],
  [[-12.4, 7.9]],
  [
    [-1, 9.6],
    [-26, 9.6]
  ],
  [
    [3, 9.6],
    [26, 9.6]
  ]
];
var lf = cf.slice(0, 5);
var uf = [-7.35, 2, 7.6];
function pathLength(e21, t2, n2) {
  let r3 = n2[0], i2 = (t3) => Math.abs(e21[0] - t3) + Math.abs(t3 - r3[0]), a2 = uf.reduce((e22, t3) => i2(t3) < i2(e22) ? t3 : e22), o2 = [e21];
  return t2 && o2.push([e21[0], -3.3]), o2.push([a2, 3.9], [a2, 7.3], ...n2), o2;
}
var ff = (e21) => Math.atan2(Math.sin(e21), Math.cos(e21));
var randRange = (e21, t2) => e21 + Math.random() * (t2 - e21);
function rank(e21) {
  return e21 < 0 ? `rank.0` : e21 < 8e3 ? `rank.1` : e21 < 16e3 ? `rank.2` : e21 < 24e3 ? `rank.3` : e21 < 32e3 ? `rank.4` : `rank.5`;
}
var HIDING_SPOT = [5.7, 7.35];
var gf = 1.5;
var _f = 3;
var vf = 7;
var yf = -34;
var bf = 5;
var xf = 10;
function polylineSamples(e21, t2) {
  let n2 = [], r3 = (e22, t3, r4, i3) => {
    let a3 = Math.max(1, Math.round(Math.hypot(r4 - e22, i3 - t3) / $d));
    for (let o2 = 0; o2 < a3; o2++) n2.push(e22 + (r4 - e22) * o2 / a3, t3 + (i3 - t3) * o2 / a3);
  }, [i2, a2] = e21[0];
  for (let o2 = 1; o2 < e21.length; o2++) {
    let [s2, c2] = e21[o2], l2 = e21[o2 + 1], u2 = Math.hypot(s2 - i2, c2 - a2), d2 = (s2 - i2) / u2, f2 = (c2 - a2) / u2;
    if (!l2) {
      r3(i2, a2, s2, c2), n2.push(s2, c2);
      break;
    }
    let p2 = Math.hypot(l2[0] - s2, l2[1] - c2), m2 = (l2[0] - s2) / p2, h2 = (l2[1] - c2) / p2;
    if (Math.abs(d2 * m2 + f2 * h2) > 0.25) {
      r3(i2, a2, s2, c2), i2 = s2, a2 = c2;
      continue;
    }
    let g2 = Math.min(t2, u2, p2), _2 = s2 - d2 * g2, v2 = c2 - f2 * g2;
    r3(i2, a2, _2, v2);
    let y2 = _2 + m2 * g2, b2 = v2 + h2 * g2, x2 = Math.max(2, Math.round(g2 * Math.PI / 2 / $d));
    for (let e22 = 0; e22 < x2; e22++) {
      let t3 = Math.PI / 2 * e22 / x2;
      n2.push(
        y2 + g2 * (-m2 * Math.cos(t3) + d2 * Math.sin(t3)),
        b2 + g2 * (-h2 * Math.cos(t3) + f2 * Math.sin(t3))
      );
    }
    i2 = s2 + m2 * g2, a2 = c2 + h2 * g2;
  }
  return n2;
}
var jf = 11817770;
var Mf = 10251071;
var Nf = 3882308;
var Pf = 11183772;
function Ff(e21, t2, n2, r3, i2, a2, o2) {
  let s2 = new ei(
    new Pa(t2, n2),
    new qa({
      color: r3
    })
  );
  s2.rotation.x = -Math.PI / 2, s2.position.set(i2, o2, a2), s2.receiveShadow = true, e21.add(s2);
}
function buildWorldMeshes(e21) {
  let { minX: t2, maxX: n2, minZ: r3, maxZ: i2, openX: a2, openHalf: o2 } = AREA, s2 = STREET, c2 = new Uu(), l2 = (t3, n3, r4, i3, a3 = 0) => {
    t3.position.set(n3, r4, i3), t3.rotation.y = a3, e21.add(t3);
  };
  Ff(e21, 160, 110, 12563870, 0, 5, -0.03), Ff(e21, 160, s2.roadZ1 - s2.roadZ0, Nf, 0, (s2.roadZ0 + s2.roadZ1) / 2, 0), Ff(e21, 160, s2.roadZ0 - s2.walkZ0, Pf, 0, (s2.roadZ0 + s2.walkZ0) / 2, -5e-3), Ff(e21, 160, s2.farWalkZ1 - s2.roadZ1, Pf, 0, (s2.farWalkZ1 + s2.roadZ1) / 2, -5e-3);
  for (let t3 of [-1, 1]) Ff(e21, o2 * 2, s2.roadZ0 - i2, 4869719, t3 * a2, (s2.roadZ0 + i2) / 2, 4e-3);
  c2.at();
  let u2 = (s2.roadZ0 + s2.roadZ1) / 2;
  for (let e22 = -70; e22 <= 70; e22 += 5) c2.box(2.4, 0.02, 0.14, 15921906, e22, 0.01, u2);
  for (let e22 = -70; e22 < 70; e22++) {
    let t3 = e22 % 2 == 0 ? 2236962 : 15921906;
    c2.box(1, 0.16, 0.3, t3, e22 + 0.5, 0.08, s2.roadZ1 + 0.15), Math.abs(Math.abs(e22 + 0.5) - a2) > o2 + 0.3 && c2.box(1, 0.16, 0.3, t3, e22 + 0.5, 0.08, s2.roadZ0 - 0.15);
  }
  for (let e22 of [-1, 1]) {
    let t3 = e22 < 0 ? -1 : 1, n3 = e22 * a2;
    c2.box(0.28, 0.02, 1.3, 15921906, n3, 0.012, 9 - t3 * 0.25), c2.box(0.95, 0.02, 0.28, 15921906, n3 - 0.3, 0.012, 9 + t3 * 0.25, 0, t3 * -Math.PI / 4), c2.box(0.95, 0.02, 0.28, 15921906, n3 + 0.3, 0.012, 9 + t3 * 0.25, 0, t3 * Math.PI / 4);
    let r4 = drawCanvasSign([e22 < 0 ? `MASUK` : `KELUAR`], 2.4, 0.6, `#4a4e57`, `#f2f2f2`);
    r4.rotation.x = -Math.PI / 2, l2(r4, n3, 0.013, 7.65);
  }
  for (let e22 = -70; e22 < 70; e22 += 4)
    c2.box(3.9, 0.8, 0.25, e22 % 8 == 0 ? 15326403 : 14272936, e22 + 2, 0.4, s2.farWalkZ1 + 0.3);
  let d2 = r3 - 1.1, f2 = (e22, t3, n3, r4, i3) => {
    if (c2.at(e22, 0, d2), c2.box(t3 - 0.15, n3, 6, r4, 0, n3 / 2, -3), i3 === `genteng`)
      c2.roof(t3 + 0.4, 6.8, 1.5, jf, 0, n3, -3);
    else if (i3 === `flat`)
      c2.box(t3, 0.25, 6.2, 14209732, 0, n3 + 0.12, -3), c2.box(1.2, 0.7, 1.2, 9080728, t3 / 4, n3 + 0.6, -3.6), c2.cyl(0.55, 0.55, 1, 15888413, t3 / 4, n3 + 1.45, -3.6, 10), c2.cyl(0.2, 0.5, 0.2, 15888413, t3 / 4, n3 + 2.05, -3.6, 10);
    else {
      c2.roof(t3 + 0.4, 6.6, 1.4, 3877408, 0, n3, -3);
      for (let e23 of [-1, 1])
        c2.cone(0.5, 3, 3877408, e23 * (t3 / 2 - 0.5), n3 + 1.5, -1.2, 6, 0, -e23 * 0.5), c2.cone(0.4, 2.2, 3877408, e23 * (t3 / 2 - 1.6), n3 + 1.6, -1.2, 6, 0, -e23 * 0.35);
    }
  }, p2 = (e22, t3, n3, r4, i3, a3, o3, s3 = {}) => l2(drawCanvasSign(e22, r4, i3, a3, o3, s3), t3, n3, d2 + 0.08), m2 = (e22, t3) => c2.box(e22, 0.08, 1.2, t3, 0, 2.38, 0.55, 0.16);
  f2(-9.6, 4.8, 3.3, 15986918, `genteng`), c2.box(4.6, 1.1, 0.1, 2785236, 0, 0.55, 0.05).box(2.2, 1, 0.5, 12575733, -0.7, 1.6, 0.3).box(1, 2.1, 0.1, 3811866, 1.5, 1.05, 0.07), m2(4.2, 2785236), p2([`WARTEG BU SITI`], -9.6, 2.85, 4.2, 0.7, `#1f6fd1`, `#ffffff`), f2(-4.8, 4.8, 3.7, 16777215, `flat`), c2.box(4.1, 2.3, 0.1, 10474495, 0, 1.2, 0.06).box(0.08, 2.3, 0.12, 15921906, 0, 1.2, 0.08);
  for (let e22 = 0; e22 < 4; e22++)
    c2.cyl(0.18, 0.18, 0.36, 8046915, 1.4 + e22 % 2 * 0.4, 0.18 + Math.floor(e22 / 2) * 0.36, 0.5, 8);
  p2([`AKALMART`], -4.8, 3.05, 4.5, 0.95, `#d62828`, `#ffffff`, {
    stripes: [`#ffd23f`, `#1f6fd1`]
  }), f2(0, 4.8, 5.6, 16181185, `gonjong`), c2.box(3.2, 1.2, 0.1, 12575733, 0, 1.75, 0.06);
  for (let e22 = 0; e22 < 3; e22++)
    for (let t3 = -3 + e22; t3 <= 3 - e22; t3++)
      c2.box(0.34, 0.08, 0.2, 16777215, t3 * 0.4, 1.3 + e22 * 0.28, 0.2);
  for (let e22 of [-1, 1]) c2.box(1.1, 1, 0.08, 5996454, e22 * 1.2, 4.6, 0.05);
  m2(4.2, 11730971), p2([`RM PADANG`, `MINANG JAYA`], 0, 3.35, 4.2, 1.2, `#f2c230`, [`#b3001b`, `#111111`]), f2(4.8, 4.8, 3.3, 14275783, `flat`), c2.box(3.6, 2.3, 0.1, 2369067, -0.2, 1.15, 0.06);
  for (let e22 = 0; e22 < 4; e22++) c2.cyl(0.33, 0.33, 0.2, 1513239, 2, 0.1 + e22 * 0.2, 0.5, 10);
  p2([`BENGKEL MOTOR`, `TAMBAL BAN \xB7 GANTI OLI`], 4.8, 2.8, 4.3, 0.9, `#111111`, [
    `#ffd23f`,
    `#ffffff`
  ]), f2(9.6, 4.8, 6, 15250592, `flat`), c2.box(3.8, 2.4, 0.1, 10133670, 0, 1.2, 0.06);
  for (let e22 = 1; e22 < 6; e22++) c2.box(3.8, 0.04, 0.12, 8093830, 0, e22 * 0.4, 0.07);
  for (let e22 of [-1, 1]) c2.box(1.1, 1, 0.08, 5996454, e22 * 1.2, 4, 0.05);
  c2.box(0.8, 0.5, 0.4, 15921906, 1.9, 5.2, 0.25), p2([`FOTOKOPI \xB7 ATK \xB7 PULSA`], 9.6, 2.95, 4.3, 0.7, `#ffffff`, `#d62828`, {
    border: `#d62828`
  }), p2([`LAUNDRY KILOAN`], 9.6, 5.1, 3, 0.55, `#18a54a`, `#ffffff`);
  let h2 = [15914934, 13624276, 15253953, 14081260, 15985077, 14272936];
  [-14.8, -20, -25.2, -30.4, -35.6, 14.8, 20, 25.2, 30.4, 35.6].forEach((e22, t3) => {
    f2(e22, 5, 3 + t3 % 3 * 1.1, h2[t3 % h2.length], t3 % 4 == 1 ? `flat` : `genteng`), c2.box(1, 2, 0.1, 6048314, -1, 1, 0.06).box(1.2, 1, 0.08, 5996454, 1, 1.7, 0.05);
  }), c2.at(t2 - 1.3, 0, r3 + 0.8), c2.cyl(0.06, 0.06, 6.4, 14540253, 0, 3.2, 0, 6).ball(0.12, 16765503, 0, 6.45, 0, 0), c2.box(1.5, 0.48, 0.04, 14687012, 0.8, 6, 0).box(1.5, 0.48, 0.04, 16777215, 0.8, 5.52, 0), c2.at(-18, 0, -3.5), c2.box(6, 3.4, 6, 16053486, 0, 1.7, 0).box(6.2, 0.4, 6.2, 2067020, 0, 3.4, 0), c2.ball(1.8, 2067020, 0, 3.7, 0, 2).cyl(0.04, 0.04, 1, 16765503, 0, 5.9, 0, 6).ball(0.16, 16765503, 0, 6.45, 0, 0);
  for (let e22 of [-1.6, 0, 1.6]) c2.box(0.08, 1.7, 0.9, 2059077, 3.02, 1.5, e22);
  for (let e22 of [-1.6, 1.6]) c2.box(0.9, 1.7, 0.08, 2059077, e22, 1.5, 3.02);
  c2.cyl(0.5, 0.62, 7.4, 16053486, 3.9, 3.7, 3.9, 8).cyl(0.85, 0.85, 0.2, 2067020, 3.9, 6.3, 3.9, 8), c2.ball(0.62, 2067020, 3.9, 7.5, 3.9, 1), c2.cone(0.26, 0.5, 10133670, 4.7, 6.75, 3.9, 8, 0, Math.PI / 2).cone(0.26, 0.5, 10133670, 3.9, 6.75, 4.7, 8, -Math.PI / 2), l2(drawCanvasSign([`MUSHOLA AL-IKHLAS`], 3.4, 0.55, `#1f8a4c`, `#ffffff`), -18, 2.75, -0.45);
  let g2 = (e22, t3, n3 = 5) => {
    c2.at(e22, 0, t3), c2.cyl(0.15, 0.22, n3, 9071173, 0, n3 / 2, 0, 6);
    for (let e23 = 0; e23 < 7; e23++) {
      let t4 = e23 / 7 * Math.PI * 2;
      c2.box(0.34, 0.06, 2.5, 3116870, Math.sin(t4) * 1.1, n3 - 0.15, Math.cos(t4) * 1.1, 0.4, t4);
    }
    c2.ball(0.16, 5917226, 0.15, n3 - 0.25, 0.1, 0).ball(0.16, 5917226, -0.12, n3 - 0.3, -0.1, 0);
  }, _2 = (e22, t3) => {
    c2.at(e22, 0, t3), c2.cyl(0.12, 0.17, 1.7, 8827727, 0, 0.85, 0, 6);
    for (let e23 = 0; e23 < 5; e23++) {
      let t4 = e23 / 5 * Math.PI * 2 + 0.4;
      c2.box(0.6, 0.05, 1.7, 5025616, Math.sin(t4) * 0.75, 1.9, Math.cos(t4) * 0.75, 0.3, t4);
    }
  };
  g2(-13.4, -7.5, 5.5), g2(-14.2, 4.6), g2(-22.5, 1.5, 6), _2(-13.6, 0.8), _2(-21.5, -8), c2.at(19, 0, -4.5), c2.box(5, 2.8, 5, 13624276, 0, 1.4, 0).roof(5.6, 5.6, 1.3, jf, 0, 2.8, 0), c2.box(1, 1.9, 0.08, 6048314, -1, 0.95, 2.52).box(1.2, 0.9, 0.08, 5996454, 1, 1.6, 2.52), c2.at(15.2, 0, 0.6);
  for (let e22 of [-1.6, 1.6]) c2.cyl(0.05, 0.05, 1.95, Mf, e22, 0.97, 0, 6);
  c2.box(3.2, 0.02, 0.02, 3355443, 0, 1.9, 0), [15087942, 16777215, 4553629, 16765286, 16743074].forEach(
    (e22, t3) => c2.box(0.5, 0.6, 0.04, e22, -1.2 + t3 * 0.6, 1.58, 0)
  ), c2.at(16.5, 0, 4.6);
  for (let [e22, t3] of [
    [-1, -0.8],
    [1, -0.8],
    [-1, 0.8],
    [1, 0.8]
  ])
    c2.cyl(0.07, 0.07, 2.2, Mf, e22, 1.1, t3, 6);
  c2.box(2.3, 0.12, 1.9, Mf, 0, 0.7, 0).roof(3, 2.6, 0.8, jf, 0, 2.2, 0), _2(14, -3.5), _2(21, 2.5), g2(23, -1, 5);
  for (let [e22, t3, n3] of [
    [14.4, 2.6, 9263659],
    [15.1, 3.1, 15921906],
    [18.6, 1.2, 3811866]
  ])
    c2.at(e22, 0, t3, e22), c2.box(0.2, 0.2, 0.32, n3, 0, 0.26, 0).box(0.1, 0.16, 0.1, n3, 0, 0.42, 0.16).box(0.05, 0.06, 0.05, 14034984, 0, 0.52, 0.17);
  c2.at(-4.6, 0, 8.3);
  for (let [e22, t3] of [
    [-1.65, -0.75],
    [1.65, -0.75],
    [-1.65, 0.75],
    [1.65, 0.75]
  ])
    c2.cyl(0.04, 0.04, 2.25, 9080728, e22, 1.12, t3, 6);
  c2.box(3.6, 0.06, 1.9, 1863120, 0, 2.28, 0, 0.07), c2.box(2.4, 0.08, 0.6, Mf, -0.3, 0.8, 0.1).box(2.4, 0.06, 0.3, Mf, -0.3, 0.48, -0.45), c2.box(0.7, 0.8, 0.5, 7039851, 1.2, 0.4, 0.2).cyl(0.28, 0.2, 0.14, 2829099, 1.2, 0.87, 0.2, 8), l2(
    drawCanvasSign([`PECEL LELE`, `AYAM GORENG \xB7 LAMONGAN`], 3.3, 1.05, `#fffdf2`, [
      `#d62828`,
      `#1f8a4c`
    ]),
    -4.6,
    1.2,
    9.08
  ), l2(crowdFigure(`peci`), -3.4, 0, 7.95, Math.PI), c2.at(-0.9, 0, 8.4), c2.box(1.6, 0.8, 0.8, 2781115, 0, 0.75, 0).box(1.5, 0.6, 0.7, 12575733, 0, 1.45, 0).box(1.8, 0.07, 1, 15921906, 0, 1.98, 0);
  for (let e22 of [-0.7, 0.7]) c2.box(0.05, 0.5, 0.05, Mf, e22, 1.72, 0.3);
  c2.cyl(0.22, 0.22, 0.3, 11579568, 0.45, 1.3, 0, 8), c2.cyl(0.3, 0.3, 0.08, 3355443, -0.5, 0.3, 0.44, 10, Math.PI / 2).cyl(0.3, 0.3, 0.08, 3355443, 0.5, 0.3, 0.44, 10, Math.PI / 2);
  for (let [e22, t3] of [
    [1.4, 0.3],
    [1.9, -0.1],
    [1.5, -0.5]
  ])
    c2.cyl(0.14, 0.19, 0.42, 14034984, e22, 0.21, t3, 6);
  l2(drawCanvasSign([`MIE AYAM \xB7 BAKSO`], 1.7, 0.34, `#ffd23f`, `#b3001b`), -0.9, 2.2, 8.92), l2(crowdFigure(`pria`), -0.9, 0, 7.8, 0), l2(crowdFigure(`hijab`), 0.9, 0, 8.9, -1.2), c2.at(2.9, 0, 8.5), c2.box(1.1, 0.7, 0.7, 3120731, 0, 0.7, 0).cyl(0.16, 0.16, 0.34, 12575733, -0.25, 1.22, 0, 8).cyl(0.16, 0.16, 0.34, 10215562, 0.25, 1.22, 0, 8), c2.cyl(0.28, 0.28, 0.07, 3355443, 0, 0.28, 0.4, 10, Math.PI / 2).cyl(0.03, 0.03, 2.4, 14540253, 0.6, 1.2, -0.2, 6), [15087942, 16765503, 2855752, 1863120, 16749132, 16777215, 8599788, 1615178].forEach((e22, t3) => {
    c2.add(new _i(1.15, 0.45, 1, 1, true, t3 * Math.PI / 4, Math.PI / 4), e22, 0.6, 2.45, -0.2);
  }), l2(drawCanvasSign([`ES CENDOL`], 1, 0.3, `#ffffff`, `#1f8a4c`), 2.9, 0.75, 8.87), l2(crowdFigure(`wanita`), 2.6, 0, 7.9, 0), c2.at(5.7, 0, 8.3), c2.box(1.9, 0.9, 1.3, 14034984, 0, 0.45, 0).box(1.9, 1.2, 1.3, 16052710, 0, 1.5, 0).box(1.5, 0.8, 0.05, 2829099, 0, 1.4, 0.66), c2.box(2.1, 0.06, 0.9, 15921906, 0, 2.05, 0.95, 0.2), [15087942, 16765503, 2855752, 1863120, 16749132, 8599788].forEach(
    (e22, t3) => c2.box(0.12, 0.5, 0.03, e22, -0.6 + t3 * 0.24, 1.52, 0.7)
  ), l2(drawCanvasSign([`KOPI \xB7 ROKOK \xB7 PULSA`], 1.9, 0.34, `#ffffff`, `#d62828`), 5.7, 2.32, 8.97), c2.at(-13, 0, 8.5);
  for (let e22 = 0; e22 < 4; e22++) c2.cyl(0.36, 0.36, 0.22, 1513239, 0, 0.11 + e22 * 0.22, 0, 10);
  c2.cyl(0.25, 0.25, 0.8, 15888413, 1.1, 0.4, 0, 8, 0, Math.PI / 2).box(0.8, 0.5, 0.5, 7039851, 1.1, 0.25, 0.6), l2(drawCanvasSign([`TAMBAL BAN`], 1.3, 0.4, `#111111`, `#ffffff`), -13, 1.15, 8.72), l2(crowdFigure(`pria`), -12.2, 0, 8.1, 0.6);
  for (let e22 of [-1, 1]) {
    let t3 = e22 * (a2 - o2 - 0.35);
    c2.at(t3, 0, 7.75).cyl(0.05, 0.05, 3, 14540253, 0, 1.5, 0, 6), l2(
      drawCanvasSign([`P`], 0.75, 0.75, `#1c5fd0`, `#ffffff`, {
        border: `#ffffff`
      }),
      t3,
      2.65,
      7.8
    ), l2(drawCanvasSign([`PARKIR`], 0.95, 0.3, `#ffffff`, `#1c5fd0`), t3, 2.1, 7.8);
  }
  c2.at(12.6, 0, 9.9).cyl(0.05, 0.05, 2.9, 14540253, 0, 1.45, 0, 6), l2(
    drawCanvasSign([`JL. AKAL SEHAT`], 1.8, 0.4, `#1f8a4c`, `#ffffff`, {
      border: `#ffffff`
    }),
    12.6,
    2.75,
    9.95
  ), c2.at();
  for (let e22 of [-16, -7.3, 7.3, 15.5, 22, -24])
    c2.cyl(0.26, 0.2, 0.4, jf, e22, 0.2, 7.75, 8).ball(0.42, 4165450, e22, 0.7, 7.75, 0);
  for (let e22 of [-20, -9, 4, 13, 27, -31])
    c2.cyl(0.26, 0.2, 0.4, jf, e22, 0.2, 20.4, 8).ball(0.42, 4165450, e22, 0.7, 20.4, 0);
  c2.cyl(0.24, 0.2, 0.7, 2855752, 7, 0.35, 9.2, 8).cyl(0.24, 0.2, 0.7, 15888413, 6.5, 0.35, 9.2, 8), c2.at(6.5, 0, 19.7), c2.box(1.3, 0.75, 0.8, 16052710, 0, 0.75, 0).box(1.2, 0.5, 0.7, 12575733, 0, 1.38, 0).box(1.5, 0.06, 1, 14034984, 0, 1.9, 0), c2.cyl(0.28, 0.28, 0.07, 3355443, 0, 0.28, -0.44, 10, Math.PI / 2), l2(drawCanvasSign([`SIOMAY`], 1, 0.3, `#ffffff`, `#d62828`), 6.5, 0.8, 20.12), l2(crowdFigure(`pria`), 6.5, 0, 19, Math.PI), c2.at(3.1, 0.35, i2 + 0.2, 0.2), c2.box(0.5, 0.2, 0.22, 15239467, 0, 0.1, 0).box(0.2, 0.2, 0.2, 15239467, 0.3, 0.2, 0).box(0.3, 0.06, 0.06, 15239467, -0.35, 0.16, 0.08), c2.box(0.05, 0.08, 0.05, 15239467, 0.34, 0.34, -0.06).box(0.05, 0.08, 0.05, 15239467, 0.34, 0.34, 0.06), c2.at();
  let v2 = [-41, -13.9, 13.9, 41], y2 = 9.95;
  for (let e22 of v2)
    c2.cyl(0.1, 0.14, 7.2, 7039851, e22, 3.6, y2, 6).box(0.1, 0.1, 1.7, 7039851, e22, 6.7, y2), c2.box(0.5, 0.7, 0.45, 9080728, e22, 5.6, 10.25);
  for (let e22 = 0; e22 < v2.length - 1; e22++) {
    let t3 = v2[e22], n3 = v2[e22 + 1];
    for (let [e23, r4] of [
      [-0.7, 0.9],
      [0, 1.2],
      [0.7, 0.8]
    ])
      for (let i3 = 0; i3 < 8; i3++) {
        let a3 = i3 / 8, o3 = (i3 + 1) / 8, s3 = 6.75 - r4 * 4 * a3 * (1 - a3), l3 = 6.75 - r4 * 4 * o3 * (1 - o3), u3 = t3 + (n3 - t3) * a3, d3 = t3 + (n3 - t3) * o3, f3 = Math.hypot(d3 - u3, l3 - s3);
        c2.box(
          f3,
          0.04,
          0.04,
          1710618,
          (u3 + d3) / 2,
          (s3 + l3) / 2,
          y2 + e23,
          0,
          0,
          Math.atan2(l3 - s3, d3 - u3)
        );
      }
  }
  let b2 = c2.build();
  b2.receiveShadow = true, e21.add(b2);
}
var World = class {
  constructor(e21) {
    this.scene = e21, this.blockers = [], this.onHonk = () => {
    }, this.hold = null, this.lanes = [], this.walkers = [], this.t = 0, this.honkIn = 3;
    let t2 = STREET, n2 = (e22, n3, r4, i3) => {
      let a2 = {
        z: e22,
        dir: n3,
        moto: r4,
        list: []
      };
      for (let e23 = 0; e23 < i3; e23++) {
        let n4 = this.make(a2);
        n4.x = -t2.span + (e23 + 0.2 + Math.random() * 0.5) * 2 * t2.span / i3, a2.list.push(n4);
      }
      this.lanes.push(a2);
    };
    n2(t2.nearLane, 1, false, 4), n2(t2.farLane, -1, false, 4), n2(t2.nearLane - 1.35, 1, true, 3), n2(t2.nearLane + 1.45, 1, true, 3), n2(t2.farLane - 1.45, -1, true, 3), n2(t2.farLane + 1.35, -1, true, 3);
    let r3 = (t3, n3, r4, i3, a2, o2 = 0.05) => {
      t3.rotation.order = `YXZ`, t3.rotation.y = r4 * Math.PI / 2, e21.add(t3), this.walkers.push({
        obj: t3,
        x: a2,
        z: n3,
        dir: r4,
        speed: i3,
        v: i3,
        phase: Math.random() * 6,
        sway: o2
      });
    }, i2 = () => (Math.random() * 2 - 1) * t2.span;
    for (let e22 = 0; e22 < 6; e22++)
      r3(crowdFigure(), e22 % 2 ? 9.95 : 9.5, e22 % 2 ? -1 : 1, 1.1 + Math.random() * 0.6, i2());
    for (let e22 = 0; e22 < 5; e22++)
      r3(crowdFigure(), e22 % 2 ? 19.3 : 18.9, e22 % 2 ? 1 : -1, 1.1 + Math.random() * 0.6, i2());
    r3(crowdFigure(`pikulan`), 9.5, 1, 0.95, -20), r3(ud(false), 20.2, 1, 0.8, -16, 0.12), r3(ud(true), 20.2, 1, 0.8, -14.2, 0.12);
  }
  make(e21) {
    let t2 = e21.moto ? $u() : ad();
    t2.obj.rotation.order = `YXZ`, t2.obj.rotation.y = e21.dir * Math.PI / 2, this.scene.add(t2.obj);
    let n2 = t2.kind === `angkot` && Math.random() < 0.6;
    return {
      ...t2,
      x: 0,
      v: t2.speed,
      parked: false,
      stopX: n2 ? (Math.random() * 2 - 1) * 20 : null,
      hold: 0,
      stuck: 0,
      phase: Math.random() * 6
    };
  }
  clear(e21, t2, n2, r3) {
    return e21.list.every((e22) => e22 === r3 || e22.parked || Math.abs(e22.x - t2) > (e22.len + n2) / 2 + 4);
  }
  gapAhead(e21, t2) {
    let n2 = 1 / 0;
    for (let r3 of this.lanes[0].list)
      r3.parked || r3.x <= e21 || (n2 = Math.min(n2, r3.x - e21 - r3.len / 2 - t2));
    return n2;
  }
  entryClear(e21, t2) {
    return this.clear(this.lanes[0], e21, t2) && this.clear(this.lanes[2], e21, t2);
  }
  nearClear(e21, t2) {
    let n2 = t2 ? 2.2 : 3.6;
    for (let r3 of t2 ? [2] : [0, 2])
      for (let t3 of this.lanes[r3].list) {
        if (t3.parked) continue;
        let r4 = t3.x - t3.len / 2, i2 = t3.x + t3.len / 2;
        if (r4 > e21 + 2.5) {
          if (r4 < e21 + 4 && t3.v < 1.5) return false;
          continue;
        }
        let a2 = e21 - 2.5 - i2;
        if (a2 < 0 || !(this.hold !== null && i2 <= this.hold + 0.8) && a2 / Math.max(t3.v, 1) < n2)
          return false;
      }
    return true;
  }
  passing(e21) {
    for (let t2 of [0, 2])
      for (let n2 of this.lanes[t2].list) {
        if (n2.parked) continue;
        let t3 = n2.x - n2.len / 2, r3 = n2.x + n2.len / 2;
        if (!(t3 > e21 + 1) && !(r3 < e21 - 1.6 && this.hold !== null && r3 <= this.hold + 0.8 && (n2.v < 0.5 || n2.v * n2.v / 12 < this.hold - r3 + 0.3)) && !(r3 < e21 - 30))
          return true;
      }
    return false;
  }
  poach(e21, t2) {
    let n2 = this.lanes[2], r3 = n2.list.find((n3) => !n3.parked && !n3.once && n3.x > e21 && n3.x < t2);
    if (!r3) return null;
    let i2 = this.make(n2);
    return i2.x = -STREET.span, i2.parked = true, i2.obj.visible = false, n2.list[n2.list.indexOf(r3)] = i2, r3;
  }
  adopt(e21, t2, n2) {
    let r3 = this.lanes[2];
    e21.obj.rotation.order = `YXZ`, e21.obj.rotation.set(0, Math.PI / 2, 0), r3.list.push({
      ...e21,
      x: t2,
      v: n2,
      parked: false,
      once: true,
      stopX: null,
      hold: 0,
      stuck: 0,
      phase: 0
    });
  }
  get bikeLaneZ() {
    return this.lanes[2].z;
  }
  update(e21) {
    let t2 = STREET;
    this.t += e21, this.honkIn -= e21;
    for (let n2 of this.lanes) {
      let r3 = n2.moto ? 0.5 : 1;
      for (let i2 of [...n2.list]) {
        if (i2.parked) {
          if (!this.clear(n2, i2.x, i2.len, i2)) continue;
          i2.parked = false, i2.obj.visible = true;
        }
        let a2 = 1 / 0;
        for (let e22 of n2.list) {
          if (e22 === i2 || e22.parked) continue;
          let t3 = n2.dir * (e22.x - i2.x);
          t3 > 0 && (a2 = Math.min(a2, t3 - (e22.len + i2.len) / 2));
        }
        for (let e22 of this.blockers) {
          if (Math.abs(e22.z - n2.z) > e22.hz + r3) continue;
          let t3 = n2.dir * (e22.x - i2.x);
          t3 > 0 && (a2 = Math.min(a2, t3 - e22.hx - i2.len / 2));
        }
        if (this.hold !== null && n2.dir === 1) {
          let e22 = i2.x + i2.len / 2;
          e22 <= this.hold + 0.8 && (a2 = Math.min(a2, this.hold - e22 + 1));
        }
        let o2 = zf((a2 - 1 - i2.v * 0.35) * 1.4, 0, i2.speed);
        i2.hold > 0 ? (i2.hold -= e21, o2 = 0) : i2.stopX !== null && n2.dir * (i2.x - i2.stopX) > 0 && (i2.hold = 2.5 + Math.random() * 2, i2.stopX = null);
        let s2 = i2.v;
        if (i2.v += zf(o2 - i2.v, -7 * e21, (n2.moto ? 3.2 : 2.2) * e21), i2.x += n2.dir * i2.v * e21, i2.tick?.(i2.v, e21), n2.moto) {
          let t3 = (i2.v - s2) / Math.max(e21, 1e-3);
          i2.obj.rotation.x += (zf(-t3 * 0.012, -0.08, 0.08) - i2.obj.rotation.x) * Math.min(1, e21 * 8), i2.obj.rotation.z = -Math.cos(this.t * 0.8 + i2.phase) * 0.1 * Math.min(1, i2.v / 6);
        }
        if (i2.v < 0.3 && a2 < 3 && Math.abs(i2.x) < 24 ? (i2.stuck += e21, i2.stuck > 1.2 && this.honkIn <= 0 && (this.honkIn = 4 + Math.random() * 5, this.onHonk(i2.x, n2.z, i2.kind))) : i2.stuck = 0, n2.dir * i2.x > t2.span) {
          if (this.scene.remove(i2.obj), disposeTree(i2.obj), i2.once) {
            n2.list = n2.list.filter((e22) => e22 !== i2);
            continue;
          }
          Object.assign(i2, this.make(n2), {
            x: -n2.dir * t2.span,
            parked: true
          }), i2.obj.visible = false;
        }
        let c2 = n2.moto ? Math.sin(this.t * 0.8 + i2.phase) * 0.14 : 0;
        i2.obj.position.set(i2.x, 0, n2.z + c2);
      }
    }
    for (let n2 of this.walkers) {
      let r3 = true;
      for (let e22 of this.blockers) {
        if (!e22.moving || Math.abs(e22.z - n2.z) > e22.hz + 0.6) continue;
        let t3 = n2.dir * (e22.x - n2.x) - e22.hx;
        t3 > -0.5 && t3 < 1.6 && (r3 = false);
      }
      n2.v += zf((r3 ? n2.speed : 0) - n2.v, -4 * e21, 2.5 * e21);
      let i2 = n2.v * e21;
      n2.x += n2.dir * i2, n2.dir * n2.x > t2.span && (n2.x = -n2.dir * t2.span), n2.phase += i2 / ld * Math.PI * 2;
      let a2 = Math.min(1, n2.v / 0.8);
      swayProp(n2.obj, n2.phase, a2), n2.obj.position.set(n2.x, Math.abs(Math.sin(n2.phase)) * 0.035 * a2, n2.z), n2.obj.userData.legs || (n2.obj.rotation.z = Math.sin(n2.phase * 0.5) * n2.sway);
    }
  }
};
var View = class e20 {
  static {
    this.MOTOR_ROWS = [
      [-6.5, 6],
      [3.3, 4]
    ];
  }
  static {
    this.MOTOR_Z = AREA.laneHalf + 1.8;
  }
  constructor(e21) {
    this.scene = new gn(), this.camera = new jo(-10, 10, 10, -10, 1, 200), this.bays = [], this.obstacles = [], this.onKnock = () => {
    }, this.shake = 0, this.dynamic = new cn(), this.walls = [], this.parked = [], this.motorSlots = [], this.tweens = [], this.dominos = [], this.marker = new cn(), this.clock = 0, this.camBase = new U(), this.tmp = new U(), this.insets = {
      top: 0,
      bottom: 0
    }, this.renderer = new su({
      canvas: e21,
      antialias: true
    }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.renderer.shadowMap.enabled = true, this.renderer.shadowMap.type = 1, this.scene.background = new K(12563870), this.scene.add(new vo(16777215, 10129274, 1.5));
    let t2 = new No(16773590, 2.2);
    t2.position.set(-9, 22, 14), t2.target.position.set(0, 0, 5), t2.castShadow = true, t2.shadow.mapSize.set(2048, 2048);
    let n2 = t2.shadow.camera;
    n2.left = -34, n2.right = 34, n2.top = 26, n2.bottom = -26, n2.far = 80, t2.shadow.bias = -8e-4, this.scene.add(t2, t2.target);
    for (let e22 = 0; e22 < AREA.bays; e22++)
      this.bays.push({
        i: e22,
        x: (e22 - (AREA.bays - 1) / 2) * AREA.bayW,
        z: -AREA.laneHalf - AREA.bayD / 2
      });
    this.buildStatic(), this.markerFill = new Hr({
      color: 16765503,
      transparent: true,
      opacity: 0.5
    });
    let r3 = new ei(new Pa(AREA.bayW - 0.2, AREA.bayD - 0.2), this.markerFill);
    r3.rotation.x = -Math.PI / 2, r3.position.y = 0.02, this.marker.add(r3), this.arrow = new ei(
      new _i(0.45, 0.9, 4),
      new Hr({
        color: 16765503
      })
    ), this.arrow.rotation.x = Math.PI, this.marker.add(this.arrow), this.marker.visible = false, this.scene.add(this.marker), this.scene.add(this.dynamic);
  }
  wall(e21, t2, n2, r3, i2, a2) {
    let o2 = t2 - e21, s2 = r3 - n2;
    i2 > 0 && this.scene.add(Xf(o2, i2, s2, a2, (e21 + t2) / 2, i2 / 2, (n2 + r3) / 2)), this.walls.push({
      obb: {
        x: (e21 + t2) / 2,
        z: (n2 + r3) / 2,
        hx: o2 / 2,
        hz: s2 / 2,
        rot: 0
      },
      kind: `wall`,
      cost: 0,
      knocked: false
    });
  }
  buildStatic() {
    let t2 = this.scene, {
      minX: n2,
      maxX: r3,
      minZ: i2,
      maxZ: a2,
      laneHalf: o2,
      bayW: s2,
      bayD: c2,
      openX: l2,
      openHalf: u2
    } = AREA, d2 = new ei(new Pa(r3 - n2, a2 - i2), Yf(4869719));
    d2.rotation.x = -Math.PI / 2, d2.position.set((n2 + r3) / 2, 0, (i2 + a2) / 2), d2.receiveShadow = true, t2.add(d2);
    let f2 = -o2 - c2 / 2;
    for (let e21 = 0; e21 <= AREA.bays; e21++) t2.add(Zf(0.12, c2, 15921906, (e21 - AREA.bays / 2) * s2, f2));
    let p2 = l2 - u2;
    t2.add(Zf(p2 * 2 - 0.6, 0.1, 15254855, 0, o2 + 0.3));
    let m2 = drawCanvasSign([`PARKIR MOBIL`], 3.6, 0.5, `#1c5fd0`, `#ffffff`, {
      border: `#ffffff`
    });
    m2.position.set(0, 1.42, i2 + 0.03), t2.add(m2);
    for (let [n3, r4] of e20.MOTOR_ROWS) {
      let i3 = n3 + (r4 - 1) * 0.95 / 2, a3 = new ei(new Pa(r4 * 0.95 + 0.3, 2.2), Yf(5988720));
      a3.rotation.x = -Math.PI / 2, a3.position.set(i3, 4e-3, e20.MOTOR_Z + 0.05), a3.receiveShadow = true, t2.add(a3);
      for (let i4 = 0; i4 <= r4; i4++)
        t2.add(Zf(0.06, 2.1, 15921906, n3 + (i4 - 0.5) * 0.95, e20.MOTOR_Z + 0.05));
      let o3 = drawCanvasSign([`PARKIR MOTOR`], 2.3, 0.4, `#1c5fd0`, `#ffffff`);
      o3.rotation.x = -Math.PI / 2, o3.position.set(i3, 0.015, e20.MOTOR_Z - 1.3), t2.add(o3);
    }
    let h2 = 0.5;
    this.wall(n2 - h2, r3 + h2, i2 - h2, i2, 1.1, 15326403), this.wall(n2 - h2, n2, i2, a2, 1.1, 15326403), this.wall(r3, r3 + h2, i2, a2, 0.35, 13224393), this.wall(-p2, p2, a2, a2 + 0.4, 0.35, 13224393);
    for (let e21 of [-1, 1])
      this.wall(e21 * l2 - u2, e21 * l2 + u2, STREET.walkZ0 + 1.2, STREET.walkZ0 + 1.6, 0, 0);
  }
  reset() {
    this.dynamic.clear(), this.tweens = [], this.dominos = [], this.parked = [], this.motorSlots = [], this.obstacles = [...this.walls], this.setTarget(null);
    let t2 = /* @__PURE__ */ new Set();
    for (; t2.size < 2; ) t2.add(Math.floor(Math.random() * AREA.bays));
    for (let e21 of t2) {
      let t3 = this.bays[e21], n3 = new CarMesh(pickLang([VEHICLES.city, VEHICLES.mpv]), pickLang(CAR_COLORS)), r4 = (Math.random() < 0.5 ? Math.PI : 0) + (Math.random() - 0.5) * 0.08;
      n3.setBodyCenter(t3.x + (Math.random() - 0.5) * 0.3, t3.z + (Math.random() - 0.5) * 0.4, r4), this.dynamic.add(n3.group), this.addParked(n3, PRICES.mobil, false, 7 + this.parked.length * 26);
    }
    let n2 = e20.MOTOR_Z;
    for (let [t3, r4] of e20.MOTOR_ROWS) this.motorRow(t3, r4, n2);
    this.gerobak(0.3, n2 - 0.1);
    let r3 = /* @__PURE__ */ new Set();
    for (; r3.size < 2; ) r3.add(1 + Math.floor(Math.random() * (AREA.bays - 1)));
    for (let e21 of r3) this.cone((e21 - AREA.bays / 2) * AREA.bayW, -AREA.laneHalf + 0.3);
    this.cone(1.7 + Math.random() * 0.7, AREA.laneHalf - 0.2);
  }
  prop(e21, t2, n2, r3, i2, a2, o2) {
    e21.position.set(r3, 0, i2), this.dynamic.add(e21);
    let s2 = {
      obb: {
        x: r3,
        z: i2,
        hx: a2,
        hz: o2,
        rot: 0
      },
      kind: t2,
      cost: n2,
      knocked: false,
      mesh: e21
    };
    return this.obstacles.push(s2), s2;
  }
  cone(e21, t2) {
    let n2 = new cn(), r3 = new ei(new _i(0.2, 0.6, 8), Yf(16739098));
    r3.position.y = 0.34, r3.castShadow = true, n2.add(r3, Xf(0.46, 0.05, 0.46, 16739098, 0, 0.025, 0));
    let i2 = new ei(new gi(0.105, 0.135, 0.12, 8), Yf(16777215));
    i2.position.y = 0.36, n2.add(i2), this.prop(n2, `cone`, 500, e21, t2, 0.22, 0.22);
  }
  motorRow(e21, t2, n2) {
    let r3 = this.motorSlots.length ? this.motorSlots[this.motorSlots.length - 1].row + 1 : 0, i2 = Math.floor(Math.random() * t2);
    for (let a2 = 0; a2 < t2; a2++) {
      let t3 = {
        x: e21 + a2 * 0.95,
        z: n2,
        row: r3,
        ob: null,
        reserved: false
      };
      this.motorSlots.push(t3), a2 !== i2 && this.parkMotor(t3);
    }
  }
  parkMotor(e21) {
    let t2 = new cn();
    t2.add(
      Xf(0.34, 0.45, 1.2, pickLang([14034984, 1914199, 2855752, 2236962, 16219904]), 0, 0.62, 0)
    ), t2.add(Xf(0.3, 0.12, 0.7, 1710618, 0, 0.9, -0.2)), t2.add(Xf(0.62, 0.06, 0.06, 5592405, 0, 1.08, 0.5));
    for (let e22 of [-0.65, 0.65]) {
      let n3 = new ei(new gi(0.3, 0.3, 0.12, 10), Yf(1447446));
      n3.rotation.z = Math.PI / 2, n3.position.set(0, 0.3, e22), n3.castShadow = true, t2.add(n3);
    }
    let n2 = this.prop(t2, `motor`, 1e3, e21.x, e21.z, 0.3, 0.95);
    n2.slot = this.motorSlots.indexOf(e21), e21.ob = n2, e21.reserved = false;
  }
  claimMotor() {
    let e21 = this.motorSlots.filter((e22) => e22.ob && !e22.ob.knocked && !e22.reserved);
    if (e21.length < 3) return null;
    let t2 = pickLang(e21);
    return t2.reserved = true, t2;
  }
  takeMotor(e21) {
    return e21.ob ? (this.obstacles = this.obstacles.filter((t2) => t2 !== e21.ob), e21.ob.mesh && this.dynamic.remove(e21.ob.mesh), e21.ob = null, e21.reserved = true, e21) : null;
  }
  freeMotorSlot() {
    let e21 = this.motorSlots.filter((e22) => !e22.ob && !e22.reserved);
    return e21.length ? pickLang(e21) : null;
  }
  gerobak(e21, t2) {
    let n2 = new cn();
    n2.add(Xf(1.2, 0.8, 1.9, 2781115, 0, 0.75, 0)), n2.add(Xf(1.1, 0.5, 0.9, 12575733, 0, 1.4, 0.4)), n2.add(Xf(1.4, 0.08, 2.1, 16044894, 0, 2.05, 0));
    for (let [e22, t3] of [
      [-0.55, -0.9],
      [0.55, -0.9],
      [-0.55, 0.9],
      [0.55, 0.9]
    ])
      n2.add(Xf(0.07, 0.9, 0.07, 9263659, e22, 1.6, t3));
    for (let e22 of [-0.66, 0.66]) {
      let t3 = new ei(new gi(0.36, 0.36, 0.08, 12), Yf(3355443));
      t3.rotation.z = Math.PI / 2, t3.position.set(e22, 0.36, 0), n2.add(t3);
    }
    this.prop(n2, `gerobak`, 2e3, e21, t2, 0.65, 1);
  }
  knock(e21, t2, n2, r3 = 1) {
    if (e21.knocked || !e21.mesh) return;
    e21.knocked = true;
    let i2 = e21.mesh, a2 = t2 >= 0 ? 1 : -1;
    if (e21.kind === `cone`) {
      let e22 = i2.position.x, a3 = i2.position.z, o2 = 0.5 + r3 * 0.9, s2 = (Math.random() - 0.5) * 8, c2 = (Math.random() - 0.5) * 0.6;
      this.tween(0.35 + o2 * 0.18, (r4) => {
        let l2 = 1 - (1 - r4) * (1 - r4);
        i2.position.set(
          e22 + (t2 - n2 * c2) * o2 * l2,
          0.12 + 0.3 * o2 * Math.sin(Math.min(1, r4 * 1.6) * Math.PI) * (r4 < 0.625),
          a3 + (n2 + t2 * c2) * o2 * l2
        ), i2.rotation.set(Math.PI / 2 * Math.min(1, r4 * 2), s2 * l2, 0);
      });
    } else {
      let t3 = e21.kind === `motor` ? 1.35 : 1.5;
      if (this.tween(0.5, (e22) => {
        let n3 = e22 < 0.75 ? (e22 / 0.75) ** 2 : 1 - 0.06 * Math.sin((e22 - 0.75) / 0.25 * Math.PI);
        i2.rotation.z = -a2 * t3 * n3;
      }), e21.slot !== void 0) {
        let t4 = this.motorSlots[e21.slot], n3 = this.motorSlots[e21.slot + a2];
        n3 && n3.row === t4.row && n3.ob && !n3.ob.knocked && this.dominos.push({
          t: 0.14,
          ob: n3.ob,
          dir: a2
        });
      }
    }
    this.onKnock(e21);
  }
  addParked(e21, t2, n2, r3) {
    let i2 = e21.obbs().map((t3) => ({
      obb: t3,
      kind: `car`,
      cost: 0,
      knocked: false,
      car: e21
    }));
    this.obstacles.push(...i2);
    let a2 = {
      car: e21,
      obstacles: i2,
      fee: t2,
      tip: n2,
      leaveAt: r3,
      asked: false
    };
    return this.parked.push(a2), a2;
  }
  unpark(e21) {
    this.parked = this.parked.filter((t2) => t2 !== e21), this.obstacles = this.obstacles.filter((t2) => !e21.obstacles.includes(t2));
  }
  releaseOldest() {
    let e21 = this.parked.shift();
    if (!e21) return null;
    this.obstacles = this.obstacles.filter((t3) => !e21.obstacles.includes(t3));
    let t2 = e21.car.bodyCenter();
    return this.vanish(e21.car.group), t2;
  }
  vanish(e21) {
    this.tween(
      0.35,
      (t2) => e21.scale.setScalar(Math.max(1e-3, 1 - t2)),
      () => this.dynamic.remove(e21)
    );
  }
  popIn(e21) {
    e21.scale.setScalar(1e-3), this.tween(0.25, (t2) => e21.scale.setScalar(Math.max(1e-3, t2)));
  }
  bayFree(e21) {
    let t2 = {
      x: e21.x,
      z: e21.z,
      hx: AREA.bayW / 2 - 0.45,
      hz: AREA.bayD / 2 - 0.45,
      rot: 0
    };
    return !this.obstacles.some((e22) => e22.kind === `car` && obbOverlap(e22.obb, t2));
  }
  pickBay() {
    let e21 = this.bays.filter((e22) => this.bayFree(e22));
    if (!e21.length) return null;
    let t2 = (e22) => [e22.i - 1, e22.i + 1].filter(
      (e23) => e23 >= 0 && e23 < this.bays.length && !this.bayFree(this.bays[e23])
    ).length, n2 = Math.min(...e21.map(t2));
    return pickLang(e21.filter((e22) => t2(e22) === n2));
  }
  setTarget(e21) {
    this.marker.visible = !!e21, e21 && this.marker.position.set(e21.x, 0, e21.z);
  }
  tween(e21, t2, n2) {
    this.tweens.push({
      t: 0,
      dur: e21,
      fn: t2,
      done: n2
    });
  }
  update(e21) {
    this.clock += e21, this.markerFill.opacity = 0.35 + 0.2 * Math.sin(this.clock * 5), this.arrow.position.y = 2.6 + 0.25 * Math.sin(this.clock * 4), this.arrow.rotation.y = this.clock * 2;
    for (let t3 of this.dominos) t3.t -= e21;
    let t2 = this.dominos.filter((e22) => e22.t <= 0);
    this.dominos = this.dominos.filter((e22) => e22.t > 0);
    for (let e22 of t2) this.knock(e22.ob, e22.dir, 0);
    for (let t3 of this.tweens) t3.t += e21, t3.fn(Math.min(1, t3.t / t3.dur));
    let n2 = this.tweens.filter((e22) => e22.t >= e22.dur);
    this.tweens = this.tweens.filter((e22) => e22.t < e22.dur);
    for (let e22 of n2) e22.done?.();
    for (let t3 of this.parked) t3.car.animate(e21);
    this.shake = Math.max(0, this.shake - e21 * 2.5);
  }
  resize(e21 = this.insets.top, t2 = this.insets.bottom) {
    this.insets = {
      top: e21,
      bottom: t2
    };
    let n2 = window.innerWidth, r3 = window.innerHeight;
    this.renderer.setSize(n2, r3, false);
    let i2 = n2 / r3 < 0.9, a2 = i2 ? 0 : 0.3, o2 = i2 ? 1 : 0.92, s2 = i2 ? AREA.minZ - 4.5 : AREA.minZ - 0.7, c2 = i2 || r3 >= 560 ? STREET.roadZ1 + 0.3 : STREET.nearLane + 2, l2 = (AREA.minX + AREA.maxX) / 2, u2 = (s2 + c2) / 2, d2 = this.camera;
    d2.position.set(
      l2 + Math.sin(a2) * Math.cos(o2) * 70,
      Math.sin(o2) * 70,
      u2 + Math.cos(a2) * Math.cos(o2) * 70
    ), d2.lookAt(l2, 0, u2), d2.updateMatrixWorld(true);
    let f2 = 1 / 0, p2 = -1 / 0, m2 = 1 / 0, h2 = -1 / 0, g2 = 0.7;
    for (let e22 of [AREA.minX - g2, AREA.maxX + g2])
      for (let t3 of [s2, c2])
        for (let n3 of [0, 1.8]) {
          let r4 = this.tmp.set(e22, n3, t3).applyMatrix4(d2.matrixWorldInverse);
          f2 = Math.min(f2, r4.x), p2 = Math.max(p2, r4.x), m2 = Math.min(m2, r4.y), h2 = Math.max(h2, r4.y);
        }
    let _2 = Math.max(120, r3 - e21 - t2), v2 = Math.max((p2 - f2) / n2, (h2 - m2) / _2), y2 = (f2 + p2) / 2, b2 = (m2 + h2) / 2 + (e21 - t2) / 2 * v2;
    d2.left = y2 - n2 * v2 / 2, d2.right = y2 + n2 * v2 / 2, d2.top = b2 + r3 * v2 / 2, d2.bottom = b2 - r3 * v2 / 2, d2.updateProjectionMatrix(), this.camBase.copy(d2.position);
  }
  project(e21, t2, n2) {
    let r3 = this.tmp.set(e21, t2, n2).project(this.camera);
    return [(r3.x * 0.5 + 0.5) * window.innerWidth, (-r3.y * 0.5 + 0.5) * window.innerHeight];
  }
  render() {
    let e21 = this.camera;
    e21.position.copy(this.camBase), this.shake > 0 && (e21.position.x += (Math.random() - 0.5) * this.shake, e21.position.z += (Math.random() - 0.5) * this.shake), this.renderer.render(this.scene, e21);
  }
};

// src/app/levels.js
var LEVELS = [
  {
    id: "pasar",
    name: { id: "Pasar Pagi", en: "Morning Market" },
    blurb: { id: "Lahan standar, 7 slot.", en: "Standard lot, 7 bays." },
    area: {},
    tuning: {},
    prices: {}
  },
  {
    id: "sempit",
    name: { id: "Lahan Sempit", en: "Tight Lot" },
    blurb: {
      id: "5 slot lebar, ronde 90 detik, Satpol lebih rajin.",
      en: "5 wide bays, 90s round, Satpol patrols sooner."
    },
    area: { bays: 5, bayW: 3.2 },
    tuning: {
      roundSeconds: 90,
      patrolFirstIn: [25, 35],
      patrolNextIn: [20, 30],
      passByIn: [2, 5]
    },
    prices: { mobil: 6500, motor: 2500, scratch: 1200, crooked: 1200, tip: 1500 }
  }
];
var DEFAULT_LEVEL = "pasar";
var CURRENT_LEVEL = DEFAULT_LEVEL;
function readLevelId() {
  try {
    const fromUrl = new URLSearchParams(location.search).get("level");
    if (fromUrl && LEVELS.some((l2) => l2.id === fromUrl)) return fromUrl;
    const saved = localStorage.getItem("tp-level");
    if (saved && LEVELS.some((l2) => l2.id === saved)) return saved;
  } catch {
  }
  return DEFAULT_LEVEL;
}
function getLevel(id2) {
  return LEVELS.find((l2) => l2.id === id2) || LEVELS[0];
}
function applyLevel(id2) {
  const level = getLevel(id2);
  Object.assign(AREA, level.area);
  Object.assign(TUNING, level.tuning);
  Object.assign(PRICES, level.prices);
  CURRENT_LEVEL = level.id;
  try {
    const legacy = localStorage.getItem("tp-best");
    if (legacy !== null && localStorage.getItem(bestKey(level.id)) === null) {
      localStorage.setItem(bestKey(level.id), legacy);
    }
  } catch {
  }
  return level;
}
function setLevel(id2) {
  try {
    localStorage.setItem("tp-level", id2);
  } catch {
  }
}
function bestKey(id2) {
  return `tp-best:${id2}`;
}

// src/app/game.js
var Game = class {
  constructor(e21, t2, n2, r3) {
    this.world = e21, this.hud = t2, this.sfx = n2, this.street = r3, this.state = `ready`, this.timeLeft = TUNING.roundSeconds, this.money = 0, this.car = null, this.driver = null, this.target = null, this.incoming = null, this.leaver = null, this.departing = [], this.bikes = [], this.outcomes = [], this.exits = ``, this.paidCars = 0, this.paidBikes = 0, this.unpaid = 0, this.scratches = 0, this.props = 0, this.carIndex = 0, this.carScratches = 0, this.carTime = 0, this.hitCooldown = 0, this.settle = 0, this.admitIn = 0, this.cmdGear = -1, this.held = {
      terus: false,
      kiri: false,
      kanan: false
    }, this.dirs = [], this.stopPose = 0, this.overFor = 0, this.elapsed = 0, this.holdLeft = 0, this.holdPhase = `off`, this.holdT = 0, this.bikeOutIn = 6, this.bikeInIn = 10, this.chatIn = 5, this.vendorIn = 4, this.ownerQuiet = 0, this.timers = [], this.tukang = new Yd(), this.sinceExit = 1 / 0, this.guide = new GuideHud(), this.label = null, this.onDriver = () => {
    }, this.patrol = null, this.selfPark = null, this.patrolIn = TUNING.patrolFirstIn[0] + 5, this.hiding = false, this.busted = false, this.bustT = 0, this.bustJoke = ``, this.shown = false, this.shot = null, this.passIn = 3, this.soundIds = /* @__PURE__ */ new WeakMap(), this.soundN = 0, e21.scene.add(this.tukang.group, this.guide.group), this.crowd = new Crowd(e21.scene), e21.onKnock = (e22) => this.fine(e22), t2.onAgain = () => this.reset(), r3.onHonk = (e22, t3) => {
      n2.honk(0.35), this.holdActive && this.state === `playing` && Math.random() < 0.7 && this.hud.pop(
        pickLang(byLang(STRINGS.heckle)),
        () => this.world.project(e22, 2.4, t3),
        1.6,
        `warga`
      );
    }, this.reset();
  }
  reset() {
    for (let e22 of this.bikes) e22.m.obj.removeFromParent(), disposeTree(e22.m.obj);
    this.crowd.clear(), this.world.reset(), this.hud.clearPops(), this.state = `ready`, this.timeLeft = TUNING.roundSeconds, this.elapsed = 0, this.money = 0, this.outcomes = [], this.exits = ``, this.paidCars = this.paidBikes = this.unpaid = 0, this.scratches = 0, this.props = 0, this.carIndex = 0, this.car = null, this.driver = null, this.incoming = null, this.leaver = null, this.departing = [], this.bikes = [], this.timers = [], this.admitIn = 0, this.holdLeft = 0, this.holdPhase = `off`, this.bikeOutIn = 6, this.bikeInIn = 10, this.clearPatrol(), this.selfPark = null, this.patrolIn = randRange(TUNING.patrolFirstIn[0], TUNING.patrolFirstIn[1]), this.hiding = false, this.hud.hush = null, this.busted = false, this.bustT = 0, this.shown = false, this.shot = null, this.tukang.crouched = false, this.tukang.group.visible = true, this.hud.setHiding(false), this.hud.setAlert(null), this.hud.hideResult(), this.hud.showHint(true), this.hud.setTime(this.timeLeft), this.hud.setMoney(0), this.hud.setCars(0), this.hud.setHold(0);
    let e21 = this.world.pickBay(), t2 = e21.x < -0.1 ? 1 : e21.x > 0.1 ? -1 : Math.random() < 0.5 ? 1 : -1, [n2, r3] = this.cast(), i2 = new CarMesh(n2, pickLang(CAR_COLORS));
    i2.setPose(e21.x + t2 * 6.5, Qd, t2 * Math.PI / 2), this.world.dynamic.add(i2.group), this.world.popIn(i2.group), this.handOver(i2, n2, r3, e21, -1), this.tukang.place(i2), this.queueNext();
  }
  relabel() {
    this.hud.setCars(this.outcomes.filter((e21) => e21 !== `angry`).length), this.hud.setDriver(this.label ? this.label() : ``);
  }
  tryRestart() {
    this.state === `over` && this.overFor > 0.8 && this.reset();
  }
  later(e21, t2) {
    this.timers.push({
      t: e21,
      fn: t2
    });
  }
  carSays(e21, t2, n2 = 2) {
    this.hud.pop(
      pickLang(byLang(t2)),
      () => {
        let [t3, n3] = e21.bodyCenter();
        return this.world.project(t3, 2.5, n3);
      },
      n2
    );
  }
  onSignal(e21, t2) {
    if (this.state !== `over`) {
      if (this.state === `ready` && t2 && (this.state = `playing`, this.hud.showHint(false)), e21 === `sembunyi`)
        t2 && this.setHiding(!this.hiding);
      else if (!this.hiding) {
        if (e21 === `jalan`) {
          if (!t2) return;
          this.holdLeft = 6, this.holdPhase === `off` ? this.holdPhase = `run` : this.holdPhase === `back` && (this.holdPhase = `road`), this.sfx.whistle(2, true), this.hud.say(`tukang`, pickLang(byLang(STRINGS.holdShout)), 1.6);
        } else if (t2 && this.car && (this.holdPhase === `run` || this.holdPhase === `kerb` || this.holdPhase === `road`) && (this.holdPhase = this.holdPhase === `run` ? `off` : `back`), e21 === `maju` || e21 === `mundur`) {
          let n2 = e21 === `maju` ? 1 : -1;
          this.dirs = this.dirs.filter((e22) => e22 !== n2), t2 && this.dirs.push(n2);
          let r3 = this.dirs[this.dirs.length - 1];
          if (r3 === void 0) {
            this.held.terus && (this.held.terus = false, this.driver?.signal(`terus`, false));
            return;
          }
          this.go(r3);
        } else if (e21 !== `gear`) {
          if (e21 === `stop`) {
            if (!t2) return;
            this.stopPose = 0.7, this.sfx.whistle(1, true);
          } else this.held[e21] = t2, t2 && this.sfx.whistle(e21 === `terus` ? 2 : 1);
          t2 && this.hud.say(`tukang`, Zd[e21]), this.driver?.signal(e21, t2);
        }
      }
    }
  }
  go(e21) {
    let t2 = e21 !== this.cmdGear;
    t2 && (this.cmdGear = e21, this.hud.setGear(e21), this.driver?.signal(`gear`, true, e21)), (t2 || !this.held.terus) && (this.hud.say(`tukang`, trApp(e21 > 0 ? `shout.maju` : `shout.mundur`)), this.sfx.whistle(2)), this.held.terus || (this.held.terus = true, this.driver?.signal(`terus`, true));
  }
  cast() {
    let e21 = this.carIndex++;
    return [
      e21 === 0 ? VEHICLES.city : e21 === 1 ? pickLang([VEHICLES.city, VEHICLES.mpv]) : e21 === 2 ? VEHICLES.mpv : pickLang(Object.values(VEHICLES)),
      e21 === 0 ? DRIVERS.pemula : e21 === 1 ? DRIVERS.buru : e21 === 2 ? DRIVERS.ngeyel : pickLang(Object.values(DRIVERS))
    ];
  }
  queueNext() {
    let [e21, t2] = this.cast(), n2 = this.world.bays.filter((e22) => e22 !== this.target && this.world.bayFree(e22)), r3 = new CarMesh(e21, pickLang(CAR_COLORS));
    r3.group.visible = false, this.world.dynamic.add(r3.group), this.incoming = {
      car: r3,
      vehicle: e21,
      who: t2,
      bay: n2.length ? pickLang(n2) : null,
      stage: `queue`,
      path: [],
      i: 0,
      waitAt: 0,
      admitted: false,
      obstacles: [],
      honked: 0
    }, this.plan(this.incoming);
  }
  plan(e21) {
    let t2 = e21.vehicle, n2 = Math.min(8.1, 9 - t2.rearOverhang - (t2.cargo?.overhang ?? 0)), r3 = [
      [-36, STREET.nearLane],
      [ef, STREET.nearLane],
      [ef, n2]
    ];
    if (e21.waitAt = polylineSamples(r3, 4.2).length / 2 - 1, e21.admitted && e21.bay) {
      let t3 = e21.bay.x > 0.1 ? -1 : 1, i2 = polylineSamples([r3[0], r3[1], [ef, Qd]], 4.2), a2 = polylineSamples(
        [
          [ef, n2],
          [ef, Qd],
          [e21.bay.x + t3 * 6.5, Qd]
        ],
        4.5
      );
      e21.path = [...i2.slice(0, (e21.waitAt + 1) * 2), ...a2];
    } else e21.path = polylineSamples(r3, 4.2);
  }
  follow(e21, t2, n2, r3, i2) {
    let { car: a2, path: o2 } = e21, s2 = Math.min(r3, o2.length / 2 - 1), c2 = e21.i, l2 = 1 / 0;
    for (let t3 = e21.i; t3 <= Math.min(s2, e21.i + 14); t3++) {
      let e22 = (o2[t3 * 2] - a2.x) ** 2 + (o2[t3 * 2 + 1] - a2.z) ** 2;
      e22 < l2 && (l2 = e22, c2 = t3);
    }
    e21.i = c2;
    let u2 = Math.round(2.2 / $d), d2 = o2.length / 2 - 1, f2, p2;
    if (c2 + u2 <= d2) f2 = o2[(c2 + u2) * 2], p2 = o2[(c2 + u2) * 2 + 1];
    else {
      let e22 = o2[d2 * 2], t3 = o2[d2 * 2 + 1], n3 = o2[(d2 - 1) * 2], r4 = o2[(d2 - 1) * 2 + 1], i3 = (c2 + u2 - d2) * $d;
      f2 = e22 + (e22 - n3) / $d * i3, p2 = t3 + (t3 - r4) / $d * i3;
    }
    let m2 = f2 - a2.x, h2 = p2 - a2.z, g2 = Math.cos(a2.heading), _2 = Math.sin(a2.heading), v2 = m2 * g2 - h2 * _2, y2 = Math.max(-0.62, Math.min(0.62, Math.atan2(2 * a2.def.wheelbase * v2, m2 * m2 + h2 * h2))), b2 = (s2 - c2) * $d, x2 = n2 * (1 - 0.55 * Math.abs(y2) / 0.62);
    return i2 && (x2 = Math.min(x2, Math.sqrt(8 * Math.max(0, b2 - 0.1)))), a2.step(t2, x2, y2, 3.5, 2.8, 7), a2.sync(), a2.animate(t2), a2.setLights(x2 < Math.abs(a2.v) - 0.05, false), b2;
  }
  updateIncoming(e21) {
    let t2 = this.incoming;
    if (!t2) return;
    let { car: n2 } = t2;
    if (t2.stage === `queue`) {
      if (!this.street.entryClear(-36, n2.def.length)) return;
      n2.setPose(-36, STREET.nearLane, Math.PI / 2), n2.v = 6, n2.group.visible = true, t2.stage = `street`;
    }
    if (t2.stage === `street`) {
      let r3 = 8;
      if (n2.z > STREET.nearLane - 1) {
        let [e22] = n2.bodyCenter(), t3 = this.street.gapAhead(e22, n2.def.length / 2);
        r3 = Math.max(0, Math.min(r3, (t3 - 1 - n2.v * 0.35) * 1.4));
      } else r3 = 4.5;
      let i2 = this.follow(t2, e21, r3, t2.waitAt, !t2.admitted);
      i2 < 0.6 && t2.admitted ? t2.stage = `entering` : i2 < 0.35 && Math.abs(n2.v) < 0.15 && (n2.v = 0, t2.stage = `waiting`, t2.obstacles = n2.obbs().map((e22) => ({
        obb: e22,
        kind: `car`,
        cost: 0,
        knocked: false,
        car: n2
      })), this.world.obstacles.push(...t2.obstacles));
    } else if (t2.stage === `waiting`)
      n2.animate(e21), n2.setLights(true, false), t2.honked += e21, t2.honked > 9 && this.state === `playing` && (t2.honked = 0, this.sfx.honk(0.6), this.carSays(n2, STRINGS.queue, 1.4)), t2.admitted && (this.world.obstacles = this.world.obstacles.filter((e22) => !t2.obstacles.includes(e22)), t2.obstacles = [], t2.stage = `entering`);
    else if (t2.stage === `entering`) {
      let r3 = this.follow(t2, e21, 5, 1 / 0, true);
      if (t2.i === t2.lastI ? t2.idle = (t2.idle ?? 0) + e21 : (t2.lastI = t2.i, t2.idle = 0), r3 < 0.3 && Math.abs(n2.v) < 0.15 || (t2.idle ?? 0) > 5) {
        n2.v = 0;
        let e22 = t2.bay, r4 = (e22.x - n2.x) * Math.sin(n2.heading) > 0;
        this.incoming = null, this.handOver(n2, t2.vehicle, t2.who, e22, r4 ? 1 : -1), this.queueNext();
      }
    }
  }
  nextInLane() {
    if (!(this.car || this.selfPark || this.incoming?.stage === `entering` || this.leaver && !this.leaver.freed)) {
      if (!this.leaver) {
        let e21 = this.world.parked.filter((e22) => e22.ready).sort((e22, t2) => e22.leaveAt - t2.leaveAt)[0];
        if (e21) {
          this.startExit(e21);
          return;
        }
      }
      this.admit();
    }
  }
  admit() {
    let e21 = this.incoming;
    if (!e21 || e21.admitted) return;
    let t2 = this.world;
    if (e21.bay && t2.bayFree(e21.bay) || (e21.bay = t2.pickBay()), !e21.bay) {
      let e22 = t2.parked.find((e23) => e23.ready);
      if (e22 && !this.leaver) this.startExit(e22);
      else {
        let e23 = [...t2.parked].sort((e24, t3) => e24.leaveAt - t3.leaveAt)[0];
        e23 && !e23.coming && (e23.leaveAt = Math.min(e23.leaveAt, this.elapsed)), this.admitIn = 1;
      }
    } else e21.admitted = true, this.plan(e21), this.target = e21.bay, t2.setTarget(e21.bay);
  }
  handOver(e21, t2, n2, r3, i2) {
    let a2 = new Driver(n2);
    a2.gear = i2, a2.onIgnore = () => this.hud.say(`driver`, pickLang(byLang(STRINGS.ignore)), 1.2), a2.onImpatient = () => this.hud.say(`driver`, pickLang(byLang(STRINGS.impatient)), 1.2), this.car = e21, this.driver = a2, this.target = r3, this.world.setTarget(r3), this.carScratches = 0, this.carTime = 0, this.settle = 0, this.hitCooldown = 0, this.chatIn = randRange(4, 6), this.cmdGear = i2, this.hud.setGear(i2), this.held = {
      terus: false,
      kiri: false,
      kanan: false
    }, this.dirs = [], this.label = () => trApp(`driver`, {
      who: byLang(n2.name),
      car: byLang(t2.name)
    }), this.hud.setDriver(this.label()), this.onDriver(n2.id), this.hud.say(`driver`, pickLang(byLang(n2.intro)), 2), this.hiding && (a2.wait(true), this.startSelfPark());
  }
  startExit(e21) {
    let t2 = e21.car;
    this.world.unpark(e21), t2.v = 0;
    let n2 = Math.cos(t2.heading) > 0;
    this.leaver = {
      car: t2,
      path: [],
      i: 0,
      rec: e21,
      stage: n2 ? `out` : `back`,
      waited: 0,
      helped: false,
      nagAt: 5,
      freed: false,
      wps: [],
      rev: false,
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
      kerbZ: 0
    }, this.planExit(this.leaver), e21.asked || this.carSays(t2, STRINGS.wantOut), this.later(0.8, () => this.hud.say(`tukang`, pickLang(byLang(STRINGS.onIt)), 1.5));
  }
  takeRoute(e21, t2) {
    e21.search = null;
    let n2 = e21.car;
    if (t2) {
      let n3 = t2[t2.length - 1];
      Td(t2, (e21.kerbZ - n3.z) / Math.max(0.5, Math.cos(n3.h))), e21.steps = t2, e21.stage = `out`, e21.segs = [];
      for (let n4 = 1; n4 < t2.length; n4++) {
        let r3 = e21.segs[e21.segs.length - 1];
        r3 && r3.dir === t2[n4].dir ? r3.b = n4 : e21.segs.push({
          a: n4 - 1,
          b: n4,
          dir: t2[n4].dir
        });
      }
    } else
      e21.stage = Math.cos(n2.heading) > 0 ? `out` : `back`, e21.stage === `out` && (e21.wps = this.exitPoints(n2));
  }
  planExit(e21) {
    let t2 = e21.car, n2 = t2.def, r3 = STREET.roadZ0 - 0.3 - (n2.length - n2.rearOverhang);
    e21.kerbZ = r3;
    let i2 = new AStarPlanner(
      this.world.obstacles.filter(
        (e22) => !e22.knocked && (e22.kind === `car` || e22.kind === `motor` || e22.kind === `gerobak` || e22.kind === `wall` && e22.obb.z <= AREA.maxZ + 0.5)
      ).map((e22) => e22.obb),
      0.25,
      (e22, t3) => t3 > STREET.roadZ0 - 0.1 || t3 > AREA.maxZ + 0.3 && Math.abs(e22 - tf) > AREA.openHalf - 0.2
    );
    e21.search = astarSearch(
      {
        x: t2.x,
        z: t2.z,
        h: t2.heading
      },
      {
        x: tf,
        z: r3 - 1.6,
        h: 0
      },
      t2.footprint(),
      i2
    ), this.searchSlice(e21, 6);
  }
  searchSlice(e21, t2) {
    if (!e21.search) return;
    let n2 = performance.now();
    for (; performance.now() - n2 < t2; ) {
      let t3 = e21.search.next();
      if (t3.done) {
        this.takeRoute(e21, t3.value);
        return;
      }
    }
  }
  drivePlan(e21, t2) {
    let n2 = e21.car;
    if (e21.pause > 0)
      return e21.pause -= t2, n2.v = 0, n2.animate(t2), n2.setLights(true, e21.segs[e21.seg]?.dir < 0), false;
    let r3 = e21.segs[e21.seg], i2 = (r3.b - r3.a) * Ed, a2 = r3.dir > 0 ? 3.6 : 1.6, o2 = 2.2, s2 = e21.v;
    e21.v = Math.min(a2, e21.v + o2 * t2, Math.sqrt(2 * o2 * Math.max(0, i2 - e21.s)) + 0.08), e21.s = Math.min(i2, e21.s + e21.v * t2);
    let c2 = r3.a + e21.s / Ed, l2 = Math.min(r3.b - 1, Math.floor(c2)), u2 = Math.min(1, c2 - l2), d2 = e21.steps[l2], f2 = e21.steps[l2 + 1];
    return n2.setPose(d2.x + (f2.x - d2.x) * u2, d2.z + (f2.z - d2.z) * u2, d2.h + ff(f2.h - d2.h) * u2), n2.v = r3.dir * e21.v, n2.steer += (f2.steer - n2.steer) * Math.min(1, t2 * 8), n2.sync(), n2.animate(t2), n2.setLights(e21.v < s2 - 0.01, r3.dir < 0), e21.s >= i2 - 1e-6 && (e21.seg++, e21.s = 0, e21.v = 0, e21.pause = e21.seg < e21.segs.length ? 0.45 : 0), e21.seg >= e21.segs.length;
  }
  exitPoints(e21) {
    let t2 = e21.def, n2 = STREET.roadZ0 - 0.3 - (t2.length - t2.rearOverhang), r3 = [];
    e21.z < -2.6 && r3.push([e21.x, -0.6]);
    let i2 = tf - 3.4;
    return i2 > e21.x + 2 && r3.push([i2, 1.2]), r3.push([tf, Math.min(4.4, n2 - 2.2)], [tf, n2]), r3;
  }
  seek(e21, t2) {
    let n2 = e21.car, r3 = e21.wps.length === 1, [i2, a2] = e21.wps[0], o2 = i2 - n2.x, s2 = a2 - n2.z, c2 = Math.hypot(o2, s2);
    if (!r3 && c2 < 1.1) return e21.wps.shift(), this.seek(e21, 0);
    if (r3 && c2 < 0.35 && Math.abs(n2.v) < 0.15) return -1;
    let l2 = ff(Math.atan2(o2, s2) - n2.heading), u2 = n2.def.wheelbase / Math.tan(0.6), d2 = (e22) => Math.abs(l2) < (e22 > 1 ? 1.25 : 1.45) && c2 > 2 * u2 * Math.abs(Math.sin(l2)) * e22;
    if (e21.revT -= t2, e21.rev && e21.revT <= 0 && d2(1.15) ? e21.rev = false : !e21.rev && !d2(1) && (e21.rev = true, e21.revT = 0.7), e21.rev) {
      let t3 = n2.def.rearOverhang + 0.6, r4 = n2.x - Math.sin(n2.heading) * t3, i3 = n2.z - Math.cos(n2.heading) * t3;
      (i3 < -3.6 || i3 > 4.3 || r4 < AREA.minX + 0.6 || r4 > AREA.maxX - 0.6) && (e21.rev = false, e21.revT = 0);
    }
    let f2, p2;
    return e21.rev ? (f2 = -1.8, p2 = -Math.sign(l2) * 0.6) : (p2 = Math.max(
      -0.6,
      Math.min(0.6, Math.atan2(2 * n2.def.wheelbase * Math.sin(l2), Math.max(c2, 0.5)))
    ), f2 = 4.2 * (1 - 0.5 * Math.abs(p2) / 0.6), r3 && (f2 = Math.min(f2, Math.sqrt(6 * Math.max(0, c2 - 0.25)))), d2(1) || (f2 = Math.min(f2, 1.2))), n2.step(t2, f2, p2, 3, 2.5, 6), n2.sync(), n2.animate(t2), n2.setLights(Math.abs(f2) < Math.abs(n2.v) - 0.05, e21.rev), c2 < e21.best - 0.4 ? (e21.best = c2, e21.stuck = 0) : e21.stuck += t2, c2;
  }
  updateLeaver(e21) {
    let t2 = this.leaver;
    if (!t2) return;
    let n2 = t2.car;
    if (this.holdActive && t2.stage === `kerb` && (t2.helped = true), t2.search)
      this.searchSlice(t2, 6), n2.animate(e21), n2.setLights(true, false);
    else if (t2.stage === `back`) {
      let r3 = ff(n2.heading - Math.PI / 2), i2 = Math.abs(r3) < 0.25 || n2.z > 2.6 || n2.x < AREA.minX + 2.8, a2 = n2.z > -1.4 ? 0.6 : Math.max(-0.2, Math.min(0.2, ff(n2.heading - Math.PI) * 1.5));
      n2.step(e21, i2 ? 0 : -2.2, a2, 2.5, 2, 6), n2.sync(), n2.animate(e21), n2.setLights(i2, !i2), i2 && Math.abs(n2.v) < 0.1 && (n2.v = 0, t2.wps = this.exitPoints(n2), t2.best = 1 / 0, t2.stage = `out`);
    } else if (t2.stage === `out` && t2.segs.length)
      !t2.freed && n2.z > 5.2 && (t2.freed = true, this.admitIn = 0.1), this.drivePlan(t2, e21) && (n2.v = 0, t2.stage = `kerb`);
    else if (t2.stage === `out`) {
      let r3 = this.seek(t2, e21);
      !t2.freed && n2.z > 5.2 && (t2.freed = true, this.admitIn = 0.1), r3 < 0 ? (n2.v = 0, t2.stage = `kerb`) : t2.stuck > 9 && (this.world.vanish(n2.group), this.leaver = null, this.admitIn = 0.3);
    } else {
      n2.animate(e21), n2.setLights(true, false), t2.waited += e21;
      let r3 = this.departing[this.departing.length - 1], i2 = !r3 || r3.car.x > tf + 7;
      t2.waited > 0.8 && i2 && this.street.nearClear(tf, false) ? (this.payCar(t2), this.holdActive && (this.sinceExit = 0), this.departing.push({
        car: n2,
        path: polylineSamples(
          [
            [tf, n2.z],
            [tf, STREET.nearLane],
            [70, STREET.nearLane]
          ],
          4.2
        ),
        i: 0
      }), this.leaver = null) : t2.waited > t2.nagAt && this.state === `playing` && (t2.nagAt += 7, this.sfx.honk(0.6), this.carSays(n2, STRINGS.kerbNag));
    }
  }
  updateDeparting(e21) {
    for (let t3 of this.departing) {
      let n2 = 8;
      if (t3.car.z > STREET.nearLane - 1) {
        let e22 = this.street.gapAhead(t3.car.bodyCenter()[0], t3.car.def.length / 2);
        n2 = Math.max(0, Math.min(n2, (e22 - 1 - t3.car.v * 0.35) * 1.4));
      } else n2 = 4;
      this.follow(t3, e21, n2, 1 / 0, false), t3.i === t3.lastI ? n2 > 0.5 && (t3.idle = (t3.idle ?? 0) + e21, t3.idle > 8 && (t3.car.x = STREET.span + 1)) : (t3.lastI = t3.i, t3.idle = 0);
    }
    let t2 = this.departing.filter((e22) => e22.car.x > STREET.span);
    for (let e22 of t2) this.world.dynamic.remove(e22.car.group), disposeTree(e22.car.group);
    this.departing = this.departing.filter((e22) => e22.car.x <= STREET.span);
  }
  collect(e21, t2, n2) {
    n2 ? (this.unpaid++, this.exits += `\u{1F3C3}`, this.hud.float(trApp(`fx.unpaid`), t2[0], t2[1], `bad`)) : (this.money += e21, this.hud.setMoney(this.money), this.hud.float(`+${formatMoney(e21)}`, t2[0], t2[1], `good`), this.sfx.coin());
  }
  payCar(e21) {
    if (this.state !== `playing`) return;
    let { car: t2, rec: n2 } = e21, [r3, i2] = t2.bodyCenter(), a2 = this.world.project(r3, 2, i2), o2 = () => this.later(0.9, () => this.hud.say(`tukang`, pickLang(byLang(STRINGS.tGrumble)), 1.6)), s2 = () => this.later(0.9, () => this.hud.say(`tukang`, pickLang(byLang(STRINGS.tThanks)), 1.6));
    if (this.hiding) {
      this.carSays(t2, STRINGS.leaveAlone, 2.2), this.collect(0, a2, true);
      return;
    }
    if (!e21.helped) {
      this.carSays(t2, STRINGS.noHelp, 2.2), this.collect(0, a2, true), o2();
      return;
    }
    let c2 = n2.fee, l2 = Math.random();
    if (n2.selfParked)
      this.carSays(t2, STRINGS.paySelf, 2.4), this.later(1.1, () => this.hud.say(`tukang`, pickLang(byLang(STRINGS.tJagain)), 1.8)), this.paidCars++, this.exits += `\u{1F4B5}`, this.collect(c2, a2, false);
    else if (c2 <= 0) this.carSays(t2, STRINGS.payScratched, 2.2), this.collect(0, a2, true), o2();
    else {
      if (n2.fee < PRICES.mobil && l2 < 0.6) this.carSays(t2, STRINGS.payScratched, 2.2), o2();
      else if (n2.tip || l2 < 0.12) c2 += PRICES.tip, this.carSays(t2, STRINGS.payTip, 2.2), s2();
      else if (l2 < 0.22) c2 = 1e3, this.carSays(t2, STRINGS.payShort, 2.2), o2();
      else if (l2 < 0.3)
        this.carSays(t2, STRINGS.payQris, 2.2), this.later(0.9, () => this.hud.say(`tukang`, pickLang(byLang(STRINGS.tCash)), 1.6));
      else if (l2 < 0.36) {
        this.carSays(t2, STRINGS.payLater, 2.2), this.collect(0, a2, true), o2();
        return;
      } else this.carSays(t2, STRINGS.payExact, 2), s2();
      this.paidCars++, this.exits += `\u{1F4B5}`, this.collect(c2, a2, false);
    }
  }
  spawnBikeOut() {
    let e21 = this.world.claimMotor();
    if (!e21) return;
    let t2 = pickLang(lf), n2 = pathLength([e21.x + 0.55, e21.z - 1.1], false, [...t2].reverse()).reverse();
    this.crowd.spawn(n2, {
      speed: 1.9,
      onArrive: () => {
        this.state === `over` ? e21.reserved = false : this.rideOut(e21);
      }
    });
  }
  rideOut(e21) {
    if (!this.world.takeMotor(e21)) {
      e21.reserved = false;
      return;
    }
    let t2 = $u();
    t2.obj.rotation.order = `YXZ`, this.world.dynamic.add(t2.obj);
    let n2 = {
      m: t2,
      slot: e21,
      x: e21.x,
      z: e21.z,
      h: 0,
      v: 0,
      path: [
        [e21.x + 0.9, 3.2],
        [8.2, 3.2],
        [tf + 1, 5.6],
        [tf + 1, STREET.roadZ0 - 0.75]
      ],
      seg: 0,
      stage: `back`,
      waited: 0,
      helped: false,
      selfParked: e21.selfParked
    };
    e21.selfParked = false, this.bikes.push(n2), this.hud.pop(
      pickLang(byLang(STRINGS.bikeOut)),
      () => this.world.project(n2.x, 2.2, n2.z),
      1.8
    );
  }
  spawnBikeIn() {
    let e21 = this.world.freeMotorSlot();
    if (!e21) return;
    let t2 = this.street.poach(-34, -18);
    if (!t2) return;
    e21.reserved = true;
    let n2 = this.street.bikeLaneZ;
    this.bikes.push({
      m: t2,
      slot: e21,
      x: t2.x,
      z: n2,
      h: Math.PI / 2,
      v: t2.v,
      path: [
        [ef - 2.8, n2],
        [ef - 1.1, 9],
        [ef - 1.1, 5.2],
        [-8.4, 3.3],
        [e21.x, 3.3],
        [e21.x, e21.z]
      ],
      seg: 0,
      stage: `in`,
      waited: 0,
      helped: false
    });
  }
  updateBikes(e21) {
    for (let t2 of this.bikes) {
      this.holdActive && t2.stage === `kerb` && (t2.helped = true);
      let n2 = 0;
      if (t2.stage === `back`)
        t2.v = -1.2, t2.z -= 1.2 * e21, t2.z <= t2.slot.z - 1.7 && (t2.stage = `out`, t2.slot.reserved = false);
      else if (t2.stage === `kerb`)
        t2.v = 0, t2.waited += e21, t2.waited > 1 && this.street.nearClear(tf + 1, true) && (this.payBike(t2), this.holdActive && (this.sinceExit = 0), t2.path = [[tf + 2.8, this.street.bikeLaneZ]], t2.seg = 0, t2.stage = `merge`);
      else {
        let [r3, i2] = t2.path[t2.seg], a2 = r3 - t2.x, o2 = i2 - t2.z, s2 = Math.hypot(a2, o2), c2 = ff(Math.atan2(a2, o2) - t2.h), l2 = t2.seg === t2.path.length - 1, u2 = t2.z > STREET.roadZ0 - 0.4 ? 6 : 3.8;
        if (Math.abs(c2) > 0.5 && (u2 = 1.6), l2 && t2.stage !== `merge` && (u2 = Math.min(u2, 0.6 + s2 * 1.6)), t2.v += Math.max(-9 * e21, Math.min(4 * e21, u2 - t2.v)), n2 = Math.max(-3.4, Math.min(3.4, c2 * 4)) * Math.min(1, 0.35 + Math.abs(t2.v) / 2), t2.h += n2 * e21, t2.x += Math.sin(t2.h) * t2.v * e21, t2.z += Math.cos(t2.h) * t2.v * e21, s2 < (l2 ? 0.25 : 0.7)) {
          if (!l2) t2.seg++;
          else if (t2.stage === `in`) {
            t2.m.obj.removeFromParent(), disposeTree(t2.m.obj), this.world.parkMotor(t2.slot), t2.slot.selfParked = this.hiding;
            let e22 = this.crowd.spawn(
              pathLength([t2.slot.x + 0.55, t2.slot.z - 1.1], false, pickLang(cf))
            );
            this.state === `playing` && this.hiding ? this.hud.pop(
              pickLang(byLang(STRINGS.bikeInAlone)),
              () => this.world.project(e22.x, 2.2, e22.z),
              2
            ) : this.state === `playing` && Math.random() < 0.6 && this.hud.pop(
              pickLang(byLang(STRINGS.bikeIn)),
              () => this.world.project(e22.x, 2.2, e22.z),
              1.6
            ), t2.stage = `kerb`, t2.waited = -1e9, t2.seg = -1;
          } else
            t2.stage === `out` ? t2.stage = `kerb` : (this.world.dynamic.remove(t2.m.obj), this.world.scene.add(t2.m.obj), this.street.adopt(t2.m, t2.x, Math.max(2, t2.v)), t2.seg = -1);
        }
      }
      t2.seg >= 0 && (t2.m.obj.position.set(t2.x, 0, t2.z), t2.m.obj.rotation.set(0, t2.h, -n2 * 0.12 * Math.min(1, Math.abs(t2.v) / 3)));
    }
    this.bikes = this.bikes.filter((e22) => e22.seg >= 0);
  }
  payBike(e21) {
    if (this.state !== `playing`) return;
    let t2 = this.world.project(e21.x, 1.8, e21.z), n2 = (t3) => this.hud.pop(pickLang(byLang(t3)), () => this.world.project(e21.x, 2.2, e21.z), 1.8), r3 = (e22) => this.later(0.8, () => this.hud.say(`tukang`, pickLang(byLang(e22)), 1.5)), i2 = Math.random();
    if (this.hiding) {
      n2(STRINGS.bikeLeaveAlone), this.collect(0, t2, true);
      return;
    }
    if (!e21.helped || i2 < 0.06) {
      n2(STRINGS.bikeRun), this.collect(0, t2, true), r3(STRINGS.tWoy);
      return;
    }
    let a2 = PRICES.motor;
    e21.selfParked ? (n2(STRINGS.bikePaySelf), this.later(1.1, () => this.hud.say(`tukang`, pickLang(byLang(STRINGS.tJagainHelm)), 1.8))) : i2 < 0.2 ? (a2 = 1e3, n2(STRINGS.bikeHaggle), r3(STRINGS.tGrumble)) : i2 < 0.3 ? (a2 += PRICES.tip, n2(STRINGS.payTip), r3(STRINGS.tThanks)) : n2(STRINGS.payExact), this.paidBikes++, this.exits += `\u{1F3CD}\uFE0F`, this.collect(a2, t2, false);
  }
  fine(e21) {
    this.money -= e21.cost, this.props++, this.hud.setMoney(this.money), this.hud.float(
      `${trApp(`prop.` + e21.kind)} -${formatMoney(e21.cost)}`,
      ...this.world.project(e21.obb.x, 1.2, e21.obb.z),
      `bad`
    ), this.sfx.clack(), this.world.shake = Math.max(this.world.shake, 0.25), e21.kind === `gerobak` ? this.hud.pop(
      pickLang(byLang(STRINGS.bakso)),
      () => this.world.project(e21.obb.x, 2.4, e21.obb.z),
      2.4,
      `warga`
    ) : e21.kind === `motor` && this.ownerQuiet <= 0 && (this.ownerQuiet = 2.5, this.hud.pop(
      pickLang(byLang(STRINGS.bikeOwner)),
      () => this.world.project(5.7, 2.8, 8.3),
      2.4,
      `warga`
    ));
  }
  moveCar(e21) {
    let t2 = this.car, n2 = this.driver, r3 = n2.def, i2 = n2.update(e21), a2 = t2.x, o2 = t2.z, s2 = t2.heading;
    t2.step(e21, i2.speed, i2.steer, r3.steerRate, NPC_DRIVE.accel * r3.speedMul, NPC_DRIVE.brake);
    let c2 = Math.abs(t2.v), l2 = Math.sign(t2.v) || 1, u2 = null;
    for (let e22 of t2.obbs())
      for (let n3 of this.world.obstacles)
        !n3.knocked && obbOverlap(e22, n3.obb) && (n3.kind === `cone` || n3.kind === `motor` || n3.kind === `gerobak` ? (this.world.knock(n3, Math.sin(t2.heading) * l2, Math.cos(t2.heading) * l2, c2), t2.v *= n3.kind === `cone` ? 0.92 : n3.kind === `motor` ? 0.7 : 0.45, t2.jolt(-l2 * c2 * 0.25)) : u2 = n3);
    if (u2) {
      t2.x = a2, t2.z = o2, t2.heading = s2, t2.v = -l2 * Math.min(0.5, c2 * 0.25), t2.jolt(-l2 * (0.5 + c2 * 0.5));
      let e22 = c2 > 0.25 && this.hitCooldown <= 0, r4 = u2.car;
      if (r4 && (r4.jolt((Math.random() - 0.5) * c2, (0.5 + c2 * 0.5) * (Math.random() < 0.5 ? -1 : 1)), e22)) {
        let e23 = this.world.parked.find((e24) => e24.car === r4);
        e23 && (e23.fee = Math.max(0, e23.fee - PRICES.scratch)), this.carSays(r4, STRINGS.victim, 1.8);
      }
      if (n2.shock(), c2 >= 2) {
        this.rage();
        return;
      }
      e22 && this.scratch();
    }
    t2.sync(), t2.setLights(Math.abs(i2.speed) < Math.abs(t2.v) + 0.01, n2.gear < 0);
  }
  scratch() {
    let e21 = this.car;
    this.hitCooldown = 0.8, this.carScratches++, this.scratches++;
    let [t2, n2] = e21.bodyCenter();
    this.hud.float(
      `${trApp(`fx.scratch`)} ${trApp(`fx.docked`)}`,
      ...this.world.project(t2, 1.6, n2),
      `bad`
    ), this.hud.say(`driver`, pickLang(byLang(STRINGS.ouch)), 1.5), this.hud.flash(), this.sfx.crunch(), this.world.shake = 0.35, navigator.vibrate?.(60);
  }
  rage() {
    let e21 = this.car, [t2, n2] = e21.bodyCenter();
    this.outcomes.push(`angry`), this.scratches++, this.hud.float(trApp(`fx.nopay`), ...this.world.project(t2, 1.6, n2), `bad`), this.hud.say(`driver`, pickLang(byLang(STRINGS.angry)), 1.8), this.hud.flash(), this.sfx.crunch(true), this.sfx.honk(), this.world.shake = 0.8, navigator.vibrate?.([80, 40, 120]), e21.sync(), this.world.vanish(e21.group), this.leave(1.2);
  }
  ownerOut(e21) {
    let t2 = e21.car;
    e21.went = pickLang(lf), this.later(0.5, () => t2.doorTo = 1), this.later(0.8, () => {
      let n2 = this.crowd.spawn(pathLength(t2.doorPoint(), true, e21.went));
      Math.random() < 0.7 && this.hud.pop(
        pickLang(byLang(STRINGS.ownerOff)),
        () => this.world.project(n2.x, 2.2, n2.z),
        1.8
      );
    }), this.later(1.5, () => t2.doorTo = 0);
  }
  ownerBack(e21) {
    e21.coming = true;
    let t2 = e21.car, n2 = e21.went ?? pickLang(lf), r3 = pathLength(t2.doorPoint(), true, [...n2].reverse()).reverse(), i2 = this.crowd.spawn(r3, {
      speed: 2,
      vanishAtEnd: false,
      onArrive: (n3) => {
        t2.doorTo = 1, this.later(0.35, () => this.crowd.vanish(n3)), this.later(0.9, () => {
          t2.doorTo = 0, e21.ready = true, e21.asked || (e21.asked = true, this.carSays(t2, STRINGS.wantOut, 2.2)), this.admitIn <= 0 && !this.car && (this.admitIn = 0.3);
        });
      }
    });
    this.state === `playing` && Math.random() < 0.4 && this.hud.pop(
      pickLang(byLang(STRINGS.ownerBack)),
      () => this.world.project(i2.x, 2.2, i2.z),
      1.8
    );
  }
  leave(e21) {
    this.car = null, this.driver = null, this.target = null, this.world.setTarget(null), this.admitIn = e21, this.label = () => trApp(`waiting`), this.hud.setDriver(this.label());
  }
  checkParked(e21) {
    let t2 = this.car, n2 = this.target, [r3, i2] = t2.bodyCenter(), a2 = AREA.bayW / 2, o2 = AREA.bayD / 2, s2 = Math.abs(r3 - n2.x) < a2 && Math.abs(i2 - n2.z) < o2, c2 = Math.abs(Math.sin(t2.heading)) < 0.42, l2 = !this.driver.going && Math.abs(t2.v) < 0.05;
    if (!(s2 && c2 && l2)) {
      this.settle = 0;
      return;
    }
    if (this.settle += e21, this.settle < 0.45) return;
    let u2 = obbCorners(t2.bodyObb()).every(
      ([e22, t3]) => Math.abs(e22 - n2.x) <= a2 + 0.05 && Math.abs(t3 - n2.z) <= o2 + 0.05
    ), d2 = u2 && this.carScratches === 0, f2 = Math.max(0, PRICES.mobil - this.carScratches * PRICES.scratch - (u2 ? 0 : PRICES.crooked));
    this.outcomes.push(d2 ? `clean` : `lecet`), this.hud.setCars(this.outcomes.filter((e22) => e22 !== `angry`).length), this.hud.float(
      `${trApp(u2 ? `fx.rapi` : `fx.miring`)} ${trApp(`fx.later`)}`,
      ...this.world.project(r3, 1.8, i2),
      u2 ? `good` : `bad`
    ), this.hud.say(
      `driver`,
      pickLang(byLang(d2 ? STRINGS.thanks : u2 ? STRINGS.ouch : STRINGS.crooked)),
      1.4
    ), this.later(0.9, () => this.hud.say(`tukang`, pickLang(byLang(STRINGS.parked)), 1.5)), t2.setLights(false, false);
    let p2 = this.world.addParked(
      t2,
      f2,
      d2 && this.carTime < PRICES.fastSec,
      this.elapsed + randRange(12, 24)
    );
    this.leave(0.6), this.ownerOut(p2);
  }
  end() {
    if (this.state = `over`, this.overFor = 0, this.busted || (this.timeLeft = 0), this.holdLeft = 0, this.holdPhase = `back`, this.hud.setTime(this.timeLeft), this.hud.setHold(0), this.hud.setAlert(null), this.hud.setHiding(false), this.hud.hush = null, this.busted) {
      this.holdPhase = `off`, this.hiding = false, this.tukang.crouched = false;
      for (let e21 of [`terus`, `kiri`, `kanan`])
        this.held[e21] && this.driver?.signal(e21, false), this.held[e21] = false;
      this.dirs = [];
    } else {
      this.sfx.whistle(3);
      let e21 = Math.max(this.money, Number(localStorage.getItem(bestKey(CURRENT_LEVEL)) ?? -1 / 0));
      localStorage.setItem(bestKey(CURRENT_LEVEL), String(e21)), this.showResult();
    }
  }
  showResult() {
    if (this.state !== `over`) return;
    this.shot ||= (this.world.render(), captureFrame(this.world.renderer.domElement));
    let e21 = this.outcomes.filter((e22) => e22 !== `angry`).length, t2 = this.outcomes.map((e22) => Xd[e22]).join(``) + (this.exits ? ` ` + this.exits : ``), n2 = trApp(rank(this.money)), r3 = this.busted ? trApp(this.bustJoke) : void 0, i2 = /^(localhost|127\.|192\.168\.|10\.)/.test(location.hostname) ? `tukang-parkir.akalstack.com` : location.host, a2 = [
      trApp(`share.title`),
      trApp(`share.line`, {
        cars: e21,
        paid: this.paidCars + this.paidBikes,
        unpaid: this.unpaid,
        scratch: this.scratches,
        money: formatMoney(this.money)
      }),
      t2,
      r3 ? `${trApp(`share.busted`)} ${r3}` : trApp(`share.rank`, {
        rank: n2
      }),
      i2
    ].filter(Boolean).join(`
`);
    this.hud.showResult({
      money: this.money,
      best: Number(localStorage.getItem(bestKey(CURRENT_LEVEL)) ?? (this.busted ? 0 : this.money)),
      rank: n2,
      emoji: t2,
      cars: e21,
      paidCars: this.paidCars,
      paidBikes: this.paidBikes,
      unpaid: this.unpaid,
      scratches: this.scratches,
      props: this.props,
      shareText: a2,
      busted: r3,
      shot: this.shot,
      url: i2
    });
  }
  setHiding(e21) {
    e21 !== this.hiding && this.state !== `over` && (this.hiding = e21, this.tukang.crouched = e21, this.hud.setHiding(e21), e21 || this.driver?.wait(false), this.hud.hush = e21 ? (e22, t2) => t2 === `tukang` : null, e21 && (this.state === `ready` && (this.state = `playing`, this.hud.showHint(false)), this.held = {
      terus: false,
      kiri: false,
      kanan: false
    }, this.dirs = [], this.driver?.wait(true), this.startSelfPark(), this.holdPhase !== `off` && (this.holdPhase = `off`, this.holdLeft = 0, this.sinceExit = 1 / 0)));
  }
  startSelfPark() {
    let e21 = this.car, t2 = this.target;
    if (!e21 || !t2 || this.selfPark) return;
    let n2 = new AStarPlanner(
      this.world.obstacles.filter(
        (e22) => !e22.knocked && (e22.kind === `car` || e22.kind === `motor` || e22.kind === `gerobak` || e22.kind === `wall`)
      ).map((e22) => e22.obb),
      0.2,
      (e22, t3) => t3 > AREA.maxZ - 0.3
    ), r3 = [
      {
        x: t2.x,
        z: t2.z - e21.bodyCz,
        h: 0
      },
      {
        x: t2.x,
        z: t2.z + e21.bodyCz,
        h: Math.PI
      }
    ], i2 = {
      car: e21,
      bay: t2,
      rec: null,
      stage: `out`,
      waited: 0,
      helped: false,
      nagAt: 0,
      freed: false,
      wps: [],
      rev: false,
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
          x: e21.x,
          z: e21.z,
          h: e21.heading
        },
        r3.shift(),
        e21.footprint(),
        n2
      ),
      kerbZ: 0,
      path: [],
      i: 0,
      goals: r3,
      occ: n2
    };
    this.selfPark = i2, this.car = null, this.driver = null, this.label = () => trApp(`waiting`), this.hud.setDriver(this.label());
  }
  updateSelfPark(e21) {
    let t2 = this.selfPark;
    if (t2) {
      if (t2.search) {
        let n2 = performance.now();
        for (; t2.search && performance.now() - n2 < 4; ) {
          let e22 = t2.search.next();
          if (!e22.done) continue;
          t2.search = null;
          let n3 = e22.value;
          if (!n3 || n3.length < 2) {
            let e23 = t2.goals.shift();
            if (e23) {
              t2.search = astarSearch(
                {
                  x: t2.car.x,
                  z: t2.car.z,
                  h: t2.car.heading
                },
                e23,
                t2.car.footprint(),
                t2.occ
              );
              continue;
            }
            n3 = this.creepInto(t2.car, t2.bay);
          }
          t2.steps = n3;
          for (let e23 = 1; e23 < n3.length; e23++) {
            let r3 = t2.segs[t2.segs.length - 1];
            r3 && r3.dir === n3[e23].dir ? r3.b = e23 : t2.segs.push({
              a: e23 - 1,
              b: e23,
              dir: n3[e23].dir
            });
          }
        }
        t2.car.animate(e21);
      } else this.drivePlan(t2, e21) && this.parkedBySelf(t2);
    }
  }
  parkedBySelf(e21) {
    this.selfPark = null;
    let t2 = e21.car;
    t2.v = 0, t2.setLights(false, false);
    let [n2, r3] = t2.bodyCenter();
    this.outcomes.push(`clean`), this.hud.setCars(this.outcomes.filter((e22) => e22 !== `angry`).length), this.hud.float(trApp(`fx.self`), ...this.world.project(n2, 1.8, r3), `good`), this.carSays(t2, STRINGS.selfPark, 2.2);
    let i2 = this.world.addParked(t2, PRICES.mobil, false, this.elapsed + randRange(12, 24));
    i2.selfParked = true, this.leave(0.6), this.ownerOut(i2);
  }
  creepInto(e21, t2) {
    let n2 = {
      x: t2.x,
      z: t2.z - e21.bodyCz,
      h: 0
    }, r3 = Math.max(2, Math.ceil(Math.hypot(n2.x - e21.x, n2.z - e21.z) / Ed)), i2 = ff(n2.h - e21.heading), a2 = [];
    for (let t3 = 0; t3 <= r3; t3++) {
      let o2 = t3 / r3;
      a2.push({
        x: e21.x + (n2.x - e21.x) * o2,
        z: e21.z + (n2.z - e21.z) * o2,
        h: e21.heading + i2 * o2,
        dir: -1,
        steer: 0
      });
    }
    return a2;
  }
  get hidden() {
    let e21 = this.tukang.group.position;
    return this.hiding && Math.hypot(e21.x - HIDING_SPOT[0], e21.z - HIDING_SPOT[1]) < 1.6;
  }
  clearPatrol() {
    this.patrol && (this.patrol.m.obj.removeFromParent(), disposeTree(this.patrol.m.obj)), this.patrol = null, this.sfx.sirenOff();
  }
  spawnPatrol() {
    let e21 = patrolTruck();
    e21.obj.rotation.y = Math.PI / 2, e21.obj.position.set(yf, 0, STREET.nearLane), e21.obj.visible = false, this.world.scene.add(e21.obj), this.patrol = {
      m: e21,
      x: yf,
      v: 0,
      stage: `warn`,
      t: 0
    };
    let [t2, n2, r3] = sf[3];
    this.hud.pop(
      pickLang(byLang(STRINGS.warnSatpol)),
      () => this.world.project(t2, n2, r3),
      2.2,
      `warga`
    );
  }
  patrolEta(e21) {
    let t2 = Math.max(0, -10 - e21.x) / bf;
    return e21.stage === `warn` ? vf - e21.t + t2 : e21.stage === `come` ? t2 : 0;
  }
  updatePatrol(e21) {
    if (!this.patrol) {
      if (this.state !== `playing`) return;
      this.patrolIn -= e21, this.patrolIn <= 0 && this.timeLeft > 12 && this.spawnPatrol();
      return;
    }
    let t2 = this.patrol;
    if (t2.t += e21, t2.stage === `warn`)
      t2.t >= vf && (t2.stage = `come`, t2.t = 0, t2.v = bf, t2.m.obj.visible = true);
    else if (t2.stage === `come`) {
      let e22 = gf - t2.x;
      t2.v = Math.min(bf, Math.sqrt(4.4 * Math.max(0, e22)) + 0.3), e22 < 0.05 && (t2.v = 0, t2.stage = `look`, t2.t = 0, this.busted || this.hud.pop(
        pickLang(byLang(STRINGS.satpolCome)),
        () => this.world.project(t2.x, 2.9, STREET.nearLane),
        2.4,
        `warga`
      ));
    } else
      t2.stage === `look` ? (t2.v = 0, (this.busted ? !this.tukang.group.visible && t2.t > 1 : t2.t > _f) && (t2.stage = `go`, this.busted || this.hud.pop(
        pickLang(byLang(STRINGS.satpolGone)),
        () => this.world.project(t2.x, 2.9, STREET.nearLane),
        1.8,
        `warga`
      ))) : (t2.v = Math.min(10, t2.v + 4.5 * e21), t2.x > 12 && this.state === `playing` && this.hiding && !this.busted && (this.setHiding(false), this.hud.setAlert(null), this.hud.say(`tukang`, pickLang(byLang(STRINGS.onIt)), 1.4)));
    t2.x += t2.v * e21, t2.m.obj.position.x = t2.x, t2.m.tick?.(t2.v, e21);
    let n2 = 1 - Math.min(1, Math.abs(t2.x) / STREET.span);
    if (t2.stage === `warn` ? this.sfx.siren(0.1 + 0.3 * Math.min(1, t2.t / vf)) : t2.stage !== `go` || t2.x < 25 ? this.sfx.siren(0.4 + n2 * 0.6) : this.sfx.sirenOff(), this.state === `playing`) {
      let e22 = Math.abs(t2.x) < xf && t2.stage !== `go`;
      if (t2.stage !== `go` || t2.x < 12) {
        let e23 = Math.ceil(this.patrolEta(t2));
        this.hud.setAlert(
          this.hiding ? trApp(`alert.hiding`) : e23 > 0 ? trApp(`alert.satpolIn`, {
            n: e23
          }) : trApp(`alert.satpol`),
          this.hiding
        );
      }
      e22 && !this.hidden && this.bust();
    }
    t2.x > STREET.span + 4 && (this.clearPatrol(), this.patrolIn = randRange(TUNING.patrolNextIn[0], TUNING.patrolNextIn[1]), this.state === `playing` && this.hud.setAlert(null));
  }
  bust() {
    if (this.busted = true, this.bustT = 0, this.bustJoke = `bust.${Math.floor(Math.random() * 4)}`, this.hud.setAlert(null), this.patrol) {
      let e21 = this.patrol;
      e21.stage = `look`, e21.t = 0, this.hud.pop(
        pickLang(byLang(STRINGS.satpolBust)),
        () => this.world.project(e21.x, 2.9, STREET.nearLane),
        2.4,
        `warga`
      );
    }
    this.hud.say(`tukang`, pickLang(byLang(STRINGS.tBusted)), 2.2), this.sfx.whistle(1, true), this.end();
  }
  soundId(e21) {
    let t2 = this.soundIds.get(e21);
    return t2 || this.soundIds.set(e21, t2 = `e` + this.soundN++), t2;
  }
  sounds(e21) {
    let t2 = (e22, t3) => 1 - Math.min(1, Math.hypot(e22, t3 - 4) / 34), n2 = (e22) => this.sfx.engine(this.soundId(e22), e22.def.id === `pickup` ? `truck` : `car`, e22.v, t2(e22.x, e22.z));
    this.car && n2(this.car), this.selfPark && n2(this.selfPark.car), this.incoming && this.incoming.stage !== `queue` && this.incoming.car.group.visible && n2(this.incoming.car), this.leaver && n2(this.leaver.car);
    for (let e22 of this.departing) n2(e22.car);
    for (let e22 of this.bikes) this.sfx.engine(this.soundId(e22), `motor`, e22.v, t2(e22.x, e22.z) * 0.8);
    this.patrol && this.patrol.stage !== `warn` && this.sfx.engine(`satpol`, `truck`, this.patrol.v, t2(this.patrol.x, STREET.nearLane)), this.sfx.enginesDone(), this.passIn -= e21, this.passIn <= 0 && (this.passIn = randRange(TUNING.passByIn[0], TUNING.passByIn[1]), this.sfx.passBy());
  }
  get holdActive() {
    return this.holdPhase === `kerb` || this.holdPhase === `road` || this.holdPhase === `back`;
  }
  updateHold(e21) {
    let t2 = this.tukang.group.position;
    this.holdPhase === `run` ? ((e22, n2) => Math.hypot(t2.x - e22[0], t2.z - e22[1]) < n2)(af, 0.6) && (this.holdPhase = `kerb`, this.holdT = 0) : this.holdPhase === `kerb` ? (this.holdT += e21, this.holdT > 0.6 && !this.street.passing(rf) && (this.holdPhase = `road`)) : this.holdPhase === `road` ? (this.sinceExit += e21, !(this.leaver?.stage === `kerb` || this.bikes.some((e22) => e22.stage === `kerb` || e22.stage === `out`)) && this.sinceExit > 1.2 && this.sinceExit < 1 / 0 && (this.holdPhase = `back`)) : this.holdPhase === `back` && t2.z < STREET.roadZ0 - 0.1 && (this.holdPhase = `off`, this.sinceExit = 1 / 0), this.holdActive && this.holdPhase !== `back` && (this.holdLeft = Math.max(0, this.holdLeft - e21), this.holdLeft <= 0 && (this.holdPhase = `back`)), this.hud.setHold(
      this.holdPhase === `off` || this.holdPhase === `back` ? 0 : this.holdLeft / 6
    );
  }
  solids() {
    let e21 = [];
    for (let t2 of this.world.obstacles)
      !t2.knocked && t2.kind !== `cone` && t2.obb.z < AREA.maxZ - 0.1 && e21.push(t2.obb);
    return this.car && e21.push(...this.car.obbs()), this.selfPark && e21.push(...this.selfPark.car.obbs()), this.incoming?.stage === `entering` && e21.push(...this.incoming.car.obbs()), this.leaver && e21.push(...this.leaver.car.obbs()), e21;
  }
  blocker(e21) {
    let [t2, n2] = e21.bodyCenter(), r3 = Math.abs(Math.sin(e21.heading)), i2 = Math.abs(Math.cos(e21.heading)), a2 = e21.def.length / 2 + (e21.def.cargo?.overhang ?? 0), o2 = e21.def.width / 2;
    return {
      x: t2,
      z: n2,
      hx: r3 * a2 + i2 * o2,
      hz: i2 * a2 + r3 * o2,
      moving: Math.abs(e21.v) > 0.3
    };
  }
  chatter(e21) {
    if (!this.hiding)
      for (let e22 of this.world.parked) !e22.coming && e22.leaveAt <= this.elapsed && this.ownerBack(e22);
    if (this.car && this.driver && (this.chatIn -= e21, this.chatIn <= 0 && (this.chatIn = randRange(7, 11), this.hud.say(`driver`, pickLang(byLang(this.driver.def.chatter)), 1.8))), this.vendorIn -= e21, this.vendorIn <= 0) {
      this.vendorIn = randRange(9, 15);
      let e22 = Math.floor(Math.random() * sf.length), [t2, n2, r3] = sf[e22];
      this.hud.pop(byLang(STRINGS.vendor)[e22], () => this.world.project(t2, n2, r3), 1.8, `warga`);
    }
  }
  update(e21) {
    let t2 = this.world, n2 = this.incoming;
    this.street.blockers = this.departing.map((e22) => this.blocker(e22.car)), this.patrol && this.patrol.stage !== `warn` && this.street.blockers.push({
      x: this.patrol.x,
      z: STREET.nearLane,
      hx: 2.7,
      hz: 1,
      moving: this.patrol.v > 0.3
    }), n2 && n2.stage !== `queue` && n2.car.z > 5 && this.street.blockers.push(this.blocker(n2.car)), this.street.hold = this.holdActive ? nf : null, this.street.update(e21), t2.update(e21), this.hud.update(e21);
    for (let t3 of this.timers) t3.t -= e21;
    let r3 = this.timers.filter((e22) => e22.t <= 0);
    if (this.timers = this.timers.filter((e22) => e22.t > 0), this.state !== `over`)
      for (let e22 of r3) e22.fn();
    if (this.state === `over`) {
      this.overFor += e21, this.incoming?.stage !== `entering` && this.updateIncoming(e21), this.updateDeparting(e21), this.updateBikes(e21), this.crowd.update(e21), this.holdPhase !== `off` && this.updateHold(e21), this.street.hold = this.holdActive ? nf : null;
      let t3 = this.holdPhase === `off` ? null : af;
      if (this.busted) {
        this.bustT += e21;
        let n3 = this.patrol;
        if (n3 && this.tukang.group.visible) {
          t3 = [n3.x - 3, STREET.nearLane - 1.2];
          let e22 = this.tukang.group.position;
          (this.bustT > 5 || this.bustT > 1.2 && Math.hypot(e22.x - t3[0], e22.z - t3[1]) < 0.8) && (this.tukang.group.visible = false);
        }
        this.bustT > 2.2 && !this.shown && (this.shown = true, this.showResult());
      }
      this.updatePatrol(e21), this.hud.nudge(`hold`, false), this.hud.nudge(`hide`, false), this.tukang.update(
        e21,
        null,
        1,
        t3 && !this.busted ? `stop` : `idle`,
        this.busted ? [] : this.solids(),
        t3
      ), this.guide.update(e21, null, 1, this.held), this.sounds(e21);
      return;
    }
    if (this.state === `playing`) {
      if (this.elapsed += e21, this.timeLeft -= e21, this.hud.setTime(this.timeLeft), this.timeLeft <= 0) {
        this.end();
        return;
      }
      if (this.updateHold(e21), this.ownerQuiet -= e21, this.updatePatrol(e21), this.state !== `playing`)
        return;
      this.hiding || (this.bikeOutIn -= e21), this.bikeOutIn <= 0 && (this.bikeOutIn = randRange(9, 15), this.bikes.filter((e22) => e22.stage !== `in`).length < 2 && this.spawnBikeOut()), this.bikeInIn -= e21, this.bikeInIn <= 0 && (this.bikeInIn = randRange(8, 14), this.bikes.some((e22) => e22.stage === `in`) || this.spawnBikeIn()), this.chatter(e21);
    }
    if (this.hitCooldown -= e21, this.stopPose -= e21, this.car && this.driver) {
      this.carTime += e21;
      let t3 = Math.max(1, Math.ceil(e21 / (1 / 90)));
      for (let n3 = 0; n3 < t3 && this.car; n3++) this.moveCar(e21 / t3);
      this.car?.animate(e21), this.car && this.checkParked(e21);
    } else
      this.admitIn > 0 && !this.hiding && (this.admitIn -= e21, this.admitIn <= 0 && this.nextInLane());
    this.updateSelfPark(e21), this.updateIncoming(e21), this.updateLeaver(e21), this.updateDeparting(e21), this.updateBikes(e21), this.crowd.update(e21);
    let i2 = this.holdPhase !== `off`, a2 = this.incoming?.stage === `entering` ? this.incoming.car : null, o2 = this.car ?? a2 ?? (this.leaver && this.leaver.stage !== `kerb` ? this.leaver.car : null), s2 = i2 || this.stopPose > 0 ? `stop` : this.held.kiri ? `kiri` : this.held.kanan ? `kanan` : this.held.terus || !this.car && o2 ? `terus` : `idle`, c2 = this.car ? this.driver?.gear ?? 1 : this.leaver?.stage === `back` ? -1 : 1, l2 = this.hiding ? HIDING_SPOT : this.holdPhase === `road` ? of : i2 ? af : null, u2 = this.car ? this.target : a2 ? this.incoming.bay : null, d2 = this.leaver?.stage === `kerb` || this.bikes.some((e22) => e22.stage === `kerb`);
    this.hud.nudge(
      `hold`,
      this.state === `playing` && !this.hiding && d2 && this.holdPhase === `off`
    );
    let f2 = !!this.patrol && this.patrol.stage !== `go`;
    if (this.hud.nudge(`hide`, this.state === `playing` && !this.hiding && f2), this.tukang.update(
      e21,
      this.hiding ? null : o2,
      c2,
      this.hiding ? `idle` : s2,
      this.hiding ? [] : this.solids(),
      l2,
      u2
    ), this.sounds(e21), this.guide.update(e21, this.car, this.cmdGear, this.held), this.hud.place(`tukang`, ...t2.project(...this.tukang.head())), this.car) {
      let [e22, n3] = this.car.bodyCenter();
      this.hud.place(`driver`, ...t2.project(e22, 2.4, n3));
    }
  }
};
var $ = (e21) => document.getElementById(e21);
var HUD = class {
  constructor() {
    this.onAgain = () => {
    }, this.onSpeak = () => {
    }, this.hush = null, this.bubbles = {
      tukang: {
        el: $(`b-tukang`),
        ttl: 0
      },
      driver: {
        el: $(`b-driver`),
        ttl: 0
      }
    }, this.pops = [], this.shareText = ``, this.card = null, this.cardN = 0, this.wanted = /* @__PURE__ */ new Map(), this.lastTime = -1, $(`r-again`).addEventListener(`click`, () => this.onAgain()), $(`r-copy`).addEventListener(`click`, () => void this.copy()), $(`r-share`).addEventListener(`click`, () => void this.share());
  }
  insets() {
    let e21 = window.innerWidth / window.innerHeight < 0.9;
    return {
      top: $(`driver`).getBoundingClientRect().bottom + 4,
      bottom: e21 ? $(`controls`).offsetHeight : 8
    };
  }
  setTime(e21) {
    let t2 = Math.max(0, Math.ceil(e21));
    if (t2 === this.lastTime) return;
    this.lastTime = t2;
    let n2 = $(`time`);
    n2.textContent = String(t2), n2.classList.toggle(`low`, t2 <= 10);
  }
  setMoney(e21) {
    let t2 = $(`money`);
    t2.textContent = formatMoney(e21), t2.classList.toggle(`neg`, e21 < 0), t2.classList.remove(`bump`), t2.offsetWidth, t2.classList.add(`bump`);
  }
  setCars(e21) {
    $(`cars-n`).textContent = String(e21), $(`cars`).setAttribute(
      `aria-label`,
      trApp(`cars`, {
        n: e21
      })
    ), $(`cars`).title = trApp(`cars`, {
      n: e21
    });
  }
  setDriver(e21) {
    $(`driver`).textContent = e21;
  }
  setPaused(e21) {
    $(`time`).classList.toggle(`paused`, e21);
  }
  setGear(e21) {
    document.querySelector(`[data-sig=maju]`).classList.toggle(`engaged`, e21 > 0), document.querySelector(`[data-sig=mundur]`).classList.toggle(`engaged`, e21 < 0);
  }
  setMuted(e21) {
    $(`set-sound`).setAttribute(`aria-checked`, String(!e21));
  }
  setMusic(e21) {
    $(`set-music`).setAttribute(`aria-checked`, String(e21));
  }
  setHaptics(e21) {
    $(`set-haptics`).setAttribute(`aria-checked`, String(e21));
  }
  setLangChoice(e21) {
    document.querySelectorAll(`#set-lang [data-lang]`).forEach((t2) => {
      t2.classList.toggle(`on`, t2.dataset.lang === e21);
    });
  }
  get settingsOpen() {
    return !$(`settings`).hidden;
  }
  showSettings(e21) {
    $(`settings`).hidden = !e21;
  }
  nudge(e21, t2) {
    $(e21).classList.toggle(`nudge`, t2);
  }
  setAlert(e21, t2 = false) {
    let n2 = $(`alert`);
    n2.hidden = !e21, e21 && n2.textContent !== e21 && (n2.textContent = e21), n2.classList.toggle(`calm`, t2);
  }
  setHiding(e21) {
    $(`hide`).classList.toggle(`on`, e21);
  }
  showHint(e21) {
    $(`hint`).classList.toggle(`gone`, !e21);
  }
  say(e21, t2, n2 = 1.4) {
    if (this.hush?.(t2, e21)) return;
    let r3 = this.bubbles[e21];
    this.onSpeak(t2, e21), r3.el.textContent = t2, r3.el.classList.add(`show`), r3.ttl = n2;
  }
  place(e21, t2, n2) {
    this.position(this.bubbles[e21].el, t2, n2);
  }
  position(e21, t2, n2) {
    this.wanted.set(e21, [t2, n2]);
  }
  layout() {
    let e21 = $(`driver`).getBoundingClientRect().bottom + 6, t2 = window.innerWidth, n2 = [];
    for (let [r4, [i2, a2]] of this.wanted) {
      if (!r4.isConnected) {
        this.wanted.delete(r4);
        continue;
      }
      let o2 = r4.offsetWidth, s2 = r4.offsetHeight, c2 = Math.max(o2 / 2 + 8, Math.min(t2 - o2 / 2 - 8, i2));
      n2.push({
        el: r4,
        x: i2,
        w: o2,
        h: s2,
        cx: c2,
        bottom: Math.max(e21 + s2, a2 - 8)
      });
    }
    n2.sort((e22, t3) => t3.bottom - e22.bottom);
    let r3 = [];
    for (let e22 of n2) {
      if (e22.el.classList.contains(`show`)) {
        for (let t4 = 0; t4 < 8; t4++) {
          let t5 = r3.find(
            (t6) => Math.abs(t6.cx - e22.cx) < (t6.w + e22.w) / 2 + 4 && e22.bottom > t6.bottom - t6.h - 4 && e22.bottom - e22.h < t6.bottom + 4
          );
          if (!t5) break;
          e22.bottom = t5.bottom - t5.h - 6;
        }
        r3.push(e22);
      }
      let t3 = Math.max(-e22.w / 2 + 14, Math.min(e22.w / 2 - 14, e22.x - e22.cx));
      e22.el.style.setProperty(`--tail`, `${t3}px`), e22.el.style.transform = `translate(${e22.cx}px, ${e22.bottom}px) translate(-50%, -100%)`;
    }
  }
  pop(e21, t2, n2 = 2, r3 = `sopir`) {
    if (this.hush?.(e21, r3 === `tukang` ? `tukang` : `pop`)) return;
    this.pops.length >= 6 && this.pops.shift().el.remove(), this.onSpeak(e21, r3 === `tukang` ? `tukang` : `pop`);
    let i2 = document.createElement(`div`);
    i2.className = `bubble ${r3} show`, i2.textContent = e21, $(`bubbles`).appendChild(i2), this.pops.push({
      el: i2,
      ttl: n2,
      at: t2
    });
  }
  clearPops() {
    for (let e21 of this.pops) e21.el.remove();
    this.pops = [];
  }
  setHold(e21) {
    let t2 = $(`hold`);
    t2.classList.toggle(`on`, e21 > 0), t2.style.setProperty(`--p`, String(Math.max(0, Math.min(1, e21))));
  }
  update(e21) {
    for (let t2 of Object.values(this.bubbles))
      t2.ttl <= 0 || (t2.ttl -= e21, t2.ttl <= 0 && t2.el.classList.remove(`show`));
    for (let t2 of this.pops) {
      t2.ttl -= e21;
      let [n2, r3] = t2.at();
      this.position(t2.el, n2, r3), t2.ttl <= 0 && t2.el.remove();
    }
    this.pops = this.pops.filter((e22) => e22.ttl > 0);
  }
  float(e21, t2, n2, r3) {
    let i2 = document.createElement(`div`);
    i2.className = `float ${r3}`, i2.textContent = e21, i2.style.top = `${Math.max(90, n2)}px`, $(`bubbles`).appendChild(i2);
    let a2 = i2.offsetWidth / 2 + 8;
    i2.style.left = `${Math.max(a2, Math.min(window.innerWidth - a2, t2))}px`, i2.addEventListener(`animationend`, () => i2.remove());
  }
  flash() {
    let e21 = $(`vignette`);
    e21.classList.remove(`hit`), e21.offsetWidth, e21.classList.add(`hit`);
  }
  showResult(e21) {
    this.shareText = e21.shareText, this.makeCard(e21), $(`r-money`).textContent = formatMoney(e21.money), $(`r-money`).classList.toggle(`neg`, e21.money < 0);
    let t2 = !!e21.busted;
    $(`result`).querySelector(`.ticket`).classList.toggle(`busted`, t2), $(`r-title`).textContent = trApp(t2 ? `r.busted` : `r.title`), $(`r-stamp`).hidden = !t2, $(`r-stamp`).textContent = trApp(`r.busted`), $(`r-money`).classList.toggle(`seized`, t2 && e21.money > 0), $(`r-seized`).hidden = !(t2 && e21.money > 0), $(`r-seized`).textContent = trApp(`r.seized`, {
      money: formatMoney(e21.money)
    }), $(`r-rank`).textContent = e21.busted ?? e21.rank, $(`r-emoji`).textContent = e21.emoji || `\u2014`, $(`r-cars`).textContent = String(e21.cars), $(`r-paid-cars`).textContent = String(e21.paidCars), $(`r-paid-bikes`).textContent = String(e21.paidBikes), $(`r-unpaid`).textContent = String(e21.unpaid), $(`r-scratch`).textContent = String(e21.scratches), $(`r-props`).textContent = String(e21.props), $(`r-best`).textContent = formatMoney(e21.best), $(`r-copy`).textContent = trApp(`r.copy`), $(`r-share`).textContent = trApp(`r.share`), $(`result`).hidden = false;
    for (let e22 of Object.values(this.bubbles)) e22.el.classList.remove(`show`);
  }
  hideResult() {
    $(`result`).hidden = true;
  }
  makeCard(e21) {
    let t2 = ++this.cardN;
    this.card = null, Vd(drawWorldLabels(e21, e21.shot, e21.url)).then((e22) => {
      t2 === this.cardN && e22 && (this.card = new File([e22], `tukang-parkir.png`, {
        type: `image/png`
      }));
    });
  }
  async share() {
    let e21 = this.card, t2 = e21 ? [e21] : [];
    if (e21 && navigator.canShare?.({
      files: t2,
      text: this.shareText
    }))
      try {
        await navigator.share({
          files: t2,
          text: this.shareText
        });
      } catch {
      }
    else if (e21) {
      let t3 = document.createElement(`a`);
      t3.href = URL.createObjectURL(e21), t3.download = e21.name, document.body.appendChild(t3), t3.click(), t3.remove(), setTimeout(() => URL.revokeObjectURL(t3.href), 4e3), await this.copy(), $(`r-share`).textContent = trApp(`r.saved`);
    } else
      navigator.share ? navigator.share({
        text: this.shareText
      }).catch(() => {
      }) : await this.copy();
  }
  async copy() {
    let e21 = false;
    try {
      await navigator.clipboard.writeText(this.shareText), e21 = true;
    } catch {
      let t2 = document.createElement(`textarea`);
      t2.value = this.shareText, t2.style.position = `fixed`, t2.style.opacity = `0`, document.body.appendChild(t2), t2.select(), e21 = document.execCommand(`copy`), t2.remove();
    }
    $(`r-copy`).textContent = trApp(e21 ? `r.copied` : `r.copyfail`);
  }
};
var Tf = (e21, t2) => {
  try {
    let n2 = localStorage.getItem(e21);
    return n2 === null ? t2 : n2 === `1`;
  } catch {
    return t2;
  }
};
var Ef = (e21, t2) => {
  try {
    localStorage.setItem(e21, t2 ? `1` : `0`);
  } catch {
  }
};
var Df = {
  haptics: Tf(`tp-haptics`, true),
  setHaptics(e21) {
    this.haptics = e21, Ef(`tp-haptics`, e21);
  }
};
var Of = (e21 = 8) => {
  Df.haptics && navigator.vibrate?.(e21);
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
  KeyH: `sembunyi`
};
function bindInput(e21, t2) {
  let n2 = /* @__PURE__ */ new Map(), r3 = /* @__PURE__ */ new Map(), i2 = (t3, i3, a3) => {
    let o2 = r3.get(t3) ?? /* @__PURE__ */ new Set();
    r3.set(t3, o2);
    let s2 = o2.size > 0;
    a3 ? o2.add(i3) : o2.delete(i3);
    let c2 = o2.size > 0;
    s2 !== c2 && (n2.get(t3)?.classList.toggle(`active`, c2), e21(t3, c2));
  };
  document.querySelectorAll(`[data-sig]`).forEach((e22) => {
    let r4 = e22.dataset.sig;
    n2.set(r4, e22), e22.addEventListener(`pointerdown`, (n3) => {
      n3.preventDefault(), t2();
      try {
        e22.setPointerCapture(n3.pointerId);
      } catch {
      }
      n3.pointerType !== `mouse` && Of(), i2(r4, `p` + n3.pointerId, true);
    });
    let a3 = (e23) => i2(r4, `p` + e23.pointerId, false);
    e22.addEventListener(`pointerup`, a3), e22.addEventListener(`pointercancel`, a3), e22.addEventListener(`lostpointercapture`, a3), e22.addEventListener(`contextmenu`, (e23) => e23.preventDefault());
  }), window.addEventListener(`keydown`, (e22) => {
    let n3 = kf[e22.code];
    !n3 || e22.metaKey || e22.ctrlKey || e22.altKey || (e22.preventDefault(), e22.repeat || (t2(), i2(n3, `key` + e22.code, true)));
  }), window.addEventListener(`keyup`, (e22) => {
    let t3 = kf[e22.code];
    t3 && i2(t3, `key` + e22.code, false);
  });
  let a2 = () => {
    for (let [t3, i3] of r3) i3.size && (i3.clear(), n2.get(t3)?.classList.remove(`active`), e21(t3, false));
  };
  window.addEventListener(`blur`, a2), document.addEventListener(`visibilitychange`, () => document.hidden && a2()), document.addEventListener(`touchmove`, (e22) => e22.preventDefault(), {
    passive: false
  }), document.addEventListener(`gesturestart`, (e22) => e22.preventDefault()), document.addEventListener(`dblclick`, (e22) => e22.preventDefault());
}

// src/app/boot.js
for (let [e21, t2] of Object.entries(STRINGS)) qf(t2, e21);
for (let e21 of Object.values(DRIVERS)) qf(e21.intro, `driver`), qf(e21.chatter, `chatter`);
for (let e21 of Hf) Gf.set(e21, e21), Kf.set(e21, `shout`);
var LEVEL_ID = readLevelId();
var LEVEL = applyLevel(LEVEL_ID);
applyI18n();
var $f = new View(document.getElementById(`c`));
buildWorldMeshes($f.scene);
var ep = new World($f.scene);
var tp = new HUD();
var np = new AudioEngine();
var rp = new Game($f, tp, np, ep);
var ip = new Speech(np);
var __tp = { AREA, STREET, TUNING, PRICES, VEHICLES, NPC_DRIVE, LEVELS, LEVEL };
window.__tp = __tp;
window.__game = rp;
window.__view = $f;
window.__world = ep;
window.__hud = tp;
window.__audio = np;
window.__speech = ip;
tp.onSpeak = (e21, t2) => ip.say(e21, t2), rp.onDriver = (e21) => ip.driver = Vf.driver[e21] ?? ip.driver;
var ap = () => {
  np.unlock(), ip.preload();
};
tp.setLangChoice(getLang()), onLangChange(() => {
  tp.setLangChoice(getLang()), rp.relabel(), rp.showResult(), cp();
}), bindInput((e21, t2) => {
  tp.settingsOpen && t2 || rp.onSignal(e21, t2);
}, ap), window.addEventListener(`pointerdown`, ap, {
  once: true
});
var op = (e21) => document.getElementById(e21);
var sp = (e21) => {
  e21 !== tp.settingsOpen && (e21 && window.dispatchEvent(new Event(`blur`)), tp.showSettings(e21));
};
op(`open-settings`).addEventListener(`click`, () => {
  ap(), sp(!tp.settingsOpen);
}), op(`close-settings`).addEventListener(`click`, () => sp(false)), op(`resume`).addEventListener(`click`, () => sp(false)), op(`settings`).addEventListener(`click`, (e21) => {
  e21.target === e21.currentTarget && sp(false);
}), document.querySelectorAll(`#set-lang [data-lang]`).forEach((e21) => e21.addEventListener(`click`, () => setLang(e21.dataset.lang))), document.querySelectorAll(`#set-level [data-level]`).forEach((e21) => {
  e21.classList.toggle(`on`, e21.dataset.level === LEVEL_ID);
  e21.addEventListener(`click`, () => {
    setLevel(e21.dataset.level);
    location.reload();
  });
}), tp.setMuted(np.muted), op(`set-sound`).addEventListener(`click`, () => {
  ap(), tp.setMuted(np.toggleMute());
}), tp.setMusic(np.musicOn), op(`set-music`).addEventListener(`click`, () => {
  ap(), tp.setMusic(np.toggleMusic());
}), op(`row-haptics`).hidden = !(`vibrate` in navigator), tp.setHaptics(Df.haptics), op(`set-haptics`).addEventListener(`click`, () => {
  Df.setHaptics(!Df.haptics), tp.setHaptics(Df.haptics), Of(20);
}), window.addEventListener(`keydown`, (e21) => {
  e21.code === `Escape` ? sp(!tp.settingsOpen) : tp.settingsOpen || (e21.code === `Enter` || e21.code === `KeyR` || e21.code === `Space`) && rp.tryRestart();
});
var cp = () => {
  let { top: e21, bottom: t2 } = tp.insets();
  $f.resize(e21, t2);
};
window.addEventListener(`resize`, cp), window.addEventListener(`orientationchange`, () => setTimeout(cp, 250)), cp();
var lp = performance.now();
function up(e21) {
  let t2 = Math.max(0, Math.min(0.05, (e21 - lp) / 1e3));
  lp = e21, tp.settingsOpen || rp.update(t2), tp.layout(), $f.render(), requestAnimationFrame(up);
}
requestAnimationFrame(up);
