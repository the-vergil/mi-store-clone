import React from 'react'
import '../Styles/VideoCard.css'
const playBtn = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-203v-560l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z"/></svg>

const VideoCard = ({name, image, index}) => {
  return (
    <div className='videoCard' style={{backgroundImage:`url(${image})`}}>  
        <a href="#/">{playBtn}</a>
        <p>{name}</p>
    </div>
  )
}

export default VideoCard