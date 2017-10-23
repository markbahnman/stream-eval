import { expect } from 'chai';
import 'mocha';

import { hSize, hTime } from '../src/utils';

describe.only('hTime', () => {
  it('should return valid hours', () => {
    const result = hTime(4 * 60 * 60 * 1000);
    expect(result).to.equal('4 h 0 m 0 s');
  });

  it('should return valid minutes', () => {
    const result = hTime(4 * 60 * 1000);
    expect(result).to.equal('4 m 0 s');
  });

  it('should return valid seconds', () => {
    const result = hTime(4 * 1000);
    expect(result).to.equal('4 secs');
  });

  it('should return valid mix of hours minute seconds', () => {
    const result = hTime(4 * 60 * 60 * 1000 + 4 * 60 * 1000 + 4 * 1000);
    expect(result).to.equal('4 h 4 m 4 s');
  });

  it('should return valid milliseconds', () => {
    const result = hTime(400);
    expect(result).to.equal('400 ms');
  });
});
