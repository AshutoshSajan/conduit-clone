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
				<div className="my-articles" style={{wordWrap: 'break-word'}}>
					<ul>
						
					</ul>
					{
						userProfile.articles && userProfile.articles.length
						? userProfile.articles.map(val => (
							<li>
								<p>{val.title}</p>
								<br/>
								<p>{val.description}</p>
								<br/>
								<p>{val.body}</p>
								<br/>
								<p>
									Tags: 
									{val.tagList.map(tag => <span style={{margin:'0 20px'}}>{tag}</span>)}
								</p>
							</li>
						))
						: <p>No articles are here... yet.</p>
					}
					{console.log(userProfile.articles)}
				</div>
			</section>
		);
	}
}

function mapStateToPops(state){
	console.log(state);
	
	return {
		UserInfo :state.UserInfo,
		userProfile: state.userProfile,
	}
}

export default connect(mapStateToPops) (Profile);

