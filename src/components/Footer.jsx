import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import React from 'react'
import "../styles/Footer.css";

function Footer(){
  return (
    <footer className='footer'>
        <div className="footerSocials">
          <div>
            <a href="https://github.com/carlahauu">
              <GitHub fontSize="large" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/carla-hau/">
              <LinkedIn fontSize="large" />
            </a>
          </div>
          <div>
            <a href='mailto:carlahau110@gmail.com'>
              <Email fontSize="large"/>
            </a>
          </div>
        </div>
        <p className='author'>© 2024 Carla Hau</p>
        <p className='lastUpdated'>Last Updated August 2024</p>
    </footer>
  )
}

export default Footer