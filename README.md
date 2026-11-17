# Tukang Parkir — salinan mandiri

Duplikat statis dari https://tukang-parkir.akalstack.com (diambil 17-11-2026).

Game 3D Three.js, satu bundle self-contained: tanpa CDN, tanpa API, tanpa font eksternal.
Tidak ada yang perlu di-build.

## Jalankan

```bash
python3 -m http.server 8791
# buka http://localhost:8791
```

## Deploy Vercel

Framework: Other · Build Command: (kosong) · Output Directory: `.`

## Isi

- `index.html` — markup HUD, tombol sentuh, dialog
- `assets/index-B84SUXf5.js` — bundle game (Three.js ter-inline, 705 KB)
- `assets/index-ChqrgG0v.css` — styling HUD/kontrol

Kontrol: A/D atau ◀ ▶ belok, W/S maju-mundur, spasi/STOP rem, E tahan jalan, H sembunyi.

## Hasil uji

- Chromium headless WebGL 2.0, tanpa error console.
- Timer jalan setelah input pertama (120 → 119), dialog sopir bereaksi ke perintah maju.
- Desktop 1280×800 dan mobile 390×844: scene ter-render, HUD tidak terpotong,
  tidak ada scroll horizontal (scrollWidth = 390).
