import React, { useState } from 'react';
import '../navbar/navbar.scss';
import { BiMenu } from 'react-icons/bi';

function Navbar() {
  // Step 1: Create a state variable to track menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Step 2: Create a function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Step 3: Create a function to close the menu
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

      {/* Step 2: Create a modal overlay */}
      {isMenuOpen && (
        <div className='modal-overlay'>
          <div className='menu-container'>
            {/* Add a close button to the menu */}
            <button className='close-button' onClick={closeMenu}>
              Close
            </button>
            {/* Add your menu items here */}
            <ul id='menu-items'>
              <a href=""><li>HOME</li></a>
              <a href=""><li>ABOUT</li></a>
              <a href=""><li>SOLUTIONS</li></a>
              <a href=""><li>ARTISTS </li></a>
              <a href=""><li>FAQ</li></a>
              <a href=""><li>BOOKINGS</li></a>
              {/* Add more items as needed */}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;