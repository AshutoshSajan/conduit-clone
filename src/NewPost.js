import React, { Component } from 'react';

class NewPost extends Component {
	
	state = {}

	handleInput = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		this.setState({ [name]: value});
	}

	handlePost = (e) => {
		e.preventDefault();
		fetch('https://conduit.productionready.io/api/articles', {
			method: "PUT",
			headers: {
      	"Content-Type": "application/json",
      	"Authorization": `Token ${localStorage.jwt}`
    	},
    	body: JSON.stringify(this.state)
		})
		.then(res => {
			console.log(res, "res");
			res.json();
		})
		.then(data => {
			console.log(data, "update data...");
			this.props.history.push('/Post');
		});
	}

	render() {
		return (
			<div className="article-form">
				<form className="cf">
					<fieldset>
						<label>
							<input
								required
								type="text"
								name="name"
								value={this.state.name}
								placeholder="Article title"
								onChange={this.handleInput}
								className="post-input article-title"
								/>
						</label>
						<label>
							<input
								required
								type="text"
								name="about"
								value={this.state.about}
								onChange={this.handleInput}
								placeholder="Whats's this article about?"
								className="post-input article-about small"
								/>
						</label>
						<label>
							<textarea
								rows="8"
								cols="30"
								required
								name="text"
								value={this.state.text}
								onChange={this.handleInput}
								className="post-input article-body small"
								placeholder="Write your article (in markdown)"
								>
							</textarea>
						</label>
						<label>
							<input
								type="text"
								name="tags"
								placeholder="Enter tags"
								onChange={this.handleInput}
								required value={this.state.tags}
								className="post-input article-tag small"
								/>
						</label>
						<button 
							type="submit"
							onClick={this.handlePost}
							className="btn publist-btn"
							>
							Publish article
						</button>
					</fieldset>
				</form>
			</div>
		);
	}
}

export default NewPost;
