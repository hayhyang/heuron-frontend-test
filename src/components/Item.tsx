import React from 'react';
import styled from 'styled-components';

import { IItem } from '../models/interface/item';

interface ItemProps extends IItem {
  onClickItem: (id: string) => void;
}

const Item = ({
  id,
  author,
  width,
  height,
  url,
  download_url,
  onClickItem,
}: ItemProps) => {
  return (
    <Container onClick={() => onClickItem(id)}>
      <img
        src={download_url}
        alt={author}
      />
      <Author>{author}</Author>
    </Container>
  );
};

const Author = styled.h6`
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  padding: 24px;
`;

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 300px;
  cursor: pointer;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
export default Item;
