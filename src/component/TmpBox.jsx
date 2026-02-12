import React from 'react'

function TmpBox({link,image,title,text}) {
    return (
        <div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="grid">
                    <div className="relative h-45 group mt-13 w-full md:w-90 lg:w-74 my-6 ">
                        <img src={image} alt="" className="rounded-lg w-full h-full object-cover" />
                        <div className="absolute inset-0 rounded-lg bg-neutral-600/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    </div>
                    <div className="rounded-lg ml-5 mt-55 absolute bg-neutral-900 w-65 h-20 p-4">
                        <h1 className="font-medium text-[18px]">{title}</h1>
                        <p className="text-[14px] text-neutral-300">{text}</p>
                    </div>
                </div>
            </a>
        </div>

    )
}

export default TmpBox
