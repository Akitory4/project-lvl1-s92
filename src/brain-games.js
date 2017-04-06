import readlineSync from 'readline-sync';

const COUNT_QUESTIONS = 3;

const process = (userName, game) => {
  for (let i = 0; i < COUNT_QUESTIONS; i += 1) {
    const gameData = game();
    const answer = readlineSync.question(gameData.question);
    if (answer === gameData.correct) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gameData.correct}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export const newGame = (rules, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  process(userName, game);
};

export default newGame;
