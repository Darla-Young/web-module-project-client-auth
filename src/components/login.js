import React from "react";

export default function Login () {

 return (
  <div id="login" className="login main container" >
   <h1 className="login h1" >LOGIN</h1>
   <form id="loginContainer" className="login container">
    <label className="login username label container" >
     USERNAME <br/>
     <input className="login username input" type="text"></input>
    </label><br/>
    <label className="login password label container" >
     PASSWORD <br/>
     <input className="login password input" type="password"></input>
    </label><br/>
    <button className="login submit button" type="submit">SUBMIT</button>
   </form>
  </div>
 )
}