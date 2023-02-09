import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h2 data-aos='fade-up'>Get in touch</h2>
      <p data-aos='fade-down'>Do you want a website for your business? Contact me to get your nicely designed and reponsive website.</p>
      <div className="container contact-container">
        <div className="contact-options" data-aos='zoom-in-left'>
          <article className='contact-option'>
            <MdOutlineEmail className='contact-icon'/>
            <h4>Email</h4>
            <a href='mailto:maryanneonwuemene@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact-option'>
            <BsLinkedin className='contact-icon'/>
            <h4>LinkedIn</h4>
            <a href='http://linkedin.com/in/devkachi' target='_blank'>Send a message</a>
          </article>
          <article className='contact-option'>
            <BsWhatsapp className='contact-icon'/>
            <h4>Whatsapp</h4>
            <a href='https://api.whatsapp.com/send?phone=+2348139203980' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* end if contact options */}
        <form action=''data-aos='zoom-in-right' >
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required  />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact