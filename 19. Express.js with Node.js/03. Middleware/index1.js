import express from "express";
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post("/submit", (req, res) => {
  const sname = req.body.street;
  const pname = req.body.pet;
  res.send("Street Name: " + sname + "<br/> Pet Name: "+ pname+ " <br/>Form submitted successfully!");
  console.log(req.body);
}
);