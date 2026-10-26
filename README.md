# Sistem Manajemen Kos (Publik dan Akun)

**UTS Pemrograman Web** | Dosen: Ari Kurniawan, S.Kom, M.T. | Kelas 2025A

|               |                                 |
| ------------- | ------------------------------- |
| Topik         | Sistem Manajemen Kos (Kos Abah) |
| Kode kelompok | A02                             |
| Nama          | Akbar Wangsa Da Lama            |
| NIM           | 25091397036                     |
| Bagian        | Publik page dan login page      |

## Deskripsi

Website Kos Abah untuk calon penghuni dan penghuni. Pengunjung bisa melihat profil kos dan kamar yang masih kosong tanpa login, lalu masuk lewat halaman login.

## Daftar halaman

| Bagian             | File                 | Penjelasan                                                                                                                                                                                               |
| ------------------ | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.a Homepage       | `index.html`         | Navbar atas dengan hamburger di layout HP, hero banner dengan tombol Login, keunggulan, profil kos, cara menyewa, kontak, dan footer. Menu memuat halaman 2.b dan 2.c lewat Ajax ke `<div id="konten">`. |
| 2.b Kamar Tersedia | `halaman/kamar.html` | Daftar kamar kosong berupa card, dengan filter, pencarian, dan pengurutan.                                                                                                                               |
| 2.c Login          | `halaman/login.html` | Form login dengan validasi jQuery.                                                                                                                                                                       |

## Teknologi

HTML5, CSS3, JavaScript, jQuery 3.7.1, Ajax.

## Fitur interaktif 2.b (Kamar Tersedia)

| Fitur                 | Penjelasan                                                  |
| --------------------- | ----------------------------------------------------------- |
| Filter type           | Dropdown (Standar / Deluxe / VIP)                           |
| Filter harga maksimal | Slider (Rp 500.000 sampai Rp 1.500.000)                     |
| Pencarian             | Nomor kamar atau fasilitas                                  |
| Urutkan               | Harga termurah atau termahal                                |
| Detail                | Tombol membuka modal berisi kapasitas dan fasilitas lengkap |
| Reset                 | Mengembalikan semua filter                                  |

Hanya kamar berstatus `kosong` yang ditampilkan (proposal FR-02).

## Validasi 2.c (Login)

Validasi memakai jQuery pada event `submit`. Jika tidak valid, pengiriman dibatalkan dan pesan error tampil di bawah field.

| Field      | Aturan                          |
| ---------- | ------------------------------- |
| Email      | Wajib diisi, format email valid |
| Kata sandi | Wajib diisi, minimal 8 karakter |

Jika valid, input dicocokkan dengan akun contoh di `js/login.js`. Hasilnya berupa notifikasi: "Login berhasil sebagai Penghuni" (prposal TC-03) atau "Email atau kata sandi salah" (proposal TC-04). Tersedia tombol Tampilkan/Sembunyikan kata sandi.

## Cara menjalankan

Ajax tidak berjalan lewat `file://`, jadi gunakan cara berikut:

- **Live Server** (ekstensi VS Code): klik kanan `index.html`, pilih Open with Live Server.

Akun contoh untuk mencoba login:

- `budi@kosabah.com` / `penghuni123`
- `siti@kosabah.com` / `penghuni456`
- `andung@kosabah.com` / `admin123`

## Catatan

- Semua data kamar dan akun adalah **data contoh** berupa array JavaScript di `js/kamar.js` dan C.
- Kata sandi contoh disimpan di JavaScript sebagai untuk keperluan tugas.
- Asumsi menggunakan kata sandi minimal 8 karakter.
- Form login tidak mengirim data ke endpoint luar. Kata sandi hanya dicocokkan di JavaScript.
- Alamat, nomor telepon, dan email pemilik di homepage adalah contoh.

## Referensi proposal

- FR-01 (profil kos), FR-02 (daftar kamar tersedia), FR-03 (tombol Login), FR-04 (login email dan kata sandi)
- Tabel `kamar` (kolom data kamar) dan tabel `users` (nama, email, role)
- Skenario uji: TC-02, TC-03, TC-04, TC-16
