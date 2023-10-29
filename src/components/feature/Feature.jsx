import React from 'react'
import "./Feature.css"

const Feature = () => {
  return (
    <div id='features' className='feature-container text-white flex justify-center items-center'>
      <div className="feature-card p-12 rounded mt-10 flex justify-center gap-10">
        <div className="feature-left-side gradient-text">
          <h2 className="feature-left-side-title mb-9 text-3xl font-bold">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
          <p className="">Request Early Access to Get Started</p>
        </div>
        <div className="feature-right-side">  
          <div className="flex gap-10 mb-3 justify-between items-center">
            <h3 className="font-bold">Improving end distrusts instantly</h3>
            <p className="feature-right-text">From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p>
          </div>
          <div className="flex gap-10 mb-3 justify-between items-center">
            <h3 className="font-bold">Become the tended active</h3>
            <p className="feature-right-text">Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
          </div>
          <div className="flex gap-10 mb-3 justify-between items-center">
            <h3 className="font-bold">Message or am nothing</h3>
            <p className="feature-right-text">Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>
          </div>
          <div className="flex gap-10 mb-3 justify-between items-center">
            <h3 className="font-bold">Really boy law county</h3>
            <p className="feature-right-text">Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
