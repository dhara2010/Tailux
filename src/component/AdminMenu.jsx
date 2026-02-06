import React, { useState } from 'react'
import CallSetting from './CallSetting';

function AdminMenu() {

    const [active, setActive] = useState(null);
    return (
        <div>
            <div className="border border-gray-800 w-72 rounded-lg">
                <div className="p-4">
                    <h4 className='font-semibold'>Admin Menu</h4>
                    <ul>
                        <li onClick={() => setActive(0)} className={`sidebar-item ${active === 0 ? "sidebar-item-active" : ""}`}><i class="fa-solid fa-arrow-trend-up"></i> Getting Start</li>
                        <li onClick={() => setActive(1)} className={`sidebar-item ${active === 1 ? "sidebar-item-active" : ""}`}><i class="fa-solid fa-truck-fast"></i> Shipping</li>
                        <li onClick={() => setActive(2)} className={`sidebar-item ${active === 2 ? "sidebar-item-active" : ""}`}><i class="fa-regular fa-credit-card"></i> Payments</li>
                        <li onClick={() => setActive(3)} className={`sidebar-item ${active === 3 ? "sidebar-item-active" : ""}`}><i class="fa-solid fa-arrow-rotate-left"></i> Returns</li>
                        <li onClick={() => setActive(4)} className={`sidebar-item ${active === 4 ? "sidebar-item-active" : ""}`}><i class="fa-regular fa-user"></i> My Account</li>
                        <li onClick={() => setActive(5)} className={`sidebar-item ${active === 5 ? "sidebar-item-active" : ""}`}><i class="fa-regular fa-copyright"></i> Copyright & Legal</li>
                    </ul>
                </div>
            </div>
            <CallSetting />
        </div>
    )
}

export default AdminMenu
