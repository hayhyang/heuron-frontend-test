import React from 'react';

import { IItem } from 'models/interface/item';
import Item from './Item';
import styled from 'styled-components';

interface GalleryProps {
  data?: any;
  loading?: boolean;
}

const Gallery = ({ data, loading = false }: GalleryProps) => {
  const onClickItem = (id: string) => {
    console.log('id', id);
  };

  if (loading) return <div>loading</div>;

  if (data?.length === 0) return <div>empty</div>;

  return (
    <Container>
      {data?.map((item: IItem) => (
        <Item
          key={item.id}
          {...item}
          onClickItem={onClickItem}
        />
      ))}
    </Container>
  );
};

const Container = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  gap: 4px;
`;

export default Gallery;
