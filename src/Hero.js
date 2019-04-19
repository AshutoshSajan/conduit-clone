import React from 'react'

class Hero extends React.Component {
  render() {
  	// console.log(this.props)
  	const { user } = this.props;
  	// console.log(user)
    return (
      <section className="hero-sec">
      	{
      		// (user ? user.articles : []).map(v => console.log(v))
      	}
        <h2>conduit</h2>
				<h3>A place to share your knowledge.</h3>
      </section>
    );
  }
}

// (state)=>({ data: state })
export default Hero;