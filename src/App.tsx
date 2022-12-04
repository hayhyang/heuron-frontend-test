import React from 'react';
import { Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import GalleryPage from 'view/pages/Gallery';
import GalleryDetail from 'view/pages/Gallery/[id]';

function App(): JSX.Element {
  return (
    <div className='App'>
      <GlobalStyles />

      <Routes>
        <Route
          path='/'
          element={<GalleryPage />}
        />
        <Route
          path='/:id'
          element={<GalleryDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;
