import React from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductsList from '../components/ProductsList';

const ProductsListPage = () => {
  const { isLoading, products } = useProducts();

  return isLoading ? <p>Loading...</p> : <ProductsList products={products} />;
};

export default ProductsListPage;
