import React from 'react'
import Box from './Box'

function Tailux() {

    const values = [
        {
            img: './images/img1.webp',
            title: "Over 1000 Components",
            text: "A vast library of reusable, modern, and beautifully designed components to accelerate your development process."
        },
        {
           img: './images/img2.webp',
            title: "Rich Layouts and Colors",
            text: "Offers vibrant colors and flexible layouts for crafting visually stunning user interfaces"  
        },
        {
           img: './images/img3.webp',
            title: "Ultra-Responsive Layouts",
            text: "Ensures seamless performance and a flawless look across mobile, tablet, and desktop devices."  
        },
        {
            title:"10 Ready-to-Use Prebuilt Apps",
            text:"Includes apps like Kanban, To-Do, Chat, AI Chat, and more for quick integration into projects."
        },
        {
            title:"20+ Stunning Dashboards",
            text:"Dashboards for analytics, sales, crypto, education, healthcare, and more to track and visualize data effectively.."
        },{
            title:"Extensive Pages & Prototypes",
            text:"Over 40 pages, including blog, user profiles, FAQ, pricing, sign-in, and prototypes, for rapid development."
        },{
            title:"Advanced Data Tables",
            text:"20+ tables for managing orders, projects, subscriptions, and more with powerful filtering and customization options."
        },{
            title:"Interactive Forms",
            text:"10+ forms, including wizards like eKYC, Add Product, and New Post, to streamline user input processes."
        },{
            title:"Extensive React Utilities",
            text:"Over 100 React hooks and utilities to simplify workflows and speed up application development."
        },{
            title:"Comprehensive Documentation",
            text:"Well-documented components with a starter kit and step-by-step guides for seamless integration and customization."
        },{
            title:"Versatile Layout Options",
            text:"Rich layouts with bordered or shadowed cards, enabling feature-rich, visually striking applications."
        },{
            title: "Multi-Language Support",
            text: "Supports both LTR and RTL languages using i18next.js for truly global application development."
        }
    ]
    return (
        <>
            <div className='mt-30 mb-8 p-5'>
                <header className='flex flex-col md:flex-row items-center justify-center text-[20px] text-gray-400 font-bold'><span className='text-gray-100 mr-4 text-[30px]'>Tailux?</span> All you need to build amazing web apps effortlessly.</header>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
                {values.map((value, index) => (
                    <Box
                        key={index}
                        img={value.img}
                        title={value.title}
                        text={value.text}
                    />
                ))}
            </div>
        </>
    )
}

export default Tailux
