import "./Navbar.css";
function Navbar() {
  return (
   
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo">
            Home
          </a>
        </div>
        <div className="navbar-center">
          <div>Eleanor: Digital Rogerian Therapy</div>
        </div>
        <div className="navbar-right">
           <a href="/rules">Rules</a>
            <a href="/about">About</a>
          
        </div>
      </nav>
      );
}
export default Navbar;
