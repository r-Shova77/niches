import React from 'react';

const Banner = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide pt-5 pt-lg-0"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://as2.ftcdn.net/v2/jpg/01/03/33/05/1000_F_103330516_UMuS92OH93uISFhUUbJ6S7I3cqHr7EbR.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
