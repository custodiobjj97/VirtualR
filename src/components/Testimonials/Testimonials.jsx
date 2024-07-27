import React from 'react';
import "./testimonials.css"; 

const Testimonials = () => {
    const datas=[
        {
            id:0,
            title:'John Doe',
            subtitle:'Stellar Solutions',
            desc:'I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.',
            src:'/profile-pictures/user1.jpg'
        },
        {
            id:1,
            title:'Jane Smith',
            subtitle:'Blue Horizon Technologies',
            desc:"I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
            src:'/profile-pictures/user2.jpg'
        },
        {
            id:2,
            title:'David Johnson',
            subtitle:'Quantum Innovations',
            desc:"Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
            src:'/profile-pictures/user3.jpg'
        },
        {
            id:3,
            title:'Ronee Brown',
            subtitle:'Fusion Dynamics',
            desc:"Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
            src:'/profile-pictures/user4.jpg'
        },
        {
            id:4,
            title:'Michael Wilson',
            subtitle:'Visionary Creations',
            desc:"I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
            src:'/profile-pictures/user5.jpg'
        },
        {
            id:5,
            title:'Emily Davis',
            subtitle:'Synergy Systems',
            desc:"The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
            src:'/profile-pictures/user6.jpg'
        },
        
    ]
  return (
    <section className='testimonials'>
        <h2>What People are saying</h2>
        
        <div className="grids-testimonials">
            {datas.map((item)=>{
                return( <div className='box-testimonials' key={item.id}>
                    <p>{item.desc}</p>
                     <div className='footer-box'>
                        <img src={item.src} alt="" />
                        <h3>{item.title} <br/>
                         <span className='color-box'>{item.subtitle}</span>
                        </h3>
                    </div>
                     
                </div>)
            })}
        </div>
    </section>
  )
}

export default Testimonials