import React from 'react'

const FourthSection = () => {
  return (
    <section id="fourth-section">
        <div className="tab-switch-options">
          <input
            type="radio"
            name="tab-options"
            id="In School Preparation"
            defaultChecked="checked"
            className="tab-options-radio"
          />
          <label htmlFor="In School Preparation" className="tab-options">
            In School Preparation
          </label>
          <input
            type="radio"
            name="tab-options"
            id="Revision"
            className="tab-options-radio"
          />
          <label htmlFor="Revision" className="tab-options">
            Revision
          </label>
          <input
            type="radio"
            name="tab-options"
            id="Mock Tests"
            className="tab-options-radio"
          />
          <label htmlFor="Mock Tests" className="tab-options">
            Mock Tests
          </label>
          <input
            type="radio"
            name="tab-options"
            id="Feedback"
            className="tab-options-radio"
          />
          <label htmlFor="Feedback" className="tab-options">
            Feedback
          </label>
          <input
            type="radio"
            name="tab-options"
            id="Study Material"
            className="tab-options-radio"
          />
          <label htmlFor="Study Material" className="tab-options">
            Study Material
          </label>
          <input
            type="radio"
            name="tab-options"
            id="Counselling"
            className="tab-options-radio"
          />
          <label htmlFor="Counselling" className="tab-options">
            Counselling
          </label>
          <input
            type="radio"
            name="tab-options"
            id="Career Guidance"
            className="tab-options-radio"
          />
          <label htmlFor="Career Guidance" className="tab-options">
            Career Guidance
          </label>
        </div>
        <div className="tab-switch-div">
          <div className="tab-switch-div-LeftInfo">
            <span>In School Preparation</span>
            <p>
              Lectures will happen on campus during school hours with our esteemed
              faculty powered by PACE, so students don’t need to go anywhere for
              extra coaching or tuition classes.
            </p>
            <a href="#" className="admissions-open-EnquireNowBtn">
              Enquire Now
              <img src="https://captaincsgo.sirv.com/Group%201092.svg" alt="" />
            </a>
          </div>
          <img
            src="https://captaincsgo.sirv.com/Rectangle%20683.png"
            alt=""
            className="tab-switch-Webview"
          />
          <img
            src="https://captaincsgo.sirv.com/tab%20switch%20mobile%20view.png"
            alt=""
            className="tab-switch-mobileview"
          />
        </div>
    </section>
  )
}

export default FourthSection