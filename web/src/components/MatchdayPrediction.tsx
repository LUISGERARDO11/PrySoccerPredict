"use client"; // Asegúrate de que esta línea esté al principio del archivo

import React, { useState, useEffect } from 'react';
import styles from '../styles/MatchdayPrediction.module.css';

interface Match {
  utcDate: string;
  homeTeam: string;
  awayTeam: string;
  status: string;
}

interface Matchday {
  matchday: number;
  matches: Match[];
}

const MatchdayPrediction: React.FC = () => {
  const [matchdays, setMatchdays] = useState<Matchday[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMatchday, setSelectedMatchday] = useState<number | null>(null);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [homeTeamLogo, setHomeTeamLogo] = useState<string | null>(null);
  const [awayTeamLogo, setAwayTeamLogo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMatchdays = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/get_matches_scheduled/');
        if (response.ok) {
          const data = await response.json();
          setMatchdays(data);
        } else {
          console.error('Failed to fetch matchdays.');
        }
      } catch (error) {
        console.error('Error fetching matchdays:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatchdays();
  }, []);

  const handleMatchdayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const matchday = parseInt(event.target.value);
    setSelectedMatchday(matchday);
    setSelectedMatch(null); // Reset selected match
    setPrediction(null); // Reset prediction
    setHomeTeamLogo(null); // Reset home team logo
    setAwayTeamLogo(null); // Reset away team logo
    setError(null); // Reset error
  };

  const handleMatchChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const matchIndex = parseInt(event.target.value);
    if (selectedMatchday !== null) {
      const matchday = matchdays.find(md => md.matchday === selectedMatchday);
      if (matchday) {
        setSelectedMatch(matchday.matches[matchIndex]);
      }
    }
  };

  const formatDate = (dateString: string) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handlePredictClick = async () => {
    if (selectedMatch) {
      try {
        const response = await fetch('https://predictfutbol-api.onrender.com/api/predictwithouttd/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            homeTeam: selectedMatch.homeTeam,
            awayTeam: selectedMatch.awayTeam,
          })
        });

        if (response.ok) {
          const data = await response.json();
          if (data.error) {
            setError(data.error);
          } else {
            setPrediction(data.prediction);
            setHomeTeamLogo(data.homeTeamLogo.crestUrl);
            setAwayTeamLogo(data.awayTeamLogo.crestUrl);
            setError(null); // Reset error
          }
        } else {
          setError('Failed to get prediction.');
        }
      } catch (error) {
        if (error instanceof Error) {
          setError('Error getting prediction: ' + error.message);
        } else {
          setError('An unknown error occurred.');
        }
      }
    } else {
      alert('Por favor selecciona un partido.');
    }
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Predice en cualquier jornada</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <div className={styles.container}>
            <div className={styles.column}>
              <label className={styles.label} htmlFor="matchday">Jornada</label>
              <select 
                className={styles.selector} 
                value={selectedMatchday ?? ''} 
                onChange={handleMatchdayChange}
              >
                <option value="">Select...</option>
                {matchdays.map(md => (
                  <option key={md.matchday} value={md.matchday}>
                    Jornada {md.matchday}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.column}>
              <label className={styles.label} htmlFor="match">Partido</label>
              <select
                id="match"
                className={styles.selector}
                onChange={handleMatchChange}
                value={selectedMatch ? matchdays[selectedMatchday! - 1].matches.indexOf(selectedMatch).toString() : ''}
                disabled={selectedMatchday === null}
              >
                <option value="">Select...</option>
                {selectedMatchday !== null && matchdays.find(md => md.matchday === selectedMatchday)?.matches.map((match, index) => (
                  <option key={index} value={index}>
                    {formatDate(match.utcDate)} - {match.homeTeam} vs {match.awayTeam}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button 
            className={styles.predictButton} 
            onClick={handlePredictClick}
          >
            Predecir
          </button>
          {error && <p className={styles.error}>{error}</p>}
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
        </div>
      )}
    </div>
  );
};

export default MatchdayPrediction;
