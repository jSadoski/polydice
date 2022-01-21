import { Die } from "../types/dice";

export function makeEqualSidedDie(numberOfFaces: number = 6): Die {
  return {
    faces: Array.from(Array(numberOfFaces)).map((e, i) => ({
      value: i,
      numOccurences: 1,
    })),
  };
}

export function makeEqualSidedDice(
  numberOfDice: number,
  numberOfSides: number = 6
) {
  return Array.from(Array<Die>(numberOfDice)).map((e, i) =>
    makeEqualSidedDie(numberOfSides)
  );
}
