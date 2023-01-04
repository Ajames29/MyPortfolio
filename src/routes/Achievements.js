import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import AchievementsCards from '../components/Achievements'
// import HeroSlider from '../components/HeroSliders'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import HeroSliders from '../components/HeroSliders'



const Achievements = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading='ACHIEVEMENTS'text="My Achievements" />
      <AchievementsCards/>
      {/* <HeroSliders/> */}
      <Footer/>
    </div>
  )
}

export default Achievements
