const express = require("express");
const router = express.Router();

const multer = require("multer");
const pdfParse = require("pdf-parse");
const axios = require("axios");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/analyze", upload.single("resume"), async (req, res) => {
  try {
    const data = await pdfParse(req.file.buffer);
    const text = data.text;

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent",
      {
        contents: [
          {
            parts: [
              {
                text: `
Analyze this resume like an ATS system.

Return ONLY JSON:
{
  "score": number,
  "summary": "text",
  "strengths": ["point"],
  "weaknesses": ["point"],
  "suggestions": ["point"]
}

Resume:
${text}
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

    const output =
      response.data.candidates[0].content.parts[0].text;

    const clean = output.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);

    res.json(parsed);

  } catch (err) {
    console.log("ERROR:", err.response?.data || err.message);
    res.status(500).json("Error analyzing resume");
  }
});

module.exports = router;