import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import About from './components/about/about'
// import Solutions from './components/solutions/solutions'
// import Artists from './components/artists/artists'
// import FAQ from './components/faq/faq'
// import Booking from './components/booking/booking'
// import Footer from './components/footer/footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      {/* <Solutions />
      <Artists />
      <FAQ />
      <Booking />
      <Footer /> */}
    </>
  )
}

export default App
