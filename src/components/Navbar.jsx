import "../index.css";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <NavLink to="/" className={({isActive }) => (isActive ? "active" : "")}>
        <span className="spaceGrotesk200">Home</span>
      </NavLink>
      </div>
      {/* <div className="navbar-center">
        <div>Eleanor: Digital Rogerian Therapy</div>
      </div> */}
      <div className="navbar-right">
      <NavLink to="/session" className={({isActive }) => (isActive ? "active" : "")}>
        <span className="spaceGrotesk200">Session</span>
      </NavLink>
      <NavLink to="/about" className={({isActive }) => (isActive ? "active" : "")}>
        <span className="spaceGrotesk200">About</span>
      </NavLink>
      </div>
    </nav>
  );
}
export default Navbar;
