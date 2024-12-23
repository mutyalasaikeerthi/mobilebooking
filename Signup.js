const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 1000;
// Connect to your MongoDB instance (replace 'mongodb://localhost/mydatabase' with your MongoDB URL)
mongoose.connect("mongodb://127.0.0.1:27017/keerthi", { useNewUrlParser: true,
useUnifiedTopology: true });
// Create a Mongoose model (schema)
const Signup = mongoose.model('Signup', {
email: String,
password: Number,
repeatpassword: Number
});
app.use(express.static(__dirname));

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));
// Serve the HTML form
app.get('/', (req, res) => {
res.sendFile(__dirname + '/Signup.html');
});
// Handle form submission
app.post('/submit', (req, res) => {
const { email ,password ,repeatpassword} = req.body;
// Create a new User document and save it to MongoDB
const user = new Signup({ email ,password,repeatpassword});
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