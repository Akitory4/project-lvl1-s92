import brainGame from '../brain-games';

const random = (min, max) => Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));

const getGameData = (numberA, numberB) => {
  let result;
  let operator;
  const n = Math.floor(Math.random() * 3);
  switch (n) {
    case 0:
      result = (numberA - numberB);
      operator = '-';
      break;
    case 1:
      result = (numberA + numberB);
      operator = '+';
      break;
    case 2:
      result = (numberA * numberB);
      operator = '*';
      break;
    default:
      return NaN;
  }
  return { operator, result };
};

const game = () => {
  const numberA = random(0, 100);
  const numberB = random(0, 100);
  const data = getGameData(numberA, numberB);
  const question = `Question: ${numberA} ${data.operator} ${numberB} `;
  const correct = `${data.result}`;
  return { question, correct };
};

const run = () => brainGame('What is the result of the expression?', game);

export default run;
