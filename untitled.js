import React from 'react';
import {Link} from 'react-router';

import $ from 'jquery';

var editBlog = React.createClass({
	deletePost() {
		console.log("ID of current blog", this.props.blogID)
		$.ajax({
			url: '/api/posts',
			type: 'DELETE',
			data: {_id: this.props.blogID}
		}).done( () => {
			this.props.refresh()
		});
	},
	render: function(){
		console.log(this.props)
		return (
			<div>
				<button onSubmit={this.deletePost}>delete</button>
			</div>
		)
	}
})

export default editBlog;