'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mainJs = require('./main.js');

var _mainJs2 = _interopRequireDefault(_mainJs);

function caps(x) {
  console.log('x:', x);
  return x.toUpperCase();
}

function test(x, y, z) {
  console.log('x:', x);
  console.log('y:', y);
  console.log('z:', z);
  return x + ' ' + y;
}

var text = (0, _mainJs2['default'])(['world', ['Hello', (0, _mainJs2['default'])([caps]), caps], test]).flow();

console.log(text);