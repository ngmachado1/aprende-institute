import React from 'react'

function Card({title, imageUrl}) {
  return (
    <div className="sm-col-12 md-col-3">
    <div className="card">
        <div className="image-card">
            <img src={imageUrl} alt="" loading='lazy'/>
        </div>
        <div className="body-card">
            <h5>{title.rendered}</h5>
        </div>
        <button className="btn btn-primary mx-auto mt-auto">Ver clase</button>
    </div>
    </div>
  )
}

export default Card