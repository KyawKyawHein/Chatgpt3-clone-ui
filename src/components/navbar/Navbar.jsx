import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Menu = ()=>{
    return (
        <>
            <p className='p-3'><a href="#home">Home</a></p>
            <p className='p-3'><a href="#gpt3">What is GPT?</a></p>
            <p className='p-3'><a href="#features">Features</a></p>
            <p className='p-3'><a href="#openAi">Open AI</a></p>
            <p className='p-3'><a href="#library">Library</a></p>
        </>
    )
}

const Navbar = () => {
    
    const [linkToggle,setLinkToggle] = useState(false)
  return (
    <div className='gpt3_navbar fixed top-0 w-[100%] bg-black left-0'>
        <div className="gpt3_navbar-links  flex justify-around items-center p-2">
            <div className="gpt3_navbar-links_logo">
                <a href="#home"><img src={logo} alt="" /></a>
            </div>
            <div className="gpt3_navbar-links-container text-white flex gap-2 select-none">
                <Menu/>
            </div>
            <div className="gpt3_right-side flex gap-3 items-center relative">
                <div className="gpt3_navbar_sign text-white flex gap-3 items-center">
                    <Link to="/"><p className="">Sign in</p></Link>
                    <button className='bg-red-500 p-2 rounded'>Sign up</button>
                </div>
                {
                    linkToggle?
                        <div className="gpt3_navbar_btn text-white" onClick={()=>setLinkToggle(false)}>Close</div>
                        :
                        <div className="gpt3_navbar_btn text-white" onClick={()=>setLinkToggle(true)}>Open</div>
                }
                {
                    linkToggle && (
                        <div className="gpt3_navbar-menu_container scale-up-center">
                            <div className="gpt3_navbar-menu_container_links">
                                <Menu/>
                                <p className="p-3">Sign in</p>
                                <div className="text-end">
                                    <button className='bg-blue-500 p-3 my-2 mr-2 rounded'>Sign up</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>    
    </div>
  )
}

export default Navbar
