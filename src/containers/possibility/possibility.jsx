import React from 'react'
import './possibility.css'
import possiblityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possiblityImage} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>
          Request early access to get started
        </h4>
        <h1 className='gradient__text'>
          The Possibilities Are Beyond Our Imagination.
        </h1>
        <p>Yet tavelling bed for any assistance is vital for the number institue redact.</p>
        <h4>Request Early Access To Get Started</h4>

      </div>
    </div>
  )
}

export default Possibility
