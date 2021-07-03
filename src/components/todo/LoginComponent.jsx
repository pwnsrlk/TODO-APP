import React, { Component } from 'react'
import Authentication from './Authentication.js'

class LoginComponent extends Component {

    constructor (props) {
        super(props)
         
        this.state = {
            username:'username',
            password:'',
            hasLoginFailed: false,
            showSuccessMessage:false

        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.loginClicked = this.loginClicked.bind(this);

    }

    handleUsername(event) {
          //console.log(event.target.value);
          this.setState({username:event.target.value});


    }
    handlePassword(event) {
       // console.log(event.target.value);
        this.setState({password:event.target.value});
    }

    loginClicked(){  
        //  if(this.state.username==='pawan' && this.state.password ==='1234'){
        //      Authentication.registerSuccessfulLogin(this.state.username,this.state.password)
        //    this.props.history.push(`/welcome/${this.state.username}`)
        //    // this.setState({showSuccessMessage:true});
        //     //this.setState({hasLoginFailed:false});
        //  }
   
        //  else{
        //     this.setState({hasLoginFailed:true});
        //     this.setState({showSuccessMessage:false});
        //  }
        //  Authentication.basicAuthentication(this.state.username,this.state.password)
        //  .then(
        //      () => {
        //         Authentication.registerSuccessfulLogin(this.state.username,this.state.password)
        //         this.props.history.push(`/welcome/${this.state.username}`)
        //      }
        //  ).catch(
        //      ()=> {
        //         this.setState({hasLoginFailed:true});
        //         this.setState({showSuccessMessage:false});
        //      }
        //  )
         Authentication.jwtAuthentication(this.state.username,this.state.password)
         .then(
             (response) => {
                Authentication.registerSuccessfulLoginJwt(this.state.username,response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
             }
         ).catch(
             ()=> {
                this.setState({hasLoginFailed:true});
                this.setState({showSuccessMessage:false});
             }
         )
        
       // console.log(this.state)
    }

    render() { return (
        <div>
          
       <div className="container" onclick="onclick">
          <div className="top"></div>
  <div className="bottom"></div>
  <div className="center">
    <h2>Please Sign In</h2>
    <input type="email" name="username "value={this.state.username} onChange={this.handleUsername}/>
    <input type="password" name="password "value={this.state.password} onChange={this.handlePassword} placeholder="password"/>
    <button onClick={this.loginClicked}>Login</button>
   {this.state.hasLoginFailed && <div className="alert alert-warning">
            indvalid 
        </div> }
    {this.state.showSuccessMessage && <div>
            success bitch
        </div>}
    <h2>&nbsp;</h2>
  </div>
  
</div>

        </div>
    )}
}
export default LoginComponent