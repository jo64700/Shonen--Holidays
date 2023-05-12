import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;