import React from 'react';

const Footer = () => {
    return (
        <footer className="footer"data-testid="footer" >
           <p>Copyright &#169; 2011-{new Date().getFullYear()} Sabka Bazaar Grocery Supplies Pvt Ltd</p>
        </footer>
    )
}

export default Footer;