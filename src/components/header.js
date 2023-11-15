import React from "react";

export default function Header () {

 return (
  <div id="header" className="header container">
   <h2 className="header h2">FRIENDS DATABASE</h2>
   <div id="headbuttContainer" className="header button container">
    <button className="header button login">LOGIN.</button>
    <button className="header button friendlist">FRIENDLIST.</button>
    <button className="header button addfriend">ADDFRIEND.</button>
    <button className="header button logout">LOGOUT.</button>
   </div>
  </div>
 )
}