# Find Yourself – Minat & Bakat Explorer

Aplikasi edukasi modern untuk membantu siswa SMP menemukan minat dan bakat mereka, menjalani quest harian, dan bermain board game digital.

## Fitur Utama

### 1. **Opening Screen** (`index.html`)
- Desain modern dengan animasi fade-in
- Avatar picker dengan penyimpanan di localStorage
- Tombol "Mulai Sekarang" dengan animasi transisi
- Dark mode toggle di navbar

### 2. **Tes Minat & Bakat** (`test/tes.html`)
- 10 pertanyaan dengan 7 kategori minat:
  - 🔤 Linguistik (kata-kata, menulis, membaca)
  - 🧠 Logika (berpikir sistematis, angka)
  - 🎨 Visual (gambar, desain, warna)
  - 🎵 Musikal (musik, ritme)
  - 🤝 Interpersonal (bergaul, kerja kelompok)
  - 🔍 Intrapersonal (refleksi, tujuan pribadi)
  - 🤸 Kinestetik (gerak, olahraga, praktik)
- Progress bar animasi
- Tombol "Kembali" (prev) untuk lihat pertanyaan sebelumnya
- Hasil dengan kategori utama & sekunder
- Rekomendasi aktivitas spesifik
- Tombol "Download Hasil (Print)" untuk cetak

### 3. **Quest Harian** (`quest/quest.html`)
- Quest berdasarkan kategori minat teratas
- Sistem RPG sederhana:
  - **Level & XP**: naikkan level setiap 100 XP
  - **Streak**: catat berapa hari berturut-turut menyelesaikan quest
  - **Badges**: kumpulkan badge saat mencapai level tertentu
- Quest deterministic harian (sama setiap hari)
- Quest random alternative
- Animasi level-up saat naik level
- Penyimpanan progress di localStorage

### 4. **Board Game Digital** (`board/board.html`)
- Papan 6x6 dengan 36 tile
- Setiap tile berwarna sesuai kategori minat
- Emoji kategori di setiap tile
- Tombol "Lempar Dadu" dengan animasi dadu berputar
- Pion bergerak langkah demi langkah (smooth animation)
- Popup tantangan saat pion berhenti
- Simpan posisi terakhir di localStorage

### 5. **Tema Global & Desain Konsisten**
- `global.css`: sistem warna, komponen, animasi global
- `global.js`: theme toggle (light/dark), avatar storage
- Font: Poppins (modern, elegant)
- Warna tema: ungu pastel (#6C63FF) & biru (#A393EB)
- Dark mode terintegrasi di semua halaman

## Struktur Folder

```
/index.html                      (Opening screen)
/index.css                       (Opening styles)
/index.js                        (Avatar picker, theme toggle)
/global.css                      (Theme system, components)
/global.js                       (Theme & avatar utilities)

/test/
  /tes.html                      (Quiz page)
  /tes.css                       (Quiz styles)
  /tes.js                        (10 questions, scoring, results)

/quest/
  /quest.html                    (Daily quest)
  /quest.css                     (Quest styles)
  /quest.js                      (XP, level, streak, badges)

/board/
  /board.html                    (Board game)
  /board.css                     (Board grid styles)
  /board.js                      (Dice, pawn, challenges)

/assets/                         (Images, icons – empty template)

/README.md                       (Ini)
```

## Cara Menjalankan

### Option 1: Live Server (Recommended)
1. Buka folder `d:\JOEY\Project JOEY` di VS Code
2. Pasang ekstensi **Live Server** (Ctrl+Shift+X → cari "Live Server" → Install)
3. Buka file `index.html` di editor
4. Klik kanan pada editor → **Open with Live Server**
5. Browser akan membuka `http://localhost:5500` otomatis

### Option 2: Python HTTP Server
1. Buka PowerShell di folder `d:\JOEY\Project JOEY`
2. Jalankan command:
```powershell
python -m http.server 8000
```
3. Buka browser dan masuk ke: `http://localhost:8000`

### Option 3: Langsung di File Explorer
1. Double-click `index.html` untuk buka di browser default
2. Navigasi manual dengan klik link di navbar (tidak ideal untuk localStorage)

## Panduan Penggunaan

### Step 1: Mulai (Opening Screen)
- Klik tombol "Pilih Avatar" untuk memilih emoji avatar
- Avatar akan disimpan dan ditampilkan di navbar
- Klik "Mulai Sekarang" untuk masuk tes

### Step 2: Tes Minat & Bakat
- Baca pertanyaan dan pilih salah satu jawaban
- Klik "Lanjut" untuk pertanyaan berikutnya
- Gunakan "Kembali" jika ingin ubah jawaban sebelumnya
- Setelah selesai 10 pertanyaan, lihat hasil
- Tekan "Download Hasil (Print)" untuk cetak hasil

### Step 3: Quest Harian
- Klik "Quest Hari Ini" untuk quest berdasarkan minat teratas
- Klik "Quest Random" untuk aktivitas acak
- Selesaikan quest dan klik "Selesaikan Quest" untuk dapat XP
- Lihat level, XP, dan badge yang dikumpulkan

### Step 4: Board Game
- Klik "Lempar Dadu" untuk melempar dadu (1-6)
- Pion akan bergerak langkah demi langkah
- Saat berhenti, popup tantangan akan muncul
- Klik "Selesai" untuk menutup popup dan lempar dadu lagi

## Dark Mode

- Klik tombol 🌙 di navbar untuk toggle dark mode
- Pilihan akan disimpan di localStorage
- Berlaku untuk semua halaman

## Data Penyimpanan (localStorage)

| Key | Deskripsi |
|-----|-----------|
| `fy_theme` | Theme (light/dark) |
| `fy_avatar` | Emoji avatar dipilih |
| `fy_topCategory` | Kategori teratas dari tes |
| `fy_quiz` | Detail hasil kuis (answers, categories) |
| `fy_level` | Player level dari quest |
| `fy_xp` | Player XP dari quest |
| `fy_streak` | Hari berturut-turut menyelesaikan quest |
| `fy_lastComplete` | Tanggal terakhir quest selesai (YYYY-MM-DD) |
| `fy_pos` | Posisi pion di board game |

## Saran Pengembangan Lanjutan

1. **Backend Integration**
   - Simpan hasil ke database (Firebase, MongoDB, dll)
   - Lihat riwayat quest & tes siswa

2. **Fitur Sosial**
   - Leaderboard level & streak
   - Share hasil tes ke teman
   - Kolaborasi quest kelompok

3. **Konten Dinamis**
   - Admin panel untuk edit pertanyaan & quest
   - Kategori minat tambahan
   - Suara/musik untuk board game

4. **Gamification**
   - Sistem achievement lebih detail
   - Power-up atau special tiles di board
   - Daily/weekly challenge dengan reward

5. **Mobile App**
   - Export ke React Native atau Flutter
   - PWA (Progressive Web App)

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Lisensi & Kredit

Proyek ini dibuat untuk tujuan edukasi siswa SMP.
Font: **Poppins** (Google Fonts)
Built with vanilla HTML, CSS, dan JavaScript.

---

**Selamat menggunakan Find Yourself! 🚀**

