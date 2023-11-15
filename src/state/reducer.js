import { combineReducers } from 'redux';
import {
 ADD_FRIEND,
 SET_ERROR,
 GET_FRIENDS,
} from './action-types';

function error (state = '', action) {
 switch(action.type) {
  case SET_ERROR:
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

const friend = {
 name: '',
 age: '',
 email: '',
}
function addFriend (state = friend, action) {
 switch(action.type) {
  case ADD_FRIEND:
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
 addFriend,
});