import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import logo from "../static/images/logo.png";
import { BsFillCartFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, useLocation } from 'react-router-dom';
import Cart from "../compoments/cart";
import { useCart } from "react-use-cart";

function Heading() {
  const { totalItems } = useCart();
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
        <h1><img src={logo} alt="Sabka Bazaar"></img></h1>
      </Nav>
      <nav className="header-section-right">
       <div>
        <div className='home-navigation'>
          <Link data-testid="home-button" to="/" className={pathname === '/' ? 'activeTab' : ''}>Home</Link>
          <Link to="/products" className={pathname === '/products' ? 'activeTab' : ''}>Products</Link>
        </div>
        </div>
        <div>
        <div>
          <Link to="/signIn" className={pathname === '/signIn' ? 'activeTab' : ''}>SignIn</Link>
          <Link to="/register" className={pathname === '/register' ? 'activeTab' : ''}>Register</Link>
        </div>
        <div>
          <button data-testid="cart-button" type="button" className="btn btn-md cart-button" data-toggle="modal" data-target="#myModal"><BsFillCartFill color=" #cc0052"></BsFillCartFill><span> { totalItems } </span>Items</button>
          <div id="myModal" className="modal fade" role="dialog">
           <div className="modal-dialog">
            <Cart></Cart> 
           </div>
          </div>
        </div>
       </div>
      </nav>
      <nav className="mobile-navigation">
        <div className="topnav">
        <button onClick={handleNav}>
          <GiHamburgerMenu></GiHamburgerMenu>
        </button>
        <div id="myLinks">
          <Link data-testid="home-button" role="link" to="/" className={pathname === '/' ? 'activeTab' : ''}>Home</Link>
          <Link role="link" to="/products" className={pathname === '/products' ? 'activeTab' : ''}>Products</Link>
          <Link role="link" to="/signIn" className={pathname === '/signIn' ? 'activeTab' : ''}>SignIn</Link>
          <Link role="link" to="/register" className={pathname === '/register' ? 'activeTab' : ''}>Register</Link>
          <Link role="link" to="/cart" className={pathname === '/cart' ? 'activeTab' : ''}>Cart</Link>
        </div>
        </div>
      </nav>
    </Container>
    <hr />
    </div>
  );
}

export default Heading;