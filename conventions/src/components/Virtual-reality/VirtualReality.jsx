import ChapterPicker from "../Chapters/chapter-picker";
import Chapters from "../Chapters/chapters";

export default function VirtualReality() {
  return (
    <div className='treaty'>
      <ChapterPicker whichTreaty={"VirtualReality"}/>
      <Chapters />
    </div>
  )
}
