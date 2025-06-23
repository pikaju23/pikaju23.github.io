import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style.css';  // ou './App.css' — só um deles, conforme o seu arquivo

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


