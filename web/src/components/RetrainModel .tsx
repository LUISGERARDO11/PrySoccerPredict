"use client"; // Ensure this is at the top

import React, { useState } from 'react';
import styles from '../styles/RetrainModel.module.css';

const RetrainModel: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const fileExtension = file.name.split('.').pop();

      if (fileExtension === 'csv') {
        setSelectedFile(file);
      } else {
        alert('El archivo tiene que ser en formato CSV.');
        event.target.value = ''; // Reset file input
      }
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleRefreshModel = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/retrain_model/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert(`${data.message} Gracias por aportar datos.`);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error al enviar el archivo:', error);
      alert('Ocurrió un error al enviar el archivo.');
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Refresca el modelo.</h2>
      <p className={styles.subtitle}>Ayúdanos a tener los datos más actualizados.</p>
      <div>
        <label className={styles.uploadButton}>
          Subir archivo
          <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
        </label>
      </div>
      {selectedFile && (
        <div className={styles.fileContainer}>
          <img src="/logocsv.png" alt="csv" className={styles.fileIcon} />
          <span>{selectedFile.name}</span>
          <button className={styles.deleteButton} onClick={handleRemoveFile}>Eliminar</button>
        </div>
      )}
      {selectedFile && (
        <button className={styles.refreshButton} onClick={handleRefreshModel}>
          Refrescar modelo
        </button>
      )}
    </div>
  );
};

export default RetrainModel;
