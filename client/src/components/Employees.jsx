// import React from 'react'
import data from '../assets/employees.json'

const Employees = () => {
  return (
    <div className="flex flex-col items-center p-10">
      <div>
        <h2 className='text-3xl pb-10'>Our Team</h2>
      </div>
      <div className='grid justify-center align-start grid-cols-2 gap-10'>
        {data?.employees?.map((item, index) => (
          <div key={index}  className='flex flex-col align-start'>
            <p>{item.position}</p>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Employees