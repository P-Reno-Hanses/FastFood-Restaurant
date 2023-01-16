import React from 'react'
import Frontpage from '../components/Frontpage'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Offer from '../components/Offer'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <Frontpage/>
    <About/>
    <Offer/>
    <Footer/>
    </>
  )
}

export default Home