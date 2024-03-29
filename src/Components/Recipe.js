import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import RecipeGallary from "./RecipeGallary";

const Recipe = () => {
  return (
    <div className="recipeMain">
      <Navbar />
      <HeroSection />
      <RecipeGallary />
    </div>

  );
}

export default Recipe;