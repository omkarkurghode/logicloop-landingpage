import React from 'react'

const SeventhSection = () => {
  return (
    <section id="seventh-section">
        <div className="address-map-div">
          <div className="school-address-details-div">
            <p className="school-name">
              <span>dahisar</span>
              universal high school
            </p>
            <div className="address-div">
              <img src="https://captaincsgo.sirv.com/Group%201100.svg" alt="" />
              <div className="address-text">
                <span className="address-heading">ADDRESS</span>
                <p>Ashok Van, Shiv Vallabh Road, Dahisar East, Mumbai – 400 068</p>
              </div>
            </div>
            <div className="admission-inquiry">
              <img src="https://captaincsgo.sirv.com/Group%201101.svg" alt="" />
              <div className="admission-text">
                <span className="admission-inquiry-heading">
                  ADMISSIONS INQUIRY
                </span>
                <div className="phone-number-email-wrapper">
                  <a href="tel:+91 224 194 7733" className="school-phone-number">
                    +91 224 194 7733
                  </a>
                  <hr />
                  <a
                    href="mailto:admissions.dahisar@universal.edu.in"
                    className="admission-email-address"
                  >
                    admissions.dahisar@universal.edu.in{" "}
                  </a>
                </div>
              </div>
            </div>
            <a href="#" className="admissions-open-EnquireNowBtn">
              Get In Touch
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
          <img src="https://captaincsgo.sirv.com/Rectangle%20671.png" alt="" />
        </div>
    </section>
  )
}

export default SeventhSection