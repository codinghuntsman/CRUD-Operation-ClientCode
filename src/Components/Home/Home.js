import React from "react";
import image from "../../../src/images/Student-Services.png";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <div className="mt-3">
          <h1 className="font-serif font-bold text-sm md:text-2xl lg:text-4xl">Student Information With CRUD Operation</h1>
        </div>
        <img className="w-[500px] h-[250px] lg:h-[350px]" src={image} alt="" />
      </div>
    </div>
  );
};

export default Home;
