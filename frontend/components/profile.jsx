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
			console.log(data)
			this.setState({profile: data})
		});
	},
	render: function(){
		return (
			<div id="user-profiles">
				{this.state.profile ? this.state.profile.map( 
					(userinfo, idx) => {
						return <h1 key={idx}>{userinfo.username}</h1>
				}) : null}
			</div>
			)
	}
})

export default userProfile;