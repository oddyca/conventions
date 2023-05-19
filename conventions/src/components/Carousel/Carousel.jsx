import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { allTreaties } from '../Controller';

import arrow from '../../assets/arrow.svg';
import './carousel.css';

export default function Carousel() {
  const navigate = useNavigate();

  let treatiesNames = allTreaties();
  const [treatyID, setTreaty] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
 
  const scrollLeft = () => {
    setTreaty(prev => treatyID === 0 ? treatiesNames.length - 1 : --prev);
    setSlideDirection('previous');
    setTimeout(() => {
      setSlideDirection(null);
    }, 200);
  }
  const scrollRight = () => {
    setTreaty(prev => treatyID === treatiesNames.length - 1 ? 0 : ++prev);
    setSlideDirection('next');
    setTimeout(() => {
      setSlideDirection(null);
    }, 200);
  }

  useEffect(() => {
    navigate(`${treatiesNames[treatyID].route}`);
  }, [treatyID])

  return (
    <div className='carousel'>
      <div className='arrow-container'>
        <button className='arrow-button left' onClick={scrollLeft}>
          <img className='arrow-img' src={arrow} />
        </button>
      </div>
      <h1 
        className={`treaty-name ${slideDirection === 'next' ? 'from-right' : slideDirection === 'previous' ? 'from-left' : ''}`}
        >
          {treatiesNames[treatyID].name}
      </h1>
      <div className='arrow-container'>
        <button className='arrow-button right' onClick={scrollRight}>
          <img className='arrow-img' src={arrow} />
        </button>
      </div>
    </div>
  )
}
