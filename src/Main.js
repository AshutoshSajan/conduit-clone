import React from 'react'
import Article from './Article';
import Tags from './Tags';
import Hero from './Hero';

class Main extends React.Component {
	state = {
		tags: ""
	}

	// filterTags = (v) => {
	// 	this.setState({tags: v})
	// }

  render() {
  	// console.log(this.state);
    return (
    	<React.Fragment>
    		<Hero />
	      <section className="main">
		      <div className="article-section">
		      	<Article />
		      </div>
		      <div className="tags-section">
		        <Tags /> 
		      </div>
	      </section>
      </React.Fragment>
    );
  }
}

// function mapStateToProps(state) {
// 	return { tags: state.tags }
// }

export default Main;