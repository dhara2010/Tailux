import React from 'react'
import SignIn from './SignIn'


function Conference() {
    return (
        <div className='ml-4'>
            <div className="border rounded-lg border-gray-800 w-74 p-4">
                <div className="flex items-center text-gray-400 mb-3"><i class="fa-regular fa-calendar"></i><span className='pl-3 text-[14px]'>June 23, 2021</span></div>
                <h3>UI/UX Design Conference</h3>
                <div className="flex text-[12px] mt-2">
                    <button className='mx-2 text-yellow-400 bg-orange-300/10 p-2 rounded'>UI/UX Design</button>
                    <button className='mx-2 text-emerald-400 bg-green-300/10 p-2 rounded'>Mobile</button>
                </div>
                <div className="flex mt-1">
                    <div className="rounded-full size-7 border-2 border-black flex items-center justify-center transition-transform duration-200 hover:scale-130"><img src="./images/Avatar-1.jpg" alt="" className='rounded-full'/></div>
                    <div className="rounded-full size-7 border-2 border-black bg-blue-400 -ml-2 flex items-center justify-center transition-transform duration-200 hover:scale-130 cursor-default">JD</div>
                    <div className="rounded-full size-7 border-2 border-black -ml-2 flex items-center justify-center transition-transform duration-200 hover:scale-130"><img src="./images/Avatar-2.jpg" alt="" className='rounded-full'/></div>
                </div>
            </div>
            <SignIn/>
        </div>
    )
}

export default Conference
