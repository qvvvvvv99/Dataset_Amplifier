const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    image: String,
    label: String
});

const Blogpost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = Blogpost;