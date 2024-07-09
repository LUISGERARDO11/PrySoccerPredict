"use client"; // Ensure this is at the top

import React from 'react';
import { Inter } from "next/font/google";
import styles from '@/styles/terms.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/global.css';

const inter = Inter({ subsets: ["latin"] });

const Terms: React.FC = () => {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>Términos y Condiciones</h1>
        <div className={styles.section}>
          <h2 className={styles.heading}>1. Aceptación de Términos</h2>
          <p className={styles.text}>
            Al acceder o utilizar nuestra aplicación, aceptas cumplir y estar sujeto a estos términos y condiciones. Si no estás de acuerdo con alguna parte de los términos, no deberías usar la aplicación.
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.heading}>2. Uso de la Aplicación</h2>
          <p className={styles.text}>
            Esta aplicación es proporcionada con fines educativos y recreativos. No se garantiza la exactitud de las predicciones y el uso de la información para apuestas se realiza bajo la responsabilidad exclusiva del usuario. La aplicación no promueve ni apoya actividades de apuestas y no se hace responsable de cualquier pérdida o daño resultante del uso de la información proporcionada.
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.heading}>3. Propiedad Intelectual</h2>
          <p className={styles.text}>
            Todo el contenido de esta aplicación, incluyendo textos, gráficos, logotipos, imágenes y software, es propiedad nuestra y está protegido por las leyes de propiedad intelectual de México. No está permitido reproducir, distribuir o utilizar el contenido sin nuestro consentimiento previo por escrito.
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.heading}>4. Protección de Datos Personales</h2>
          <p className={styles.text}>
            Nos comprometemos a proteger la privacidad de nuestros usuarios. Los datos personales recopilados a través de la aplicación serán manejados de acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP). Para más información, consulta nuestra Política de Privacidad.
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.heading}>5. Limitación de Responsabilidad</h2>
          <p className={styles.text}>
            No nos hacemos responsables de cualquier daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de uso de la aplicación. Esto incluye, pero no se limita a, daños por pérdida de beneficios, uso de datos u otras pérdidas intangibles.
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.heading}>6. Modificaciones a los Términos</h2>
          <p className={styles.text}>
            Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Cualquier cambio será efectivo inmediatamente después de su publicación en la aplicación. Es responsabilidad del usuario revisar regularmente estos términos para estar al tanto de cualquier cambio.
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.heading}>7. Ley Aplicable</h2>
          <p className={styles.text}>
            Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de México. Cualquier disputa que surja en relación con estos términos se someterá a la jurisdicción exclusiva de los tribunales de México.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
