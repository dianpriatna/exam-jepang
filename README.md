# Exam Bahasa Jepang

Web application untuk latihan soal Bahasa Jepang berbasis **SvelteKit**.

Project ini dibangun sebagai media belajar **Software Engineering**, dengan pendekatan pengembangan bertahap (Sprint-based Development). Fokus utama bukan hanya menghasilkan aplikasi, tetapi juga mempelajari proses desain, arsitektur, dan pengambilan keputusan dalam pengembangan perangkat lunak.

---

## Tech Stack

- SvelteKit
- JavaScript (JSDoc Type)
- Supabase (akan digunakan pada sprint berikutnya)
- Vercel

---

## Menjalankan Project

```bash
npm install
npm run dev
```

---

## Roadmap

### v0.1 (Released - 3 Juli 2026)

Fitur dasar ujian.

- ✅ Ujian pilihan ganda
- ✅ Timer per soal
- ✅ Timer keseluruhan ujian
- ✅ Sidebar navigasi soal
- ✅ Konfirmasi submit

---

### v0.2 (In Progress)

Fokus membangun fondasi software engineering sebelum pengembangan fitur besar.

#### Sprint 2.1 — Question Domain ✅

- Struktur data `Question`
- JSDoc Type Definition
- Dummy Data
- Pemisahan Type dan Data

#### Sprint 2.2 — Question Repository ✅

- Repository Pattern
- Akses data melalui Repository
- Repository hanya membaca data
- UI tidak mengakses Dummy Data secara langsung

#### Sprint 2.3 — Question Validation 🚧

Sedang dikerjakan.

Target:

- Domain Validation
- Pure Function
- Business Rule Validation
- Separation of Concerns

#### Sprint Selanjutnya

- Exam Package
- Bank Soal
- Supabase Integration
- Admin Panel
- Result History

---

## Tujuan Pembelajaran

Project ini digunakan untuk mempelajari konsep-konsep berikut secara bertahap.

- Domain Model
- Repository Pattern
- Domain Validation
- Separation of Concerns
- Single Responsibility Principle (SRP)
- YAGNI
- Low Coupling
- Software Engineering Workflow

---

## Development Workflow

Setiap sprint mengikuti alur berikut.

```

Requirement
↓
Concept
↓
Design Review
↓
Engineering Review
↓
Implementation
↓
Code Review
↓
Retrospective

```

---

## License

Personal Learning Project.
