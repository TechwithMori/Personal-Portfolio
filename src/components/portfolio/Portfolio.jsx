import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = [];
const tabListContent = [
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-1.jpg",
        width: 400,
        height: 550,
        title: "London Business E-School",
        subTitle: "As a backend developer, I shaped London Business E-School's digital core, managing content and crafting a user-friendly portal for an enriched educational journey",
        alterText: "Backend Developer",
        portfolioLink:
          "https://londonbes.education/",
      },
      {
        img: "/img/portfolio/m-portfolio-2.jpg",
        width: 400,
        height: 400,
        title: "Islamic Azad University E-campus",
        subTitle: "As the backend developer at Islamic Azad University, I pioneered the learning management system, streamlined registration, and optimized student portal procedures, ensuring seamless integration across university systems",
        alterText: "Backend  Developer",
        portfolioLink:
          "https://ec.iau.ir/fa",
      },
      {
        img: "/img/portfolio/m-portfolio-3.jpg",
        width: 400,
        height: 700,
        title: "ADON Coin",
        subTitle: "As the blockchain developer for ADON Coin, I architectured its blockchain, core wallet, mining system, and explorer. Additionally, I crafted its BEP20 token, shaping a robust digital currency ecosystem",
        alterText: "Blockchain Master",
        portfolioLink:
          "https://adon.adonis.network/",
      },
      {
        img: "/img/portfolio/m-portfolio-4.jpg",
        width: 400,
        height: 400,
        title: "Setarepoonsad",
        subTitle: "As the full-stack developer for Setarepoonsad, I adhered to strict criteria due to its ties with IR-MCI, a governmental organization. Focused on delivering a new service, the project demanded precision and innovation",
        alterText: "Full-Stack Developer",
        portfolioLink:
          "https://setarepoonsad.ir/",
      },
      {
        img: "/img/portfolio/m-portfolio-5.jpg",
        width: 400,
        height: 700,
        title: "AstroBM",
        subTitle: "As the full-stack developer for AstroBM, I engineered the referral system, investment calculations, and comprehensive infrastructure. Additionally, I designed BEP20 and TRC20 tokens, enhancing the project's functionality and versatility",
        alterText: "Full-Stack and BlockCchain Developer",
        portfolioLink:
          "https://astrobm.com/",
      },
      {
        img: "/img/portfolio/m-portfolio-6.jpg",
        width: 400,
        height: 500,
        title: "Paydar Polymer Ozhan",
        subTitle: "As the WordPress developer and content manager for Paydar Polymer Ozhan, I crafted an engaging website, seamlessly integrating content to showcase the excellence of polymer industrial parts",
        alterText: "Wordpress Developer",
        portfolioLink:
          "https://www.paydarpolymerco.ir/en/",
      },
      {
        img: "/img/portfolio/m-portfolio-7.jpg",
        width: 400,
        height: 700,
        title: "BGcrypto",
        subTitle: "As the key architect for BGCrypto, I designed the foundational infrastructure for this blockchain project and crypto exchange. My role as a freelancer spanned backend development, exchange engine design, and blockchain implementation",
        alterText: "Backend and Blockchain Developer",
        portfolioLink:
          "https://bgcrypto.io/",
      },
      {
        img: "/img/portfolio/m-portfolio-8.jpg",
        width: 400,
        height: 550,
        title: "TNTIran",
        subTitle: "I stepped in as the WordPress developer for TNTIran Post and Express Org, resolving platform errors and optimizing the website. I successfully completed the previous developer's work, ensuring a seamless online presence",
        alterText: "Wordpress Developer",
        portfolioLink:
          "https://tntiran.com/en/",
      },
      {
        img: "/img/portfolio/m-portfolio-9.jpg",
        width: 400,
        height: 400,
        title: "Adonis Center",
        subTitle: "As the designer for Adonis Center's Shopify online store, I crafted a unique design from scratch. Ensuring continuous updates, I maintain a visually appealing and high-performing online shopping experience",
        alterText: "Shopify Developer",
        portfolioLink: "https://adonis.center/",
      },
      {
        img: "/img/portfolio/m-portfolio-10.jpg",
        width: 400,
        height: 550,
        title: "Adonis Exchange",
        subTitle: "As the full-stack developer for Adonis Exchange, after developing the exchange, I also designed both the admin and user portals, empowering clients to independently manage this Turkish-based crypto exchange. A comprehensive solution for seamless control and user engagement",
        alterText: "Full-Stack Developer",
        portfolioLink:
          "https://www.adonis.exchange/",
      },
      {
        img: "/img/portfolio/m-portfolio-11.jpg",
        width: 400,
        height: 400,
        title: "Londweiliran",
        subTitle: "As the former full-stack developer for Londweiliran, I conceptualized and built the entire platform from scratch, delivering the project over three years ago. A testament to enduring quality and innovation",
        alterText: "GSAP Developer",
        portfolioLink:
          "http://londweiliran.com/",
      },
      {
        img: "/img/portfolio/m-portfolio-12.jpg",
        width: 400,
        height: 700,
        title: "Adonis Network",
        subTitle: "As the Head of the Technical Team and full-stack developer for Adonis Network, I lead the creation and maintenance of the website, representing a diverse portfolio of dynamic subsidiary companies within the expansive Adonis Network holding",
        alterText: "Full-Stack Developer",
        portfolioLink:
          "https://adonis.network/",
      },
      {
        img: "/img/portfolio/m-portfolio-13.jpg",
        width: 400,
        height: 400,
        title: "Morteza Tech",
        subTitle: "Mortezatech, a showcase of my skills as a full-stack developer, blends creativity and functionality for a captivating online presence.",
        alterText: "Full-Stack Developer",
        portfolioLink:
          "https://mortezatech.site",
      },
      {
        img: "/img/portfolio/m-portfolio-14.jpg",
        width: 400,
        height: 700,
        title: "Manna Coin",
        subTitle: "As the freelance backend and blockchain developer for Manna Coin, I engineered the coin and its ETH20 token. A Bitcoin fork with a revamped, laptop-friendly mining system, ensuring accessibility and independence from traditional Bitcoin miners",
        alterText: "Freelance Backend and Blockchain Developer",
        portfolioLink:
          "https://manna.pw/",
      },
      {
        img: "/img/portfolio/m-portfolio-15.jpg",
        width: 400,
        height: 500,
        title: "Britapp",
        subTitle: "As the full-stack developer for Britapp, I crafted their website and implemented a dynamic CRM system. The focus was on seamlessly managing the company's licensees, enhancing efficiency and user experience",
        alterText: "Full-Stack Developer",
        portfolioLink:
          "https://britapp.com/",
      },
      {
        img: "/img/portfolio/m-portfolio-16.jpg",
        width: 400,
        height: 700,
        title: "Bitbegin Exchange",
        subTitle: "As the full-stack developer and leader of the development team for Bitbegin Exchange, I spearheaded the creation of the first registered crypto exchange in Georgia, building the platform from the ground up",
        alterText: "Full-Stack Developer",
        portfolioLink:
          "https://bitbegin.io/",
      },
      {
        img: "/img/portfolio/m-portfolio-17.jpg",
        width: 400,
        height: 550,
        title: "Neva Coin",
        subTitle: "As the freelance backend developer, I crafted the website for Neva Coin, contributing to their online presence in the crypto sphere with a seamless and functional platform",
        alterText: "Freelance Backend Developer",
        portfolioLink:
          "https://nevacoin.net/",
      },
      {
        img: "/img/portfolio/m-portfolio-18.jpg",
        width: 400,
        height: 400,
        title: "Web Motion",
        subTitle: "Behance Shot",
        alterText: "Web Motion",
        portfolioLink: "",
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter d-flex flex-wrap justify-content-start">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}
        <Gallery>
          {tabListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {tabContent.porftoliItems.map((val, i) => (
                    <div className="portfolio-box-01" key={i}>
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref, open }) => (
                            <div className="gallery-link">
                              <img
                                src={val.img}
                                alt="Childhood"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            </div>
                          )}
                        </Item>

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          ))}
        </Gallery>
        {/* End tabpanel */}
      </Tabs>
    </div>
  );
};

export default Portfolio;
