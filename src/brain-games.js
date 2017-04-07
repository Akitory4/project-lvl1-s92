import readlineSync from 'readline-sync';

const COUNT_QUESTIONS = 3;

const gameplay = (userName, game) => {
  for (let i = 0; i < COUNT_QUESTIONS; i += 1) {
    const gameData = game();
    const userAnswer = readlineSync.question(gameData.question);
    const correctAnswer = gameData.correct;
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
  }
  return true;
};

export const newGame = (rules, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  if (gameplay(userName, game)) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default newGame;
