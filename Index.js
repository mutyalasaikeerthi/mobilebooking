const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

// MongoDB Atlas connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/keerthi';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Models
const User = mongoose.model('User', { name: String, email: String, password: String, phno: Number });
const MobileBooking = mongoose.model('MobileBooking', { mobile: String, name: String, email: String, phoneno: Number, address: String });
const Contact = mongoose.model('Contact', { name: String, email: String, message: String });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// Index Page Route
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'Index.html')));

// Buynow Page Route
app.get('/buynow', (req, res) => res.sendFile(path.join(__dirname, 'Buynow.html')));

// Contact Page Route
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'Contact.html')));

// Login Page Route
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'Login.html')));

// Signup Page Route
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname, 'Signup.html')));

// Products Page Route
app.get('/products', (req, res) => res.sendFile(path.join(__dirname, 'Products.html')));

// CRUD Page Route
app.get('/crud', (req, res) => res.sendFile(path.join(__dirname, 'CRUD.html')));

// Delete Page Route
app.get('/delete', (req, res) => res.sendFile(path.join(__dirname, 'Delete.html')));

// Display Page Route
app.get('/display', (req, res) => res.sendFile(path.join(__dirname, 'Display.html')));

// Display All Page Route
app.get('/displayall', (req, res) => res.sendFile(path.join(__dirname, 'Displayall.html')));

// Handle Signup Form Submission
app.post('/signup', (req, res) => {
  const { name, email, password, phno } = req.body;
  const user = new User({ name, email, password, phno });
  user.save()
    .then(() => res.redirect('/login'))
    .catch(err => res.status(500).send('Error saving data to MongoDB.'));
});

// Handle Mobile Booking Form Submission
app.post('/submit-mobile', (req, res) => {
  const { mobile, name, email, phoneno, address } = req.body;
  const mobileBooking = new MobileBooking({ mobile, name, email, phoneno, address });
  mobileBooking.save()
    .then(() => res.redirect('/contact'))
    .catch(err => res.status(500).send('Error saving mobile booking data.'));
});

// Handle Contact Form Submission
app.post('/submit-contact', (req, res) => {
  const { name, email, message } = req.body;
  const contactMessage = new Contact({ name, email, message });
  contactMessage.save()
    .then(() => res.redirect('/contact'))
    .catch(err => res.status(500).send('Error saving contact message.'));
});

// Handle Login Form Submission (You can add authentication logic here)
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Add your authentication logic here
  // For now, we just redirect to the Products page
  res.redirect('/products');
});

// Handle CRUD Operations (e.g., add, update, delete products or users)
// Example: Handle product CRUD (this is just an example, you can extend as needed)
app.post('/add-product', (req, res) => {
  const { name, price, description } = req.body;
  // Add your product creation logic here
  res.send('Product added successfully!');
});

// Example: Handle delete product (you can extend this for any other CRUD)
app.post('/delete-product', (req, res) => {
  const { productId } = req.body;
  // Add your delete logic here
  res.send('Product deleted successfully!');
});

// Example: Display all products or users (extend as needed)
app.get('/display-products', (req, res) => {
  // Logic to retrieve products from DB
  res.send('Display all products');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
