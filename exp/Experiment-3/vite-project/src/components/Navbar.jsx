import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#222' }}>
      <NavLink to="/" style={{ color: 'white', marginRight: '15px' }}>
        Home
      </NavLink>
      <NavLink to="/about" style={{ color: 'white', marginRight: '15px' }}>
        About
      </NavLink>
      <NavLink to="/section/1" style={{ color: 'white' }}>
        Section
      </NavLink>
    </nav>
  );
}

export default Navbar;
