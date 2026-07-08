/**
 * @typedef {Object} Exam
 *
 * @property {number} id
 *   Identifier unik untuk ujian ini.
 *
 * @property {string} title
 *   Judul ujian yang ditampilkan ke siswa dan guru, misal "Ujian Harian N5".
 *   Menjadi identitas utama yang dikenali manusia (berbeda dari id yang cuma untuk sistem).
 *
 * @property {string | null} description
 *   Penjelasan tambahan tentang ujian ini (misal cakupan materi, catatan guru).
 *   null jika guru tidak merasa perlu menambahkan deskripsi — bukan wajib diisi,
 *   karena title saja kadang sudah cukup jelas untuk ujian yang singkat/sederhana.
 *
 * @property {'N5' | 'N4' | 'N3' | 'N2' | 'N1'} level
 *   Label level JLPT yang menjadi target/sasaran ujian ini, misal "N5".
 *   Ini adalah level ujian secara keseluruhan, BUKAN hasil turunan dari level
 *   tiap Question di dalamnya — sebuah ujian bisa saja sengaja berisi campuran
 *   soal dari beberapa level, namun tetap diberi satu label level target.
 *
 * @property {number[]} questionIds
 *   Daftar id Question yang termasuk dalam ujian ini.
 *
 *   URUTAN BERMAKNA — merepresentasikan urutan default penyajian soal kepada siswa,
 *   sebagaimana disusun oleh guru saat membuat ujian ini.
 *
 *   Setiap id harus mereferensikan Question yang valid di data/questions.js.
 *   Field ini menyimpan REFERENSI (id), bukan salinan Question — menghindari
 *   duplikasi data dan menjaga Question tetap satu-satunya sumber kebenaran.
 *
 * @property {number} durationMinutes
 *   Batas waktu pengerjaan ujian ini dalam menit, dihitung sejak siswa memulai sesi ujian.
 */

export {};
