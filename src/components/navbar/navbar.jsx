import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from "../../image/news.png";
import './navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCategoryChange = (category) => {
    dispatch({ type: 'SET_CATEGORY', category });
    navigate('/');
    setDropdownOpen(false);
    setMenuOpen(false); 
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" />
        <h1>NeighborHood</h1>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        &#9776; {}
      </button>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <NavLink exact to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/favorites" onClick={() => setMenuOpen(false)}>Favorite Articles</NavLink>
        </li>
        <li className="dropdown">
          <span className="dropbtn" onClick={toggleDropdown}>Categories</span>
          <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
            <button onClick={() => handleCategoryChange('general')}>General</button>
            <button onClick={() => handleCategoryChange('business')}>Business</button>
            <button onClick={() => handleCategoryChange('technology')}>Technology</button>
            <button onClick={() => handleCategoryChange('entertainment')}>Entertainment</button>
            <button onClick={() => handleCategoryChange('sports')}>Sports</button>
            <button onClick={() => handleCategoryChange('health')}>Health</button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
