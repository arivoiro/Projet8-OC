import React, { useState } from 'react';
import './slideshow.styles.scss';
import Banner from '../banner/banner.component';
import ArrowLeft from '../arrows/arrowLeft';
import ArrowRight from '../arrows/arrowRight';

const Slideshow = ({ logement, bannerStyle }) => {
  const { pictures } = logement;
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = pictures.length - 1;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };
  
  return (
    <div className="slideshow">
      <ArrowLeft onClick={handlePrev} />
      <Banner image={pictures[currentIndex]} style={bannerStyle}/>
      <ArrowRight onClick={handleNext} />
      <div className="slide-number">{`${currentIndex + 1}/${pictures.length}`}</div>
    </div>
  );
};

export default Slideshow;
