import React from 'react'

const HeroSectionForm = () => {
  return (
    <div className="hero-section_formWrapper">
            <p className="form-heading">ENQUIRE NOW</p>
            <form action="#" className="main-form">
              <div className="academic-year_Wrapper">
                <label htmlFor="">Academic Year</label>
                <div className="academic-year">2024-2026</div>
              </div>
              <div className="relationship-withChild_wrapper">
                <label htmlFor="" className="relationship-withChildMainLabel">
                  Your Relationship with the Child
                </label>
                <div className="relationship-withChildRadioButtonWrapper">
                  <input
                    type="radio"
                    name="Parents"
                    id="Father"
                    defaultChecked="checked"
                  />
                  <label htmlFor="Father" className="relationship-withChildLabel">
                    Father
                  </label>
                  <input type="radio" name="Parents" id="Mother" />
                  <label htmlFor="Mother" className="relationship-withChildLabel">
                    Mother
                  </label>
                </div>
              </div>
              <div className="childs-firstlastname-wrapper">
                <div className="childs-firstname-wrapper">
                  <label htmlFor="">Child’s First Name </label>
                  <input type="text" name="" id="" placeholder="Type Here" />
                </div>
                <div className="childs-lastname-wrapper">
                  <label htmlFor="">Child’s Last Name </label>
                  <input type="text" name="" id="" placeholder="Type Here" />
                </div>
              </div>
              <div className="parents-firstlastname-wrapper">
                <div className="parents-firstname-wrapper">
                  <label htmlFor="">Your First Name </label>
                  <input type="text" name="" id="" placeholder="Type Here" />
                </div>
                <div className="parents-lastname-wrapper">
                  <label htmlFor="">Your Last Name </label>
                  <input type="text" name="" id="" placeholder="Type Here" />
                </div>
              </div>
              <div className="course-applying">
                <label htmlFor="">Course Applying For</label>
                <select name="" id="">
                  <option value="" selected="" disabled="">
                    Choose Course
                  </option>
                </select>
              </div>
              <div className="mobile-number">
                <label htmlFor="">Mobile Number</label>
                <div className="mobile-number-inputWrapper">
                  <input
                    type="tel"
                    name=""
                    id=""
                    placeholder="Enter your Mobile Number"
                  />
                  <span className="country-code">+91</span>
                </div>
              </div>
              <div className="email-address">
                <label htmlFor="">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="yourname@example.com"
                />
              </div>
              <button className="btn-EnquireNow">Enquire Now</button>
            </form>
    </div>
  )
}

export default HeroSectionForm