import { expect } from 'chai';
import { positionParser } from '../../src/service/inputParser';

describe('parse long dirty input', function () {
  const input = '33SDf10l20J999K10000000099DF2EF2v12n32';
  it('should parse input facing north', function () {
    const result = positionParser(input);
    expect(result.pos).equal('N');
  });
  it('should parse x position to 3', function () {
    const result = positionParser(input);
    expect(result.x).equal(3);
  });
  it('should parse y position to 2', function () {
    const result = positionParser(input);
    expect(result.y).equal(2);
  });
});

describe('parse dirty input', function () {
  const input = '0w999N100';
  it('should parse input facing west', function () {
    const result = positionParser(input);
    expect(result.pos).equal('W');
  });
  it('should parse x position to 99 ', function () {
    const result = positionParser(input);
    expect(result.x).equal(99);
  });
  it('should parse y position to 9 ', function () {
    const result = positionParser(input);
    expect(result.y).equal(9);
  });
});

describe('parse empty input to defaults (N 0 0)', function () {
  const input = '';
  it('should parse input facing North', function () {
    const result = positionParser(input);
    expect(result.pos).equal('N');
  });
  it('should parse x position to 0', function () {
    const result = positionParser(input);
    expect(result.x).equal(0);
  });
  it('should parse y position to 0', function () {
    const result = positionParser(input);
    expect(result.y).equal(0);
  });
});