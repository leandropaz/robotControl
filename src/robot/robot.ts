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

  private move(times: number): void {
    const facing = this.heading;

    switch (facing) {
      case 'N':
        this.positionY += times;
        break;
      case 'S':
        this.positionY -= times;
        break;
      case 'E':
        this.positionX += times;
        break;
      case 'W':
        this.positionX -= times;
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

  public calculatePosition(command: string): void {
    const chars = command.split('');
    for (let i = 0; i < chars.length; i++) {
      console.log("*********************************");
      console.log("Now we're performing a ", chars[i]);
      if (chars[i] === 'M') {
        const times = isNaN(parseInt(chars[i + 1])) ? 1 : parseInt(chars[i + 1]);
        this.move(times);
        console.log(`Moved ${times} times`)
      }
      if (isNaN(parseInt(chars[i])) && chars[i] !== 'M') {
        let times = isNaN(parseInt(chars[i + 1])) ? 1 : parseInt(chars[i + 1]);
        while (times > 0) {
          this.turn(chars[i]);
          console.log(`Turned ${times} times`)
          times--;
        }

      }
    }
    console.log(`Final Position: ${this.heading} ${this.positionX} ${this.positionY}`);
  }
}