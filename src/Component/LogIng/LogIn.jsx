import { Helmet } from "react-helmet";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div>
        <Helmet><title>Login</title></Helmet>
        <div className=" min-h-screen bg-base-200">
  
          <div className="text-center md:p-3 lg:p-10 md:text-3xl lg:text-5xl md:font-semibold lg:font-extrabold"><p>Please LogIn</p></div>
          <div className="hero ">
  
            <div className="card shrink-0  lg:w-2/5 mx-auto  shadow-2xl bg-base-100">
            <form    className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    className="input input-bordered w-full py-2 px-4"
                    
                    placeholder="Enter Your Password"
                    name="password"
                    id=""
                    required
                  />
              
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Log In</button>
              </div>

            </form>
              
              <div className="p-5 flex justify-around gap-4 lg:flex-row md:flex-col flex-col">
                <button className="btn  btn-ghost border border-black "  ><FaGoogle className="text-2xl"></FaGoogle>LogIn with Google </button>
                <button className="btn btn-ghost border border-black "  ><FaGithub className="text-2xl"></FaGithub>LogIn with Github </button>
              </div>
              <div className="text-center py-5"><p>Do not Have an Account <Link className="text-blue-600" to="/register">Regester</Link></p></div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogIn;