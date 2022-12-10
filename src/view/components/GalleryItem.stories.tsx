import React from 'react';
import { Story } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import GalleryItem from './GalleryItem';

export default {
  title: 'GalleryItem',
  component: GalleryItem,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/:id',
      routeParams: { id: '0' },
      routeState: {
        id: '0',
        author: 'Alejandro Escamilla',
        width: 5000,
        height: 3333,
        url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
        download_url: 'https://picsum.photos/id/0/5000/3333',
      },
    },
  },
};

const Template: Story = (args: any) => <GalleryItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '0',
  author: 'Alejandro Escamilla',
  width: 5000,
  height: 3333,
  url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
  download_url: 'https://picsum.photos/id/0/5000/3333',
};
