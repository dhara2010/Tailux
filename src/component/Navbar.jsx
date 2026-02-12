import React, {useState} from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    const [active, setActive] = useState(null);
    return (
    <div className='m-4 flex'>
<<<<<<< HEAD
      <div className='lg:w-[340px] mg:h-screen'>
        <ul className="lg:sticky top-12">
=======
      <div className='w-[340px] h-screen'>
        <ul className="sticky top-12">
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
            <Link to="/" onClick={() => setActive(0)}><li onClick={() => setActive(0)} className={`sidebar-item ml-3 w-65 -mb-1 ${active === 0 ? "sidebar-item-active" : ""}`}><i class="fa-solid fa-house-chimney"></i>Dashboards</li></Link>
            <Link to="/applications" onClick={() => setActive(1)}><li onClick={() => setActive(1)} className={`sidebar-item ml-3 -mb-1 ${active === 1 ? "sidebar-item-active" : ""}`}><i class="fa-solid fa-gift"></i>Applications</li></Link>
            <Link to="/table" onClick={() => setActive(2)}><li onClick={() => setActive(2)} className={`sidebar-item ml-3 -mb-1 ${active === 2 ? "sidebar-item-active" : ""}`}><i class="fa-solid fa-bars-staggered"></i>Table</li></Link>
            <Link to="/prototype" onClick={() => setActive(3)}><li onClick={() => setActive(3)} className={`sidebar-item ml-3 -mb-1 ${active === 3 ? "sidebar-item-active" : ""}`}><i class="fa-solid fa-table-cells-large"></i>Prototypes</li></Link>
            <Link to="/forms" onClick={() => setActive(4)}><li onClick={() => setActive(4)} className={`sidebar-item ml-3 -mb-1 ${active === 4 ? "sidebar-item-active" : ""}`}><i class="fa-solid fa-palette"></i>Forms</li></Link>
            <Link to="/component" onClick={() => setActive(5)}><li onClick={() => setActive(5)} className={`sidebar-item ml-3 -mb-1 ${active === 5 ? "sidebar-item-active" : ""}`}><i class="fa-solid fa-user-group"></i>Components</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
