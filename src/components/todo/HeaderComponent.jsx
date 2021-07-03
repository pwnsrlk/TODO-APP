import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'
import Authentication from './Authentication.js'
import { withRouter } from 'react-router';

class HeaderComponent extends Component {

    render() {
        
        const isUserLoggedIn= Authentication.isUserLoggedIn()
        console.log(isUserLoggedIn)
        
        return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div></div>
                <ul className="navbar-nav">
                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/welcome/pawan">home</Link></li>}
                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/todos">todos</Link></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                   {!isUserLoggedIn &&<li className="nav-link"><Link className="nav-link" to="/login">login</Link></li>}
                   {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/logout" onClick={Authentication.logout}>logout</Link></li>}
                </ul>
            </nav>
        </header>
    )}
}
export default withRouter(HeaderComponent);