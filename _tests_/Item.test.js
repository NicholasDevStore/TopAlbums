import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Item from "../src/components/Item";

test("shows the content correctly", () => {
  const entity = {
    artist: "Hikaru Utada",
    imgSrc:
      "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/44/a2/49/44a249b7-0354-21fc-7a26-7069162b6d52/4547366488920.jpg/55x55bb.png",
    link: "https://music.apple.com/us/album/one-last-kiss/1542953969?uo=2",
    price: "$9.99",
    rank: 1,
    title: "One Last Kiss - Hikaru Utada",
  };
  render(<Item {...entity} />);

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByText(entity.title)).toBeInTheDocument();
  expect(screen.getByText(entity.artist)).toBeInTheDocument();
  expect(screen.getByText(entity.price)).toBeInTheDocument();
  expect(screen.getByText(entity.rank)).toBeInTheDocument();
});
