import React from 'react'

function Balance() {
    return (
        <div className='md:ml-4 mt-4 md:mt-0'>
            <div className="bg-indigo-500 h-69 md:w-72 rounded-lg p-4">
                <div class="relative w-25 h-25"><svg class="w-full h-full rotate-70"><circle cx="50%" cy="50%" r="45%" stroke="white" strokeWidth="5" fill="none" class="opacity-20" /><circle cx="50%" cy="50%" r="45%" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" strokeDasharray="283" strokeDashoffset="116" /></svg><span class="absolute inset-0 flex items-center justify-center text-xl font-bold">59%</span></div>
                <h1 className='mt-8 text-2xl font-semibold'>$31.313</h1>
                <p className='font-semibold text-neutral-100'>Current Balance</p>
                <button className="border my-4 p-1 w-62 rounded-full cursor-pointer"><i class="fa-regular fa-circle-down mr-2"></i>Get Statement</button>
            </div>
            <div className="bg-neutral-800 md:w-72 mt-4 p-4 rounded-lg">
                <p className='text-[15px] font-medium text-indigo-400'>Pay App Wages</p>
                <div className="flex text-[13px] mt-2">
                    <button className='text-indigo-400 bg-indigo-300/10 p-1 rounded'><i class="fa-regular fa-calendar pr-2"></i>Aug 11</button>
                    <button className='mx-1 text-orange-500 bg-orange-300/10 p-1 rounded'>Performance</button>
                </div>
                <div className="flex mt-4">
                    <div className="rounded-full size-6 border-2 border-black flex items-center justify-center transition-transform duration-200 hover:scale-130"><img src="./images/travis2.jpg" alt="" className='rounded-full size-5' /></div>
                    <div className="rounded-full size-6 border-2 border-black bg-red-400 -ml-2 flex items-center justify-center transition-transform duration-200 hover:scale-130 cursor-default text-[11px]">JD</div>
                    <div className="rounded-full size-6 border-2 border-black -ml-2 flex items-center justify-center transition-transform duration-200 hover:scale-130"><img src="./images/Avatar-3.jpg" alt="" className='rounded-full' /></div>
                </div>
            </div>

            <div className="w-72 mt-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-pink-500">
                    <p className='font-semibold'>Banking Cards</p>
                    <div className="mt-4 flex gap-4">
                         <div className='rounded-lg h-30 w-full bg-white/20 p-4 flex-shrink-0'>
                        <div className="flex justify-between">
                            <p class="italic text-white font-bold">VISA</p>
                            <i class="fa-solid fa-wifi rotate-90"></i>
                        </div>
                        <p className="mt-3 font-bold text-[20px]">$1,686.66</p>
                        <p className='text-[12px] font-semibold'>**** **** **** 7946</p>
                    </div>
                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Balance
