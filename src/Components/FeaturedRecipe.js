import Badge from '../Assets/images/Badge.svg'
import HotRecipe from '../Assets/images/HotRecipe.svg'
import MaskGroup from '../Assets/images/MaskGroup.svg'
import min30 from '../Assets/images/min30.svg'
import viewRecipe from '../Assets/images/viewRecipe.svg'
import ChikenForkNife from '../Assets/images/ChikenForkNife.svg'
import JohnSmith from '../Assets/images/JohnSmith.svg'


const FeaturedRecipe = () => {
  return (
    <div className="featRecipeMain">

      <div className="leftdetail">
        <img className="hotrecipe" src={HotRecipe} alt="" />
        <div className='spicy'>Spicy delicious <br />
          chicken wings</div>
        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod <br />
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <div className="choseIcons">
          <img className='iconH' src={min30} alt="" />
          <img className='iconH' src={ChikenForkNife} alt="" />
        </div>
        <div className="profileview">
          <img className='view' src={JohnSmith} alt="John smith" />
          <img className='view' src={viewRecipe} alt="" />
        </div>
      </div>

      <img className='badge' src={Badge} alt="badge image" />

      {/* <div className="rightdetail"> */}
      <img className='MaskGroup' src={MaskGroup} alt="view backround" />
      {/* </div> */}

    </div>
  );
}

export default FeaturedRecipe;