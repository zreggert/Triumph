import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ApplyToDrive from "./pages/ApplyToDrive";
import ContactUs from "./pages/ContactUs";
import RequestQuote from "./pages/RequestQuote";
import Employees from "./pages/Employees";

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/apply' element={<ApplyToDrive />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/quote' element={<RequestQuote />} />
        <Route path='/employees' element={<Employees />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
