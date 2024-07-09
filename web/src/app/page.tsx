import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '@/components/Header';
import ImaginaryPrediction from '@/components/ImaginaryPrediction'
import Footer from '@/components/Footer';
import RetrainModel from '@/components/RetrainModel ';
import Predictions from '@/components/Predictions';
import MatchdayPrediction from '@/components/MatchdayPrediction';
import MovingTextContainer from '@/components/MovingTextContainer';
        

const Page: React.FC = () => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Intellibet</title>
      </Head>
      <Header />
      <MovingTextContainer/>
      <h1 className={styles.heading}>Pronósticos de la Liga Premier</h1>
      <Predictions/>
      <ImaginaryPrediction/>
      <MatchdayPrediction/>
      <RetrainModel/>
      <Footer/>
    </div>
  );
};

export default Page;
