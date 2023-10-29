import React from 'react'
import "./App.css"
import {Navbar,Home,WhatGPT3, Feature, Possibility, Article,Footer} from './components'

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Home/>
      </div>
        <WhatGPT3/>
        <Feature/>
        <Possibility/>
        <Article/>
        <Footer/>
    </div>
  )
}

export default App
