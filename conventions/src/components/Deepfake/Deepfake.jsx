import { useState } from 'react';
import ChapterPicker from '../Chapters/chapter-picker';
import Chapetrs from './chapetrs';

import './deepfake.css';

export function Deepfake() {

  

  const getTreatyText = () => {
    // const treaty = Conventions["Russian"]["Deepfake"];
    // return treaty.map((chapter, id) => {

    const [propsData, setPropsData] = useState(null);

    const handleChildrenProps = (data) => {
      setPropsData(data);
    }
      return (
        <>
          <ChapterPicker />
          <Chapetrs propsData={propsData}/>
        </>
      )
    }

  return (
    <div className='treaty'>
      {getTreatyText()}
    </div>
  )
}
