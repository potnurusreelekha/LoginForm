// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="nav-menu">
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>
        <Link to="/products" className="nav-link">
          <li>Products</li>
        </Link>
        <Link to="/cart" className="nav-link">
          <li>Cart</li>
        </Link>
      </ul>
      <button type="button" className="logout-button">
        Logout
      </button>
    </div>
  </nav>
)
export default Header
