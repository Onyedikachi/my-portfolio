import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      {/* eslint-disable-next-line*/}
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/>Home</a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser/> About</a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#experience' ? 'active': ''}><BiBook/>Skills</a>
      <a href='#portfolio' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><RiServiceLine/>Projects</a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><BiMessageSquareDetail/>Contact</a>
    </nav>
  )
}

export default Nav