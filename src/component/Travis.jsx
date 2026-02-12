import { useEffect, useState } from 'react'

function Travis() {
    const [time, setTime] = useState(10 * 60 * 60);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (secs) => {
        const h = String(Math.floor(secs / 3600)).padStart(2, "0");
        const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
        const s = String(secs % 60).padStart(2, "0");
        return `${h}h ${m}m ${s}s`;
    };
    return (
        <div className='mt-4'>
            <div className="border border-gray-800 md:w-74 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full size-10 bg-neutral-700 flex items-center justify-center">
                            <img src="./images/travis2.jpg" alt="" className='rounded-full' />
                        </div>
                        <div>
                            <h6 className="font-semibold cursor-pointer">Travis Fuller</h6>
                            <p className="text-sm text-gray-400">1259 items</p>
                        </div>
                    </div>
                    <div className='rounded-lg bg-neutral-700 p-2 hover:bg-neutral-600'><img src="./images/heart.png" alt="" className='h-5' /></div>
                </div>
                <div className="relative group lg:w-72">
                    <img src="./images/travis.jpg" alt="Travis Fuller" className="rounded-lg w-66 my-2" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
                        <button className="bg-yellow-50/10 text-[14px] font-semibold px-4 py-2 rounded-lg shadow hover:bg-white/20 cursor-pointer">Place a Bid</button>
                    </div>
                </div>
                <p className='text-neutral-300 font-semibold hover:text-indigo-400 cursor-pointer'>The Runner #265</p>
                <section className='border border-gray-900 my-2'></section>
                <div className="flex justify-between">
                    <div>
                        <p className='text-[12px] text-neutral-400'>Ending in</p>
                        <div className="font-semibold text-neutral-300 text-[18px]">
                            {formatTime(time)}
                        </div>
                    </div>
                    <div>
                        <p className='text-[12px] text-neutral-400'>Highest bid</p>
                        <div className="font-semibold text-indigo-400 text-[18px]">1.49 ETH</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Travis
