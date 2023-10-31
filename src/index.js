import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/login/login';
import Cadastro from './pages/cadastro/cadastro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
