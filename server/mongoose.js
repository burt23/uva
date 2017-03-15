var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection errorINSIDE BIND'));

db.once('open', function() {

  var userSchema = mongoose.Schema({
    name: String,
    isOwner: Boolean,
    isAdmin: Boolean,
    joined: Date.now,
    meta: {
      reviews: Number,
      friends: Number
    }
  });

  var reviewSchema = mongoose.Schema({
    content: String,
    product: String,
    rating: Number,
    user_id: Number
  });

  var productSchema = mongoose.Schema({
    name: String,
    year: Number,
    type: String,
    origin: String,
    varietal: String,
    price: Number,
    owner_id: Number
  });

  var User = mongoose.model('User', userSchema);
  var Review = mongoose.model('Review', reviewSchema);
  var Product = mongoose.model('Product' productSchema);

});