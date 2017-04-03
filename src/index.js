import readlineSync from 'readline-sync';

export const question = 'May I have your name?';

export const getName = () => readlineSync.question(question);
