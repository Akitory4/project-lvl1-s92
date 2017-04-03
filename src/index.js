import readlineSync from 'readline-sync';

export const welcomeText = 'Welcome to the Brain Games!';

let userName;
export const getName = () => {
  userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const questionEven = (number) => {
  const correct = (number % 2 === 0) ? 'yes' : 'no';
  const incorrect = (number % 2 === 0) ? 'no' : 'yes';
  const answer = readlineSync.question(`Question: ${number} `, {
    trueValue: correct,
    falseValue: incorrect,
  });
  if (answer === true) {
    console.log('Correct!');
  } else {
    console.log(`\'${String(answer)}\' is wrong answer ;(. Correct answer was \'${correct}\'.\n
Let's try again, ${userName}!`);
  }
  return answer === true;
};

