import React from "react";
import "./Home.css";
import image from "../../../src/images/Student-Services.png";

const Home = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="grid grid-cols-1 content-center pt-3 justify-items-center mx-4">
        <div className="pt-3">
          <h1 className="text-sm md:text-2xl lg:text-4xl text-center lg:tracking-wider font-medium information">Student Information With CRUD Operation</h1>
        </div>
        <div className="pt-5">
          <div className="relative right-[55px] lg:right-[200px]">
            <div>
              <div className="running flex justify-center items-center">
                <span className="inline-block w-3 h-3 rounded-full customColor"></span>
              </div>
            </div>
          </div>
          <div>
            <img className="w-[150px] h-[150px] lg:w-[210px] lg:h-[200px]" src={image} alt="student" />
          </div>
        </div>
        <h1 className="text-xl information">The frontend design is easiest for me</h1>
      </div>
    </div>
  );
};

export default Home;
