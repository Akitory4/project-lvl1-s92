import brainGame from '../brain-games';
import { getRandomNumber } from '../utils';

const isCorrect = num => num % 2 === 0;

const getCorrectAnswer = num => (isCorrect(num) ? 'yes' : 'no');

const game = () => {
  const num = getRandomNumber(0, 100);
  const question = `Question: ${num} `;
  const correct = getCorrectAnswer(num);
  return { question, correct };
};

const run = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  brainGame(description, game);
};

export default run;
