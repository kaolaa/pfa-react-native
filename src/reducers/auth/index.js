
import axios from 'axios';
// Initial state
const initialState = {
  isLoggedIn: false,
  hasSkippedLogin: false,
  hasPassedWalkthrough: false,
  hasPressedSingupButton: false,
  id: null,
  name: null,
  userToken: null,
  tes:'hello'
};
import {AsyncStorage} from 'react-native';

// Actions
const SKIPPED_LOGIN = 'AuthState/SKIP';
const LOGGED_IN = 'AuthState/LOGGED_IN';
const PASSED_WALKTHROUGH = 'AuthState/PASSED_WALKTHROUGH';
const LOGGED_OUT = 'AuthState/LOGGED_OUT';
const FETCH_USERS = 'FETCH USERS';
// Action creators
export async function loggedIn(userdata,user) {
  return function action(dispatch) {
    dispatch({ type: SKIPPED_LOGIN })
    axios.post('http://192.168.1.6:5000/api/users/auth/login', {
    email: userdata.email,
    password: userdata.password
  }).
    then(res => {
      console.log(userdata)
      if(res.data.user){
        console.log('hey')
        user=res.data.user
      }
    })  
    return {
      type: SKIPPED_LOGIN,
      payload: userdata,
    };
}
}
export function skipLogin() {
  // AsyncStorage.setItem("userID", "5c6b4f28258dcb2b8a9c75b4");       

  return {
    type: SKIPPED_LOGIN,
  };
}

export function passedWalkthrough() {
  return {
    type: PASSED_WALKTHROUGH,
  };
}

export function loggedOut() {
  return {
    type: LOGGED_OUT,
  };
}

// Reducer
export default function AuthStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGGED_IN:
      return Object.assign({}, state, {
        hasPassedWalkthrough: state.hasPassedWalkthrough,
        hasSkippedLogin: true,
        isLoggedIn: true,
        id: action.data.id,
        name: action.data.name,
        userToken: action.data.userToken,
      });
    case SKIPPED_LOGIN:
      return Object.assign({}, state, {
        isLoggedIn: false,
        hasSkippedLogin: true,
        id: null,
        name: null,
        hasPassedWalkthrough: state.hasPassedWalkthrough,
      });
    case PASSED_WALKTHROUGH:
      return Object.assign({}, state, {
        isLoggedIn: false,
        hasSkippedLogin: false,
        id: null,
        name: null,
        hasPassedWalkthrough: true,
      });
    case LOGGED_OUT:
      return Object.assign({}, state, {
        isLoggedIn: false,
        hasSkippedLogin: false,
        loggedOut: true,
        hasPassedWalkthrough: state.hasPassedWalkthrough,
        id: null,
        name: null,
      });
    default:
      return state;
  }
}
