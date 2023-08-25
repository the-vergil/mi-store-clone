import React from 'react'
import '../Styles/heading.css'

const Heading = ({text}) => {
  return (
    <div className='headingSection'>
        <div></div>
        <p>{text}</p>
        <div></div>
    </div>
  )
}

export default Heading