import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import { getData } from 'api';
import List from 'components/List';

const ListContainer = () => {
  const { data, isLoading }: any = useQuery<any>('data', getData);
  console.log('data', data);

  return (
    <Container>
      <List
        data={data}
        loading={isLoading}
      />
    </Container>
  );
};

const Container = styled.div``;

export default ListContainer;
