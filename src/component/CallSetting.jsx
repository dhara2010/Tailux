import React, { useState } from 'react'

function Toggle({ label,color }) {
    const [on, setOn] = useState(false);

    return (
        <li 
      className="mt-2 pt-1 rounded text-neutral-400 flex justify-between items-center cursor-pointer"
      onClick={() => setOn(!on)}
    >
      {label}
      <div className={`w-10 h-5 flex items-center rounded-full p-1 transition ${on ?  "bg-gray-300" : `${color}`}`}>
        <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${on ? "" : "translate-x-4.5"}`}></div>
      </div>
    </li>
    )
}
function CallSetting() {
    return (
        <div>
<<<<<<< HEAD
            <div className="border border-gray-800 lg:w-72 rounded-lg mt-4">
=======
            <div className="border border-gray-800 w-72 rounded-lg mt-4">
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
                <div className="p-3">
                    <h4 className="font-semibold">Call Settings</h4>
                    <ul>
                        <Toggle label="Voice Chat" color="bg-emerald-500" />
                        <Toggle label="Video Chat" color="bg-indigo-500" />
                        <Toggle label="Realtime Chat" color="bg-pink-500" />
                        <Toggle label="Incoming Call" color="bg-amber-500"/>
                        <Toggle label="Black List" color="bg-sky-500" />
                        <Toggle label="Black List" color="bg-orange-500" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CallSetting
