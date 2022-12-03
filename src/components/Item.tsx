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
    <Container
      onClick={() => onClickItem(id)}
      bg={download_url}
    >
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
  padding: 20px;
`;

const Container = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  padding-bottom: 100%;
  background-image: url(${({ bg }: any) => bg});
  background-size: cover;
`;
export default Item;
