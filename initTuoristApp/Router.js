import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './Login';
import Signup from './Signup';
import Organizator from './Organizator';
import Student from './Student';
import Admin from './Admin';
import Ponuda from './Ponuda';
import User from './User';
import Test from './Test';

export default class Routes extends React.Component {

    render() {
  
      return (
  
        <Router showNavigationBar={false}>
          <Stack>
            <Scene key="login" component={Login} hideNavBar={true} initial={true}/>
            <Scene key="signup" component={Signup} title="Register" hideNavBar={true} />
            <Scene key="organizator" component={Organizator} title="Organizator" hideNavBar={true} />
            <Scene key="student" component={Student} title="Student" hideNavBar={true} />
            <Scene key="admin" component={Admin} title="Admin" hideNavBar={true} />
            <Scene key="ponuda" component={Ponuda} title="Ponuda" hideNavBar={true} />
            <Scene key="user" component={User} title="User" hideNavBar={true} />
            <Scene key="test" component={Test} hideNavBar={true}  initial={false}/>
          </Stack>
        </Router>
      )
    }
  }