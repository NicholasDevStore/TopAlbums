import styled from "styled-components";

export const ItemWrapper = styled.a`
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 12%);
  border-radius: 3px;
  padding: 24px;
  width: 632px;
  margin-bottom: 24px;
  min-height: 82px;
  @media (max-width: 768px) {
    width: 100vw;
    box-sizing: border-box;
    padding: 8px;
    min-height: 114px;
  }
`;

export const Image = styled.img`
  width: 82px;
  height: 82px;
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const RankLabel = styled.span`
  font-size: 2em;
  font-weight: bold;
  min-width: 50px;
  text-align: center;
  margin-right: 16px;
  @media (max-width: 768px) {
    min-width: 42px;
    margin-right: 8px;
  }
`;

export const ItemMeta = styled.div`
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  @media (max-width: 768px) {
    padding: 0px 8px;
  }
`;

export const Title = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  line-height: 1.2;
  margin: 0;
`;

export const Artist = styled.p`
  font-size: 1em;
  margin: 4px 0 0 0;
`;

export const Price = styled.span`
  font-size: 1em;
`;
