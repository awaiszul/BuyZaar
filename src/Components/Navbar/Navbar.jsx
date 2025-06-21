import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaMale, FaFemale, FaChild, FaBox } from 'react-icons/fa';
import { GiLipstick, GiClothes } from 'react-icons/gi';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';

export const navbarMenu = [
  { name: 'Home', icon: <FaHome /> },
  { name: 'All Products', icon: <FaBox /> },
  { name: 'Men', icon: <FaMale /> },
  { name: 'Women', icon: <FaFemale /> },
  { name: 'Kids', icon: <FaChild /> },
  { name: 'Beauty', icon: <GiLipstick /> },
  { name: 'Jenz', icon: <GiClothes /> },
];

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();
    navigate(`/all-products?search=${encodeURIComponent(trimmedQuery)}`);
    setSearchQuery('');
    closeSidebar();
  };

  const handleMenuClick = (item) => {
    if (item.name === 'All Products') {
      navigate('/all-products');
    } else if (item.name === 'Home') {
      navigate('/');
    } else {
      navigate(`/all-products?category=${item.name}`);
    }
    closeSidebar(); // close for both desktop/mobile
  };

  return (
    <>
      <div className="Navbar" data-aos="zoom-in-left">
        {/* Hamburger (mobile only) */}
        <div className="hamburger" onClick={toggleSidebar}>
          <FiMenu />
        </div>

        {/* Desktop Menu */}
        <div className="menu-icons desktop-only">
          {navbarMenu.map((item, index) => (
            <div className="menu-item" key={index} onClick={() => handleMenuClick(item)}>
              <span className="icon">{item.icon}</span>
              <span className="name">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Searchbar */}
        <div className="searchbar" data-aos="zoom-in-right">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
          />
          <button type="submit" onClick={handleSearch}>
            <FiSearch />
          </button>
        </div>
      </div>

      {/* Sidebar (mobile view) */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="close-sidebar" onClick={closeSidebar}>
          <FiX />
        </div>

        {navbarMenu.map((item, index) => (
          <div className="sidebar-item" key={index} onClick={() => handleMenuClick(item)}>
            <span className="icon">{item.icon}</span>
            <span className="name">{item.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
