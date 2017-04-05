import readlineSync from 'readline-sync';

export const newGame = (rules, game) => {
  const COUNT_QUESTIONS = 3;
  const welcomeText = 'Welcome to the Brain Games!';
  console.log(`${welcomeText}`);
  console.log(rules);
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < COUNT_QUESTIONS; i += 1) {
    const gameData = game();
    const answer = readlineSync.question(gameData.question);
    if (answer === String(gameData.correct)) {
      console.log('Correct!');
    } else {
      console.log(`'${String(answer)}' is wrong answer ;(. Correct answer was '${gameData.correct}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default newGame;
