import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Ingredients from "./Ingredients";

const Recipe = () => {
  return (
    <div className="recipeMain">
      <Navbar />
      <HeroSection />
      <Ingredients />
    </div>

  );
}

export default Recipe;