import mrChefH from '../Assets/images/mrChefH.svg'
import btn2H from '../Assets/images/btn2H.svg'

const LearnMore = () => {
  return (

    <div className="learnMore">
      <div className="leftcontainer">
        <div className="titletxt">Everyone can be a
          chef in their own kitchen
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <img className='btn2H' src={btn2H} alt="button" />
      </div>
      <img className='rightImg' src={mrChefH} alt="" />

    </div>
  );
}

export default LearnMore;