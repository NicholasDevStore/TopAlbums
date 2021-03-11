import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import App from "../src/views/App";

test("full app rendering/navigating", () => {
  const history = createMemoryHistory();
  const mockFetchPromise = Promise.resolve({ json: () => Promise.resolve({}) });
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/Top Albums/i)).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/Songs/i), leftClick);

  // check that the content changed to the new page
  expect(screen.getByText(/Top Songs/i)).toBeInTheDocument();
});
