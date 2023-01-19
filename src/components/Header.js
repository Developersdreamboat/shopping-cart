import { useState } from 'react';
import MenuIcon from './svg/bars-solid.svg';
import CloseIcon from './svg/xmark-solid.svg';
import CartIcon from './svg/cart-shopping-solid.svg';
import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {
  const [toggle, setToggle] = useState(false);
  const menuToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header>
      <div className="menu" onClick={menuToggle}>
        <img src={MenuIcon} alt="menu" width="25"></img>
      </div>
      <div className="logo">
        <h1><Link to="/">Shop</Link></h1>
      </div>
      <nav>
        <ul className={toggle ? "toggle" : ""}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login / Sign up</Link></li>
          <li className="close" onClick={menuToggle}>
            <img src={CloseIcon} alt="close" width="25"></img>
          </li>
        </ul>
        <div className="nav-cart">
          <span>0</span>
          <Link to="/cart">
            <img src={CartIcon} alt="cart" width="25"></img>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;