import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TopSongs from "../src/views/TopSongs";

test("shows the content correctly in Top Songs", () => {
  const mockFetchPromise = Promise.resolve({ json: () => Promise.resolve({}) });
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  render(<TopSongs />);

  expect(screen.getByText("Top Songs")).toBeInTheDocument();
  expect(screen.getByText("Filter:")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Title Keyword")).toBeInTheDocument();
});
