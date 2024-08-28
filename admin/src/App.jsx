import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Navbar from "./component/Navbar";
import SupplementStore from "./pages/SupplementStore";
import DietDetails from "./pages/DietDetails";
import CreateBill from "./pages/CreateBill";

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
  const location = useLocation(); // Hook to get current route

  // Array of paths where Navbar should be hidden
  const hideNavbarRoutes = ["/"];

  return (
    <>
      {/* Conditionally render Navbar */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Admin />} />
        <Route path="/SupplementStore" element={<SupplementStore />} />
        <Route path="/DietDetails" element={<DietDetails />} />
        <Route path="/Bills" element={<CreateBill/>} />
      </Routes>
    </>
  );
}
