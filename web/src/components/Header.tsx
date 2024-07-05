import React from 'react';
import styles from '../styles/Header.module.css';
import RotatingBall from './RotatingBall';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <RotatingBall/>
        <span className={styles.title}>SportyPredict</span>
      </div>
    </header>
  );
};

export default Header;
