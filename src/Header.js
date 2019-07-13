import React from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    console.log(this.props, "header props");
    var user = this.props.UserInfo || "";

    return (
      <section className="header">
        <h1>
          <Link to='/'>
            <span className="conduit">conduit</span>
          </Link>
        </h1>
        <div className="login-sec">
        	<Link to="/">home</Link>
          {
            this.props.UserInfo ? 
              <div>
                <Link to='/NewPost'>
                  <i className="far fa-edit"></i>
                  <span>New Post</span>
                </Link>
                <Link to='/Settings'>
                    <i className="fas fa-cog"></i>
                    <span>Settings</span>
                </Link>
                <Link to='/Profile'>
                  <span> { user && user.username ? user.username :"Profile" } </span>
                </Link>
              </div>
            :
              <div>
                <Link to="/SignIn">signIn</Link>
                <Link to="/SignUp">signUp</Link>
              </div>
          } 
        </div>
      </section>
    );
  }
}

export default connect(({UserInfo})=>({UserInfo})) (Header);