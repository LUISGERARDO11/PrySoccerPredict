"use client"; // Ensure this is at the top

import React from 'react';
import { Inter } from "next/font/google";
import styles from '@/styles/privacy.module.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/global.css';

const inter = Inter({ subsets: ["latin"] });

const Privacy: React.FC = () => {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>Política de Privacidad</h1>
        <div className={styles.section}>
          <h2 className={styles.heading}>1. Introducción</h2>
          <p className={styles.text}>
            Nos comprometemos a proteger la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos la información personal que nos proporcionas a través de nuestra aplicación.
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.heading}>2. Información Recopilada</h2>
          <p className={styles.text}>
            Podemos recopilar información personal como tu nombre, correo electrónico y datos de uso de la aplicación. Esta información se utiliza para mejorar la experiencia del usuario y proporcionar servicios personalizados.
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.heading}>3. Uso de la Información</h2>
          <p className={styles.text}>
            La información personal recopilada se utiliza para:
          </p>
          <ul className={styles.text}>
            <li>Proporcionar y mejorar nuestros servicios.</li>
            <li>Personalizar la experiencia del usuario.</li>
            <li>Comunicarnos contigo.</li>
            <li>Cumplir con obligaciones legales.</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h2 className={styles.heading}>4. Protección de la Información</h2>
          <p className={styles.text}>
            Implementamos medidas de seguridad adecuadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.heading}>5. Compartir Información</h2>
          <p className={styles.text}>
            No compartimos tu información personal con terceros, excepto en los casos en que sea necesario para cumplir con la ley o proteger nuestros derechos.
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.heading}>6. Cambios a esta Política</h2>
          <p className={styles.text}>
            Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será efectivo inmediatamente después de su publicación en la aplicación.
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.heading}>7. Contacto</h2>
          <p className={styles.text}>
            Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos a través de nuestro correo electrónico: contacto@ejemplo.com.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
