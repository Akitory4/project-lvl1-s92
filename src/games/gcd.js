import brainGame from '../brain-games';
import random from '../utils/random';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const game = () => {
  const a = random(0, 100);
  const b = random(0, 100);
  const question = `Question: ${a} ${b} `;
  const correct = `${gcd(a, b)}`;
  return { question, correct };
};

const run = () => {
  const rules = 'Find the greatest common divisor of given numbers.\n';
  brainGame(rules, game);
};

export default run;
