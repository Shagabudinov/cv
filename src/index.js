import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import './styles/ButtonStyles.sass';
import App from './App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
// Типо код
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

