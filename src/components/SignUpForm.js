import React from 'react';
import PropTypes from 'prop-types';

const SignUpForm = ({ loading, signUpUser }) => (
  <div>
    {
      loading ? <p>Loading</p> : <p>Not Loading</p>
    }
    <button onClick={() => signUpUser('test', 'test')}>
      Dispatch
    </button>
  </div>
);

SignUpForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  signUpUser: PropTypes.func.isRequired,
}

export default SignUpForm
