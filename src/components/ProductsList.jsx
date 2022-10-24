import React from 'react';
import { Link } from 'react-router-dom';
import ProductsListItem from './ProductsListItem';
import styles from '../styles/ProductsList.module.scss';

const ProductsList = ({ products }) => {
  return (
    <div className={styles.ProductsList}>
      {products?.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <ProductsListItem product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
