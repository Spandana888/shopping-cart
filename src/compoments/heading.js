import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import logo from "../static/images/logo_2x.png";
import { BsFillCartFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, useLocation } from 'react-router-dom';

function Heading() {
  const location = useLocation();
  const { pathname } = location;
  const handleNav =() =>{
    var navLink = document.getElementById("myLinks");
    if (navLink.style.display === "block") {
        navLink.style.display = "none"; 
    } else {
      navLink.style.display = "block";
    }
   } 
  return (
    <div>
    <Container className='header'>
      <Nav className="header-section-left">
        <img src={logo} alt="Sabka Bazaar"></img>
      </Nav>
      <nav className="header-section-right">
       <div>
        <div className='home-navigation'>
          <Link to="/" className={pathname === '/' ? 'activeTab' : ''}>Home</Link>
          <Link to="/products" className={pathname === '/products' ? 'activeTab' : ''}>Products</Link>
        </div>
        </div>
        <div>
        <div>
          <Link to="/signIn" className={pathname === '/signIn' ? 'activeTab' : ''}>SignIn</Link>
          <Link to="/register" className={pathname === '/register' ? 'activeTab' : ''}>Register</Link>
        </div>
        <div className="icon-container">
          <Link to="/cart">
            <BsFillCartFill color=" #cc0052"></BsFillCartFill>
            <span> 0 Items</span>
          </Link>
        </div>
       </div>
      </nav>
      <nav className="mobile-navigation">
        <div className="topnav">
        <button onClick={handleNav}>
          <GiHamburgerMenu></GiHamburgerMenu>
        </button>
        <div id="myLinks">
          <Link to="/" className={pathname === '/' ? 'activeTab' : ''}>Home</Link>
          <Link to="/products" className={pathname === '/products' ? 'activeTab' : ''}>Products</Link>
          <Link to="/signIn" className={pathname === '/signIn' ? 'activeTab' : ''}>SignIn</Link>
          <Link to="/register" className={pathname === '/register' ? 'activeTab' : ''}>Register</Link>
        </div>
        </div>
      </nav>
    </Container>
    <hr />
    </div>
  );
}

export default Heading;