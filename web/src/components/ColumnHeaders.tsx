import React from 'react';
import styles from '../styles/ColumnHeaders.module.css';

const ColumnHeaders: React.FC = () => {
  return (
    <div className={styles.containerch}>
      <p className={styles.subtitle}>Próximo partido</p>
      <div className={styles.columnHeaders}>
        <div className={styles.columnh}>Competición</div>
        <div className={styles.columnh2}>Partido</div>
        <div className={styles.columnh3}>Pronóstico</div>
      </div>
    </div>
  );
};

export default ColumnHeaders;
