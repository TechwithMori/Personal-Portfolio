import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaTwitter />, link: "https://www.x.com/@MortezaPoursal1" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/mortezapoursaleh" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/morteza-poursaleh-283ab383" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()} copyright{" "}
            <a
              href="https://www.upwork.com/freelancers/~01d9a4c68dffc39eb7"
              target="_blank"
              rel="noreferrer"
            >
              Tech with Mori
            </a>{" "}
            all right reserved
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
