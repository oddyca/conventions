import { useState } from 'react';
import ChapterPicker from '../Chapters/chapter-picker';
import Chapters from '../Chapters/chapters';
import { loadTreatyData } from '../Controller';

import './deepfake.css';

export default function Deepfake() {

  const [chapter, setChapter] = useState(0);
  const passChapter = (data) => {
    setChapter(data);
  }

  const { treatyChapters } = loadTreatyData("Deepfake");

  return (
    <div className='treaty'>
      <ChapterPicker treatyChapters={treatyChapters} passChapter={passChapter}/>
      <Chapters whichTreaty={"Deepfake"} chapter={chapter} />
    </div>
  )
}
