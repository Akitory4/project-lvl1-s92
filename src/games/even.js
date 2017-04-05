import readlineSync from 'readline-sync';
import { game } from './game';
import { newGame } from '../brain-games';

const random = (min, max) => Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));

const getCorrect = number => (number % 2 === 0 ? 'yes' : 'no');

const handler = () => {
  const number = random(0, 100);
  const answer = readlineSync.question(`Question: ${number} `);
  if (answer === getCorrect(number)) {
    console.log('Correct!');
  } else {
    console.log(`'${String(answer)}' is wrong answer ;(. Correct answer was '${getCorrect(number)}'.`);
    return false;
  }
  return true;
};

const run = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".\n';
  newGame(game(rules, handler));
};

export default run;
