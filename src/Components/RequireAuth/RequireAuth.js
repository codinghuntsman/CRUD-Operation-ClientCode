import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
  // ---------These are work according to order---------
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <p className="text-center font-extrabold font-sans">Loading...</p>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireAuth;
