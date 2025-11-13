// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 1. Busca el elemento HTML con el ID 'root'
const rootElement = document.getElementById('root'); 

// 2. Crea la "raíz" de React en ese elemento
const root = ReactDOM.createRoot(rootElement);

// 3. Le dice a React que dibuje el componente <App /> DENTRO de esa raíz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);