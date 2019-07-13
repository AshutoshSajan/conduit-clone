import React, { Component } from 'react';

export default class Settings extends Component {

	handleUpdate = () => {

	}

	handleLogout = () => {
		localStorage.removeItem("jwt");
		this.props.history.push("/");
	}

	render() {
		return (
			<section className="settings-sec">
				<h1 className="settings-header">Your Settings</h1>
				<form className="cf form">
					<fieldset>
						<fieldset className="form-group">
							<input type="text" className="post-input small" placeholder="URL of profile picture" />
						</fieldset>
						<fieldset className="form-group">
							<input type="text" className="post-input strong" placeholder="Username" />
						</fieldset>
						<fieldset className="form-group">
							<textarea className="post-input article-body strong" rows="8" cols="30" placeholder="Short bio about you">
							</textarea>
						</fieldset>
						<fieldset className="form-group">
							<input type="email" className="post-input strong" placeholder="Email" />
						</fieldset>
						<fieldset className="form-group">
							<input type="password" className="post-input strong" placeholder="New Password" />
						</fieldset>
						<button className="btn update-btn" type="submit">Update Settings</button>
					</fieldset>
				</form>
				<div className="logout-sec cf">
					<hr/>
					<button className="btn logout-btn" type="submit" onClick={this.handleLogout}>Or click here to logout.</button>
				</div>
			</section>
		);
	}
}
