import React, { useState, Fragment } from "react";
import "./Login.css";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { login } from "../redux/action/auth";
import { Redirect } from 'react-router-dom';
import  Alerts from "../Alert/Alert";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(username, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/home' />;
  }
  return (
    <Fragment>
      <div className="inner-screen">
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div>
          <input
            type='text'
            placeholder='Username'
            name='username'
            value={username}
            onChange={e => onChange(e)}
            required
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
          />
        <input type='submit' className='btn btn-primary' value='Login' />
        </div>
        <div className='acc'>
          <Alerts/>
        </div>

      </form>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);