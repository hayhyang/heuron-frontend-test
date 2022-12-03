import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import ListPage from 'components/pages/List';

function App(): JSX.Element {
  return (
    <div className='App'>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<ListPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
