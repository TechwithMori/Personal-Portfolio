import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "team-1",
      desc: `  It is my great pleasure to write this testimonial for Morteza. I've had the pleasure of viewing his professional development, and can state with confidence that he is a motivated and responsible person with a high degree of integrity. His response to my emails is superfast and he is known for his quick turnaround. I'm happy to be working with him`,
      reviewerName: "Yoka Pheng Lee",
      designation: "Upwork Client",
    },
    {
      imageName: "team-2",
      desc: ` Working with you on our blockchain needs was a transformative experience. Your meticulous attention to detail and deep expertise brought a sense of confidence. Our operations now thrive seamlessly, and we're grateful for your exceptional service and genuine care throughout the process. Highly recommend your invaluable partnership!`,
      reviewerName: "Serkan Kaplan",
      designation: "CEO at Adonis Network",
    },
    {
      imageName: "team-4",
      desc: ` Your e-commerce solution revolutionized our business. The platform's seamless integration and user-friendly design have elevated our role and your attention to detail and commitment to delivering a tailored system exceeded our expectations. Grateful for your expertise and highly recommend your services.`,
      reviewerName: "Alireza Tork",
      designation: "CEO at Paydar Polymer Ozhan",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div key={i}>
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
