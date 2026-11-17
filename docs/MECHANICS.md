# Tukang Parkir — hasil reverse engineering

Asal: `https://tukang-parkir.akalstack.com` (bundle Vite produksi, 17-11-2026).
Bundle asli: 1 file JS 705 KB (Three.js ter-inline) — semua nama top-level diminifikasi
jadi 1–2 huruf, tapi **nama properti dan method tidak di-mangle**, jadi struktur game
bisa dibaca setelah di-beautify.

Pipeline yang dipakai (`re/`):

1. `npx prettier --parser babel` → `re/app.pretty.js` (29.930 baris).
2. Babel: pisahkan chunk Three.js (baris 1–23.987) dari kode game (23.988–29.930).
3. Rename top-level binding yang teridentifikasi, pecah `var a=…, b=…` jadi statement
   terpisah, lalu partisi ke modul berdasarkan dependensi (`re/transform.cjs`).
4. `esbuild --bundle` → `dist/app.js`; bandingkan perilakunya dengan bundle asli.

## Peta modul

- `src/vendor/three.js` — Three.js apa adanya dari bundle (nama internal tetap minified).
- `src/app/content.js` (784 baris) — semua data: layout lahan, jalan, harga, kendaraan,
  tipe sopir, tabel i18n ID/EN.
- `src/app/engine.js` (2.936) — mesh builder, fisika tabrakan, crowd, pathfinding A*,
  `World` (lalu lintas + pejalan kaki), `View` (renderer).
- `src/app/game.js` (2.155) — `Game` (loop aturan main), `HUD`, input.
- `src/app/audio.js` (1.351) — sintesis WebAudio (mesin, klakson, ambience) + `Speech`.
- `src/app/boot.js` — merakit semuanya.

## Angka yang menentukan

**Lahan** (`AREA`): x −11,4…11,4 · z −9,5…6,9 · 7 bay, bay 2,8 × 5,6 m · pintu keluar
x 9,6 lebar 3,6 m.

**Jalan** (`STREET`): trotoar z 7,3 · jalan 10,3–18,3 · lajur dekat 12,3 · lajur jauh 16,3 ·
panjang 46 m. 6 lajur kendaraan (2 lajur × 4 mobil, 4 lajur × 3 motor) dan 14 pejalan kaki
(enam di trotoar dekat, lima di trotoar jauh, tiga figuran khusus: pemikul, dua pejalan).

**Mobil** (`VEHICLES`): city 3,6×1,65 m (wheelbase 2,3) · MPV 4,5×1,8 · pikap 4,7×1,75
(muatan bambu overhang 1 m — lebih gampang nyerempet).

**Sopir** (`DRIVERS`): `pemula` (delay 0,55 s, kecepatan 0,8×, steer 0,85×, tidak pernah
cuek) · `buru` (buru-buru) · `ngeyel` (kadang mengabaikan perintah, `ignoreChance`).
Perintah masuk antrean dengan jitter 0,8–1,2× delay — makin lama kamu nunggu, makin
terlambat mobil bereaksi.

**Harga** (`PRICES`): parkir mobil 5.000 · motor 2.000 · lecet −1.000 per baret ·
miring −1.000 · tip 1.000 kalau bersih dan selesai < 14 s.

**Timer**: 120 detik per ronde (sekarang `TUNING.roundSeconds`), Satpol pertama datang
acak 35–50 s, berikutnya 28–42 s.

## Aturan parkir (dari `checkParked`)

Mobil dianggap selesai kalau **semua** syarat ini benar:

1. Titik tengah mobil di dalam bay: |Δx| < bayW/2 dan |Δz| < bayD/2.
2. Heading lurus: `|sin(heading)| < 0,42` (≈ ±24°).
3. Berhenti tenang: sopir sudah tidak `going` dan |v| < 0,05 m/s.
4. Stabil 0,45 s.
5. Keempat sudut OBB di dalam bay (+5 cm) → "rapi"; kalau tidak → "miring", dipotong 1.000.

Bayar dihitung saat mobil keluar (`holdActive`): tahan tombol TAHAN JALAN supaya sopir
tidak lepas sebelum bayar.

## Fisika

Model kinematik (bukan rigid body): `step(dt, speed, steer, steerRate, accel, brake)`,
belok dibatasi `atan2(2·wheelbase·v, …)` dan sudut steer maksimum 0,62 rad.
Tabrakan pakai OBB vs OBB (SAT 2 sumbu). Objek ringan bisa ditabrak:

- cone → kecepatan sisa 92%
- motor → 70%
- gerobak → 45%

Objek padat (mobil terparkir, tiang, bangunan) memantulkan mobil dan menambah baret
(`hitCooldown` mencegah hitung ganda).

## Satpol & sembunyi

Satpol muncul dengan peringatan `🚨 Satpol PP datang N detik lagi!`. Kalau tidak sembunyi
(`H`), kena `bust()` → ronde selesai. Saat sembunyi, tukang cari tempat aman pakai A*
(`astarSearch` + `HIDING_SPOT`), jadi bukan teleport.

## Bahasa & audio

- i18n dua bahasa (id/en) di `I18N_TABLE`, dipilih otomatis dari `navigator.languages`
  atau zona waktu Indonesia, tersimpan di `localStorage['tp-lang']`.
- Audio seluruhnya disintesis (oscillator + filter + noise buffer), tanpa file suara
  eksternal. Suara sopir memakai `Speech` (formant-ish) sehingga tetap offline.

## Yang ditambahkan saat RE

- `TUNING` di `content.js`: `roundSeconds`, jeda Satpol, frekuensi mobil lewat.
- `window.__tp` (semua data tuning hidup), `window.__game`, `__view`, `__world`, `__hud`,
  `__audio`, `__speech` — untuk console dan tes otomatis.
- `shadowMap.type = 1` (PCFSoftShadowMap sudah dihapus Three; warning hilang).
- Build dari source: `npm run build` (esbuild, ~930 KB, tanpa CDN).

## Level

`src/app/levels.js` mendefinisikan level sebagai *patch* di atas data dasar:

- `pasar` (default) — 7 bay 2,8 m, ronde 120 s, harga standar.
- `sempit` — 5 bay 3,2 m, ronde 90 s, Satpol 25–35 s lalu 20–30 s, harga mobil 6.500.

Level dipilih lewat `?level=sempit` atau tombol di Settings (tersimpan di
`localStorage['tp-level']`). Patch diterapkan sekali saat boot, sebelum `View`/`World`
membangun geometri — karena itu ganti level = reload. Skor terbaik disimpan per level
(`tp-best:<id>`), dengan migrasi otomatis dari kunci lama `tp-best`.

Menambah level: tambah entri di `LEVELS` dengan `area`, `tuning`, `prices` (semua opsional)
dan tombol `data-level` di `index.html`. Batas geometri: `bays × bayW` harus muat di
`minX…maxX`, dan `bayD` tidak boleh melewati `minZ`.

## Cara memodifikasi

```js
// di console
__tp.PRICES.mobil = 8000;        // harga parkir langsung berubah
__tp.TUNING.roundSeconds = 60;   // ronde lebih pendek
__game.reset();                  // mulai ulang dengan nilai baru
__tp.AREA  // ubah layout: butuh reload, World dibangun sekali saat boot
```

Tambah mobil: tambahkan entri di `VEHICLES` (`src/app/content.js`) dengan
`length/width/wheelbase/rearOverhang/bodyH/cabin`. Mesh dibuat otomatis oleh `CarMesh`.
