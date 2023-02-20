import React, {useState} from 'react'
import axios from 'axios'
import { useAlert } from 'react-alert'
import {HashLoader} from 'react-spinners';

import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'


const lambdaApi = 'https://hpy6mpceo8.execute-api.eu-west-2.amazonaws.com/v1/router';

const Contact = () => {
  const [loading , setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const resetForm = () => {
    setMessage('');
    setEmail('');
    setName('');
    setPhone('');
  };

  const alert = useAlert();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios({
        url: lambdaApi,
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'post',
        data: {
          function: 'email-service',
          type: 'contact_mail',
          from: 'contactus@onyedikachinwosu.com.ng',
          message,
          name,
          email,
          phone,
          emailSubject: "Enquiries"
        }
      });

      alert.show('Email sent', {
        onClose: () =>{
          resetForm();
        }
      });
    } catch (error) {
        alert.error(error.message);
    }

    setLoading(false);

  }
  return ( 
    <>
       <section id='contact'>
       <h2 data-aos='fade-up'>Get in touch</h2>
       <p data-aos='fade-down'> Do you need help with your projects? 
       Use any of these mediums to contact me.</p>
       <div className="container contact-container">
         <div className="contact-options" data-aos='zoom-in-left'>
           <article className='contact-option'>
             <MdOutlineEmail className='contact-icon'/>
             <h4>Email</h4>
             <a href='mailto:onyedikachinwosu@rocketmail.com' rel="noreferrer" target='_blank'>Send a message</a>
           </article>
           <article className='contact-option'>
             <BsLinkedin className='contact-icon'/>
             <h4>LinkedIn</h4>
             <a href='http://linkedin.com/in/devkachi' rel="noreferrer" target='_blank'>Send a message</a>
           </article>
           <article className='contact-option'>
             <BsWhatsapp className='contact-icon'/>
             <h4>Whatsapp</h4>
             <a href='https://wa.me/08139203980'  rel="noreferrer" target='_blank'>Send a message</a>
           </article>
         </div>
         {/* end if contact options */}
         
         <form onSubmit={handleSubmit} data-aos='zoom-in-right' >
           <input 
             onChange={(e) => setName(e.target.value)}  value={name}
             type='text' name='name' placeholder='Your Full Name' required />
           <input 
             onChange={(e) => setEmail(e.target.value) } value={email}
             type='email' name='email' placeholder='Your Email' required  />
           <input 
             onChange={ (e) => setPhone(e.target.value)  } value={phone}
             type='phone' name='phone' placeholder='Your Phone Number' />
           <textarea 
             onChange={ (e) => setMessage(e.target.value) } value={message}
             name='message' rows='7' placeholder='Your Message' required></textarea>
           <button type='submit' className='btn btn-primary'>
              Send message
            </button>
            <HashLoader
                color={'#000'} 
                loading={loading}
              />
         </form>

       </div>
     </section>
    </>
  )
}

export default Contact