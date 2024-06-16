// import React from 'react'
import Employees from "../components/Employees"

const ContactUs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <form className="flex flex-col justify-center align-start p-10">
            <div>
                <h2 className="text-3xl pb-10 font-bold">Contact Us</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="pb-6 flex flex-col">
                    <label htmlFor="first-name" className="">First Name</label>
                    <input type="text" className="" name="first-name" id="first-name" required></input>
                </div>
                <div className="pb-6 flex flex-col">
                    <label htmlFor="last-name" className="">Last Name</label>
                    <input type="text" className="" name="last-name" id="last-name" required></input>
                </div>
                <div className="pb-6 flex flex-col">
                    <label htmlFor="email" className="">Email</label>
                    <input type="email" className="" name="email" id="email" required></input>
                </div>
                <div className="pb-6 flex flex-col">
                    <label htmlFor="phone-number" className="">Phone Number</label>
                    <input type="number" className="" name="phone-number" id="phone-number" required></input>
                </div>
            </div>
            <div className="pb-6 flex flex-col">
                <label htmlFor="message" className="">Message</label>
                <textarea className="" id="phone-number" rows="8" placeholder="Type your message"></textarea>
            </div>
            <div className="">
                <button className="btn btn-primary">Submit</button>
            </div>   
        </form>
        <Employees />
    </div>
    
  )
}

export default ContactUs