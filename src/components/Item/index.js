import React from "react";
import {
  ItemWrapper,
  Image,
  RankLabel,
  ItemMeta,
  Title,
  Artist,
  Price,
} from "./styled";

const Item = ({ rank, title, imgSrc, artist, price, link }) => {
  return (
    <>
      <ItemWrapper href={link} target="_blank" rel="noreferrer">
        <RankLabel>{rank}</RankLabel>
        <Image src={imgSrc} alt="" />
        <ItemMeta>
          <Title>{title}</Title>
          <Artist>{artist}</Artist>
        </ItemMeta>
        <Price>{price}</Price>
      </ItemWrapper>
    </>
  );
};

export default Item;
