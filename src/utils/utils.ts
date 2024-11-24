export function getRandomNumber(min: number, max: number, precision: number = 2): number {
  return parseFloat((Math.random() * (max - min + Number.EPSILON) + min).toFixed(precision));
}

export function shuffle(a: Array<any>) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}