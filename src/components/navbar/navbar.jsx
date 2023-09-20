import React from 'react'
import '../navbar/navbar.scss'
import {BiMenu} from 'react-icons/bi'

function Navbar() {
  return (
    <>
    <section id='navSection'>
        <nav id='navbar'>
            <div id='logoContainer'>
                <h1 id='logo'> Raven Studio </h1>
            </div>
            <ul id='nav-links'>
                <button id='consultaion'> Online Consultation </button>
                <li><BiMenu id="menu"/></li>
            </ul>
        </nav>
    </section>
    </>
  )
}

export default Navbar