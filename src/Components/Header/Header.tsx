import { useState, useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';

import Cart from '../Cart/Cart';
import './header.css'

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark-theme');
  }

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleToggleCart = () => {
    setShowCart(!showCart);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && showMenu) {
        setShowMenu(false);
      }
    }

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [showMenu]);

  return (
    <>
      <header className="header" id="header">
        <nav>
          <a href="#" className="nav__logo">
            <i className='bx bxs-watch nav__logo-icon'></i> Rolex
          </a>
          <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">      
            <ul className="nav__list">
              <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
              <li className="nav__item"><a href="#featured" className="nav__link">Featured</a></li>
              <li className="nav__item"><a href="#products" className="nav__link">Products</a></li>
              <li className="nav__item"><a href="#new" className="nav__link">New</a></li>
            </ul>
            <div className="nav__close" id="nav-close" onClick={handleToggleMenu}>
              <i className='bx bx-x'></i>
            </div>
          </div>
          <div className="nav__btns">           
            <i 
              className='bx bx-moon change-theme' 
              id="theme-button" 
              onClick={handleTheme}
            ></i>
            <div className="nav__shop" id="cart-shop" onClick={handleToggleCart}>
              <i className='bx bx-shopping-bag'></i>
            </div>
            <div className="nav__toggle" id="nav-toggle" onClick={handleToggleMenu}>
              <i className='bx bx-grid-alt'></i>
            </div>
          </div>
        </nav>
      </header>
      {showCart && <Cart onClose={handleToggleCart} />}
    </>
  )
}

export default Header