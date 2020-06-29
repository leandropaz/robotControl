import readline from 'readline';
import Robot from './robot/robot';
import { positionParser } from './service/inputParser'

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question("What are the robot's coordinates (defaults to N 0 0)? ", (answer: string) => {
  const position = positionParser(answer);
  r1.question("Now please, enter the command list for this robot: ", (operation: string) => {
    const command = operation;
    const robot = new Robot(position['pos'], position['x'], position['y']);
    robot.calculatePosition(command.toUpperCase());
    r1.close();
  });
});