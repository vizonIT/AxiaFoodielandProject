import SaladLeft from '../Assets/images/SaladLeft.svg'
import SaladRight from '../Assets/images/SaladRight.svg'
import RectangleBtn from '../Assets/images/RectangleBtn.svg'


const MailingCall = () => {
  return (
    <div className="mailingContainer">
      <div className="CTA">
        <div className="ctaTitle">Deliciousness to your inbox</div>
        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <div className="typingArea">
          <input type="text" placeholder='Your email address...' />
          <button>Subscribe</button>
        </div>

      </div>
      <div className="saladWrap">
        <img className='SaladLeft' src={SaladLeft} alt="" />
        <img className='SaladRight' src={SaladRight} alt="" />
      </div>

    </div>
  );
}

export default MailingCall;