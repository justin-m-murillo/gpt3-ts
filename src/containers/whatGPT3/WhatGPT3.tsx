import React from 'react'
import { Feature } from '../../components'
import './whatgpt3.css'

type Props = {}

const WhatGPT3 = (props: Props) => {
  const wgptTitle = "The possibilities are beyond your imagination"
  const wgptSub = "Explore The Library"

  const wgptInfo = [
    { 
      title: 'What is GPT-3',
      text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
    },
    { 
      title: 'Chatbots',
      text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.'
    },
    { 
      title: 'Knowledgebase',
      text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments by'
    },
    { 
      title: 'Education',
      text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments by'
    },
  ]

  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title={wgptInfo[0].title} text={wgptInfo[0].text} />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>{wgptTitle}</h1>
        <p>{wgptSub}</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        {wgptInfo.slice(1).map((info, index) => (
          <Feature key={index} title={info.title} text={info.text} />
        ))}
      </div>
    </div>
  )
}

export default WhatGPT3