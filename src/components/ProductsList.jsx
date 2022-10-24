import React from 'react';
import ProductsListItem from './ProductsListItem';
import styles from '../styles/ProductsList.module.scss';

const ProductsList = ({ products }) => {
  return (
    <div className={styles.ProductsList}>
      {products?.map((product) => (
        <ProductsListItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
