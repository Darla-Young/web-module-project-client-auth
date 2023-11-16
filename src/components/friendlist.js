import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getFriends } from "../state/action-creators";
import selectors from "../state/selectors";
import { useNavigate } from 'react-router-dom';

function Friendlist (props) {
 const { friendlist, getFriends, errMessage } = props;
 
 const navigate = useNavigate();

 useEffect(() => {
  if (!localStorage.getItem('token')) {
   return navigate('/login');
  } else {getFriends()}
 },[]);

 return (
  <div id="friendlist" className="friendlist main container" >
   {/*  */}
   <div className="error">{errMessage ? {errMessage} : ''}</div>
   <h1 className="friendlist h1" >FRIENDS LIST</h1>
   <div id="friendlistContainer" className="friendlist list container">
    {(friendlist || []).map(friend => {
     return (
      <p key={friend.id} id={friend.id} className="friendlist p">- {friend.name.toUpperCase()} - {friend.email.toUpperCase()}</p>
     )
    })}
   </div>
  </div>
 )
}

Friendlist.propTypes = {
 friendlist: PropTypes.array,
 getFriends: PropTypes.func,
 errMessage: PropTypes.string,
}

const mapState = state => ({
 ...state,
 friendlist: selectors.friendSelector(state),
 errMessage: selectors.selectErrMessage(state),
});

export default connect(mapState,{ getFriends })(Friendlist);