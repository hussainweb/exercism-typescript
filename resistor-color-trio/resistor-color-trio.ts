const bandColors: { [key: string]: number } = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

const units = ["ohms", "kiloohms", "megaohms", "gigaohms"];

export function decodedValue(colors: string[]): number {
  let resistance = bandColors[colors[0]] * 10 + bandColors[colors[1]];
  return resistance * Math.pow(10, bandColors[colors[2]]);
}

export function decodedResistorValue(colors: string[]): string {
  let resistance = decodedValue(colors);
  let unit = 0;
  while (resistance > 1000) {
    resistance = resistance / 1000;
    unit++;
  }
  return `${resistance} ${units[unit]}`;
}
