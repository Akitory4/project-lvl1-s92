import readlineSync from 'readline-sync';
import { getRules, start } from './games/game';

let userName;

export const getName = () => userName;

export const newGame = () => {
  const welcomeText = 'Welcome to the Brain Games!';
  console.log(`${welcomeText}`);
  console.log(getRules());
  userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  start();
};
