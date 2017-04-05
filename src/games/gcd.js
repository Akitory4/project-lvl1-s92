import readlineSync from 'readline-sync';
import { game } from './game';
import { newGame } from '../brain-games';

const random = (min, max) => Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));

const handler = () => {
  const a = random(0, 100);
  const b = random(0, 100);
  const isCorrect = getRight(a, b, operator);
  const answer = readlineSync.question(`Question: ${a} ${operator} ${b} `);
  console.log(`Your answer: ${answer}`);
  if (answer === String(isCorrect)) {
    console.log('Correct!');
  } else {
    console.log(`'${String(answer)}' is wrong answer ;(. Correct answer was '${isCorrect}'.`);
    return false;
  }
  return true;
};

const run = () => {
  const rules = 'Find the greatest common divisor of given numbers.\n';
  newGame(game(rules, handler));
};

export default run;
