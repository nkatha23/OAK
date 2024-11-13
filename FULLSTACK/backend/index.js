// Import required modules
const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize the app
const app = express();
dotenv.config();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '71663955Nkatha@',  // Make sure to wrap the password in quotes if it's not in an environment variable
    database: process.env.connect_db
  });
  
 db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Sample route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the FarmConnect API');
});

// Route to get all products
app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Route to add a new product
app.post('/products', (req, res) => {
  const { name, description, price, quantity } = req.body;
  const sql = 'INSERT INTO products (name, description, price, quantity) VALUES (?, ?, ?, ?)';
  
  db.query(sql, [name, description, price, quantity], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Product added successfully', productId: result.insertId });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
