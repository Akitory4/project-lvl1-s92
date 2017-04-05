import { game } from './game';
import { newGame } from '../brain-games';
import { read, show } from '../utils/io';
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

const handler = () => {
  const a = random(0, 100);
  const b = random(0, 100);
  const operator = getOperator();
  const isCorrect = getCorrect(a, b, operator);
  const answer = read(`Question: ${a} ${operator} ${b} `);
  show(`Your answer: ${answer}`);
  if (answer === String(isCorrect)) {
    show('Correct!');
  } else {
    show(`'${String(answer)}' is wrong answer ;(. Correct answer was '${isCorrect}'.`);
    return false;
  }
  return true;
};

const run = () => {
  const rules = 'What is the result of the expression?\n';
  newGame(game(rules, handler));
};

export default run;
