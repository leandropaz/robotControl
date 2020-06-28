export default class World {

  static MAX_LIMIT = 99;
  static MIN_LIMIT = 0;
  static worldLimits(position: number, steps: number, direction: string): number {
    while (steps > 0) {
      if (direction === '+') {
        position++;
        if (position > this.MAX_LIMIT) {
          position = this.MIN_LIMIT;
        }
      }
      else {
        position--;
        if (position < this.MIN_LIMIT) {
          position = this.MAX_LIMIT;
        }
      }
      steps--;
    }
    return position;
  }

}