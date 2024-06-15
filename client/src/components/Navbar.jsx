// import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import RequestButton from './RequestButton';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='w-full'>
            <nav className='flex justify-between items-center h-24 max-w-[1240] mx-auto p-10 bg-black md:p-5'>
                <Link to='/'>
                    <img src='' alt='triumph logo'/>
                </Link>
                <ul className='hidden lg:flex gap-5'>
                    <li className='font-bold text-slate-100 hover:text-green-500'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='font-bold text-slate-100 hover:text-green-500'>
                        <Link to='/quote'>Request A Quote</Link>
                    </li>
                    <li className='font-bold text-slate-100 hover:text-green-500'>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li className='font-bold text-slate-100 hover:text-green-500'>
                        <Link to='apply'>Apply to Drive</Link>
                    </li>
                    <li className='font-bold text-slate-100 hover:text-green-500'>
                        <Link to='employees'>Employees</Link>
                    </li>
                </ul>
                <div className='hidden lg:flex'><RequestButton/></div>
                <div onClick={handleNav} className='block lg:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </nav>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] pb-4 border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    <li className='p-3 font-bold text-slate-100 hover:text-green-500' onClick={handleNav}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='p-3 font-bold text-slate-100 hover:text-green-500' onClick={handleNav}>
                        <Link to='/quote'>Request A Quote</Link>
                    </li>
                    <li className='p-3 font-bold text-slate-100 hover:text-green-500' onClick={handleNav}>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li className='p-3 font-bold text-slate-100 hover:text-green-500' onClick={handleNav}>
                        <Link to='apply'>Apply to Drive</Link>
                    </li>
                    <li className='p-3 font-bold text-slate-100 hover:text-green-500' onClick={handleNav}>
                        <Link to='employees'>Employees</Link>
                    </li>
                </ul>
        </div>
    )
}

export default Navbar