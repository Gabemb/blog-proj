import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import $ from 'jquery';

var newUser = React.createClass({
	getInitialState() {
		return 	{
				username: '',
				password: '',
				email: '',
				bio: ''
			}
	},
	handleChange(inputEvent,event) {
		this.setState({[inputEvent]: event.target.value});
	},
	makeNewUser(event) {
		$.ajax({
			url: '/user',
			type: 'POST',
			data: {
				username: this.state.username,
				password: this.state.password,
				email: this.state.email,
				bio: this.state.bio,
				date: Date.call()
				}	
			})
	},
	render() {
		return (
			<div>
			<form>
				<input type="text" placeholder="desired username" 
				onChange={this.handleChange.bind(this,'username')}
				value={this.state.input} />
				<input type="text" placeholder="desired password" 
				onChange={this.handleChange.bind(this,'password')}
				value={this.state.input} />
				<input type="text" placeholder="e-mail" 
				onChange={this.handleChange.bind(this,'email')}
				value={this.state.input} />
				<input type="text" placeholder="bio" 
				onChange={this.handleChange.bind(this,'bio')}
				value={this.state.input} />
				<input onClick={this.makeNewUser} type="button" value="submit" />
			</form>
			</div>
		)
	}
});

export default newUser;
