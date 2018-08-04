import React, { Component } from 'react';
import './App.css';
import ImageBox from './image_box';
import SectionDisplay from './section_display'


export default class App extends Component {
  constructor(props){
    super(props);

    this.links = ["about-me", "resume", "projects", "skills", "greeting", "experience", "github", "email", "linkedin"];
    // this.links = ["About Me", "Resume", "Projects", "Skills", "Hi! I'm Melissa", "Experience", "GitHub", "Email", "LinkedIn"];
    this.linkNames = ["about-me", "resume", "projects", "skills", "experience", "github", "email", "linkedin"];

    // this.imageBox = this.imageBox.bind(this);
  }

  // imageBox() {  }

  render() {
    var subarray1 = this.links.slice(0,3);
    var subarray2 = this.links.slice(3,6);
    var subarray3 = this.links.slice(6,9);

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            {subarray1.map((link, i) => <ImageBox link={link} key={i} className="col-sm"/>)}
          </div>
          <div className="row">
            {subarray2.map((link, i) => <ImageBox link={link} key={i} className="col-sm"/>)}
          </div>
          <div className="row">
            {subarray3.map((link, i) => <ImageBox link={link} key={i} className="col-sm"/>)}
          </div>
        </div>

        {this.linkNames.map((name, i) => <SectionDisplay sectionName={name} key={i}/>)}

      </div>
    );
  }
}
