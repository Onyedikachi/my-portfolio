import React from 'react'
import './portfolio.css'
import Portfolio1 from '../../assets/portfolio2.png'
import Portfolio3 from '../../assets/portfolio3.jpeg'
import Portfolio4 from '../../assets/portfolio5.jpeg'
import Portfolio5 from '../../assets/portfolio1.jpeg'
import Portfolio6 from '../../assets/portfolio4.jpeg'



const data = [
  {
    id :1,
    image: Portfolio1,
    title:'Delivery Website',
    github:'https://github.com',
    demo: ' https://catapultexpress.netlify.app'
  },
  // {
  //   id :2,
  //   image: Portfolio2,
  //   title:'Blog post',
  //   github:'https://github.com',
  //   demo: 'https://netlify.com'
  // },
   {
    id :3,
    image: Portfolio3,
    title:'Ecommerce website',
    github:'https://github.com',
    demo: 'https://maefashion.netlify.app'
  },
  {
    id :4,
    image: Portfolio4,
    title:'Pastries Landing Page',
    github:'https://github.com',
    demo: 'https://pastry-landingpage.netlify.app'
  },
  {
    id :5,
    image: Portfolio5,
    title:'Food Recipe App',
    github:'https://github.com',
    demo: 'https://searchfood-recipe.netlify.app/'
  },
  {
    id :6,
    image: Portfolio6,
    title:'Memory Game App',
    github:'https://github.com',
    demo: 'https://memory-gameapp.netlify.app'
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