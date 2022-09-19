// require the library
const mongoose = require('mongoose');
// connected to the database
mongoose.connect('mongodb://localhost/Contact_List_db');

// acquire the connection to check if its successful
const db = mongoose.connection;
// error
 db.on('error', console.error.bind(console, 'error connecting to db'));
// up and running then print the message
 db.once('open', function(){
    console.log('Successfully connected to db');
 })