import React from 'react'
import './about.css'
import aboutImg from '../../assets/kachi3.jpeg';

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

          <p>I am a Software Engineer skilled at
            technical leadership, communications,
            and presentations with vast experience
            in a project life cycle. </p>
          <p>I am a committed professional with more
            than four(4) years of experience in the
            Information Technology industry. I have given good technical 
            guidance on various projects with expertise in solution 
            optimization, web & mobile development, and cloud computing, 
            which has not only contributed significantly to business needs 
            but also doubled efficiency levels.</p>
          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      
        </div>
       
      </section>
  )
          
     
}

export default About

