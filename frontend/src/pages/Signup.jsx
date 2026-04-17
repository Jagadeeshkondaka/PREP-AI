import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
  console.log("Button clicked"); // 👈 add this

  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`,form);
    alert(res.data);
  } catch (err) {
    console.log(err.response.data);
    alert(err.response.data);
  }
};
  return (
    <div className="mt-[100px] bg-gray-200">

  
      <div className="flex justify-center items-center bg-white px-6 ">
        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Create an account
          </h2>

          <div className="mb-4">
            <label className="block text-sm mb-1">Full Name</label>
            <input
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>
            <input
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Password</label>
            <input
              name="password"
              placeholder="Create password"
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        
          <div className="mb-6">
            <label className="block text-sm mb-1">Confirm Password</label>
            <input
              name="password"
              placeholder="Confirm password"
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

    
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition" onClick={handleSubmit}>
            Sign Up
          </button>

          <p className="text-center text-sm mt-5">
            Already have an account?{" "}
            <Link to ='/login'>
              <span className="text-blue-600 cursor-pointer">
                Login
              </span>
            </Link>
            
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;