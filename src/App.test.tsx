import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const colorModeSwitcher = screen.getByTestId("color-mode-switcher");
  expect(colorModeSwitcher).toBeInTheDocument();
});
