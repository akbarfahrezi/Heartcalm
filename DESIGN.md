# DESIGN.md

## Arah yang dipilih
- **Identitas:** HEARTCALM Acne Water Gel, perawatan kulit dengan nada tenang, ramah, dan tidak menghakimi.
- **Audiens:** remaja dan dewasa muda yang mengalami kulit berjerawat.
- **Kepribadian:** hangat, editorial, informatif, realistis. Tidak menjanjikan hasil medis.
- **Palet:** hijau sage (`#DCE8DC`) untuk ketenangan dan konteks skincare; ivory (`#F8F7F1`) untuk ruang baca; hijau gelap (`#263A35`) untuk teks dengan kontras; warna peach dibatasi pada ilustrasi kulit.
- **Tipografi:** Manrope untuk judul yang tegas dan DM Sans untuk antarmuka yang mudah dibaca; Georgia dipakai pada aksen editorial agar terasa lebih personal.
- **Mood:** editorial natural premium, whitespace terstruktur, komposisi tidak seragam antarbagian.

## Tujuan keputusan visual
- **Hero dengan ilustrasi tabung CSS:** menyediakan visual produk ketika foto kemasan resmi belum tersedia. Ini ilustrasi konsep, bukan foto atau representasi kemasan resmi.
- **Sage dan ivory:** memberi asosiasi lembut dan organik tanpa memakai gradien biru-ungu generik.
- **Variasi komposisi:** area bahan memakai split panel, manfaat memakai tiga kolom ringkas, masalah kulit memakai carousel, dan bagian hasil menggunakan jurnal visual. Tujuannya membedakan informasi, bukan mengulang grid kartu yang sama.
- **Carousel masalah kulit:** memadatkan panduan edukasi yang saling setara dan menyediakan kontrol sebelumnya/berikutnya.
- **Accordion bahan tambahan:** menyimpan detail yang panjang tanpa memenuhi layar awal.
- **Newsletter modal:** memberi umpan balik yang jelas setelah format email valid; tidak ada pengiriman atau penyimpanan data.
- **Tipografi dan ruang kosong:** menjaga keterbacaan dan membantu pengguna muda memindai informasi.
- **Ilustrasi wajah abstrak CSS:** visual edukasi, bukan foto orang atau bukti hasil sebelum/sesudah.
- **Tanpa testimoni fiktif:** section ulasan menjelaskan bahwa ulasan asli dibutuhkan. Ini menghindari bukti sosial palsu.

## Batasan konten
- Daftar komposisi resmi HEARTCALM belum diverifikasi. Teks accordion menyatakan secara eksplisit bahwa contoh bahan bukan formula produk yang terverifikasi.
- Klaim manfaat dijaga pada tingkat umum dan tidak menjanjikan penyembuhan jerawat.
- CTA Tokopedia dan WhatsApp masih URL placeholder. Ganti dengan kanal resmi sebelum publikasi.
- Tidak ada foto kemasan resmi, logo resmi, atau testimoni pelanggan yang diberikan. Brand wordmark berupa teks dan ilustrasi produk diberi status konsep.

## Responsivitas dan aksesibilitas
- Breakpoint utama: 992 px dan 768 px.
- Navigasi mobile memakai collapse Bootstrap dan ditutup setelah pengguna memilih tautan.
- Fokus keyboard dibuat terlihat, label email terhubung ke input, dan pesan validasi diumumkan melalui `aria-live`.
- Preferensi `prefers-reduced-motion` dihormati.
- Target tombol interaktif ditingkatkan agar lebih nyaman disentuh.

## Anti-Slop DURING checklist
- [x] Arah visual ditetapkan sebelum revisi.
- [x] Hapus testimoni fiktif.
- [x] Hindari em dash pada teks website yang ditulis untuk halaman.
- [x] Navbar hanya menuju section yang tersedia.
- [x] Tiap komponen interaktif memiliki tujuan dan perilaku.
- [x] Catat aset dan klaim yang belum diverifikasi.
- [ ] Browser QA pada desktop dan ponsel.
- [ ] Uji kontras terukur dan alur keyboard penuh.
- [ ] Ganti placeholder dan verifikasi konten produk.
