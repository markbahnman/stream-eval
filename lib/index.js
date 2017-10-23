'use strict';

var _Tapper = require('./Tapper');

var _Tapper2 = _interopRequireDefault(_Tapper);

var _Summer = require('./Summer');

var _Summer2 = _interopRequireDefault(_Summer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tap = new _Tapper2.default();
const sum = new _Summer2.default();

process.stdin.pipe(tap).pipe(sum).pipe(process.stdout);