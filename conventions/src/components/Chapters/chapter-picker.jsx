import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import {loadTreatyData} from '../Controller';

import './chapter-picker.css';

export default function ChapterPicker() {

    const { treatyData, treatyChapters } = loadTreatyData(); // defaults are loaded

  return (
    <div className='chapter-picker'>
      {
        treatyChapters.map((chapter, id) => {
          return(
            <NavLink  to={`/chapter-${id+1}`}>
              <div className="chapter" key={id}>
                {id ===  0 ? chapter : `Глава ${chapter}`}
              </div>
            </NavLink >
          )
        })
      }
    </div>
  )
}
