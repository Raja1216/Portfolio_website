import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri" 
import {BsWhatsapp} from "react-icons/bs"
import LeftMs from "../../assets/7.png"
import RightMs from "../../assets/8.png"
import { useRef } from 'react';
import emailjs from "emailjs-com"
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ll3n4ff', 'template_1yd6alx', form.current, '8TAEh1zEvXmewIr19')
      e.target.reset()

  };
  return (
    <section id='contact'>
    <img src={LeftMs} className="imgLeft"/>
    <img src={RightMs} className="imgRight"/>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact__container'>
      <div className='contact__options'>
      <article className='contact__option'>
      <MdOutlineEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>subha.pramanik1212@gmail.com</h5>
        <a href='mailto:subha.pramanik1212@gmail.com'>Send a message</a>
      </article>
      <article className='contact__option'>
      <RiMessengerLine className='contact__option-icon'/>
        <h4>Messaenger</h4>
        <h5>subhajit</h5>
        <a href='https://m.me/sp.achiver'>Send a message</a>
      </article>
      <article className='contact__option'>
      <BsWhatsapp className='contact__option-icon'/>
        <h4>WhatsApp</h4>
        <h5>+91 8116909733</h5>
        <a href='https://api.whatsapp.com/send?phone=+919382669952'>Send a message</a>
      </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      
    </div>
    </section>
  )
}

export default Contact