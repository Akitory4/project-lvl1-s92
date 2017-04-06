import brainGame from '../brain-games';

const random = (min, max) => Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));

const TRUE_ANSWER = 'yes';

const FALSE_ANSWER = 'no';

const isCorrect = number => number % 2 === 0;

const getCorrectAnswer = number => (isCorrect(number) ? TRUE_ANSWER : FALSE_ANSWER);

const game = () => {
  const number = random(0, 100);
  const question = `Question: ${number} `;
  const correct = getCorrectAnswer(number);
  return { question, correct };
};

const run = () => brainGame('Answer "yes" if number even otherwise answer "no".', game);

export default run;
