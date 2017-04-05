import { game } from './game';
import { newGame } from '../brain-games';
import random from '../utils/random';
import { read, show } from '../utils/io';

const getCorrect = number => (number % 2 === 0 ? 'yes' : 'no');

const handler = () => {
  const number = random(0, 100);
  const answer = read(`Question: ${number} `);
  if (answer === getCorrect(number)) {
    show('Correct!');
  } else {
    show(`'${String(answer)}' is wrong answer ;(. Correct answer was '${getCorrect(number)}'.`);
    return false;
  }
  return true;
};

const run = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".\n';
  newGame(game(rules, handler));
};

export default run;
