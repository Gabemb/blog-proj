///////////////
//Server - start's our app's database connection and server
///////////////
const express = require('express');
const app = express();
const mongoose = require ('mongoose');

require('./posts/posts-model');
const Post = mongoose.model('Post');

//Require in models:
//(this is a necessary step that loads our models and registers them with mongoose)
const models = require('./index').models;
//Require in routes:
const routes = require('./index').models

//Connect to database and start server:
//(whatever we put after 'localhost/' will automatically be the name of database)
mongoose.connect('mongodb://localhost/blog-app');

//Store connection as variable
const db = mongoose.connection;
//Start the server after successful database connection:
db.on('open', () => {
	app.use('/posts', routes.posts);
	app.use('*', routes.home);
	console.log("db connection opened!");
	//Launch server on port 5555
	app.listen(5555, () => {
		console.log('Listening on post 5555')
		// Post.create({title: 'test post 1'}), (err, data) => {
		// 	if (err) console.log('Error with database!');
		// 	else console.log('Post created!')
		// }
		// //Finds and prints posts to the console
		// Post.find({}, (err, data) => {
		// 	console.log('database found!', data)
		// });
	});
});

db.on('error', () =>{
	console.log('error in db connection!');
});

app.get('/', (req, res) => {
	res.send('Hey from the home page');
});

// app.get('/posts', (req, res) => {
// 	//Finds raw data and posts on page
// 	Post.find({}, (err, data) => {
// 		res.send(data);
// 	});
// });

app.get('/new-post', (req, res) => {
	Post.create({title: 'test post 2'}, (err, data) => {
		if (err) console.log('Error with database!');
		else console.log('Post created!')
		res.send(data);
	});
});

//Things to think about:
// - Creating different schemas - how many do we need? Do we only need one, or separate schemas?
// - Finding our data - what if we want a route that shows certain posts but not at all of them?
// - Setting up different routes
// - How should we setup collaboration for our project? How should we set up github?
// - What will our final project look like? What will wireframes/mockups look like?