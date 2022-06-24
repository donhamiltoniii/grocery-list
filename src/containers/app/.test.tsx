import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { App } from "./component";

test("renders app div", () => {
  render(<App />);
  const appElement = screen.getByTestId("app-container");
  expect(appElement).toBeInTheDocument();
});
