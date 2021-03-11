import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import Item from "../../components/Item";
import { SearchInput, Container } from "./styled";

const TopAlbums = () => {
  const [entries, setEntries] = useState([]);
  const [keyword, setKeyword] = useState("");
  const fetchAlbums = () => {
    const URL = `https://itunes.apple.com/us/rss/topalbums/limit=100/json`;
    fetch(URL)
      .then((response) => response.json())
      .then((body) => {
        if (body.feed && body.feed.entry) {
          setEntries(
            body.feed.entry.map((entry, index) => ({
              title: entry.title.label,
              link: entry.id.label,
              rank: index + 1,
              price: entry["im:price"].label,
              artist: entry["im:artist"].label,
              imgSrc:
                entry["im:image"].length > 0
                  ? entry["im:image"][0].label
                  : null,
            }))
          );
        }
      })
      .catch((error) => console.error("Error", error));
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <h1>Top Albums</h1>
      <div className="flex-row flex-center">
        <label htmlFor="keyword">Filter:</label>
        <SearchInput
          type="text"
          name="keyword"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="Title Keyword"
        />
      </div>
      <Container>
        {entries
          .filter((entry) =>
            entry.title.toLowerCase().includes(keyword.toLowerCase())
          )
          .map((entry, index) => (
            <LazyLoad height={130} key={index}>
              <Item {...entry} key={index} />
            </LazyLoad>
          ))}
      </Container>
    </div>
  );
};

export default TopAlbums;
