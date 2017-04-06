import brainGame from '../brain-games';

const random = (min, max) => Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));

const gcd = (numberA, numberB) => {
  if (!numberB) {
    return numberA;
  }
  return gcd(numberB, numberA % numberB);
};

const game = () => {
  const numberA = random(1, 100);
  const numberB = random(1, 100);
  const question = `Question: ${numberA} ${numberB} `;
  const correct = `${gcd(numberA, numberB)}`;
  return { question, correct };
};

const run = () => brainGame('Find the greatest common divisor of given numbers.', game);

export default run;
