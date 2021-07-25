import React from 'react';
import { ManagementRoutes } from './pages';
import { GlobalStyle } from './styled-global';

function App() {
  return (
    <div>
      <GlobalStyle />
      <ManagementRoutes />
    </div>
  );
}

export default App;
