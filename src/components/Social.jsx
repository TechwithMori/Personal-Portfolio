import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaGithub />, link: "https://github.com/TechwithMori" },
  { Social: <FaTwitter />, link: "https://www.x.com/@MortezaPoursal1" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/mortezapoursaleh" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/morteza-poursaleh-283ab383" },
  { Social: <FaYoutube />, link: "https://www.youtube.com/channel/UCemWPszGXiXcqMBTVQ51TJw" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
