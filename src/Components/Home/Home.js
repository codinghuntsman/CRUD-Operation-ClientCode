import React from "react";
import "./Home.css";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import image from "../../../src/images/Student-Services.png";

const Home = () => {
  return (
    <div className="bg-gray-100 h-[400px] lg:h-[500px] mx-3 lg:mx-10 mt-3 md:mt-5 lg:mt-10 rounded-lg">
      <div className="grid grid-cols-1 content-center pt-3 justify-items-center mx-4">
        <div className="pt-3">
          <h1 className="text-sm md:text-2xl lg:text-4xl text-center lg:tracking-wider font-medium information">
            <span className="text-indigo-500">Student Information</span>
            <span className="text-green-600"> With</span>
            <span className="text-orange-500"> CRUD Operation</span>
          </h1>
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
        <h1 className="text-xs lg:text-xl information text-indigo-600">The frontend design is easiest for me</h1>
      </div>
      <div className="flex justify-center items-center bg-base-200 border-t border-base-300 mt-[80px] lg:mt-[100px]">
        <div className="flex space-x-3 mt-2 lg:mt-2">
          <a href="https://stackoverflow.com/users/18383895/md-sajedul-islam?tab=profile" target="_blank" rel="noreferrer">
            <span className="text-xl lg:text-4xl text-orange-600  hover:text-green-600 animation duration-150 ease-in-out">
              <BsStackOverflow />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/md-sajedul-islam-a4b073241/" target="_blank" rel="noreferrer">
            <span className="text-xl lg:text-4xl text-orange-600  hover:text-green-600 animation duration-150 ease-in-out">
              <AiFillLinkedin />
            </span>
          </a>
          <a href="https://github.com/codinghuntsman?tab=repositories" target="_blank" rel="noreferrer">
            <span className="text-xl lg:text-4xl text-orange-600  hover:text-green-600 animation duration-150 ease-in-out">
              <FaGithub />
            </span>
          </a>
          <a href="https://www.facebook.com/mdshajedul.islam" target="_blank" rel="noreferrer">
            <span className="text-xl lg:text-4xl text-orange-600 hover:text-green-600 animation duration-150 ease-in-out">
              <FaFacebookSquare />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
