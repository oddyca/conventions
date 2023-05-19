import { NavLink } from 'react-router-dom';

import './chapter-picker.css';

export default function ChapterPicker(props) {
  
  const { treatyChapters, passChapter } = props;
  
  return (
    <>
      <div className='chapter-picker'>
        {
          treatyChapters.map((chapterElem, id) => {
            return(
              <NavLink 
                to={`./chapter-${id === 0 ? 'preamble' : id}`}
                onClick={() => passChapter(id)}
              >
                <div className="chapter" key={id}>
                  {id === 0 ? chapterElem : `Глава ${chapterElem}`}
                </div>
              </NavLink >
            )
          })
        }
      </div>
    </>
    
  )
}
