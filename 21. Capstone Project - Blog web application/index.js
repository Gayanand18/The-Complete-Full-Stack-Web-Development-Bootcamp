import express from "express";

const app = express();
const port = 3000;

app.use(express.static('public'));
app.get("/", (req, res) => {
    res.render("index.ejs");
  });
  
  app.get("/about", (req, res) => {
    res.render("about.ejs");
  });
  
  app.get("/contact", (req, res) => {
    res.render("contact.ejs");
  });
  
  app.get("/blog/woke", (req,res) => {
    res.render("./blogs/woke.ejs");
  });

  app.get("/blog/artificial-intelligence", (req,res) => {
    res.render("./blogs/artificial_intelligence.ejs");
  });

  app.get("/blog/climate-change", (req,res) => {
    res.render("./blogs/climate_change.ejs");
  });
  
  app.get("/blog/social-media", (req,res) => {
    res.render("./blogs/impact_of_socialMedia.ejs");
  });

  app.get("/blog/mental-health-awareness", (req,res) => {
    res.render("./blogs/mental_health_awareness.ejs");
  });

  app.get("/blog/influence-of-technology", (req,res) => {
    res.render("./blogs/influence_of_technology.ejs");
  });

  app.get("/blog/renewable-energy", (req,res) => {
    res.render("./blogs/renewable_energy.ejs");
  });

  app.get("/blog/education", (req,res) => {
    res.render("./blogs/role_of_education.ejs");
  });

  app.get("/blog/women", (req,res) => {
    res.render("./blogs/role_of_women.ejs");
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  