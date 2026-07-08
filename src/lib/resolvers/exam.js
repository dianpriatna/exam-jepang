/**
 * Exam Resolver
 *
 * Menggabungkan Exam yang sudah tersedia dengan Question yang sudah tersedia.
 * Tidak mengambil data, tidak mengetahui Repository, UI, Store, atau database.
 */

/** @typedef {import('../types/exam.js').Exam} Exam */
/** @typedef {import('../types/question.js').Question} Question */

/**
 * @typedef {Object} ResolvedExamQuestions
 * @property {Exam} exam
 * @property {Question[]} questions
 */

/**
 * Mengambil Question yang direferensikan oleh Exam sesuai urutan questionIds.
 *
 * @param {Exam} exam
 * @param {Question[]} questions
 * @returns {ResolvedExamQuestions}
 * @throws {Error} Jika ada id Question yang tidak ditemukan.
 */
export function resolveExamQuestions(exam, questions) {
  const questionsById = new Map(
    questions.map((question) => [question.id, question])
  );

  const resolvedQuestions = exam.questionIds.map((questionId) => {
    const question = questionsById.get(questionId);

    if (!question) {
      throw new Error(
        `Question id ${questionId} referenced by Exam could not be resolved`
      );
    }

    return question;
  });

  return {
    exam,
    questions: resolvedQuestions,
  };
}
