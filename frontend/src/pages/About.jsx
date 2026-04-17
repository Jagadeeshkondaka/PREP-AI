import Navbar from "../layout/Navbar";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* HERO */}
      <div className="bg-[#f1f5f9] p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="text-blue-600">PrepAI</span>
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          An AI-powered platform to help you build better resumes, crack interviews,
          and accelerate your career growth.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Transforming Job Preparation with AI
          </h2>
          <p className="text-gray-600">
            PrepAI combines modern AI with practical tools to help students and job seekers
            improve their resumes, practice interviews, and access personalized learning resources.
          </p>
        </div>

        <img
          src="https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWl8ZW58MHx8MHx8fDA%3D"
          alt="AI"
          className="rounded-xl w-full object-cover shadow h-2/3 overflow-hidden"
        />
      </div>

      <div className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Makes Us Powerful
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">

          <div className="p-6 rounded-xl shadow bg-gray-50">
            <h3 className="font-semibold text-lg mb-2">AI Resume Analyzer</h3>
            <p className="text-gray-600">
              Get ATS score and actionable insights instantly.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow bg-gray-50">
            <h3 className="font-semibold text-lg mb-2">Interview Practice</h3>
            <p className="text-gray-600">
              Practice real questions and get AI feedback.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow bg-gray-50">
            <h3 className="font-semibold text-lg mb-2">Smart Resources</h3>
            <p className="text-gray-600">
              Discover personalized learning paths instantly.
            </p>
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          alt="Tech"
          className="rounded-xl shadow"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Built with Modern Technologies
          </h2>
          <p className="text-gray-600">
            PrepAI is built using the MERN stack with AI integration using Google Gemini API,
            ensuring performance, scalability, and intelligent insights.
          </p>
        </div>

      </div>

    
      <div className="bg-blue-600 text-white py-12 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Join Us on Your Career Journey 🚀
        </h2>

        <p className="max-w-xl mx-auto mb-6">
          Start improving your resume, practice interviews, and unlock your full potential today.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold">
          Get Started
        </button>

      
        <div className="mt-8 text-sm opacity-90">
          <p>Email: jagadeeshkondaka123@gmail.com</p>
        </div>
      </div>

    </div>
  );
};

export default About;