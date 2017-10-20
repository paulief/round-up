//Sign Up User
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

//Sign In User
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';

const mockPostUser = (username, password) => {
  const user = { username, password };
  return Promise.resolve(user);
}

export const startSignUpUser = () => {
  return {
    type: SIGNUP_USER,
  };
};

export const signUpUserSuccess = (user) => {
  return {
    type: SIGNUP_USER_SUCCESS,
    user,
  }
}

export const signUpUser = (username, password) => {
  return (dispatch) => {
    dispatch(startSignUpUser());
    mockPostUser(username, password)
      .then((user) => {
        dispatch(signUpUserSuccess(user));
      });
  }
};
