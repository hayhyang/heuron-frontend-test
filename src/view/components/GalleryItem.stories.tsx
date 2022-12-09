import React from 'react';
import { Story } from '@storybook/react';
import GalleryItem from './GalleryItem';
import { withRouter } from 'storybook-addon-react-router-v6';

// import { withRouter } from 'storybook-addon-react-router-v6';

// export default {
//   title: 'User Profile',
//   component: UserProfile,
//   decorators: [withRouter],
//   parameters: {
//     reactRouter: {
//       routePath: '/users/:userId',
//       routeParams: { userId: '42' },
//     }
//   }
// };

// export const Example = () => <UserProfile />;

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
