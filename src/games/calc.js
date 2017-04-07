import brainGame from '../brain-games';
import getRandomNumber from '../utils';

const getGameData = (num1, num2) => {
  let result;
  let operator;
  const n = Math.floor(Math.random() * 3);
  switch (n) {
    case 0:
      result = (num1 - num2);
      operator = '-';
      break;
    case 1:
      result = (num1 + num2);
      operator = '+';
      break;
    case 2:
      result = (num1 * num2);
      operator = '*';
      break;
    default:
      return NaN;
  }
  return { operator, result };
};

const game = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const data = getGameData(num1, num2);
  const question = `Question: ${num1} ${data.operator} ${num2} `;
  const correct = `${data.result}`;
  return { question, correct };
};

const run = () => brainGame('What is the result of the expression?', game);

export default run;
