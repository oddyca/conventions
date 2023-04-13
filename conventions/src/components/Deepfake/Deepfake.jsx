import React from 'react';
import Conventions from '/Frontend/conventions/conventions/src/db/Database';

import './deepfake.css';

export function Deepfake() {

  // От оглавления до текста глав - это все компонент Дипфейк
  // Выбор глав - отдельный компонент, который будет импортироваться (главы в качестве пропсов?)

  const getTreatyText = () => {
    const treaty = Conventions["Russian"]["Deepfake"];
    return treaty.map((chapter, id) => {
      return (
        <>
          <h1>Chapter {id + 1}</h1>
            {
              chapter.map((article) => Object.keys(article).map((content) => {
                return (
                  <>
                    <p className='treaty-paragraph'>
                      {article[content]}
                    </p>
                    <br />
                  </>
                )}
               ))
            }
        </>
      )
    })
  }

  return (
    <div className='treaty'>
      {getTreatyText()}
    </div>
  )
}
