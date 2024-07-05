import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import PredictionCard from '../components/PredictionCard';
import Header from '@/components/Header';
import ColumnHeaders from '@/components/ColumnHeaders'

const Page: React.FC = () => {
  const predictions = [
    {
      date: "24 may. 2024 - 14:00",
      league: "LaLiga",
      homeTeam: "Girona",
      awayTeam: "Granada",
      homeTeamLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Girona_FC_Logo.svg/1200px-Girona_FC_Logo.svg.png",
      awayTeamLogo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Escudo_Granada_club_de_f%C3%BAtbol.png",
      probability: 83,
      odds: 1.22,
      bettingSite: "betway",
    },
    {
      date: "25 may. 2024 - 07:00",
      league: "LaLiga",
      homeTeam: "Osasuna",
      awayTeam: "Villarreal",
      homeTeamLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Osasuna_logo.svg/1200px-Osasuna_logo.svg.png",
      awayTeamLogo: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/19.png",
      probability: 50,
      odds: 2.78,
      bettingSite: "1xbet",
    },
    {
      date: "25 may. 2024 - 11:30",
      league: "LaLiga",
      homeTeam: "Almería",
      awayTeam: "Cádiz",
      homeTeamLogo: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/85.png",
      awayTeamLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/C%C3%A1diz_CF_logo.svg/1200px-C%C3%A1diz_CF_logo.svg.png",
      probability: 38,
      odds: 3.82,
      bettingSite: "1xbet",
    },
    {
      date: "24 may. 2024 - 14:00",
      league: "LaLiga",
      homeTeam: "Girona",
      awayTeam: "Granada",
      homeTeamLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Girona_FC_Logo.svg/1200px-Girona_FC_Logo.svg.png",
      awayTeamLogo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Escudo_Granada_club_de_f%C3%BAtbol.png",
      probability: 83,
      odds: 1.22,
      bettingSite: "betway",
    },
    {
      date: "25 may. 2024 - 07:00",
      league: "LaLiga",
      homeTeam: "Osasuna",
      awayTeam: "Villarreal",
      homeTeamLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Osasuna_logo.svg/1200px-Osasuna_logo.svg.png",
      awayTeamLogo: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/19.png",
      probability: 50,
      odds: 2.78,
      bettingSite: "1xbet",
    },
    {
      date: "25 may. 2024 - 11:30",
      league: "LaLiga",
      homeTeam: "Almería",
      awayTeam: "Cádiz",
      homeTeamLogo: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/85.png",
      awayTeamLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/C%C3%A1diz_CF_logo.svg/1200px-C%C3%A1diz_CF_logo.svg.png",
      probability: 38,
      odds: 3.82,
      bettingSite: "1xbet",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>SportPredict</title>
      </Head>
      <Header />
      <h1 className={styles.heading}>Pronósticos de la Liga Premier</h1>
      <ColumnHeaders />
      <div className={styles.predictions}>
        {predictions.map((prediction, index) => (
          <PredictionCard key={index} prediction={prediction} />
        ))}
      </div>
    </div>
  );
};

export default Page;
