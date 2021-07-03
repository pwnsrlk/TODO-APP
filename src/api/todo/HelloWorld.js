import axios from 'axios'

class HelloWorld{

    executeHelloWorld(){

        return axios.get('http://localhost:8080/hello-world')
        
    }
    executeHelloWorldBean(){

        return axios.get('http://localhost:8080/hello-world-bean')
        
    }

    executeHelloWorldPathVariable(name){

        // let username ='pawan'
        // let password ='1234'
        // let basicAuth = 'basic ' + window.btoa(`${username}:${password}`);

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
            // {
            //     headers:{
            //         authorization: basicAuth

            //     }
            // }        
        )
        
    }
}

export default new HelloWorld();