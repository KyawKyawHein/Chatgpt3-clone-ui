import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='text-white flex justify-center'>
        <div className="footer-container w-[1000px]">
            <div className="text-center footer-title">
                <h1 className='text-4xl font-bold gradient-text mb-10'>Do you want to step in to the<br/>future before others</h1>
                <button className='border p-3 border-white'>Request Early Access</button>
            </div>
            <div className="footer-link-container w-100 flex justify-between mb-5">
                <div className="footer-link-title">
                    <h2 className='text-4xl font-bold mb-3'>GPT-3</h2>
                    <p>Crechterwoord K12 182 DK<br/>Alknjkcb, All Rights Reserved</p>
                </div>
                <div className="footer-link-wrapper flex gap-8">
                    <div className="footer-link">
                        <p className='font-bold mb-5'>Links</p>
                        <ul>
                            <li className='mb-3'>Overons</li>
                            <li className='mb-3'>Social Media</li>
                            <li className='mb-3'>Counters</li>
                            <li className='mb-3'>Contact</li>
                        </ul>
                    </div>
                    <div className="footer-link">
                        <p className='font-bold mb-5'>Company</p>
                        <ul>
                            <li className='mb-3'>Terms & Conditinos</li>
                            <li className='mb-3'>Privacy Policy</li>
                            <li className='mb-3'>Contact</li>
                        </ul>
                    </div>
                    <div className="footer-link">
                        <p className='font-bold mb-5'>Get in Touch</p>
                        <ul>
                            <li className='mb-3'>Kyimyindine</li>
                            <li className='mb-3'>09764600257</li>
                            <li className='mb-3'>hhein6223@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-center mb-8">© 2023 GPT-3. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
