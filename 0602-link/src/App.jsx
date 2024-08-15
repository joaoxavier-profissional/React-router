import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Home from './Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Home />
      </BrowserRouter>
    </div>
);
}

export default App
