import React from 'react'
import {People,Ai,Google,Slack,Atlassian,Dropbox,Shopify} from "../../assets/assets"
import "./Home.css"

const Home = () => {
  return (
    <>
       <div id='home' className="header-container  h-screen flex flex-col items-center justify-center">
          <div className="header-main flex items-center justify-center">
            <div className="header-left-side">
              <h1 className='header-title gradient-text text-5xl font-bold'>Let's Build Something<br />amazing with GPT-3<br/>OpenAI</h1>
              <p className='header-description my-7'>Yet bed any for travelling assistance indulgence unpleasing.<br/>Not thoughts all exercise blessing. Indulgence way<br/>everything joy alteration boisterous the attachment. Party<br/>we years to order allow asked of.</p>
              <div className="header-input">
                  <input type="text" className='p-2 outline-none' placeholder='Your Email Address' name='headerInput' />
                  <button className='bg-orange-500 py-2 px-3 m-[-3px] rounded text-white'>Get Started</button>
              </div>
              <div className="header-visitor text-white my-10 flex gap-3 items-center mt-7">
                  <img src={People} alt="" />
                  <span>1,600 people requested access a visit in last 24 hours.</span>
              </div>
            </div>
            <div className="header-right-side">   
              <img src={Ai} className='w-[500px]' alt="" />
            </div>
          </div>
          <div className="header-brand flex gap-8 justify-center">
            <img src={Google} alt="" />
            <img src={Slack} alt="" />
            <img src={Atlassian} alt="" />
            <img src={Dropbox} alt="" />
            <img src={Shopify} alt="" />
          </div>
        </div>
    </>
  )
}

export default Home
