import React from 'react';
import './homepage.styles.scss';
import Banner from '../../components/banner/banner.component';
import Card from '../../components/card/card.component'; 
import logementsData from '../../logements.json';

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />
      <Card logementsData={logementsData} /> 
    </div>
  );
};

export default HomePage;
