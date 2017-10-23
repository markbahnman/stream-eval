import Tapper from './Tapper';
import Summer from './Summer';

const tap = new Tapper();
const sum = new Summer();

process.stdin.pipe(tap).pipe(sum).pipe(process.stdout);
