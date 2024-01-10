import { Link } from 'react-router-dom';

export default function Nav () {
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        listStyle: 'none',
        padding: '10px',
        backgroundColor: '#333',
        color: 'white',
      };
    return(
        <nav style={{ margin: '0', padding: '1rem 0', backgroundColor: '#4CAF50' }}>
        <ul style={navStyle}>
          <li>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
          </li>
          <li>
            <Link to="/recipes" style={{ color: 'white', textDecoration: 'none' }}>Recipes</Link>
          </li>
          {/* Add additional navigation links as needed */}
        </ul>
      </nav>
    )
}