import React from 'react'
import AdminMenu from './AdminMenu'
import Conference from './Conference'
import Application from './Application'
import Balance from './Balance'
import Loading from './Loading'

function Theme() {
    return (
<<<<<<< HEAD
        <div className='p-5'>
            <div className='grid text-center items-center justify-center mt-30 mb-8'>
                <header className='text-[20px] text-gray-400 lg:w-120'>
=======
        <div>
            <div className='grid text-center items-center justify-center mt-30 mb-8'>
                <header className='text-[20px] text-gray-400 w-120'>
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
                    <h1 className='text-white text-[35px] font-bold'>Unlimited Themes</h1>
                    <p className='text-[16px] mt-1'>Tailux lets you easily customize your theme, including color schemes, primary colors, and card skins.</p>
                </header>
            </div>
            <main>
<<<<<<< HEAD
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                    <div className='lg:w-40'>
=======
                <div className="grid grid-cols-5">
                    <div className='w-40'>
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
                        <label htmlFor="" className='text-gray-300'>Skin:</label><br />
                        <select name="" id="" className='bg-black w-60 border border-gray-800 rounded-md mt-1 p-2'>
                            <option value="" >Bordered</option>
                            <option value="">Shadow</option>
                        </select>
                    </div>
<<<<<<< HEAD
                    <div className='lg:w-40'>
=======
                    <div className='w-40'>
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
                        <label htmlFor="" className='text-gray-300'>Primary Color:</label><br />
                        <select name="" id="" className='bg-black w-60 border border-gray-800 rounded-md mt-1 p-2'>
                            <option value="" >Indigo</option>
                            <option value="">Blue</option>
                            <option value="">Green</option>
                            <option value="">Amber</option>
                            <option value="">Purple</option>
                            <option value="">Rose</option>
                        </select>
                    </div>
<<<<<<< HEAD
                    <div className='lg:w-40'>
=======
                    <div className='w-40'>
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
                        <label htmlFor="" className='text-gray-300'>Light Color:</label><br />
                        <select name="" id="" className='bg-black w-60 border border-gray-800 rounded-md mt-1 p-2'>
                            <option value="" >Slate</option>
                            <option value="">Gray</option>
                            <option value="">Neutral</option>
                        </select>
                    </div>
<<<<<<< HEAD
                    <div className='lg:w-40'>
=======
                    <div className='w-40'>
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
                        <label htmlFor="" className='text-gray-300'>Dark Color:</label><br />
                        <select name="" id="" className='bg-black w-60 border border-gray-800 rounded-md mt-1 p-2'>
                            <option value="" >Black</option>
                            <option value="">Mint</option>
                            <option value="">Mirage</option>
                            <option value="">Cinder</option>
                            <option value="">Navy</option>
                        </select>
                    </div>
<<<<<<< HEAD
                    <div className='lg:w-40'>
=======
                    <div className='w-40'>
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
                        <label htmlFor="" className='text-gray-300'>Theme Color:</label><br />
                        <select name="" id="" className='bg-black w-60 border border-gray-800 rounded-md mt-1 p-2'>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
                </div>
            </main>
            <section className='border border-gray-800 my-10'></section>

<<<<<<< HEAD
            <section className='m-1 md:m-7 flex flex-wrap'>
=======
            <section className='m-7 flex'>
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
                <AdminMenu />
                <Conference />
                <Application />
                <Balance />
            </section>
            <Loading />
            <section className='border border-neutral-700 my-6'></section>
        </div>
    )
}

export default Theme
