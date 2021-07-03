import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css'
import FirstComponent from './components/exaples/FirstComponent';
import SecondComponent from './components/exaples/SecondComponent';
import ThirdComponent from './components/exaples/ThirdComponent';
 import Counter from './components/Counter/Counter';
import TodoApp from './components/todo/TodoApp'

class App extends Component {
  render() {
    return (
      <div className="App">
      {/*<Counter></Counter>*/}
      <TodoApp/>
       
      </div>
    );
  }
}
class LearningComponents extends Component {

  render() {
    return (
      <div className="App">
        hi 
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }

}




export default App;
