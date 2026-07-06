/**
 * Question Repository
 *
 * Bertanggung jawab sebagai satu-satunya titik akses ke data Question.
 * UI tidak boleh mengimpor dummyQuestions secara langsung — semua akses
 * data soal harus melalui fungsi-fungsi yang disediakan file ini.
 *
 * Sumber data saat ini: dummy data (src/lib/data/questions.js)
 * Sumber data akan berpindah ke Supabase pada sprint mendatang, tanpa
 * mengubah cara UI memanggil Repository ini.
 */

import { dummyQuestions } from "$lib/data/questions.js";

/** @typedef {import('../types/question.js').Question} Question */

/**
 * Mengambil seluruh data soal.
 * Belum melakukan filter, sorting, mapping, atau cloning apapun.
 *
 * @returns {Question[]}
 */
export function getAllQuestions() {
  return dummyQuestions;
}
