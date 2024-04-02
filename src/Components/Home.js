import Navbar from "./Navbar";
import FeaturedRecipe from "./FeaturedRecipe";
import Categories from "./Categories";
import RecipeGallary from "./RecipeGallary";
import LearnMore from "./LearnMore";
import InstaPosts from "./InstaPosts";
import MoreRecipes from "./MoreRecipes";
import MailingCall from "./MailingCall";
import Footer from "./Footer";


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
      <MailingCall />
      <Footer />

    </div>
  );
}

export default Home;