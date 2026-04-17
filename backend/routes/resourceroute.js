const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  try {
    const { query } = req.body;

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent",
      {
        contents: [
          {
            parts: [
              {
                text: `
Provide learning resources for: ${query}

Return ONLY JSON:
{
  "resources": [
    {
      "title": "name",
      "description": "short",
      "link": "url"
    }
  ]
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
    console.log(err.response?.data || err.message);
    res.status(500).json("Error fetching resources");
  }
});

module.exports = router;