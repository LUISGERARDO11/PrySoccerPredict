import React from 'react';
import styles from '../styles/Header.module.css';


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src="/favicon.png" alt="Logo" className={styles.logo} />
        <span className={styles.title}>INTELLIBET</span>
        
      </div>
    </header>
  );
};

export default Header;
