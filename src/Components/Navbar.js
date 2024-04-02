import Foodieland from "../Assets/images/Foodieland..svg"
import facebook from '../Assets/images/facebook.svg'
import twitter from '../Assets/images//twitter.svg'
import instagram from '../Assets/images//instagram.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="navbar">
      <img className="brandLogo" src={Foodieland} alt="brand logo" />
      <div className='navLinks1'>
        <Link to="/" className='navLink'>Home</Link>
        <Link to="/recipe" className='navLink'>Recipes</Link>
        <Link to="/blog" className='navLink'>Blog</Link>
        <Link to="/contact" className='navLink'>Contact</Link>
        <Link to="/about-us" className='navLink'>About Us</Link>
      </div>
      <div className="socialsLinks">
        <img className="social" src={facebook} alt="facebook" />
        <img className="social" src={twitter} alt="twitter" />
        <img className="social" src={instagram} alt="instagram" />
      </div>
    </nav>
  );
}

export default Navbar;