// import React from "react";
import { screen, act } from "@testing-library/react";
// import { render } from "@testing-library/react";
import App from "./App";
import * as ReactDOM from "react-dom";

describe("App links tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<App />, container);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  test("renders About link", () => {
    // render(<App />);
    const linkElement = screen.getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders Contact link", () => {
    // render(<App />);
    const linkElement = screen.getByText(/Contact/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders News link", () => {
    // render(<App />);
    const linkElement = screen.getByText(/News/i);
    expect(linkElement).toBeInTheDocument();
  });
});
