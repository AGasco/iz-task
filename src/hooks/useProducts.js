import { useState, useEffect } from 'react';
import { getProductsRoute } from '../api/apiRoutes';

export const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dataInStorage = JSON.parse(localStorage.getItem('products'));

    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await fetch(getProductsRoute);
      const results = await response.json();
      alert('Fetching products again');

      localStorage.setItem('products', JSON.stringify(results));
      setProducts(results);
      setIsLoading(false);
    };

    if (dataInStorage.length) setProducts(dataInStorage);
    else fetchProducts();
  }, []);

  return { isLoading, products };
};
