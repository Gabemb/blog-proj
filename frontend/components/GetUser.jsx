import React from 'react';
import {Link} from 'react-router';

import $ from 'jquery';

var getUser = React.createClass({
	getInitialState() {
		return 	{blogs: []
			}
	},
	ComponentDidMount() {
		$.ajax({
			url: '/api/user',
			type: 'GET',
			data: {
				username: this.state.username,
				email: this.state.email,
				bio: this.state.bio,
				date: this.state.date}}).done((data) => this.setState(data)	
			)}
	},
	render() {
		return (
			<div>
			{this.state}
			</div>
		)
	}
});

export default getUser;
