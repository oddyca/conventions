import React from 'react';
import { NavLink } from 'react-router-dom';
import Conventions from './Database.js'

export function Deepfake() {
  return (
    <div>{Object.keys(Conventions.data["Russian"]).map((convention) => {
        return(
        <>
        {Conventions.data["Russian"][convention].map((chapter) => {
            <h1>{Conventions.data["Russian"][convention][chapter]}</h1>
            return(
            <p>{chapter.map((article) => 
                Object.keys(article).map((content) => article[content]))}</p>)
        })}
        </>)

    })}</div>
  )
}
