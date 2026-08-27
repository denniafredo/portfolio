# Assets gambar

Taruh file di folder ini, lalu path-nya otomatis kepakai dari `src/data/portfolio.js`.

| File                    | Dipakai di       | Rasio ideal | Ukuran saran   |
| ----------------------- | ---------------- | ----------- | -------------- |
| `about-cover.jpg`       | Hero (cover)     | 13:5        | 1600 x 615 px  |
| `project-captiv8.jpg`  | Project Captiv8 | 16:10       | 1200 x 750 px  |
| `project-pes.jpg`       | Project PES      | 16:10       | 1200 x 750 px  |
| `project-jhh.jpg`       | Project JHH      | 16:10       | 1200 x 750 px  |
| `project-phm.jpg`       | Project PHM      | 16:10       | 1200 x 750 px  |
| `project-buana-motor.jpg` | Buana Motor (accordion) | 16:10 | 1200 x 750 px |
| `project-klh.jpg`       | KLH (accordion)  | 16:10       | 1200 x 750 px  |
| `project-wakatobi.jpg`  | Wakatobi (accordion) | 16:10   | 1200 x 750 px  |
| `og-cover.jpg`          | Preview share    | 1.91:1      | 1200 x 630 px  |

Kalau file belum ada, komponen otomatis menampilkan placeholder `[ NO_IMAGE ]`
jadi layout tetap rapi — tidak ada gambar rusak.

Tips: kompres dulu (TinyPNG / Squoosh) dan pakai `.webp` kalau bisa —
tinggal sesuaikan nama file di `src/data/portfolio.js`.

## Galeri halaman detail project

Setiap project punya foldernya sendiri. Jumlah gambarnya bebas — grid di
halaman detail menyesuaikan sendiri dan tidak pernah menyisakan ruang kosong.

```
public/images/projects/
  captiv8/       dashboard.png, stock-list.png, ...
  pes/            campaign-page.png, donation-flow.png, ...
  jhh/            case-dashboard.png, client-profile.png, ...
  phm/            sales-dashboard.png, order-list.png, ...
  buana-motor/    home.png, product-catalogue.png, ...
  klh/            map-view.png, species-detail.png, ...
  wakatobi/       form-page.png, response-list.png, ...
```

Setelah menaruh file, daftarkan **nama file-nya saja** di array `gallery`
pada project yang bersangkutan di `src/data/portfolio.js`:

```js
gallery: ['dashboard.png', 'stock-list.png', 'purchase-order.png'],
```

Nama file itu sekaligus dipakai sebagai caption di bawah gambar, jadi beri
nama yang deskriptif. Rasio yang enak dilihat: 16:10 untuk gambar biasa,
16:7 untuk yang tampil selebar penuh. Gambar tetap ditampilkan utuh
(`object-cover`), jadi tidak harus persis.
