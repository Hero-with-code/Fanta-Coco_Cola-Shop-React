import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home/Home.js";
// import Navbar from './Components/Navbar/Navbar.js'
// import Contact from "./Components/Home/Contact.js";
// import About from "./Components/Home/About.js";
// import Categories from "./Components/Home/Categories.js";
// import Blog from "./Components/Home/Blog.js";
// import Admin from "./Components/Home/Admin.js";

function App() {
  return (
    <>
        <Router>
          {/* <Navbar /> */}
          
              <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='/Contact' element={<Contact />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Categories' element={<Categories />} />
                    <Route path='/Blog' element={<Blog />} />
                    <Route path='/Login' element={<Admin />} /> */}
              </Routes>
        </Router>
    </>
  )
}

export default App