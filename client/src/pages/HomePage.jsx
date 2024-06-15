// import React from 'react'

import RequestButton from "../components/RequestButton"

const HomePage = () => {
  return (
    <div className="w-full h-screen mx-auto text-center flex flex-col pt-4 lg:justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div className="flex flex-col items-center gap-1 pb-5">
                <h1 className="md:text-7xl sm:text-4xl text-4xl font-bold pb-4 lg:pb-16">Triumph</h1>
                <p className='md:text-4xl sm:text-3xl text-xl font-bold pb-4'>Delivering the Future Today</p>
                <p className='md:text-2xl sm:text-2xl text-base pb-4 px-4 lg:px-10'>Triumph Intermodal Co. Inc. prioritizes safe reliable transport at an affordable price for our customers</p>
                <div className="pb-4">
                    <RequestButton />
                </div>
            </div>
            <div className="md:flex md:shrink-0">
                <img src='/images/savannah.jpg' alt='homepage image' />
            </div>
        </div>  
    </div>
  )
}

export default HomePage