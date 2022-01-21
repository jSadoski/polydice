export function generateRandomDiceRoll(numberOfSides: number = 6) {
  return Math.floor(Math.random() * numberOfSides) + 1;
}
