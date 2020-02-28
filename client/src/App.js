import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter} from 'react-router-dom'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './core/Home'
// import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
// import EditProfile from './user/EditProfile'
// import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
// import Menu from './core/Menu'
import PssPort from './upwork_first/PassPort'
import PassPort from './upwork_first/PassPort';
function App() {
  return (    
      // <PassPort />
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/" component={Home}/>
          {/* <Route path="/users" component={Users}/> */}
          <Route path="/signup" component={Signup}/>
          <Route path="/signin" component={Signin}/>
          {/* <PrivateRoute path="/user/edit/:userId" component={EditProfile}/> */}
          {/* <Route path="/user/:userId" component={Profile}/> */}
          <Redirect from="/" to={{pathname: '/signin'}}/>
        </Switch>
        
      </BrowserRouter>      
  );
}

export default App;
