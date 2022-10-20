import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  //-----------User Replace navigation method--------------
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // You should use useEffect callback function here otherwise returns error
  useEffect(() => {
    if (googleUser || user) {
      navigate(from, { replace: true });
    }
  }, [googleUser, user, navigate]);

  let passError;
  if (error) {
    passError = error?.message;
  }

  if (loading) {
    return <p className="text-center font-extrabold font-sans mt-20">Loading...</p>;
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event?.target?.email?.value;
    const password = event?.target?.password?.value;
    signInWithEmailAndPassword(email, password);
    event.target.reset();
  };

  return (
    <div className="bg-gray-300 pt-5 min-h-screen">
      <div className="block p-6 rounded-lg shadow-lg bg-gray-100 mx-3 md:mx-auto lg:mx-auto max-w-md">
        <div>
          <h1 className="text-center text-lg lg:text-2xl information pb-5">
            <span className="text-orange-500">Log</span>
            <span className="text-indigo-500">in</span>
          </h1>
          <form onSubmit={handleLogin}>
            <div className="form-group mb-6">
              <label htmlFor="exampleInputEmail2" className="form-label font-serif inline-block mb-2 text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="email"
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
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
              {/* {emailError && <small className="font-serif font-bold text-red-500">Your email is not found</small>} */}
            </div>
            <div className="form-group mb-6">
              <label htmlFor="exampleInputPassword2" className="form-label font-serif inline-block mb-2 text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
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
                id="exampleInputPassword2"
                placeholder="Password"
                required
              />
              {passError && <small className="font-serif font-bold text-red-500">Incorrect password</small>}
            </div>

            <div>
              <button
                type="submit"
                className="
              w-full
              bg-orange-400
              text-white
              px-6
              py-2.5
              text-xs
              lg:text-sm
              uppercase
              rounded  hover:bg-orange-500 transition duration-150 ease-in-out
              information"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="pt-3">
          <button
            onClick={() => signInWithGoogle()}
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
              rounded hover:bg-orange-500 transition duration-150 ease-in-out
              information"
          >
            <span className="inline-block text-lg lg:text-xl pr-3">
              <FcGoogle></FcGoogle>
            </span>{" "}
            Login with google
          </button>
          <p className="text-gray-800 mt-6 text-center font-serif">
            Do not have an account?{" "}
            <a href="/register" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out information">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
