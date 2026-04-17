import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { name, email, password, confirmPassword } = form;

    // ✅ validation
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/signup`,
        { name, email, password }
      );

      alert(res.data.message || "Registered successfully");

      navigate("/login"); // ✅ redirect

    } catch (err) {
      console.log(err);
      alert(err.response?.data || "Error registering");
    }
  };

  return (
    <div className="mt-[100px] bg-gray-200">
      <div className="flex justify-center items-center bg-white px-6">
        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Create an account
          </h2>

          {/* NAME */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border px-4 py-3 rounded-lg"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border px-4 py-3 rounded-lg"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create password"
              className="w-full border px-4 py-3 rounded-lg"
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="mb-6">
            <label className="block text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"   // ✅ FIXED
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full border px-4 py-3 rounded-lg"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Sign Up
          </button>

          <p className="text-center text-sm mt-5">
            Already have an account?{" "}
            <Link to="/login">
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