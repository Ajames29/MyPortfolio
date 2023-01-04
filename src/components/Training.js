import React from 'react'
import'./TrainingStyles.css'
import { Link } from 'react-router-dom'
import Moon from '../assets/Moon.jpg'
import DayMoon from '../assets/DayMoon.jpg'

const Training = () => {
  return (
    <div className='training'>
        <div className='left'>
           <h1>Training</h1>
           <p>Through training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios. </p>
            {/* <Link to='contact'><button className='btn'>Contact</button></Link> */}
        </div>
        <div className='right'>
            <div className='img-cointainer'>
                <div className='image-stack top'>
                    <img src={Moon} className='img' alt='' />
                </div>
                <div className='image-stack bottom'>
                    <img src={DayMoon} className='img' alt='' />
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Training
