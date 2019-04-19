import React from 'react'
import { withRouter } from "react-router-dom";

class SignUp extends React.Component {

	state = {
		username: "",
		email: "",
		password: "",
		token: ""
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
		// e.target.value = "";
	}

	handleSubmit = (e) => {
		e.preventDefault();
    fetch('https://conduit.productionready.io/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: this.state}),
    }).then(res => res.json()).then(data => {
    	console.log(data.user);
    	localStorage.setItem("jwt", data.user.token)
    	var jwt = localStorage.jwt;
    	this.props.history.push("/");
    	// this.setState({token: data})
    });
  };

  render() {
    return (
    	<React.Fragment>
	      <section className="sign-in-sec">
	      	<h1 className="sign-in-hdr">Sign Up</h1>
	      	<p className="help-link">
	      		<a className="" href="#register">Need an account?</a>
	      	</p>
	      	<form>
	      		<fieldset>
	      			<input name="username" type="text" className="mail-input input" placeholder="Username" required onChange={this.handleChange} value={this.state.name} />
	      		</fieldset>
	      		<fieldset>
	      			<input name="email" type="email" className="mail-input input" placeholder="Email" required onChange={this.handleChange} value={this.state.email} />
	      		</fieldset>
	      		<fieldset>
	      			<input name="password" type="password" className="pasword-input input" placeholder="Password"required onChange={this.handleChange} value={this.state.password} />
	      		</fieldset>
	      		<button className="btn login-btn" type="submit" onClick={this.handleSubmit} >Sign in</button>
	      	</form>
	      </section>
	    </React.Fragment>
    );
  }
}

// function mapStateToProps(state) {
// 	return { tags: state.tags }
// }
export default withRouter(SignUp);