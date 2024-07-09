import React from 'react';
import styles from '../styles/MovingTextContainer.module.css';

const MovingTextContainer: React.FC = () => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        El modelo actual fue entrenado con datos de la liga 2018-2019 a 2022-2023. El uso de esta aplicación es responsabilidad de cada usuario.
      </div>
    </div>
  );
};

export default MovingTextContainer;
