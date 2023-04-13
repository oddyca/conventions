import { useState } from 'react';
import './App.css';
import { Deepfake } from './components/Deepfake/Deepfake';
import Carousel from './components/Carousel/Carousel';

import Logo_of_the_unUnited_Nations from './assets/Logo_of_the_unUnited_Nations.svg';
import divier from './assets/divider.png';

function App() {
  const [treaty, setTreaty] = useState('Конвенция О регулировании технологии дипфейк');

  return (
    <div className="App">
      <div className="top-dec">
        <img src={Logo_of_the_unUnited_Nations} className='uun-logo'/>
      </div>
      <Carousel treaty={treaty} setTreaty={setTreaty}/>
      <img className="divider" src={divier} />
      <Deepfake />
    </div>
  )
}

export default App
