import React from "react";
import image_1 from "../../../src/images/image-1.png";
import image_2 from "../../../src/images/image-2.png";
import image_3 from "../../../src/images/image-3.png";

const Banner = () => {
  return (
    <div>
      <div id="carouselDarkVariant" className="carousel slide carousel-fade carousel-dark relative overflow-hidden" data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="1" aria-label="Slide 1"></button>
          <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="2" aria-label="Slide 1"></button>
        </div>

        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img src={image_1} className="block w-full" alt="Motorbike Smoke" />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl font-body text-white">Secondary School Batch</h5>
              <p className="font-body text-white">This schooling system have been provided some special offers.</p>
            </div>
          </div>

          <div className="carousel-item relative float-left w-full">
            <img src={image_2} className="block w-full" alt="Mountaintop" />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl font-body text-white">Higher Secondary Batch</h5>
              <p className="font-body text-white">Higher secondary batch have been provided awesome fund.</p>
            </div>
          </div>

          <div className="carousel-item relative float-left w-full">
            <img src={image_3} className="block w-full" alt="Woman Reading a Book" />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl font-body text-white">Graduate Booster Batch</h5>
              <p className="font-body text-white">Our graduation system have been provided some quality full offers.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
