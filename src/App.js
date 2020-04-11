/* eslint-disable no-useless-constructor */
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
class Header extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>hello {this.props.title}</h1>
        <h3>{this.props.subTitle}</h3>
      </div>
    );
  }
}

class Action extends React.Component {
  constructor(props){
    super(props);
  }
  handleClick = () => {
    alert('waas')
    console.log('hwllo')
  }
  render() {
    return (
      <div>
        <button 
        onClick={this.handleClick} 
        disabled={this.props.hasOptions}>what should i do</button>
      </div>
    )
  }
}
class Options extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    
  }
  
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        <h3>Your options here</h3>
        {this.props.options.map((item, index) => <Option key={index} optionText={item}></Option>)}
      </div>
    )
  }
}
class Option extends React.Component {
  render() {
    return (
      <div>
        <h3>option :{this.props.optionText}</h3>
      </div>
    )
  }
}


class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error : undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.form.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
  
    this.setState(()=>{
      return {error};
    })
  }
  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form>
          <input type="text" name="option"></input>
          <button type="submit" onClick={this.handleAddOption}>Add Option</button>
        </form>
      </div>
    )
  }
}
class IndecisionApp extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
        options : ['thing one', 'thing two', 'thing three'],
        error : ''
    }
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  }
  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options : []
      }
    })
  }
  handleAddOption(option){
    // console.log(option);
    if(option.length <1){
      return 'enter valid data'
    }
    else if(this.state.options.indexOf(option) > -1){
      return 'item already exists'
    }
    else {
    this.setState((prevState)=>{
      return {
        options: option.length > 0 ? prevState.options.concat(option) : prevState.options
      }
    })
  }
  }
  render() {
    const title = "Pushpak";
    const subTitle = "This is the subtitle";
    return (
      <div>
      <h1>{this.state.options.length}</h1>
        <Header title={title} subTitle={subTitle} ></Header>
        <Action hasOptions = {this.state.options.length >0} ></Action>
        <Options options={this.state.options} handleDeleteOptions = {this.handleDeleteOptions}></Options>
        <AddOption handleAddOption = {this.handleAddOption}></AddOption>
      </div>
    )
  }
}
ReactDOM.render(<IndecisionApp></IndecisionApp>,
  document.getElementById('root')
);
