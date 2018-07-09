import React, { Component } from 'react';
import './App.css';
import ImageBox from './image_box';

export default class App extends Component {
  constructor(props){
    super(props);
    this.links = ["About Me", "Resume", "Projects", "Skills", "Hi! I'm Melissa", "Experience", "GitHub", "Email", "LinkedIn"];
    // this.imageBox = this.imageBox.bind(this);
  }

  // imageBox() {  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <ImageBox link={this.links[0]} className="col-sm"></ImageBox>
            <ImageBox link={this.links[1]} className="col-sm"></ImageBox>
            <ImageBox link={this.links[2]} className="col-sm"></ImageBox>
          </div>
          <div className="row">
            <ImageBox link={this.links[3]} className="col-sm"></ImageBox>
            <ImageBox link={this.links[4]} className="col-sm"></ImageBox>
            <ImageBox link={this.links[5]} className="col-sm"></ImageBox>
          </div>
          <div className="row">
            <ImageBox link={this.links[6]} className="col-sm"></ImageBox>
            <ImageBox link={this.links[7]} className="col-sm"></ImageBox>
            <ImageBox link={this.links[8]} className="col-sm"></ImageBox>
          </div>
        </div>
      </div>
    );
  }
}
