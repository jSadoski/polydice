import { Box, Button } from "@chakra-ui/react";
import { Die } from "../../components/Die";
import { useDice } from "./reducer";

export function DiceRoller() {
  const [dice, dispatceDice] = useDice();

  return (
    <Box padding={"10px"}>
      <Box>
        {dice.map((die) => (
          <Die>{die.rollValue}</Die>
        ))}
      </Box>
      <Button
        colorScheme="purple"
        leftIcon={<>🎲</>}
        marginY={5}
        onClick={() => dispatceDice({ type: "rollall" })}
      >
        Roll!
      </Button>
    </Box>
  );
}
