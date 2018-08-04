import React, { Component } from 'react';

import reactLogo from './images/logos/react.png';
import rorLogo from './images/logos/rubyonrails.png';
import cppLogo from './images/logos/cpp.png';
import javascriptLogo from './images/logos/javascript.png';
import htmlcssLogo from './images/logos/htmlcss.png';
import javaLogo from './images/logos/java.png';
import awsLogo from './images/logos/aws.png';
import postgresqlLogo from './images/logos/postgresql.png';
import pythonLogo from './images/logos/python.png';
import dockerLogo from './images/logos/docker.png';

export default class SectionDisplay extends Component {
  constructor(props){
    super(props);

    this.state = {

    };

    this.sectionIDToName = { //to map backend name of sections to the "pretty format"
      "about-me": "About Me",
      "resume": "Resume",
      "projects":  "Projects",
      "skills": "Skills", 
      "experience": "Experience", 
      "gitHub": "GitHub", 
      "email": "Email",
      "linkedIn": "LinkedIn"
    }
  }

  render() {
    let content = "content"

    if(this.props.sectionName == "about-me") {
      content = 
      <div id="about-me">
        <p>Currently a Ruby on Rails and React Fullstack Developer looking for full-time employment in the Bay Area.
             I'm an enthusiastic, hard-working team leader who strives to improve herself by working in a challenging and
             engaging environment.</p>
      </div>
    } else if(this.props.sectionName == "resume") {
      content =
      <div id="resume">
        <button> 
        <a href="/images/Melissa_Sheehan_Resume.docx" download="Melissa_Sheehan_Resume">Resume (.docx)
          {/*<img border="0" src="/images/myw3schoolsimage.jpg" alt="W3Schools" width="104" height="142"/> */}
        </a>
        </button>
        <button> 
        <a href="/images/Melissa_Sheehan_Resume.pdf" download="Melissa_Sheehan_Resume">Resume (.pdf)
          {/*<img border="0" src="/images/myw3schoolsimage.jpg" alt="W3Schools" width="104" height="142"/> */}
        </a>
        </button>
      </div>
    } else if(this.props.sectionName == "projects") {
      content = 
      <div id="projects">
        <p>KnowYourStudents, Center for Educational Effectiveness</p>
        <p>Description</p>
        <p>Link</p>
        <p>CommunityText, Spectra Hackathon</p>
        <p>Description</p>
        <p>Link</p>
        <p>Time2Eat, Cal Hacks – UC Berkeley</p>
        <p>Description</p>
        <p>Link</p>
        <p>Photobooth Website, Web Programming Course</p>
        <p>Description</p>
        <p>Link</p>
        <p>Jaguar Journey, CSUSM Hackathon</p>
        <p>Description</p>
        <p>Link</p>
      </div>
    } else if(this.props.sectionName == "skills") {
      content = 
      <div id="skills">
        <img src={reactLogo} alt="React" width="150" height="100"/>
        <img src={rorLogo} alt="Ruby on Rails" width="150" height="100"/>
        <img src={cppLogo} alt="C/++" width="150" height="100"/>
        <img src={javascriptLogo} alt="JavaScript" width="150" height="100"/>
        <img src={htmlcssLogo} alt="HTML & CSS" width="150" height="100"/>
        <img src={javaLogo} alt="Java" width="150" height="100"/>
        <h4>Other Tools</h4>
        <img src={awsLogo} alt="AWS" width="150" height="100"/>
        <img src={postgresqlLogo} alt="PostgreSQL" width="150" height="100"/>
        <img src={pythonLogo} alt="Python" width="150" height="100"/>
        <img src={dockerLogo} alt="Docker" width="150" height="100"/>
      </div>
    } else if(this.props.sectionName == "experience") {
      content =
        <div id="experience">
          <p>CEE</p>
        </div>
    } else if(this.props.sectionName == "github") {
      content =
        <div id="github">
          <p>https://github.com/melshee</p>
        </div>
    } else if(this.props.sectionName == "email") {
      content = 
        <div id="email">
          <p>msheehan7@gmail.com</p>
        </div>
    } else if(this.props.sectionName == "linkedin") {
      content =
        <div id="linkedin">
          <p>https://www.linkedin.com/in/sheehanmelissa/</p>
        </div>
    }

    return (
      <div className="section-display">
          <h1>{this.sectionIDToName[this.props.sectionName]}</h1>
          {content}
      </div>     
    );
  }
}
