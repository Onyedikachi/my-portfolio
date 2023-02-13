import React from "react";
import "./experience.css";
import php from '../../assets/php.png'
import react from '../../assets/react.png'
import swift from '../../assets/swift.png'
import node from '../../assets/nodejs.png'
import python from '../../assets/python.png'
import postgres from '../../assets/postgre.png'

const data = [
  {
    id :1,
    image: node,
    title:'NodeJS',
  },
  {
    id :2,
    image: react,
    title:'ReactJS',
 
  },
  
  {
    id :3,
    image: python,
    title:'Python',
 
  },
  {
    id :4,
    image: php,
    title:'PHP',
    
  },
  {
    id :5,
    image: postgres,
    title:'Postgres SQL',
  
  },
  {
    id :6,
    image: swift,
    title:'Swift',
  }
]


const Experience = () => {
  return (
   <section id='skills'>
   <h2 data-aos='fade-up'>My Skills</h2>

   <div className="container skills_container">
   {
     data.map(({id, image, title, github, demo}) =>{
       return ( 
        <article key={id}  data-aos='flip-up'className="skills_item">
          <div className="skills_image">
            <img src={image}  alt={title} />
          </div>
          <div className="card">
            <h3>{title}</h3>
          </div>
           
        </article>
       )
     })
   }

   </div>
   </section>
  )
}

export default Experience
