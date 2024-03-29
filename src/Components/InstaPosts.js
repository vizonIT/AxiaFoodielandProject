import instaPostOne from '../Assets/images/instaPostOne.svg'
import instaPostTwo from '../Assets/images/instaPostTwo.svg'
import instaPostThree from '../Assets/images/instaPostThree.svg'
import instaPostFour from '../Assets/images/instaPostFour.svg'
import InstaBtn from '../Assets/images/InstaBtn.svg'

const InstaPosts = () => {
  return (

    <div className="instaContainer">

      <div className="instaTitle">
        <div className="instAddress">Check out @foodieland on Instagram</div>
        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <div className="instaPosts">
        <img className='instapost' src={instaPostOne} alt="" />
        <img className='instapost' src={instaPostTwo} alt="" />
        <img className='instapost' src={instaPostThree} alt="" />
        <img className='instapost' src={instaPostFour} alt="" />
      </div>
      <img className="instaBtn" src={InstaBtn} alt="" />

    </div>
  );
}

export default InstaPosts;