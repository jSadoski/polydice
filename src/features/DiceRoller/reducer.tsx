import { useReducer } from "react";
import { DieRoll } from "../../types/roll";
import { makeEqualSidedDice } from "../../utils/diceFactory";
import { generateRandomDiceRoll } from "../../utils/generateRandomNumber";

interface Action {
  type: string;
}

function reducer(state: DieRoll[], action: Action): DieRoll[] {
  switch (action.type) {
    case "rollall":
      return state.map((die) => ({
        ...die,
        rollValue: generateRandomDiceRoll(),
      }));
    default:
      throw new Error("Action type not recognized");
  }
}

function initialDiceRoll(): DieRoll[] {
  return makeEqualSidedDice(5, 6).map((die) => ({
    ...die,
    rollValue: generateRandomDiceRoll(),
  }));
}
export function useDice() {
  return useReducer(reducer, initialDiceRoll());
}
