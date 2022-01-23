import { Square } from "@chakra-ui/react";

export function Die({ children }: { children: React.ReactChild }) {
  return (
    <Square
      size={"80px"}
      display={"inline-flex"}
      margin={"10px"}
      color={"white"}
      fontWeight={"bold"}
      fontFamily={"cursive"}
      fontSize={"xx-large"}
      bgColor={"blue"}
      shadow="lg"
      rounded={"10px"}
    >
      {children}
    </Square>
  );
}
