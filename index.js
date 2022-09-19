const express = require('express');
const path = require('path');
const port = 1000;


const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));  
// // middleware 1
// app.use(function(req,res,next){
//     req.myName ="Neha";
//     next();
// });
// // middleware 2
// app.use(function(req,res,next){
//     console.log('My name from Mw2', req.myName);
//     next();
// });


// var contactList = [
//     {
//         Name : "Nisha",
//         phone: "8876718238"
//     },
//     {
//         Name : "Roshan",
//         phone:"9956428976"
//     },
//     {
//         Name:"Payal",
//         phone:"7662987634"
//     }
// ]

app.get('/', function(req, res){
   // res.send('<h1>Cool, Its running!</h1>');

//    fetching the contact

Contact.find({}, function(err,contacts){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }
        return res.render('home',{ 
        title: "Conatct List",
        contact_List: contacts
        });
    });

});

  


app.get('/', function(req, res){
    return res.render('practice',{ 
     title: "Conatct List",
     contact_List: contactList
     });
 })
// For deleting the contact
 app.get('/delete-contact/',function(req,res){
    // console.log(req.query);
// get the query from the url
// get the id from query in url
    let id = req.query.id;

    // find the contact in db using id and delete it
    Contact.findByIdAndDelete(id,function(err){
        console.log('error in deleting the contact from database');
        return;
    })

    // let contactIndex = contactList.findIndex(contact => contact.phone == phone);

    // if(contactIndex != -1){
    //     contactList.splice(contactIndex, 1);
    // }
    return res.redirect('back');
 })


app.post('/create-contact',function(req,res){
    // return res.redirect('/practice');

    // console.log(req.body);
    // console.log(req.body.Name);
    // // console.log(req.body.phone);
    // 
    
    

    // pushing it into database
    Contact.create({
        name: req.body.Name,
        phone: req.body.phone
    }, function(err, newContact){
        if(err){console.log('Error in creating a contact!')
            return;}
            console.log('**', newContact);
            return res.redirect('back');
    })
  

});

app.listen(port,function(err){
    if(err){
        console.log("error",err);
    }
    console.log('its running',port);
});