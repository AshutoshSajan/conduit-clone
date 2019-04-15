import React from 'react'
import { connect } from 'react-redux';
import uuid from './uuid';
import FontAwesome from 'react-fontawesome';
import { BrowserRouter as Router, Route , NavLink } from "react-router-dom";

class Article extends React.Component {
	state = {
		tags: null,
	}

	componentDidMount(){
		// var api = this.state.tags ? 
		// `https://conduit.productionready.io/api/articles?tag=${this.state.tags}&limit=25&offset=0` :
		// "https://conduit.productionready.io/api/articles"

		// (this.state.tags) ? 
		// (fetch(`https://conduit.productionready.io/api/articles?tag=${this.state.tags}&limit=25&offset=0`).then(res => res.json()).then(data => console.log(data))): "no tags";

		fetch("https://conduit.productionready.io/api/articles").then(res => res.json()).then(data => this.props.dispatch({
				type: "ADD_ARTICLES",
				data: data
		}))

		// fetch(api).then(res => res.json()).then(data => {
		// 	this.props.dispatch({
		// 		type: "ADD_ARTICLES",
		// 		data: data
		// 	})
		// })
		// console.log(api, "in component did mount");
	}

	// filterTags = () => {
	// 	this.setState({tags: this.props.tags});
	// }

	handleClick = (name) => {
		fetch(`https://conduit.productionready.io/api/articles?author=${name}&limit=5&offset=0`).then(res => res.json()).then(data => this.props.dispatch(
				{
					type: "ADD_USER",
				 	user: data
				}
			));
	}

  render() {
  	// console.log(this.props, "in articles");
  	const { articles } = this.props;
    return (
      <section >
      	<ul className="article-nav">
      	</ul>
      	{
    			(articles ? articles : []).map(article => {
    				return (
    					<div className="article" key={uuid()}>
    						<div>
    							<div className="article-header">
		    						<div className="user-info">
		    							<img src={article.author.image} alt="autor_image" />
		    							<div>
		    								<NavLink to="/User">
				    							<p onClick={() => this.handleClick(article.author.username)} className="username">{article.author.username}</p>
				    						</NavLink >
				    						<p>{article.createdAt}</p>
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
      </section>
    );
  }
}

function mapStateToProps(state){
	return { articles: state.addArticles.articles }
}

export default connect(mapStateToProps) (Article);