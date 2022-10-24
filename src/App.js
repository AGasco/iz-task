import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import ProductsListPage from './pages/ProductsListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/products" element={<ProductsListPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
    </div>
  );
}

export default App;
