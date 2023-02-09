import React from "react";
import "./experience.css";
import html from '../../assets/html.PNG'
import css from '../../assets/css.PNG'
import js from '../../assets/js.PNG'
import react from '../../assets/react.PNG'
import bts from '../../assets/bootstrap.PNG'




const data = [
  {
    id :1,
    image: html,
    title:'HTML',
  },
  
   {
    id :3,
    image: css,
    title:'CSS',
 
  },
  {
    id :4,
    image: js,
    title:'Javascript',
    
  },
  {
    id :5,
    image: bts,
    title:'Bootstrap',
  
  },
  {
    id :6,
    image: react,
    title:'React Js',
   
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
