import React from 'react';
import LogoZara from '../icons/logo-zara.png';
import styles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Header__Content}>
        <img src={LogoZara} alt="ZARA's Logo" />
        <div className={styles.Header__Cart}>Cart: 0</div>
      </div>
      <div className={styles.Header__Breadcrumbs}>
        breadcrumbs > breadcrumbs > breadcrumbs
      </div>
    </div>
  );
};

export default Header;
