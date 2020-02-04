import React from 'react';
import { connect } from 'react-redux';

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSignin = e => {
    e.preventDefault();

    fetch("https://conduit.productionready.io/api/users/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: this.state
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data, 'in signin');
        if(data.user){
          if(data.user.token) localStorage.setItem('jwt', data.user.token);
          this.props.dispatch({ type: 'ADD_USER_INFO', payload: data.user });
          this.props.history.push('/');
        }
      })
      .catch(err => console.log(err, 'sighnup err'));
  };

  render() {
    return (
      <section className='sign-in-sec'>
        <h1 className='sign-in-hdr'>Sign In</h1>
        <p className='help-link'>
          <a className='' href='#register'>
            Need an account?
          </a>
        </p>
        <form>
          <fieldset>
            <input
              name='email'
              type='email'
              className='mail-input input'
              placeholder='Email'
              required
              onChange={this.handleChange}
              value={this.state.email}
            />
          </fieldset>
          <fieldset>
            <input
              name='password'
              type='password'
              className='pasword-input input'
              placeholder='Password'
              required
              onChange={this.handleChange}
              value={this.state.password}
            />
          </fieldset>
          <button
            className='btn login-btn'
            type='submit'
            onClick={this.handleSignin}
          >
            Sign in
          </button>
        </form>
      </section>
    );
  }
}

function mapStateToProps(state) {
	return { tags: state.tags }
}
export default connect(mapStateToProps) (SignIn);
