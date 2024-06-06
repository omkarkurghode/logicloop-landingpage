import React from 'react'
import HeroSectionForm
 from './HeroSectionForm'
function HeroSection() {
  return (
    <section id="hero-section">
        <header>
          <div className="brand-logo_btnWrapper">
            <div className="brand-logo">
              <img src="https://captaincsgo.sirv.com/UHD-logo%201.png" alt="" />
              <hr />
              <img src="https://captaincsgo.sirv.com/pace-logo-png-1%201.png" alt="" />
            </div>
            <a href="" className="btn-getInfo">
              Get Info
            </a>
          </div>
        </header>
        <div className="hero-section-left-form_wrapper">
          <div className="hero-section-left">
            <p className="kickstart-your-text">KICKSTART YOUR</p>
            <h1>IIT JEE/NEET Test Prep,</h1>
            <div className="powered-by-wrapper">
              <p>Powered by</p>
              <img src="https://captaincsgo.sirv.com/pace-logo-png-1%202.png" alt="" />
            </div>
            <div className="admissions-open-wrapper">
              <p>ADMISSIONS OPEN</p>
              <a href="#" className="admissions-open-EnquireNowBtn">
                Enquire Now
                <img src="https://captaincsgo.sirv.com/Group%201092.svg" alt="" />
              </a>
            </div>
            <div className="batch-starts-scholarship-tests-wrapper">
              <div className="batch-starts-from">
                <img src="https://captaincsgo.sirv.com/Group%201118.svg" alt="" />
                <p>Batch Starts From 3rd April '24</p>
              </div>
              <div className="scholarship-test">
                <img src="https://captaincsgo.sirv.com/Group%201119.svg" alt="" />
                <p>Scholarship Test 23rd March '24</p>
              </div>
            </div>
          </div>
          <div className="hero-section-studenentsimage">
            <img src="https://captaincsgo.sirv.com/Cutouts%201.png" alt="" />
          </div>
          <HeroSectionForm/>
        </div>
        <div className="learning-approach-Mainwrapper">
          <div className="learning-approach-wrapper">
            <img
              src="https://captaincsgo.sirv.com/our%20approach%20arrow.svg"
              alt=""
              className="our-approachtop-arrow"
            />
            <div className="learning-approach-headingwrapper">
              <span className="learning-approach-wrapper-OurText">OUR</span>
              <h2>LEARNING APPROACH</h2>
              <div className="learning-approach-PointsWrapper">
                <div className="learning-approach-IndividualPoints">
                  <img src="https://captaincsgo.sirv.com/Learning%20Approach%201.svg" alt="" />
                  <p>
                    Classes are conducted during school hours on school premises
                  </p>
                </div>
                <div className="learning-approach-IndividualPoints">
                  <img src="https://captaincsgo.sirv.com/Learning%20Approach%202.svg" alt="" />
                  <p>ISC curriculum is covered fully with competitive exams</p>
                </div>
                <div className="learning-approach-IndividualPoints">
                  <img src="https://captaincsgo.sirv.com/Learning%20Approach%203.svg" alt="" />
                  <p>Saves precious time for self-study</p>
                </div>
                <div className="learning-approach-IndividualPoints">
                  <img src="https://captaincsgo.sirv.com/Learning%20Approach%204.svg" alt="" />
                  <p>Experienced faculty powered by PACE IIT &amp; MEDICAL</p>
                </div>
                <div className="learning-approach-IndividualPoints">
                  <img src="https://captaincsgo.sirv.com/Learning%20Approach%205.svg" alt="" />
                  <p>Smaller batch size for personalized attention</p>
                </div>
              </div>
              <a href="#" className="learning-approach-btnEnquireNow">
                Enquire Now
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="13.615" cy="14.0796" r="13.5532" fill="#292967" />
                  <path
                    d="M21.5556 14.7867C21.9462 14.3962 21.9462 13.763 21.5556 13.3725L15.1917 7.00852C14.8012 6.618 14.168 6.618 13.7775 7.00852C13.3869 7.39905 13.3869 8.03221 13.7775 8.42274L19.4343 14.0796L13.7775 19.7364C13.3869 20.127 13.3869 20.7601 13.7775 21.1507C14.168 21.5412 14.8012 21.5412 15.1917 21.1507L21.5556 14.7867ZM6.38135 15.0796H20.8485V13.0796H6.38135V15.0796Z"
                    fill="#FDDF49"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HeroSection