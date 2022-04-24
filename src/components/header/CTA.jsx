//Call To Action (CTA)
import React from 'react'
import CV from "../../assets/SUBHAJITPRAMANIKCV.pdf"

const CTA = () => {
  return (
    <div className='cta'>
    {/* For File download */}
        <a href={CV} download className='btn btn-first'>
        <span>
         Download CV
         </span>
        </a>
        <a href='#contact' className='btn btn-primary'><span>Let's Talk</span></a>
    </div>
  )
}

export default CTA