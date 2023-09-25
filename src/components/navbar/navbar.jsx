import React, { useState } from 'react';
import '../navbar/navbar.scss';
import { BiMenu } from 'react-icons/bi';

function Navbar() {
  // a state variable to track menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <section id='navSection'>
        <nav id='navbar'>
          <div id='logoContainer'>
            <h1 id='logo'> Raven Studio </h1>
          </div>
          <ul id='nav-links'>
            <button id='consultation'> Online Consultation </button>
            <li>
              <BiMenu id='menu' onClick={toggleMenu} />
            </li>
          </ul>
        </nav>
      </section>

      {isMenuOpen && (
        <div className='modal-overlay'>
          <div className='menu-container'>
            <button className='close-button' onClick={closeMenu}>
              Close
            </button>
            <ul id='menu-items'>
              <a href="#home"><li>HOME</li></a>
              <a href="#about"><li>ABOUT</li></a>
              <a href="#solutions"><li>SOLUTIONS</li></a>
              <a href="#artists"><li>ARTISTS </li></a>
              <a href="#faqSection"><li>FAQ</li></a>
              <a href="#booking"><li>BOOKINGS</li></a>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;