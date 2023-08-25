import React from 'react'
import '../Styles/ProductReviewCard.css'

const ProductReviewCard = ({name, price, review, index, image}) => {
  return (
    <div className='reviewCard'>
        <img src={image} alt={`Product Review ${index}`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default ProductReviewCard