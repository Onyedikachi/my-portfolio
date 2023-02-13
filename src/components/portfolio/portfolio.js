import React from 'react'
import './portfolio.css'
import Portfolio1 from '../../assets/meditex.png'
import Portfolio3 from '../../assets/admin-portal.png'
import Portfolio4 from '../../assets/paperlessoffice.png'
import Portfolio5 from '../../assets/speedysignapp.png'
import Portfolio6 from '../../assets/paperlessapp.png'

const data = [
  {
    id :1,
    image: Portfolio1,
    title:'Meditex Diagnostic Laboratory Website',
    github:'',
    demo: ' https://meditex.com.ng'
  },
   {
    id :3,
    image: Portfolio3,
    title:'SignTech Admin Portal',
    github:'',
    demo: 'http://admin.amazondigitaloffice.com'
  },
  {
    id :4,
    image: Portfolio4,
    title:'Amazon Digital office',
    github:'',
    demo: 'https://amazondigitaloffice.com'
  },
  {
    id :5,
    image: Portfolio5,
    title:'SpeedySign Mobile App',
    github:'',
    demo: 'https://apps.apple.com/ng/app/signtech-speedysign/id1012982844?platform=iphone'
  },
  {
    id :6,
    image: Portfolio6,
    title:'SignTech Paperless Mobile App',
    github:'',
    demo: 'https://apps.apple.com/ng/app/signtech-paperless/id1184332679?platform=iphone'
  }
]


const Portfolio = () => {
  return (
   <section id='portfolio'>
   <h2 data-aos='fade-up'>My Projects</h2>

   <div className="container portfolio_container">
   {
     data.map(({id, image, title, github, demo}) =>{
       return ( 
        <article key={id}  data-aos='flip-up'className="portfolio_item">
          <div className="portfolio_image">
            <img src={image}  alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="portfolio_item_cta">
            <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
            <a href={github} className='btn btn2' target='_blank'>Github</a>
            </div>
        </article>
       )
     })
   }

   </div>
   </section>
  )
}

export default Portfolio