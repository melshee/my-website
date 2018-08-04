import React, { Component } from 'react';
import pierPic from './images/pierPic.jpg';
import grad from './images/grad.jpg';
// import museum from './images/museum.jpg';
// import dino from './images/dino.jpg';
import sky from './images/sky.jpg';
import canyons from './images/canyons.jpg';
// import beach from './images/beach.jpg';
import torreyPines from './images/torreyPines.jpg';
// import chair from './images/chair.jpg';
import skiing from './images/skiing.jpg';
import hackDavis from './images/hackDavis.jpg';
import zion from './images/zion.jpg';


export default class ImageBox extends Component {
  constructor(props){
    super(props);
    this.entered = this.entered.bind(this);
    this.left = this.left.bind(this);

    this.state = {
      opacity: 1,
      showName: false
    };

    this.linkToImg = { //to map link to image
      "about-me": hackDavis,
      "resume": canyons,
      "projects":  grad,
      "skills": skiing, 
      "greeting":  null,
      "experience": torreyPines, 
      "github": pierPic, 
      "email": zion,
      "linkedin": sky
    }

    this.sectionIDToName = { //to map backend name of sections to the "pretty format"
      "about-me": "About Me",
      "resume": "Resume",
      "projects":  "Projects",
      "skills": "Skills", 
      "greeting": "Hi! I'm Melissa",
      "experience": "Experience", 
      "github": "GitHub", 
      "email": "Email",
      "linkedin": "LinkedIn"
    }
  }

  entered() {
    // console.log("HOVERING");
    this.setState({
      opacity: 0.4,
      showName: true
    })
  }

  left() {
    // console.log("LEAVING");
    this.setState({
      opacity: 1,
      showName: false
    })
  }

  render() {
    // console.log(this.linkToImg[this.props.link]);
    var box;
    var name = <h3 className="name-centered">{this.sectionIDToName[this.props.link]}</h3>;
    if(this.props.link !== "greeting") {
      box = 
      <div className="image-box" style={{opacity: this.state.opacity}} onMouseEnter={this.entered} onMouseLeave={this.left}>
        <div className="container">
          <a href={"#"+ this.props.link}> <img src={this.linkToImg[this.props.link]} alt="Logo" className="image"/> </a>
          {this.state.showName ? name : null}
        </div>
      </div>
    } else {
      box =
      <div className="greeting">
        <div id="greeting-text"><h2>Hi! I'm Melissa</h2></div> 
        <div>(Hover over the images to learn more about me)</div>
      </div>
    }


    return (
      <div>
        {box} 
      </div>     
    );
  }
}
