import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FcPortraitMode } from "react-icons/fc";

const Comment = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/user/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);
  const handlePostComment = (event) => {
    event.preventDefault();
    const message = event?.target?.message?.value;
    const name = event?.target?.name?.value;
    const user = { message, name };
    event.target.reset();
    const url = "http://localhost:5000/comment";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    navigate("/review");
  };
  return (
    <div>
      <form onSubmit={handlePostComment} className="bg-gray-200">
        <div className="flex flex-col justify-center items-center bg-white p-5 lg:p-12 rounded-md">
          <span className="flex items-center space-x-3">
            <span className="text-xl">
              <FcPortraitMode />
            </span>
            <button className="font-medium information" type="button" name="name" value={user.name} disabled>
              {user.name}
            </button>
          </span>

          <div className="flex justify-center items-center flex-col">
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-[300px] lg:w-[400px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
                required
              ></textarea>
              <div className="flex justify-between space-x-2 mt-2">
                <button className="w-40 font-bold p-1 rounded-sm bg-orange-400 text-white hover:bg-orange-500 animation duration-200 ease-in-out">Send</button>
                <a className="w-28 rounded-sm font-bold text-center p-1 bg-orange-400 text-white hover:bg-orange-500 animation duration-200 ease-in-out" href="/user">
                  Go back
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Comment;
