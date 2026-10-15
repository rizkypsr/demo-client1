# Mobile Travel & Tour Itinerary App (Client Demo)

Website demo khusus mobile yang sangat ringan (*Pure HTML5, CSS3, & Vanilla JavaScript* tanpa framework eksternal) berfokus penuh pada **informasi perjalanan wisata (travel tour)** untuk peserta.

---

## 🌴 Alur & Fitur Aplikasi

1. **Registrasi Peserta (Akses Awal):**
   - Peserta membuka link website dan diarahkan ke form registrasi (*Nama Lengkap, Departemen / Divisi, dan No. HP WhatsApp*).
   - Dilengkapi tombol **"⚡ Isi Otomatis Data Demo"** untuk mempercepat simulasi saat demo di depan client.
   - Setelah registrasi, data peserta tersimpan otomatis di background (`localStorage` JSON) dan konten jadwal langsung terbuka.

2. **Konten Informasi Perjalanan Wisata (Fokus Travel):**
   - **Kartu Peserta:** Menampilkan sapaan nama peserta, departemen, dan nomor HP terdaftar.
   - **Pengumuman Meeting Point:** Informasi jam kumpul dan lokasi gate bandara.
   - **Destinasi Wisata Utama:** Kartu ringkas tempat-tempat wisata yang dikunjungi (*Pantai Jimbaran, GWK Cultural Park, Pantai Melasti, Desa Penglipuran*).
   - **Jadwal Agenda Harian (Itinerary):**
     - Tab harian (*Day 1, Day 2, Day 3*).
     - Panduan **Dresscode** harian peserta (*Polo Shirt, Kaos Tim Divisi, Casual Bebas*).
     - Timeline agenda lengkap dengan jam kegiatan, nama aktivitas, lokasi, dan penjelasan kegiatan.
   - **Tips & Perlengkapan Travel:** Checklist bawaan penting (KTP asli, sunscreen, pakaian santai, obat pribadi, dll).

3. **Tombol Reset Demo:**
   - Tombol **`↺`** di header atas untuk mereset sesi peserta dan mengulang demo dari halaman registrasi.

---

## 📂 Struktur File

```
d:/dev/demo-client1/
│── index.html              # Halaman utama aplikasi (Mobile UI)
│── css/
│   └── style.css           # Styling mobile, responsive mockup frame
│── js/
│   └── app.js              # Logika registrasi, render jadwal tour & destinasi
│── data/
│   └── event-data.json     # Data JSON informasi acara, destinasi, & jadwal harian
└── README.md               # Dokumentasi
```

---

## 💻 Cara Menjalankan untuk Demo

Klik ganda (double click) file [`index.html`](file:///d:/dev/demo-client1/index.html) untuk langsung membukanya di browser (Google Chrome, Microsoft Edge, dll).
