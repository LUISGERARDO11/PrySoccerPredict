import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h2 className={styles.heading}>Intellibet</h2>
          <p className={styles.text}> Precisión en cada jugada,  <br />datos que hablan.</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.subheading}>Navegación</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href="/" className={styles.link}>Home</Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.subheading}>Siguenos</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Instagram</li>
            <li className={styles.listItem}>Twitter</li>
            <li className={styles.listItem}>LinkedIn</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.subheading}>Legal</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href="/terms" className={styles.link}>Términos y condiciones</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/privacy" className={styles.link}>Privacidad</Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.subheading}>Contact</h3>
          <a href="mailto:20221015@uthh.edu.mx" className={styles.textf}>20221015@uthh.edu.mx</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.text}>© 2024 Intellibet. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
