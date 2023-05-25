import { Navigate, Routes, Route, Router} from 'react-router-dom';
import './App.css';
import Treaty from './components/Treaty';
import Carousel from './components/Carousel/Carousel';

import Logo_of_the_unUnited_Nations from './assets/Logo_of_the_unUnited_Nations.svg';
import divider from './assets/divider.png';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="top-dec">
        <img src={Logo_of_the_unUnited_Nations} className='uun-logo'/>
      </div>
      <Carousel />
      <img className="divider" src={divider} />
      <Routes>
        <Route path="/:treaty/*" element={<Treaty />} />
        <Route path="/" element={<Navigate replace to="/deepfake/chapter-preamble" />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
