// Header Component
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import logo from '../assets/logo.svg';
import logout from '../assets/logout.svg';
import Navbar from './Navbar';
import { doSignOut } from '../firebase/auth'; // Ensure this import exists

const Header = ({ isLoggedIn, setIsLoggedIn }) => { // Assuming setIsLoggedIn is passed to manage the auth state
  const [menuOpened, setMenuOpened] = useState(false);    
  const toggleMenu = () => setMenuOpened(!menuOpened);

  const handleLogout = async () => {
    try {
      await doSignOut(); // Sign out the user
      setIsLoggedIn(false); // Update the logged-in state
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  return (
    <header className='fixed top-0 left-0 m-auto mx-auto max-w-[1440px] px-6 lg:px-20 w-full bg-white ring-1 ring-slate-900/5 z-10'>
      <div className='px-4 flex items-center justify-between py-3 max-xs:px-2'>
        {/* Logo */}
        <div>
          <Link to={"/"}><img src={logo} alt="logo" height={66} width={66}/></Link>
        </div>
        {/* Navbar Desktop */}
        <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"} isLoggedIn={isLoggedIn} />
        {/* Navbar Mobile */}
        <Navbar 
          containerStyles={`${menuOpened ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 rounded-3xl bg-white shadow-md w-64 medium-16 ring1 ring-slate-900/5 transition-all duration-300"
            :
            "flex item-start flex-col gap-y-12 fixed top-20 p-12 rounded-3xl bg-white shadow-md w-64 medium-16 ring1 ring-slate-900/5 transition-all duration-300 -right-[100%]" }`} 
          isLoggedIn={isLoggedIn}
        />
        
        {/* Menu and Buttons */}
        <div className='flex justify-between items-center sm:gap-x-2 bold-16'>
          {!menuOpened ? 
            (<MdMenu className="md:hidden cursor-pointer mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu}/>)
            :
            (<MdClose className="md:hidden cursor-pointer mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu}/>)
          }
          <div className='flex justify-between items-center sm:gap-x-6'>
            {isLoggedIn ? (
              <NavLink onClick={handleLogout} to={'/'} className={"px-7 py-3 rounded-full bg-blue-300 flex items-center justify-center gap-x-2 medium-16"}>
                <img src={logout} alt="logouticon" height={19} width={19}/> Logout
              </NavLink>
            ) : (
              <NavLink to={'/login'} className={"px-7 py-2 rounded-full flex bg-blue-300 items-center justify-center gap-x-2 medium-16"}>
                LogIn
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
