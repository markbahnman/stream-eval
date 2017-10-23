import { expect } from 'chai';
import path from 'path';
import fs from 'fs';
import 'mocha';

import Tapper from '../src/Tapper';
import Summer from '../src/Summer';

describe('Tapper', () => {
  it('should have valid defaults', () => {
    const tap = new Tapper();
    expect(tap).to.be.an('object').that.includes.all.keys('_data', '_start');
  });

  it.skip('should count a valid text stream', () => {
    const stream = fs.createReadStream(path.join(__dirname, 'lorem.txt'));
    const tap = new Tapper();
    const sum = new Summer();
    stream.pipe(tap).pipe(sum).pipe(process.stdout);
    expect(tap).to.be.an('object');
  });
});
