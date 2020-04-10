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
  handleClick = () => {
    alert('waas')
    console.log('hwllo')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>what should i do</button>
      </div>
    )
  }
}
class Options extends React.Component {
  handleRemoveAll() {
    alert('handel remov');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        <h3>Your options here</h3>
        {this.props.options.map((item, index) => <Option key={index} optionText="optional text bro"></Option>)}
      </div>
    )
  }
}
class Option extends React.Component {
  render() {
    return (
      <div>
        <h3>option {this.props.optionText}</h3>
      </div>
    )
  }
}


class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    console.log(e.target);
    const optionval = e.target.form.elements.option.value.trim();
    if (optionval) {
      alert(optionval);
    }
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" name="option"></input>
          <button type="submit" onClick={this.handleAddOption}>Add Option</button>
        </form>
      </div>
    )
  }
}
class IndecisionApp extends React.Component {
  render() {
    const title = "Pushpak";
    const subTitle = "This is the subtitle";
    const options = ['thing one', 'thing two', 'thing three'];
    return (
      <div>
        <Header title={title} subTitle={subTitle}></Header>
        <Action></Action>
        <Options options={options}></Options>
        <AddOption></AddOption>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp></IndecisionApp>,
  document.getElementById('root')
);
