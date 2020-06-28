export default class World {

  static worldLimits(position: number, steps: number, direction: string): number {
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

}