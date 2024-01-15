import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>For any inquiries, feel free to reach out</h4>
        <p>
          Always available for business inquiries if the right opportunity comes along,
          Feel free to reach out.
        </p>

        <ul>
          <li className="media">
            <i className="icon icon-envelope"></i>
            <span className="media-body">inquiry@mortezatech.site</span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-phone"></i>
            <span className="media-body">t.me/Web3ti_me</span>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .contact-info */}
    </>
  );
};

export default ContactInfo;
