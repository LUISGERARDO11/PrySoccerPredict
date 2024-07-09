"use client"; // Asegúrate de que esta línea esté al principio del archivo

import React, { useState, useEffect } from 'react';
import ColumnHeaders from '@/components/ColumnHeaders';
import PredictionCard from '../components/PredictionCard';
import styles from '../styles/Home.module.css';

const Predictions: React.FC = () => {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/predict/');
        if (response.ok) {
          const data = await response.json();
          setPrediction(data); // Asume que la respuesta contiene directamente la predicción
        } else {
          console.error('Failed to fetch prediction.');
        }
      } catch (error) {
        console.error('Error fetching prediction:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrediction();
  }, []);

  return (
    <div>
      <ColumnHeaders />
      <div className={styles.predictions}>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          prediction && <PredictionCard predictionData={prediction} />
        )}
      </div>
    </div>
  );
};

export default Predictions;
