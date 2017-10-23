'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _stream = require('stream');

class Tapper extends _stream.Duplex {
  constructor(options) {
    super(_extends({ readableObjectMode: true, allowHalfOpen: true }, options));
    this._data = {
      size: 0,
      lines: 0
    };
    this._start = new Date();
  }

  _getOutput() {
    const output = _extends({}, this._data, { time: Date.now() - this._start });
    return output;
  }

  _write(chunk, encoding, done) {
    if (chunk !== null) {
      let lines = 0;
      for (let i = 0; i < chunk.length; ++i) {
        if (chunk[i] == '\n'.charCodeAt(0)) lines++;
      }
      this._data = {
        size: this._data.size + chunk.length,
        lines: this._data.lines + lines
      };
    }
    done();
  }

  _read(size) {
    setTimeout(() => {
      this.push(this._getOutput());
    }, 100);
  }
}
exports.default = Tapper;