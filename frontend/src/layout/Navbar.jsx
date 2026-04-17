import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center px-10 py-5">

    
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          alt="Prep AI Logo"
          className="h-12 w-15 object-contain"
        />
        <h1 className="text-xl font-bold">Prep AI</h1>
      </div>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-8 items-center text-sm font-medium">
        <Link to="/">
          <p className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1">
            Home
          </p>
        </Link>

        <Link to="/resume">
          <p className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1">
            Resume Analyzer
          </p>
        </Link>

        <Link to="/interview">
          <p className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1">
            Interview Prep
          </p>
        </Link>

        <Link to="/resource">
          <p className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1">
            Resources
          </p>
        </Link>

        <Link to="/about">
          <p className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1">
            About Us
          </p>
        </Link>
      </div>

      {/* AUTH BUTTONS */}
      <div className="flex gap-3">
        {!token ? (
          <>
            <Link to="/login">
              <button className="px-4 py-2 border rounded-lg">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                Get Started
              </button>
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;