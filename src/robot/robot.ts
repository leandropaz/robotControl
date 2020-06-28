export default class Robot {
  public get positionY(): number {
    return this._positionY;
  }
  public set positionY(value: number) {
    this._positionY = value;
  }
  public get positionX(): number {
    return this._positionX;
  }
  public set positionX(value: number) {
    this._positionX = value;
  }
  public get facing(): string {
    return this._facing;
  }
  public set facing(value: string) {
    this._facing = value;
  }

  public getPosition(): void {
    console.log(`Robot is facing ${this.facing} at position ${this._positionX} ${this._positionY}`);
    console.log('\n\n\n');
  }

  constructor(
    private _facing: string,
    private _positionX: number,
    private _positionY: number
  ) { }

  private worldLimits(position: number, steps: number, direction: string): number {
    while (steps > 0) {
      if (direction === '+') {
        position++;
        if (position === 100) {
          position = 0;
        }
      }
      else {
        position--;
        if (position === -1) {
          position = 99;
        }
      }
      steps--;
    }
    return position;
  }

  private move(times: number): void {
    const facing = this.facing;

    switch (facing) {
      case 'N':
        this.positionY = this.worldLimits(this.positionY, times, '+');
        break;
      case 'S':
        this.positionY = this.worldLimits(this.positionY, times, '-');
        break;
      case 'E':
        this.positionX = this.worldLimits(this.positionX, times, '+');
        break;
      case 'W':
        this.positionX = this.worldLimits(this.positionX, times, '-');
        break;
    }
    console.log("Now robot is in position: ", this.positionX, this.positionY);
  }

  private turn(direction: string): void {
    const facing = this.facing;
    switch (facing) {
      case 'N':
        direction === 'R' ? this.facing = 'E' : this.facing = 'W';
        break;
      case 'S':
        direction === 'R' ? this.facing = 'W' : this.facing = 'E';
        break;
      case 'E':
        direction === 'R' ? this.facing = 'S' : this.facing = 'N';
        break;
      case 'W':
        direction === 'R' ? this.facing = 'N' : this.facing = 'S';
        break;
    }
    console.log("Robot is facing ", this.facing);
  }

  public calculatePosition(commands: string): void {
    const regex = /([MLR]{1})(\d{0,3})/g;
    let command;
    while ((command = regex.exec(commands)) !== null) {
      let times: number = command[2] === '' ? 1 : parseInt(command[2]);
      if (command[1] === 'M') {
        this.move(times)
      }
      if (command[1] === 'R' || command[1] === 'L') {
        while (times > 0) {
          this.turn(command[1]);
          times--;
        }
      }
    }
    console.log(`Final Position: ${this.facing} ${this.positionX} ${this.positionY}`);
  }
}