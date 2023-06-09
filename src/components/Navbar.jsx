import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import * as faIcon from 'react-icons/fa';
import { Button } from './Button';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
      if(window.innerWidth <= 960){
        setButton(false)
    }else{
      setButton(true);
    }};


    useEffect(() => {
      showButton()
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo'>
            <faIcon.FaServicestack />
            <p>TRAVEL</p>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <faIcon.FaTimes /> : <faIcon.FaBars />}
          </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to="/Home" className='nav-links' onClick={closeMobileMenu}>
                        Home 
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                        Services 
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
                        Product 
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign Up 
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline' className="btn-signup">SIGN UP</Button>}
        </div> 
      </nav>
    </>
  )
}

export default Navbar
