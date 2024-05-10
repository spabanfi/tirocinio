import React from 'react';
import Navbar from './Navbar';
import SiteLogo from './SiteLogo.jsx';

const Header = () => {
  return (
    <header className="header">
      <SiteLogo></SiteLogo>
      <Navbar></Navbar>
    </header>
  );
}

export default Header;
