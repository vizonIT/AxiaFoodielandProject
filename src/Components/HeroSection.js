
import JohnSmith from '../Assets/images/JohnSmith.svg'
import prepTime from '../Assets/images/prepTime.svg'
import cookTime from '../Assets/images/cookTime.svg'
import ChikenForkNife from '../Assets/images/ChikenForkNife.svg'
import Print from '../Assets/images/Print.svg'
import Share from '../Assets/images/Share.svg'
import HeaderImg1 from '../Assets/images/HeaderImg1.svg'

const HeroSection = () => {


  return (
    <div className="heroSection">
      <div className="heroTop">
        <div className="titleWrap">
          <h2 className='title'>Health Japanese Fried Rice</h2>
          <div className="profileWrap">
            <img src={JohnSmith} alt="John Smith's profile" />
            <img src={prepTime} alt="Prepation time asset" />
            <img src={cookTime} alt="Cook time asset" />
            <img src={ChikenForkNife} alt="cuttleries" />
          </div>
        </div>

        <div className="printShr">
          <img width={50} src={Print} alt="print" />
          <img width={50} src={Share} alt="Share" />
        </div>
      </div>
      <div className="heroMid">
        <img height={400} src={HeaderImg1} alt="Recipte imga1" />
        <div className="nutritionSection">
          <div className="topNut">
            <h4 className='nutTitle'>Nutrition Information</h4>
            <div className="nutChart">
              <div className="rw1">
                <NutriChart />
              </div>

            </div>
          </div>
          <div className="bottomNut">
            <p>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    </div>

  );
}


export default HeroSection;

const NutriChart = () => {
  const nutTable = [
    { ingrd: 'Calorie', wt: '219.9 kcal', id: 1 },
    { ingrd: 'Total Fat', wt: '10.7 g', id: 2 },
    { ingrd: 'Protein', wt: '7.9 g', id: 3 },
    { ingrd: 'Carbohydrate', wt: '22.3 g', id: 4 },
    { ingrd: 'Cholesterol', wt: '37.4 mg', id: 5 },
  ];

  const nutriItems = nutTable.map((nutri) => {
    // console.log(nutri);

    return (
      <div className='rws' key={nutri.id}>
        <p>{nutri.ingrd}</p>
        <h5>{nutri.wt}</h5>
      </div>
    );

  })

  return (
    <div className="nutrichart">
      {nutriItems}
    </div>
  );
}

// export default nutriChart;