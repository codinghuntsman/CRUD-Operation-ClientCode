import React, { useEffect, useState } from "react";
import ChildReview from "../ChildReview/ChildReview";

const Review = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/comment";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to delete this comment?");
    if (proceed) {
      const url = `http://localhost:5000/comment/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = user.filter((u) => u._id !== id);
            setUser(remaining);
          }
        });
    }
  };
  return (
    <div className="bg-gray-300 pt-3">
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 lg:mx-8">
        {user.map((u) => (
          <ChildReview key={u._id} user={u} handleDelete={handleDelete}></ChildReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
