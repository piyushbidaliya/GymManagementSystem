import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { FaAddressCard, FaClipboardList, FaAddressBook } from 'react-icons/fa';

const Navbar = ({ containerStyles, isLoggedIn }) => {
    
  return (
    <nav className={`${containerStyles}`}>
      <NavLink to='/' className={({ isActive }) => isActive ? "active_link" : ""}>
        <div className='flex justify-center items-center gap-x-1'><MdHome />Home</div>
      </NavLink>
      <NavLink to='/about' className={({ isActive }) => isActive ? "active_link" : ""}>
        <div className='flex justify-center items-center gap-x-1'><FaAddressCard />About Us</div>
      </NavLink>
      <NavLink to='/contact' className={({ isActive }) => isActive ? "active_link" : ""}>
        <div className='flex justify-center items-center gap-x-1'><FaAddressBook />Contact Us</div>
      </NavLink>
      {isLoggedIn && (
        <NavLink to='/bill' className={({ isActive }) => isActive ? "active_link" : ""}>
          <div className='flex justify-center items-center gap-x-1'><FaClipboardList />Bill Receipts</div>
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;