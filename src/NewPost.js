import React, { Component } from 'react';

class NewPost extends Component {
	
	state = {
		name: "",
		tags: "",
		about: "",
		text: "",
	}

	handleInput = (e) => {
		e.preventDefault(e.target.name)
		const value = e.target.name;
		this.setState({[value]: e.target.value});
	}

	render() {
		return (
			<div className="article-form">
				<form className="cf">
					<fieldset>
						<label>
							<input type="text" className="post-input article-title" name="name" placeholder="Article title" required value={this.state.name} onChange={this.handleInput}/>
						</label>
						<label>
							<input type="text" className="post-input article-about small" name="about" placeholder="Whats's this article about?" required value={this.state.about} onChange={this.handleInput}/>
						</label>
						<label>
							<textarea className="post-input article-body small" rows="8" cols="30" name="text" placeholder="Write your article (in markdown)" required value={this.state.text} onChange={this.handleInput}></textarea>
						</label>
						<label>
							<input type="text" className="post-input article-tag small" name="tags" placeholder="Enter tags" required value={this.state.tags} onChange={this.handleInput}/>
						</label>
						<button type="submit" className="btn publist-btn">Publish article</button>
					</fieldset>
				</form>
			</div>
		);
	}
}

export default NewPost;
