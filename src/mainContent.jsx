import React, { Component } from "react";

class MainContent extends Component {
  handleClick = () => {
    const newValue = 0;
    this.props.onClick(newValue);
  };

  render() {
    return (
      <div className="App">
        <p className="topic">views</p>
        <p className="question">
          {this.props.data[this.props.variable].question}
        </p>
        <div>
          <div
            className="option"
            onClick={() => {
              this.props.validation(0);
            }}>
            <center className="option--text">
              {this.props.data[this.props.variable].options[0]}
            </center>
          </div>
          <div
            className="option"
            onClick={() => {
              this.props.validation(1);
            }}>
            <center className="option--text">
              {this.props.data[this.props.variable].options[1]}
            </center>
          </div>
          <div
            className="option"
            onClick={() => {
              this.props.validation(2);
            }}>
            <center className="option--text">
              {this.props.data[this.props.variable].options[2]}
            </center>
          </div>
          <div
            className="option"
            onClick={() => {
              this.props.validation(3);
            }}>
            <center className="option--text">
              {this.props.data[this.props.variable].options[3]}
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;
