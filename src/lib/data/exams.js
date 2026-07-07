/**
 * Dummy Exam Data
 *
 * Digunakan selama Sprint 3.x sebelum data berasal dari Supabase.
 * File ini akan diganti oleh data repository/database pada Sprint berikutnya.
 *
 * Struktur Exam (types/exam.js) TIDAK bergantung pada sumber data ini —
 * bentuknya akan tetap sama persis baik datanya berasal dari file dummy
 * ini, maupun nanti dari Supabase.
 *
 * questionIds merujuk ke id Question yang ada di data/questions.js —
 * pastikan id yang dipakai di sini memang benar-benar ada di sana.
 * Field ini menyimpan REFERENSI ke Question, bukan salinan Question.
 */

/** @typedef {import('../types/exam.js').Exam} Exam */

/** @type {Exam[]} */
export const dummyExams = [
  {
    id: 1,
    title: "Ujian Harian N5",
    description: "Latihan singkat kosakata dan tata bahasa dasar N5.",
    level: "N5",
    questionIds: [1, 2, 3],
    durationMinutes: 15,
  },
];
