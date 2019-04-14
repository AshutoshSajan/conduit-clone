import React from 'react'
import { connect } from 'react-redux'
import uuid from './uuid';

class Tags extends React.Component {

	componentDidMount(){
		fetch("https://conduit.productionready.io/api/tags").then(res => res.json()).then(data => this.props.dispatch({
				type: "ADD_TAGS",
				tags: data
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
	        	(tags ? tags : []).map(v => <a href="#" className="tags" key={uuid()}>{v}</a>)
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