import brainGame from '../brain-games';
import { getRandomNumber } from '../utils';


const getProgressionArray = (len, coefficientAP) => {
  const minValue = getRandomNumber(0, 100);
  const getProgression = (n) => {
    let sum = minValue;
    for (let i = 1; i <= n; i += 1) {
      sum += (i + coefficientAP);
    }
    return sum;
  };
  const array = [];
  for (let i = 0; i < len; i += 1) {
    array.push(getProgression(i));
  }
  return array;
};

const game = () => {
  /** @coefficientAP: random coefficient for arithmetic progression */
  const lenArray = 10;
  const hideIndex = getRandomNumber(0, (lenArray - 1));
  const coefficientAP = getRandomNumber(0, lenArray);
  const progressionArray = getProgressionArray(lenArray, coefficientAP);
  const correct = `${progressionArray[hideIndex]}`;
  console.log(`debug: ${correct}`);// ToDo: remove it
  progressionArray[hideIndex] = '...';
  const question = progressionArray.join(' ').toString();
  return { question, correct };
};

const run = () => {
  const description = 'What number is missing in this progression?';
  brainGame(description, game);
};

export default run;
