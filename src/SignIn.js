import React from 'react'

class SignIn extends React.Component {
	state = {
		email: "",
		password: ""
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
		// e.target.value = "";
	}

	// handleSubmit = (e) => {
	// 	e.preventDefault();
 //    fetch('https://conduit.productionready.io/api/users', {
 //      method: 'POST',
 //      headers: {
 //        'Content-Type': 'application/json',
 //      },
 //      body: JSON.stringify({user: this.state}),
 //    }).then(res => res.json()).then(d => console.log(d));
 //  };

  render() {
    return (
    	<React.Fragment>
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

export default SignIn;