import brainGame from '../brain-games';
import { getRandomNumber } from '../utils';

const getCorrect = (num) => {
  const array = num.toString().split('').map(n => Number(n)).sort();
  while (array[array.length - 1] - array[0] > 1) {
    array[array.length - 1] -= 1;
    array[0] += 1;
    array.sort();
  }
  return array.join('');
};

const game = () => {
  const num = getRandomNumber(0, 9990);
  const question = `Question: ${num} `;
  const correct = `${getCorrect(num)}`;
  return { question, correct };
};

const run = () => {
  const description = 'Balance the given number.';
  brainGame(description, game);
};

export default run;
