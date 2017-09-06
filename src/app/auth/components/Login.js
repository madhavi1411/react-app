import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
 import * as sessionActions from '../Actions';
import Input from './Input';

class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        username: '',
        password: ''
    };

    //Old ES5 style bound, method
    //given for reference, with es6, we could use => in jsx
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e, history) {
    e.preventDefault();
    const { username, password } = this.state;
    const { login } = this.props.actions;
    //FIXME: add the redirct after user logged in
    login(username, password, this.props.history);
  }

  onChange(e) {
    const { value, name } = e.target;
    this.setState({ [name] : value });
  }

  render() {
    const { username, password  } = this.state;
    

    return (
      <div>
        <h3>LOGIN</h3>
        <form onSubmit={(e)=>this.onSubmit(e)}>
            <Input
              name="username"
              value={username}
              label="Username"
              type="text"
              onChange={this.onChange}
            />
            <Input
              name="password"
              value={password}
              label="Password"
              type="password"
              onChange={this.onChange}
            />
            
            <button type="submit">Login</button>
        </form>
        {/* { submitButton() } */}
      </div>
    );
  }
}

const { object } = PropTypes;

Login.propTypes = {
  actions: object.isRequired
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
};

export default connect(null, mapDispatch)(Login);