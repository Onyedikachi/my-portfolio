import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'


function Footer() {
  return (
    <footer>
       <ul>
         <li><a href="#">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#portfolio">Projects</a></li>
         <li><a href="#skills">Skills</a></li>
         {/* <li><a href="#services">Services</a></li> */}
         <li><a href="#contact">Contact</a></li>
       </ul>

       <div className='footer-socials'>
         <a href="https://facebook.com"><FaFacebook /></a>
         <a href="https://github.com/Onyedikachi"><FaGithub /></a>
         <a href="https://linkedin.com/in/devkachi"><FaLinkedin /></a>
       </div>

       <div className='footer-copyright'>
       <small>&copy; 2023, Designed and developed by Nwosu Onyedikachi</small>
       </div>
       </footer>
  )
}

export default Footer