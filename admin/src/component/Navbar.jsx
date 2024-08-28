import logout from '../assets/logout.svg'
import { Link, NavLink } from 'react-router-dom'
import {doSignOut} from '../firebase/auth'

function Navbar() {
  const handleLogout = async () => {
    try {
      await doSignOut(); // Sign out the user
      setIsLoggedIn(false); // Update the logged-in state
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };
  return (
    <>
    <div className='bg-red-50 p-3'>
    <Link to="/home"><h1 className='text-center text-2xl'>Admin Dashboard</h1></Link> 
    </div>
    <nav className='flex justify-around items-center'>
      <Link to="/home">Manage Members</Link> 
      <Link to="/Bills">Create Bills</Link> 
 
      <Link to="/SupplementStore">Supplement Store</Link> 
      <Link to="/DietDetails">Diet Details</Link> 
      <NavLink onClick={handleLogout} to={'/'} className={"px-7 py-1 bg-green-400 rounded-full flex items-center justify-center gap-x-2 medium-16"}>
      <img src={logout} alt="logouticon" height={19} width={19}/> Logout
      </NavLink>
    </nav>
    </>
  )
}

export default Navbar
