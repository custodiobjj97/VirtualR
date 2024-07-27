import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer>
        
        <ul className="list-footer">
         <h3>Resources</h3>
            <li><a href="#">Getting Started</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">API Reference</a></li>
            <li><a href="#">Community Forums</a></li>
        </ul>

        <ul className="list-footer">
         <h3>Platform</h3>
            <li><a href="#">Features</a></li>
            <li><a href="#">Supported Devices</a></li>
            <li><a href="#">System Requirements</a></li>
            <li><a href="#">Downloads</a></li>
            <li><a href="#">Release Notes</a></li>
        </ul>

        <ul className="list-footer">
         <h3>Community</h3>
            <li><a href="#">Events</a></li>
            <li><a href="#">Meetups</a></li>
            <li><a href="#">Conferences</a></li>
            <li><a href="#">Hackathons</a></li>
            <li><a href="#">Jobs</a></li>
        </ul>
    </footer>
  )
}

export default Footer