import { FcGoogle } from "react-icons/fc";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, Uerror] = useUpdateProfile(auth);
  const navigate = useNavigate();

  let signUpError;
  if (error) {
    signUpError = error?.message;
  }

  if (user || googleUser) {
    navigate("/");
  }

  const handleRegister = async (event) => {
    event?.preventDefault();
    const displayName = event?.target?.name?.value;
    const email = event?.target?.email?.value;
    const password = event?.target?.password?.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    event.target.reset();
  };

  return (
    <div className="bg-gray-200 pt-5 min-h-screen">
      <div className="block p-6 rounded-lg shadow-lg bg-gray-100 mx-3 md:mx-auto lg:mx-auto max-w-md">
        <form onSubmit={handleRegister}>
          <h1 className="text-center text-lg lg:text-2xl information pb-5">
            <span className="text-orange-500">Re</span>
            <span className="text-indigo-500">gister</span>
          </h1>
          <div>
            <div className="form-group mb-6">
              <input
                type="name"
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
                placeholder="Full name"
                required
              />
            </div>
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              name="email"
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
              placeholder="Email address"
              required
            />
          </div>
          <div className="form-group mb-6">
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
              id="exampleInput126"
              placeholder="Password"
              required
            />
          </div>

          <button
            onClick={() => handleRegister()}
            type="submit"
            className="
            w-full
            px-6
            py-2.5
            bg-orange-400
            text-white
            text-sm
            uppercase
            rounded
            hover:bg-orange-500 transition duration-150 ease-in-out
            information"
          >
            register
          </button>
          {signUpError && <small className="font-serif font-bold text-red-500">Your email already exist</small>}
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
              rounded  hover:bg-orange-500 transition duration-150 ease-in-out
              information"
            >
              <span className="inline-block text-lg lg:text-xl pr-3">
                <FcGoogle></FcGoogle>
              </span>{" "}
              Login with google
            </button>
          </div>
          <p className="text-gray-800 mt-6 text-center font-serif">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out information">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
