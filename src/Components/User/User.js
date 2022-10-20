import React from "react";

const User = ({ user, handleDelete }) => {
  const { name, father, mother } = user;
  return (
    <div>
      <div>
        <div className="block rounded-lg shadow-lg bg-gray-100 pb-5 p-5">
          <h5 className="text-gray-900 text-xl text-center pb-5 information">Student Info</h5>
          <p className="text-gray-700">
            <span className="text-black font-medium">Name:</span> {name}
          </p>
          <p className="text-gray-700">
            <span className="text-black font-medium">Father name:</span> {father}
          </p>
          <p className="text-gray-700">
            <span className="text-black font-medium">Mother name</span> {mother}
          </p>
          <div className="flex justify-between pt-4">
            {/* -----------There are three button is here, Update--Comment--Delete -----------*/}
            <a href={`/update/${user._id}`} className="bg-orange-400 text-white hover:bg-orange-500  p-1 px-2 text-xs md:text-sm lg:text-sm rounded-sm transition duration-200 ease-in-out">
              Edit
            </a>
            <a href={`/comment/${user._id}`} className="bg-orange-400 text-white hover:bg-orange-500 p-1 px-2 text-xs md:text-sm lg:text-sm rounded-sm transition duration-200 ease-in-out">
              Comment
            </a>
            <button
              className=" bg-red-400
              text-white hover:bg-red-500 p-1 px-2 text-xs md:text-sm lg:text-sm rounded-sm transition duration-200 ease-in-out"
              onClick={() => handleDelete(user._id)}
              type="button"
              title="Once you delete this info cannot undo again !!"
            >
              Delete Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
