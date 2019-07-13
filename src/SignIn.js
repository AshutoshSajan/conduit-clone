import React from 'react'

class SignIn extends React.Component {
	state = {
		email: "",
		password: ""
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSignin = (e) => {
		e.preventDefault();
    const jwt = localStorage.jwt;
	  fetch('https://conduit.productionready.io/api/user',{
			headers: {
		    "Content-Type": "application/json",
		    "Authorization": `Token ${jwt}`
		  }}).then(res => res.json()).then(data => {
		  	console.log(data,'in signin');
		  	this.props.dispatch({type: 'ADD_USER', payload: data.user});
		  	this.props.history.push('/')
		  })
		  .catch(err => console.log(err, "sighnup err"));
  };

  render() {
    return (
      <section className="sign-in-sec">
      	<h1 className="sign-in-hdr">Sign In</h1>
      	<p className="help-link">
      		<a className="" href="#register">Need an account?</a>
      	</p>
      	<form>
      		<fieldset>
      			<input name="email" type="email" className="mail-input input" placeholder="Email" required onChange={this.handleChange} value={this.state.email} />
      		</fieldset>
      		<fieldset>
      			<input name="password" type="password" className="pasword-input input" placeholder="Password" required onChange={this.handleChange} value={this.state.password}/>
      		</fieldset>
      		<button className="btn login-btn" type="submit" onClick={this.handleSignin} >Sign in</button>
      	</form>
      </section>
    );
  }
}

export default SignIn;