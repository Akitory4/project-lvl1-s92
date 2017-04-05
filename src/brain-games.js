import { read, show } from './utils/io';
import { getRules, next } from './games/game';

export const newGame = () => {
  const COUNT_QUESTIONS = 3;
  const welcomeText = 'Welcome to the Brain Games!';
  show(`${welcomeText}`);
  show(getRules());
  const userName = read('May I have your name?');
  show(`Hello, ${userName}!`);
  for (let i = 0; i < COUNT_QUESTIONS; i += 1) {
    if (!next()) {
      show(`Let's try again, ${userName}!`);
      return;
    }
  }
  show(`Congratulations, ${userName}!`);
};

export default newGame;
