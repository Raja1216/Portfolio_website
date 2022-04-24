import React from 'react'
import "./App.css"
import  ReactDOM  from 'react-dom'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Service"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonial from "./components/testimonial/Testimonial"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

// const cursor = document.querySelector(".cursor");
//   var timeout;
//   //follow Cursor on mousemove
//   document.addEventListener("mousemove",(e) => {
//     let x = e.pageX;
//     let y = e.pageY;
//     cursor.style.top = y + "px";
//     cursor.style.left = x + "px";
//     cursor.style.display = "block";
//     //curse effects on mouse stopped
//     function mouseStopped() {
//       cursor.style.display = "none";
//     }
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       mouseStopped()
//     }, 1000);
//   })
//   //curse effects on mouseout
//   document.addEventListener("mouseout", () =>{
//     cursor.style.display = "none";
//   })
const App = () => {
  return (
    <>
    {/* <div className='cursor'></div> */}
      <Header />
      <Nav/>
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Testimonial/>
      <Contact />
      <Footer /> 
    </>
  )
}

export default App