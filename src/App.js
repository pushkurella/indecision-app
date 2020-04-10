import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  // let count =0;
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      count : 0
    };
  }
  addOne = () => {
    this.setState((prevState) =>{
      return {
        count : prevState.count+1
      }})
    
  };
  minusOne = () => {
    // this.setState({count: this.state.count-1})
    this.setState((prevState) => {
      return {
        count: prevState.count-1
      }
    })
    
  };
  reset = () => {
    this.setState(()=>{return {count: 0}})
    // this.setState({count : 0});
    // this.setState({count : this.state.count+1});
  };
  render() {
    return (
      <div>
        <h1> Count : {this.state.count} </h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}
ReactDOM.render(<Counter></Counter>, document.getElementById('root'));