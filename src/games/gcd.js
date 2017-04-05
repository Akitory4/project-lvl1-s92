import { game } from './game';
import { newGame } from '../brain-games';
import { read, show } from '../utils/io';
import random from '../utils/random';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const handler = () => {
  const a = random(0, 100);
  const b = random(0, 100);
  const isCorrect = gcd(a, b);
  const answer = read(`Question: ${a} ${b} `);
  show(`Your answer: ${answer}`);
  if (answer === String(isCorrect)) {
    show('Correct!');
  } else {
    show(`'${String(answer)}' is wrong answer ;(. Correct answer was '${isCorrect}'.`);
    return false;
  }
  return true;
};

const run = () => {
  const rules = 'Find the greatest common divisor of given numbers.\n';
  newGame(game(rules, handler));
};

export default run;
