import React from 'react'
import Video1 from "../../assets/img/video1.mp4"
import Video2 from "../../assets/img/video2.mp4"
import "./hero.css"
const Hero = () => {
  return (
    <section className='hero'>
        <h1>VirtualR build tools <span className='color-text'>for</span><br/> 
        <span className='color-text'>developers</span></h1>
        <p>Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!</p>
        <a href="#" className='btn'>Start for free</a>
        <a href="#" className='btn-sign'>Documentation</a>
        <div className="video-box">
            <video autoPlay loop muted>
                <source src={Video1}/>
            </video>
            <video autoPlay loop muted>
                <source src={Video2}/>
            </video>
        </div>
    </section>
  )
}

export default Hero