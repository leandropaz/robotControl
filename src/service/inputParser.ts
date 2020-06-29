export function positionParser(input: string): { pos: string, x: number, y: number } {
  const coordinates: { pos: string, x: number, y: number } =
  {
    pos: 'N',
    x: 0,
    y: 0
  };
  input = input.replace(/\s+/g, '');
  const regexp = /([NnEeSsWw]{1})(\d{1,2})(\d{1,2})/
  const regInput = input.match(regexp);
  if (regInput) {
    coordinates.pos = regInput[1].toUpperCase();
    coordinates.x = parseInt(regInput[2]);
    coordinates.y = parseInt(regInput[3]);
  }
  return coordinates;
}

//TODO: move robot commands parsing logic here.
// export function commandParser(input: string): string {
// {}