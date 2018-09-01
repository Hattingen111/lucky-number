var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tickets', {
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB has started')) 
  .catch(e => console.log(e));

const Ticket = mongoose.model('Ticket', { number: String, count: Number });

app.use(express.json());

app.get('/', function(req, res){
  res.status(200);
  res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/styles.css', function(req, res) {
  res.status(200);
  res.sendFile(__dirname + "/" + "styles.css");
});

app.get('/script.js', function(req, res) {
  res.status(200);
  res.sendFile(__dirname + "/" + "script.js");
});

app.post('/', function(req, res) {
  var number = parseInt(JSON.parse(req.body));
  var a,b,c,d,e,f,result;
  f = number % 10;
  e = Math.trunc((number % 100)/10);
  d = Math.trunc((number % 1000)/100);
  c = Math.trunc((number % 10000)/1000);
  b = Math.trunc((number % 100000)/10000);
  a = Math.trunc((number % 1000000)/100000);

  if ( a + b + c === d + e + f ) {result = true} else {result = false};
  res.status(200);
  res.send(result);
  
  Ticket.find({number: number}, function (err, ticket) {
    if (ticket == '') {
      var new_number = new Ticket({number: number, count: 1});
      new_number.save();
    } else {
      ticket[0].count +=1;
      ticket[0].save();
    }
  });
});

app.get('/history', function(req, res) {
  Ticket.find(function(er, ticket) {
    json = JSON.stringify(ticket);
    res.status(200);
    res.send(json);
  })
})

app.listen(8080, () => console.log('Example app listening on port 8080!'));
