import readlineSync from 'readline-sync';
import { getRules, next } from './games/game';

const COUNT_QUESTIONS = 3;

export const newGame = () => {
  const welcomeText = 'Welcome to the Brain Games!';
  console.log(`${welcomeText}`);
  console.log(getRules());
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < COUNT_QUESTIONS; i += 1) {
    if (!next()) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default newGame;
