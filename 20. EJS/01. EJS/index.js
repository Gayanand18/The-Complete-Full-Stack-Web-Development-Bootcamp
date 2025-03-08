import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const day = new Date();
    const today = day.getDay();
    let type = "Weekday";
    let adv = "It's time to word hard!"
    if(today === 0 || today === 6){
        type = "Weekend";
        adv = "It's time to fun!!";
    }
    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});