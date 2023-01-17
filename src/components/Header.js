import MenuIcon from './svg/bars-solid.svg';
import CloseIcon from './svg/xmark-solid.svg';
import CartIcon from './svg/cart-shopping-solid.svg';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="menu">
        <img src={MenuIcon} alt="menu" width="25"></img>
      </div>
      <div className="logo">
        <h1><Link to="/">Shop</Link></h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Product</Link></li>
          <li><Link to="/">Contact</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Login / Sign up</Link></li>
          <li className="close">
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