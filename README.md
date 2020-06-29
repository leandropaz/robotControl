# Robot Control
A simple application to simulate a control system for robots. It reads a robot's initial position, parses the input and then asks for a list of commands for the robot to perform.  

The first input is expected to be the robot's initial coordinates: the direction it is facing - `N`orth, `E`ast, `S`outh or `W`est - the position in the X axis and the position in the Y axis - both betwen `0` and `99`. If no input is entered or the pattern `char number number` is matched, then the robot's position will defaults to `N 0 0`.  

The second input is a set of commands - `M` to move, `L` to turn left and `R` to turn right. Each command may be followed by a number of times to perform it. So the command set `M8L2M3R` will move 8 times, turn left twice, move 3 times and turn right once, as if there is no number after a command, it defaults to 1.

## Application commands
* Install dependencies: `npm install`
* Linter: `npm run lint`
* Compile and build: `npm run build`
* Run tests: `npm run test`
* Run: `npm start`