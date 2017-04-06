import brainGame from '../brain-games';
import random from '../utils/random';

const getGameData = (a, b) => {
  let result;
  let operator;
  const n = Math.floor(Math.random() * 3);
  switch (n) {
    case 0:
      result = (a - b);
      operator = '-';
      break;
    case 1:
      result = (a + b);
      operator = '+';
      break;
    case 2:
      result = (a * b);
      operator = '*';
      break;
    default:
      return NaN;
  }
  return { operator, result };
};

const game = () => {
  const a = random(0, 100);
  const b = random(0, 100);
  const data = getGameData(a, b);
  const question = `Question: ${a} ${data.operator} ${b} `;
  const correct = `${data.result}`;
  return { question, correct };
};

const run = () => {
  const rules = 'What is the result of the expression?\n';
  brainGame(rules, game);
};

export default run;
