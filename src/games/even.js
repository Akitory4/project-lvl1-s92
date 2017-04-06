import brainGame from '../brain-games';
import random from '../utils/random';

const getCorrect = number => (number % 2 === 0 ? 'yes' : 'no');

const game = () => {
  const number = random(0, 100);
  const question = `Question: ${number} `;
  const correct = getCorrect(number);
  return { question, correct };
};

const run = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".\n';
  brainGame(rules, game);
};

export default run;
