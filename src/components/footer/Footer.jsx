import React from 'react'
import "./footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"
import {useState} from 'react'

const Footer = () => {
  const [activeNav] = useState('#')
  return (
    <footer>
      <a href='#' className='footer__logo'>SP</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about' className={activeNav === '#about' ? 'active':''}>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        {/* <li><a href='#service'>Services</a></li> */}
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonial'>Testimonial</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookF /></a>
        <a href='https://instagram.com'><FiInstagram /></a>
        <a href='https://twitter.com'><IoLogoTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Subhajit Pramaink. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer