import React from "react";
import { render, screen } from "@testing-library/react";
import { Die } from "./Die";

test("renders learn react link", () => {
  const testNumber = (Math.floor(Math.random()) + 1).toString();
  render(<Die>{testNumber}</Die>);
  const testRegex = new RegExp(testNumber, "i");
  const dieContents = screen.getByText(testRegex);
  expect(dieContents).toBeInTheDocument();
});
