import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

var NewPostForm = React.createClass({
	getInitialState() {
		return {input: ""}
	},
	handleChange(event) {
		this.setState({input: event.target.value});
	},
	makeNewPost(event) {
		event.preventDefault();
		let blogPost = this.state.input;
		$.ajax({
			url: '/posts',
			type: 'POST',
			data: {post: blogPost}
		});
	},
	render() {
		return (
			<form onSubmit={this.makeNewPost}>
				<input type="text" placeholder="body" 
				onChange={this.handleChange}
				value={this.state.input} />
				<input type="submit"></input>
			</form>
		)
	}
});

render(
  <NewPostForm/>,
  document.getElementById('root')
);
