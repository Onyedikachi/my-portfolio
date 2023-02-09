import React from 'react'
import CV from '../assets/cert.PNG'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} className='btn' download>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA