import React from 'react';
import styled from 'styled-components';

import { IGalleryItem } from '../../models/interface/galleryItem';

interface GalleryItemProps extends IGalleryItem {
  onClickItem: (id: string) => void;
}

const GalleryItem = ({
  id,
  author,
  width,
  height,
  url,
  download_url,
  onClickItem,
}: GalleryItemProps) => {
  return (
    <Container>
      <img
        src={download_url}
        alt={author}
        onClick={() => onClickItem(id)}
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
export default GalleryItem;
