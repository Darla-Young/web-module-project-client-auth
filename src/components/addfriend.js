import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFriend, changeFriend } from "../state/action-creators";
import PropTypes from 'prop-types';
import selectors from "../state/selectors";

function Addfriend (props) {
 const { addFriend, changeFriend, newFriend, errMessage } = props;
 const name = newFriend.name;
 const age = newFriend.age;
 const email = newFriend.email;

 const navigate = useNavigate();

 useEffect(() => {
  if (!localStorage.getItem('token')) {
   return navigate('/login');
  }
 },[]);

 const onChange = evt => {
  const id = evt.target.id;
  changeFriend({
   id: id,
   value: evt.target.value,
  });
 }

 const onSubmit = evt => {
  evt.preventDefault();
  addFriend(newFriend);
  navigate('/friends');
 }

 return (
  <div id="addfriend" className="form addfriend main container" >
   <div className="error">{errMessage ? {errMessage} : ''}</div>
   <h1 className="form addfriend h1" >ADD FRIEND</h1>
   <form id="addfriendContainer" className="form addfriend container" onSubmit={onSubmit} >
    <label className="form addfriend name label container" >
     FRIEND NAME<br/>
     <input id="name" className="form addfriend name input" type="text" onChange={onChange} value={name} ></input>
    </label><br/>
    <label className="form addfriend name label container" >
     FRIEND AGE<br/>
     <input id="age" className="form addfriend age input" type="number" onChange={onChange} value={age} ></input>
    </label><br/>
    <label className="form addfriend email label container" >
     FRIEND EMAIL<br/>
     <input id="email" className="form addfriend email input" type="email" onChange={onChange} value={email} ></input>
    </label><br/>
    <button className="form addfriend submit button" type="submit">SUBMIT</button>
   </form>
  </div>
 )
}

Addfriend.propTypes = {
 newFriend: PropTypes.object,
 addFriend: PropTypes.func,
 changeFriend: PropTypes.func,
 errMessage: PropTypes.string,
}

const mapState = state => ({
 ...state,
 newFriend: selectors.newFriend(state),
 errMessage: selectors.selectErrMessage(state),
});

export default connect(mapState,{ addFriend, changeFriend })(Addfriend)