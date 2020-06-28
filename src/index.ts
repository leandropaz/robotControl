import readline from 'readline';
import Robot from './robot/robot';

const coordinates: string[] = [];

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question("What are the robot's coordinates? ", (answer: string) => {
  answer = answer.replace(/\s+/g, '');
  for (let i = 0; i < 3; i++) {
    coordinates.push(answer[i]);
  }
  r1.question("Now please, enter the command list for this robot: ", (operation: string) => {
    const command = operation;
    const robot = new Robot(coordinates[0].toUpperCase(), parseInt(coordinates[1]), parseInt(coordinates[2]));
    robot.getPosition();
    robot.calculatePosition(command.toUpperCase());
    r1.close();
  });
});





// robot.calculatePosition('M1RM4L3M2');
