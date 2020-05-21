
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
hasConfirmed: String,
confirmUrl: String,
username: {
   type: String,
   unique: true
},
email:String,
name: {
   type: String,
   unique: true
},

password: String,
date : {
  type: Date,
  default: Date.now
},
status : String,
});



module.exports = mongoose.model('User', userSchema);