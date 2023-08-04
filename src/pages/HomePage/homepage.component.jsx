import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './homepage.styles.scss';
import Banner from '../../components/banner/banner.component';
import Card from '../../components/card/card.component';
import logementsData from '../../logements.json';
import bannerImageHome from '../../assets/banner_home_background.png';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to navigate to the logement page when the card is clicked
  const handleCardClick = (id) => {
    navigate(`/logement/${id}`); // Use navigate instead of push
  };

  return (
    <div className="homepage">
      <Banner text="Chez vous, partout et ailleurs" image={bannerImageHome} />
      <Card logementsData={logementsData} onCardClick={handleCardClick} />
    </div>
  );
};

export default HomePage;
