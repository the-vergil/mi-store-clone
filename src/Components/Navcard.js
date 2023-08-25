import React from 'react'
import '../Styles/NavCard.css'

const Navcard = ({name, image, price, index}) => {
  return (
    <div className='navCard'>
        <img src={image} alt={`Product ${index}`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default Navcard