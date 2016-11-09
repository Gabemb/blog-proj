import React from 'react';

import $ from 'jquery';

var DeleteBlog = React.createClass({
	deletePost() {
		console.log("ID of current blog", this.props.blogID)
		$.ajax({
			url: '/posts',
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
				<button onClick={this.deletePost}>delete</button>
			</div>
		)
	}
})

export default DeleteBlog;