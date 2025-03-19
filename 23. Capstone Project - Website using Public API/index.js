import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://riddles-api.vercel.app/random";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Render the home page with a riddle
app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    const riddle = result.data.riddle;
    const answer = result.data.answer;
    res.render("index.ejs", { riddle, answer, resultMessage: null, resultClass: null });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Load a new riddle
app.get("/loadRiddle", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    const riddle = result.data.riddle;
    const answer = result.data.answer;
    res.render("index.ejs", { riddle, answer, resultMessage: null, resultClass: null });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Handle answer submission
app.post("/answer", async (req, res) => {
  try {
    const userAnswer = req.body.inputAnswer.trim().toLowerCase();
    const currentRiddle = req.body.currentRiddle;
    const correctAnswer = req.body.currentAnswer.trim().toLowerCase();

    let resultMessage = "";
    let resultClass = "";

    if (userAnswer === correctAnswer) {
      resultMessage = "Correct! Well done!";
      resultClass = "text-bg-success";
    } else {
      resultMessage = `Incorrect! The correct answer is: ${correctAnswer}`;
      resultClass = "text-bg-danger";
    }

    res.render("index.ejs", { 
      riddle: currentRiddle, 
      answer: correctAnswer, 
      resultMessage, 
      resultClass 
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});