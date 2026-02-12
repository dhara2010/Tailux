import React from 'react'
import Tbox from './Tbox'

function Technology() {
     const values = [
        {
            img: './images/React-dark.svg',
            title: "React",
            text: "A powerful library for building dynamic, interactive user interfaces with reusable components."
        },
        {
           img: './images/tailwind.svg',
            title: "Tailwind CSS",
            text: "A utility-first CSS framework for creating responsive and customizable designs quickly."  
        },
        {
            img: './images/headlessui.svg',
            title: 'Headless UI',
            text: 'Accessible, unstyled UI components built to work seamlessly with Tailwind CSS.'
        },
         {
            img: './images/vite.svg',
            title: 'Vite',
            text: 'A fast build tool offering an optimized development and build experience for modern web projects.'
        },
         {
            img: './images/react-router-dark.svg',
            title: 'React Router',
            text: 'A flexible solution for managing routing and navigation in React applications.'
        },
         {
            img: './images/tanstack.png',
            title: 'Tanstack Table',
            text: 'A feature-rich library for creating performant and customizable data tables in React.'
        },
         {
            img: './images/react-hook-form.svg',
            title: 'React Hook Forms',
            text: 'A lightweight library for building flexible and high-performance form handling in React.'
        },
        {
            img: './images/yup.svg',
            title: 'Yup',
            text : 'A schema validation library for easily validating and transforming object shapes.'
        }
    ]
  return (
<<<<<<< HEAD
    <div className='mt-23 p-5'>
            <h1 className="text-[33px] flex items-center justify-center font-semibold">Core Technologies</h1>
            <p className='flex items-center justify-center text-neutral-400'>Tailux is built with the following core technologies:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 lg:px-6 mt-8">
=======
    <div className='mt-23'>
            <h1 className="text-[33px] flex items-center justify-center font-semibold">Core Technologies</h1>
            <p className='flex items-center justify-center text-neutral-400'>Tailux is built with the following core technologies:</p>
            <div className="grid grid-cols-4 gap-4 px-6 mt-8">
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
                {values.map((value, index) => (
                    <Tbox
                        key={index}
                        img={value.img}
                        title={value.title}
                        text={value.text}
                    />
                ))}
            </div>
    </div>
  )
}

export default Technology
