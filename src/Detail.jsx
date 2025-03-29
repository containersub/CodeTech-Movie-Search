import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
const Detail = ({selected}) => {
  return (
    <div>
      <div className="card">
        <div className="card-img">
          <img src={selected.Poster} alt=''/>
        </div>
        <div className="card-info">
          <h2>{selected.Title}</h2>
          <p>{selected.Type}</p>
          <p>Rating:{selected.imdbRating}</p>
          <p>{selected.Plot}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail