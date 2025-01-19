import React, { useState, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'; // Import AnchorLink
import './Navbar.css';
import logoo from '../../assets/sanjai.svg';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuref = useRef();
  const openMenu = () => {
    menuref.current.style.right="0"
  }
  const closeMenu = () => {
    menuref.current.style.right="-350px"
  }

  return (
    <div className="navbar">
      <img className="rt" src={logoo} alt="Logo" />
      <img src={menu_open} onClick={openMenu}alt=""  className='nav-mob-open'/>
      <ul ref={menuref} className="nav-menu">
        <img src={menu_close} onClick={closeMenu}alt="" className="nav-mob-close" />
        <li onClick={() => setMenu("home")}>
          <AnchorLink className="anl" offset={50} href="#home">
            <p>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="Underline" /> : null}
        </li>
        <li onClick={() => setMenu("about")}>
          <AnchorLink className="anl" offset={50} href="#about">
            <p>About</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="Underline" /> : null}
        </li>
        <li onClick={() => setMenu("services")}>
          <AnchorLink className="anl" offset={50} href="#services">
            <p>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="Underline" /> : null}
        </li>
        <li onClick={() => setMenu("portfolio")}>
          <AnchorLink className="anl" offset={50} href="#mywork">
            <p>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" ? <img src={underline} alt="Underline" /> : null}
        </li>
        <li onClick={() => setMenu("contact")}>
          <AnchorLink className="anl" offset={50} href="#contact">
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="Underline" /> : null}
        </li>
      </ul>
      <div className="nav-connect"> <AnchorLink className="anl" offset={50} href="#contact">Connect with me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
