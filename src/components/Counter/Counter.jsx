import React, { Component } from 'react';
import './Counter.css';


class Counter extends Component {

  constructor(){
    super();//without this can't cll this
    this.state= {
        counter: 0,
      
    } 
     this.increment = this.increment.bind(this);
     this.decrement = this.decrement.bind(this);
     this.reset = this.reset.bind(this);
} 

  render() {
    return (
      <div className="Counter">
       <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
       <CounterButton by = {5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
       <CounterButton by = {10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
       
       <span className="count" >{this.state.counter}</span>
       <div><button className="reset" onClick={this.reset}>reset</button></div>
      </div>
    );
  }
  reset() {
    
    this.setState( {counter:0}
    )
}
  increment(by) {
    //console.log(`increment from child-${by}`)
    this.setState((prevState) => {
       return {counter:prevState.counter + by}
    })
}
decrement(by) {
  //console.log(`increment from child-${by}`)
  this.setState((prevState) => {
     return {counter:prevState.counter - by}
  })
}
}

 class CounterButton extends Component{


   constructor(){
       super();//without this can't cll this
      //  this.state= {
      //      counter: 0,
         
      //  } 
      //   this.increment = this.increment.bind(this);
      //   this.decrement = this.decrement.bind(this);
   } 
    
     render() {
    return (
      <div className="Counter">
        <button onClick={() => this.props.incrementMethod(this.props.by)}> +{this.props.by}</button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}> -{this.props.by}</button>
        {/*<span className="count" >{this.state.counter}</span>*/}
        
      </div>
    );
  }
//   increment() {
//     this.setState({
//         counter: this.state.counter + this.props.by
//     })
//     this.props.incrementMethod(this.props.by);
// }
// decrement() {
//   this.setState({
//       counter: this.state.counter - this.props.by
//   })
//   this.props.decrementMethod(this.props.by);
// }
}
CounterButton.defaultProps = {
  by:1
}



  
  export default Counter;