import cheeseburger from '../Assets/images/cheeseburger.svg'
import roastedsalmon from '../Assets/images/roastedsalmon.svg'
import pancake from '../Assets/images/pancake.svg'
import salad from '../Assets/images/salad.svg'
import meatballs from '../Assets/images/meatballs.svg'
import Ads from '../Assets/images/Ads.svg'
import fruityPancake from '../Assets/images/fruityPancake.svg'
import chickenNrice from '../Assets/images/chickenNrice.svg'
import chickenNbacon from '../Assets/images/chickenNbacon.svg'


const RecipeGallary = () => {
  return (
    <div className="recipesContainer">

      <div className="galTitle">
        <div className="titleCont">Simple and tasty recipes</div>
        <p className="galSubtext">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <div className="recipesDisplay">
        {/* <div className="displayWrap"> */}
        <img className='galaryItem' src={cheeseburger} alt="" />
        <img className='galaryItem' src={roastedsalmon} alt="" />
        <img className='galaryItem' src={pancake} alt="" />
        <img className='galaryItem' src={salad} alt="" />
        <img className='galaryItem' src={meatballs} alt="" />
        <img className='galaryItem' src={Ads} alt="" />
        <img className='galaryItem' src={fruityPancake} alt="" />
        <img className='galaryItem' src={chickenNrice} alt="" />
        <img className='galaryItem' src={chickenNbacon} alt="" />
        {/* </div> */}

      </div>

    </div>

  );
}

export default RecipeGallary;