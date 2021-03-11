import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TopAlbums from "../src/views/TopAlbums";

test("shows the content correctly in Top Albums", () => {
  const mockFetchPromise = Promise.resolve({ json: () => Promise.resolve({}) });
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  render(<TopAlbums />);

  expect(screen.getByText("Top Albums")).toBeInTheDocument();
  expect(screen.getByText("Filter:")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Title Keyword")).toBeInTheDocument();
});
