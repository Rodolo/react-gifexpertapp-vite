import React from 'react'

export const GifItem = ({title, source}) => {
  return (
    <div className='card'>
        <img src={source} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}
