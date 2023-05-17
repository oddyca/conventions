import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import { Deepfake } from './components/Deepfake/Deepfake';
import Carousel from './components/Carousel/Carousel';

import Logo_of_the_unUnited_Nations from './assets/Logo_of_the_unUnited_Nations.svg';
import divier from './assets/divider.png';

function App() {

  return (
    <div className="App">
      <div className="top-dec">
        <img src={Logo_of_the_unUnited_Nations} className='uun-logo'/>
      </div>
      <Carousel />
      <img className="divider" src={divier} />
      <Routes>
        <Route path="/chapter-1" element={<Deepfake />} />
        <Route path="/chapter-2" element={<Deepfake />} />
        <Route path="/" element={<Deepfake />} />
      </Routes>
      
    </div>
  )
}

export default App
