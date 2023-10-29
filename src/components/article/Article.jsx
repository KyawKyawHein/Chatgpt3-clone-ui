import React from 'react'
import {Blog01,Blog02,Blog03,Blog04,Blog05} from '../../assets/assets'
import "./Article.css"

const Article = () => {
  return (
    <div id='library' className='text-white article-container flex justify-center items-center p-screen'>
      <div className="article-box">
        <h1 className='article-box-title gradient-text text-5xl font-bold mb-10'>A lot is happening,<br/>We are blogging about it.</h1>
        <div className="article-card-container flex gap-10 w-100 items-center mb-10">
          <div className="article-card w-[400px]">
            <img src={Blog01} className='w-100' alt="" />
            <div className="w-100 p-5">
              <small>Oct 27, 2023</small>
              <h2 className='font-bold text-2xl mb-20'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
              <a href="" className=''>Read Full Article</a>
            </div>
          </div>
          <div className="article-card-wrapper">
            <div className="article-card w-[300px] mb-2">
              <img src={Blog02} className='w-100' alt="" />
              <div className="w-100 p-2">
                <small>Oct 27, 2023</small>
                <h2 className='font-bold mb-2'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
                <a href="" className=''>Read Full Article</a>
              </div>
            </div>
            <div className="article-card w-[300px]">
              <img src={Blog03} className='w-100' alt="" />
              <div className="w-100 p-2">
                <small>Oct 27, 2023</small>
                <h2 className='font-bold mb-2'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
                <a href="" className=''>Read Full Article</a>
              </div>
            </div>
          </div>
          <div className="article-card-wrapper">
            <div className="article-card w-[300px] mb-2">
              <img src={Blog02} className='w-100' alt="" />
              <div className="w-100 p-2">
                <small>Oct 27, 2023</small>
                <h2 className='font-bold mb-2'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
                <a href="" className=''>Read Full Article</a>
              </div>
            </div>
            <div className="article-card w-[300px]">
              <img src={Blog03} className='w-100' alt="" />
              <div className="w-100 p-2">
                <small>Oct 27, 2023</small>
                <h2 className='font-bold mb-2'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
                <a href="" className=''>Read Full Article</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
