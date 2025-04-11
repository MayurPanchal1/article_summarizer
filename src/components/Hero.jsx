import React from 'react'
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      </nav>
      
      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>

      <h2 className='desc'>
        Experience the future of reading with our AI-powered article summarizer. 
        Get instant, accurate summaries of any article, saving you time while 
        keeping you informed. Perfect for students, researchers, and busy professionals.
      </h2>
    </header>
  )
}

export default Hero