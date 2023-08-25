import React from 'react'
import Offer from './Offer.js'
import '../Styles/offerSection.css'

const Offers = ({offer}) => {
  return (
    <div className='offerSection'>
        {offer.map((item, index) => (
            <Offer key={item.image} src={item.image} index={index} link={item.url}/>
        ))}
    </div>
  )
}

export default Offers