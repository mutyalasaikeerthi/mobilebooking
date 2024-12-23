const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 1000;
// Connect to your MongoDB instance (replace 'mongodb://localhost/mydatabase' with your MongoDB URL)
mongoose.connect("mongodb://127.0.0.1:27017/keerthi", { useNewUrlParser: true,
useUnifiedTopology: true });
// Create a Mongoose model (schema)
const Booking = mongoose.model('Booking', {
mobile: String,
name: String,
email: String,
phoneno:Number,
address: String
});

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));
// Serve the HTML form
app.get('/', (req, res) => {
res.sendFile(__dirname + '/Buynow.html');
});
// Handle form submission
app.post('/submit', (req, res) => {
const { mobile ,name ,email,phoneno,address} = req.body;
// Create a new User document and save it to MongoDB
const user = new Booking({ mobile ,name,email,phoneno,address});
user.save()
.then(() => {
res.send('Data has been saved to MongoDB.');
})
.catch((err) => {
console.error(err);
res.status(500).send('Error saving data to MongoDB.');
});
});
// Start the server
app.listen(port, () => {
console.log(`Server is running on port ${1000}`);
});