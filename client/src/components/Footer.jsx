// import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="mx-auto p-16 text-slate-100 bg-black">
        <footer className='flex flex-col justify-between items-center max-w-[1240] mx-auto p-10 bg-black'>
            <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
                <div>
                    <img src='' alt='triump logo'/>
                </div>
                <div>
                    <ul className="flex flex-col items-start gap-2 md:flex-row">
                        <li className='font-bold text-slate-100 hover:text-green-500 lg:text-lg md:text-base sm:text-xs'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='font-bold text-slate-100 hover:text-green-500 lg:text-lg md:text-base sm:text-xs'>
                            <Link to='/quote'>Request A Quote</Link>
                        </li>
                        <li className='font-bold text-slate-100 hover:text-green-500 lg:text-lg md:text-base sm:text-xs'>
                            <Link to='/contact'>Contact Us</Link>
                        </li>
                        <li className='font-bold text-slate-100 hover:text-green-500 lg:text-lg md:text-base sm:text-xs'>
                            <Link to='apply'>Apply to Drive</Link>
                        </li>
                        <li className='font-bold text-slate-100 hover:text-green-500 lg:text-lg md:text-base sm:text-xs'>
                            <Link to='employees'>Employees</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer