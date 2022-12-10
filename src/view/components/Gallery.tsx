import React from 'react';
import styled from 'styled-components';

import GalleryItem from './GalleryItem';
import { IGalleryItem } from 'models/interface/galleryItem';
import Loading from './common/Loading';
import { useNavigate } from 'react-router-dom';

interface GalleryProps {
  data?: any;
  loading?: boolean;
}

const Gallery = ({ data, loading = false }: GalleryProps) => {
  const navigate = useNavigate();
  const onClickItem = (id: string) => {
    navigate(id);
  };

  if (loading) return <Loading />;

  if (data?.length === 0) return <div>empty</div>;

  return (
    <Container>
      {data?.map((item: IGalleryItem) => (
        <GalleryItem
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
