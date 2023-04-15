import React from 'react';
import loadChapters from '../loadChapters';

import './chapter-picker.css';

export default function ChapterPicker() {

    const { treatyData, treatyChapters } = loadChapters();

  return (
    <div className='chapter-picker'>
        {
            treatyChapters.map((chapter, id) => {
                return(
                    <div className="chapter" key={id}>
                        {id === 0 ? chapter : `Глава ${chapter}`}
                    </div>
                )
            })
        }
    </div>
  )
}
