import { useState } from 'react';
import ChapterPicker from '../Chapters/chapter-picker';
import Chapters from '../Chapters/chapters';

import './deepfake.css';

export default function Deepfake() {

  return (
    <div className='treaty'>
      <ChapterPicker whichTreaty={"Deepfake"}/>
      <Chapters />
    </div>
  )
}
