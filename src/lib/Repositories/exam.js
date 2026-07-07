/**
 * Exam Repository
 *
 * Bertanggung jawab sebagai satu-satunya titik akses ke data Exam.
 * UI tidak boleh mengimpor dummyExams secara langsung.
 *
 * Repository ini TIDAK terhubung ke Question Repository — questionIds
 * yang dikembalikan masih berupa referensi id mentah, belum di-resolve
 * jadi Question lengkap. Menggabungkan Exam dengan Question aslinya
 * adalah tanggung jawab lapisan lain (Service/Engine), bukan Repository.
 *
 * Sumber data saat ini: dummy data (src/lib/data/exams.js)
 * Sumber data akan berpindah ke Supabase pada sprint mendatang, tanpa
 * mengubah cara pemanggil memakai Repository ini.
 */

import { dummyExams } from "$lib/data/exams.js";

/** @typedef {import('../types/exam.js').Exam} Exam */

/**
 * Mengambil seluruh data ujian.
 * Belum melakukan filter, sorting, mapping, validation, atau cloning apapun.
 *
 * @returns {Exam[]}
 */
export function getAllExams() {
  return dummyExams;
}
