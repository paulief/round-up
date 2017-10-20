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
    case SIGNUP_USER:
      return {
        ...state,
        user: null,
        error: null,
        loading: true,
      }
    default:
      return state;
  }
}
