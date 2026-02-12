import React, { useState } from 'react'

function Box({ bgColor }) {
    const [checked, setChecked] = useState(true);
    return (
<<<<<<< HEAD
        <div onClick={() => setChecked(!checked)} className={`size-6 p-2 flex items-center justify-center rounded cursor-pointer ${checked ? bgColor : "bg-transparent border-2 border-gray-700"}`}>
=======
        <div onClick={() => setChecked(!checked)} className={`size-6 mx-2.5 p-2 flex items-center justify-center rounded cursor-pointer ${checked ? bgColor : "bg-transparent border-2 border-gray-700"}`}>
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
            {checked && <span style={{ color: "white" }}>✔</span>}
        </div>
    )
}
function Loading() {
    return (
<<<<<<< HEAD
        <div className='lg:ml-83 lg:-mt-22 border border-neutral-700 lg:w-152 rounded-lg p-4'>
            <div className="flex flex-wrap gap-2 items-center bg-black">
=======
        <div className='ml-83 -mt-22 border border-neutral-700 w-152 rounded-lg p-4'>
            <div className="flex items-center space-x-4 bg-black">
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
                <div className="spinner text-neutral-500"></div>
                <div className="spinner text-blue-500"></div>
                <div className="spinner text-pink-500"></div>
                <div className="spinner text-cyan-500"></div>
                <div className="spinner text-yellow-500"></div>
                <div className="spinner text-green-500"></div>
                <div className="spinner text-orange-500"></div>

                <Box bgColor="bg-blue-500" />
                <Box bgColor="bg-pink-500" />
                <Box bgColor="bg-cyan-500" />
                <Box bgColor="bg-yellow-500" />

                <div className="border-7 rounded-full relative border-indigo-500 size-6 ml-3 bg-white"></div>
                <div className="border-7 rounded-full relative border-orange-500 size-6 bg-white"></div>
<<<<<<< HEAD
                <div className="border-7 rounded-full relative border-pink-500 size-6 bg-white"></div>

            </div>
=======
            </div>
            <div className="border-7 rounded-full relative border-pink-500 size-6  bg-white mt-4"></div>
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8

        </div>
    )
}

export default Loading
