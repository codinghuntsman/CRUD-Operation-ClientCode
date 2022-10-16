import React, { useEffect, useState } from "react";
import User from "../User/User";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/user";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // -----------DELETE-------------------
  const handleDelete = (id) => {
    const proceed = window.confirm("Are sure you want to delete this data");
    if (proceed) {
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
          }
        });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:mx-10 bg-gray-200 p-5">
      {users.map((user) => (
        <User user={user} key={user._id} handleDelete={handleDelete}></User>
      ))}
    </div>
  );
};

export default AllUser;
