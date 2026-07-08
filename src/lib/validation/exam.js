/**
 * Exam Validation
 *
 * Berisi aturan validasi domain untuk struktur Exam.
 *
 * - Terpisah dari Repository.
 * - Tidak mengetahui UI.
 * - Tidak mengetahui Store.
 * - Tidak mengetahui Service.
 * - Tidak mengetahui Repository.
 * - Pure function: tidak mengubah data yang diterima, tidak ada efek samping.
 *
 * id sengaja tidak divalidasi di sini, konsisten dengan Question Validation.
 */

/** @typedef {import('../types/exam.js').Exam} Exam */

const VALID_LEVELS = ["N5", "N4", "N3", "N2", "N1"];

/**
 * @param {*} value
 * @returns {boolean}
 */
function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

/**
 * @param {*} value
 * @returns {boolean}
 */
function isPositiveInteger(value) {
  return Number.isInteger(value) && value > 0;
}

/**
 * Memeriksa apakah sebuah Exam valid secara domain.
 *
 * @param {Exam} exam
 * @returns {boolean}
 */
export function isValidExam(exam) {
  if (typeof exam !== "object" || exam === null) {
    return false;
  }

  if (!isNonEmptyString(exam.title)) {
    return false;
  }

  if (typeof exam.description !== "string") {
    return false;
  }

  if (!VALID_LEVELS.includes(exam.level)) {
    return false;
  }

  if (!Array.isArray(exam.questionIds)) {
    return false;
  }

  if (exam.questionIds.length < 1) {
    return false;
  }

  const uniqueQuestionIds = new Set();
  for (const questionId of exam.questionIds) {
    if (!isPositiveInteger(questionId)) {
      return false;
    }

    if (uniqueQuestionIds.has(questionId)) {
      return false;
    }

    uniqueQuestionIds.add(questionId);
  }

  if (!isPositiveInteger(exam.durationMinutes)) {
    return false;
  }

  return true;
}
