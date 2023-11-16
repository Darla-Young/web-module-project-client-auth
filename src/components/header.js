import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Header () {
 const navigate = useNavigate();

 
 // useEffect(() => {
 //  if (!localStorage.getItem('token')) {
 //   return navigate('/login');
 //  } else {getFriends()}
 // },[]);

 return (
  <div id="header" className="header container">
   <h2 className="header h2">FRIENDS DATABASE</h2>
   <div id="headbuttContainer" className="header button container">
    {!localStorage.getItem('token') ?
    <button className="header button login" onClick={()=>navigate('/login')} >LOGIN.</button> : <>
    <button className="header button friendlist" onClick={()=>navigate('/friends')} >FRIENDLIST.</button>
    <button className="header button addfriend" onClick={()=>navigate('/friends/add')} >ADDFRIEND.</button>
    <button className="header button logout" onClick={()=>navigate('/login')} >LOGOUT.</button> </>}
   </div>
  </div>
 )
}