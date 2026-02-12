import React from 'react'
<<<<<<< HEAD
import Travis from './travis'

function Application() {
    return (
        <div className='lg:ml-4 mt-4 lg:mt-0'>
            <div className="md:w-74 p-[3px] rounded-lg bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500">
=======
import Travis from './Travis'

function Application() {
    return (
        <div className='ml-4'>
            <div className="w-74 p-[3px] rounded-lg bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500">
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
                <div className="bg-black rounded-lg w-full h-full p-4">
                    <h3 className='bg-black font-semibold text-[20px]'>Load Application</h3>
                    <div className="flex text-[16px] mt-2 text-neutral-400">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima non dignissimos quo, reprehende...</p>
                    </div>
                    <div className="flex mt-3">
                        <div className="w-full bg-neutral-800 h-1 rounded-md overflow-hidden">
<<<<<<< HEAD
                            <div className="h-1 lg:w-1/5 bg-blue-500 animate-[loading_2s_linear_infinite]"></div>
=======
                            <div className="h-1 w-1/5 bg-blue-500 animate-[loading_2s_linear_infinite]"></div>
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
                        </div>
                    </div>
                </div>
            </div>
            <Travis/>
        </div>
    )
}

export default Application
