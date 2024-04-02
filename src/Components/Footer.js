import Foodieland from '../Assets/images/Foodieland..svg'
import facebook from '../Assets/images/facebook.svg'
import twitter from '../Assets/images//twitter.svg'
import instagram from '../Assets/images//instagram.png'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (

    <div className="footerContainer">
      <div className="topSection">
        <div className="topLeftFooter">
          <img className="brandLogo" src={Foodieland} alt="brand logo" />
          <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
        </div>

        <div className='navLinks2'>
          <Link to="/" className='navLink'>Home</Link>
          <Link to="/recipe" className='navLink'>Recipes</Link>
          <Link to="/blog" className='navLink'>Blog</Link>
          <Link to="/contact" className='navLink'>Contact</Link>
          <Link to="/about-us" className='navLink'>About Us</Link>
        </div>
      </div>
      <hr />

      <div className="bottomSection">
        <></>
        <div className="copyWrite">
          <p className='copyYear'>© 2020 Flowbase.Powered by </p><div style={{ color: "rgb(247, 123, 46)" }}>Webflow</div>
        </div>
        <div className="socials">
          <img className="social" src={facebook} alt="facebook" />
          <img className="social" src={twitter} alt="twitter" />
          <img className="social" src={instagram} alt="instagram" />
        </div>

      </div>
    </div>
  );
}

export default Footer;