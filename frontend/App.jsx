import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

var NewPostForm = React.createClass({
	getInitialState() {
		return {blogTitle: ""}
	},
	handleChange(event) {
		this.setState({blogTitle: event.target.value});
	},
	makeNewPost(event) {
		event.preventDefault();
		let blogPost = this.state.blogTitle;
		$.ajax({
			url: '/posts',
			type: 'POST',
			data: {title: blogPost}
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
