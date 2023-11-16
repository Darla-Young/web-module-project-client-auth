import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { setError } from "../state/action-creators";
import PropTypes from 'prop-types';
import selectors from "../state/selectors";

function Login (props) {
 const { errMessage, setError } = props;
 const [ user, setUser ] = useState({username: '', password: ''});

 const navigate = useNavigate();
 
 useEffect(() => {
  if (localStorage.getItem('token')) {
   return navigate('/friends');
  }
 },[]);
 

 const onChange = evt => {
  const id = evt.target.id;
  setUser({
   ...user,
   [id]: evt.target.value,
  });
 }

 const onSubmit = evt => {
  evt.preventDefault();
  axios
   .post('http://localhost:9000/api/login', user)
   .then(res => {
    localStorage.setItem('token', res.data.token);
    setError('');
    navigate('/friends');
   })
   .catch(err => {
    console.log(err);
    setError(err.response.data.error)
   });
 }

 return (
  <div id="login" className="form login main container" >
   <div className="error">{errMessage ? {errMessage} : ''}</div>
   <h1 className="form login h1" >LOGIN</h1>
   <form id="loginContainer" className="form login container" onSubmit={onSubmit} >
    <label className="form login username label container" >
     USERNAME <br/>
     <input id="username" className="form login username input" type="text" onChange={onChange} value={user.username} ></input>
    </label><br/>
    <label className="form login password label container" >
     PASSWORD <br/>
     <input id="password" className="form login password input" type="password" onChange={onChange} value={user.password} ></input>
    </label><br/>
    <button className="form login submit button" type="submit">SUBMIT</button>
   </form>
  </div>
 )
}

Login.propTypes = {
 errMessage: PropTypes.string,
 setError: PropTypes.func,
}

const mapState = state => ({
 ...state,
 errMessage: selectors.selectErrMessage(state),
});

export default connect(mapState,{ setError })(Login)