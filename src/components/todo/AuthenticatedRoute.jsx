import React, { Component } from 'react';
import { Redirect ,Route} from 'react-router-dom';
import Authentication from './Authentication.js';

class AuthenticatedRoute extends Component {
    render() {
        if(Authentication.isUserLoggedIn()){
           return <Route {...this.props}/>
        }
        else {
          return  <Redirect to="/login"/>
        }
    }
}
export default  AuthenticatedRoute
