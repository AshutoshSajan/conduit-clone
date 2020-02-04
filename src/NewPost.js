import React, { Component } from 'react';

class NewPost extends Component {
	
	state = {
		title: "",
    description: "",
    body: "",
    tagList: ''
	}

	handleInputChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		this.setState({ [name]: value});
	}

	handleCreateArticle = (e) => {
		e.preventDefault();

		const { title, description, body, tagList } = this.state;
		const article = {
			title, description, body, tagList: tagList.split(',')
		}

		console.log(article, 'article..');
		

		fetch('https://conduit.productionready.io/api/articles', {
			method: "POST",
			headers: {
      	"Content-Type": "application/json",
      	"Authorization": `Token ${localStorage.jwt}`
    	},
    	body: JSON.stringify({ article })
		})
		.then(res => {
			console.log(res);
			res.json();
		})
		.then(data => {
			console.log(data, "new article data...");
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
								name="title"
								value={this.state.name}
								placeholder="Article title"
								onChange={this.handleInputChange}
								className="post-input article-title"
								/>
						</label>
						<label>
							<input
								required
								type="text"
								name="description"
								value={this.state.about}
								onChange={this.handleInputChange}
								placeholder="Whats's this article about?"
								className="post-input article-about small"
								/>
						</label>
						<label>
							<textarea
								rows="8"
								cols="30"
								required
								name="body"
								value={this.state.text}
								onChange={this.handleInputChange}
								className="post-input article-body small"
								placeholder="Write your article (in markdown)"
								>
							</textarea>
						</label>
						<label>
							<input
								type="text"
								name="tagList"
								placeholder="Enter tags"
								onChange={this.handleInputChange}
								required value={this.state.tags}
								className="post-input article-tag small"
								/>
						</label>
						<button 
							type="submit"
							onClick={this.handleCreateArticle}
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
