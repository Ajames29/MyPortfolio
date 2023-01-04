import React from 'react'
import './FooterStyles.css'
import { FaFacebook,FaLinkedin,FaPhone,FaTwitter,FaSearchLocation,FaMailBulk} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color:'#ffffff',marginRight :'2rem'}}/>
                    <div>
                        <p>Block 7 Lot 1 Income Street Bir Village</p>
                        <h4>Quezon City Philippines</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:'#ffffff',marginRight :'2rem'}}/> 09265016371</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:'#ffffff',marginRight :'2rem'}} />AlexanderJamesGutiierrez29@gmail.com</h4>
                </div>
            </div>
            
            <div className='right'>
                <h4>About the company</h4>
                <p>"Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. 
                    Risus ultricies tristique nulla aliquet enim tortor at.
                    Hac habitasse platea dictumst 
                    quisque sagittis purus sit amet.
                    Dictumst vestibulum rhoncus 
                    est pellentesque elit.
                    Amet justo donec enim diam vulputate."</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color:'#ffffff',marginRight :'1rem'}}/>
                    <FaTwitter size={30} style={{color:'#ffffff',marginRight :'1rem'}}/>
                    <FaLinkedin size={30} style={{color:'#ffffff',marginRight :'1rem'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
