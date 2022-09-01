const express = require('express')
const app = express()
const path = require('node:path')

app.set("view engine", "ejs")

let usernameExpress = 'Joe';

app.get('/', function (req, res) {

  //res.sendFile(path.join(__dirname,"index.html"));
  //res.send('Hello ' + username + ' from Node/Express/Heroku');
  //res.send(`Hello ${username} from Node/Express/Heroku with Backticks!`);
  res.render('index', { usernameEJS: usernameExpress});

})

app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));