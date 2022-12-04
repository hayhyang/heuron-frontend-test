import React from 'react';

import GalleryItem from './GalleryItem';
import styled from 'styled-components';
import { IGalleryItem } from 'models/interface/galleryItem';
import Loading from './common/Loading';

interface GalleryProps {
  data?: any;
  loading?: boolean;
}

const Gallery = ({ data, loading = false }: GalleryProps) => {
  if (loading) return <Loading />;

  if (data?.length === 0) return <div>empty</div>;

  return (
    <Container>
      {data?.map((item: IGalleryItem) => (
        <GalleryItem
          key={item.id}
          {...item}
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
