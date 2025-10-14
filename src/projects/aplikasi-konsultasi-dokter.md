---
layout: layouts/project.njk
title: Aplikasi Konsultasi Dokter Mobile (React Native)
description: 'Aplikasi mobile berbasis React Native untuk layanan konsultasi dokter online di Klinik Mitra Anda Timika. Menggunakan Firebase untuk autentikasi, database, dan penyimpanan data, aplikasi ini mempermudah pasien berkonsultasi kapan saja dan di mana saja tanpa harus datang ke klinik.'
gitHubURL: 'https://github.com/rakhmatoko/mitra-anda'
image: '/assets/aplikasi-konsultasi-dokter.png'
---

# Lihat Project Ini di Perpustakaan Politeknik Saint Paul Sorong

<div class="project-link">
  <a
    class="project-link__button"
    href="https://jurnal.poltekstpaul.ac.id/index.php/jsoscied/article/view/694/485"
    target="_blank"
    rel="noopener"
    aria-label="Baca Jurnal Lengkap (terbuka di tab baru)"
  >
    <span>Baca Jurnal Lengkap ↗️</span>
  </a>
</div>

## Ringkasan

Proyek ini merupakan **aplikasi mobile lintas platform (Android & iOS)** yang dikembangkan untuk mempermudah masyarakat melakukan **konsultasi dokter secara online** di _Klinik Mitra Anda Timika_.
Aplikasi ini dibangun menggunakan **framework React Native**, dengan dukungan **Firebase** sebagai backend untuk autentikasi, basis data, dan penyimpanan data.

---

## Latar Belakang

Sebelum sistem ini dibuat, proses konsultasi di klinik masih dilakukan **secara manual dan tatap muka**, sehingga menimbulkan beberapa kendala:

- Waktu dan jadwal konsultasi terbatas
- Pasien sulit mengetahui promo atau informasi dari klinik
- Tidak ada layanan konsultasi jarak jauh
- Pencatatan rekam medis masih dilakukan secara manual

Permasalahan ini menjadi dasar pengembangan sistem konsultasi berbasis mobile yang lebih efisien dan mudah diakses kapan saja dan di mana saja.

---

## Tujuan

Membangun sistem **konsultasi dokter digital** yang memungkinkan pasien:

- Melakukan konsultasi online tanpa harus datang ke klinik
- Mendapatkan informasi dan berita kesehatan dari klinik
- Melihat profil serta rating dokter
- Mengelola akun dan rekam medis secara mandiri

---

## Fitur Utama

- 🔐 **Autentikasi Pengguna** – Login dan registrasi dengan Firebase Authentication
- 👩‍⚕️ **Pencarian Dokter** – Berdasarkan kategori atau rating dokter
- 💬 **Konsultasi Online** – Chat langsung antara pasien dan dokter
- 📰 **Berita & Promo Klinik** – Informasi dan penawaran terbaru
- 📍 **Profil Klinik & Lokasi** – Terintegrasi dengan Google Maps
- 📁 **Rekam Medis Pasien** – Melihat riwayat konsultasi
- ⚙️ **Manajemen Profil** – Ubah data diri dan keamanan akun
- 📱 **Lintas Platform** – Dapat dijalankan di Android dan iOS

---

## Proses Pengembangan

Pengembangan aplikasi ini menggunakan **metode Prototype** dari SDLC (Software Development Life Cycle):

1. **Pengumpulan Kebutuhan** – Wawancara dengan pihak klinik dan studi literatur.
2. **Pembuatan Prototipe** – Desain sistem menggunakan UML (Use Case, Activity, Sequence, Class Diagram).
3. **Evaluasi Prototipe** – Tinjauan bersama pihak klinik untuk validasi kebutuhan.
4. **Pengkodean Sistem** – Implementasi desain menggunakan **React Native** dan integrasi dengan **Firebase**.
5. **Pengujian Sistem** – Menggunakan metode **Black Box Testing** untuk memastikan semua fungsi berjalan.
6. **Implementasi Akhir** – Aplikasi siap digunakan oleh pihak klinik dan pasien.

---

## Teknologi yang Digunakan

- **Frontend**: React Native (JavaScript)
- **Backend**: Firebase Firestore, Firebase Authentication, Firebase Storage
- **Tools**: Expo, VSCode, Android Studio, Xcode, Figma, Draw.io, Whimsical
- **Desain**: Atomic Design Pattern

---

## Hasil Pengujian

Pengujian dilakukan dengan pendekatan **Black Box Testing** untuk memastikan semua fitur berjalan sesuai fungsi.

| Aktivitas                 | Hasil yang Diharapkan                      | Status    |
| ------------------------- | ------------------------------------------ | --------- |
| Login dengan akun valid   | Berhasil masuk ke halaman utama            | ✅ Sukses |
| Registrasi pengguna baru  | Data tersimpan di database                 | ✅ Sukses |
| Chat dengan dokter        | Pesan tersimpan dan muncul di halaman chat | ✅ Sukses |
| Melihat berita atau promo | Navigasi ke halaman detail berita          | ✅ Sukses |
| Logout dari sistem        | Kembali ke halaman awal                    | ✅ Sukses |

---

## Hasil dan Dampak

- Sistem berhasil **mendigitalisasi proses konsultasi manual** menjadi layanan mobile yang efisien.
- Pasien kini bisa melakukan konsultasi **kapan pun dan di mana pun** tanpa batas lokasi.
- Informasi klinik seperti berita dan promo dapat diakses dengan cepat dan terverifikasi.
- Proses komunikasi antara dokter dan pasien menjadi **lebih cepat dan transparan**.

---

## Refleksi

Melalui proyek ini, saya mendapatkan pengalaman langsung dalam:

- Membangun aplikasi lintas platform menggunakan **React Native**
- Mengelola integrasi **Firebase** untuk autentikasi dan database real-time
- Merancang sistem dengan pendekatan **prototyping dan pengujian fungsional**
- Mengubah kebutuhan bisnis menjadi solusi digital yang nyata

---

## Ucapan Terima Kasih

Terima kasih kepada **Klinik Mitra Anda Timika** yang telah memberikan izin dan dukungan selama proses pengembangan dan penelitian aplikasi ini.

---

**Kata Kunci:** React Native, Firebase, Aplikasi Kesehatan, Konsultasi Dokter, Mobile App
