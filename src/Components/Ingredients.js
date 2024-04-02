import Ads from '../Assets/images/Ads.svg'
import OtherRecipe from '../Assets/images/OtherRecipe.svg'
import selectIcon from '../Assets/images/selectIcon.svg'
import optionIcon from '../Assets/images/optionIcon.svg'




const Ingredients = () => {
  return (

    <div className="ingredientsContainer">

      <div className="leftIngredientRecipe">
        <h3>Ingredients</h3>
        <div className="forMainDish">
          <h4>For main dish</h4>
          <div className="selectionPane">
            <img className="selected" src={selectIcon} alt="" />
            <div className="selectContent">Lorem ipsum dolor sit amet</div>
          </div>
          <hr />
          <Options />
          <hr />
          <Options />
          <hr />
          <Options />
          <hr />
          <Options />
          <hr />
        </div>
        <div className="forTheSauce">
          <h4>For the sauce</h4>
          <Options />
          <hr />
          <Options />
          <hr />
          <Options />
          <hr />
        </div>

      </div>

      <div className="RightIngredientsRecipe">
        {/* <h3>Other Recipe</h3> */}
        <img src={OtherRecipe} alt="" />
        <img src={Ads} alt="" />

      </div>

    </div>

  );
}


const Options = () => {
  return (
    <div className="options">
      <div className="optionTick"><img src={optionIcon} alt="" /></div>
      <div className="optionContent">Lorem ipsum dolor sit amet</div>
    </div>
  );
}

// export default Options;
export default Ingredients;