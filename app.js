const express = require('express')
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
const ejs = require('ejs')

// Express
const app = express()

// EJS
app.set('view engine', 'ejs');
app.use(express.static("public"));

// BodyParser
// app.use(bodyParser.urlencoded({extended: true}));

// Mongoose
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://localhost:27017/bagels", { useNewUrlParser: true });


app.get("/", function(req, res){
  res.render('home')
})

// app.post('/', (req, res) => {
//   // Extract text from the form input field
//   const name = req.body.name;
//   const email = req.body.email;

//   // Do something with the text, such as saving to a database
//   console.log(text);

//   // Send response back to client
//   res.send('Text received!');
// });


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000.")
});
