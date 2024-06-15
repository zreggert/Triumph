import { Link } from "react-router-dom"

const RequestButton = () => {
  return (
    <Link to='quote'>
        <button className="bg-green-700 text-xl font-bold text-white px-5 py-2 rounded-lg border border-white hover:bg-white hover:text-green-700">Request a Quote</button>
    </Link>
    
  )
}

export default RequestButton