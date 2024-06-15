// import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=''>
        <nav className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
                <img src='' alt='triumph logo'/>
            </Link>
            <ul className='flex gap-5'>
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
            <Link></Link>
        </nav>
    </div>
  )
}

export default Navbar