// import logo from './logo.svg';
import Home from './Components/Home'
import Recipe from './Components/Recipe'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import AboutUs from './Components/AboutUs'
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

    </div>
  );
}

export default App;
