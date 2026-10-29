# eportofolio3in1

Website statis (HTML, CSS, JavaScript Vanilla) untuk tiga e-portfolio PPG: Pembelajaran Terbimbing, Praktik Mengajar Mandiri Siklus 1, dan Siklus 2–4. Tanpa framework, backend, atau build tools.

## Cara membuka
Klik dua kali `index.html` (browser modern). Tidak perlu server. Bila PDF tidak tampil di browser tertentu, gunakan tombol Unduh atau jalankan server lokal (`python3 -m http.server`).

## Struktur
- `index.html`: seluruh isi konten (edit di sini)
- `css/style.css`: desain; warna utama ada di `:root` bagian atas
- `js/script.js`: navigasi dan interaksi (tidak perlu diubah)
- `assets/images|videos|documents|icons`: tempat berkas

## Cara mengedit konten
Setiap bagian diapit komentar `<!-- MULAI ... -->` dan `<!-- AKHIR ... -->`. Cari teks `[Isi ...]` atau `[Tuliskan ...]`, lalu ganti dengan tulisan Anda. Teks panjang aman, layout menyesuaikan.

1. **Nama, foto, profil**: bagian Beranda dan Profil Guru. Ganti `assets/images/foto-profil.svg` dengan foto Anda (misalnya `foto-profil.jpg`), lalu ubah `src` dan `alt` pada semua `<img class="avatar">`. Logo: ganti `assets/icons/logo.svg`.
2. **RPP/modul, materi, media, instrumen**: simpan PDF di `assets/documents/` (nama sesuai id, misalnya `t1-rancangan.pdf`). Pada artefak terkait, hapus `<p class="media-empty">...</p>`, lalu salin blok di komentar tepat di bawahnya (tombol Pratinjau, Unduh, dan iframe).
3. **Video**: simpan MP4 di `assets/videos/` atau pakai tautan embed (YouTube/Drive). Salin blok video dari komentar di bawah slot media.
4. **Dokumentasi kegiatan**: simpan foto di `assets/images/`, salin blok `figure` dari komentar, lalu isi `alt` dan keterangan.
5. **Analisis**: buka akordion "Analisis artefak", ganti tiap placeholder (konteks, tujuan, kelebihan, kekurangan, teori, kesimpulan, bukti).
6. **Refleksi**: ganti placeholder pada bagian refleksi dengan pengalaman Anda sendiri.
7. **Rancangan & Video Terbaik (Siklus 2–4)**: Anda yang menentukan siklus terpilih dan alasannya; gunakan dokumen siklus yang benar-benar dipilih.

Jangan membiarkan tombol atau tautan mengarah ke berkas yang belum ada.

## Penanda progres
Badge status: `data-status="ada"` (Sudah tersedia), `"lengkapi"` (Perlu dilengkapi), `"belum"` (Belum dikerjakan). Ubah atribut dan teks badge saat konten selesai. Untuk menyembunyikan semuanya: tambahkan `class="hide-progress"` pada `<body>` dan hapus tombol di footer (antara komentar MULAI/AKHIR TOMBOL PROGRES).

## Batasan website statis
Tidak ada penyimpanan data. Mengetik di browser tidak mengubah berkas; semua perubahan dilakukan lewat berkas proyek. Pencarian hanya memfilter Daftar Isi.

## Pemeriksaan sebelum publikasi
- Tidak ada `[Isi ...]` atau `[Tuliskan ...]` yang tersisa.
- Semua tab dan subtab dibuka; tombol Pratinjau/Unduh berfungsi.
- Ejaan, istilah, dan bahasa baku sudah dicek.
- Coba di ponsel dan buka konsol browser (F12): tidak ada error.
- Tidak ada data pribadi yang tidak perlu pada dokumen.
