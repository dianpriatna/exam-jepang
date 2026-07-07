/**
 * Dummy Exam Data
 *
 * Digunakan selama Sprint 3.x sebelum data berasal dari Supabase.
 * File ini akan diganti oleh data repository/database pada Sprint berikutnya.
 *
 * questionIds merujuk ke id Question yang ada di data/questions.js —
 * pastikan id yang dipakai di sini memang benar-benar ada di sana.
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
