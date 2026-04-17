import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // ✅ Get token
  const token = localStorage.getItem("token");

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center px-10 py-5">
      <h1 className="text-2xl font-semibold hover:cursor-not-allowed ">✨ PREP AI</h1>

      <div className="hidden md:flex gap-8 items-center text-sm font-medium">
        <Link to='/'>
          <p className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 hover:cursor-pointer">Home</p>
        </Link>

        <Link to='/resume'>
          <p className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 hover:cursor-pointer">Resume Analyzer</p>
        </Link>

        <Link to='/interview'>
          <p className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 hover:cursor-pointer">Interview Prep</p>
        </Link>

        <Link to='/resource'>
          <p className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 hover:cursor-pointer">Resources ▾</p>
        </Link>

        <Link to='/about'>
          <p className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 hover:cursor-pointer">About Us</p>
        </Link>
      </div>

      {/* RIGHT SIDE BUTTONS */}
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