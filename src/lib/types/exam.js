/**
 * @typedef {Object} Exam
 * @property {number} id - Identifier unik untuk ujian ini
 * @property {string} title - Judul ujian, misal "Ujian Harian N5"
 * @property {string | null} description - Deskripsi tambahan. null jika tidak ada deskripsi.
 * @property {string} level - Label level target ujian, misal "N5". Independen dari level tiap soal di dalamnya.
 * @property {number[]} questionIds
 *   Daftar id Question yang termasuk dalam ujian ini.
 *
 *   URUTAN BERMAKNA — merepresentasikan urutan default penyajian soal kepada siswa.
 *
 *   Setiap id harus mereferensikan Question yang valid.
 *   Field ini menyimpan referensi, bukan salinan Question.
 * @property {number} durationMinutes - Durasi pengerjaan ujian dalam menit
 */
