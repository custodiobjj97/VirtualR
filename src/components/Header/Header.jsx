import React, { useState } from 'react'
import Logo from "../../assets/img/logo.png"
import "./header.css";
import { FaBars, FaTimes } from 'react-icons/fa';
const Header = () => {
    const [open,setOpen]=useState(false);

    const handleClick=()=>{
        setOpen(!open)
    }
  return (
    <header>
        <a href="#" className='logo'>
            <img src={Logo} alt="" />
            <h1>VirtualR</h1>
        </a>

        <nav>
            <ul className={open ? "list-menu open" : "list-menu"}>
                <li><a href="#">Features</a></li>
                <li><a href="#">Workflow</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Testimonials</a></li>
                <a href="#" className='btn btn-header'>Create an account</a>
                <a href="#" className='btn-sign btn-header'>Sign</a>
            </ul>
        </nav>
        <div onClick={handleClick} className="toggle">
            {open ? <FaTimes size="40" color='#fff'/> : <FaBars size="40" color='#fff'/>}
        </div>
        
    </header>
  )
}

export default Header