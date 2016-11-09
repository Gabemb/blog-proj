import React from 'react';
import $ from 'jquery';

var EditBlog = React.createClass({
	render: function(){
		console.log(this.props.params,'EditBlog component')
		return (
			<div>
			hello from EditBlog
			</div>
		)
	}
})

export default EditBlog;