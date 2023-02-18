
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import React, { useEffect, useState} from 'react'


import AOS from 'aos'
import "aos/dist/aos.css"
import Footer from './components/Footer'

const App = () => {
  const [loading, setLoading] = useState(true)
 const loader = document.getElementById('container')

  if(loader) {
    setTimeout(() => {
      loader.style.display= 'none'
      setLoading(false)
    },2000)
  }
  

  useEffect(() => {
    AOS.init({duration: 1500})
    AOS.refresh()
  }, [])

  return (
   !loading && (
      <div>
       <Nav />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div> 
   )
  )
}

export default App