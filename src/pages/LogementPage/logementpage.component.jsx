import React, { useState, useEffect } from 'react';
import './logementpage.styles.scss';
import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../../components/slideshow/slideshow.component';
import Stars from '../../components/stars/stars.component';
import Collapse from '../../components/collapse/collapse.component';
import logementsData from '../../logements.json';

const LogementPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [logement, setLogement] = useState(null);
  const [collapseStates, setCollapseStates] = useState([]);

  useEffect(() => {
    const fetchedLogement = logementsData.find((logement) => logement.id === id);
    if (!fetchedLogement) {
      navigate('/404');
    } else {
      setLogement(fetchedLogement);
      setCollapseStates(Array(fetchedLogement.equipments.length).fill(false));
    }
  }, [id, navigate]);

  const handleCollapseClick = (index) => {
    setCollapseStates((prevState) => {
      const newStates = [...prevState];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  if (!logement) {
    return <div>Chargement en cours...</div>;
  }

  const [firstName, lastName] = logement.host.name.split(' ');

  return (
    <div className="logement">
      <Slideshow logement={logement} />
      <div className="logement-host-container">
        <div className="logement-info">
          <div className="logement-title">{logement.title}</div>
          <div className="logement-location">{logement.location}</div>
        </div>
        <div className="host-info">
          <div className="host-name">
            <div>{firstName}</div>
            <div>{lastName}</div>
          </div>
          <div className="host-picture">
            <img src={logement.host.picture} alt="Hôte" />
          </div>
        </div>
      </div>

      <div className="tags-ratings-container">
        <div className="logement-tags">
          {logement.tags.map((tag) => (
            <div key={tag} className="tag">
              {tag}
            </div>
          ))}
        </div>

        <div className="rating-host-container">
          <div className="logement-rating">
            <Stars rating={parseInt(logement.rating)} />
          </div>
          <div className="host-info host-info-phone">
            <div className="host-name">
              <div>{firstName}</div>
              <div>{lastName}</div>
            </div>
            <div className="host-picture">
              <img src={logement.host.picture} alt="Hôte" />
            </div>
          </div>
        </div>
      </div>

      <div className="logement-collapses">
        <Collapse
          title="Description"
          content={logement.description}
          isOpen={collapseStates[0]}
          onClick={() => handleCollapseClick(0)}
        />
        <Collapse
          title="Équipements"
          content={logement.equipments.map((equipment) => (
            <div key={equipment}>{equipment}</div>
          ))}
          isOpen={collapseStates[1]}
          onClick={() => handleCollapseClick(1)}
        />
      </div>
    </div>
  );
};

export default LogementPage;
