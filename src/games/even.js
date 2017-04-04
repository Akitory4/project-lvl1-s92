import readlineSync from 'readline-sync';
import { game } from './game';
import { newGame, getName } from '../brain-games';

const random = (min, max) => Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));

const COUNT_QUESTIONS = 3;

const handler = () => {
  for (let i = 0; i < COUNT_QUESTIONS; i += 1) {
    const number = random(0, 100);
    const correct = (number % 2 === 0) ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${number} `);
    if (answer === correct) {
      console.log('Correct!');
    } else {
      console.log(`\'${String(answer)}\' is wrong answer ;(. Correct answer was \'${correct}\'.
 Let's try again, ${getName()}!`);
      return;
    }
  }
  console.log(`Congratulations, ${getName()}!`);
};

const run = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".\n';
  newGame(game(rules, handler));
};

export default run;
