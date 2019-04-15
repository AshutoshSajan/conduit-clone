import React from 'react';
import Hero from './Hero';
import { connect } from 'react-redux'
import uuid from './uuid';

class User extends React.Component {
	
	render(){
	const { user } = this.props;
	console.log(user.articles);
	// (user.articles ? user.articles:[]).map(v => console.log(v));
		return(
			<React.Fragment>
				<Hero user={user}/>
				{
					(user.articles ? user.articles : []).map(article => {
						return (
							<div className="article user-page" key={uuid()}>
								<div>
									<div className="article-header">
										<div className="user-info">
											<img src={article.author.image} alt="autor_image" />
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