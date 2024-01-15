import React, { useState } from "react";
import Modal from "react-modal";
import Contact from "../../components/contact/Contact";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="row">
        <div className="col-md-6 m-15px-tb">
          <div className="blog-grid" onClick={toggleModalOne}>
            <div className="blog-img">
              <a>
                <img src={`img/blog/blog-4.jpg`} alt="blog post"></img>
              </a>
            </div>
            <div className="blog-info">
              <div className="meta">27/DEC/2023 - By Morteza</div>
              <h6>
                <a>
                  Crafting Digital Identities: A Tale of Two Portfolio Websites
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-1 */}

        <div className="col-md-6 m-15px-tb">
          <div className="blog-grid" onClick={toggleModalTwo}>
            <div className="blog-img">
              <a>
                <img src={`img/blog/blog-2.jpg`} alt="blog post"></img>
              </a>
            </div>
            <div className="blog-info">
              <div className="meta">09/DEC/2023 - BY Morteza</div>
              <h6>
                <a>
                 Navigating the Technological Landscape as a Full-Stack Developer
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-2 */}

        <div className="col-md-6 m-15px-tb">
          <div className="blog-grid" onClick={toggleModalThree}>
            <div className="blog-img">
              <a>
                <img src={`img/blog/blog-3.jpg`} alt="blog post"></img>
              </a>
            </div>

            <div className="blog-info">
              <div className="meta">18/NOV/2023 - BY Morteza</div>
              <h6>
                <a>
                 Decoding Blockchain: Unraveling the Mysteries
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-3 */}

        <div className="col-md-6 m-15px-tb">
          <div className="blog-grid" onClick={toggleModalFour}>
            <div className="blog-img">
              <a>
                <img src={`img/blog/blog-1.jpg`} alt="blog post"></img>
              </a>
            </div>

            <div className="blog-info">
              <div className="meta">30/OCT/2023 - BY Morteza</div>
              <h6>
                <a>
                 The Art of E-commerce Customization: A Full-Stack Approach
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-4 */}
      </div>
      {/* End .row */}

      {/* Start Modal for Blog-1 */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-4.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                     Crafting Digital Identities: A Tale of Two Portfolio Websites
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-5.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY Morteza</label>
                        <span>27 DEC 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                     Embarking on the exciting endeavor of developing two distinct portfolio websites, each with its unique purpose and target audience, provided an illuminating journey into the dynamic realm of digital identities. The dichotomy of crafting one website for myself and another for a seasoned graphic designer underscored the diverse challenges and creative opportunities present in the field of web development.
                    </p>
                    <p>
                    The process began with a deep exploration of individual personalities and professional aspirations. For my personal portfolio, the objective was to create a digital space that authentically represented my skills, experiences, and personal brand. Simultaneously, crafting a portfolio for the graphic designer involved understanding their distinct style, showcasing a rich tapestry of visual work, and ensuring that the website served as an effective digital showcase for potential clients and collaborators.
                    </p>
                    <h4>Harmony of Design and Technology: Crafting Digital Narratives as a Full-Stack Developer</h4>
                    <p>
                     As a full-stack developer, tailoring user experiences was a paramount consideration. The challenge was not only to ensure a seamless and intuitive navigation experience but also to integrate interactive elements that resonate with the audience. Balancing aesthetic appeal with functionality became a central focus, and the development process unfolded as a delicate dance between design and technology.
                    </p>
                    <p>
                     Ultimately, the completion of both portfolio websites marked a triumph in overcoming the challenges inherent in capturing individual creativity in the digital sphere. From coding the backend infrastructure to fine-tuning the front-end design elements, this journey highlighted the intricate interplay between technical expertise and the expression of unique professional narratives. The result is not just a pair of websites but digital reflections of personal and professional stories, encapsulating the essence of two distinct identities within the vast landscape of the internet.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Digital Identities</li>
                    <li href="#">Web Development</li>
                    <li href="#">Portfolio Websites</li>
                    <li href="#">Full-Stack Developer</li>
                    <li href="#">User Experiences</li>
                    <li href="#">Aesthetic Appeal</li>
                    <li href="#">Personal Narratives</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-1 */}

      {/* Start Modal for Blog-2 */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-2.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                     Navigating the Technological Landscape as a Full-Stack Developer
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-7.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY Morteza</label>
                        <span>07 DEC 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                     Embarking on the journey of a full-stack developer feels like traversing a technological frontier, where the ever-evolving landscape of programming languages, frameworks, and cutting-edge technologies becomes my playground. From the robust realms of Python-backed back-end development to crafting sleek interfaces with JavaScript, Node.js, and React.js, this narrative unravels the dynamic skill set I've cultivated in a profession that thrives on diversity and innovation.
                    </p>
                    <p>
                     My coding odyssey takes root in the backend realm, where Python orchestrates resilient structures, ensuring the foundation of secure and scalable applications. Simultaneously, the world of front-end design unfolds, with the dynamic duo of Node.js and React.js creating interfaces that seamlessly marry aesthetics with user intuitiveness.
                    </p>
                    <h4>Beyond Code: Crafting Innovation in Web Development's Ever-Evolving Tapestry</h4>
                    <p>
                     Delving deeper, Solidity joins the ensemble for blockchain development, empowering me to shape decentralized applications with precision. The canvas broadens as HTML5 and CSS3 weave their magic, allowing me to craft visually stunning and responsive user interfaces. The backstage of data management witnesses the synergy of MySQL and MongoDB, guided by the reliability of Linux and Docker.
                    </p>
                    <p>
                     As my journey unfolds, GitHub becomes my collaborative haven, offering version control for projects that thrive on collective ingenuity. The MERN stack—MongoDB, Express.js, React.js, Node.js—becomes my go-to for comprehensive web development, embodying the seamless interaction between client and server. GSAP steps in for animation, adding a dynamic flair to user experiences and showcasing the fusion of creativity and technology.
                    </p>
                    <p>
                     Deployment and hosting enter the narrative with the proficiency in NginX, Apache, and the embrace of cloud services like Digital Ocean and Google Cloud. My versatility extends to content management, where I seamlessly navigate platforms like WordPress and Shopify, meeting diverse client needs. Tools like cPanel, FileZilla, BitVise, WinSCP, and Cloudflare become my trusted allies, ensuring streamlined development and robust security measures.
                    </p>
                    <p>
                     In my coding sanctuary, VSCode, Remix IDE, and Sublime Text stand as witnesses to countless lines of code. The Ethereum Virtual Machine (EVM) signifies my foray into blockchain and smart contract development, a testament to my commitment to staying at the forefront of innovative technologies.
                    </p>
                    <p>
                     This narrative is not just about the languages and stacks but a reflection of my journey—a journey that encapsulates the exhilaration of pushing technological boundaries, the balance between challenges and rewards, and the continuous pursuit of innovation in the ever-evolving world of web development.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Full-Stack Developer</li>
                    <li href="#">Python</li>
                    <li href="#">Node.js</li>
                    <li href="#">React.js</li>
                    <li href="#">Solidity</li>
                    <li href="#">MERN Stack</li>
                    <li href="#">Blockchain Development</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-2 */}

      {/* Start Modal for Blog-3 */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-3.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                     Decoding Blockchain: Unraveling the Mysteries
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-3.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY Morteza</label>
                        <span>18 NOV 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                     Blockchain technology stands as a transformative juggernaut, reshaping industries and rewriting the very notion of trust in our increasingly digital world. In this insightful blog post, we embark on a profound exploration of the intricate realm of blockchain, peeling back the layers of mystery that enshroud its complexities. As the narrative unfolds, the aim is to demystify blockchain, bringing clarity to its fundamental principles and revealing the pivotal role it assumes in the development of decentralized applications and cryptocurrencies.
                    </p>
                    <p>
                     The journey begins with a deep dive into the core principles that underpin blockchain technology. From its foundational concept of a distributed ledger to the consensus mechanisms that validate transactions, readers will gain a comprehensive understanding of the inner workings of this revolutionary technology. Each layer of complexity is unraveled, illuminating the mechanisms that contribute to the security, transparency, and immutability that define blockchain.
                    </p>
                    <h4>Beyond Theory: Unveiling Blockchain's Real-World Impact on Industries and Trust</h4>
                    <p>
                     Moving beyond theoretical discussions, this blog post delves into the practical applications of blockchain technology in the real world. Readers will explore how blockchain is not just a theoretical construct but a powerful tool with tangible impact across diverse industries. From supply chain management to financial transactions and beyond, the narrative sheds light on how blockchain is actively reshaping the future of digital interactions, introducing unprecedented levels of efficiency, security, and transparency.
                    </p>
                    <p>
                     In conclusion, this exploration of blockchain serves as a beacon for readers seeking insights into the potential and power of this transformative technology. It not only demystifies the complexities surrounding blockchain but also invites readers to envision the possibilities it holds for the future. As industries continue to evolve in the digital age, blockchain stands as a cornerstone, challenging traditional paradigms and paving the way for a new era of trust and innovation.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Blockchain Technology</li>
                    <li href="#">Decentralized Applications</li>
                    <li href="#">Cryptocurrencies</li>
                    <li href="#">Distributed Ledger</li>
                    <li href="#">Consensus Mechanisms</li>
                    <li href="#">Real-World Applications</li>
                    <li href="#">Trust and Innovation</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-3 */}

      {/* Start Modal for Blog-4 */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-1.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                     The Art of E-commerce Customization: A Full-Stack Approach
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-6.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY Morteza</label>
                        <span>30 OCT 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                     Navigating the expansive realm of e-commerce requires more than just functional websites—it demands an artistic touch. In this blog post, we embark on an exploration of the intricate art of e-commerce customization, viewing it through the lens of a full-stack developer. At the heart of this journey are platforms like WordPress and Shopify, each serving as a canvas upon which digital masterpieces are crafted. The narrative unfolds the meticulous process of tailoring these platforms to not just meet but enhance unique brand identities, highlighting the artistry required to stand out in the crowded online marketplace.
                    </p>
                    <p>
                     The canvas of e-commerce customization extends beyond mere aesthetics. It delves into the user interface, a critical element in the art of online shopping experiences. From intuitive navigation to visually appealing layouts, the blog post navigates through the choices and considerations that shape user interactions. The goal is to provide readers with insights into the thought process that goes into optimizing user interfaces, ensuring that every click is a step toward an engaging and seamless shopping journey.
                    </p>
                    <h4>Harmony in Transaction: Mastering Robust Payment Integration in E-commerce Customization</h4>
                    <p>
                     An essential chapter in the art of e-commerce customization is the integration of robust payment systems. As the narrative progresses, readers gain a deeper understanding of the intricacies involved in implementing secure and efficient payment gateways. The blog post explores how a full-stack developer orchestrates the integration, aligning the functionality seamlessly with the artistic design. The fusion of security and user-friendly design is emphasized, underscoring the importance of a harmonious balance between art and functionality.
                    </p>
                    <p>
                     In conclusion, this exploration of the art of e-commerce customization paints a vivid picture of the full-stack developer's role in transforming online stores into digital masterpieces. It goes beyond the technicalities, capturing the essence of the nuanced approach required in this dynamic intersection of art and functionality. As the e-commerce landscape evolves, this blog post serves as a guide for those looking to embark on their own artistic journey in crafting unique and captivating online shopping experiences.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">E-commerce Customization</li>
                    <li href="#">Full-Stack Developer</li>
                    <li href="#">WordPress</li>
                    <li href="#">Shopify</li>
                    <li href="#">User Interface Optimization</li>
                    <li href="#">Payment Systems Integration</li>
                    <li href="#">Art and Functionality in E-commerce</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-4 */}
    </>
  );
};

export default News;
