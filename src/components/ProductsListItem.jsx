import React from 'react';
import styles from '../styles/ProductsListItem.module.scss';

const ProductsListItem = ({ product }) => {
  const { id, brand, imgUrl, model, price } = product;

  // Some products don't have price. This is just to render something in its place.
  const generateRandomPrice = () => (Math.random() * 100).toFixed(0);

  return (
    <div className={styles.ProductsListItem}>
      <img src={imgUrl} alt={model} />
      <h1>{`${brand} ${model}`}</h1>
      <p>€{price || generateRandomPrice()}</p>
    </div>
  );
};

export default ProductsListItem;
