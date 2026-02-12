import React from 'react'
import { Link } from 'react-router-dom'
function Hero({ scrollToTemplates }) {

  return (
    <div className='w-full mt-14 h-full overflow-hidden'>
      <div className="flex ml-8">
        <div className="w-[700px] text-white">
          <img src="./images/tailux.png" alt="" className='w-50 mb-4' />
          <h1 className='text-[40px] font-bold'>A Complete Admin UI Kit built on</h1>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-5">React & Tailwind CSS.</h1>
          <p className='text-gray-400 text-[19px]'><span className='underline decoration-double decoration-2  decoration-blue-400'>Tailux</span> is a versatile React 19 and TailwindCSS v4 UI Kit featuring components, dashboards, forms, datatables, and app templates to help you build applications <span className='underline'>faster than ever.</span></p>
          <div className='flex mt-12 space-x-3'>
            <Link to='/'><button onClick={scrollToTemplates} className='py-3 px-10 bg-neutral-800 rounded hover:bg-neutral-700'>Check Demos</button></Link>
            <a href="https://themeforest.net/item/tailux-react-tailwind-admin-template/56397379" target='_blank'><button className='py-3 px-10 bg-blue-700 rounded hover:bg-blue-600'>Get Now &rarr; </button></a>
          </div>
        </div>
        <div className="w-[700px] h-[530px] rotate-12">
          <div className="animate-scroll">
            <img src="./images/hero-img.webp" alt="dashboard preview" />
            <img src="./images/hero-img.webp" alt="dashboard preview" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
