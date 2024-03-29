import breakfast from '../Assets/images/breakfast.svg'
import vegan from '../Assets/images/vegan.svg'
import meat from '../Assets/images/meat.svg'
import dessert from '../Assets/images/dessert.svg'
import lunch from '../Assets/images/lunch.svg'
import chocolate from '../Assets/images/chocolate.svg'

const Categories = () => {
  return (

    <div className="categoriesContainer">
      <div className="catTitle">
        <div className="titlebox">Categories</div>
        <button className='btn1'>View All Categories</button>
      </div>

      <div className="contentsWrap">
        <img className='categoryItem' src={breakfast} alt="" />
        <img className='categoryItem' src={vegan} alt="" />
        <img className='categoryItem' src={meat} alt="" />
        <img className='categoryItem' src={dessert} alt="" />
        <img className='categoryItem' src={lunch} alt="" />
        <img className='categoryItem' src={chocolate} alt="" />
      </div>
    </div>

  );
}

export default Categories;