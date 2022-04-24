import React from 'react'
import "./service.css"
import {BsCheck} from "react-icons/bs"
const Service = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
        <div className='service__head'>
          <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
          
        </ul>
        </article>
        {/* End of UI/UX */}
        <article className='service'>
        <div className='service__head'>
          <h3>Content Creation</h3>
        </div>
        <ul className='service__list'>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
        </ul>
        </article>
        {/* End of Content Creation */}
        <article className='service'>
        <div className='service__head'>
          <h3>UI/UX Design</h3>
        </div>
        <ul className='service__list'>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
          <li><BsCheck  className='service__list-icon'/> 
          <p>
          It is a long established fact that a reader will be distracted. 
          </p>
          </li>
        </ul>
        </article>
        {/* End of UI/UX */}
      </div>
    </section>
  )
}

export default Service