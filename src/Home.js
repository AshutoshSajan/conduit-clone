import React from 'react';
import Main from './Main';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
      	<Main />
      </React.Fragment>
    );
  }
}

// function mapStateToProps(state){
// 	return { articles: state.addArticles.articles }
// }

export default Home;