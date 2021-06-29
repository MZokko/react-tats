import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import * as Scroll from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MobileIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
  NavbarBtn,
  NavbarBtnLink,
} from './NavbarStyles.js';

var scroll    = Scroll.animateScroll;

const Navbar = ({ toggle }) => {
  const [scrollNav, setscrollNav] = useState(false);

  const changeNavColorOnScrollHandler = () => {
    

    if (window.scrollY >= 80) {
      setscrollNav(true);
    } else {
      setscrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavColorOnScrollHandler);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavbarLogo to='/' onClick={toggleHome}>Zokko</NavbarLogo>
          {/* Mobile */}
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavbarMenu>
            <NavbarItem>
              <NavbarLinks 
              to='about' 
              smooth={true}
              duration={500} 
              spy={true}
              exact='true'
              offset={-80}
              activeClass="active"
              >About</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks 
              to='artist'
              smooth={true}
              duration={500} 
              spy={true}
              exact='true'
              offset={-80}
              activeClass="active"
              >Artist</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to='pricing'
              smooth={true}
              duration={500} 
              spy={true}
              exact='true'
              offset={-80}
              activeClass="active"
              >Pricing</NavbarLinks>
            </NavbarItem>
          </NavbarMenu>

          <NavbarBtn>
            <NavbarBtnLink to='/booking'
            smooth={true}
            duration={500} 
            spy={true}
            exact='true'
            offset={-80}
            activeClass="active"
            >Booking In</NavbarBtnLink>
          </NavbarBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
