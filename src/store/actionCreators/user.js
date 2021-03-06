import firebase from "../../auth/firebase";

import * as userActionTypes from "../actionTypes/user";

function onUserLogoutSuccess() {
  return {
    type: userActionTypes.USER_LOGOUT_SUCCESS,
  };
}

function userLoginSuccess(user) {
  return {
    type: userActionTypes.USER_LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
}

function logoutUser() {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        dispatch(onUserLogoutSuccess());
      })
      .catch(function (error) {
        // An error happened.
      });
  };
}

export { userLoginSuccess, logoutUser };
