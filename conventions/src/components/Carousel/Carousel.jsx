import { useState } from 'react';
import arrow from '../../assets/arrow.svg';
import './carousel.css';

export default function Carousel(props) {

  const { treaty, setTreaty } = props

  return (
    <div className='carousel'>
      <div className='arrow-container'>
        <button className='arrow-button left'>
          <img clasName='arrow-img' src={arrow} />
        </button>
      </div>
      <h1 className="treaty-name">{treaty}</h1>
      <div className='arrow-container'>
        <button className='arrow-button right'>
          <img clasName='arrow-img' src={arrow} />
        </button>
      </div>
    </div>
  )
}
