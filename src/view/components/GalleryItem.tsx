import React from 'react';
import styled from 'styled-components';

import { IGalleryItem } from '../../models/interface/galleryItem';

const GalleryItem = ({
  id,
  author,
  width,
  height,
  url,
  download_url,
}: IGalleryItem) => {
  return (
    <Container>
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
export default GalleryItem;
