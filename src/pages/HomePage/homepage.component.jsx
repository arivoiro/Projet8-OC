import React from 'react';
import './homepage.styles.scss';
import Banner from '../../components/banner/banner.component';
import Card from '../../components/card/card.component'; 
import logementsData from '../../logements.json';
import bannerImageHome from '../../assets/banner_home_background.png';

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner
        text="Chez vous, partout et ailleurs"
        image={bannerImageHome}
      />
      <Card logementsData={logementsData} /> 
    </div>
  );
};

export default HomePage;