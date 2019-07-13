import React, { Component } from 'react';
import { connect } from "react-redux";

class Settings extends Component {

	constructor(props){
		super(props);

		this.state = {
			image: this.props.profile ? this.props.profile.image : "",
			username: this.props.profile ? this.props.profile.username : "",
			email: this.props.profile ? this.props.profile.email : "",
			bio: this.props.profile ? this.props.profile.bio : ""
		}
	}

	handleUpdate = (e) => {
		e.preventDefault();
		const { image, bio, email, username } = this.state;

		console.log(image, bio, email, username);
		fetch('https://conduit.productionready.io/api/user', {
			method: "PUT",
			headers: {
      	"Content-Type": "application/json",
      	"Authorization": `Token ${localStorage.jwt}`
    	},
    	body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then(data => console.log(data, "update data..."))
	}

	handleChange = (e) => {
		var { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleLogout = () => {
		localStorage.removeItem("jwt");
		this.props.history.push("/");
	}

	render() {
		const { image, bio, email, username } = this.state;

		return (
			<section className="settings-sec">
				<h1 className="settings-header">Your Settings</h1>
				<form className="cf form">
					<fieldset>
						<fieldset className="form-group">
							<input 
								type="text"
								name="image"
								className="post-input small"
								placeholder="URL of profile picture"
								value={ image }
								onChange={ this.handleChange }
								/>
						</fieldset>
						<fieldset className="form-group">
							<input 
								type="text"
								name="username"
								placeholder="Username"
								className="post-input strong"
								value={ username }
								onChange={ this.handleChange }
								/>
						</fieldset>
						<fieldset className="form-group">
							<textarea
								className="post-input article-body strong"
								rows="8"
								cols="30"
								name="bio"
								value={ bio }
								onChange={ this.handleChange }
								placeholder="Short bio about you"
								>
							</textarea>
						</fieldset>
						<fieldset className="form-group">
							<input
								type="email"
								name="email"
								placeholder="Email"
								className="post-input strong"
								value={ email }
								onChange={ this.handleChange }
								/>
						</fieldset>
						<fieldset className="form-group">
							<input
								type="password"
								name="password"
								placeholder="New Password"
								className="post-input strong"
								onChange={ this.handleChange }
								/>
						</fieldset>
						<button
							className="btn update-btn"
							type="submit"
							onClick={ this.handleUpdate }
							>
							Update Settings
						</button>
					</fieldset>
				</form>
				<div className="logout-sec cf">
					<hr/>
					<button
						className="btn logout-btn"
						type="submit"
						onClick={ this.handleLogout }
						>
						Or click here to logout.
					</button>
				</div>
			</section>
		);
	}
}

function mapStateToProps(state){
	// console.log(state, "map state");
	return { profile : state.UserInfo };
}

export default connect(mapStateToProps) (Settings);