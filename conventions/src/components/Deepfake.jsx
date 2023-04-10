import React from 'react';
import Conventions from '/Frontend/conventions/conventions/src/db/Database'

export function Deepfake() {

  // От оглавления до текста глав - это все компонент Дипфейк
  // Выбор глав - отдельный компонент, который будет импортироваться (главы в качестве пропсов?)

  const getTreatyText = () => {
    const treaty = Conventions["Russian"]["Deepfake"];
    console.log(treaty)
    return treaty.map((chapter, id) => {
      return (
        <>
          <h1>Chapter {id + 1}</h1>
          <p>
            {
              chapter.map((article) => Object.keys(article).map((content) => article[content]))
            }
          </p>
        </>
      )
    })
  }

  return (
    <div>
      {getTreatyText()}
    </div>
  )
}
