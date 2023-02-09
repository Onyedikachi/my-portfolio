import React from 'react'
import './about.css'
import aboutImg from '../../assets/abtimgg.jpeg';

const About = () => {
  return (
    <section id='about' className='about' >
      <h2 data-aos='fade-up'> About Me</h2>

        <div className="container about_container">

           <div className="about_me" data-aos='zoom-out-right'>
             <div className="about_img">
             <img src={aboutImg} alt=''/>
             </div>
           </div>

        <div className="about_content" data-aos='zoom-out-left'>

          <p>I'm Nwosu, a Software  Engineer expert in both front-end and backend software with Nodejs, React, Python, Laravel with excellent user experience. </p>
          <p>I build websites to help my clients push their businesses further online. My goal is to bring across clients message and identity in the most creative way.</p>
          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      
        </div>
       
      </section>
  )
          
     
}

export default About

