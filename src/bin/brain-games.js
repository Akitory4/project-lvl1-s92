#!/usr/bin/env node
import { getName } from '../index.js';

console.log('Welcome to the Brain Games!\n');
const userName = getName();
console.log(`Hello, ${userName}!`);

