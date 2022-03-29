import { Button, Square, SquareProps } from "@chakra-ui/react";
import { X } from "react-feather";

export interface DieProps extends SquareProps {
  // children: ReactChild;
  onCloseButtonPressed?: () => void;
}

export const defaultDiceProps: SquareProps = {
  size: "80px",
  display: "inline-flex",
  margin: "10px",
  color: "white",
  fontWeight: "bold",
  fontFamily: "serif",
  fontSize: "xx-large",
  boxShadow: "md",
  rounded: "10px",
};

export function Die({
  children,
  bgColor = "blue.600",
  onCloseButtonPressed,
  ...rest
}: DieProps) {
  return (
    <Square
      className="die"
      bgColor={bgColor}
      {...{ ...defaultDiceProps, ...rest }}
      position={"relative"}
    >
      {children}
      <Button
        className="close"
        aria-label="Remove Die"
        size="10px"
        colorScheme={"red"}
        position={"absolute"}
        top={-2}
        right={-2}
        onClick={onCloseButtonPressed}
      >
        <X color="white" />
      </Button>
    </Square>
  );
}
