const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/keerthi',
 { useNewUrlParser: true, 
    useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Define a Mongoose Schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, images, etc.) if needed
app.use(express.static(__dirname));
// Set up the route to serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Contact.html');
});

// Handle form submissions
app.post('/submit_form', async (req, res) => {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();

    // You can add additional logic, such as sending an email response.

    res.redirect('/');
});

const port = process.env.PORT || 1000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
