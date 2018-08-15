import React from 'react';
import PropTypes from 'prop-types';

const defaultStyle = {
  width: 350,
  height: 500,
  margin: 10,
};

const defaultBoxStyle = {
  width: 350,
  height: 50,
  margin: 10,
};

const LoginBox = props => (
  <div id="loginWrapper" style={props.wrapperStyle}>
    <form id="loginBox" style={props.loginStyle}>
      <label htmlFor="login_name">Username</label>
      <input type="text" name="login_name" value={props.username} onChange={props.usernameChange} placeholder="Account Name" />
      <br/>
      <label htmlFor="login_password">Password</label>
      <input type="password" value={props.password} onChange={props.passwordChange} name="login_password" placeholder="Password" />
      <br/>
      <button onClick={props.login} >Login</button>
    </form>

    <form id="RegisterBox" style={props.registerStyle}>
      <label htmlFor="register_username">Account Name</label>
      <input type="text" name="register_username" placeholder="Account Name" />
      <br/>
      <label htmlFor="register_password">Account Password</label>
      <input type="password" name="register_password" placeholder="Password" />
      <br/>
      <button id="registerButton" >Register</button>
    </form>
  </div>);

LoginBox.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  usernameChange: PropTypes.func.isRequired,
  passwordChange: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  wrapperStyle: PropTypes.shape(),
  loginStyle: PropTypes.shape(),
  registerStyle: PropTypes.shape(),
};

LoginBox.defaultProps = {
  wrapperStyle: defaultStyle,
  loginStyle: defaultBoxStyle,
  registerStyle: defaultBoxStyle,
};

export default LoginBox;
