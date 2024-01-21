import React from 'react';
import Nav from './components/Nav';
import PantrySidebar from './components/PantrySidebar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import RecipesPage from './pages/RecipesPage';

/**
 * The main component of the application.
 * Renders the navigation bar, content, and sidebar components.
 * Sets up the routing for different pages.
 * @returns {JSX.Element} The JSX code representing the structure of the application.
 */
function App() {
  return (
    <div className="main-container">
      <Router>
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<RecipesPage />} />
          </Routes>
        </div>
      </Router>
      <PantrySidebar />
    </div>
  );
}


export default App;
