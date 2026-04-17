import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate=useNavigate();
   const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      alert("Please enter email and password");
      console.log("from",form)
      return;
    }

  try {
    const res = await axios.post(
     `${process.env.REACT_APP_API_URL}/api/auth/login`,
      form
    );

    localStorage.setItem("token", res.data.token);
    alert("Login Success");
    navigate('/')

  } catch (err) {
    alert(err.response?.data || "Login failed");
  }
};

  return (
    <div className="mt-[100px]">

      <div className="flex justify-center items-center bg-white px-6">
        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Login to your account
          </h2>

          
          <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>
            <input
            type="email"
              name="email"
              value={form.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          <div className="mb-4">
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              placeholder="Enter your password"
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between items-center text-sm mb-6">
            <label>
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>

            <p className="text-blue-600 cursor-pointer">
              Forgot Password?
            </p>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition" onClick={handleSubmit}>
            Login
          </button>

          <p className="text-center text-sm mt-5">
            Don’t have an account?{" "}
            <Link to = '/signup'>
              <span className="text-blue-600 cursor-pointer">
                Sign up
              </span>
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;