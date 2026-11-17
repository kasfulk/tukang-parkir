# Tukang Parkir — rebuild + reverse engineering

Salinan mandiri dari https://tukang-parkir.akalstack.com, dibongkar kembali jadi source
modular yang bisa diubah dan di-build ulang.

**Tanpa dependency eksternal**: Three.js ikut di dalam repo, audio disintesis, tidak ada
CDN, font, atau API. Jalan offline.

## Struktur

- `index.html` — entry yang memakai hasil build (`dist/app.js`)
- `index.orig.html` — entry asli, memakai bundle produksi apa adanya
- `assets/` — bundle asli (`index-B84SUXf5.js`, 705 KB) + CSS
- `src/vendor/three.js` — Three.js hasil ekstraksi dari bundle
- `src/app/content.js` — data: layout lahan/jalan, harga, kendaraan, sopir, i18n
- `src/app/engine.js` — mesh, fisika, crowd, A*, `World`, `View`
- `src/app/game.js` — `Game`, `HUD`, input
- `src/app/audio.js` — sintesis WebAudio + `Speech`
- `src/app/boot.js` — perakitan
- `dist/app.js` — hasil build (di-commit supaya bisa langsung deploy)
- `re/` — pipeline reverse engineering (prettier + babel + esbuild)
- `docs/MECHANICS.md` — aturan main lengkap dengan angka aslinya

## Jalankan

```bash
npm run serve      # http://localhost:8791
npm run build      # rebuild dist/app.js dari src/
npm run check      # syntax check semua modul
```

## Deploy Vercel

Framework: Other · Build Command: `npm run build` · Output Directory: `.`

Kontrol: A/D atau ◀ ▶ belok, W/S maju-mundur, spasi/STOP rem, E tahan jalan, H sembunyi.

## Level

Dua level, dipilih dari Settings atau `?level=sempit`:

- *Pasar Pagi* — 7 bay, ronde 120 s, harga standar.
- *Lahan Sempit* — 5 bay lebih lebar, ronde 90 s, Satpol lebih rajin, harga lebih tinggi.

Skor terbaik disimpan per level. Definisi level ada di `src/app/levels.js`.

## Debug / modding

DevTools console:

```js
__tp.PRICES.mobil = 8000;        // harga parkir berubah langsung
__tp.TUNING.roundSeconds = 60;   // ronde 60 detik
__game.reset();                  // mulai ulang pakai nilai baru
__game.state                     // 'ready' | 'playing' | 'over'
__game.money, __game.timeLeft    // skor berjalan
```

`__tp` memuat `AREA, STREET, TUNING, PRICES, VEHICLES, NPC_DRIVE, LEVELS, LEVEL`. Untuk layout lahan
butuh reload (`AREA` dibaca saat `World` dibangun).

## Hasil uji

- Headless Chromium, WebGL 2.0, 0 error console.
- Ronde berjalan: timer 120 → 119 setelah input pertama, dialog sopir bereaksi.
- Sistem Satpol: `spawnPatrol()` memunculkan alert "Satpol PP datang 12 detik lagi".
- Game over: `timeLeft = 1` → state `over`, layar hasil muncul.
- Tuning live terbukti: `roundSeconds = 45` + `reset()` → HUD menampilkan 45.
- Level: `?level=sempit` → 5 bay, timer 90, harga 6.500; 5 bay semuanya di dalam batas
  lahan, tidak ada prop statis yang menabrak bay.
- Desktop 1280×800 dan mobile 390×844: scene ter-render, HUD utuh, tanpa scroll samping.

Detail teknis: `docs/MECHANICS.md`.
