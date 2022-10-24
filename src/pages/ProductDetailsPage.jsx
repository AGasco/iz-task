import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductDetails } from '../hooks/useProductDetails';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { isLoading, productDetails } = useProductDetails(id);

  return <div>ProductDetailsPage</div>;
};

export default ProductDetailsPage;
