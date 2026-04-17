import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../layout/Navbar'

const Home = () => {
  return (
    <div className="bg-white text-[#0f172a]">
      <Navbar/>

  
      <div className="px-10 mt-10">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#f1f5f9] rounded-2xl p-10">

        
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Your AI Career Assistant to Get You{" "}
              <span className="text-blue-600">Job-Ready</span>
            </h1>

            <p className="text-gray-600 mt-5">
              Analyze your resume, practice interviews, and track your progress —
              all in one smart platform.
            </p>

            
            <div className="flex gap-4 mt-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow">
                🚀 Get Started Free
              </button>

              <button className="border px-6 py-3 rounded-xl flex items-center gap-2">
                ▶ Watch Demo
              </button>
            </div>
  
            <div className="flex items-center gap-4 mt-6">
              <div className="flex -space-x-2">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  alt="profile image"
                  className="w-8 h-8 rounded-full border"
                />
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  alt="profime image2"
                  className="w-8 h-8 rounded-full border"
                />
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="profile image3"
                  className="w-8 h-8 rounded-full border"
                />
              </div>

              <div>
                ⭐⭐⭐⭐⭐
                <p className="text-sm text-gray-500">
                  Loved by 10,000+ job seekers
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="hero"
              className="rounded-2xl w-full object-cover shadow hover:scale-105 transition"
            />
          </div>
        </div>
      </div>

      
      <div className="text-center mt-20 px-6">
        <p className="text-sm text-blue-600 font-medium mb-3">
          ✨ ALL-IN-ONE CAREER GROWTH PLATFORM
        </p>

        <h2 className="text-3xl md:text-4xl font-bold">
          Everything You Need to Accelerate Your Career
        </h2>

        <p className="text-gray-500 mt-3">
          Powerful AI tools designed to help you stand out, get hired,
          and achieve your dream career.
        </p>
      </div>

    
      <div className="grid md:grid-cols-3 gap-6 px-10 mt-12 mb-20">

     
        <div className="p-6 border rounded-xl hover:shadow-md transition">
          <div className="text-blue-600 text-3xl mb-4">📄</div>
          <Link to='/resume'>
            <h3 className="font-semibold text-lg">Resume Analyzer</h3>
            <p className="text-gray-500 mt-2">
              Get an ATS score, actionable feedback, and smart suggestions to improve your resume.
            </p>
            <p className="text-blue-600 mt-4 cursor-pointer">Learn more →</p>
          </Link>
        </div>

        <div className="p-6 border rounded-xl hover:shadow-md transition hover:cursor-pointer">
          <div className="text-green-500 text-3xl mb-4">💬</div>
          <Link to='/interview'>
            <h3 className="font-semibold text-lg">AI Interview Prep</h3>
            <p className="text-gray-500 mt-2">
              Practice role-based interviews with AI, get real-time feedback, and boost confidence.
            </p>
            <p className="text-blue-600 mt-4 cursor-pointer">Learn more →</p>
          </Link>
        </div>

       
        <div className="p-6 border rounded-xl hover:shadow-md transition hover:cursor-pointer">
          <div className="text-purple-500 text-3xl mb-4">📊</div>
          <Link to='/resource'>
            <h3 className="font-semibold text-lg">Smart Resource</h3>
            <p className="text-gray-500 mt-2">
              Find personalized learning resources using AI.
            </p>
            <p className="text-blue-600 mt-4 cursor-pointer">Learn more →</p>
          </Link>
          </div>

      </div>
     
<div className="bg-[#f1f5f9] mt-20">

  <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">

   
    <div>
      <h2 className="text-xl font-bold mb-3">PrepAI</h2>
      <p className="text-gray-500">
        Making every student job-ready with AI-powered tools.
      </p>
    </div>

    <div>
      <h3 className="font-semibold mb-3">Product</h3>
      <ul className="space-y-2 text-gray-500">
        <li>Home</li>
        <li>Resume Analyzer</li>
        <li>Interview Prep</li>
        <li>Resources</li>
      </ul>
    </div>

   
    <div>
      <h3 className="font-semibold mb-3">Resources</h3>
      <ul className="space-y-2 text-gray-500">
        <li>Company</li>
        <li>Blogs</li>
        <li>Community</li>
        <li>Careers</li>
      </ul>
    </div>

 
    <div>
      <h3 className="font-semibold mb-3">Legal</h3>
      <ul className="space-y-2 text-gray-500">
        <li>Privacy</li>
        <li>Terms</li>
      </ul>
    </div>

  </div>

 
  <div className="border-t text-center py-4 text-gray-500 text-sm">
    © {new Date().getFullYear()} PrepAI. All rights reserved.
  </div>

</div>

  </div>
  );
};

export default Home;