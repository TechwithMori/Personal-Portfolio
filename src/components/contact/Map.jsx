import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.225892098051!2d28.674488483266998!3d41.02031364482434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa181a3947d1d%3A0xd9a82802dfc3b36e!2sAdonis%20Network%20(ADON)!5e0!3m2!1sen!2str!4v1703800139583!5m2!1sen!2str"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
