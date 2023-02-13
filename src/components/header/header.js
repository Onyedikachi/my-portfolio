import React, { useEffect, useState } from 'react'
import './header.css'
import CTA from '../CTA'
import Socials from '../Socials'

const Header = () => {
 
    


  return (
  <header>
   
      <div className="container header_container">
        <div className="hero-text" data-aos='zoom-out' data-aos-delay='1000'>
          <h4>Hello I'm</h4>
          <h1>Nwosu Onyedikachi</h1>
          <p className='light'>A Software Engineer and Technical Writer based in Lagos, NIGERIA</p>
          <CTA/>
         </div>
         <Socials />
      </div>
  
    </header>
  )
}

export default Header