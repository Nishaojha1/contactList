const mongoose = require('mongoose');

// creating a schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
});

// collection that is present in db

const Contact = mongoose.model('Contact',contactSchema);

module.exports = Contact;