import React from 'react';
// import Main from './Main';
import Hero from './Hero';

class Post extends React.Component {
  render() {
    return (
      <React.Fragment>
      	<Hero />
      	<div>
      		<h2></h2>
      		<p></p>
      		<h2></h2>
      	</div>
      	<section>
      		<p>
      			<a href="#">Sign in</a>
      			or
      			<a href="#">Sign up</a>
      			to add comments on this article.
      		</p>

      		<ul>
      			<p></p>
      			<div>
      				<small></small>
      				<p></p>
      			</div>
      		</ul>
      	</section>
      </React.Fragment>
    );
  }
}

// function mapStateToProps(state){
// 	return { articles: state.addArticles.articles }
// }

export default Post;