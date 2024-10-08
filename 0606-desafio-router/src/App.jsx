import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Produtos from './Components/Produtos';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contato from './Components/Contato';
import Produto from './Components/Produto';
import './App.css'

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook
// URL da API


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Produtos />} />
          <Route path='produto/:id' element={<Produto />} />
          <Route path='contato' element={<Contato />} />
        </Routes>
      </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
};

export default App;
