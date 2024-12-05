import { useState } from 'react'
import './App.css'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar.jsx'
import HomeImage from './assets/home-img.jpg'
import Subheading from './components/Subheading.jsx'
import { Carousel } from './components/Carousel.jsx'
import {slides} from './carouselData.json'


function App() {

  return (
    <div>
      <Navbar />
      <Subheading />
      <Carousel data={slides}/>
    </div>
  )
}

export default App
