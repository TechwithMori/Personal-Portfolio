import React from "react";
import Social from "../Social";
import Testimonials from "../../components/testimonial/Testimonial";
import Services from "../../components/service/Service";
import Awards from "../../components/award/Awards";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me.jpg" alt="about" />
                  </div>
                  <Social />
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Full-Stack Web Developer</p>
                  <h3>Morteza Poursaleh</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div className="col-lg-7 ml-auto">
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>
                <div className="about-text">
                  <p>
                   As a 29-year-old Iranian professional thriving in the dynamic landscape of Turkey,
                   I bring a unique blend of expertise to the world of technology and finance.
                   Armed with a master's degree in Financial Engineering and a bachelor's degree
                   in Industrial Engineering, my journey has been marked by a passion for crafting 
                   innovative solutions at the intersection of finance and technology. 
                   Fluent in English and proficient in German, I have honed my skills as a full-stack developer, 
                   specializing in HTML, CSS, JavaScript, Node.js, React.js, Solidity, MySQL, MongoDB, 
                   blockchain development, WordPress, Shopify, and more.
                  </p>
                  <p>
                   Having resided in Turkey for the past two years, I've seamlessly integrated into the vibrant tech community
                   while contributing my diverse skills to create stylish and modern websites, web services, and online stores.
                   My commitment to excellence extends beyond technical courage; it's a testament to my dedication to providing
                   tailored solutions for clients of all sizes. With a firm belief in the power of technology to drive positive change,
                   I continue to navigate the ever-evolving landscape of digital innovation, ensuring that my work leaves a lasting impact
                   on the businesses I collaborate with.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Nairobi Gadot</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>4th April 1994</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>26 years</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>San Francisco</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>(+38) 469 2344 2364</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>info@domainname.com</span>
                        </li>
                        <li>
                          <label>Skype: </label>
                          <span>nairob.40</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>
          <Services />
          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Awards.</h3>
          </div>
          <Awards />
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Testimonials.</h3>
          </div>
          <Testimonials />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
