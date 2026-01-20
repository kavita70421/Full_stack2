import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li className="active">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;