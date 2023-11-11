import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';

import Login from './pages/login/login';
import Produtos from './pages/produtos/produtos';
import Site from './pages/site/site';
import Treino from './pages/treino/treino';
import Treino2 from './pages/treino2/treino2';
import SobreNos from './pages/sobreNos/sobreNos';
import Contato from './pages/contato/contato';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Site />} />
        <Route path="/treino" element={<Treino />} />
        <Route path="/treino2" element={<Treino2 />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobreNos" element={<SobreNos />} />
        <Route path="/contato" element={<Contato />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
