import React, {Component}from 'react'
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'
import Authentication from './Authentication.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import TodosListComponent from './TodosListComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import logoutComponent from './logoutComponent.jsx'
import TodoComponent from './TodoComponent.jsx'

class TodoApp extends Component {
 render() {  return (
        <div className="todoApp">
           <Router>
               <HeaderComponent/>
               <Switch>
           <Route path="/" component={LoginComponent} exact />
               <Route path="/login" component={LoginComponent} exact />
               <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
               <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
               <AuthenticatedRoute path="/todos" component={TodosListComponent}/>
               <AuthenticatedRoute path="/logout" component={logoutComponent}/>
               
               <Route component={ErrorComponent}/>
               </Switch>
               <FooterComponent/>
               <div>
                   
               </div>
           </Router>
            
        </div>
    )}
}










function ErrorComponent () {
    return <div> error  </div>
}


export default TodoApp
