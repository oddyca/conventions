import { useState } from 'react'
import './App.css'
import { Deepfake } from './components/Deepfake'
import Carousel from './components/Carousel';

import Logo_of_the_unUnited_Nations from './assets/Logo_of_the_unUnited_Nations.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="top-dec">
        <img src={Logo_of_the_unUnited_Nations} className='uun-logo'/>
      </div>
      <Carousel />
      <Deepfake />
    </div>
  )
}

export default App
