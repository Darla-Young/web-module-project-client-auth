import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Header () {
 const navigate = useNavigate();

 return (
  <div id="header" className="header container">
   <h2 className="header h2">FRIENDS DATABASE</h2>
   <div id="headbuttContainer" className="header button container">
    <button className="header button login" onClick={()=>navigate('/login')} >LOGIN.</button>
    <button className="header button friendlist" onClick={()=>navigate('/friendlist')} >FRIENDLIST.</button>
    <button className="header button addfriend" onClick={()=>navigate('/addfriend')} >ADDFRIEND.</button>
    <button className="header button logout" onClick={()=>navigate('/login')} >LOGOUT.</button>
   </div>
  </div>
 )
}