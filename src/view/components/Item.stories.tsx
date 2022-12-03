import React from 'react';
import { Story } from '@storybook/react';
import Item from './Item';

export default {
  title: 'Item',
  component: Item,
};

const Template: Story = (args: any) => <Item {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '0',
  author: 'Alejandro Escamilla',
  width: 5000,
  height: 3333,
  url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
  download_url: 'https://picsum.photos/id/0/5000/3333',
};
