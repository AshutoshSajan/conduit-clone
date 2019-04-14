import React from 'react'
import { connect } from 'react-redux';
import uuid from './uuid';
import FontAwesome from 'react-fontawesome';

class Article extends React.Component {
	
	componentDidMount(){
		fetch("https://conduit.productionready.io/api/articles").then(res => res.json()).then(data => this.props.dispatch({
				type: "ADD_ARTICLES",
				data: data
		}))
	}

  render() {
  	console.log(this.props);
  	const { articles } = this.props;
    return (
      <section >
      	<ul className="article-nv">
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
				    						<p className="username">{article.author.username}</p>
				    						<p>{article.createdAt}</p>
				    					</div>
			    					</div>
			    					<div className="likes">
			    						<i className="far fa-heart"></i>
			    						{article.favoritesCount}
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