/**
 * Get Resolved Exam Use Case
 *
 * Mengambil Exam dan Question dari repository, lalu memakai resolver untuk
 * menggabungkan Exam dengan Question yang direferensikan.
 */

import { getAllExams } from "$lib/Repositories/exam.js";
import { getAllQuestions } from "$lib/Repositories/question.js";
import { resolveExamQuestions } from "$lib/resolvers/exam.js";

/** @typedef {import('../types/exam.js').Exam} Exam */
/** @typedef {import('../types/question.js').Question} Question */

/**
 * @typedef {Object} ResolvedExamQuestions
 * @property {Exam} exam
 * @property {Question[]} questions
 */

/**
 * Mengambil satu Exam berdasarkan id dan resolve questionIds menjadi Question.
 *
 * @param {number} examId
 * @returns {ResolvedExamQuestions}
 * @throws {Error} Jika Exam tidak ditemukan atau Question referensi tidak valid.
 */
export function getResolvedExam(examId) {
  const exams = getAllExams();
  const exam = exams.find((candidateExam) => candidateExam.id === examId);

  if (!exam) {
    throw new Error(`Exam id ${examId} could not be found`);
  }

  const questions = getAllQuestions();
  return resolveExamQuestions(exam, questions);
}
