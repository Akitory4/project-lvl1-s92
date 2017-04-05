import { newGame } from '../brain-games';
import random from '../utils/random';

const getCorrect = (a, b, op) => {
  switch (op) {
    case '-':
      return a - b;
    case '+':
      return a + b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
};

const getOperator = () => {
  const n = Math.floor(Math.random() * 3);
  switch (n) {
    case 0:
      return '-';
    case 1:
      return '+';
    case 2:
      return '*';
    default:
      return NaN;
  }
};

const game = () => {
  const a = random(0, 100);
  const b = random(0, 100);
  const operator = getOperator();
  const question = `Question: ${a} ${operator} ${b} `;
  const correct = getCorrect(a, b, operator);
  return { question, correct };
};

const run = () => {
  const rules = 'What is the result of the expression?\n';
  newGame(rules, game);
};

export default run;
