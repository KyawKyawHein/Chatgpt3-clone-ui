import React from 'react'
import "./WhatGPT3.css"

const WhatGPT3 = () => {
  return (
    <div id="gpt3" className='whatgpt3-container mt-5 flex justify-center items-center'>
      <div className="whatgpt3-card p-12 rounded mt-10">
        <div className="gradient-bar"></div>
        <h1 className='text-white'>what</h1>
        <div className="card">
          <div className="whatgpt3-card-header flex justify-between items-start text-white">
            <h2 className="text-2xl font-bold">What is GPT-3</h2>
            <p className="card-description">We so opinion friends me message as delight. Whole front do of plate heard oh ought. His<br/>defective nor convinced residence own. Connection has put impossible own apartments<br/>boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
          </div>
          <div className="whatgpt3-card-title flex justify-between my-10 gradient-text">
            <h2 className="text-3xl font-bold">The possibilities are beyond<br/>your imagination</h2>
            <a href="/">Explore The Library</a>
          </div>
          <div className="whatgpt3-card-footer flex justify-between items-center gap-4">
            <div className="card">
              <h2 className='text-white font-bold text-2xl'>Chatbots</h2>
              <p className="card-description mt-10">We so opinion friends me message as delight. Whole front do of plate heard oh ought. </p>
            </div>
            <div className="card">
              <h2 className='text-white font-bold text-2xl'>Knowledgebase</h2>
              <p className="card-description mt-10">At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
            </div>
            <div className="card">
              <h2 className='text-white font-bold text-2xl'>Education</h2>
              <p className="card-description mt-5">At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatGPT3
