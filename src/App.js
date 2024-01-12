import Nav from './components/Nav';
import PantrySidebar from './components/PantrySidebar';
// import RandomRecipe from './components/RandomRecipe';
// import IngredientsRecipe from './components/IngredientsRecipe';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Other imports like your page components
import Home from './pages/Home';
import About from './pages/About';
import RecipesPage from './pages/RecipesPage';
function App() {
  return (
    <div className="main-container">
    <Router>
      <Nav />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<RecipesPage />} />

      </Routes>
     </Router>
     <div className="content"></div>
     <PantrySidebar />
    </div>
  )
}

export default App;
