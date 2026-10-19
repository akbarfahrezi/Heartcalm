# HEARTCALM Acne Water Gel — Landing Page Demo

Landing page responsif satu halaman menggunakan HTML, CSS, JavaScript, Bootstrap 5.3.3, dan Bootstrap Icons.

## Struktur
- `index.html` — struktur, konten, navbar, accordion, carousel, form, dan modal.
- `css/style.css` — tema visual dan breakpoint desktop/mobile.
- `js/main.js` — smooth scrolling, menu mobile, tahun footer, dan validasi newsletter.
- `asset/` — tempat menyimpan aset gambar jika ingin mengganti ilustrasi CSS dengan foto resmi.
- `library/` — disiapkan untuk library lokal jika dibutuhkan.

## Menjalankan secara lokal
1. Ekstrak ZIP.
2. Buka folder proyek menggunakan VS Code.
3. Jalankan `index.html` dengan ekstensi Live Server, atau gunakan server lokal.
4. Internet diperlukan untuk memuat Bootstrap, Bootstrap Icons, dan Google Fonts dari CDN.

## Uji fungsi
- Klik setiap menu untuk memastikan scroll menuju bagian yang benar dan tidak tertutup navbar.
- Buka/tutup setiap accordion di bagian Bahan.
- Gunakan panah dan indikator carousel di bagian Permasalahan Kulit.
- Coba CTA Beli Sekarang dan Konsultasi Admin. **Ganti URL demo dengan kanal resmi sebelum publikasi.**
- Newsletter: uji `abc`, `nama@`, dan `nama@email.com`. Input tidak valid menampilkan pesan kesalahan; email dengan format valid membuka modal simulasi. Tidak ada data yang dikirim atau disimpan.
- Uji responsive di DevTools pada lebar desktop (misalnya 1440 px) dan ponsel (misalnya 390 px).

## Sebelum dipublikasikan
1. Ganti URL Tokopedia dan WhatsApp placeholder dengan URL kanal resmi.
2. Verifikasi komposisi dan klaim produk dari kemasan/sumber resmi. Bahan pada accordion sengaja dijelaskan sebagai contoh umum, bukan klaim formula HEARTCALM yang terverifikasi.
3. Ganti testimoni contoh dengan ulasan pelanggan asli yang sudah mendapat izin, atau hapus bagian tersebut.
4. Tambahkan foto kemasan resmi dan aset berlisensi jika tersedia.
5. Deploy ke GitHub Pages, Netlify, atau Vercel. File ini belum otomatis dipublikasikan dan belum memiliki URL publik.

## Catatan asesmen
Tampilan kemasan, ilustrasi kulit, dan testimoni adalah elemen demo. Validasi newsletter hanya memeriksa format email di browser; tidak ada backend.
