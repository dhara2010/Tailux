import React from 'react'

function Box({img,title,text}) {
  return (
        <div className="bg-neutral-950 p-6 border border-neutral-800 rounded-lg">
            <img src={img} alt="" className='mb-2'/>
            <h3 className='text-[22px] font-semibold'>{title}</h3>
            <p className='text-[14px] text-neutral-400'>{text}</p>
        </div>
  )
}

export default Box
