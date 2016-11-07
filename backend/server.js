///////////////
//Server - start's our app's database connection and server
///////////////

const express = require('express');
const app = express();
const mongoose = require ('mongoose');

const bodyParser = require('body-parser');

//Require in models:
//(this is a necessary step that loads our models and registers them with mongoose)
const models = require('./index').models;
//Require in routes:
const routes = require('./index').routes;

//Connect to database and start server:
//(whatever we put after 'localhost/' will automatically be the name of database)
mongoose.connect('mongodb://localhost/blog-app');

//Store connection as variable
const db = mongoose.connection;
//Start the server after successful database connection:
db.on('open', () => {
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(express.static('bundle'));
	app.use('/posts', routes.posts);
	app.use('/user', routes.user);
	app.use('*', routes.home);
	//Launch server on port 5555
	app.listen(5555, () => {
		console.log('Listening on port 5555')
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