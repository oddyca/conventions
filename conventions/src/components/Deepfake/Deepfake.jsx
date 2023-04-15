import React from 'react';
import ChapterPicker from '../Chapters/chapter-picker';

import './deepfake.css';

export function Deepfake() {

  

  const getTreatyText = () => {
    // const treaty = Conventions["Russian"]["Deepfake"];
    // return treaty.map((chapter, id) => {
      return (
        <>
          <ChapterPicker />
        </>
      )
    }

  return (
    <div className='treaty'>
      {getTreatyText()}
    </div>
  )
}
