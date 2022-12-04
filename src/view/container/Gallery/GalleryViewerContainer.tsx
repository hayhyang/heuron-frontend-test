import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { getGallery } from 'api';

import Canvas from 'view/components/GalleryViewer';

const GalleryDetailContainer = () => {
  const { id } = useParams();

  const { data, isLoading }: any = useQuery<any>('data', getGallery, {
    select: (data) => {
      const galleryItem = data.filter((item: any) => item.id === id);
      return galleryItem[0];
    },
  });

  return (
    <Canvas
      data={data}
      loading={isLoading}
    />
  );
};

export default GalleryDetailContainer;
