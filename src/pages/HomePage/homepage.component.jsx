import React from 'react';
import './homepage.styles.scss';
import Banner from '../../components/banner/banner.component';
import Card from '../../components/card/card.component'; 
import logementsData from '../../logements.json';
import bannerImage from '../../assets/banner_background.png';

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner
        text="Chez vous, partout et ailleurs"
        image={bannerImage}
      />
      <Card logementsData={logementsData} /> 
    </div>
  );
};

export default HomePage;
