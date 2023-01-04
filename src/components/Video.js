import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'
import spaceVideo from '../assets/nasa.jpg'
import profilepic from '../assets/aj.jpg.png'

const Video = () => {
  return (
    <div className='hero'>
      <img src={spaceVideo} alt="space video" id='video' />
      
      <div className='content'>
       <img src={profilepic} className="prof" alt="profile picture" id='profilepicture'/>
      <p>Hi! I'am</p>
        <h1>Alexander James Gutierrez </h1> 
      <p>Jr Software Engineer</p>
    <div>
      <Link to='achievements' className='btn'>Achievements</Link>
      <Link to='contact' className='btn btn-light'>Launch</Link>
    </div>
  </div>
  </div>
  )
}

export default Video
