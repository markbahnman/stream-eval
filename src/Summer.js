import { Transform } from 'stream';

export default class Summer extends Transform {
  constructor(options) {
    super({ writableObjectMode: true, ...options });
  }

  _transform(chunk, encoding, done) {
    if (chunk !== null) {
      this._data = chunk;
      this.push(
        `Bytes processed: ${chunk.size} Lines processed: ${chunk.lines} Time spent: ${chunk.time}ms\r`
      );
    }

    done();
  }
}
