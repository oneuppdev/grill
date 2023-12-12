import React from 'react';
import ReactDOM from 'react-dom/client';
import RootProvider from '@providers/rootProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootProvider />
  </React.StrictMode>
);
