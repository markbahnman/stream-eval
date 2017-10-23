'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _stream = require('stream');

var _utils = require('./utils');

class Summer extends _stream.Transform {
  constructor(options) {
    super(_extends({ writableObjectMode: true }, options));
    this._prevOutput = '';
  }

  _transform(chunk, encoding, done) {
    if (chunk !== null) {
      this._data = chunk;
      let output = `Bytes processed: ${(0, _utils.hSize)(chunk.size)} Lines: ${chunk.lines} Time spent: ${(0, _utils.hTime)(chunk.time)} ${(0, _utils.hThroughput)(chunk.size, chunk.time)}`;
      if (this._prevOutput.length > output.length) {
        output = output + new Array(this._prevOutput.length - output.length + 1).join(' ');
      }
      this.push(output + '\r');
      this._prevOutput = output;
    }

    done();
  }
}
exports.default = Summer;