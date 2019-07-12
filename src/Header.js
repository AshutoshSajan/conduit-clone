import React from 'react'
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    console.log(this.props)
    return (
      <section className="header">
        <h1>
          <Link to='/'>
            <span className="conduit">conduit</span>
          </Link>
        </h1>
        <div className="login-sec">
        	<a href="/">home</a>
          {
            this.props.UserInfo ? 
            <>
              <a href='/NewPost'>
                <i className="far fa-edit"></i>
                <span>New Post</span>
              </a>
              <a href='/Settings'>
                  <i className="fas fa-cog"></i>
                  <span>Settings</span>
              </a>
              <a href='/Profile'>
                <span> Profile </span>
              </a>
            </>
            :
            <div>
              <a href="/SignIn" >signIn</a>
              <a href="/SignUp" >signUp</a>
            </div>
          } 
        </div>
      </section>
    );
  }
}

export default connect(({UserInfo})=>({UserInfo})) (Header);