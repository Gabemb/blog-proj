const mongoose = require ('mongoose')

const UserSchema = mongoose.Schema({
	username: {type: String, required: true unique: true},
	password: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	bio: {type: String}
	articles: {type: String}
})

mongoose.model('UserList', UserSchema)