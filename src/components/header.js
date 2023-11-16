import React from "react";
import { useNavigate } from 'react-router-dom';
import { axiosWithAuth } from "../auth/axioswithauth";
import { connect } from 'react-redux';
import { setError } from "../state/action-creators";
import PropTypes from 'prop-types';

function Header (props) {
 const { setError } = props;
 const navigate = useNavigate();

 const onLogout = () => {
  axiosWithAuth()
   .post('http://localhost:9000/api/logout')
   .then(() => {
    localStorage.removeItem('token');
    setError(`You have successfully logged out.`);
    navigate('/logout');
   })
   .catch(err => {
    setError(err.message);
   });
 }

 return (
  <div id="header" className="header container">
   <h2 className="header h2">FRIENDS DATABASE</h2>
   <div id="headbuttContainer" className="header button container">
    {!localStorage.getItem('token') ?
    <button className="header button login" onClick={()=>navigate('/login')} >LOGIN.</button> : <>
    <button className="header button friendlist" onClick={()=>navigate('/friends')} >FRIENDLIST.</button>
    <button className="header button addfriend" onClick={()=>navigate('/friends/add')} >ADDFRIEND.</button>
    <button className="header button logout" onClick={onLogout} >LOGOUT.</button> </>}
   </div>
  </div>
 )
}

Header.propTypes = {
 errMessage: PropTypes.string,
 setError: PropTypes.func,
}

export default connect(null,{ setError })(Header)