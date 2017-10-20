//Sign Up User
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

//Sign In User
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';

export const signUpUser = (username, password) => {
  return {
    type: SIGNUP_USER,
  }
};
