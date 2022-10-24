import { useState, useEffect } from 'react';
import { getProductDetailsRoute } from '../api/apiRoutes';

export const useProductDetails = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const dataInStorage = JSON.parse(localStorage.getItem(`products/${id}`));

    const fetchProductDetails = async () => {
      setIsLoading(true);
      const response = await fetch(getProductDetailsRoute(id));
      const data = await response.json();
      alert(`Fetching product with id: ${id} again`);

      localStorage.setItem(`products/${id}`, JSON.stringify(data));
      setProductDetails(data);
      setIsLoading(false);
    };

    if (dataInStorage) setProductDetails(dataInStorage);
    else fetchProductDetails();
  }, [id]);

  return { isLoading, productDetails };
};
