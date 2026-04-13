import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoHomeSharp } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li><NavLink to={"/"} className={({ isActive }) => `font-semibold mr-1 ${isActive ? "text-white bg-[#244D3F]" : ""}`}
        >
            <IoHomeSharp /> Home</NavLink></li>
        <li><NavLink to={"/timeline"} className={({ isActive }) => `font-semibold mr-1
         ${isActive ? "text-white bg-[#244D3F]" : ""}`}
        >
            <RiTimeLine /> Timeline</NavLink></li>
        <li><NavLink to={"/status"} className={({ isActive }) => `font-semibold ${isActive ? "text-white bg-[#244D3F]" : ""}`}
        >
            <ImStatsDots /> Stats</NavLink></li>

    </>

    return (
        <nav className='bg-base-100 shadow-sm '>
            <div className="navbar max-w-11/12 mx-auto ">
                <div className="navbar ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <h2 className="font-bold text-3xl">Keen<span className='text-[#244D3F]'>Keeper</span></h2>
                  </div>
                 <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                 </div>
             </div>
        </nav>
    );
};

export default Navbar;