import React from 'react';
import Hero from './Hero';
import { connect } from 'react-redux'
import uuid from './uuid';
import { Link } from "react-router-dom";


class User extends React.Component {
	state = {
		user : "",
		UserFavourit: "",
		articleType: ["My Articles", "Favorited Articles"],
	}

	activeClass = () => {
		console.log("active")
		this.setState({active: true})
	}

	fetchData = (user = "") => {
		console.log(user);
		this.setState({UserFavourit: user});
		fetch(`https://conduit.productionready.io/api/articles?favorited=${user}&limit=5&offset=0`)
		.then(res => res.json())
		.then(data => this.props.dispatch({
				type: "FAVORITE_ARTICLE",
				data: data
			})
		)
	}
	
	render(){
	const { user } = this.props;
	const userInfo = user.articles ? user.articles[0] : "";
	// console.log(this.props, "in user.js");

		return(
			<React.Fragment>
				<div className="user-hero-sec">
					<figure className="user-profile">
						<img src={userInfo ? userInfo.author.image : ""} alt="" />
						<h3 className="name">{userInfo ? userInfo.author.username : ""}</h3>
						<p>{userInfo ? userInfo.author.bio : ""}</p>
					</figure>
					<button className="follow-btn">+Follow user</button>
				</div>
				<ul className="article-nav user-nav" style={{margin:"0 25%"}}>
					{this.state.articleType.map(text => {
						return(
							<li key={uuid()} className="tag-list fav-article" onClick={() => {
									this.fetchData((userInfo ? userInfo.author.username : ""));
									this.activeClass();
									}}
								>

								<p className='active'> {text} </p>
							</li>)
						})
					}
				</ul>
				{
					(user.articles ? user.articles : []).map(article => {
						return (
							<div className="article user-page" key={uuid()}>
								<div>
									<div className="article-header">
										<div className="user-info">
											<img src={article.author.image} alt="" />
											<div>
												<p className="username">{article.author.username}</p>
				    						<p>{"article.createdAt"}</p>
				    					</div>
				  					</div>
				  					<div className="likes">
				  						<i className="far fa-heart"></i>
				  						<span>{article.favoritesCount}</span>
				  					</div>
				  				</div>
								</div>
								<h3 className="title">{article.title}</h3>
								<p className="article-sescription">{article.description}</p>
								<p className="read-more"> read more...</p>
							</div>
						)
					})
				}		
			</React.Fragment>
		)
	}
}

function mapStateToProps(state){
	console.log(state);
	return { user: state.user }
}

export default connect(mapStateToProps)(User);