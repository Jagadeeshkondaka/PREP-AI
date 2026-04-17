import { useState } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";

const Resources = () => {
  const [query, setQuery] = useState("");
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) {
      alert("Enter what you want to learn");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${API}/api/resources`,
        { query }
      );

      setResources(res.data.resources);

    } catch (err) {
      console.log(err);
      alert("Error fetching resources");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="bg-[#f1f5f9] p-6 text-center mb-10">
        <h1 className="text-4xl font-bold">
          AI Resource Finder 📚
        </h1>
        <p className="text-gray-600 mt-3">
          Tell us what you want to learn
        </p>
      </div>


      <div className="flex justify-center px-4">
        <div className="bg-white p-6 rounded-xl shadow w-full max-w-xl text-center">

          <input
            type="text"
            placeholder="e.g. React interview preparation"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <button
            onClick={handleSearch}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            {loading ? "Searching..." : "Find Resources"}
          </button>
        </div>
      </div>

   
      {resources.length > 0 && (
        <div className="mt-10 max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-6">

          {resources.map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow">

              <h2 className="font-semibold text-lg mb-2">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm mb-2">
                {item.description}
              </p>

              <p className="text-blue-600 text-sm">
                {item.link}
              </p>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Resources;