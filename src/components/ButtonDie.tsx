import { Square } from "@chakra-ui/react";
import { defaultDiceProps, DieProps } from "./Die";

export function ButtonDie({
  bgColor = "whiteAlpha.100",
  color = "blue.100",
  outline = "5px solid",
  outlineColor = "blueAlpha.300",
  shadow = "none",
  children,
  ...rest
}: DieProps) {
  return (
    <Square
      as="button"
      _hover={{ bg: "#ebedf0" }}
      _active={{
        bg: "#dddfe2",
        transform: "scale(0.98)",
        borderColor: "#bec3c9",
      }}
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
      {...{
        ...defaultDiceProps,
        ...rest,
        bgColor,
        color,
        outline,
        outlineColor,
        shadow,
      }}
    >
      {children}
    </Square>
  );
}
