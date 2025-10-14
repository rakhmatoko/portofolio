---
layout: layouts/project.njk
title: Hackintosh Intel Ultra 265K + AMD Radeon RX 6900 XT
description: 'Build Hackintosh berbasis Intel Ultra 7 dan AMD Radeon RX 6900 XT menggunakan OpenCore 1.0.5 dan macOS Tahoe 26.0.1. Dirancang untuk performa tinggi, stabilitas dual-boot, dan eksperimen teknis pada sistem non-Apple modern.'
gitHubURL: '#'
image: '/assets/hackintosh.png'
---

# Hackintosh Build — macOS Tahoe on Intel Ultra 7 + RX 6900 XT

## Overview

Proyek ini merupakan build **Hackintosh pribadi** dengan tujuan untuk menghadirkan **stabilitas, performa tinggi, dan kompatibilitas macOS penuh** pada perangkat berbasis **Intel Ultra 7 dan GPU AMD Radeon RX 6900 XT**.
Sistem ini dirancang untuk kebutuhan **pengembangan, produktivitas harian, serta eksplorasi teknis macOS di platform non-Apple**.
Build ini menggunakan **OpenCore 1.0.5** sebagai bootloader utama, dengan dual drive setup untuk macOS dan Windows.

---

## Spesifikasi Perangkat

| Komponen                        | Detail                               |
| ------------------------------- | ------------------------------------ |
| **Case**                        | Lian Li 011D Mini V2 Black           |
| **CPU**                         | Intel® Core™ Ultra 7 265K (3.87 GHz) |
| **GPU**                         | ASUS TUF AMD Radeon RX 6900 XT 16 GB |
| **Motherboard**                 | Gigabyte Z890 AORUS ELITE WIFI7      |
| **RAM**                         | Acer Predator Hera DDR5 8000 Mhz     |
| **Wi-Fi / Bluetooth (Onboard)** | Mediatek Wi-Fi 7                     |
| **Wi-Fi / Bluetooth (PCIe)**    | Broadcom BCM94360CD + 4 Antena       |
| **Storage (macOS)**             | WD Black SN850X 1TB NVMe             |
| **Storage (Windows)**           | Kingston NV3 500GB NVMe              |
| **Power Supply**                | ADATA XPG Core Reactor II 1000W      |
| **Bootloader**                  | OpenCore 1.0.5                       |
| **macOS Version**               | macOS Tahoe 26.0.1                   |

---

## Tujuan Build

Build ini dibuat untuk mencapai sistem **dual-boot yang stabil dan performa tinggi**, di mana macOS dapat digunakan sebagai **lingkungan kerja utama** untuk:

- Pengembangan software dan desain,
- Testing lintas sistem (macOS dan Windows),
- Eksperimen teknis dengan konfigurasi bootloader, patch, dan kernel extensions,
- Optimalisasi hardware modern di lingkungan macOS non-native.

---

## Tantangan Teknis

Beberapa tantangan yang ditemukan selama proses instalasi dan konfigurasi:

- ❌ **Wi-Fi tidak berfungsi di macOS Tahoe (26.0.1)** — Patch BCM94360 sementara belum tersedia untuk macOS Tahoe, **macOS Sequoia dan versi sebelumnya berjalan lancar** menggunakan patch dari **OCLP (OpenCore Legacy Patcher)**.
- 🔇 **Boot Chime UEFI tidak bekerja** — meskipun konfigurasi di OpenCore sudah diset ke `AudioSupport = True`.
- 🔍 **Masih dalam tahap eksplorasi dan fine-tuning** untuk memastikan kompatibilitas penuh di setiap pembaruan macOS.

---

## Konfigurasi Teknis

- **Bootloader:** OpenCore 1.0.5
- **SMBIOS:** MacPro7,1 (customized untuk penyesuaian GPU AMD dan CPU Intel Ultra series)
- **Kext utama:** Lilu, WhateverGreen, AppleALC, VirtualSMC, NVMeFix, dll.
- **Dual Boot Setup:** macOS di NVMe utama (APFS) dan Windows 11 di NVMe sekunder (NTFS)
- **Boot Picker:** OpenCanopy
- **File System:** GUID Partition Table (GPT)

---

## Hasil & Status

Build berhasil **booting macOS Tahoe 26.0.1 secara penuh** dengan dukungan GPU akselerasi RX 6900 XT berjalan normal.
Audio, USB Mapping, dan Bluetooth berfungsi stabil melalui modul Broadcom.
Wi-Fi onboard Mediatek tidak dapat berfungsi pada versi macOS manapun.

Sistem stabil untuk penggunaan umum dan pengujian software.
Belum ditemukan crash mayor atau kernel panic pada build saat ini.

---

## Rencana & Pengembangan Lanjutan

- Dokumentasi lengkap `EFI` folder untuk publikasi GitHub.
- Pengujian dengan versi OpenCore berikutnya (≥ 1.0.6).

---

## Refleksi

Build ini menunjukkan bahwa kombinasi **hardware modern (Intel Ultra + AMD GPU)** masih memungkinkan untuk menjalankan macOS terbaru dengan performa tinggi.
Proses ini memberikan pengalaman teknis dalam **tuning kernel extensions**, **struktur EFI**, dan **pemecahan kompatibilitas antar versi macOS**.
Meskipun belum sempurna, hasilnya menunjukkan kestabilan yang cukup untuk penggunaan produktif dan eksperimental.

---

**Kata Kunci:** Hackintosh, OpenCore, macOS Tahoe, Intel Ultra 7, AMD RX 6900 XT, EFI Configuration
