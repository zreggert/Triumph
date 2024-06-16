// import IntlTelInput from 'intl-tel-input/react';
// import "intl-tel-input/styles";

const RequestQuote = () => {
  return (
    <div>
        <form className="flex flex-col px-5 gap-10 pb-8 lg:w-full lg:px-60">
            <h2 className="text-3xl my-5 lg:my-10">Request a Quote</h2>
            <input
            type='text'
            placeholder='Company Name'
            id='company-name'
            required 
            className="bg-slate-100 p-3 rounded-lg text-black"
             />
            <input
            type='text'
            placeholder='First Name'
            id='first-name'
            required 
            className="bg-slate-100 p-3 rounded-lg text-black"
             />
            <input
            type='text'
            placeholder='Last Name'
            id='last-name'
            required 
            className="bg-slate-100 p-3 rounded-lg text-black"
             />
            <input
            type='email'
            placeholder='Email'
            id='email'
            required 
            className="bg-slate-100 p-3 rounded-lg text-black"
             />
            <input
            type='tel'
            placeholder='Phone'
            id=''
            required 
            className="bg-slate-100 p-3 rounded-lg text-black"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
             />
            <input
            type='text'
            placeholder='Commodity'
            id=''
            required 
            className="bg-slate-100 p-3 rounded-lg text-black"
             />
            <input
            type='text'
            placeholder='Origin'
            id=''
            required 
            className="bg-slate-100 p-3 rounded-lg text-black"
             />
            <input
            type='text'
            placeholder='Destination'
            id=''
            required 
            className="bg-slate-100 p-3 rounded-lg text-black"
             />
            <input
            type='text'
            placeholder='Volume or Frequency'
            id=''
            required 
            className="bg-slate-100 p-3 rounded-lg text-black"
             />
            <textarea
            placeholder='Special Notes'
            id='notes'
            className="bg-slate-100 p-3 rounded-lg text-black"
             />
            
            <div>
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
        
    </div>
  )
}

export default RequestQuote