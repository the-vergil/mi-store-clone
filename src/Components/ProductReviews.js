import React from 'react'
import ProductReviewCard from './ProductReviewCard.js'
import '../Styles/ProductReviews.css'

const ProductReviews = ({reviews}) => {
  return (
    <div className='productReviews'>
        {reviews.map((item, index) => (
            <ProductReviewCard key={item.index} index={index} review={item.review} name={item.name} price={item.price} image={item.image} />
        ))}
    </div>
  )
}

export default ProductReviews