import React from "react";

const User = ({ user, handleDelete }) => {
  const { name, father, mother } = user;
  return (
    <div>
      <div>
        <div className="block rounded-lg shadow-lg bg-white pb-5 p-5">
          <h5 className="text-gray-900 text-xl leading-tight font-extrabold text-center pb-5">User Info</h5>
          <p className="text-gray-700">Name: {name}</p>
          <p className="text-gray-700">Father name: {father}</p>
          <p className="text-gray-700">Mother name: {mother}</p>
          <div className="flex justify-between">
            <button className="bg-gray-500 p-1 px-2 rounded-sm text-white hover:text-red-400" onClick={() => handleDelete(user._id)} type="button">
              Delete Info
            </button>
            <a href={`/update/${user._id}`} className="bg-gray-500 p-1 px-2 rounded-sm text-white hover:text-green-500">
              Update
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
