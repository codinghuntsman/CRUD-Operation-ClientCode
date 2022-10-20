import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllUser from "./Components/AllUser/AllUser";
import Comment from "./Components/Comment/Comment";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import PostMethod from "./Components/PostMethod/PostMethod";
import Register from "./Components/Register/Register";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Review from "./Components/Review/Review";
import Update from "./Components/Update/Update";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/post"
          element={
            <RequireAuth>
              <PostMethod></PostMethod>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/user"
          element={
            <RequireAuth>
              <AllUser></AllUser>
            </RequireAuth>
          }
        ></Route>
        <Route path="/comment/:id" element={<Comment></Comment>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/update/:id" element={<Update></Update>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
