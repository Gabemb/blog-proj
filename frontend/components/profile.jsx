import React from 'react'
import {Link} from 'react-router'

import $ from 'jquery'

var userProfile = React.createClass({
	getInitialState(){
		return {profile: null}
	},
	componentWillMount() {
		$.ajax({
			url: '/api/user',
			type: 'GET',
		}).done( (data) => {
			this.setState({profile: data})
		});
	},
	render: function(){
		return (
			<div id="user-profiles">
				{this.state.profile ? this.state.profile.map( 
					(userinfo, idx) => {
						return 
						<div key ={idx}>
						<h1>{userinfo.username}</h1>
						<h3>{userinfo.email}</h3>
						<h3>{userinfo.bio}</h3>
						<h3>{userinfo.date}</h3>
						</div>
				}) : null}
			</div>
			)
	}
})

export default userProfile;