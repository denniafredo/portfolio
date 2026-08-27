# Portfolio — Denni Afredo

Website portfolio single-page bergaya **Terminal Noir**, dibangun dengan React 19 +
Vite 6 + Tailwind CSS v4. Responsive penuh untuk desktop, tablet, dan phone.

## Menjalankan di lokal

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # output ke folder dist/
npm run preview    # cek hasil build
```

## Struktur

```
public/
  images/                 <- cover & thumbnail
    projects/<id>/        <- galeri per project (jumlah bebas)
  favicon.svg
src/
  data/portfolio.js   <- SEMUA KONTEN ADA DI SINI (edit yang ini)
  pages/
    Home.jsx            halaman utama (hero + experience + projects + contact)
    ProjectDetail.jsx   halaman detail per project -> /project/:id
    NotFound.jsx        404
  components/
    Header.jsx        nav sticky + menu mobile + scroll-spy
    Hero.jsx          intro, stats, cover, meta strip, marquee
    Experience.jsx    timeline "01. Experience Record"
    Projects.jsx      grid kartu + accordion "02. Selected Projects"
    Accordion.jsx     daftar project pendukung (buka-tutup)
    Contact.jsx       CTA email "03. Initiate Connection"
    Footer.jsx
    Gallery.jsx       grid galeri otomatis + lightbox
    Lightbox.jsx      overlay lihat gambar ukuran penuh
    Frame.jsx         <img> + fallback placeholder
    Reveal.jsx        animasi fade-up saat scroll
    ScrollManager.jsx atur scroll saat pindah halaman
    SectionHeading.jsx
  index.css        design token & utility
```

## Routing

| URL             | Halaman                                     |
| --------------- | ------------------------------------------- |
| `/`             | Halaman utama (one-page scroll)             |
| `/project/:id`  | Detail project, `:id` dari field `id` di data |
| lainnya         | 404                                         |

`vercel.json` sudah punya rewrite SPA, jadi refresh di `/project/captive8`
tidak akan 404 di production.

## Kartu vs accordion

Project dibagi dua array di `src/data/portfolio.js`:

| Array          | Tampil sebagai                            |
| -------------- | ----------------------------------------- |
| `projects`     | Kartu besar dengan thumbnail               |
| `moreProjects` | Baris accordion "// OTHER RECORDS"         |

Keduanya sama-sama punya halaman detail di `/project/:id`. Mau memindahkan
sebuah project dari kartu ke accordion (atau sebaliknya)? Cukup pindahkan
objeknya antar dua array — tidak ada yang lain perlu diubah.

## Galeri detail project

Taruh gambar di `public/images/projects/<id-project>/`, lalu daftarkan
**nama file-nya saja**:

```js
gallery: ['dashboard.png', 'stock-list.png', 'purchase-order.png'],
```

Grid-nya otomatis: pola 2 kecil + 1 lebar, dan item terakhir dibuat lebar
kalau ia akan sendirian di barisnya — jadi berapa pun jumlah gambarnya
tidak pernah ada ruang kosong menggantung. Klik gambar untuk memperbesar
(Esc / panah kiri-kanan untuk navigasi).

## Cara edit konten

Buka [`src/data/portfolio.js`](src/data/portfolio.js). Semua teks — nama, bio,
email, daftar pengalaman kerja, project, tech stack, dan link sosial media — ada
di file itu. Komponen tidak perlu disentuh.

Tambah project baru cukup dengan menambah satu objek di array `projects`, grid
otomatis menyesuaikan.

## Gambar

Taruh file di `public/images/`. Detail nama file & ukuran ada di
[`public/images/README.md`](public/images/README.md). Kalau file belum ada,
otomatis muncul placeholder `[ NO_IMAGE ]` — layout tetap rapi.

## Ganti warna aksen

Edit blok `@theme` di [`src/index.css`](src/index.css):

```css
--color-accent-400: #4f95ff;   /* hover / teks terang */
--color-accent-500: #1668ff;   /* warna utama */
--color-accent-600: #0d52d9;   /* hover tombol */
```

## Deploy ke Vercel

**Lewat dashboard**

1. Push project ini ke GitHub.
2. Buka [vercel.com/new](https://vercel.com/new) → import repo-nya.
3. Vercel auto-detect Vite. Build command `npm run build`, output `dist`.
   Setting sudah dikunci lewat `vercel.json`, jadi tinggal **Deploy**.

**Lewat CLI**

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

## Breakpoint

| Device  | Lebar     | Perilaku                                              |
| ------- | --------- | ----------------------------------------------------- |
| Phone   | < 640px   | 1 kolom, foto di atas teks, menu hamburger             |
| Tablet  | 640–1023  | Spacing lebih lega, project jadi 2 kolom mulai 768px   |
| Desktop | ≥ 1024px  | Hero 2 kolom (teks kiri, foto kanan), nav horizontal   |

## Catatan

- Butuh Node.js 20.19+ atau 22.12+ untuk versi Vite terbaru. Project ini dipin ke
  Vite 6 supaya jalan juga di Node 22.7.
- Semua animasi otomatis nonaktif kalau user mengaktifkan
  `prefers-reduced-motion` di OS-nya.
- Tidak ada icon library — semua ikon inline SVG, jadi bundle tetap kecil
  (~67 kB gzip).
