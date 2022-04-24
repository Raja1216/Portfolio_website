import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/me-removebg-preview.png"
import HBI from "../../assets/2.png"
import LTI from "../../assets/15.png"
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
    <div className='container header__container'>
    <div className='nameContain'>
 <h5 className='helloText'>Hello I'm</h5>
 <h1>Subhajit Pramanik</h1>
 <h5 className='text-light'>Software Developer</h5>
 </div>
 <CTA />
 {/* For Icons */}
 <HeaderSocials />
 <div className=' header__body__image'>
 <img src={HBI} alt=''/>
 </div>
 <a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
    </header>
  )
}
export default Header
