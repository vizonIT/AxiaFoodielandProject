// import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import FeaturedRecipe from "./FeaturedRecipe";
import Categories from "./Categories";
import RecipeGallary from "./RecipeGallary";
import LearnMore from "./LearnMore";
import InstaPosts from "./InstaPosts";
import MoreRecipes from "./MoreRecipes";


const Home = () => {


  return (
    <div className="home">
      <Navbar />
      <FeaturedRecipe />
      <Categories />
      <RecipeGallary />
      <LearnMore />
      <InstaPosts />
      <MoreRecipes />

    </div>
  );
}

export default Home;