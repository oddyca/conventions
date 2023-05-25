import { useState } from "react";
import ChapterPicker from "../Chapters/chapter-picker";
import Chapters from "../Chapters/chapters";
import { loadTreatyData } from '../Controller';

export default function VirtualReality() {
  const whichTreaty = "VirtualReality";
  const [chapter, setChapter] = useState(0);
  const passChapter = (data) => {
    setChapter(data);
  }

  const { treatyChapters } = loadTreatyData(whichTreaty);

  return (
    <div className='treaty'>
      <ChapterPicker treatyChapters={treatyChapters} passChapter={passChapter}/>
      <Chapters whichTreaty={whichTreaty} chapter={chapter}/>
    </div>
  )
}
