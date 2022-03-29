import { useReducer } from "react";
import { DieRoll } from "../../types/roll";
import { assertUnreachable } from "../../utils/assertUnreachable";
import { makeEqualSidedDice } from "../../utils/diceFactory";
import { generateRandomDiceRoll } from "../../utils/generateRandomNumber";

export enum ActionType {
  ROLL_ALL,
  ADD_DIE,
  REMOVE_DIE,
}

interface ActionBase {
  type: ActionType;
}

interface ActionNoPayload extends ActionBase {
  type: ActionType.ROLL_ALL | ActionType.ADD_DIE;
}

interface RemoveAction extends ActionBase {
  type: ActionType.REMOVE_DIE;
  index: number;
}

type Action = ActionNoPayload | RemoveAction;

function makeNewDieWithRandomRoll(numOfDice: number, sides: number) {
  return makeEqualSidedDice(numOfDice, sides).map((die) => ({
    ...die,
    rollValue: generateRandomDiceRoll(),
  }));
}

function reducer(state: DieRoll[], action: Action): DieRoll[] {
  switch (action.type) {
    case ActionType.ROLL_ALL:
      return state.map((die) => ({
        ...die,
        rollValue: generateRandomDiceRoll(),
      }));
    case ActionType.ADD_DIE:
      const newDie = makeNewDieWithRandomRoll(1, 6)[0];
      return [...state, newDie];
    case ActionType.REMOVE_DIE:
      const newState = [...state];
      newState.splice(action.index, 1);
      return newState;
    default:
      assertUnreachable(action);
  }
}

function initialDiceRoll(): DieRoll[] {
  return makeNewDieWithRandomRoll(5, 6);
}
export function useDice() {
  return useReducer(reducer, initialDiceRoll());
}
