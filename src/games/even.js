import brainGame from '../brain-games';
import { getRandomNumber } from '../utils';

const TRUE_ANSWER = 'yes';

const FALSE_ANSWER = 'no';

const isCorrect = num => num % 2 === 0;

const getCorrectAnswer = num => (isCorrect(num) ? TRUE_ANSWER : FALSE_ANSWER);

const game = () => {
  const num = getRandomNumber(0, 100);
  const question = `Question: ${num} `;
  const correct = getCorrectAnswer(num);
  return { question, correct };
};

const run = () => brainGame('Answer "yes" if number even otherwise answer "no".', game);

export default run;
