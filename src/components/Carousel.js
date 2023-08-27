import React from "react";

const Carousel = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide ">
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <img src="..." className="d-block w-100 active" alt="..." /> */}
            Good boba latte, worth the money!
            <p>xyz</p>
          </div>
          <div className="carousel-item active">
            {/* <img src="..." className="d-block w-100 active" alt="..." /> */}
            Loved how light these teas are. Enjoyable and refreshing. Have to
            try every flavor of
            <p>xyz</p>
          </div>
          <div className="carousel-item active">
            {/* <img src="..." className="d-block w-100 active" alt="..." /> */}
            Extremely satisfied with my purchase.I love matcha and this drink
            did not disappoint
            <p>xyz</p>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
