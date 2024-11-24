import {v4 as uuidv4} from 'uuid'

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

export interface DeepItem {
  id: string,
  label: string,
  items?: DeepItem[],
}

export const generateDeepItems = (
  numberOfItems: number,
  maxLevel = 2,
  currentLevel = 0
): DeepItem[] => {

  const items: DeepItem[] = []

  for (let i = 0; i < numberOfItems; i++) {
    const item: DeepItem = {
      id: uuidv4(),
      label: `Item ${i}`,
    }

    if (currentLevel < maxLevel) {
      item.items = generateDeepItems(numberOfItems, maxLevel, currentLevel + 1)
    }

    items.push(item)
  }

  return items
}