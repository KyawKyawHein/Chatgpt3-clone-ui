import React from 'react'
import { Possibility } from '../../assets/assets'
import "./Possibility.css"

const Cta = () => {
  return (
    <div id="openAi" className='text-white possibility-container flex flex-col justify-center items-center'>
      <div className="possibility-card flex justify-around items-end">
        <div className="possibility-left-side">
          <img src={Possibility} className='possibility-left-img' alt="" />
        </div>
        <div className="possibility-right-side">
          <p className='possibility-right-text font-bold'>Request Early Access to Get Started</p>
          <h2 className='gradient-text text-3xl font-bold my-3'>The possibilities are beyond your imagination</h2>
          <p className='possibility-right-text'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p className='possibility-right-subtext mt-4'>Request Early Access to Get Started</p>
        </div>
      </div>
      <div className="possibility-register-card mt-20 flex items-center justify-between px-7 rounded py-6">
        <div className="text-black">
          <small className="">Request Early Access to Get Started</small>
          <h2 className="font-bold">Register today & start exploring the endless possibilities</h2>
        </div>
        <button className='bg-black text-white py-2 px-8 rounded rounded-full'>Get Started</button>
      </div>
    </div>
  )
}

export default Cta
