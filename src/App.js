// REACT
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// COMPONENTS
import './App.css';
import Header from './components/header';
import Login from './components/login';
import Friendlist from './components/friendlist';
import Addfriend from './components/addfriend';
import Logout from './components/logout';

// REDUX
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './state/reducer';
let store
export const resetStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
}
resetStore()



function App() {
  return (
   <Provider store={store}>
    <div className="App">
     <Header />
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/friends" element={<Friendlist />} />
      <Route path="/friends/add" element={<Addfriend />} />
      <Route path='/logout' element={<Logout />} />
     </Routes>
    </div>
   </Provider>
  );
}

export default App;
