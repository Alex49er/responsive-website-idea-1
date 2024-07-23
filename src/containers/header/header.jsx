import React from 'react'
import './header.css'
import ai from '../../assets/ai.png';
import people from '../../assets/people.png'


const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something Amazing with GPT-3 OpenAI
        </h1>
        <p>Yet bed for travelling assistance indeulgence unpleasing. Not thoughts all exercise blessing indulgence way everything joy alteration boisterous the attachment. Party we years in order to ask of.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started

          </button>

        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>1600 people have requested access</p>

        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </div>

    </div>
  )
}

export default Header
