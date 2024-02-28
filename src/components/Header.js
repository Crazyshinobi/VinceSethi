import { NavLink  } from 'react-router-dom';
import Logo from '../assets/logo.jpeg';

import './Header.css';

export const Header = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul>
        <NavLink className="nav-items" to="/" end>Home</NavLink>
        <NavLink className="nav-items" to="/about">About</NavLink>
        <NavLink className="nav-items" to="/privacy">Privacy Policy</NavLink>
        <NavLink className="nav-items" to="/contact">Contact Us</NavLink>
      </ul>
      <button>Call Us : 9654980778</button>
    </nav>
  );
};

