import moreRecipeOne from '../Assets/images/moreRecipeOne.svg'
import moreRecipeTwo from '../Assets/images/moreRecipeTwo.svg'
import moreRecipeThree from '../Assets/images/moreRecipeThree.svg'
import moreRecipeFour from '../Assets/images/moreRecipeFour.svg'
import moreRecipeFive from '../Assets/images/moreRecipeFive.svg'
import moreRecipeSix from '../Assets/images/moreRecipeSix.svg'
import moreRecipeSeven from '../Assets/images/moreRecipeSeven.svg'
import moreRecipeEight from '../Assets/images/moreRecipeEight.svg'

const MoreRecipes = () => {
  return (
    <div className="moreRecipes">
      <div className="headingWrap">
        <div className="callToTry">
          Try this delicious recipe to make your day
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>

      <div className="moreRecipeGallary">
        <img className='recipeItem' src={moreRecipeOne} alt="" />
        <img className='recipeItem' src={moreRecipeTwo} alt="" />
        <img className='recipeItem' src={moreRecipeThree} alt="" />
        <img className='recipeItem' src={moreRecipeFour} alt="" />
        <img className='recipeItem' src={moreRecipeFive} alt="" />
        <img className='recipeItem' src={moreRecipeSix} alt="" />
        <img className='recipeItem' src={moreRecipeSeven} alt="" />
        <img className='recipeItem' src={moreRecipeEight} alt="" />
      </div>
    </div>
  );
}

export default MoreRecipes;