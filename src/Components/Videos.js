import React from 'react'
import VideoCard from './VideoCard.js'
import '../Styles/Videos.css'

const Videos = ({video}) => {
  return (
    <div className='videos'>
        {video.map((item, index) => (
            <VideoCard index={index} key={item.image} image={item.image} name={item.name}/>
        ))}
    </div>
  )
}

export default Videos