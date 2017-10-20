import {
  SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE,
  SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE,
} from '../actions/userActions';

const initialState = {
  user: null,
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {

    // SIGN UP
    case SIGNUP_USER:
      return {
        ...state,
        user: null,
        error: null,
        loading: true,
      };
    case SIGNUP_USER_SUCCESS:
      return state;
    case SIGNUP_USER_FAILURE:
      return state;

    // SIGN IN
    case SIGNIN_USER:
      return state;
    case SIGNIN_USER_SUCCESS:
      return state;
    case SIGNIN_USER_FAILURE:
      return state;

    default:
      return state;
  }
}
