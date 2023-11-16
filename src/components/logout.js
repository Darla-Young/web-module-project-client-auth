import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import selectors from "../state/selectors";
import PropTypes from 'prop-types';
import { setError } from "../state/action-creators";

function Logout (props) {
 const { errMessage, setError } = props;
 console.log(errMessage);
 const navigate = useNavigate();

 useEffect(() => {
  setTimeout(() => {
   setError('');
   navigate('/login');
  },2000);
 },[])

 return (
  <div id="logout">{errMessage}</div>
 )
}

Logout.propTypes = {
 errMessage: PropTypes.string,
 setError: PropTypes.func,
}

const mapState = state => ({
 ...state,
 errMessage: selectors.selectErrMessage(state),
});

export default connect(mapState,{ setError })(Logout)