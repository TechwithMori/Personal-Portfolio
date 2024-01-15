import React from "react";

const ServiceContent = [
  {
    icon: "icon-desktop",
    title: "Full-Stack Web Development",
    descriptions: `Crafting dynamic, responsive websites and web applications using
     HTML, CSS, JavaScript, Node.js, React.js, ensuring seamless user experiences and functionality.`,
  },
  {
    icon: "icon-mobile",
    title: "Blockchain Solutions",
    descriptions: `Specializing in decentralized applications, I develop smart contracts in Solidity,
     advancing businesses into the blockchain era with secure and transparent solutions.`,
  },
  {
    icon: "icon-target",
    title: "E-commerce Customization",
    descriptions: `Enhancing online businesses with expertise in WordPress and Shopify,
     tailoring e-commerce platforms for optimal performance, user engagement, and scalable growth.`,
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className="col-md-6 col-lg-4 my-3" key={i}>
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
