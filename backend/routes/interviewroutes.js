const express = require("express");
const router = express.Router();
const axios = require("axios");

// 🔹 Generate Questions
router.post("/generate", async (req, res) => {
  try {
    const { role } = req.body;

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent",
      {
        contents: [
          {
            parts: [
              {
                text: `
Generate 5 interview questions for a ${role} role.

Return ONLY JSON:
{
  "questions": ["q1", "q2", "q3"]
}
                `
              }
            ]
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": process.env.GEMINI_API_KEY
        }
      }
    );

    const text =
      response.data.candidates[0].content.parts[0].text;

    const clean = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);

    res.json(parsed);

  } catch (err) {
    console.log("ERROR:", err.response?.data || err.message);
    res.status(500).json("Error generating questions");
  }
});


// 🔹 Evaluate Answer
router.post("/evaluate", async (req, res) => {
  try {
    const { question, answer } = req.body;

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent",
      {
        contents: [
          {
            parts: [
              {
                text: `
Evaluate this interview answer.

Question: ${question}
Answer: ${answer}

Return ONLY JSON:
{
  "score": number,
  "feedback": "short feedback"
}
                `
              }
            ]
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": process.env.GEMINI_API_KEY
        }
      }
    );

    const text =
      response.data.candidates[0].content.parts[0].text;

    const clean = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);

    res.json(parsed);

  } catch (err) {
    console.log("ERROR:", err.response?.data || err.message);
    res.status(500).json("Error evaluating answer");
  }
});

module.exports = router;