import { Box, ChakraProvider, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { DiceRoller } from "./features/DiceRoller";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" bgColor={"whiteAlpha.50"}>
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher
            justifySelf="flex-end"
            data-testid="color-mode-switcher"
          />
          <DiceRoller />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
