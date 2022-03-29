import { Box, Button } from "@chakra-ui/react";
import { Plus } from "react-feather";
import { ButtonDie } from "../../components/ButtonDie";
import { Die } from "../../components/Die";
import { ActionType, useDice } from "./reducer";

export function DiceRoller() {
  const [dice, dispatchDice] = useDice();

  return (
    <Box padding={"10px"}>
      <Box>
        {dice.map((die, i) => (
          <Die
            key={i}
            onCloseButtonPressed={() =>
              dispatchDice({ type: ActionType.REMOVE_DIE, index: i })
            }
          >
            {die.rollValue}
          </Die>
        ))}
        <ButtonDie onClick={() => dispatchDice({ type: ActionType.ADD_DIE })}>
          <Plus />
        </ButtonDie>
      </Box>
      <Button
        colorScheme="purple"
        leftIcon={<>🎲</>}
        marginY={5}
        onClick={() => dispatchDice({ type: ActionType.ROLL_ALL })}
      >
        Roll!
      </Button>
    </Box>
  );
}
