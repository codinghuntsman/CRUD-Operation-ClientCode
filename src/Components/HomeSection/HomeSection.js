import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import StudentDescription from "../StudentDescription/StudentDescription";

const HomeSection = () => {
  return (
    <div>
      <Banner></Banner>
      <Home></Home>
      <StudentDescription></StudentDescription>
      <Footer></Footer>
    </div>
  );
};

export default HomeSection;
