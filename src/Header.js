import React from 'react'
import styled from 'styled-components'

const Head = styled.header`
	display: flex;
	justify-content: space-between;
	margin: 0 15%;
	padding: 15px 0;
`
class Header extends React.Component {
  render() {
    return (
      <Head className="header">
        <h1>
          <a className="conduit" href="/">conduit</a>
        </h1>
        <ul className="login-sec">
        	<li><a href="/">home</a></li>
        	<li><a href="/SignIn">signIn</a></li>
        	<li><a href="/SignUp">signUp</a></li>
        </ul>
      </Head>
    );
  }
}

export default Header;