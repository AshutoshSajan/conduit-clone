import React from 'react'
import { connect } from 'react-redux'
import uuid from './uuid';
import User from './User';

class Tags extends React.Component {

	componentDidMount(){
		fetch("https://conduit.productionready.io/api/tags").then(res => res.json()).then(data => this.props.dispatch({
				type: "ADD_TAGS",
				tags: data
		}))
	}

  handleClick = (data) => {
    console.log(data);

    fetch(`https://conduit.productionready.io/api/articles?tag=${data}&limit=25&offset=0`).then(res => res.json()).then(data => this.props.dispatch({ 
        type: "ADD_ARTICLES",
        data: data
      }))
    
  }

  render() {
  	// console.log(this.props.tags);
  	const { tags } = this.props.tags;
    return (
        <section className="tags-sec">
        	<p>Popular Tags</p>
        	<div className="popular-tags">
  	        { 
  	        	(tags ? tags : []).map(v => <a href="#" className="tags" key={uuid()} onClick={() => this.handleClick(v)}>{v}</a>)
  	        }
          </div>
        </section>
    );
  }
}

function mapStateToProps(state) {
	return { tags: state.tags }
}
export default connect(mapStateToProps) (Tags);