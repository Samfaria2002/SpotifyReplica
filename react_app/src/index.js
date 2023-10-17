import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Registration from './Register';
import Home from './Home'
import './styles/home.css'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Registration />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Registration}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();