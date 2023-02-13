import React from 'react'
import './about.css'
import aboutImg from '../../assets/kachi.jpeg';

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

          <p>I'm Software Engineer with 4+ years of experience in 
            designing and developing commercial software solutions for 
            web and mobile applications. </p>
          <p>Highly skilled in frontend and 
            backend development which has contributed significantly to 
            business needs and improved efficiency levels. </p>
          <p>
            Adept at relationship management, client satisfaction, project management, 
             teamwork </p>
          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      
        </div>
       
      </section>
  )
          
     
}

export default About

