import { Link } from 'react-router-dom';

export default function Nav () {
        return(
        <nav className="nav-container">
          <h1>My Recipes API website</h1>
        <ul className="nav-list">
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about" >About</Link>
          </li>
          <li>
            <Link to="/recipes" >Recipes</Link>
          </li>
          {/* Add additional navigation links as needed */}
        </ul>
      </nav>
    )
}