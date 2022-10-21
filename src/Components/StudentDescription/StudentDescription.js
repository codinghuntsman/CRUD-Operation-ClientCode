import React from "react";
import image from "../../../src/images/img.png";

const StudentDescription = () => {
  return (
    <div>
      <div>
        <h1 className="text-sm md:text-lg text-center lg:text-4xl mt-3 md:mt-5 lg:mt-10 information">
          <span className="text-orange-500">Student</span>
          <span className="text-indigo-500"> Description</span>
        </h1>
      </div>
      <div className="bg-gray-100 mx-3 lg:mx-10 mt-2 rounded-lg p-4">
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <img className="w-auto md:w-auto lg:w-[700px] rounded-lg" src={image} alt="avatar" />
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[550px]">
              <p className="text-justify font-serif font-bold text-gray-700 text-sm lg:text-base">
                Lisa Delpit says that children come to school with different kinds of knowledge and different strengths to build on. What we tend to think of as basic skills, such as knowledge of
                letter names or recognition of numerals, are inherent in the upbringing of middle class kids. They may not be basic to children from non-mainstream or non-middle class backgrounds. She
                describes her experience when, in her early years of teaching, one of her first graders was judged to be “failing” in math, unable to calculate a total amount of money represented by
                pictures of coins on a worksheet. Delpit was advised to refer her student for placement in special education. Before doing so, she visited his home and discovered that because his
                mother was suffering with a substance addiction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDescription;
