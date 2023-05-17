import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {loadTreatyData, allTreaties} from '../Controller';

import arrow from '../../assets/arrow.svg';
import './carousel.css';

export default function Carousel() {
  let treatiesNames = allTreaties();
  const [treaty, setTreaty] = useState(treatiesNames[0]);
 
  const scrollTreaties = (direction) => {
    console.log("Direction:", direction)
    if (direction === 'left') {
      treatiesNames.unshift(treatiesNames.at(-1));
      console.log("Left...Unshift:", treatiesNames)
      treatiesNames.pop();
      console.log("Left...Pop:", treatiesNames)
      setTreaty(treatiesNames[0])
    }
    treatiesNames.push(treatiesNames[0]);
    console.log("Right...Push:", treatiesNames)
    treatiesNames.shift();
    console.log("Right...Shift:", treatiesNames);
    setTreaty(treatiesNames[0]);
  }

  return (
    <div className='carousel'>
      <div className='arrow-container'>
        <button className='arrow-button left' onClick={() => scrollTreaties('left')}>
          <img className='arrow-img' src={arrow} />
        </button>
      </div>
      <h1 className="treaty-name from-right">{treaty}</h1>
      <div className='arrow-container'>
        <button className='arrow-button right' onClick={() => scrollTreaties('right')}>
          <img className='arrow-img' src={arrow} />
        </button>
      </div>
    </div>
  )
}
