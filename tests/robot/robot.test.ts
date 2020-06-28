import { expect } from 'chai';
import Robot from '../../src/robot/robot';

describe('instantiate', function () {
  function instantiate(direction: string, x: number, y: number) {
    const robot = new Robot(direction, x, y);
    it(`should start robot in positionX ${x}`, function () {
      expect(robot.positionX).equal(x);
    });
    it(`should start robot in positionY ${y}`, function () {
      expect(robot.positionY).equal(y);
    });
    it(`should start robot facing ${direction}`), function () {
      expect(robot.facing).eql(direction);
    }
  }
  const direction = 'NESW';

  for (let i = 0; i < 4; i++) {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const facing = direction[Math.floor(Math.random() * direction.length)];
    instantiate(facing, x, y);
  }

});

describe('simple movement ignoring unknown commands', function () {
  const robot = new Robot('N', 0, 0);
  robot.calculatePosition('KLMGJ');

  it('should end facing west', function () {
    expect(robot.facing).eql('W');
  });
  it('should end at 99 x position', function () {
    expect(robot.positionX).equal(99);
  });
  it('should not move in y axis', function () {
    expect(robot.positionY).equal(0);
  });
});

describe('complex movement', function () {
  const robot = new Robot('N', 0, 0);
  robot.calculatePosition('M1RM4L3M2');

  it('should end facing south', function () {
    expect(robot.facing).eql('S');
  });
  it('should end at 4 x position', function () {
    expect(robot.positionX).equal(4);
  });
  it('should end at position 99 in the y axis', function () {
    expect(robot.positionY).equal(99);
  });
});