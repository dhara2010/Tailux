import React from 'react'

function SignIn() {
    return (
        <div className='mt-4'>
<<<<<<< HEAD
            <div className="border rounded-lg border-gray-800 lg:w-74 p-4">
=======
            <div className="border rounded-lg border-gray-800 w-74 p-4">
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
                <h1 className='font-semibold text-neutral-300 mb-4'>Sign In</h1>
                <label htmlFor="" className='text-neutral-400'>Username</label><br />
                <div className='relative w-60 items-center'>
                    <i class="fa-regular fa-envelope absolute left-2 top-1/4 text-gray-400"></i>
<<<<<<< HEAD
                    <input type="text" placeholder='Enter Username' className='bg-black pl-8 w-full lg:w-65 border border-gray-800 rounded-md mt-2 p-1 mb-3' />
=======
                    <input type="text" placeholder='Enter Username' className='bg-black pl-8 w-65 border border-gray-800 rounded-md mt-2 p-1 mb-3' />
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
                </div>
                <label htmlFor="" className='text-neutral-400'>Password</label><br />
                <div className='relative w-60 items-center'>
                    <i class="fa-solid fa-lock absolute left-2 top-1/4 text-gray-400"></i>
<<<<<<< HEAD
                    <input type="password" placeholder='Enter Password' className='bg-black pl-8 w-full lg:w-65 border border-gray-800 rounded-md mt-2 p-1 mb-3' />
                </div>
                <button className='bg-indigo-500 rounded-md w-full lg:w-65 p-1 mt-2 h-9 cursor-pointer'>Sign In </button>
=======
                    <input type="password" placeholder='Enter Password' className='bg-black pl-8 w-65 border border-gray-800 rounded-md mt-2 p-1 mb-3' />
                </div>
                <button className='bg-indigo-500 rounded-md w-65 p-1 mt-2 h-9 cursor-pointer'>Sign In </button>
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-800" />
                    <span className="px-3 text-gray-400 text-[12px]">OR</span>
                    <hr className="flex-grow border-gray-800" />
                </div>
<<<<<<< HEAD
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <div className="flex justify-center"><button className='bg-black border px-5 py-2 rounded-md border-gray-700 flex items-center gap-2 cursor-pointer'><img src="./images/google.png" alt="" className='size-4'/>Google</button></div>
                    <div className="flex justify-center"><button className='bg-black border px-5 py-2 rounded-md border-gray-700 flex items-center gap-2 cursor-pointer'><img src="./images/github.png" alt="" className='size-4 bg-white rounded-full' />Github</button></div>
=======
                <div className="flex -mt-9 justify-center gap-4">
                    <div className="flex justify-center mt-12"><button className='bg-black border px-5 py-2 rounded-md border-gray-700 flex items-center gap-2 cursor-pointer'><img src="./images/google.png" alt="" className='size-4'/>Google</button></div>
                    <div className="flex justify-center mt-12"><button className='bg-black border px-5 py-2 rounded-md border-gray-700 flex items-center gap-2 cursor-pointer'><img src="./images/github.png" alt="" className='size-4 bg-white rounded-full' />Github</button></div>
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
                </div>
            </div>
        </div>
    )
}

export default SignIn
