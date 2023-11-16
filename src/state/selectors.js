import { createSelector } from "reselect";

const selectErrMessage = state => state.error;

const friendSelector = state => state.friendlist;

const newName = state => state.newFriend.name;
const newAge = state => state.newFriend.age;
const newEmail = state => state.newFriend.email;
const newFriend = createSelector([newName,newAge,newEmail], (name,age,email) => {
 const friend = {
  name: name,
  age: age,
  email: email,
 }
 return friend;
});

export default {
 friendSelector,
 newName,
 newAge,
 newEmail,
 newFriend,
 selectErrMessage,
}