import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllUser from "./Components/AllUser/AllUser";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import PostMethod from "./Components/PostMethod/PostMethod";
import Review from "./Components/Review/Review";
import Update from "./Components/Update/Update";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/post" element={<PostMethod></PostMethod>}></Route>
        <Route path="/user" element={<AllUser></AllUser>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/update/:id" element={<Update></Update>}></Route>
      </Routes>
    </div>
  );
}

export default App;
