import readlineSync from 'readline-sync';

const COUNT_QUESTIONS = 3;

const gameplay = (userName, game) => {
  let isWin;
  let userAnswer;
  let correctAnswer;
  for (let i = 0; i < COUNT_QUESTIONS; i += 1) {
    const gameData = game();
    userAnswer = readlineSync.question(gameData.question);
    correctAnswer = gameData.correct;
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      isWin = false;
      return { isWin, userAnswer, correctAnswer };
    }
  }
  isWin = true;
  return { isWin, userAnswer, correctAnswer };
};

export const newGame = (rules, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  const gameResult = gameplay(userName, game);
  if (gameResult.isWin) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`'${gameResult.userAnswer}' is wrong answer ;(. Correct answer was '${gameResult.correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
};

export default newGame;
