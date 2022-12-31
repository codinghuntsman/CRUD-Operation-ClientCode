import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../../src/images/wave.svg";

const PostMethod = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = event?.target?.name?.value;
    const father = event?.target?.father?.value;
    const mother = event?.target?.mother?.value;
    const user = {
      name,
      father,
      mother,
    };
    event.target.reset();

    const confirmInsert = window.confirm("Do you want to insert this information ??");
    if (confirmInsert) {
      fetch(`${REACT_APP_SECRECT_SERVER_SIDE}/user`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      navigate("/user");
    }
  };
  return (
    <div className="bg-gray-200 pt-5 min-h-screen">
      <div className="block p-6 rounded-lg shadow-lg bg-gray-100 mx-3 md:mx-auto lg:mx-auto max-w-md">
        <form onSubmit={handleFormSubmit}>
          <h1 className="text-center text-lg lg:text-2xl information pb-5 space-x-1">
            <span className="text-orange-500">Insert</span>
            <span className="text-indigo-500"> Information</span>
          </h1>
          <div>
            <div className="form-group mb-6">
              <input
                type="text"
                name="name"
                className="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:font-serif"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Your full name"
                required
              />
            </div>
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              name="father"
              className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:font-serif"
              id="exampleInput125"
              placeholder="Father's name"
              required
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              name="mother"
              className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:font-serif"
              id="exampleInput126"
              placeholder="Mother's name"
              required
            />
          </div>
          <div className="pt-3">
            <button
              // onClick={() => setOpenModal(true)}
              type="submit"
              className="
              flex
              items-center
              justify-center
              w-full
              bg-orange-400
              text-white
              px-6
              py-2.5
              lg:text-sm
              text-xs
              uppercase
              rounded  hover:bg-orange-500 transition duration-150 ease-in-out
              information"
            >
              Submit
            </button>
          </div>
        </form>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default PostMethod;
