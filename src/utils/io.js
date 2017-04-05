import readlineSync from 'readline-sync';

export const read = question => readlineSync.question(question);

export const show = text => console.log(text);
