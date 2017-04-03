#!/usr/bin/env node
import { getName, welcomeText, questionEven } from '../index';

const COUNT_QUESTIONS = 3;

console.log(`${welcomeText} \nAnswer \"yes\" if number even otherwise answer \"no\".\n`);
const userName = getName();

const random = (min, max) => Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));

const game = () => {
  for (let i = 0; i < COUNT_QUESTIONS; i += 1) {
    const answer = questionEven(random(0, 100));
    if (!answer) return;
  }
  console.log(`Congratulations, ${userName}!`);
};

game();
