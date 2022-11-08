import React, { useState } from 'react';
import { Links } from './Data';
import logo from './images/logo.svg';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setShowMenu(false);
    setIsMenuOpen(false);
  };

  return (
    <header className='header'>
      <div className='log'>
        <img src={logo} alt='logo' />
      </div>
      <nav className={isMenuOpen ? 'nav-wrapper nav' : 'nav-wrapper'}>
        <ul className='nav__links'>
          {Links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className='btn-container'>
        {showMenu ? (
          <button className='btn close' onClick={closeMenu}>
            <FaTimes />
          </button>
        ) : (
          <button className='btn menu' onClick={openMenu}>
            <FaBars />
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
