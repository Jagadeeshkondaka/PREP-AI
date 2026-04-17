import { useState } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";

const Resume = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please upload a PDF");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/resume/analyze`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(res.data);
    } catch (err) {
      console.log(err);
      alert("Error analyzing resume");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* HERO */}
      <div className="bg-[#f1f5f9] p-6 rounded-2xl mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          AI Resume Analyzer to Make You{" "}
          <span className="text-blue-600">Job-Ready</span>
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Get instant ATS score, personalized feedback, and actionable suggestions
          to improve your resume and stand out to recruiters.
        </p>

        <button
          onClick={() =>
            document
              .getElementById("analyzer")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Analyze My Resume 🚀
        </button>
      </div>

     
      <div id="analyzer" className="grid grid-cols-2 gap-6 p-10">

       
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-3">Upload Resume</h2>

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full border p-3 rounded-lg"
          />

          <button
            onClick={handleAnalyze}
            className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>
        </div>

     
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">ATS Analysis</h2>

          {!result ? (
            <p className="text-gray-500">
              Upload a resume to see your ATS score and feedback
            </p>
          ) : (
            <>
        
              <div className="flex justify-center mb-6">
                <div className="w-36 h-36 rounded-full border-[10px] border-blue-500 flex items-center justify-center text-4xl font-bold text-blue-600">
                  {result.score}%
                </div>
              </div>

             
              <p className="text-gray-700 mb-4">
                <strong>Summary:</strong> {result.summary}
              </p>

              <div className="mb-4">
                <h3 className="font-semibold text-green-600">Strengths</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {result.strengths?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-red-600">Weaknesses</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {result.weaknesses?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

            
              <div>
                <h3 className="font-semibold text-blue-600">Suggestions</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {result.suggestions?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default Resume;