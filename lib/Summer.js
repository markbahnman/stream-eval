'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _stream = require('stream');

class Summer extends _stream.Transform {
  constructor(options) {
    super(_extends({ writableObjectMode: true }, options));
  }

  _transform(chunk, encoding, done) {
    if (chunk !== null) {
      this._data = chunk;
      this.push(`Bytes processed: ${chunk.size} Lines processed: ${chunk.lines} Time spent: ${chunk.time}\r`);
    }

    done();
  }
}
exports.default = Summer;