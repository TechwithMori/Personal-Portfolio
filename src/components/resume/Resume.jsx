import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Head of Technical Department`,
    jobType: `Adonis Network | On-site`,
    jobDuration: `Aug 2021 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "Adonis International Holdings",
    jobDescription: ` As the Senior Full-Stack Developer and Head of the Technical Department at Adonis International Holdings, a prominent information technology joint-stock company, I manage the online infrastructure for the conglomerate and its subsidiaries worldwide. Since 2021, I've led initiatives spanning finance, blockchain, metaverse, artificial intelligence, and more, supported by Adonis Holdings.`,
  },
  {
    jobPosition: `Jr. Full-Stack Developer`,
    jobType: `MCI | Hybrid`,
    jobDuration: `Feb 2020 - Aug 2020`,
    timeDuraton: `Part Time`,
    compnayName: "Mobile Communication Company of Iran",
    jobDescription: `As a Junior Full Stack Developer at MCI, I played a pivotal role in crafting a dedicated website for a subsidiary company. Serving as the technical executive and planning consultant, I seamlessly integrated innovative solutions, contributing to the digital advancement of MCI's diverse business portfolio.`,
  },
  {
    jobPosition: `Full-Stack Developer`,
    jobType: `IAUEC | On-site`,
    jobDuration: `Sep 2020 - Apr 2021`,
    timeDuraton: `Full Time`,
    compnayName: "Islamic Azad University E-Campus",
    jobDescription: `At Islamic Azad University E-Campus, I served as a Full Stack Developer, spearheading the development of a faculty-specific website. As the sole programmer and content leader, I ensured a cohesive online presence, seamlessly integrating functionality and engaging content for an enriched educational experience within the university community.`,
  },
  {
    jobPosition: `Head of Technical team`,
    jobType: `PPO | Hybrid`,
    jobDuration: `Apr 2021 - Aug 2021`,
    timeDuraton: `Part Time`,
    compnayName: "Paydar Polymer Ojan",
    jobDescription: ` As the Tech Lead at Paydar Polymer Ojan, a leading polymer goods manufacturer, I led the tech department with expertise in web development, SEO, online marketing, social media marketing, advertising, and branding. Guiding a multidisciplinary team, I orchestrated digital strategies that elevated the company's technological and marketing initiatives.`,
  },
  {
    jobPosition: `Co-Founder and Executive Officer`,
    jobType: `AstroBM | Hybrid`,
    jobDuration: `Jul 2020 - Present`,
    timeDuraton: `Part Time`,
    compnayName: "AstroBM Technical Analysis Group",
    jobDescription: `As co-founder of a financial market trading consultancy institute, my partner and I focused on educating and mentoring new traders in Forex and Crypto markets. Our institute specialized in teaching technical analysis, risk management, and offered services in trading and investment consultancy, as well as third-party risk management, contributing to the success of various trading groups.`,
  },
  {
    jobPosition: `CEO`,
    jobType: `Alpha Web | Hybrid`,
    jobDuration: `Oct 2021 - Feb 2022`,
    timeDuraton: `Full Time`,
    compnayName: "Alpha Web Digital Marketing Company",
    jobDescription: `As the founder and owner of my IT-based company specializing in digital marketing, I successfully led a team of over 5 employees and executed numerous impactful projects. Despite the company's success, I made the decision to sell my share due to immigration reasons, leaving behind a legacy of achievement and growth.`,
  },
];

const educatonContent = [
  {
    passingYear: "2020-2022",
    degreeTitle: "DBA in IT management ",
    instituteName: "London Business E-School",
  },
  {
    passingYear: "2017-2020",
    degreeTitle: "Masters in Financial Engineering",
    instituteName: "Tehran University Of Science and Culture",
  },
  {
    passingYear: "2013-2016",
    degreeTitle: "Bsc. in industrial Engineering",
    instituteName: "Khayyam University of Mashhad",
  },
  {
    passingYear: "2015",
    degreeTitle: "TOEFL",
    instituteName: "International",
  },
  {
    passingYear: "2018",
    degreeTitle: "IELTS",
    instituteName: "International",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div className="resume-row" key={i}>
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
              // End resume-row
            ))}
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
            <h3>Education & Skills</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div className="col-lg-7 ml-auto m-15px-tb">
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
