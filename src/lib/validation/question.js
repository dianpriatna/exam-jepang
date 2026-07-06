/**
 * Question Validation
 *
 * Berisi aturan validasi domain untuk struktur Question — memastikan
 * konten sebuah Question masuk akal, bukan sekadar sesuai bentuk/tipe.
 *
 * - Terpisah dari Repository.
 * - Tidak mengetahui UI.
 * - Tidak mengetahui Repository.
 * - Pure function: tidak mengubah data yang diterima, tidak ada efek samping.
 *
 * id sengaja tidak divalidasi di sini — Question yang belum disimpan
 * ke sumber data (dummy/database) dapat belum memiliki id yang bermakna.
 */

/** @typedef {import('../types/question.js').Question} Question */

/**
 * @param {*} value
 * @returns {boolean}
 */
function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

/**
 * Memeriksa apakah sebuah Question valid secara domain.
 *
 * @param {Question} question
 * @returns {boolean}
 */
export function isValidQuestion(question) {
  if (!isNonEmptyString(question.question)) {
    return false;
  }

  if (!isNonEmptyString(question.category)) {
    return false;
  }

  if (!Array.isArray(question.choices)) {
    return false;
  }

  if (question.choices.length < 2) {
    return false;
  }

  for (const choice of question.choices) {
    if (!isNonEmptyString(choice)) {
      return false;
    }
  }

  const trimmedChoices = question.choices.map((choice) => choice.trim());
  const uniqueChoices = new Set(trimmedChoices);
  if (uniqueChoices.size !== trimmedChoices.length) {
    return false;
  }

  if (!question.choices.includes(question.answer)) {
    return false;
  }

  if (
    question.explanation !== null &&
    !isNonEmptyString(question.explanation)
  ) {
    return false;
  }

  return true;
}
