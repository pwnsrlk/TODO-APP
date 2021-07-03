import axios from 'axios'

class Authentication{

    basicAuthentication(username,password){
       
      return axios.get(`http://localhost:8080/besicauth`,{headers: {authorization: this.createBasicAuth(username,password)}})
    }
    jwtAuthentication(username,password){
       
        return axios.post('http://localhost:8080/authenticate', {
            username,
            password
        })
    }

    createBasicAuth(username,password){
        return 'basic ' + window.btoa(`${username}:${password}`);
    }

    registerSuccessfulLogin(username,password){
      

        
        //let basicAuth = 'basic ' + window.btoa(`${username}:${password}`);

        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser',username)
        this.setInterceptor(this.createBasicAuth(username,password))
    }
    registerSuccessfulLoginJwt(username,token){
        sessionStorage.setItem('authenticatedUser',username)
        this.setInterceptor(this.createJWTToken(token))

    }
    createJWTToken(token) {
        return 'Bearer ' +  token
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }
    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user ===null) return false
        return true
    }
    getLoggedInUserName(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user ===null) return false
        return user
    }

    setInterceptor(token){
        
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
           return config
         }
     )
    }
}

export default new Authentication()