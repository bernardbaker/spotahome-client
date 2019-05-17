import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  // Arrange
  const div = document.createElement("div");
  // Act
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
