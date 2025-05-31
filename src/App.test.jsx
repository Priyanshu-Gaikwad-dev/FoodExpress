import { render, screen } from "@testing-library/react";
import Grocery from "./Container/Grocery"; // No need for `.jsx` extension
import "@testing-library/jest-dom"; // Import jest-dom matchers here
import React from "react";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "./Links/AppStore";

test("renders Grocery component with expected text", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Grocery />
      </BrowserRouter>
    </Provider>
  );
  const textElement = screen.getByText(
    "Grocery component along with differnt child component"
  );
  expect(textElement).toBeInTheDocument();
});
