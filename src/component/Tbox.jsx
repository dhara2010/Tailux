import React from 'react'

function Tbox({img,title,text}) {
  return (
    <div className='bg-neutral-900 h-48 w-74 rounded-lg relative p-4'>
        <img src={img} alt="" className='size-10'/>
        <h4 className="font-bold text-2xl mt-5">{title}</h4>
        <p className="mt-2 text-neutral-400 text-[14px]">{text}</p>
    </div>
  )
}

export default Tbox
