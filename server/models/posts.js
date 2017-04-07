const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var postsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    maxlength: 1000,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subjectUrl: {
    type: String,
    required: true
  },
  created_at: {
    type: String,
  }
});

// var Posts = module.exports = mongoose.model('Post', postsSchema);
module.exports = mongoose.model('Post', postsSchema);
