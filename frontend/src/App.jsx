import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Login from "./pages/Login";
import { auth } from './firebase/firebase';
import BillReceipts from "./pages/BillReceipts";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </div>
  );
}

function Content() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
          setIsLoggedIn(!!user); // Set isLoggedIn based on user's authentication state
      });

      return () => unsubscribe(); // Clean up the subscription on unmount
  }, []);
  const location = useLocation(); // Hook to get current route

  // Array of paths where Navbar should be hidden
  const hideHeaderRoutes = ["/login"];

  return (
    <>
      {/* Conditionally render Navbar */}
      {!hideHeaderRoutes.includes(location.pathname) && <Header isLoggedIn={isLoggedIn} />}
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/bill" element={<BillReceipts/>}/>
      </Routes>
      {!hideHeaderRoutes.includes(location.pathname) && <Footer/>}
    </>
  );
}