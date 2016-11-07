const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	bio: {type: String},
	articles: {type: String},
	date: {type: String}
})

mongoose.model('UserList', userSchema)