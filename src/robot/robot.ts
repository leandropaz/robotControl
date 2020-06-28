export class Robot {
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
  public get heading(): string {
    return this._heading;
  }
  public set heading(value: string) {
    this._heading = value;
  }

  public getPosition(): void {
    console.log(`Robot is facing ${this.heading} at position ${this._positionX} ${this._positionY}`);
    console.log('\n\n\n');
  }

  constructor(
    private _heading: string,
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
    const facing = this.heading;

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
    const facing = this.heading;
    switch (facing) {
      case 'N':
        direction === 'R' ? this.heading = 'E' : this.heading = 'W';
        break;
      case 'S':
        direction === 'R' ? this.heading = 'W' : this.heading = 'E';
        break;
      case 'E':
        direction === 'R' ? this.heading = 'S' : this.heading = 'N';
        break;
      case 'W':
        direction === 'R' ? this.heading = 'N' : this.heading = 'S';
        break;
    }
    console.log("Robot is facing ", this.heading);
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
    console.log(`Final Position: ${this.heading} ${this.positionX} ${this.positionY}`);
  }
}