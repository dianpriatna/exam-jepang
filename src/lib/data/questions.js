/**
 * Dummy Question Data
 *
 * Digunakan selama Sprint 2.x sebelum data berasal dari Supabase.
 *
 * File ini akan diganti oleh data repository/database pada Sprint berikutnya.
 */

/** @typedef {import('../types/question.js').Question} Question */

/** @type {Question[]} */

export const dummyQuestions = [
  {
    id: 1,
    level: "N5",
    category: "vocabulary",
    question: 'Apa arti dari kata "食べる" (taberu)?',
    choices: ["Minum", "Makan", "Tidur", "Lari"],
    answer: "Makan",
    explanation: '食べる (taberu) adalah kata kerja yang berarti "makan".',
  },
  {
    id: 2,
    level: "N5",
    category: "vocabulary",
    question: 'Apa arti dari kata "飲む" (nomu)?',
    choices: ["Makan", "Tidur", "Minum", "Belajar"],
    answer: "Minum",
    explanation: '飲む (nomu) adalah kata kerja yang berarti "minum".',
  },
  {
    id: 3,
    level: "N5",
    category: "grammar",
    question:
      "Partikel apa yang tepat: 私___学生です (Watashi ___ gakusei desu)",
    choices: ["を", "は", "に", "で"],
    answer: "は",
    explanation:
      'は dipakai untuk menandai topik kalimat, seperti "watashi WA gakusei desu" (saya adalah murid).',
  },
  {
    id: 4,
    level: "N5",
    category: "kanji",
    question: 'Apa arti dari kanji "日" (にち / に / ひ)?',
    choices: ["Bulan", "Matahari / Hari", "Air", "Gunung"],
    answer: "Matahari / Hari",
    explanation: 'Kanji 日 memiliki arti "matahari" atau "hari".',
  },
  {
    id: 5,
    level: "N5",
    category: "kanji",
    question: 'Apa arti dari kanji "水" (みず)?',
    choices: ["Api", "Tanah", "Air", "Angin"],
    answer: "Air",
    explanation: 'Kanji 水 memiliki arti "air".',
  },
];
