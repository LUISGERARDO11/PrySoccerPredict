"use client"; // Asegúrate de que esta línea esté al principio del archivo

import React, { useState, useEffect } from 'react';
import styles from '../styles/ImaginaryPrediction.module.css';

const ImaginaryPrediction: React.FC = () => {
  const [teams, setTeams] = useState<string[]>([]);
  const [firstTeam, setFirstTeam] = useState('');
  const [secondTeam, setSecondTeam] = useState('');
  const [prediction, setPrediction] = useState('');
  const [homeTeamLogo, setHomeTeamLogo] = useState('');
  const [awayTeamLogo, setAwayTeamLogo] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('https://predictfutbol-api.onrender.com/api/get_teams_season/');
        if (response.ok) {
          const data = await response.json();
          setTeams(data.teams || []);
        } else {
          alert('Failed to fetch teams.');
        }
      } catch (error) {
        console.error('Error fetching teams:', error);
        alert('An error occurred while fetching teams.');
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const handleFirstTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFirstTeam(event.target.value);
    setSecondTeam(''); // Reset second team when first team changes
  };

  const handleSecondTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSecondTeam(event.target.value);
  };

  const handleAcceptClick = async () => {
    if (!firstTeam || !secondTeam) {
      alert('Please select both teams.');
      return;
    }

    try {
      //http://127.0.0.1:8000/
      //https://predictfutbol-api.onrender.com
      const response = await fetch('http://127.0.0.1:8000/api/predictwithouttd/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          homeTeam: firstTeam,
          awayTeam: secondTeam,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.prediction.error) {
          setError(data.prediction.error);
          setPrediction('');
          setHomeTeamLogo('');
          setAwayTeamLogo('');
          alert(`Actualmente el modelo de predicción no se encuentra entrenado con los datos del o los equipos seleccionados`);
        } else {
          setError('');
          setPrediction(data.prediction);
          setHomeTeamLogo(data.homeTeamLogo?.crestUrl || '');
          setAwayTeamLogo(data.awayTeamLogo?.crestUrl || '');
        }
      } else {
        alert('Failed to fetch prediction.');
      }
    } catch (error) {
      console.error('Error fetching prediction:', error);
      alert('An error occurred while fetching prediction.');
    }
  };

  const filteredTeams = teams.filter(team => team !== firstTeam);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <p className={styles.teamLabel}>LOCAL</p>
        <div className={styles.imageContainer}>
          {homeTeamLogo ? (
            <img src={homeTeamLogo} alt="Home Team Logo" className={styles.image} />
          ) : (
            <div className={styles.image}>LOCAL</div>
          )}
        </div>
      </div>
      <div className={styles.prediction}>
        {error ? (
          <div className={styles.error}>{error}</div>
        ) : (
          <>
            <p className={styles.boldText}>PREDICCIÓN</p>
            <p>{prediction}</p>
          </>
        )}
      </div>
      <div className={styles.imageWrapper}>
        <p className={styles.teamLabel}>VISITANTE</p>
        <div className={styles.imageContainer}>
          {awayTeamLogo ? (
            <img src={awayTeamLogo} alt="Away Team Logo" className={styles.image} />
          ) : (
            <div className={styles.image}>VISITANTE</div>
          )}
        </div>
      </div>
    </div>
      <div className={styles.footer}>
        <select className={styles.selector} value={firstTeam} onChange={handleFirstTeamChange}>
          <option value="">Select...</option>
          {teams.map(team => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
        <button className={styles.acceptButton} onClick={handleAcceptClick}>PREDECIR</button>
        <select className={styles.selector} value={secondTeam} onChange={handleSecondTeamChange} disabled={!firstTeam}>
          <option value="">Select...</option>
          {filteredTeams.map(team => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ImaginaryPrediction;
