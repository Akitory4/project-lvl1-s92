import brainGame from '../brain-games';
import { getRandomNumber } from '../utils';


const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const game = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `Question: ${num1} ${num2} `;
  const correct = `${gcd(num1, num2)}`;
  return { question, correct };
};

const run = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  brainGame(description, game);
};

export default run;
