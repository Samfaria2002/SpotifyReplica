import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from './Register';
import Home from './Home'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(<Home />, document.getElementById('root'));

reportWebVitals();