import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Socials = () => {
  return (
    <div className='socials'>
      <a href="http://linkedin.com/in/devkachi" target="_blank" ><BsLinkedin/></a>
      <a href="http://github.com/Onyedikachi" target="_blank" ><FaGithub/></a>
      <a href="http://instagram.com/noidadon2" target="_blank"><FiInstagram/></a>
    </div>
  )
}

export default Socials 