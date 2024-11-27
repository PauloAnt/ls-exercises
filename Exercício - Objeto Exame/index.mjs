import Exam from "./entities/Exam.mjs";

const answer = { q1: 'a', q2: 'c', q3: 'a', q4: 'c', q5: 'd' };
const weight = { q1: 2, q2: 1, q3: 2, q4: 1, q5: 1 };

const e1 = { q1: 'a', q2: 'c', q3: 'a', q4: 'c', q5: 'd' }; // 7 pontos
const e2 = { q1: 'a', q2: 'c', q3: 'b', q4: 'c', q5: 'd' }; // 5 pontos
const e3 = { q1: 'a', q2: 'b', q3: 'a', q4: 'd', q5: 'b' }; // 4 pontos
const e4 = { q1: 'b', q2: 'b', q3: 'b', q4: 'b', q5: 'b' }; // 0 pontos

const exam = new Exam(weight, answer);
exam.add(e1);
exam.add(e2);
exam.add(e3);
exam.add(e4);

console.log(`Provas:`, exam.exams);
console.log(`Média: ${exam.avg()}`); 
console.log(`Min: ${exam.min(2).join(" | ")}`); 
console.log(`Max: ${exam.max(2).join(" | ")}`); 
console.log(`LT (<5): ${exam.lt(5).join(" | ")}`);
console.log(`GT (>3): ${exam.gt(3).join(" | ")}`);
