const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
  title:{
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
  },
  postBy: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('gallery', gallerySchema);
