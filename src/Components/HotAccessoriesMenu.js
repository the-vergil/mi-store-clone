import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/HotAccessoriesMenu.css'

const HotAccessoriesMenu = () => {
  return (
    <div className='hotAccessoriesMenu'>
        <Link className="HotAccessoriesLink" to='/music'>Music</Link>
        <Link className="HotAccessoriesLink" to='/smartDevice'>Smart Devices</Link>
        <Link className="HotAccessoriesLink" to='/home'>Home</Link>
        <Link className="HotAccessoriesLink" to='/lifeStyle'>Lifestyle</Link>
        <Link className="HotAccessoriesLink" to='/mobileAccessories'>Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu