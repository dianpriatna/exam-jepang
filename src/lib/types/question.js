/**
 * @typedef {Object} Question
 * @property {number} id - Identifier unik untuk soal ini
 * @property {string} level - Level kesulitan, misal "N5", "N4", dst (mengikuti standar JLPT)
 * @property {string} category - Kategori soal, misal "vocabulary", "grammar", "kanji"
 * @property {string} question - Teks pertanyaan
 * @property {string[]} choices - Daftar pilihan jawaban
 * @property {string} answer - Jawaban benar, harus sama persis dengan salah satu isi choices
 * @property {string | null} explanation - Penjelasan singkat kenapa jawaban itu benar. null jika belum ada pembahasan.
 */

export {};
