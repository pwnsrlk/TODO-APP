import React, { Component } from 'react'
import moment from 'moment'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import TodoData from '../../api/todo/TodoData.js'
import Authentication from './Authentication.js'

class TodoComponent extends Component {

    constructor (props) {
        super(props)

        this.state={
            id:this.props.match.params.id,
            description:'',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this)
    }
    componentDidMount() {
       if(this.state.id=== -1){
           return
       }

        let username= Authentication.getLoggedInUserName()
        TodoData.getTodo(username,this.state.id)
        .then(response => this.setState({
            description: response.data.description,
            targetDate:moment(response.data.targetDate).format('YYYY-MM-DD')
        }))
    }
    validate(values) {
        let errors ={}
       if(!values.description){
           errors.description ='enter a description'
       } else if(values.description.length<5){
           errors.description ='description must have at least 5 characters'
       }

       if (!moment(values.targetDate).isValid()){
           errors.targetDate ='enter valid date'
       }
        return errors
    }
    onSubmit(values){
        let username= Authentication.getLoggedInUserName()
      if(this.state.id===-1){
          TodoData.creteTodo(username,{
            id:this.state.id,
            description:values.description,
            targetDate:values.targetDate
          }).then(()=>
          this.props.history.push(`/todos`))

      } else

        {TodoData.updateTodo(username,this.state.id,{
            id:this.state.id,
            description:values.description,
            targetDate:values.targetDate
        }).then(()=>
            this.props.history.push(`/todos`)
        )}
        
        //console.log(values)
    }

    render() { 
        
        let description= this.state.description
        let targetDate =this.state.targetDate

        return(


        <div>
            <h1>Todo</h1>
            <div className="Container"></div>
            <Formik
                  initialValues ={{ description,targetDate}}
                  onSubmit={this.onSubmit}
                  validate={this.validate}
                  validateOnChange={false}
                  validateOnBlur={false}
                  enableReinitialize={true}

            >
                {
                    (props)=>
                    (
                   <Form>
                       <ErrorMessage name="description"component="div" className="alert alert-danger" ></ErrorMessage>
                       <ErrorMessage name="targetDate"component="div" className="alert alert-danger" ></ErrorMessage>
                       <fieldset className="form-group">
                           <label>Description</label>
                           <Field className="form-control" type="text" name="description"></Field>
                       </fieldset>
                       <fieldset className="form-group">
                           <label>Target Date</label>
                           <Field className="form-control" type="date" name="targetDate"></Field>
                       </fieldset>
                       <button type="submit">save</button>
                   </Form>
                    )
                }
            </Formik>
           </div>
    )}
}
export default TodoComponent