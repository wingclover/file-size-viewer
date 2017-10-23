// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/get-file-size', upload.single('loaded'), function (req, res) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
  res.send({"size": req.file.size});
})


// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
// app.post("/get-file-size", function (request, response) {
//   response.sendStatus(request.query);
// });


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
