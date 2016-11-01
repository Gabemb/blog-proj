const express = require('express');
const app = express();

const mongoose = require ('mongoose');

require('./posts/posts-model');
const Post = mongoose.model('Post');

mongoose.connect('mongodb://localhost/blog-app');

const db = mongoose.connection;

db.on('open', () => {
	console.log("db connection opened!");

	app.get('/', (req, res) => {
		res.send('Hey from the home page');
	});

	app.get('/posts', (req, res) => {
		res.send('Hey from the posts page');
		//Find all posts and log to console
		Post.find({}, (err, data) => {
			console.log('Database data found!', data);
		});
	});

	app.listen(5555, () => {
		console.log('Listening on post 5555')
		Post.create({title: 'test post 1'}), (err, data) => {
			if (err) console.log('Error with database!');
			else console.log('Post created!')
		}

	});
});

db.on('error', () =>{
	console.log('error in db connection!');
});

//Things to think about:
// - Creating different schemas - how many do we need? Do we only need one, or separate schemas?
// - Finding our data - what if we want a route that shows certain posts but not at all of them?
// - Setting up different routes
// - How should we setup collaboration for our project? How should we set up github?
// - What will our final project look like? What will wireframes/mockups look like?


