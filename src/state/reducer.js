import { combineReducers } from 'redux';
import {
 NEW_FRIEND,
 SET_ERROR,
 GET_FRIENDS,
} from './action-types';

function error (state = '', action) {
 switch(action.type) {
  case SET_ERROR:
   console.log(action.payload);
   return action.payload;
  default:
   return state;
 }
}

function friendlist (state = [], action) {
 switch(action.type) {
  case GET_FRIENDS:
   return action.payload;
  default:
   return state;
 }
}

function newFriend (state = {name:'',age:'',email:''}, action) {
 switch(action.type) {
  case NEW_FRIEND:
   return {
    ...state,
    [action.payload.id]: action.payload.value
   }
  default:
   return state;
 }
}

export default combineReducers({
 error,
 friendlist,
 newFriend,
});