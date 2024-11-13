import React from 'react'
import Logo from '../assets/logo-rm-bg.png'
import LogoSVG from '../assets/logo-rm-bg.svg'
import FacebookLogo from '../assets/icons8-facebook.svg'
import ReactDOM from 'react-dom'


const navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo-img' src={Logo} alt="Logo" />
     <a href='https://www.facebook.com/profile.php?id=61556660973348'> <img src={FacebookLogo} alt="facebook-logo" /> </a>
    </div>
  )
}

export default navbar
