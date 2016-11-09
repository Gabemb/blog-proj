import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

var EditBlogButton = React.createClass({
	render: function(){
		console.log('this is from the edit button',this.props.blogID)
		return (
			<div>
				<Link to ={`/user/${this.props.username}/${this.props.blogTitle}/${this.props.blogID}`}><button>edit</button></Link>
			</div>
		)
	}
})

export default EditBlogButton;