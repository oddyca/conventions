import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import loadChapters from '../loadChapters';

import './chapter-picker.css';

export default function ChapterPicker() {

    const { treatyData, treatyChapters } = loadChapters();

  return (
    <div className='chapter-picker'>
        {
            treatyChapters.map((chapter, id) => {
                return(
                    <NavLink  to={`/chapter-${id+1}`}>
                        <div className="chapter" key={id}>
                            {id === 0 ? chapter : `Глава ${chapter}`}
                        </div>
                        </NavLink >
                )
            })
        }
    </div>
  )
}
