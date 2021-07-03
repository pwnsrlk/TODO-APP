import React, { Component } from 'react'
import LoginComponent from './LoginComponent.jsx'
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'
import HelloWorld from '../../api/todo/HelloWorld'

class WelcomeComponent extends Component {

    constructor(props) {
        super(props)

        this.welcomeMessage= this.welcomeMessage.bind(this);

        this.state = {
            welcomeMessage:''
        }

        this.successfulMessage = this.successfulMessage.bind(this)
    }

    render() {  return (
        <>
            <h1>Welcome!</h1>
            <div className="Container">
                Welcome {this.props.match.params.name}.
                you can manage your todos <Link to="/todos">here</Link>.
            </div>
            
            <div className="Container">
                click here to see bitch.
                <button onClick={this.welcomeMessage}
                className="btn btn-success">welcome</button>
            </div>
            <div className="Container">

             {this.state.welcomeMessage}

            </div>
        </>
    )
}
welcomeMessage(){  

    HelloWorld.executeHelloWorldPathVariable(this.props.match.params.name)
    .then(response=> this.successfulMessage(response))
    .catch( error => this.handleError(error) )

}
successfulMessage(response){
    console.log(response)
   this.setState({welcomeMessage:response.data.message})
}
handleError(error) {
    console.log(error.response)
    let errorMessage = '';
    
    if(error.message) 
        errorMessage += error.message

    if(error.response && error.response.data) {
        errorMessage += error.response.data.message
    }

    this.setState({welcomeMessage: errorMessage})
}


}
export default WelcomeComponent
