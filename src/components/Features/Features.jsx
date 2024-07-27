import React from 'react'
import "./feature.css"
import { FaDigitalOcean, FaRobot} from 'react-icons/fa'
import { FaBatteryHalf, FaShield } from 'react-icons/fa6'
import { BsOutlet } from 'react-icons/bs'
import { BiSolidPlanet } from 'react-icons/bi'
const Features = () => {
  return (
    <section className='feature'>
        <span className='feature-title'>FEATURE</span>
        <h2>Easily build <span className='color-text'>your code</span></h2>
        <div className="feature-grids">
            <div className="box-feature">
            <h3>Drag-and-Drop <br/> Interface</h3>
            <p>Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.</p>
            <FaRobot color='rgb(249, 115, 22)' className='logo-feature'/>
            </div>
            <div className="box-feature">
            <h3>Multi-Platform Compatibility</h3>
            <p>Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.</p>
            <FaDigitalOcean color='rgb(249, 115, 22)' className='logo-feature'/>
            </div>
            <div className="box-feature">
            <h3>Built-in Templates</h3>
            <p>Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.</p>
            <FaShield color='rgb(249, 115, 22)' className='logo-feature'/>
            </div>
            <div className="box-feature">
                <h3>Real-Time Preview</h3>
                <p>Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.</p>
                <FaBatteryHalf color='rgb(249, 115, 22)' className='logo-feature'/>
            </div>
            <div className="box-feature">
            <h3>Collaboration Tools</h3>
            <p>Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.</p>
            <BsOutlet color='rgb(249, 115, 22)' className='logo-feature'/>
            </div>
            <div className="box-feature">
                <h3>Analytics Dashboard</h3>
                <p>Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.</p>
                <BiSolidPlanet color='rgb(249, 115, 22)' className='logo-feature'/>
            </div>
        </div>
    </section>
  )
}

export default Features