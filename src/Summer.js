import { Transform } from 'stream';
import { hSize, hTime, hThroughput } from './utils';

export default class Summer extends Transform {
  constructor(options) {
    super({ writableObjectMode: true, ...options });
    this._prevOutput = '';
  }

  _transform(chunk, encoding, done) {
    if (chunk !== null) {
      let output = `Bytes processed: ${hSize(
        chunk.size
      )} Lines: ${chunk.lines} Time elapsed: ${hTime(
        chunk.time
      )} Throughput: ${hThroughput(chunk.size, chunk.time)}`;
      if (this._prevOutput.length > output.length) {
        output =
          output +
          new Array(this._prevOutput.length - output.length + 1).join(' ');
      }

      this.push(output + '\r');
      this._prevOutput = output;
    }

    done();
  }
}
