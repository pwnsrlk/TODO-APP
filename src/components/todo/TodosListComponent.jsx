import React, { Component } from 'react'
import TodoData from '../../api/todo/TodoData'
import Authentication from './Authentication.js'
import moment from 'moment'

class TodosListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
               
            ],
            message:null
        }
        this.deleteTodo= this.deleteTodo.bind(this);
        this.refreshTodo= this.refreshTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.addTodo= this.addTodo.bind(this);
    }

    componentDidMount() {
    this.refreshTodo() 
        
    }
    refreshTodo() {
        let username= Authentication.getLoggedInUserName()
        TodoData.getAllTodos(username)
        .then(
            response => {
                this.setState({todos: response.data})
            }
        )
    }
    updateTodo(id){
        //console.log('update'+ id)
        this.props.history.push(`/todos/${id}`)
        // let username= Authentication.getLoggedInUserName()
        // TodoData.deleteTodo(username,id)
        // .then(
        //     response=>{
        //         this.setState({message: `delete todo ${id}`})
        //         this.refreshTodo();
        //     }
        //     )
    }

    deleteTodo(id){
        let username= Authentication.getLoggedInUserName()
        TodoData.deleteTodo(username,id)
        .then(
            response=>{
                this.setState({message: `delete todo ${id}`})
                this.refreshTodo();
            }
            )
    }
    addTodo(){ 
       
        this.props.history.push(`/todos/-1`)  
    }
    

    render() {  return (
        <div>
            <h1>Todos List</h1>
            {this.state.message && <div className="alert alert-danger">{this.state.message}</div>}
            <div className="container">
            <table className="table">
                <thead>
                    <tr>
                       
                        <th className="mt-5">description</th>
                        <th>is completed</th>
                        <th>target date</th>
                        <th>Update</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                   {
                       this.state.todos.map(
                           todo => 
                           <tr key={todo.id}>
                           
                           <td className="ml-5">{todo.description}</td>
                           <td>{todo.done.toString()}</td>
                           <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                           <td><button className="btn btn-success" onClick={() =>this.updateTodo(todo.id)}>Update</button></td>
                           <td><button className="btn btn-warning" onClick={() =>this.deleteTodo(todo.id)}>Delete</button></td>
                           </tr> 
                       )
                      
                       }
                </tbody>
            </table>
           <div className="row">
               <button onClick={this.addTodo}>Add</button>
               </div> 
            </div>
        </div>
    )}
}
export default TodosListComponent