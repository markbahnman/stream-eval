import { Duplex } from 'stream';

export default class Tapper extends Duplex {
  constructor(options) {
    super({ readableObjectMode: true, allowHalfOpen: true, ...options });
    this._data = {
      size: 0,
      lines: 0
    };
    this._start = new Date();
  }

  _getOutput() {
    const output = { ...this._data, time: Date.now() - this._start };
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
    // This is a weird hack because without it _read continuously
    // fires and _write never does for some reason
    setTimeout(() => {
      this.push(this._getOutput());
    }, 100);
  }
}
