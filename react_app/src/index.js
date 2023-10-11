jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from './Register';
import Home from './Home'; // Importe o componente Home aqui
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Home /> {/* Renderize o componente Home aqui */}
    <Register />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();