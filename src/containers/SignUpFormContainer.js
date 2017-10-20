import { connect } from 'react-redux';
import SignUpForm from '../components/SignUpForm';
import { signUpUser } from '../actions/userActions'

const mapStateToProps = (state) => {
  const { loading } = state.user;

  return {
    loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (username, password) => dispatch(signUpUser(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
