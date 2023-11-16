import { axiosWithAuth } from '../auth/axioswithauth';

import {
 NEW_FRIEND,
 SET_ERROR,
 GET_FRIENDS,
} from './action-types';

export function setError(message) {
 return ({type:SET_ERROR, payload:message});
}

export function changeFriend(info) {
 return function (dispatch) {
  return dispatch({type:NEW_FRIEND, payload:info})
 }
}

export function addFriend(action) {
 return function (dispatch) {
  axiosWithAuth()
   .post('http://localhost:9000/api/friends',action)
   .then(res => {
    const newFriend = res.data[res.data.length-1].name;
    return dispatch(setError(`Hooray! You are now friends with ${newFriend}!`));
   })
   .catch(err => {
    dispatch(setError(err.message));
   })
 }
}

export function getFriends() {
 return function (dispatch) {
  axiosWithAuth()
   .get('http://localhost:9000/api/friends')
   .then(res => {
    dispatch({type:GET_FRIENDS, payload:res.data});
   })
   .catch(err => {
    dispatch(setError(err.message));
   });
 }
}