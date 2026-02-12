import React from 'react'

function Started() {
    return (
        <div className="relative h-[400px] mt-30">
            <img src="./images/bg-get-started.png" alt="background" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="absolute inset-0 bg-white/10 z-10"></div>
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
                <h1 className="text-5xl font-bold text-white">Ready to Get Started?</h1>
                <p className="mt-4 max-w-130  text-neutral-400">
                    With Tailux, building modern, scalable applications is a breeze. Enjoy lightning-fast performance and smooth efficiency to bring your project!
                </p>
                <button className="bg-indigo-600 mt-10 px-12 py-3 rounded-lg text-[20px] font-semibold text-white shadow-lg hover:bg-indigo-700">
                    <a href="https://themeforest.net/item/tailux-react-tailwind-admin-template/56397379" target='_blank'>Buy Now</a>
                </button>
            </div>
        </div>


    )
}

export default Started
