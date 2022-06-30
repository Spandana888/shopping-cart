import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import logo from "../static/images/logo_2x.png";
import { BsFillCartFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

function Heading() {
  return (
    <div>
    <Container className='header'>
      <Nav className="header-section-left">
        <img src={logo} alt="Sabka Bazaar"></img>
        <div className='home-navigation'>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        </div>
      </Nav>
      <Nav className="header-section-right">
        <div>
          <Link to="/signIn">SignIn</Link>
          <Link to="/register">Register</Link>
        </div>
        <div className="icon-container">
          <Link to="/cart">
            <BsFillCartFill color=" #cc0052"></BsFillCartFill>
            <span> 0 Items</span>
          </Link>
        </div>
      </Nav>
    </Container>
    <hr />
    </div>
  );
}

export default Heading;