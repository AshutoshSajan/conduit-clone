import React from 'react'
import { connect } from 'react-redux';

class SignUp extends React.Component {

	state = {
		username: "",
		email: "",
		password: "",
		token: ""
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
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
    	console.log(data, data.user, "signUp user res");
    	if(data.errors){
    		console.log(data.errors);
    		this.setState({ errors: data.errors });
    	} else if(data.user){
    		localStorage.setItem("jwt", data.user.token)
    		this.props.dispatch({type: 'ADD_USER_INFO', user: data.user});
    		this.props.history.push("/");
    	} 
    }).catch( err => console.log(err, "signUp err"));
  };

  render() {
  	var err = this.state.errors || "";
  	
    return (
    	<React.Fragment>
	      <section className="sign-in-sec">
	      	<h1 className="sign-in-hdr">Sign Up</h1>
	      	<p className="help-link">
	      		<a className="" href="#register">Need an account?</a>
	      	</p>
	      	<form>
	      		<fieldset>
	      			<p style={{ color: "darkred" }}>{err.username ?  "username " + err.username : ""}</p>
	      			<input name="username" type="text" className="mail-input input" placeholder="Username" required onChange={this.handleChange} value={this.state.name} />
	      		</fieldset>
	      		<fieldset>
	      			<p style={{ color: "darkred" }}>{err.email ? "email " + err.email : ""}</p>
	      			<input name="email" type="email" className="mail-input input" placeholder="Email" required onChange={this.handleChange} value={this.state.email} />
	      		</fieldset>
	      		<fieldset>
	      			<p style={{ color: "darkred" }}>{err.password ? "password " + err.password : ""}</p>

	      			<input name="password" type="password" className="pasword-input input" placeholder="Password"required onChange={this.handleChange} value={this.state.password} />
	      		</fieldset>
	      		<button className="btn login-btn" type="submit" onClick={this.handleSubmit} >Sign in</button>
	      	</form>
	      </section>
	    </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
	return { tags: state.tags }
}

export default connect(mapStateToProps)(SignUp);