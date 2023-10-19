import React from 'react'
import './possibility.css'

import possibilityImg from '../../assets/possibility.png'


const Possibility = () => {
  const possTitle = "The possibilities are beyond your imagination";
  const possSub = "Request Early Access to Get Started";
  const possText = "Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.";

  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className='gpt3__possibility-image'>
        <img src={possibilityImg} alt='possibility image' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>{possSub}</h4>
        <h1 className='gradient__text'>{possTitle}</h1>
        <p>{possText}</p>
        <h4>{possSub}</h4>
      </div>
    </div>
  )
}

export default Possibility