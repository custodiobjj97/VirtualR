import React from 'react'
import ImgInfo from '../../assets/img/code.jpg'
import './info.css';
import { FaCheck } from 'react-icons/fa6';
const Info = () => {
  return (
    <section className='info'>
        <h2 className='info-title'>Accelerate your <span className='color-text'>coding workflow.</span></h2>
        <div className='info-grid'>
            <div className="info-image">
               <img src={ImgInfo} alt="" />
            </div>
            <div className="info-text">
                <ul className='list-info'>
                    <li>
                        <h3><FaCheck color='#96E8BC'/> Code merge made easy</h3>
                        <p>Track the performance of your VR apps and gain insights into user behavior.</p>
                    </li>
                    <li>
                        <h3><FaCheck color='#96E8BC'/> Review code without worry</h3>
                        <p>Track the performance of your VR apps and gain insights into user behavior.</p>
                    </li>
                    <li>
                        <h3><FaCheck color='#96E8BC'/> AI Assistance to reduce time</h3>
                        <p>Track the performance of your VR apps and gain insights into user behavior.</p>
                    </li>
                    <li>
                        <h3><FaCheck color='#96E8BC'/> Share work in minutes</h3>
                        <p>Track the performance of your VR apps and gain insights into user behavior.</p>
                    </li>
                    
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Info