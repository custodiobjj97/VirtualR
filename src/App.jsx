import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Scroll from './components/Scroll/Scroll'
import Info from './components/Info/Info'
import Pricing from './components/Pricing/Pricing'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
      <Header/>
      <Scroll children={<Hero/>} />
      <Scroll children={<Features/>}/>
      <Scroll children={<Info/>}/>
      <Scroll children={<Pricing/>}/>
      <Scroll children={<Testimonials/>}/>
      <Footer/>
    </>
  )
}

export default App
