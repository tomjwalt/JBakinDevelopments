import { useState } from 'react'
import './App.css'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar.jsx'
import HomeImage from './assets/home-img.jpg'
import Subheading from './components/Subheading.jsx'
import { Carousel } from './components/Carousel.jsx'
import {slides} from './carouseldata.json'
import Footer from './components/Footer.jsx'
import Information from "./components/Information.jsx"


function App() {

  
  return (
    <div>
      <Navbar />
      <Subheading />
      <Carousel />
      {/* <Information /> */}
      <Footer />
    </div>
  )
}

export default App
