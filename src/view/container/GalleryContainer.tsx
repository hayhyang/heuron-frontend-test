import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import { getData } from 'api';
import Gallery from 'view/components/Gallery';

const GalleryContainer = () => {
  const { data, isLoading }: any = useQuery<any>('data', getData);
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
