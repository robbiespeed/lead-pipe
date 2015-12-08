import Pipe from './main.js';

function caps (x) {
  console.log('x:', x);
  return x.toUpperCase();
}

function test (x, y, z) {
  console.log('x:', x);
  console.log('y:', y);
  console.log('z:', z);
  return x + ' ' + y;
}

let text = Pipe([
  'world',
  ['Hello', Pipe([caps]), caps],
  test
]).flow();

console.log(text);
