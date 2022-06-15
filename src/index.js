import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { StoreProivder } from './context';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StoreProivder>
      <App />
    </StoreProivder>
  </StrictMode>
);
