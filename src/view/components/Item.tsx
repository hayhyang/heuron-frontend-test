import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { IItem } from '../../models/interface/item';

const Item = ({ id, author, width, height, url, download_url }: IItem) => {
  return (
    <Container>
      <Link to={id}>
        <img
          src={download_url}
          alt={author}
        />
      </Link>
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
