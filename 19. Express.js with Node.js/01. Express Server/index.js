import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1> <p> This is a Home Page</p>');
    });

app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1> <p> This is an About Page</p>');
    });

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1> <p> This is a Contact Page</p>');
    }
    );