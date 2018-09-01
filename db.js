const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tickets', {
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB has started'))
  .catch(e => console.log(e));

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var TicketSchema = new Schema({
//     number: String,
//     date: Date
// });

// var TicketModel = mongoose.model('TicketModel', TicketSchema );

// mongoose.Promise = global.Promise;

// var mongoDB = 'mongodb://localhost/my_database';
// mongoose.connect(mongoDB, {
//   useNewUrlParser: true
// })
//   .then(() => console.log('MongoDB has started'))
//   .catch(e => console.log(e));

// //Get the default connection
// var db = mongoose.connection;

// // Compile model from schema


// // Create an instance of model SomeModel
// date = new Date();
// date1 = date.toString();
// var awesome_instance = new TicketModel({ number: '123123123', date: date1 });

// // Save the new model instance, passing a callback
// awesome_instance.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });
