// eslint-disable-next-line
import React from "react";
import image from "../../../src/images/my-img.png";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div>
      <nav
        className="
        relative
        w-full
        h-[100px]
        flex flex-wrap
        items-center
        justify-between
        py-4
        bg-gray-100
        text-gray-500
        hover:text-gray-700
        focus:text-gray-700
        shadow-lg
        navbar navbar-expand-lg navbar-light
        "
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className="
            navbar-toggler
            text-gray-500
            border-0
            hover:shadow-none hover:no-underline
            py-2
            px-2.5
            bg-transparent
            focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
            "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="w-6" role="tree" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
            <a
              className="
              flex
              items-center
              text-gray-900
              hover:text-gray-900
              focus:text-gray-900
              mt-2
              lg:mt-0
              mr-1
              "
              href="/#"
            >
              <h1 className="font-bold tracking-wider text-indigo-500 text-xl information">CRUD</h1>
            </a>
            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <a className="nav-link text-gray-500 hover:text-gray-700 underline hover:underline-offset-4 hover:decoration-4 focus:text-gray-700 p-0 information" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item p-2">
                <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 information" href="/post">
                  Insert Info
                </a>
              </li>
              <li className="nav-item p-2">
                <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 information" href="/user">
                  Students
                </a>
              </li>
              <li className="nav-item p-2">
                <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 information" href="/review">
                  Comments
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center relative">
            <button className="pr-5 font-serif">{user?.displayName && user?.displayName}</button>
            {user?.uid ? (
              <button className="information" onClick={logout}>
                Logout
              </button>
            ) : (
              <a className="mr-5 information" href="/login">
                Login
              </a>
            )}
            <div className="dropdown relative">
              <a className="dropdown-toggle flex items-center hidden-arrow" href="/#" id="dropdownMenuButton2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={image} className="rounded-full" style={{ height: 25, widows: 25 }} alt="me" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
