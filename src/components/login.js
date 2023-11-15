import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login (props) {
 const [ user, setUser ] = useState({username: '', password: ''})
 const [ error, setError ] = useState('');

 const navigate = useNavigate();

 // const axiosWithAuth = () => {
 //  const token = localStorage.getItem('token');
 //  return axios.create({
 //   headers: {
 //    Authorization: token,
 //   },
 //  });
 // }

  // if (!localStorage.getItem('token')) {
  //  return <Navigate to='/login' />
  // }

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
    console.log(res);
    localStorage.setItem('token', res.data.token);
    setError('');
    navigate('/friendlist');
   })
   .catch(err => {
    console.log(err);
    setError(err.response.data.error)
   });
 }

 return (
  <div id="login" className="login main container" >
   <h1 className="login h1" >LOGIN</h1>
   <form id="loginContainer" className="login container" onSubmit={onSubmit} >
    <label className="login username label container" >
     USERNAME <br/>
     <input id="username" className="login username input" type="text" onChange={onChange} value={user.username} ></input>
    </label><br/>
    <label className="login password label container" >
     PASSWORD <br/>
     <input id="password" className="login password input" type="password" onChange={onChange} value={user.password} ></input>
    </label><br/>
    {error ? <p className="login error">{error}</p> : null}
    <button className="login submit button" type="submit">SUBMIT</button>
   </form>
  </div>
 )
}