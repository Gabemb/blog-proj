import React from 'react';

import $ from 'jquery';

const Blog = React.createClass({
	getInitialState(){
		return {blog: {}}
	},
	componentWillMount() {
		//console.log("this is the thing", this.props.location.query)
		// query string: ? + variable + & + more shit 
		let title = this.props.params.blogTitle
		$.ajax({
			url: '/api/posts',
			type: 'POST',
			data: {title: title,
							single: true}
		}).done( (data) => {
			console.log("SUCCESS", data)
			this.setState({blog: data})
		});
	},
	render(){
		return (
			<div>
				<h1>{this.state.blog.title}</h1>
					<h6>By: {this.state.blog.author}</h6>  <h6> {this.state.blog.date}</h6>

					<br/>
					<img alt={this.state.blog.imgURL} src={this.state.blog.imgURL}></img>
					<p>{this.state.blog.blog}</p>
			</div>
		)
	}
});

export default Blog;