import React from 'react'
import './Navbars.css'





export default function Navbar() {
  return (
    <>

<header>
    <div id='home' className="logo">
        <p> Mohammed Jouhar </p>
    </div>

<nav className='navm'>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#skill">Skils</a></li> 
        <li><a href="#port">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
 
</nav>



</header>

    </>
  )
}
