//BLOG POSTS:
//Title of blog post
//Date posted
//Blog post text
//Catergories/tags
//comments on posts
//Images for post
//Author of blog post
//related blog posts to tags
//archive: boolean

//COMMENTS


//ARCHIVE:
//Archive (older posts)
//Comments on posts
//ID: Blog Post

//AUTHORS:
//name
//email
//password
//bio
//articles

//FOLLOWERS/READER
//Users
//name
//comments
//email
//password
//date joined
//age

const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
	title: {type: String, required: true, unique: true},
	text: {type: String, required: true},
	author: String,
	imgURL: String,
	date: Date
});

//First argument is name of mode, second argument is schema
mongoose.model('BlogPost', blogSchema);













