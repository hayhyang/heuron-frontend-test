import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import GalleryPage from 'view/pages/Gallery';

function App(): JSX.Element {
  return (
    <div className='App'>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<GalleryPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
