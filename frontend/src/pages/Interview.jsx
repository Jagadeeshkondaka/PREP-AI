import { useState } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";
import API from "../config";

const Interview = () => {
  const [role, setRole] = useState("");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleGenerate = async () => {
    if (!role) {
      alert("Enter a role");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${API}/api/interview/generate`,
        { role }
      );

      const formatted = res.data.questions.map((q) => ({
        question: q,
        answer: "",
        feedback: null
      }));

      setQuestions(formatted);

    } catch (err) {
      console.log(err);
      alert("Error generating questions");
    } finally {
      setLoading(false);
    }
  };


  const handleEvaluate = async (index) => {
    const item = questions[index];

    if (!item.answer) {
      alert("Write an answer first");
      return;
    }

    try {
      const res = await axios.post(
        `${API}/api/interview/evaluate`,
        {
          question: item.question,
          answer: item.answer
        }
      );

      const updated = [...questions];
      updated[index].feedback = res.data;

      setQuestions(updated);

    } catch (err) {
      console.log(err);
      alert("Error evaluating answer");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

     
      <div className="bg-[#f1f5f9] p-6 text-center mb-10">
        <h1 className="text-4xl font-bold">
          AI Interview Preparation 🚀
        </h1>
        <p className="text-gray-600 mt-3">
          Practice and improve your interview skills
        </p>
      </div>

    
      <div className="flex justify-center">
        <div className="bg-white p-6 rounded-xl shadow w-full max-w-xl text-center">

          <input
            type="text"
            placeholder="Enter role (Frontend Developer)"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <button
            onClick={handleGenerate}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            {loading ? "Generating..." : "Generate Questions"}
          </button>
        </div>
      </div>

      {questions.length > 0 && (
        <div className="mt-10 max-w-3xl mx-auto px-6">
          <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-xl font-semibold mb-4 text-center">
              Interview Questions
            </h2>

            {questions.map((item, i) => (
              <div key={i} className="mb-6 border p-4 rounded-lg">

                <p className="font-semibold mb-2">
                  {i + 1}. {item.question}
                </p>

                <textarea
                  placeholder="Write your answer..."
                  value={item.answer}
                  onChange={(e) => {
                    const updated = [...questions];
                    updated[i].answer = e.target.value;
                    setQuestions(updated);
                  }}
                  className="w-full border p-3 rounded-lg mb-3"
                />

                <button
                  onClick={() => handleEvaluate(i)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  Evaluate Answer
                </button>

                {item.feedback && (
                  <div className="mt-3 bg-gray-100 p-3 rounded-lg">
                    <p><strong>Score:</strong> {item.feedback.score}</p>
                    <p><strong>Feedback:</strong> {item.feedback.feedback}</p>
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>
      )}
    </div>
  );
};

export default Interview;