import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import './scss/styles.scss';

const APP_ID = 'app-container';
const root = ReactDOM.createRoot(document.getElementById(APP_ID)!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
