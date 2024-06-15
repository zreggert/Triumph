// import React from 'react'

// import IntlTelInput from "../components/IntlTelInput"

const RequestQuote = () => {
  return (
    <div className="flex flex-col md:flex-row pb-20">
        <img src='/images/railroad_tracks.jpg' alt='will find an image later' className="w-50%"/>
        <form className="flex flex-col mx-20 gap-10 md:w-full">
            <h2 className="text-3xl my-10">Request a Quote</h2>
            <input
            type='text'
            placeholder='Company Name'
            id='company-name'
            required 
            className="bg-slate-100 p-3 rounded-lg"
             />
            <input
            type='text'
            placeholder='First Name'
            id='first-name'
            required 
            className="bg-slate-100 p-3 rounded-lg"
             />
            <input
            type='text'
            placeholder='Last Name'
            id='last-name'
            required 
            className="bg-slate-100 p-3 rounded-lg"
             />
            <input
            type='email'
            placeholder='Email'
            id='email'
            required 
            className="bg-slate-100 p-3 rounded-lg"
             />
            <input
            type='tel'
            placeholder='Phone'
            id=''
            required 
            className="bg-slate-100 p-3 rounded-lg"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
             />
            <input
            type='text'
            placeholder='Commodity'
            id=''
            required 
            className="bg-slate-100 p-3 rounded-lg"
             />
            <input
            type='text'
            placeholder='Origin'
            id=''
            required 
            className="bg-slate-100 p-3 rounded-lg"
             />
            <input
            type='text'
            placeholder='Destination'
            id=''
            required 
            className="bg-slate-100 p-3 rounded-lg"
             />
            <input
            type='text'
            placeholder='Volume or Frequency'
            id=''
            required 
            className="bg-slate-100 p-3 rounded-lg"
             />
            <input
            type='textare'
            placeholder='Origin'
            id=''
            required 
            className="bg-slate-100 p-3 rounded-lg"
             />
        </form>
        
    </div>
  )
}

export default RequestQuote