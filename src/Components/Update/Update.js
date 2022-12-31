import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [users, setUsers] = useState({});
  useEffect(() => {
    const url = `${process.env.REACT_APP_SECRECT_SERVER_SIDE}/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [id]);

  //   ------------------------------------------------------------
  const handleUpdate = (event) => {
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

    const confirmInsert = window.confirm("Do you want to Update your data !");
    if (confirmInsert) {
      const url = `${process.env.REACT_APP_SECRECT_SERVER_SIDE}/user/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      navigate("/user");
    }
  };

  return (
    <div>
      <section className="grid gap-x-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-3 md:mx-8 lg:mx-10 mt-2 md:mt-8 lg:mt-10 rounded-lg border border-indigo-500 bg-gray-200">
        <div className="flex justify-center items-center pt-2 lg:p-0">
          <div className="p-10 space-y-3 rounded-md bg-white">
            <h1 className="text-xs lg:text-xl font-serif font-extrabold">
              <span className="text-indigo-500">Your name:</span> {users.name}
            </h1>
            <h1 className="text-xs lg:text-xl font-serif font-extrabold">
              <span className="text-indigo-500">Father name:</span> {users.father}
            </h1>
            <h1 className="text-xs lg:text-xl font-serif font-extrabold">
              <span className="text-indigo-500">Mother name:</span> {users.mother}
            </h1>
          </div>
        </div>
        <div className="w-[280px] lg:w-[270px] mx-2">
          <form onSubmit={handleUpdate}>
            <p className="text-lg text-center lg:text-left md:text-lg lg:text-xl mt-5 information">
              <span className="text-orange-500">Update your</span>
              <span className="text-indigo-500"> Information</span>
            </p>
            <div className="mb-4 mt-3">
              <h1>Your name</h1>
              <input
                type="text"
                name="name"
                className="form-control block px-3 w-full py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-4">
              <h1>Father name</h1>
              <input
                type="text"
                name="father"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Father name"
                required
              />
            </div>
            <div className="mb-4">
              <h1>Mother name</h1>
              <input
                type="text"
                name="mother"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="mother name"
                required
              />
            </div>
            <div className="flex justify-between space-x-2 text-center pt-1 mb-12 pb-1">
              <button className="w-52 p-1 rounded-sm bg-orange-400 text-white hover:bg-orange-500 animation duration-200 ease-in-out">Update Info</button>

              <a className="w-32 p-1 rounded-sm bg-orange-400 text-white hover:bg-orange-500 animation duration-200 ease-in-out" href="/user">
                Go back
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Update;
