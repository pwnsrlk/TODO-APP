import axios from 'axios';

class TodoData{

    getAllTodos(name){
        return axios.get(`http://localhost:8080/jpa/users/${name}/todos`)
    }
    getTodo(name,id){
        return axios.get(`http://localhost:8080/jpa/users/${name}/todos/${id}`)
    }
    deleteTodo(name,id){
        return axios.delete(`http://localhost:8080/jpa/users/${name}/todo/${id}`)
    }

   updateTodo(name,id,todo){
       return axios.put(`http://localhost:8080/jpa/users/${name}/todos/${id}`,todo)
   }

   creteTodo(name,todo){
    return axios.post(`http://localhost:8080/jpa/users/${name}/todos`,todo)
}

}

export default new TodoData();