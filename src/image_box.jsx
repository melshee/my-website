import React, { Component } from 'react';
import pierPic from './images/pierPic.jpg';
import dino from './images/dino.jpg';
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
    this.linkToImg = { //to map link to image
      "About Me": hackDavis,
      "Resume": canyons,
      "Projects":  sky,
      "Skills": skiing, 
      "Hi! I'm Melissa":  null,
      "Experience": torreyPines, 
      "GitHub": pierPic, 
      "Email": zion,
      "LinkedIn": dino
    }
  }


  render() {
    // console.log(this.linkToImg[this.props.link]);
    var box;
    if(this.props.link !== "Hi! I'm Melissa") {
      box = <img src={this.linkToImg[this.props.link]} alt="Logo" className="image"/>
    } else {
      box = <div className="greeting"><h2>Hi! I'm Melissa </h2><span>(Hover over the images to learn more about me)</span></div>
    }
    return (
      <div className="image-box">
       {box}
      </div>
    );
  }
}
