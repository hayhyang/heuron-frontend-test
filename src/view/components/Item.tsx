import React from 'react';
import styled from 'styled-components';

import { IItem } from '../../models/interface/item';

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
  console.log('item component working');
  return (
    <Container onClick={() => onClickItem(id)}>
      <img
        src={download_url}
        alt={author}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default Item;
