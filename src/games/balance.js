import brainGame from '../brain-games';

const random = (min, max) => Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));

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

const run = () => brainGame('Balance the given number.', game);

export default run;
