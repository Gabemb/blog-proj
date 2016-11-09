import React from 'react';

import $ from 'jquery';

const Blog = React.createClass({
	getBlog() {
		$.ajax({
			url: '/api/posts',
			type: 'GET'
		}).done( () => {
			
		});
	},
	render(){
		console.log(this.props.params)
		return (
			<div>
				This is your blog!
			</div>
		)
	}
});

export default Blog;