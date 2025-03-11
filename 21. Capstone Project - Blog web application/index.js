import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";
import path from "path";
import ejs from "ejs";  // Import EJS module
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const app = express();
const port = 3000;
const recentBlogs = [];
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname("blogTemplate.ejs");

// Serve static files from the "blogs" directory
app.use("/blogs", express.static(path.join(__dirname, "blogs")));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

const blogsFilePath = path.join(__dirname, 'blogs.json'); // JSON file to store blog metadata

// Function to get recent blogs
// Function to get recent blogs and filter out missing files
function getRecentBlogs() {
  if (!fs.existsSync(blogsFilePath)) return [];
  let blogs = JSON.parse(fs.readFileSync(blogsFilePath));

  // Filter out blogs whose files do not exist
  blogs = blogs.filter(blog => fs.existsSync(path.join(__dirname, "blogs", path.basename(blog.url))));

  // Update the JSON file to reflect only existing blogs
  fs.writeFileSync(blogsFilePath, JSON.stringify(blogs, null, 2));

  return blogs;
}

// Function to save blog metadata
function saveBlogMetadata(blog) {
  const blogs = getRecentBlogs();
  blogs.unshift(blog); // Add new blog to the top
  fs.writeFileSync(blogsFilePath, JSON.stringify(blogs.slice(0, 5), null, 2)); // Store only the latest 5 blogs
}


app.get("/", (req, res) => {
  const recentBlogs = getRecentBlogs();
  res.render("index.ejs", { recentBlogs });
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
  app.get("/recent-blogs", (req, res) => {
    const recentBlogs = getRecentBlogs();
    res.render("recentBlogs.ejs", { recentBlogs });
  });
  


  app.post('/submit-blog', upload.single('file'), (req, res) => {
    const { title, author, postDate, content } = req.body;
    const blogFilename = `${title.replace(/\s+/g, '_').toLowerCase()}-${Date.now()}.html`;

    // Save metadata
    const blogMetadata = {
        title,
        url: `/blogs/${blogFilename}`,
        image: req.file ? `/uploads/${req.file.filename}` : "/images/default.jpeg",
        postDate,
        author
    };
    saveBlogMetadata(blogMetadata);

    // Render and Save Blog File
    ejs.renderFile(path.join(__dirname, 'views', 'blogTemplate.ejs'), { title, author, postDate, content }, {}, (err, html) => {
        if (err) return res.status(500).send('Error rendering blog');

        fs.writeFileSync(path.join(__dirname, 'blogs', blogFilename), html);

        // Redirect with success query parameter
        res.redirect("/?success=true");
    });
});

  
  
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });