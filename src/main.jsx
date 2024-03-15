import React from 'react';

import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeConfig } from './config/theme.config';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <ThemeConfig>
        <App />
      </ThemeConfig>
    </CookiesProvider>
  </React.StrictMode>
);
