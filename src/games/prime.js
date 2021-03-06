import brainGame from '../brain-games';
import { getRandomNumber } from '../utils';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const getCorrectAnswer = num => (isPrime(num) ? 'yes' : 'no');

const game = () => {
  const num = getRandomNumber(0, 100);
  const question = `Question: ${num} `;
  const correct = getCorrectAnswer(num);
  return { question, correct };
};

const run = () => {
  const description = 'Answer "yes" if number prime otherwise answer "no".';
  brainGame(description, game);
};

export default run;
