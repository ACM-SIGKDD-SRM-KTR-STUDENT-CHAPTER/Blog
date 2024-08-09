import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className="text-white text-center py-1 d-flex align-items-center justify-content-between" style={{ backgroundColor: '#00008B' }}>
      <img src={logo} alt="Logo" className="header-logo ms-1" style={{ width: '80px' }} />
      <h1 className="flex-grow-1">Blogs</h1>
    </header>
  );
};


export default Header