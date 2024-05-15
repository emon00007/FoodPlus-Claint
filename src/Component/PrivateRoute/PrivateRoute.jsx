import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import { useContext } from "react";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <div className="text-center "><span className="loading loading-infinity loading-lg"></span></div>
    }
    if (user) {
        return children;
    }

    // Redirect to login page with current location as the state
    return <Navigate to="/login" state={{ from: location.pathname }} />;

};
export default PrivateRoute;