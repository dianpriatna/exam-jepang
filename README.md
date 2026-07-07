# 🇯🇵 Exam Bahasa Jepang

Web application latihan dan ujian Bahasa Jepang berbasis **SvelteKit**.

Project ini dikembangkan secara bertahap menggunakan pendekatan **Software Engineering** dengan sprint kecil, dokumentasi keputusan desain, dan prinsip _incremental development_.

> Status: 🚧 Dalam Pengembangan
> Current Version : v0.2 (Development)
> Target Stable : v1.0

---

# ✨ Tujuan Project

- Latihan soal Bahasa Jepang
- Simulasi ujian JLPT
- Digunakan di sekolah
- Mendukung banyak peserta secara bersamaan
- Siap dikembangkan menjadi Progressive Web App (PWA)

---

# 🛠️ Tech Stack

- SvelteKit
- JavaScript (JSDoc)
- Vite
- Node.js

Roadmap:

- Supabase
- PWA
- Admin Panel

---

# 🚀 Menjalankan Project

Install dependency

```bash
npm install
```

Menjalankan development server

```bash
npm run dev
```

Build production

```bash
npm run build
```

Preview production

```bash
npm run preview
```

---

# 📂 Struktur Project

```
src/
 ├── lib/
 │   ├── data/
 │   ├── repositories/
 │   ├── types/
 │   └── validation/
 │
 └── routes/
```

Prinsip:

- **types/** → bentuk data (Domain Model)
- **data/** → dummy data
- **repositories/** → akses data
- **validation/** → aturan domain

---

# 🗺️ Roadmap

## Phase 1 — Question Domain

- [x] Question Type
- [x] Dummy Questions
- [x] Question Repository
- [x] Question Validation
- [x] Repository Validation
- [ ] Consumer

---

## Phase 2 — Exam Domain

- [x] Exam Type
- [x] Dummy Exams
- [x] Exam Repository
- [ ] Exam Validation
- [ ] Repository Validation

---

## Phase 3 — Exam Engine

- [ ] Exam Session
- [ ] Timer
- [ ] Navigation
- [ ] Answer State

---

## Phase 4 — Result

- [ ] Score
- [ ] Review Answer
- [ ] Statistics

---

## Phase 5 — Database

- [ ] Supabase
- [ ] Migration
- [ ] Repository Integration

---

## Phase 6 — Admin Panel

- [ ] CRUD Question
- [ ] CRUD Exam
- [ ] Import / Export

---

## Phase 7 — PWA

- [ ] Offline Mode
- [ ] Installable
- [ ] Sync

---

# 📋 Changelog

## v0.1 — 3 Juli 2026

- Timer per soal
- Sidebar navigasi soal
- Timer keseluruhan ujian
- Konfirmasi submit

---

## v0.2 — Dalam Pengembangan

Fokus pengembangan:

- Domain Model
- Bank Soal
- Paket Soal
- Repository Pattern
- Domain Validation

---

# 📖 Development Principles

Project ini dikembangkan dengan prinsip:

- KISS
- YAGNI
- Single Responsibility Principle
- Incremental Development
- Small Sprint
- Documentation First for Important Decisions

---

# 🎯 Target

Membangun aplikasi ujian Bahasa Jepang yang:

- Mudah dipelihara
- Mudah dikembangkan
- Siap digunakan di sekolah
- Siap digunakan banyak siswa secara bersamaan

---

## © License

MIT License
