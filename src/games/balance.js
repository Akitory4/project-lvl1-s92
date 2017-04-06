import brainGame from '../brain-games';
import random from '../utils/random';

const getCorrect = (number) => {
  const array = number.toString().split('').map(n => Number(n)).sort();
  while (array[array.length - 1] - array[0] > 1) {
    array[array.length - 1] -= 1;
    array[0] += 1;
    array.sort();
  }
  return array.join('');
};

const game = () => {
  const number = random(0, 9990);
  const question = `Question: ${number} `;
  const correct = `${getCorrect(number)}`;
  return { question, correct };
};

const run = () => {
  const rules = 'Balance the given number.\n';
  brainGame(rules, game);
};

export default run;
