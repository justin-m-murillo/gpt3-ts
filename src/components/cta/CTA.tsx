import React from 'react'
import './cta.css'

const CTA = () => {
  const ctaTitle = "Register today & start exploring the endless possiblities."
  const ctaSub = "Request Early Access to Get Started"

  return (
    <div className='gpt3__cta'>
      <div className='gpt3__cta-content'>
        <p>{ctaSub}</p>
        <h3>{ctaTitle}</h3>
      </div>
      <div className='gpt3__cta-btn'>
        <button type="button">Get Started</button>
      </div>
    </div>
  )
}

export default CTA