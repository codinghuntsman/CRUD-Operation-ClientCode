import React from "react";
import image from "../../../src/images/my-img.png";
import { BsFillTrashFill } from "react-icons/bs";

const ChildReview = ({ user, handleDelete }) => {
  const { name, message } = user;
  return (
    <div className="bg-gray-200 rounded-md">
      <section className="text-center">
        <div className="md:mb-0 shadow-xl">
          <div className="flex justify-center mb-6">
            <img src={image} alt="my" className="rounded-full shadow-lg w-20" />
          </div>
          <h5 className="text-xl mb-4 information">{name}</h5>
          <h6 className="font-semibold text-indigo-500 mb-4">Web Developer</h6>
          <div className="lg:w-[410px]">
            <p className="overflow-y-scroll overflow-x-hidden h-20 text-xs lg:text-sm text-justify p-3 lg:p-5 font-serif">{message}</p>
          </div>
          <div className="pt-2">
            <div className="flex justify-start">
              <span className="inline-block p-1 text-red-500 bg-gray-200 rounded-md ml-1 hover:bg-slate-300" onClick={() => handleDelete(user._id)}>
                <BsFillTrashFill />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChildReview;
