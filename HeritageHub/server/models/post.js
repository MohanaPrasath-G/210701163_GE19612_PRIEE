const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageFilename: {
    type: String,
    required: true,
  },
  postBy: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('post', postSchema);
