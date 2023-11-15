import { axiosWithAuth } from '../auth/axioswithauth';

import {
 ADD_FRIEND,
 SET_ERROR,
 GET_FRIENDS
} from './action-types';

export function addFriend(friend) {
 return ({type:ADD_FRIEND, payload:friend});
}

export function setError(message) {
 return ({type:SET_ERROR, payload:message});
}

export function getFriends() {
 return function (dispatch) {
  axiosWithAuth()
   .get('http://localhost:9000/api/friends')
   .then(res => {
    dispatch({type:GET_FRIENDS, payload:res.data});
   })
   .catch(err => {
    console.log("axios error: "+err);
    dispatch(setError(err.message));
   });

 }

}