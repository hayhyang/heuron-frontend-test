import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import { getGallery } from 'api';
import Gallery from 'view/components/Gallery';
// select: (data) => {
//   const superHeroNames = data.data.map((hero) => hero.name);
//   return superHeroNames;
// },

const GalleryContainer = () => {
  const { data, isLoading }: any = useQuery<any>('data', getGallery);
  console.log('data', data);

  return (
    <Container>
      <Gallery
        data={data}
        loading={isLoading}
      />
    </Container>
  );
};

const Container = styled.div``;

export default GalleryContainer;
