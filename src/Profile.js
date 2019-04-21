import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

class Profile extends Component {
	
	render() {
		console.log(this.props, "in profile");
		const { userProfile } = this.props;
		return (
			<section>
				{
					userProfile.profile ?
					<div className="profile-hdr cf">
						<figure>
							<img src={userProfile.profile.image} alt="" />
							<h3 className="userName">{userProfile.profile.username}</h3>
						</figure>
						<button className="edit-prfile-btn">
							<Link to='/Settings'>
								<i className="fas fa-cog"></i>
								<span>Edit profile settings</span>
							</Link>
						</button>
					</div>:""
				}
				<div className="my-articles">
					<ul>
						
					</ul>
					{
						userProfile.articles && userProfile.articles.length ? <p>show article</p>
						: <p>No articles are here... yet.</p>
					}
				</div>
			</section>
		);
	}
}

function mapStateToPops(state){
	return {
		UserInfo :state.UserInfo,
		userProfile: state.userProfile,
	}
}

export default connect(mapStateToPops) (Profile);

